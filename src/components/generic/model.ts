import Nationality from "../../database/entities/Nationality";
import Sex from "../../database/entities/Sex";
import Destination from "../../database/entities/Destination";
import TravelEvent from "../../database/entities/TravelEvent";

const genericModel = {
  async fetchNationalities(): Promise<Nationality[]> {
    return await Nationality.find();
  },

  async fetchSexes(): Promise<Sex[]> {
    return await Sex.find();
  },

  async fetchDestinations(): Promise<Destination[]> {
    return await Destination.find();
  },

  async fetchTravelEvents(): Promise<TravelEvent[]> {
    return await TravelEvent.find();
  },
};

export default genericModel;
