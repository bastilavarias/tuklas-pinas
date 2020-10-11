import nationalities from "./modules/nationalities";
import Nationality from "../entities/Nationality";
import Database from "../index";

const generateSeeds = async () => {
  const connection = await Database.init();
  await connection
    .createQueryBuilder()
    .insert()
    .into(Nationality)
    .values(nationalities)
    .onConflict(`("name") do nothing`)
    .execute();
};

generateSeeds()
  .then(() => console.log("Seeds was successfully generated."))
  .catch((error) => console.log(error));
