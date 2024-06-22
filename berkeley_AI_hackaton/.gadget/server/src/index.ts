/**
* This is the Gadget server side types library for:
*
*                               _                   
*   ___  ___  _ __   __ _  __ _| |_ _ __ ___  _ __  
*  / __|/ _ \| '_ \ / _` |/ _` | __| '__/ _ \| '_ \ 
*  \__ \ (_) | | | | (_| | (_| | |_| | | (_) | | | |
*  |___/\___/|_| |_|\__, |\__,_|\__|_|  \___/|_| |_|
*                   |___/                           
*
* Built for environment `Development` at version 7
* Framework version: ^0.2.0
* Edit this app here: https://songatron.gadget.dev/edit
*/
import type { Client } from "@gadget-client/songatron";
import { Logger } from "./AmbientContext";

export * from "./metadataFileTypes";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
import { AppConnections } from "./AppConnections";
export * from "./auth";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./ActionOptions";
/**
 * @internal
 */
import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/User";
export * from "./models/Session";
export * from "./models/Message";
export * from "./models/Chat";

/**
* A map of connection name to instantiated connection objects for the app.
*/
let connections: AppConnections;

/**
 * An instance of the Gadget logger
 */
let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api: Client;

/**
* This is used internally to set the connections.
* @internal
*/
export const setConnections = (appConnections: AppConnections) => {
  connections = new Proxy(appConnections, {
    get: (target: any, prop: string) => {
      const actionContext = actionContextLocalStorage.getStore();
      if(actionContext && actionContext.connections) {
        return actionContext.connections[prop];
      }

      const routeContext = Globals.requestContext.get("requestContext");
      if(routeContext && routeContext.connections) {
        return routeContext.connections[prop];
      }

      return target[prop];
    }
  })
}

/**
 * This is used internally to set the rootLogger.
 * @internal
 */
export const setLogger = (rootLogger: Logger) => {
  Globals.logger = rootLogger;
  logger = rootLogger;
};

/**
 * This is used internally to set the client Instance
 * @internal
 */
export const setApiClient = (client: Client) => {
  api = client;
}

export {
  api, logger, connections
};

/**
 * @internal
 */
  export {
    Globals,
    actionContextLocalStorage
  };
