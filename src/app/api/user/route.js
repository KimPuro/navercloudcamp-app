/*
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
    try {
        // 외부 API에서 사용자 정보를 요청합니다.
        const response = await axios.get('https://api.example.com/users');
        return NextResponse.json(response.data);
    } catch (error) {
        // 에러 처리
        return NextResponse.json({ error: 'Failed to fetch data', details: error.message });
    }
}

export async function POST(req) {
    try {
        const requestBody = await req.json();  // 클라이언트로부터 데이터 받기
        const response = await axios.post('https://api.example.com/users', requestBody);
        return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
        // 에러 처리
        return new Response(JSON.stringify({ error: 'Failed to post data', details: error.message }), { status: 500 });
    }
}

*/
