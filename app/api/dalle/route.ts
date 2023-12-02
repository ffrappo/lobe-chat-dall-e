// app/api/dalle/route.ts

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {

    // if (req.method !== 'POST') {
    //     return new NextResponse('Method Not Allowed', { status: 405 });
    // }

    const body = await req.json();
    console.log({body})

    const openai = new OpenAI();

    try {
        const imageResponse = await openai.images.generate({
            model: "dall-e-3",
            prompt: body.prompt,
            n: 1,
            quality: 'hd',
            response_format: 'url',
            style: 'natural',
        });

        console.log({imageResponse})

        const image_url = imageResponse.data[0].url;

        return new NextResponse(JSON.stringify({ image_url }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return NextResponse.json({ error: "something went wrong" }, { status: 500 });
    }
}