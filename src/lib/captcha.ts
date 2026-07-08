import { createHmac, timingSafeEqual } from 'crypto';

const TOKEN_TTL_MS = 10 * 60 * 1000; // 10 minutes

function getSecret(): string {
  const secret = process.env.CONTACT_CAPTCHA_SECRET;
  if (!secret) {
    throw new Error('CONTACT_CAPTCHA_SECRET no está configurado en las variables de entorno');
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac('sha256', getSecret()).update(payload).digest('hex');
}

export interface CaptchaChallenge {
  question: string;
  token: string;
}

export function generateChallenge(): CaptchaChallenge {
  const a = Math.floor(Math.random() * 8) + 2; // 2-9
  const b = Math.floor(Math.random() * 8) + 2; // 2-9
  const answer = a + b;
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const payload = `${answer}.${expiresAt}`;
  const signature = sign(payload);
  const token = Buffer.from(`${payload}.${signature}`).toString('base64url');

  return {
    question: `¿Cuánto es ${a} + ${b}?`,
    token,
  };
}

export function verifyChallenge(token: string | undefined, userAnswer: string | undefined): boolean {
  if (!token || !userAnswer) return false;

  let decoded: string;
  try {
    decoded = Buffer.from(token, 'base64url').toString('utf-8');
  } catch {
    return false;
  }

  const parts = decoded.split('.');
  if (parts.length !== 3) return false;
  const [answer, expiresAt, signature] = parts;

  const payload = `${answer}.${expiresAt}`;
  const expectedSignature = sign(payload);

  const signatureBuffer = Buffer.from(signature, 'hex');
  const expectedBuffer = Buffer.from(expectedSignature, 'hex');
  if (signatureBuffer.length !== expectedBuffer.length) return false;
  if (!timingSafeEqual(signatureBuffer, expectedBuffer)) return false;

  if (Date.now() > Number(expiresAt)) return false;

  return userAnswer.trim() === answer;
}
