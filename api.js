const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const wordLimitsForOpenAiResponse = 80


function generatePromptForOpenAI(keyword) {
  return `Please explain "what is ${keyword}" to a second-grade student in ${wordLimitsForOpenAiResponse} words`;
}

async function getExplanationFromOpenAI(keyword) {
  const prompt = generatePromptForOpenAI(keyword);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  const choices = response?.data?.choices

  return choices && choices.length > 0
    ? choices[0]?.text?.trim()
    : ""
}

app.use(bodyParser.json());

app.post("/api/search", async (req, res) => {
  const { keyword } = req.body;
  const text = await getExplanationFromOpenAI(keyword);
  res.json({ text });
})

const PORT = 8080;

function main() {
  app.listen(PORT, console.log(`listening on ${PORT}`));
}

setTimeout(main, 1000)
