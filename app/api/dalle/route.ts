// app/api/dalle/route.ts

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export default async function handler(req: NextRequest) {
    if (req.method !== 'POST') {
        return new NextResponse('Method Not Allowed', { status: 405 });
    }

    const body = await req.json();
    const openai = new OpenAI();

    try {
        const imageResponse = await openai.images.generate({
            model: "dall-e-3",
            prompt: body.message
        });

        const image_url = imageResponse.data[0].url;

        return new NextResponse(JSON.stringify({ image_url }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}