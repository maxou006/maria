import React from 'react';
import { Task } from '../types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Terminé':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'En cours':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'À faire':
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Tâches en cours</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                {getStatusIcon(task.status)}
                <div>
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {task.assignedTo}
                </p>
                <p className="text-sm text-gray-500">
                  {format(task.dueDate, 'dd MMM yyyy', { locale: fr })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;