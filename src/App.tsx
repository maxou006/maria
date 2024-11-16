import React from 'react';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import TaskList from './components/TaskList';
import { Project, Task } from './types';

// Données de démonstration
const projects: Project[] = [
  {
    id: '1',
    name: 'Rénovation Appartement Paris',
    client: 'M. Dubois',
    status: 'En cours',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-06-30'),
    budget: 150000,
    progress: 35,
  },
  {
    id: '2',
    name: 'Construction Maison Lyon',
    client: 'Mme Martin',
    status: 'En cours',
    startDate: new Date('2024-02-15'),
    endDate: new Date('2024-08-30'),
    budget: 280000,
    progress: 20,
  },
];

const tasks: Task[] = [
  {
    id: '1',
    projectId: '1',
    title: 'Installation Plomberie',
    description: 'Installation des nouvelles canalisations et sanitaires',
    status: 'En cours',
    assignedTo: 'Pierre Durand',
    dueDate: new Date('2024-04-15'),
  },
  {
    id: '2',
    projectId: '1',
    title: 'Électricité',
    description: 'Mise aux normes du système électrique',
    status: 'À faire',
    assignedTo: 'Sophie Martin',
    dueDate: new Date('2024-04-30'),
  },
];

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
            <p className="text-gray-600 mt-2">Bienvenue sur votre espace de gestion de chantier</p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Projets en cours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section>
            <TaskList tasks={tasks} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;