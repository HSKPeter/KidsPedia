const { Configuration, OpenAIApi } = require("openai");

require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const wordLimitsForOpenAiResponse = 80

function generatePromptForOpenAI(keyword) {
  return `Explain "what is ${keyword}" to a second-grade student in ${wordLimitsForOpenAiResponse} words, in a really simple way.  It would be nice if you could use metaphor as well.`;
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

module.exports = {
    generatePromptForOpenAI,
    getExplanationFromOpenAI
}