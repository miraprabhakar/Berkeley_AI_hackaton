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
export * from "./models/User";
export * from "./models/Session";
export * from "./models/Message";
export * from "./models/Chat";
/**
* A map of connection name to instantiated connection objects for the app.
*/
declare let connections: AppConnections;
/**
 * An instance of the Gadget logger
 */
declare let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { api, logger, connections };
