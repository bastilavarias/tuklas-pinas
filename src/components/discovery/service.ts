import {
  IDiscoveryCoordination,
  IDiscoveryServiceCreateInput,
} from "./typeDefs";

const discoveryService = {
  async create(
    coordination: IDiscoveryCoordination,
    authorID: number,
    input: IDiscoveryServiceCreateInput
  ) {
    console.log(coordination);
    console.log(authorID);
    console.log(input);
  },
};

export default discoveryService;
