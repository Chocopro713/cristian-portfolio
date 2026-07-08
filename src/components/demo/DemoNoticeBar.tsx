import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DemoNoticeBar() {
  return (
    <div className="flex items-center justify-between gap-4 bg-slate-950 px-4 py-2 text-xs text-slate-400 sm:px-6">
      <Link
        href="/#projects"
        className="flex items-center gap-1.5 font-medium text-slate-200 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver al portfolio de Cristian Barbosa
      </Link>
      <span className="hidden sm:inline">Proyecto de ejemplo — diseño y desarrollo web a la medida</span>
    </div>
  );
}
