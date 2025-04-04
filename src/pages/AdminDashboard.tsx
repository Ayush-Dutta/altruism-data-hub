
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '@/components/admin/AdminHeader';
import SchoolForm from '@/components/admin/SchoolForm';
import SchoolCard from '@/components/admin/SchoolCard';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface School {
  id: string;
  name: string;
  location: string;
  contactPerson: string;
  contactNumber: string;
  studentCount: number;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [username, setUsername] = useState<string>('Admin');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [schools, setSchools] = useState<School[]>(() => {
    const savedSchools = localStorage.getItem('ngoSchools');
    return savedSchools ? JSON.parse(savedSchools) : [];
  });
  
  // Check authentication status
  useEffect(() => {
    const authStatus = localStorage.getItem('ngoAdminAuth');
    const storedUsername = localStorage.getItem('ngoAdminUser');
    
    if (authStatus !== 'true') {
      navigate('/admin');
      return;
    }
    
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [navigate]);

  // Save schools to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('ngoSchools', JSON.stringify(schools));
  }, [schools]);

  const handleLogout = () => {
    localStorage.removeItem('ngoAdminAuth');
    localStorage.removeItem('ngoAdminUser');
    navigate('/admin');
  };

  const handleAddSchool = (school: School) => {
    setSchools(prev => [school, ...prev]);
    setShowForm(false);
  };

  const handleDeleteSchool = (id: string) => {
    setSchools(prev => prev.filter(school => school.id !== id));
    toast({
      title: "School removed",
      description: "The school has been successfully removed",
    });
  };

  const filteredSchools = schools.filter(school => {
    if (!searchTerm) return true;
    
    const term = searchTerm.toLowerCase();
    return (
      school.name.toLowerCase().includes(term) ||
      school.location.toLowerCase().includes(term) ||
      school.contactPerson.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminHeader username={username} onLogout={handleLogout} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Schools Management</h1>
          <p className="text-gray-600">
            Add, view and manage schools in your organization
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search schools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-2 pr-3 border rounded-md w-full"
            />
          </div>
          
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-primary hover:bg-primary-600"
            disabled={showForm}
          >
            <Plus size={16} className="mr-2" />
            Add New School
          </Button>
        </div>
        
        {showForm && (
          <div className="mb-8">
            <SchoolForm 
              onAddSchool={handleAddSchool} 
              onCancel={() => setShowForm(false)} 
            />
          </div>
        )}
        
        {filteredSchools.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-xl font-medium mb-2">No Schools Found</h3>
            <p className="text-gray-500 mb-6">
              {schools.length === 0 
                ? "Add your first school to get started" 
                : "No schools match your search criteria"}
            </p>
            {schools.length === 0 && (
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-primary hover:bg-primary-600"
              >
                <Plus size={16} className="mr-2" />
                Add School
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map(school => (
              <SchoolCard 
                key={school.id}
                school={school}
                onDelete={handleDeleteSchool}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
