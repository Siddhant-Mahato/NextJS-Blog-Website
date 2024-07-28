import mongoose from "mongoose";

const connectToDB = async () => {

    const connectionUrl = "mongodb+srv://hellosid:hellosid@cluster0.pu7kfmb.mongodb.net/NextJsBlog";
    
    mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
