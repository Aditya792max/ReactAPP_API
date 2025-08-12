const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 2000;
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
     console.log("Server has started");
     console.log(`Server is running on port ${PORT}`);
});




/*
// This is my first API Calling.....
app.post("/post",async (req, res) => {
     res.status(200).json({ message: "Data received" });
     // This is known as de-structuring
     const { data } = req.body;
     if (data === "aditya") {
          res.send({ status: "Message Received" });
     } else {
          res.send({ status: "Unknown User" });
     }
     res.send({ status: "Message Received" }); 
});
*/

// Connecting to MongoDB 

const mongoURL = "mongodb+srv://adityavikramkirtania1792:Aditya1234@cluster0.501zmvi.mongodb.net/"
// mongoose.connect(mongoURL, {
//      useNewUrlParser: true,
// }).then(() => {
//      console.log("Connected To DataBase");
// }).catch((error) => {
//      console.error("MongoDB connection error:", error);
// });



/*
We are not using the above code |^| since the useNewUrlParser option is deprecated.
This might get replaced in any major update to the Node.js.
*/



mongoose.connect(mongoURL)
     .then(() => {
          console.log("Connected To DataBase");
     })
     .catch((error) => {
          console.error("MongoDB connection error:", error);
     });

// This is the POST API calling 
app.post("/post", async (req, res) => {
     console.log(req.body);

     const My_data = {
          "name": "Aditya Vikram Kirtania",
          "age": 25,
          "location": "India"
     };

     try {
          const { data } = req.body;
          if (JSON.stringify(data) === JSON.stringify(My_data.name)) {
               res.send({ status: "Message Received" });

          } else {
               res.send({ status: "Unknown User" });
          }
     } catch (error) {
          console.error("Error:", error);
          res.status(500).send({ status: "Something Went Wrong" });
     }

});

// This is the GET API calling.

app.get("/get", async (req, res) => {
     try {
          // Simulate fetching data
          const data = {
               "name": "Aditya Vikram Kirtania",
               "age": 25,
               "location": "India"
          }
          res.status(200).json(data);
     } catch (error) {
          console.error("Error:", error);
          res.status(500).send({ status: "Something Went Wrong" });
     }
});

// This is the PUT API call
// A PUT API is generally used to update the existing data in the server.
app.put("/put", async (req, res) => {
     console.log(req.body);
     try {
          const { name, age, location } = req.body;
          // Simulate updating data
          const updatedData = {
               name: name || "Aditya Vikram Kirtaniaj",
               age: age || 25,
               location: location || "India"
          };
          res.status(200).json({ status: "Data Updated", data: updatedData });
     } catch (error) {
          console.error("Error:", error);
          res.status(500).send({ status: "Something Went Wrong" });
     }
});


