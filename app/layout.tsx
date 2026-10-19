import type { Metadata } from 'next';
import './globals.css';
import { company } from '@/lib/company';
export const metadata: Metadata = {
  title: `${company.name} | Construção de alto padrão`,
  description: 'Arquitetura, construção e gestão de obras com atenção a cada detalhe. Conheça nossa abordagem e converse sobre seu projeto.',
  ...(company.siteUrl ? { metadataBase: new URL(company.siteUrl) } : {}),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
