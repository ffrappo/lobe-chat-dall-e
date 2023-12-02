// api/dalle/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { serialize } from 'v8';

export const runtime = "experimental-edge"

export default async function handler(request: NextRequest) {
    console.log({request})
    if (request.method !== 'POST') {
        return new NextResponse(null, { status: 405, statusText: 'Method Not Allowed' + serialize(request) });
    }

    const prompt = await request.json();

    const openai = new OpenAI();

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt.message,
            n: 1,
            size: "1024x1024",
            quality: 'hd',
        });
        const image_url = response.data[0].url;

        return NextResponse.json({ image_url });
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}