import axios from "axios";
import cron from "node-cron";

import Queue from "./queue";
import InsertStarShip from "./job/InsertStarShip";

let count = 1;

const schedule = cron.schedule("*/10 * * * * *", async () => {
  try {
    const { data } = await axios.get(
      `https://swapi.co/api/starships/?page=${count}`
    );
    const { results } = data;

    await Queue.add(InsertStarShip.key, { results });
    console.log(count);
    count++;
  } catch (error) {
    schedule.destroy();
  }
});

schedule.start();
