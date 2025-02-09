import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DashboardCard } from './components/DashboardCard';
import { StatCard } from './components/StatCard';
import { holidayComparisonData, topPerformingStores, salesTimeSeriesData } from './data';
import { TrendingUp, Store, Calendar, DollarSign, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Store className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">Walmart Sales Analysis</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Holiday Impact Analysis</h1>
          <p className="mt-2 text-gray-600">Analysis of 45 Walmart stores' sales data focusing on holiday impacts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Average Holiday Sales"
            value="$1,764,450"
            icon={Calendar}
            trend={27.2}
            subtitle="Across all holidays"
          />
          <StatCard
            title="Top Store Performance"
            value="$28.9M"
            icon={Award}
            subtitle="Store #20 Total Sales"
          />
          <StatCard
            title="Weekly Sales Growth"
            value="5.8%"
            icon={TrendingUp}
            trend={5.8}
          />
          <StatCard
            title="Holiday Revenue Impact"
            value="$3.2M"
            icon={DollarSign}
            trend={42.8}
            subtitle="Additional Holiday Revenue"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DashboardCard title="Sales Time Series Analysis">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesTimeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#2563eb" name="Weekly Sales" />
                  <Line type="monotone" dataKey="trend" stroke="#16a34a" name="Trend" strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="Holiday Sales Impact">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={holidayComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="holiday" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="averageSales" fill="#3b82f6" name="Average Sales" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="Top Performing Stores">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topPerformingStores} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="storeId" type="category" label={{ value: 'Store ID', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="totalSales" fill="#3b82f6" name="Total Sales" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </DashboardCard>

          <DashboardCard title="Key Insights">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800">Holiday Impact</h3>
                <p className="text-blue-600 mt-1">Christmas shows the highest sales boost with a 42.8% increase compared to regular weeks</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800">Store Performance</h3>
                <p className="text-green-600 mt-1">Store #20 leads in sales with $28.9M total revenue and $556K average weekly sales</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800">Seasonal Trends</h3>
                <p className="text-purple-600 mt-1">Consistent upward trend in weekly sales with 5.8% average growth rate</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-800">Sales Prediction</h3>
                <p className="text-orange-600 mt-1">Holiday weeks show predictable increases: Thanksgiving (35.2%), Super Bowl (18.5%), Labor Day (12.3%)</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </main>
    </div>
  );
}

export default App;