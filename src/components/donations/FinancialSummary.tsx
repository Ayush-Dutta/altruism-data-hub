
import React from 'react';
import { ArrowDown, ArrowUp, PlusCircle, MinusCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Transaction {
  id: string;
  date: string;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
}

interface FinancialSummaryProps {
  transactions: Transaction[];
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ transactions }) => {
  const getTotalIncome = () => {
    return transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getTotalExpense = () => {
    return transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getNetBalance = () => {
    return getTotalIncome() - getTotalExpense();
  };

  // Calculate top categories
  const getCategoryTotals = (type: 'income' | 'expense') => {
    const categoryTotals = transactions
      .filter(t => t.type === type)
      .reduce((acc, transaction) => {
        acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(categoryTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
  };

  const topIncomeCategories = getCategoryTotals('income');
  const topExpenseCategories = getCategoryTotals('expense');

  const totalIncome = getTotalIncome();
  const totalExpense = getTotalExpense();
  const netBalance = getNetBalance();

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Financial Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500 flex items-center">
              <ArrowUp size={16} className="mr-1 text-green-500" />
              Total Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">₹{totalIncome.toFixed(2)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500 flex items-center">
              <ArrowDown size={16} className="mr-1 text-red-500" />
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-600">₹{totalExpense.toFixed(2)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500 flex items-center">
              {netBalance >= 0 ? (
                <PlusCircle size={16} className="mr-1 text-primary" />
              ) : (
                <MinusCircle size={16} className="mr-1 text-red-500" />
              )}
              Net Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${
              netBalance >= 0 ? 'text-primary' : 'text-red-600'
            }`}>
              ₹{netBalance.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>
      
      {(topIncomeCategories.length > 0 || topExpenseCategories.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <ArrowUp size={18} className="mr-2 text-green-500" />
                Top Income Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              {topIncomeCategories.length > 0 ? (
                <ul className="space-y-2">
                  {topIncomeCategories.map(([category, amount], index) => (
                    <li key={index} className="flex justify-between">
                      <span>{category}</span>
                      <span className="font-medium">₹{amount.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No income transactions yet</p>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <ArrowDown size={18} className="mr-2 text-red-500" />
                Top Expense Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              {topExpenseCategories.length > 0 ? (
                <ul className="space-y-2">
                  {topExpenseCategories.map(([category, amount], index) => (
                    <li key={index} className="flex justify-between">
                      <span>{category}</span>
                      <span className="font-medium">₹{amount.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No expense transactions yet</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FinancialSummary;
