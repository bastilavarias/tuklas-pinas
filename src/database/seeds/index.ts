import Database from "../index";
import Nationality from "../entities/Nationality";
import Sex from "../entities/Sex";
import nationalities from "./modules/nationalities";
import sexes from "./modules/sexes";
import Destination from "../entities/Destination";
import destinations from "./modules/destinations";
import TravelEvent from "../entities/TravelEvent";
import travelEvents from "./modules/travelEvents";

const generateSeeds = async () => {
  const connection = await Database.init();
  await connection
    .createQueryBuilder()
    .insert()
    .into(Nationality)
    .values(nationalities)
    .onConflict(`("name") do nothing`)
    .execute();
  await connection
    .createQueryBuilder()
    .insert()
    .into(Sex)
    .values(sexes)
    .onConflict(`("name") do nothing`)
    .execute();
  await connection
    .createQueryBuilder()
    .insert()
    .into(Destination)
    .values(destinations)
    .onConflict(`("name") do nothing`)
    .execute();
  await connection
    .createQueryBuilder()
    .insert()
    .into(TravelEvent)
    .values(travelEvents)
    .onConflict(`("name") do nothing`)
    .execute();
};

generateSeeds()
  .then(() => console.log("Seeds was successfully generated."))
  .catch((error) => console.log(error));
