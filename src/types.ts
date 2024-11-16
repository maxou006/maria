export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'En cours' | 'Terminé' | 'En pause';
  startDate: Date;
  endDate: Date;
  budget: number;
  progress: number;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'À faire' | 'En cours' | 'Terminé';
  assignedTo: string;
  dueDate: Date;
}