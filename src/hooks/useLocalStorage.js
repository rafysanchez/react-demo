// hooks/useLocalStorage.js
// Hook customizado simples para sincronizar um estado com o localStorage.
// Demonstra uso de useState + useEffect para efeitos colaterais.

import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Estado interno que guarda o valor atual.
  const [value, setValue] = useState(() => {
    try {
      // Tenta ler do localStorage quando o componente é montado.
      const stored = window.localStorage.getItem(key);
      // Se existir, parseia o JSON; senão, usa o valor inicial.
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error('Erro ao ler do localStorage', error);
      return initialValue;
    }
  });

  useEffect(() => {
    // Efeito colateral: sempre que "value" muda, salvamos no localStorage.
    // Este é um exemplo clássico de uso do useEffect.
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erro ao salvar no localStorage', error);
    }
  }, [key, value]);

  // Retornamos o valor e a função para atualizá-lo, como o useState.
  return [value, setValue];
}

