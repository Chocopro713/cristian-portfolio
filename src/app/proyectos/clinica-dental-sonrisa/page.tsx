import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Stethoscope,
  Sparkles,
  SmilePlus,
  Syringe,
  ShieldCheck,
  Clock,
  Users,
  Quote,
  Phone,
  Mail,
  MapPin,
  CalendarCheck,
} from 'lucide-react';
import DemoNoticeBar from '@/components/demo/DemoNoticeBar';

export const metadata: Metadata = {
  title: 'Clínica Dental Sonrisa — Odontología Integral | Proyecto de ejemplo',
  description:
    'Sitio de ejemplo para una clínica dental, creado por Cristian Barbosa para mostrar cómo un consultorio de salud puede generar confianza y agendar citas en línea.',
  robots: { index: true, follow: true },
};

const servicios = [
  {
    icon: Sparkles,
    title: 'Limpieza Dental',
    description: 'Profilaxis profesional para mantener tus dientes y encías sanos todo el año.',
  },
  {
    icon: SmilePlus,
    title: 'Ortodoncia',
    description: 'Brackets tradicionales e invisibles para lograr la sonrisa alineada que quieres.',
  },
  {
    icon: Stethoscope,
    title: 'Blanqueamiento',
    description: 'Tratamientos seguros y efectivos para una sonrisa más blanca y luminosa.',
  },
  {
    icon: Syringe,
    title: 'Implantes Dentales',
    description: 'Recupera la funcionalidad y estética de tu sonrisa con implantes de alta calidad.',
  },
];

const stats = [
  { icon: Users, value: '5.000+', label: 'Pacientes atendidos' },
  { icon: ShieldCheck, value: '12 años', label: 'De trayectoria' },
  { icon: Clock, value: 'Mismo día', label: 'Citas de urgencia' },
];

const testimonios = [
  {
    quote: 'Le tenía pánico al dentista y en Sonrisa me trataron con muchísima paciencia. Hoy no dejo de sonreír.',
    author: 'Camila Torres',
    role: 'Paciente desde 2021',
  },
  {
    quote: 'El tratamiento de ortodoncia de mi hijo fue impecable, siempre explicando cada paso.',
    author: 'Jorge Salazar',
    role: 'Paciente desde 2019',
  },
];

export default function ClinicaDentalSonrisaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <DemoNoticeBar />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-teal-100">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold text-teal-900">
            <Stethoscope className="w-6 h-6 text-teal-600" />
            Clínica Dental <span className="text-teal-600">Sonrisa</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#servicios" className="hover:text-teal-700 transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-teal-700 transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-teal-700 transition-colors">Contacto</a>
          </div>
          <a
            href="#contacto"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            Agenda tu cita
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="container mx-auto relative px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
              Odontología integral para toda la familia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-teal-950">
              Sonríe con <span className="text-teal-600">confianza</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-lg">
              Cuidamos tu salud oral con tecnología moderna y un trato humano y cercano,
              en cada visita.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
              >
                <CalendarCheck className="w-5 h-5" />
                Agenda tu cita
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 rounded-full border border-teal-200 font-semibold text-teal-700 hover:border-teal-400 transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-white shadow-2xl border border-teal-100 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                <SmilePlus className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-teal-950 mb-1">98% de satisfacción</div>
              <p className="text-sm text-slate-500">Según encuestas a nuestros pacientes en el último año</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-950 mb-4">Nuestros Servicios</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Tratamientos completos para cuidar tu sonrisa en cada etapa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-teal-100 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-teal-950 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="w-6 h-6 mx-auto mb-3 text-teal-100" />
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-teal-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-950">Nuestros pacientes opinan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonios.map((t) => (
              <div key={t.author} className="rounded-2xl bg-teal-50/50 border border-teal-100 p-8">
                <Quote className="w-8 h-8 text-teal-400 mb-4" />
                <p className="text-slate-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="font-semibold text-teal-950">{t.author}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu mejor sonrisa está a una cita de distancia
          </h2>
          <p className="text-teal-200 mb-8 max-w-xl mx-auto">
            Agenda una valoración inicial y arma junto a nuestro equipo el plan ideal para ti.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-full bg-teal-500 text-teal-950 font-semibold hover:bg-teal-400 transition-colors"
          >
            Agendar valoración
          </a>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-white border-t border-teal-100 text-slate-500 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-teal-600 mt-0.5" />
              <div>
                <div className="text-teal-950 font-semibold">Teléfono</div>
                <div className="text-sm">+57 (1) 555 0143</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-teal-600 mt-0.5" />
              <div>
                <div className="text-teal-950 font-semibold">Email</div>
                <div className="text-sm">citas@clinicasonrisa.com.co</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-600 mt-0.5" />
              <div>
                <div className="text-teal-950 font-semibold">Consultorio</div>
                <div className="text-sm">Bucaramanga, Colombia</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-teal-100 text-center text-sm">
            © {new Date().getFullYear()} Clínica Dental Sonrisa · Proyecto de ejemplo diseñado y desarrollado por{' '}
            <Link href="/#contact" className="text-teal-600 hover:underline">Cristian Barbosa</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
