import mongoose from "mongoose";

/**
 * connect to the db with connection string as param
 */
export default (database: string) => {
  const connect = () => {
    mongoose
      .connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        return console.info(`Successfully connected to ${database}`);
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  }

  connect();

  mongoose.connection.on("disconnected", connect);
};

