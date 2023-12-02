// api/dalle.ts
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';


export async function POST(request: NextRequest) {
    // if (req.method !== 'POST') {
    //     res.status(405).json({ error: 'Method not allowed' });
    //     return;
    // }
    console.log({request})


    const prompt = await request.json()
    console.log({prompt})


    const openai = new OpenAI()




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
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}