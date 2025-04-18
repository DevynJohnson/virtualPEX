export const getTTSAudio = async (text, voiceId) => {
    try {
        const url = 'https://api.sws.speechify.com/v1/audio/stream';
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_SPEECHIFY_API_KEY || 'grtFWSCfg5rH61kYBXb8X1Lk1CjxfmddF5MWuPa1Kks='}`,
                'Content-Type': 'application/json',
                'Accept': 'audio/mpeg'
            },
            body: JSON.stringify({
                input: text,
                voice_id: voiceId
            })
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Get the blob directly from the response
        const audioBlob = await response.blob();
        return audioBlob;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}
// This function is used to play the audio data returned from the TTS API
export const playAudio = async (audioBlob) => {
    try {
        // Create a URL for the blob
        const audioUrl = URL.createObjectURL(audioBlob);
        // Create and play the audio
        const audio = new Audio(audioUrl);
        // Clean up the URL object when done
        audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
        };
        await audio.play();
    } catch (error) {
        console.error('Error playing audio:', error);
    }
}