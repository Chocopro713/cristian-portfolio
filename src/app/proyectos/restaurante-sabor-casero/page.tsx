import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Phone,
  Mail,
  Soup,
  Beef,
  Salad,
  IceCreamCone,
  Star,
} from 'lucide-react';
import DemoNoticeBar from '@/components/demo/DemoNoticeBar';

export const metadata: Metadata = {
  title: 'Sabor Casero — Comida Casera de Verdad | Proyecto de ejemplo',
  description:
    'Sitio de ejemplo para un restaurante familiar, creado por Cristian Barbosa para mostrar cómo un negocio gastronómico puede mostrar su menú y recibir reservas en línea.',
  robots: { index: true, follow: true },
};

const menu = [
  {
    icon: Soup,
    name: 'Sancocho de Gallina',
    description: 'Caldo tradicional con gallina criolla, papa, yuca y mazorca.',
    price: '$28.000',
  },
  {
    icon: Beef,
    name: 'Bandeja Paisa',
    description: 'Frijoles, arroz, carne molida, chicharrón, chorizo, arepa y aguacate.',
    price: '$32.000',
  },
  {
    icon: Salad,
    name: 'Ensalada de la Casa',
    description: 'Mix de vegetales frescos, pollo a la plancha y aderezo de la abuela.',
    price: '$22.000',
  },
  {
    icon: IceCreamCone,
    name: 'Postre del Día',
    description: 'Pregúntale a tu mesero por la delicia casera de hoy.',
    price: '$10.000',
  },
];

const ambiente = [
  { title: 'Salón Principal', gradient: 'from-amber-800/40 to-amber-950/60' },
  { title: 'Terraza', gradient: 'from-emerald-800/40 to-emerald-950/60' },
  { title: 'Barra', gradient: 'from-orange-800/40 to-orange-950/60' },
];

export default function RestauranteSaborCaseroPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-stone-800">
      <DemoNoticeBar />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-[#fdf6ec]/95 backdrop-blur border-b border-stone-200">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            <UtensilsCrossed className="w-6 h-6 text-emerald-800" />
            Sabor Casero
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#menu" className="hover:text-stone-900 transition-colors">Menú</a>
            <a href="#ambiente" className="hover:text-stone-900 transition-colors">Ambiente</a>
            <a href="#contacto" className="hover:text-stone-900 transition-colors">Contacto</a>
          </div>
          <a
            href="#contacto"
            className="rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 transition-colors"
          >
            Reserva tu mesa
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-[#fdf6ec] to-emerald-100/40" />
        <div className="container mx-auto relative px-6 py-28 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800/10 text-emerald-900 text-sm font-medium mb-6">
            Cocina tradicional colombiana
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-stone-900"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Sabores que te recuerdan a <span className="text-emerald-800">casa</span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto">
            Recetas de familia, ingredientes frescos del mercado local y ese sazón
            que solo se consigue cocinando con cariño.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-full bg-emerald-800 text-white font-semibold hover:bg-emerald-900 transition-colors"
            >
              Reserva tu mesa
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full border border-stone-300 font-semibold hover:border-stone-500 transition-colors"
            >
              Ver el menú
            </a>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Nuestro Menú
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Una selección de nuestros platos más queridos por los comensales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {menu.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-4 rounded-2xl bg-white border border-stone-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-800" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-stone-900">{item.name}</h3>
                    <span className="text-emerald-800 font-semibold">{item.price}</span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiente */}
      <section id="ambiente" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Nuestro Ambiente
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Un espacio cálido para compartir en familia o con amigos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ambiente.map((a) => (
              <div
                key={a.title}
                className={`h-56 rounded-2xl bg-gradient-to-br ${a.gradient} flex items-end p-6 relative overflow-hidden`}
              >
                <span className="text-white font-semibold text-lg relative z-10">{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews strip */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            &ldquo;El mejor sancocho que he probado fuera de la casa de mi abuela.&rdquo;
          </p>
          <p className="text-emerald-200 text-sm mt-3">— Reseña de un cliente frecuente</p>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <div className="text-white font-medium">Horario</div>
                <div className="text-sm">Mar - Dom, 12:00m - 9:00pm</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <div className="text-white font-medium">Reservas</div>
                <div className="text-sm">+57 (2) 555 0175</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <div className="text-white font-medium">Ubicación</div>
                <div className="text-sm">Cali, Colombia</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-8">
            <Mail className="w-5 h-5 text-amber-400 mt-0.5" />
            <div className="text-sm">reservas@saborcasero.com.co</div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-center text-sm">
            © {new Date().getFullYear()} Sabor Casero · Proyecto de ejemplo diseñado y desarrollado por{' '}
            <Link href="/#contact" className="text-amber-400 hover:underline">Cristian Barbosa</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
