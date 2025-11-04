const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://neldneily_db_user:B0E3hVdqjXENRvJN@cluster0.pie7gzs.mongodb.net/tickethack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))

  .catch((error) => console.error(error));
