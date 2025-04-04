
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import TransactionForm from '@/components/donations/TransactionForm';
import TransactionList from '@/components/donations/TransactionList';
import FinancialSummary from '@/components/donations/FinancialSummary';
import { useToast } from '@/hooks/use-toast';

interface Transaction {
  id: string;
  date: string;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
}

const Donations = () => {
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem('donationTransactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // Persist transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('donationTransactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions(prev => [transaction, ...prev]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
    toast({
      title: "Transaction deleted",
      description: "The transaction has been successfully removed",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 mt-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Donation & Expense Tracker</h1>
            <p className="text-gray-600">
              Track all donations and expenses to maintain financial transparency
            </p>
          </div>
          
          <FinancialSummary transactions={transactions} />
          <TransactionForm onAddTransaction={handleAddTransaction} />
          <TransactionList 
            transactions={transactions} 
            onDeleteTransaction={handleDeleteTransaction}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Donations;
