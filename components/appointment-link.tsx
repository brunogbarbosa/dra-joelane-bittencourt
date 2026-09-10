import { ArrowUpRight } from 'lucide-react';
import { appointmentUrl } from '@/data/site';

export function AppointmentLink({ id, children = 'QUERO AGENDAR MINHA AVALIAÇÃO', className = '' }: {
  id: string; children?: React.ReactNode; className?: string;
}) {
  return <a className={`campaign-cta conversion-cta ${className}`} data-cta={id} href={appointmentUrl} target="_blank" rel="noopener noreferrer">
    <span>{children}</span><ArrowUpRight size={22} strokeWidth={1.3} aria-hidden="true" />
  </a>;
}
