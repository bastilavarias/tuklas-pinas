import genericModel from "./model";
import Nationality from "../../database/entities/Nationality";
import Sex from "../../database/entities/Sex";
import Destination from "../../database/entities/Destination";
import TravelEvent from "../../database/entities/TravelEvent";

const genericService = {
  async fetchNationalities(): Promise<Nationality[]> {
    return await genericModel.fetchNationalities();
  },

  async fetchSexes(): Promise<Sex[]> {
    return await genericModel.fetchSexes();
  },

  async fetchDestinations(): Promise<Destination[]> {
    return await genericModel.fetchDestinations();
  },

  async fetchTravelEvents(): Promise<TravelEvent[]> {
    return await genericModel.fetchTravelEvents();
  },
};

export default genericService;
