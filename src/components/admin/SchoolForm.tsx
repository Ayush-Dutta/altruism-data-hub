
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface School {
  id: string;
  name: string;
  location: string;
  contactPerson: string;
  contactNumber: string;
  studentCount: number;
}

interface SchoolFormProps {
  onAddSchool: (school: School) => void;
  onCancel: () => void;
}

const SchoolForm: React.FC<SchoolFormProps> = ({ onAddSchool, onCancel }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contactPerson: '',
    contactNumber: '',
    studentCount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || !formData.contactPerson || !formData.contactNumber) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const studentCount = parseInt(formData.studentCount);
    if (isNaN(studentCount) || studentCount < 0) {
      toast({
        title: "Error",
        description: "Please enter a valid student count",
        variant: "destructive",
      });
      return;
    }

    const newSchool: School = {
      id: Date.now().toString(),
      name: formData.name,
      location: formData.location,
      contactPerson: formData.contactPerson,
      contactNumber: formData.contactNumber,
      studentCount,
    };

    onAddSchool(newSchool);
    
    toast({
      title: "Success",
      description: "School has been successfully added",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Add New School</h3>
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
            <label className="block text-sm font-medium text-gray-700">School Name*</label>
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
            <label className="block text-sm font-medium text-gray-700">Location*</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Contact Person*</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Contact Number*</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <label className="block text-sm font-medium text-gray-700">Student Count</label>
          <input
            type="number"
            name="studentCount"
            value={formData.studentCount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            min="0"
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
            className="bg-primary hover:bg-primary-600"
          >
            <Plus size={16} className="mr-1" />
            Add School
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SchoolForm;
