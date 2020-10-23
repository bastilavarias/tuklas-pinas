import { getConnectionOptions, createConnection } from "typeorm";

export default {
  async init() {
    const options = await getConnectionOptions(
      process.env.NODE_ENV || "development"
    );
    return createConnection({ ...options, name: "default" });
  },
};
