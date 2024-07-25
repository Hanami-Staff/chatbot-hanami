import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

app.post("/chatbot-hanami", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  const model = "llama3"; 

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: model,
      prompt: prompt,
      stream: true,
    }, {
      responseType: 'stream'
    });

    response.data.on('data', (chunk) => {
      const data = JSON.parse(chunk.toString());
      if (data.response) {
        res.write(data.response);
      }
    });

    response.data.on('end', () => {
      res.end();
    });

    response.data.on('error', (error) => {
      console.error('Error in stream:', error);
      res.status(500).send("Error in streaming response");
    });

  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).send("Error generating response");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
