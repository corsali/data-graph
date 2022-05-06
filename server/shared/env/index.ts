export enum Service {
  Core = "core",
  Facebook = "facebook",
  Google = "google",
  Instagram = "instagram",
  Netflix = "netflix",
  Spotify = "spotify",
  Sanity = "sanity",
}

export const localPortsConfig: Record<Service, number> = {
  [Service.Core]: 4000,
  [Service.Facebook]: 4001,
  [Service.Google]: 4002,
  [Service.Instagram]: 4003,
  [Service.Netflix]: 4004,
  [Service.Spotify]: 4005,
  [Service.Sanity]: 4006,
};

export const localGatewayPort = 4100;
export const localRestApiPort = 4101;

const baseUrl = process.env.VERCEL_URL;

export const serviceList = Object.entries(localPortsConfig).map(
  ([name, port]) => ({
    name,
    url: baseUrl
      ? `https://${baseUrl}/api/${name}`
      : `http://localhost:${port}`,
  })
);
