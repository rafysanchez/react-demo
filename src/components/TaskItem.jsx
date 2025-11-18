// components/TaskItem.jsx
// Item individual da lista de tarefas.
// Recebe a tarefa por props, além de callbacks para remover e marcar como concluída.

import React from 'react';
import Button from './Button.jsx';

function TaskItem({ task, onToggleTaskDone, onRemoveTask }) {
  // Podemos aplicar estilos diferentes para tarefas concluídas vs não concluídas.
  const textStyle = {
    textDecoration: task.done ? 'line-through' : 'none',
    color: task.done ? '#777' : '#000',
  };

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <div>
        {/* Renderização condicional de texto baseado no estado da tarefa */}
        <span style={textStyle}>{task.title}</span>
        <span style={{ marginLeft: '8px', fontSize: '0.8rem', color: '#555' }}>
          {task.done ? '(Concluída)' : '(Pendente)'}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        {/* onToggleTaskDone e onRemoveTask são callbacks recebidos por props.
            Eles permitem que este componente comunique eventos ao componente pai. */}
        <Button
          label={task.done ? 'Desfazer' : 'Concluir'}
          onClick={() => onToggleTaskDone(task.id)}
          style={{ backgroundColor: '#4caf50', borderColor: '#4caf50' }}
        />
        <Button
          label="Remover"
          onClick={() => onRemoveTask(task.id)}
          style={{ backgroundColor: '#f44336', borderColor: '#f44336' }}
        />
      </div>
    </li>
  );
}

export default TaskItem;

