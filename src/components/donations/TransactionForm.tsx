
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TransactionFormProps {
  onAddTransaction: (transaction: {
    id: string;
    date: string;
    amount: number;
    description: string;
    category: string;
    type: 'income' | 'expense';
  }) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
  const { toast } = useToast();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('income');
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: '',
    description: '',
    category: '',
  });

  const incomeCategories = ['Donation', 'Grant', 'Fundraiser', 'Sponsorship', 'Other Income'];
  const expenseCategories = ['School Supplies', 'Staff Salaries', 'Infrastructure', 'Administrative', 'Events', 'Other Expense'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.description || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    const newTransaction = {
      id: Date.now().toString(),
      date: formData.date,
      amount,
      description: formData.description,
      category: formData.category,
      type: transactionType,
    };

    onAddTransaction(newTransaction);
    
    toast({
      title: "Success",
      description: `${transactionType === 'income' ? 'Income' : 'Expense'} transaction has been added`,
    });

    // Reset form
    setFormData({
      date: new Date().toISOString().split('T')[0],
      amount: '',
      description: '',
      category: '',
    });
    setIsFormVisible(false);
  };

  return (
    <div className="mb-8">
      {!isFormVisible ? (
        <Button 
          onClick={() => setIsFormVisible(true)}
          className="w-full bg-primary hover:bg-primary-600 flex items-center justify-center gap-2"
        >
          <PlusCircle size={18} />
          Add New Transaction
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 animate-fade-in">
          <h3 className="text-xl font-semibold mb-4">Add New Transaction</h3>
          
          <div className="flex mb-6">
            <button
              type="button"
              className={`flex-1 py-2 rounded-l-md ${
                transactionType === 'income'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setTransactionType('income')}
            >
              Income
            </button>
            <button
              type="button"
              className={`flex-1 py-2 rounded-r-md ${
                transactionType === 'expense'
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setTransactionType('expense')}
            >
              Expense
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Transaction description"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select a category</option>
                {transactionType === 'income'
                  ? incomeCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))
                  : expenseCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))
                }
              </select>
            </div>
            
            <div className="flex justify-end space-x-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsFormVisible(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className={transactionType === 'income' ? 'bg-primary' : 'bg-accent'}
              >
                Add {transactionType === 'income' ? 'Income' : 'Expense'}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TransactionForm;
