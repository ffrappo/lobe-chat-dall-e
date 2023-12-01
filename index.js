// Import necessary modules and dependencies
const axios = require('axios');
const FormData = require('form-data');

// OpenAI API key (replace with your actual API key)
const OPENAI_API_KEY = 'your-openai-api-key';

// Function to generate DALL-E 3 images using OpenAI API
// Function to generate DALL-E 3 images using OpenAI API
async function generateDalleImage(prompt) {
    const data = new FormData();
    data.append('prompt', prompt);

    try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', data, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                ...data.getHeaders()
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error generating image:', error);
        return null;
    }
}

// Lobe Chat Plugin definition
const plugin = {
    name: 'DALL-E 3 Image Generator',
    description: 'Generates images based on prompts using DALL-E 3.',
    version: '1.0.0',
    author: 'ffrappo',
    onMessage: async ({ message, sendMessage }) => {
        // Check if the message is a command to generate an image
        if (message.text.startsWith('!dalle ')) {
            const prompt = message.text.substring(7); // Extract prompt from message
            const imageResponse = await generateDalleImage(prompt);
            if (imageResponse && imageResponse.data && imageResponse.data.length > 0) {
                // Send the generated image URL as a message
                const imageUrl = imageResponse.data[0].url;
                await sendMessage({ text: imageUrl });
            } else {
                // Send an error message if image generation failed
                await sendMessage({ text: 'Sorry, I could not generate an image for that prompt.' });
            }
        }
    }
};

module.exports = plugin;