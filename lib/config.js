import getConfig from "next/config";

const config = getConfig();

const { publicRuntimeConfig } = config;

export { publicRuntimeConfig };
export default config;
