import { describe, expect, it } from 'vitest';
import { company, projects, whatsappUrl } from '../lib/company';
import { existsSync } from 'node:fs';
describe('contato seguro e conteúdo personalizável', () => {
  it('não cria contato com número ausente ou inválido', () => {
    for (const value of ['', '123', 'abc', '1'.repeat(16)]) expect(whatsappUrl(value)).toBeNull();
    expect(whatsappUrl(company.whatsapp)).toBeNull();
  });
  it('normaliza telefone e codifica a mensagem de contato', () => {
    const url = new URL(whatsappUrl('+55 (11) 99999-9999')!);
    expect(url.hostname).toBe('wa.me');
    expect(url.pathname).toBe('/5511999999999');
    expect(url.searchParams.get('text')).toContain('Gostaria de conversar');
  });
  it('oferece projetos com imagens locais existentes e categorias válidas', () => {
    expect(projects).toHaveLength(3);
    for (const project of projects) {
      expect(existsSync(`public${project.image}`)).toBe(true);
      expect(['Residencial', 'Comercial']).toContain(project.category);
    }
  });
});
