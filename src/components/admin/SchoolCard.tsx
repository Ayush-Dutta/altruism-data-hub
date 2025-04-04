
import React from 'react';
import { School, Users, Phone, MapPin, Trash2, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface SchoolCardProps {
  school: {
    id: string;
    name: string;
    location: string;
    contactPerson: string;
    contactNumber: string;
    studentCount: number;
  };
  onDelete: (id: string) => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full">
      <CardHeader className="bg-primary-50 pb-2">
        <div className="flex justify-between">
          <div className="flex items-start gap-2">
            <School className="text-primary mt-1" size={18} />
            <h3 className="font-semibold text-lg">{school.name}</h3>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <ul className="space-y-2">
          <li className="flex items-center text-sm">
            <MapPin size={16} className="text-gray-500 mr-2" />
            <span>{school.location}</span>
          </li>
          <li className="flex items-center text-sm">
            <Users size={16} className="text-gray-500 mr-2" />
            <span>{school.studentCount} Students</span>
          </li>
          <li className="flex items-center text-sm">
            <Phone size={16} className="text-gray-500 mr-2" />
            <span>{school.contactPerson}: {school.contactNumber}</span>
          </li>
        </ul>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline"
          size="sm"
          className="border-secondary text-secondary hover:bg-secondary-50"
          onClick={() => navigate(`/admin/school/${school.id}`)}
        >
          <UserPlus size={16} className="mr-1" />
          Students
        </Button>
        <Button 
          variant="outline"
          size="sm"
          className="border-red-400 text-red-500 hover:bg-red-50"
          onClick={() => onDelete(school.id)}
        >
          <Trash2 size={16} className="mr-1" />
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SchoolCard;
