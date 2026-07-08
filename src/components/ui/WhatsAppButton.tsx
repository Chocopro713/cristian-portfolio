import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '573046317065';

interface WhatsAppButtonProps {
  message?: string;
  label: string;
  className?: string;
}

export default function WhatsAppButton({ message, label, className = '' }: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        'inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25'
      }
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
}
