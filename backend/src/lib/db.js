import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected: ", con.connection.host);
  } catch (error) {
    console.error("Error in Database Connection", error);
    process.exit(1);
  }
};
