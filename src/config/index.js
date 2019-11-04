import Mongoose from "mongoose";

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = Mongoose.connect(
      "mongodb://localhost:27017/coletor",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}

export default new Database();
