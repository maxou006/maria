import React from 'react';
import { LayoutDashboard, Hammer, Calendar, BanknoteIcon, Settings, Users } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-3 mb-8">
        <Hammer className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">ChantierPro</h1>
      </div>
      
      <nav className="space-y-2">
        <NavItem icon={<LayoutDashboard />} text="Tableau de bord" active />
        <NavItem icon={<Hammer />} text="Projets" />
        <NavItem icon={<Calendar />} text="Planning" />
        <NavItem icon={<BanknoteIcon />} text="Budget" />
        <NavItem icon={<Users />} text="Équipe" />
        <NavItem icon={<Settings />} text="Paramètres" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-blue-600' : 'hover:bg-gray-800'
    }`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Sidebar;