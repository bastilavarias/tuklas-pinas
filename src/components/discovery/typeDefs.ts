export interface IDiscoveryCoordination {
  latitude: any;
  longitude: any;
}

export interface IDiscoveryServiceCreateInput {
  files: Express.Multer.File[];
  text: string;
  rating: number;
}
