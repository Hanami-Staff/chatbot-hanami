import express from "express";
import axios from "axios";

const sendMessage = () => {
  const app = express();
  app.use(express.json());

  app.post("/chatbot-hanami", async (req, res) => {
    const { text } = req.body;
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3",
      prompt: text,
      stream: false,
    });

    const responseData = response.data.response.toString();
    res.send(responseData);
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

export default sendMessage;