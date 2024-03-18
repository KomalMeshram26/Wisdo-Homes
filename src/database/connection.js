// const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/wisdoHome', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// mongoose.connection.on("error", (err) => {
//   console.log("Mongoose Connection Error:", err);
// });

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose connected to database");
// });

// module.exports = mongoose;


const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/basic1');

mongoose.connect('mongodb://127.0.0.1:27017/wisdoHome',{
  useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose Connection Error", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});