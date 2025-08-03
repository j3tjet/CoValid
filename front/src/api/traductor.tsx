import { traducciones } from '../data/traducciones';

export const traducirTexto = async (
  texto: string,
  source = 'en',
  target = 'es'
): Promise<string> => {
  const lowerTexto = texto.trim().toLowerCase();
  const resultado = traducciones[lowerTexto];

  if (!resultado) {
    throw new Error('Traducción no encontrada en la lista local');
  }

  return resultado;
};
