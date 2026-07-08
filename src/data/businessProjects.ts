import { Calculator, Wrench, UtensilsCrossed, Stethoscope, LucideIcon } from 'lucide-react';

export interface BusinessProjectStyle {
  slug: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  glow: string;
}

export const businessProjectStyles: BusinessProjectStyle[] = [
  {
    slug: 'contabilidad-plus',
    href: '/proyectos/contabilidad-plus',
    icon: Calculator,
    gradient: 'from-blue-600 to-slate-700',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    slug: 'taller-mecanico-rodriguez',
    href: '/proyectos/taller-mecanico-rodriguez',
    icon: Wrench,
    gradient: 'from-orange-600 to-neutral-800',
    glow: 'group-hover:shadow-orange-500/20',
  },
  {
    slug: 'restaurante-sabor-casero',
    href: '/proyectos/restaurante-sabor-casero',
    icon: UtensilsCrossed,
    gradient: 'from-amber-700 to-emerald-800',
    glow: 'group-hover:shadow-amber-500/20',
  },
  {
    slug: 'clinica-dental-sonrisa',
    href: '/proyectos/clinica-dental-sonrisa',
    icon: Stethoscope,
    gradient: 'from-teal-600 to-cyan-800',
    glow: 'group-hover:shadow-teal-500/20',
  },
];
