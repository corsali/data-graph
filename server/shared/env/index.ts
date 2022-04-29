// TODO: fix webpack aliased import not working on vercel serverless correctly
export enum Service {
  Core = "core",
  Facebook = "facebook",
  Google = "google",
  Instagram = "instagram",
  Netflix = "netflix",
  Spotify = "spotify",
}

export const localPortsConfig: Record<Service, number> = {
  core: 4000,
  facebook: 4001,
  google: 4002,
  instagram: 4003,
  netflix: 4004,
  spotify: 4005,
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
