// pages/TasksPage.jsx
// Página responsável pela lista de tarefas.
// Aqui centralizamos o estado das tarefas (lifting state up),
// passando esse estado para TaskForm e TaskList via props.

import React, { useEffect } from 'react';
import TaskForm from '../components/TaskForm.jsx';
import TaskList from '../components/TaskList.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

function TasksPage() {
  // Estado das tarefas fica no componente pai (TasksPage).
  // Este estado é "levantado" (lifting state up) em relação aos componentes TaskForm e TaskList.
  // Em vez de cada componente ter seu próprio estado de tarefas, o pai controla tudo.
  const [tasks, setTasks] = useLocalStorage('tasks', [
    // Valor inicial apenas para exemplo; pode começar vazio também.
    { id: 1, title: 'Estudar React', done: false },
    { id: 2, title: 'Praticar JSX', done: true },
  ]);

  // useEffect para logar no console sempre que a lista de tarefas muda.
  useEffect(() => {
    console.log('Lista de tarefas atualizada:', tasks);
  }, [tasks]);

  // Função para adicionar uma nova tarefa.
  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(), // id simples baseado no timestamp
      title,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Função para alternar o status de "concluída" da tarefa.
  const handleToggleTaskDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Função para remover uma tarefa.
  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <p>
        Esta página demonstra:
        <strong>
          {' '}
          estado, eventos, listas, renderização condicional, lifting state up
        </strong>
        {' e '}
        <strong>useEffect</strong>.
      </p>

      {/* TaskForm recebe uma função via props para adicionar tarefas */}
      <TaskForm onAddTask={handleAddTask} />

      {/* TaskList recebe a lista de tarefas e funções para manipular cada item */}
      <TaskList
        tasks={tasks}
        onToggleTaskDone={handleToggleTaskDone}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  );
}

export default TasksPage;

