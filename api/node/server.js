const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Pusher = require("pusher");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: "1802527",
  key: "b0ff63e2122eab6ada15",
  secret: "c94c38ef86c14516616f",
  cluster: "ap2",
  useTLS: true,
});

// Define a route for the root URL
app.get("/", (req, res) => {
  res.json(["Hello, world!" ]);
});

// Define the /new-message route
app.post("/new-message", (req, res) => {
  // Logic for handling the new message
console.log(req.body)
  pusher
    .trigger("dal3oona", "new-message-event", req.body)
    .then(() => res.status(200).send("Message sent and broadcasted"))
    .catch((error) => res.status(500).send("Error sending message"));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
