
import React from 'react';
import { User, LogOut, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface AdminHeaderProps {
  username: string;
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ username, onLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div 
        className="font-bold text-xl text-primary cursor-pointer flex items-center" 
        onClick={() => navigate('/admin')}
      >
        <span className="text-accent">Edu</span>Care NGO
        <span className="ml-2 text-sm font-normal bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
          Admin
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell size={20} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-accent w-4 h-4 rounded-full flex items-center justify-center text-white text-xs">
            3
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <User size={16} />
          </div>
          <span className="ml-2 hidden sm:block">{username}</span>
        </div>

        <Button 
          variant="ghost" 
          size="sm"
          onClick={onLogout}
          className="text-gray-500"
        >
          <LogOut size={18} />
          <span className="ml-1 hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
