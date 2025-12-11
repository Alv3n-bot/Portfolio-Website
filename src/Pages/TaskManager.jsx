import React, { useState } from 'react';
import { Plus, Trash2, Check, Circle } from 'lucide-react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review project requirements', completed: false, priority: 'high' },
    { id: 2, text: 'Design system architecture', completed: true, priority: 'high' },
    { id: 3, text: 'Set up development environment', completed: false, priority: 'medium' },
    { id: 4, text: 'Write documentation', completed: false, priority: 'low' }
  ]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('medium');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: input,
        completed: false,
        priority
      }]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  };

  const priorityColors = {
    high: 'border-red-500 bg-red-50',
    medium: 'border-yellow-500 bg-yellow-50',
    low: 'border-green-500 bg-green-50'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Manager</h1>
            <p className="text-gray-600">Organize your work efficiently</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="text-2xl font-bold text-blue-700">{stats.total}</div>
              <div className="text-sm text-blue-600">Total Tasks</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
              <div className="text-2xl font-bold text-orange-700">{stats.active}</div>
              <div className="text-sm text-orange-600">Active</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-700">{stats.completed}</div>
              <div className="text-sm text-green-600">Completed</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button
                onClick={addTask}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </button>
            </div>

            <div className="flex gap-2">
              {['all', 'active', 'completed'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                    filter === f
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Circle size={48} className="mx-auto mb-4 opacity-50" />
                <p>No tasks to show</p>
              </div>
            ) : (
              filteredTasks.map(task => (
                <div
                  key={task.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border-l-4 transition-all ${
                    priorityColors[task.priority]
                  } ${task.completed ? 'opacity-60' : ''}`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      task.completed
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-300 hover:border-blue-600'
                    }`}
                  >
                    {task.completed && <Check size={16} className="text-white" />}
                  </button>
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.text}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white text-gray-600 capitalize">
                    {task.priority}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}