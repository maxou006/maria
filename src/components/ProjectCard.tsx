import React from 'react';
import { Calendar, DollarSign, BarChart } from 'lucide-react';
import { Project } from '../types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-green-100 text-green-800';
      case 'En pause':
        return 'bg-yellow-100 text-yellow-800';
      case 'Terminé':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">Client: {project.client}</p>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {format(project.startDate, 'dd MMM yyyy', { locale: fr })} - 
            {format(project.endDate, 'dd MMM yyyy', { locale: fr })}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.budget.toLocaleString('fr-FR')} €</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 flex items-center">
              <BarChart className="w-4 h-4 mr-2" />
              Progression
            </span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 rounded-full h-2 transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;