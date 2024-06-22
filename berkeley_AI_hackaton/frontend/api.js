import { Client } from "@gadget-client/songatron";

export const api = new Client({ environment: window.gadgetConfig.environment });
