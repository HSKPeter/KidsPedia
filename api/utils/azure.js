// https://learn.microsoft.com/en-us/azure/developer/javascript/tutorial/convert-text-to-speech-cognitive-services

const sdk = require('microsoft-cognitiveservices-speech-sdk');
const { Buffer } = require('buffer');
const { PassThrough } = require('stream');

require('dotenv').config()

const AZURE_RESOURCE_KEY = process.env.AZURE_RESOURCE_KEY
const AZURE_RESOURCE_REGION = "eastus"

/**
 * Node.js server code to convert text to speech
 * @returns stream
 * @param {*} text text to convert to audio/speech
 */
const textToSpeech = async (text) => {

    // convert callback function to promise
    return new Promise((resolve, reject) => {

        const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_RESOURCE_KEY, AZURE_RESOURCE_REGION);
        speechConfig.speechSynthesisOutputFormat = 5; // mp3

        let audioConfig = null;

        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

        synthesizer.speakTextAsync(
            text,
            result => {

                const { audioData } = result;

                synthesizer.close();

                // return stream from memory
                const bufferStream = new PassThrough();
                bufferStream.end(Buffer.from(audioData));
                resolve(bufferStream);
            },
            error => {
                synthesizer.close();
                reject(error);
            });
    });
};

module.exports = {
    textToSpeech
};