import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URL);
        if (res) {
            console.log("Connected successfully");
        }
    } catch (error) {
        console.error("Connection failed:", error);
    }
};

