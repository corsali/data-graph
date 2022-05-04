// export const baseGqlUrl = process.env.REACT_APP_API_URL;
export const baseGqlUrl = process.env.REACT_APP_TEMP_URL;
export const gqlEndpoint = `${baseGqlUrl}/api/gateway`;
export const availableCategoriesEndpoint =
  process.env.REACT_APP_CATEGORIES_API_URL || "";

export const isProd = process.env.NODE_ENV === "production";

export const logRocketId = process.env.REACT_APP_LOG_ROCKET_ID;
