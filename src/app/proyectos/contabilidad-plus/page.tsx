import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  FileText,
  Landmark,
  ClipboardCheck,
  Award,
  Clock,
  ShieldCheck,
  Users,
  Quote,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import DemoNoticeBar from '@/components/demo/DemoNoticeBar';

export const metadata: Metadata = {
  title: 'Contabilidad Plus — Asesoría Contable y Tributaria | Proyecto de ejemplo',
  description:
    'Sitio de ejemplo para una firma de contaduría, creado por Cristian Barbosa para mostrar cómo un negocio de servicios profesionales puede presentarse en la web.',
  robots: { index: true, follow: true },
};

const servicios = [
  {
    icon: FileText,
    title: 'Declaración de Renta',
    description: 'Preparación y presentación de tu declaración de renta personal y empresarial, sin sorpresas ni contratiempos.',
  },
  {
    icon: Users,
    title: 'Nómina y Seguridad Social',
    description: 'Liquidación de nómina, prestaciones sociales y aportes a seguridad social al día, cada mes.',
  },
  {
    icon: Landmark,
    title: 'Asesoría Tributaria',
    description: 'Planeación fiscal para que tu empresa pague lo justo y aproveche los beneficios tributarios disponibles.',
  },
  {
    icon: ClipboardCheck,
    title: 'Contabilidad Mensual',
    description: 'Estados financieros claros y a tiempo, para que tomes decisiones informadas sobre tu negocio.',
  },
];

const stats = [
  { icon: Award, value: '15+', label: 'Años de experiencia' },
  { icon: Users, value: '200+', label: 'Empresas asesoradas' },
  { icon: ShieldCheck, value: '100%', label: 'Cumplimiento normativo' },
  { icon: Clock, value: '24h', label: 'Tiempo de respuesta' },
];

const testimonios = [
  {
    quote: 'Desde que Contabilidad Plus lleva nuestra contabilidad dormimos tranquilos. Todo queda al día y las declaraciones nunca se atrasan.',
    author: 'Laura Méndez',
    role: 'Gerente, Distribuciones LM',
  },
  {
    quote: 'La asesoría tributaria nos ayudó a organizar la empresa y a entender exactamente en qué se nos iba el dinero.',
    author: 'Andrés Cárdenas',
    role: 'Fundador, Taller Cárdenas',
  },
];

export default function ContabilidadPlusPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <DemoNoticeBar />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Calculator className="w-6 h-6 text-amber-500" />
            Contabilidad<span className="text-amber-500">Plus</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-slate-900 transition-colors">Nosotros</a>
            <a href="#testimonios" className="hover:text-slate-900 transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-slate-900 transition-colors">Contacto</a>
          </div>
          <a
            href="#contacto"
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
          >
            Agenda una asesoría
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950" />
        <div className="container mx-auto relative px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
              Contadores Públicos Certificados
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tu contabilidad, <span className="text-amber-400">sin complicaciones</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Ayudamos a pequeñas y medianas empresas a mantener su contabilidad al día,
              cumplir con la DIAN y tomar mejores decisiones financieras.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="px-8 py-4 rounded-full bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors"
              >
                Agenda una asesoría gratis
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 rounded-full border border-slate-600 font-semibold hover:border-slate-400 transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white text-slate-900 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold">Resumen Financiero</span>
                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Al día</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Declaración de renta</span>
                  <span className="text-sm font-medium text-emerald-600">Presentada</span>
                </div>
                <div className="h-px bg-slate-100" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Nómina de octubre</span>
                  <span className="text-sm font-medium text-emerald-600">Liquidada</span>
                </div>
                <div className="h-px bg-slate-100" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Próxima obligación</span>
                  <span className="text-sm font-medium text-amber-600">IVA — 5 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Soluciones contables y tributarias para que tu negocio funcione sin sobresaltos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="nosotros" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="w-6 h-6 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonios.map((t) => (
              <div key={t.author} className="rounded-2xl bg-white border border-slate-200 p-8">
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-slate-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="font-semibold text-slate-900">{t.author}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ¿Listo para simplificar tu contabilidad?
          </h2>
          <p className="text-slate-800/80 mb-8 max-w-xl mx-auto">
            Agenda una asesoría gratuita de 30 minutos y cuéntanos qué necesita tu empresa.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            Agenda tu asesoría
          </a>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-sm">contacto@contabilidadplus.com.co</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <div className="text-white font-medium">Teléfono</div>
                <div className="text-sm">+57 (1) 555 0102</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <div className="text-white font-medium">Oficina</div>
                <div className="text-sm">Bogotá, Colombia</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            © {new Date().getFullYear()} Contabilidad Plus · Proyecto de ejemplo diseñado y desarrollado por{' '}
            <Link href="/#contact" className="text-amber-400 hover:underline">Cristian Barbosa</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
