// Authorization: Bearer <SPEECHIFY_API_KEY>
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export const getTTSAudio = async (text, voiceId) => {
    try {
        const url = 'https://api.speechify.com/v1/audio/speech';
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.SPEECHIFY_API_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'audio/mpeg'
            },
            body: JSON.stringify({
                input: text,
                voice_id: voice_Id
            })
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.audio_data; // Assuming the API returns audio data in this field
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}
// This function is used to play the audio data returned from the TTS API
export const playAudio = async (audioData) => {
    try {
        const audio = new Audio(audioData);
        audio.play();
    } catch (error) {
        console.error('Error playing audio:', error);
    }
}

/*
// Example usage of the getTTSAudio function
const text = "Hello, this is a test message.";
const voiceId = "your_voice_id"; // Replace with the desired voice ID  

playAudio(getTTSAudio(text, voiceId)))
*/