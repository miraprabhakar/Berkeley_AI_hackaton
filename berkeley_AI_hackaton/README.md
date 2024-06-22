# Chat-GPT clone

This app is a ChatGPT clone that passes text entered by signed-in users to [OpenAI's completions API](https://platform.openai.com/docs/api-reference/completions).

## Table of contents

- [App overview](#app-overview)
  - [Starter template](#starter-template)
  - [Connections](#connections)
  - [Data modeling + template overview](#data-modeling-template-overview)
    - [Template default models](#template-default-models)
  - [Environment variables](#environment-variables)
  - [Backend (actions + code)](#backend-actions-code)
  - [Access roles + API permissions](#access-roles-api-permissions)
  - [Frontend](#frontend)
- [Extending this template](#extending-this-template)
- [Questions?](#questions)

## App overview

### Starter template

This app is built using the **AI app** starter template.

### Connections

This app makes use of the OpenAI connection. It is current using Gadget-provided OpenAI credentials. Each team using Gadget gets $50 of free OpenAI credits to use when developing apps. You should use your own OpenAI API key before deploying to production (Connections --> OpenAI).

### Data modeling + template overview

- `chat`
  - captures a series of messages between a `user` and ChatGPT (relationship: `chat` belongs to `user`)
  - includes `name` field which is an OpenAI-generated summary of the first message sent by the `user`
  - each `chat` record is made up of many messages (relationship: `chat` has many `message`)
- `message`
  - used to store individual messages that make up a `chat` (relationship: `message` belongs to `chat`)
  - includes `content` of the message, `order` to manage the order of the message in context of the entire chat, and `role` enum (system, user, or assistant)
  - the `order` field is a number type, and is uniquely scoped against the parent `chat` (ie. `order` must be unique for each message in a single `chat`)

#### Template default models

- `user`
   - keeps track of all users who have signed up
   - users can also have one or more `chat` records (relationship: `user` has many `chat`) 
- `session`
  - keeps track of user sessions

### Environment variables

No environment variables are used for this app.

Gadget-managed Google Auth credentials are being used, and should be turned off in `routes/+auth.js` before deploying to production. The `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` environment variables can be used to manage your own auth.

### Backend (actions + code)

**chat** model
- `chat/create.js`
  - custom code has been added to `run()` to pull the user id from `session` if there is no `user` present on the incoming record
- `chat/name.js`
  - a custom action added to the `chat` model
  - sends a prompt to OpenAI (using the OpenAI connection) that summarizes the initial message in order to assign a 3-5 word `name` to the chat
  - has `firstMessage` as a custom string param

**routes**
- `routes/POST-chat.js`
  - sends messages in chat to OpenAI's completion API (using the OpenAI connection) and streams a response back to the frontend using [Gadget's `openAIResponseStream` tool](https://docs.gadget.dev/reference/gadget-server#openairesponsestream)
  - creates a new `message` record containing the reponse from OpenAI, and links to the current `chat`
  - requires `chatId` and `messages` (an array of message records) as part of the request body

### Access roles + API permissions

- `unauthenticated`
  - no access is granted to unauthenticated users, you must be signed-in to use the tool
- `signed-in`
  - can `read` and `create` records for `message`, custom Gelly tenancy filter applied to the `read` call so a user can only read their own messages
  - full access granted to `chat` model, custom Gelly filter applied to all actions other than `create` so users can only read and modify their own `chat` records

### Frontend

The [Chakra UI](https://chakra-ui.com/) component library has been installed in `package.json` and is used to build the frontend.

The [`nanoid` package](https://github.com/ai/nanoid) has also been installed and is used to generate ids for messages.

The `frontend` file structure looks like:

- `assets`: contains `google.svg` image for sign-in button
- `components`: contains frontend components used on pages
  - use the `useChat` hook (see `frontend/hooks/useChat.jsx`) to communicate with the backend
- `hooks`: contains the implementation of a `useChat` hook that provides an interface used to communicate with the backend
  - a `ChatProvider` is created that uses a [React context](https://react.dev/learn/passing-data-deeply-with-context) in order manage all commmunication with the server (the `/chat` route, `message` actions, and `chat` actions)
  - frontend state is also managed using a [React reducer](https://react.dev/learn/scaling-up-with-reducer-and-context)
- `lib`: contains a `utils.js` file that provides a grouping function for dates, which is used to group chats by date in the left nav of the app
- `routes`: contains frontend route definitions
  - `index.jsx`: the default frontend route that only is shown to `unauthenticated` users and only contains a sign-in button
  - `chat.jsx`: the route file displayed for `signed-in` users and contains all components used to build a ChatGPT clone
- `App.jsx`: the app entry point
  - defines a `router` using [`react-router-dom`](https://reactrouter.com/en/main), which includes use of Gadget's [`SignedOutOrRedirect`](https://docs.gadget.dev/reference/react#signedoutorredirect-) and [`SignedInOrRedirect`](https://docs.gadget.dev/reference/react#signedinorredirect-) auth tooling 

## Extending this template

The `useChat` hook is a handy resource that can be used as a model for other chat applications! Feel free to copy and modify as needed.

Before deploying your app to production, you should:
- enter your own OpenAI API keys into the OpenAI connection (Connections --> OpenAI --> Edit API keys icon --> Use your own API keys)
- use your own [Google OAuth credentials](https://docs.gadget.dev/guides/authentication/google-oauth) instead of the default Gadget-managed credentials
  - you also need to go into `routes/+auth.js` and set `gadgetManagedCredentials: false,`

## Questions?

Join our [developer Discord](https://ggt.link/discord) if you have any questions about this template or Gadget!