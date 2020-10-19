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

  async getDestination(destinationID: number): Promise<Destination> {
    const gotDestination = await Destination.findOne(destinationID);
    return gotDestination!;
  },

  async fetchTravelEvents(): Promise<TravelEvent[]> {
    return await TravelEvent.find();
  },

  async getTravelEvent(travelEventID: number): Promise<TravelEvent> {
    const gotTravelEvent = await TravelEvent.findOne(travelEventID);
    return gotTravelEvent!;
  },
};

export default genericModel;
