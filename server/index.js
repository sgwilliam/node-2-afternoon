const express = require("express");
const axios = require("axios");
const cors = require("cors");
const MessageCtrl = require("./controllers/message_controller")

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/../public/build'));



app.post("/api/messages", MessageCtrl.create);

app.get("/api/messages", MessageCtrl.read);

app.put("/api/messages/:id", MessageCtrl.update);

app.delete("/api/messages/:id", MessageCtrl.delete);



const port = 3001;
app.listen(port, () => {
  console.log("listening on port", port);
})
