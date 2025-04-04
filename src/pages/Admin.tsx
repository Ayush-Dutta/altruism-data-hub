
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/admin/LoginForm';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Check if user is already logged in
  useEffect(() => {
    const authStatus = localStorage.getItem('ngoAdminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);
    
    // Simulate authentication API call with timeout
    setTimeout(() => {
      // For demo purposes, accept any non-empty credentials
      // In a real app, this would validate against a backend
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('ngoAdminAuth', 'true');
        localStorage.setItem('ngoAdminUser', username);
        setIsAuthenticated(true);
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <LoginForm onLogin={handleLogin} isLoading={isLoading} />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
