import dotenv from "dotenv";

dotenv.config();

export type NodeEnv = "development" | "production"

interface Config {
    port: number;
    nodeEnv: NodeEnv;
}

const config: Config = {
    port: Number(process.env.SERVER_PORT) || 3000,
    nodeEnv:( process.env.NODE_ENV || 'development') as NodeEnv
} as const;

export default config;