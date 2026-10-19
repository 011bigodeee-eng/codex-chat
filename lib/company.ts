// Substitua os campos abaixo antes de publicar. Não há dados comerciais reais neste modelo.
export const company = {
  name: 'SUA CONSTRUTORA',
  descriptor: 'ARQUITETURA & CONSTRUÇÃO',
  email: '',
  phone: '',
  whatsapp: '', // Código do país + DDD + número, somente dígitos.
  address: '',
  instagram: '',
  siteUrl: '', // URL absoluta do domínio de produção.
};
export function whatsappUrl(number: string) {
  const digits = number.replace(/\D/g, '');
  return /^\d{10,15}$/.test(digits)
    ? `https://wa.me/${digits}?text=${encodeURIComponent('Olá! Gostaria de conversar sobre um projeto.')}`
    : null;
}
export const projects = [
  { title: 'Residência Horizonte', category: 'Residencial', type: 'RESIDÊNCIA CONTEMPORÂNEA', image: '/architecture.svg', detail: 'Volumes puros, luz natural e integração com a paisagem.' },
  { title: 'Casa Essência', category: 'Residencial', type: 'INTERIORES & REFORMA', image: '/interior.svg', detail: 'Materialidade acolhedora e espaços pensados para viver.' },
  { title: 'Espaço Origem', category: 'Comercial', type: 'ARQUITETURA COMERCIAL', image: '/commercial.svg', detail: 'Uma expressão arquitetônica para uma nova experiência.' },
];
