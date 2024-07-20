// const mongoose = require("mongoose");
// const mongoURL =
//   "mongodb+srv://SavoryBite:FjJLpWsDReO8gCBu@cluster0.hjiyo31.mongodb.net/SavoryBite?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully");

//     // Fetch initial data from the 'FoodItems' collection
//     const fetched_data = mongoose.connection.db.collection("FoodItems");
//     const data = await fetched_data.find({}).toArray(function (err, data) {
//       const FoodCategory = mongoose.connection.db.collection("FoodCategory");
//       FoodCategory.find({}).toArray(function (err, catData) {
//         // console.log();
//         global.FoodItems = data;
//         global.FoodCategory = catData;
//       });
//     });
//     // console.log();
//     // global.FoodItems = data;
//     //console.log(global.FoodItems);
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//   }
// };
// mongoDB();

// module.exports = mongoDB;
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://SavoryBite:FjJLpWsDReO8gCBu@cluster0.hjiyo31.mongodb.net/SavoryBite?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
        
        // Fetch initial data from the 'FoodItems' collection
        const foodItemsCollection = mongoose.connection.db.collection("FoodItems");
        const foodCategoryCollection = mongoose.connection.db.collection("FoodCategory");

        const foodItemsData = await foodItemsCollection.find({}).toArray();
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();

        global.FoodItems = foodItemsData;
        global.FoodCategory = foodCategoryData;

        console.log("Data fetched successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

mongoDB();

module.exports = mongoDB;
