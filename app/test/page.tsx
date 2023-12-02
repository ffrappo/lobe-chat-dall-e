'use client';

import React, { useState } from 'react';
import '../globals.css'

const TestDalle = () => {
    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/dalle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            if (response.ok) {
                setImageUrl(data.image_url);
            } else {
                setError(data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Failed to fetch image');
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col items-center justify-center flex-grow bg-gray-100">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Image Generator</h1>
                    <p className="text-lg text-gray-600">Enter a description and generate an image</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <input 
                        type="text" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        className="border border-gray-300 p-4 rounded w-full mb-4"
                        placeholder="Enter a description"
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-full text-lg transition duration-200"
                        disabled={loading}
                    >
                        Generate Image
                    </button>
                </form>

                {error && <p className="mt-4 text-red-500">{error}</p>}
            </div>

            {loading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
                </div>
            )}

            {imageUrl && (
                <div className="flex items-center justify-center p-4">
                    <img src={imageUrl} alt="Generated from DALL-E" className="rounded-lg shadow-xl max-w-full h-auto" />
                </div>
            )}
        </div>
    );
};

export default TestDalle;
