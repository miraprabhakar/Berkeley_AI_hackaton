/**
* This is the Gadget API client library for:
*
*                               _
*   ___  ___  _ __   __ _  __ _| |_ _ __ ___  _ __
*  / __|/ _ \| '_ \ / _` |/ _` | __| '__/ _ \| '_ \
*  \__ \ (_) | | | | (_| | (_| | |_| | | (_) | | | |
*  |___/\___/|_| |_|\__, |\__,_|\__|_|  \___/|_| |_|
*                   |___/
*
* Built for environment "Development" at version 7
* API docs: https://docs.gadget.dev/api/songatron
* Edit this app here: https://songatron.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
        };
    }
}
