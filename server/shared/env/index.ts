// TODO: webpack aliased import not working on vercel serverless correctly
const localPortsConfig = {
  core: 4000,
  facebook: 4001,
  google: 4002,
  instagram: 4003,
  netflix: 4004,
  spotify: 4005,
};
export const localGatewayPort = 4100;

const baseUrl = process.env.VERCEL_URL;

export const serviceList = Object.entries(localPortsConfig).map(
  ([name, port]) => ({
    name,
    url: baseUrl ? `https://${baseUrl}/api/${name}` : `http://localhost:${port}`,
  })
);
