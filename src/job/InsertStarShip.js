import StartShip from "../model/Starship";

class InsertStarShip {
  get key() {
    return "InsertStarShip";
  }

  async handle({ data }) {
    import "../config";

    const { results } = data;
    console.log(results[0].name);
    await StartShip.insertMany(results);
  }
}

export default new InsertStarShip();
