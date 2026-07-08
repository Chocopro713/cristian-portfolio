import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wrench,
  Gauge,
  Disc,
  SprayCan,
  Clock,
  ShieldCheck,
  Star,
  Phone,
  MapPin,
  Mail,
  CalendarCheck,
} from 'lucide-react';
import DemoNoticeBar from '@/components/demo/DemoNoticeBar';

export const metadata: Metadata = {
  title: 'Taller Mecánico Rodríguez — Servicio Automotriz | Proyecto de ejemplo',
  description:
    'Sitio de ejemplo para un taller mecánico, creado por Cristian Barbosa para mostrar cómo un negocio automotriz puede atraer y agendar clientes desde la web.',
  robots: { index: true, follow: true },
};

const servicios = [
  {
    icon: Wrench,
    title: 'Mantenimiento Preventivo',
    description: 'Cambio de aceite, filtros y revisión general para que tu vehículo no te falle cuando más lo necesitas.',
  },
  {
    icon: Gauge,
    title: 'Diagnóstico Computarizado',
    description: 'Escaneo electrónico de última generación para detectar fallas antes de que se conviertan en un problema mayor.',
  },
  {
    icon: Disc,
    title: 'Frenos y Suspensión',
    description: 'Revisión, cambio de pastillas y ajuste de suspensión para que manejes con total seguridad.',
  },
  {
    icon: SprayCan,
    title: 'Latonería y Pintura',
    description: 'Reparación de carrocería y pintura con acabado de fábrica, como si el golpe nunca hubiera pasado.',
  },
];

const marcas = ['Chevrolet', 'Renault', 'Mazda', 'Toyota', 'Kia', 'Ford', 'Nissan', 'Hyundai'];

const stats = [
  { icon: ShieldCheck, value: '18 años', label: 'De experiencia' },
  { icon: Star, value: '4.9/5', label: 'Calificación de clientes' },
  { icon: Clock, value: '45 min', label: 'Tiempo promedio de diagnóstico' },
];

export default function TallerMecanicoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <DemoNoticeBar />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur border-b border-neutral-800">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-black uppercase tracking-tight">
            <Wrench className="w-6 h-6 text-orange-500" />
            Taller <span className="text-orange-500">Rodríguez</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-neutral-400">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#marcas" className="hover:text-white transition-colors">Marcas</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <a
            href="#contacto"
            className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-neutral-950 hover:bg-orange-400 transition-colors"
          >
            Agenda tu cita
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 2px, transparent 14px)',
          }}
        />
        <div className="container mx-auto relative px-6 py-28 text-center">
          <span className="inline-block px-4 py-1.5 rounded-md bg-orange-500/10 text-orange-400 text-sm font-bold uppercase tracking-wide mb-6 border border-orange-500/20">
            Mecánica automotriz de confianza
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            Tu carro, en las <span className="text-orange-500">mejores manos</span>
          </h1>
          <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
            Más de 18 años reparando y manteniendo vehículos en la ciudad.
            Diagnóstico honesto, repuestos de calidad y trabajo garantizado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contacto"
              className="flex items-center gap-2 px-8 py-4 rounded-md bg-orange-500 text-neutral-950 font-bold uppercase tracking-wide hover:bg-orange-400 transition-colors"
            >
              <CalendarCheck className="w-5 h-5" />
              Agenda tu cita
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 rounded-md border border-neutral-700 font-bold uppercase tracking-wide hover:border-neutral-500 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Nuestros Servicios</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Todo lo que tu vehículo necesita, en un solo lugar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="w-6 h-6 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-black mb-1">{s.value}</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Marcas */}
      <section id="marcas" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Marcas que atendemos</h2>
          <p className="text-neutral-400 mb-12 max-w-xl mx-auto">
            Técnicos certificados para trabajar con las marcas más populares del mercado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {marcas.map((marca) => (
              <span
                key={marca}
                className="px-6 py-3 rounded-md bg-neutral-900 border border-neutral-800 font-semibold text-neutral-300"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-neutral-950 mb-4">
            ¿Tu carro necesita una revisión?
          </h2>
          <p className="text-neutral-900/80 mb-8 max-w-xl mx-auto font-medium">
            Agenda tu cita hoy y recibe un diagnóstico inicial sin costo.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-md bg-neutral-950 text-white font-bold uppercase tracking-wide hover:bg-neutral-800 transition-colors"
          >
            Agendar ahora
          </a>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Teléfono</div>
                <div className="text-sm">+57 (4) 555 0198</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-sm">agenda@tallerrodriguez.com.co</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Dirección</div>
                <div className="text-sm">Medellín, Colombia</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-800 text-center text-sm">
            © {new Date().getFullYear()} Taller Mecánico Rodríguez · Proyecto de ejemplo diseñado y desarrollado por{' '}
            <Link href="/#contact" className="text-orange-500 hover:underline">Cristian Barbosa</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
