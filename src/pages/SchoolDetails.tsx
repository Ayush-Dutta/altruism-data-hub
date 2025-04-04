
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminHeader from '@/components/admin/AdminHeader';
import StudentForm from '@/components/admin/StudentForm';
import StudentTable from '@/components/admin/StudentTable';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, School } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Student {
  id: string;
  name: string;
  guardianName: string;
  address: string;
  mobile: string;
}

interface School {
  id: string;
  name: string;
  location: string;
  contactPerson: string;
  contactNumber: string;
  studentCount: number;
}

const SchoolDetails = () => {
  const navigate = useNavigate();
  const { schoolId } = useParams();
  const { toast } = useToast();
  
  const [username, setUsername] = useState<string>('Admin');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [school, setSchool] = useState<School | null>(null);
  
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem(`ngoStudents-${schoolId}`);
    return savedStudents ? JSON.parse(savedStudents) : [];
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

  // Load school data
  useEffect(() => {
    const savedSchools = localStorage.getItem('ngoSchools');
    if (savedSchools) {
      const schools = JSON.parse(savedSchools);
      const currentSchool = schools.find((s: School) => s.id === schoolId);
      
      if (currentSchool) {
        setSchool(currentSchool);
      } else {
        toast({
          title: "School not found",
          description: "The requested school could not be found",
          variant: "destructive",
        });
        navigate('/admin/dashboard');
      }
    } else {
      navigate('/admin/dashboard');
    }
  }, [schoolId, navigate, toast]);

  // Save students to localStorage whenever they change
  useEffect(() => {
    if (schoolId) {
      localStorage.setItem(`ngoStudents-${schoolId}`, JSON.stringify(students));
    }
  }, [students, schoolId]);

  const handleLogout = () => {
    localStorage.removeItem('ngoAdminAuth');
    localStorage.removeItem('ngoAdminUser');
    navigate('/admin');
  };

  const handleAddStudent = (student: Student) => {
    setStudents(prev => [student, ...prev]);
    setShowForm(false);
    
    // Update student count in school data
    if (school) {
      const updatedSchool = {
        ...school,
        studentCount: school.studentCount + 1
      };
      
      setSchool(updatedSchool);
      
      // Update the school in localStorage
      const savedSchools = localStorage.getItem('ngoSchools');
      if (savedSchools) {
        const schools = JSON.parse(savedSchools);
        const updatedSchools = schools.map((s: School) => 
          s.id === schoolId ? updatedSchool : s
        );
        localStorage.setItem('ngoSchools', JSON.stringify(updatedSchools));
      }
    }
  };

  const handleDeleteStudent = (id: string) => {
    setStudents(prev => prev.filter(student => student.id !== id));
    
    // Update student count in school data
    if (school) {
      const updatedSchool = {
        ...school,
        studentCount: Math.max(0, school.studentCount - 1)
      };
      
      setSchool(updatedSchool);
      
      // Update the school in localStorage
      const savedSchools = localStorage.getItem('ngoSchools');
      if (savedSchools) {
        const schools = JSON.parse(savedSchools);
        const updatedSchools = schools.map((s: School) => 
          s.id === schoolId ? updatedSchool : s
        );
        localStorage.setItem('ngoSchools', JSON.stringify(updatedSchools));
      }
    }
    
    toast({
      title: "Student removed",
      description: "The student has been successfully removed",
    });
  };

  if (!school) {
    return null; // or a loading indicator
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminHeader username={username} onLogout={handleLogout} />
      
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="outline" 
          className="mb-6"
          onClick={() => navigate('/admin/dashboard')}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Schools
        </Button>
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <School className="text-primary" size={24} />
            <h1 className="text-3xl font-bold">{school.name}</h1>
          </div>
          <p className="text-gray-600">
            {school.location} • {school.studentCount} Students
          </p>
        </div>
        
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Student Management</h2>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-secondary hover:bg-secondary-600"
            disabled={showForm}
          >
            <Plus size={16} className="mr-2" />
            Add New Student
          </Button>
        </div>
        
        {showForm && (
          <div className="mb-8">
            <StudentForm 
              onAddStudent={handleAddStudent} 
              onCancel={() => setShowForm(false)} 
            />
          </div>
        )}
        
        <StudentTable 
          students={students} 
          onDeleteStudent={handleDeleteStudent} 
        />
      </div>
    </div>
  );
};

export default SchoolDetails;
