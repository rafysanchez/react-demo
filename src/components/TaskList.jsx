// components/TaskList.jsx
// Renderiza a lista de tarefas usando .map() e key.
// Demonstra listas, keys e renderização condicional.

import React from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, onToggleTaskDone, onRemoveTask }) {
  // Renderização condicional: se não houver tarefas, mostramos uma mensagem.
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {/* Usamos .map() para transformar o array de tarefas em elementos JSX. */}
      {tasks.map((task) => (
        // A prop key ajuda o React a identificar cada item da lista.
        // É importante para performance e para evitar bugs na renderização.
        <TaskItem
          key={task.id}
          task={task}
          onToggleTaskDone={onToggleTaskDone}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;

