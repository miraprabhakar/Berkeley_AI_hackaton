export const AppTenancyKey = Symbol.for("gadget/appTenancy");

export type AppTenant = Partial<{
  shopify: Pick<ShopifyTenant, "shopId" | "customerId" | "currentSession">;
}>;

export type AppTenancy = Partial<{
  shopify: ShopifyTenant;
}>;

export type ShopifyTenant = {
  shopId: bigint;
  domain: string;
  accessToken: string;
  apiVersion: string;
  clientId: string;
  clientSecret: string;
  customerId?: string;
  currentSession?: {
    token: string;
    userId?: string;
  };
};
