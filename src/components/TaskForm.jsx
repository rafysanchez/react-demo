// components/TaskForm.jsx
// Formulário controlado para adicionar tarefas.
// Demonstra o conceito de "controlled components" em formulários React.

import React, { useState } from 'react';
import Button from './Button.jsx';

function TaskForm({ onAddTask }) {
  // Estado que controla o valor do input.
  const [title, setTitle] = useState('');

  // Evento chamado quando o formulário é enviado.
  const handleSubmit = (event) => {
    event.preventDefault(); // evita o reload da página padrão do formulário

    // Validação simples: não permitir tarefa vazia.
    if (!title.trim()) {
      return;
    }

    // Chamamos a função passada por props para adicionar a tarefa.
    onAddTask(title.trim());

    // Limpamos o input após adicionar.
    setTitle('');
  };

  // Evento chamado sempre que o valor do input muda.
  const handleChange = (event) => {
    // Como componente controlado, o valor do input vem do estado,
    // e toda mudança atualiza o estado.
    setTitle(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px',
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={title} // valor controlado pelo estado React
        onChange={handleChange} // evento de mudança
        style={{ flex: 1, padding: '8px' }}
      />
      {/* Botão de submit utilizando o componente Button reaproveitável */}
      <Button type="submit" label="Adicionar" />
    </form>
  );
}

export default TaskForm;

