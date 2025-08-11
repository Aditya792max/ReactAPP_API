const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 2000;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
     console.log("Server has started");
     console.log(`Server is running on port ${PORT}`);
});

app.post("/post", async (req, res) => {
     console.log(req.body);
     // res.status(200).json({ message: "Data received" });
     // This is known as de-structuring
     // const { data } = req.body;
     // if (data === "aditya") {
     //      res.send({ status: "Message Received" });
     // } else {
     //      res.send({ status: "Unknown User" });
     // }
     // res.send({ status: "Message Received" });
     try {
          const { data } = req.body;
          if (data === "aditya") {
               res.send({ status: "Message Received" });
          } else {
               res.send({ status: "Unknown User" });
          }
     } catch (error) {
          console.error("Error:", error);
          res.status(500).send({ status: "Something Went Wrong" });
     }

});
