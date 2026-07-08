import { NextResponse } from 'next/server';
import { generateChallenge } from '@/lib/captcha';

export async function GET() {
  try {
    const challenge = generateChallenge();
    return NextResponse.json(challenge);
  } catch (error) {
    console.error('Captcha challenge error:', error);
    return NextResponse.json(
      { error: 'No se pudo generar la verificación' },
      { status: 500 }
    );
  }
}
