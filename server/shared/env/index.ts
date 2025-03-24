export enum Service {
  Core = "core",
  Facebook = "facebook",
  Google = "google",
  Instagram = "instagram",
  Netflix = "netflix",
  Spotify = "spotify",
  Telegram = "telegram",
  Oura = "oura",
}

export const localPortsConfig: Record<Service, number> = {
  [Service.Core]: 4000,
  [Service.Facebook]: 4001,
  [Service.Google]: 4002,
  [Service.Instagram]: 4003,
  [Service.Netflix]: 4004,
  [Service.Spotify]: 4005,
  [Service.Telegram]: 4006,
  [Service.Oura]: 4007,
};

export const localGatewayPort = 4100;
export const localRestApiPort = 4101;

const baseUrl = process.env.VERCEL_URL;

// For Vercel deployment, we need to use a special configuration to allow
// the gateway to communicate with the subgraphs in a serverless environment
export const serviceList = Object.entries(localPortsConfig).map(
  ([name, port]) => ({
    name,
    url: baseUrl
      ? `https://${baseUrl}/api/${name}`
      : `http://localhost:${port}`,
    // This is a workaround for Vercel serverless environment
    // Since the gateway and subgraphs are all running in the same Vercel deployment
    // We need to add this header to allow introspection
    ...(baseUrl && {
      introspectionHeaders: {
        "x-internal-gateway": "true"
      }
    })
  })
);
