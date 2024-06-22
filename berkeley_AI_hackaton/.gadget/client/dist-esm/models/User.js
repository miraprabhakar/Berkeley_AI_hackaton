import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultUserSelection = {
  "__typename": true,
  "createdAt": true,
  "email": true,
  "firstName": true,
  "googleImageUrl": true,
  "id": true,
  "lastName": true,
  "lastSignedIn": true,
  "roles": {
    "key": true,
    "name": true
  },
  "updatedAt": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "user";
const pluralApiIdentifier = "users";
async function signOutUser(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["signOut"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "signOutUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "user": {
        value: newVariables.user,
        required: false,
        type: "SignOutUserInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateUser(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateUser",
    DefaultUserSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "user": {
        value: newVariables.user,
        required: false,
        type: "UpdateUserInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteUser(id, options) {
  return await actionRunner(
    this,
    "deleteUser",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class UserManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "user",
          id,
          DefaultUserSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "user",
          id,
          DefaultUserSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "user",
        modelApiIdentifier: "user",
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds many user. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          "user",
          options
        );
      },
      {
        type: "findMany",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds the first matching user. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds the first matching user. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "users",
          DefaultUserSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * Finds one user by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "users",
          "id",
          value,
          DefaultUserSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "users",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultUserSelection
      }
    );
    /**
    * @deprecated The action signUp on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
    */
    this.signUp = (...args) => {
      throw new Error("The action signUp on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers");
    };
    /**
    * @deprecated The action signUp on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
    */
    this.bulkSignUp = (...args) => {
      throw new Error("The action signUp on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers");
    };
    /**
    * @deprecated The action signIn on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
    */
    this.signIn = (...args) => {
      throw new Error("The action signIn on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers");
    };
    /**
    * @deprecated The action signIn on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
    */
    this.bulkSignIn = (...args) => {
      throw new Error("The action signIn on model user does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers");
    };
    this.signOut = Object.assign(
      signOutUser,
      {
        type: "action",
        operationName: "signOutUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "user": {
            required: false,
            type: "SignOutUserInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkSignOut action with the given inputs.
    */
    this.bulkSignOut = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["signOut"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkSignOutUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkSignOut"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkSignOutUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkSignOutUsersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateUser,
      {
        type: "action",
        operationName: "updateUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultUserSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "user": {
            required: false,
            type: "UpdateUserInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
          this,
          "bulkUpdateUsers",
          DefaultUserSelection,
          "user",
          "users",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: DefaultUserSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateUsersInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteUser,
      {
        type: "action",
        operationName: "deleteUser",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: null,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkDeleteUsers",
          null,
          "user",
          "users",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteUsers",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "users",
        isBulk: true,
        defaultSelection: null,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
  }
}
export {
  DefaultUserSelection,
  UserManager
};
//# sourceMappingURL=User.js.map
