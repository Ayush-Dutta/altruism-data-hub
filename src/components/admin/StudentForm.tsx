
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Student {
  id: string;
  name: string;
  guardianName: string;
  address: string;
  mobile: string;
}

interface StudentFormProps {
  onAddStudent: (student: Student) => void;
  onCancel: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onAddStudent, onCancel }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guardianName: '',
    address: '',
    mobile: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.guardianName || !formData.address || !formData.mobile) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const newStudent: Student = {
      id: Date.now().toString(),
      name: formData.name,
      guardianName: formData.guardianName,
      address: formData.address,
      mobile: formData.mobile,
    };

    onAddStudent(newStudent);
    
    toast({
      title: "Success",
      description: "Student has been successfully added",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Add New Student</h3>
        <button 
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close form"
        >
          <X size={20} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Student Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Guardian Name*</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <label className="block text-sm font-medium text-gray-700">Address*</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={2}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            required
          />
        </div>
        
        <div className="space-y-2 mb-6">
          <label className="block text-sm font-medium text-gray-700">Mobile Number*</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            required
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-secondary hover:bg-secondary-600"
          >
            <Plus size={16} className="mr-1" />
            Add Student
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
