import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import {
  ShoppingBag, DollarSign, TrendingUp, Users, Globe,
  Settings, Plus, Eye, Edit, Trash2, Bell, Search,
  Filter, Download, Calendar, Star, Moon, Sun,
  Package, CreditCard, Target,
  BarChart3, Menu, // Added Menu icon for mobile sidebar toggle
  // Added icons for MarketingTab
  Mail, Facebook, Instagram, Twitter,
  Youtube, Linkedin, MessageSquare, Megaphone, XCircle, LogIn, UserPlus
} from 'lucide-react';

// --- AuthPage component (moved here) ---
const AuthPage = ({ onAuthSuccess, darkMode }) => {
  const [isLogin, setIsLogin] = useState(true); // true for login, false for register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!email || !password) {
      setMessage('Пожалуйста, введите адрес электронной почты и пароль.');
      setMessageType('error');
      return;
    }

    // Simulate API call for login
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password123') {
        setMessage('Вход выполнен успешно! Перенаправление на панель управления...');
        setMessageType('success');
        onAuthSuccess(); // Call the prop function to update authentication state in Dashboard
      } else {
        setMessage('Неверный адрес электронной почты или пароль.');
        setMessageType('error');
      }
    }, 1000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!email || !password || !confirmPassword) {
      setMessage('Пожалуйста, заполните все поля.');
      setMessageType('error');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Пароли не совпадают.');
      setMessageType('error');
      return;
      // Using console.error instead of alert
      console.error('Пароли не совпадают.');
    }

    // Simulate API call for registration
    setTimeout(() => {
      // In a real application, you would send this data to a backend
      // For demonstration, we'll just simulate success
      setMessage('Регистрация прошла успешно! Теперь вы можете войти.');
      setMessageType('success');
      setIsLogin(true); // Switch to login form after successful registration
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }, 1000);
  };

  // New function to handle demo account login
  const handleDemoLogin = () => {
    setEmail('user@example.com');
    setPassword('password123');
    // Directly call handleLogin logic after setting credentials
    setTimeout(() => {
      setMessage('Вход выполнен успешно! Перенаправление на панель управления...');
      setMessageType('success');
      onAuthSuccess();
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <div className="flex justify-center mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${darkMode ? 'bg-teal-700' : 'bg-teal-500'}`}>
            <LogIn className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {isLogin ? 'Вход' : 'Регистрация'}
        </h2>

        {message && (
          <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 shadow-md ${
            messageType === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
          }`}>
            <XCircle className="w-5 h-5" />
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Адрес электронной почты
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
              placeholder="ваша@почта.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
              placeholder="••••••••"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Подтвердите пароль
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
                placeholder="••••••••"
                required
            />
          </div>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLogin ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        {isLogin && ( // Only show demo account button on login form
          <button
            onClick={handleDemoLogin}
            className={`w-full py-3 px-4 mt-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer`}
          >
            <UserPlus className="w-5 h-5" />
            Войти как демо-аккаунт
          </button>
        )}

        <p className={`text-center mt-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {isLogin ? 'У вас нет аккаунта?' : 'Уже есть аккаунт?'}
          <button
            onClick={() => {
              setIsLogin(prev => !prev);
              setMessage(''); // Clear messages on tab switch
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            }}
            className="ml-1 font-medium text-teal-500 hover:text-teal-600 transition-colors duration-200 ease-in-out cursor-pointer"
          >
            {isLogin ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </p>
      </div>
    </div>
  );
};
// --- End of AuthPage component ---

// Placeholder components (Payments and Settings remain placeholders)
const PaymentsTab = () => <div className="p-6">Payments Content Placeholder</div>;
const SettingsTab = () => <div className="p-6">Settings Content Placeholder</div>;

// --- Enhanced MarketingTab component --- 
const MarketingTab = ({ darkMode }) => {
  // Button handlers
  const handleCreateCampaignClick = () => console.log('Create campaign button clicked!');
  const handleFilterCampaignsClick = () => console.log('Filter campaigns button clicked!');
  const handleDownloadReportClick = () => console.log('Download report button clicked!');
  const handleDateRangeClick = () => console.log('Date range button clicked!');
  const handleCampaignActionClick = (campaignId, action) => console.log(`Action "${action}" for campaign ${campaignId}`);
  
  // Mock data for campaigns
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Summer Sale Promotion',
      platform: 'Facebook',
      status: 'active',
      budget: 1200,
      spent: 780,
      clicks: 3450,
      impressions: 45000,
      conversions: 128,
      ctr: 7.67,
      cpc: 0.23,
      roi: 320
    },
    {
      id: 2,
      name: 'New Product Launch',
      platform: 'Google',
      status: 'active',
      budget: 2000,
      spent: 1650,
      clicks: 5200,
      impressions: 78000,
      conversions: 215,
      ctr: 6.67,
      cpc: 0.32,
      roi: 280
    },
    {
      id: 3,
      name: 'Retargeting Campaign',
      platform: 'Instagram',
      status: 'pending',
      budget: 800,
      spent: 0,
      clicks: 0,
      impressions: 0,
      conversions: 0,
      ctr: 0,
      cpc: 0,
      roi: 0
    },
    {
      id: 4,
      name: 'Holiday Special Offer',
      platform: 'Email',
      status: 'completed',
      budget: 500,
      spent: 500,
      clicks: 2800,
      impressions: 15000,
      conversions: 95,
      ctr: 18.67,
      cpc: 0.18,
      roi: 410
    }
  ]);

  // Mock data for ad spend by platform
  const adSpendData = [
    { name: 'Facebook', value: 3200, color: '#3b82f6' },
    { name: 'Google', value: 2800, color: '#10b981' },
    { name: 'Instagram', value: 1500, color: '#f59e0b' },
    { name: 'TikTok', value: 900, color: '#8b5cf6' },
    { name: 'Email', value: 600, color: '#ef4444' }
  ];

  // Mock data for social media metrics
  const socialMediaData = [
    { 
      platform: 'Facebook', 
      followers: 12500, 
      engagement: 3.2, 
      posts: 45, 
      clicks: 2800,
      color: '#3b82f6',
      icon: Facebook
    },
    { 
      platform: 'Instagram', 
      followers: 8700, 
      engagement: 4.7, 
      posts: 78, 
      clicks: 3400,
      color: '#f59e0b',
      icon: Instagram
    },
    { 
      platform: 'Twitter', 
      followers: 5200, 
      engagement: 2.1, 
      posts: 120, 
      clicks: 1200,
      color: '#0ea5e9',
      icon: Twitter
    },
    { 
      platform: 'LinkedIn', 
      followers: 3800, 
      engagement: 1.8, 
      posts: 25, 
      clicks: 950,
      color: '#0369a1',
      icon: Linkedin
    },
    { 
      platform: 'YouTube', 
      followers: 2200, 
      engagement: 5.3, 
      posts: 12, 
      clicks: 1800,
      color: '#ef4444',
      icon: Youtube
    }
  ];

  // Mock data for email campaigns
  const emailCampaigns = [
    {
      id: 1,
      name: 'Weekly Newsletter',
      sent: 5000,
      opened: 1850,
      clicked: 720,
      openRate: 37,
      clickRate: 14.4,
      date: '2024-05-28'
    },
    {
      id: 2,
      name: 'Product Announcement',
      sent: 4500,
      opened: 2250,
      clicked: 1125,
      openRate: 50,
      clickRate: 25,
      date: '2024-05-21'
    },
    {
      id: 3,
      name: 'Special Discount',
      sent: 3800,
      opened: 1900,
      clicked: 950,
      openRate: 50,
      clickRate: 25,
      date: '2024-05-14'
    }
  ];

  // Mock data for email performance over time
  const emailPerformanceData = [
    { week: 'Нед 1', openRate: 32, clickRate: 12 },
    { week: 'Нед 2', openRate: 38, clickRate: 15 },
    { week: 'Нед 3', openRate: 45, clickRate: 18 },
    { week: 'Нед 4', openRate: 42, clickRate: 16 }
  ];

  // Helper function for status background
  const getStatusBg = (status) => {
    switch (status) {
      case 'active': return darkMode ? 'bg-green-800/50 text-green-300' : 'bg-green-100 text-green-700';
      case 'pending': return darkMode ? 'bg-yellow-800/50 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
      case 'completed': return darkMode ? 'bg-blue-800/50 text-blue-300' : 'bg-blue-100 text-blue-700';
      default: return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Маркетинг</h2>
        <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
          <button
            onClick={handleFilterCampaignsClick}
            className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
          >
            <Filter className="w-4 h-4" />
            Фильтр
          </button>
          <button
            onClick={handleDateRangeClick}
            className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
          >
            <Calendar className="w-4 h-4" />
            Период
          </button>
          <button
            onClick={handleDownloadReportClick}
            className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
          >
            <Download className="w-4 h-4" />
            Отчет
          </button>
          <button
            onClick={handleCreateCampaignClick}
            className="px-4 py-2 text-sm rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Новая кампания
          </button>
        </div>
      </div>

      {/* Marketing Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-200 ease-in-out`}>Расходы на рекламу</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>$9,000</p>
              <p className={`text-base mt-1 text-red-500`}>
                +12.5% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors duration-200 ease-in-out`}>
              <DollarSign className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-200 ease-in-out`}>Клики</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>11,450</p>
              <p className={`text-base mt-1 text-green-500`}>
                +8.2% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors duration-200 ease-in-out`}>
              <TrendingUp className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-200 ease-in-out`}>Конверсии</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>438</p>
              <p className={`text-base mt-1 text-green-500`}>
                +15.3% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors duration-200 ease-in-out`}>
              <Target className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-200 ease-in-out`}>ROI</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>285%</p>
              <p className={`text-base mt-1 text-green-500`}>
                +5.4% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors duration-200 ease-in-out`}>
              <DollarSign className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Ad Spend and Social Media Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Ad Spend by Platform */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
          <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Расходы по платформам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={adSpendData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {adSpendData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Расходы']}
                    contentStyle={{ 
                      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                      borderColor: darkMode ? '#374151' : '#e5e7eb',
                      color: darkMode ? '#f9fafb' : '#111827'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>
                <div className="text-sm font-medium mb-2">Платформы</div>
                {adSpendData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>${item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Общие расходы</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>
                  ${adSpendData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Marketing Performance */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
          <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Email-маркетинг</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={emailPerformanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis 
                  dataKey="week" 
                  tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                  axisLine={{ stroke: darkMode ? '#4b5563' : '#d1d5db' }} 
                />
                <YAxis 
                  tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                  axisLine={{ stroke: darkMode ? '#4b5563' : '#d1d5db' }} 
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, '']}
                  contentStyle={{ 
                    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                    color: darkMode ? '#f9fafb' : '#111827'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="openRate" 
                  name="Open Rate" 
                  stroke="#14b8a6" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#14b8a6', strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: '#14b8a6', strokeWidth: 0 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="clickRate" 
                  name="Click Rate" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#f59e0b', strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: '#f59e0b', strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-500"></div>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Open Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Click Rate</span>
            </div>
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Средний Open Rate: {emailPerformanceData.reduce((sum, item) => sum + item.openRate, 0) / emailPerformanceData.length}%
            </div>
          </div>
        </div>
      </div>

      {/* Campaign List */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ease-in-out mb-8`}>
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Рекламные кампании</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Название</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Платформа</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Статус</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Бюджет</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Потрачено</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Клики</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>CTR</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>ROI</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-200 ease-in-out`}>
                  <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors duration-200 ease-in-out`}>{campaign.name}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.platform}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>${campaign.budget}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>${campaign.spent}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.clicks.toLocaleString()}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.ctr}%</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.roi}%</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCampaignActionClick(campaign.id, 'view')}
                        className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCampaignActionClick(campaign.id, 'edit')}
                        className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCampaignActionClick(campaign.id, 'delete')}
                        className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors duration-200 ease-in-out cursor-pointer`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Social Media and Email Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Social Media Metrics */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ease-in-out`}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Социальные сети</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Платформа</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Подписчики</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Вовлеченность</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Клики</th>
                </tr>
              </thead>
              <tbody>
                {socialMediaData.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <tr key={index} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-200 ease-in-out`}>
                      <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors duration-200 ease-in-out`}>
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded" style={{ backgroundColor: platform.color }}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          {platform.platform}
                        </div>
                      </td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{platform.followers.toLocaleString()}</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{platform.engagement}%</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{platform.clicks.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* Email Campaigns */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ease-in-out`}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Email-кампании</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Название</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Отправлено</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Open Rate</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Click Rate</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Дата</th>
                </tr>
              </thead>
              <tbody>
                {emailCampaigns.map((campaign) => (
                  <tr key={campaign.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-200 ease-in-out`}>
                    <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors duration-200 ease-in-out`}>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-teal-500" />
                        {campaign.name}
                      </div>
                    </td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.sent.toLocaleString()}</td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.openRate}%</td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.clickRate}%</td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{campaign.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Campaign Management Tools */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out mb-8`}>
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Инструменты управления</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'bg-gray-200 bg-gray-50'} transition-colors duration-200 ease-in-out hover:shadow-md`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                <Megaphone className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Создать кампанию</h3>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Создание новой рекламной кампании для любой платформы</p>
            <button 
              onClick={handleCreateCampaignClick}
              className={`w-full py-2 px-3 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} transition-all duration-200 ease-in-out cursor-pointer`}
            >
              Создать
            </button>
          </div>
          
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'bg-gray-200 bg-gray-50'} transition-colors duration-200 ease-in-out hover:shadow-md`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                <Mail className="w-5 h-5 text-green-500" />
              </div>
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email-рассылка</h3>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Создание и отправка email-рассылок вашим клиентам</p>
            <button 
              onClick={() => console.log('Email campaign button clicked!')}
              className={`w-full py-2 px-3 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} transition-all duration-200 ease-in-out cursor-pointer`}
            >
              Создать рассылку
            </button>
          </div>
          
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'bg-gray-200 bg-gray-50'} transition-colors duration-200 ease-in-out hover:shadow-md`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                <MessageSquare className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Социальные сети</h3>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Управление публикациями в социальных сетях</p>
            <button 
              onClick={() => console.log('Social media button clicked!')}
              className={`w-full py-2 px-3 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} transition-all duration-200 ease-in-out cursor-pointer`}
            >
              Управление
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- End of MarketingTab component ---

// Modal for viewing store details
const ViewStoreModal = ({ store, onClose, darkMode }) => {
  // The 'store' prop is guaranteed to be not null due to conditional rendering in Dashboard
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Детали магазина: {store.name}</h3>
          <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
            <XCircle className="w-5 h-5" />
          </button>
        </div>
        <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
          <p><strong>ID:</strong> {store.id}</p>
          <p><strong>Название:</strong> {store.name}</p>
          <p><strong>Статус:</strong> {store.status}</p>
          <p><strong>Выручка:</strong> ${store.revenue?.toLocaleString()}</p>
          <p><strong>Заказы:</strong> {store.orders}</p>
          <p><strong>Конверсия:</strong> {store.conversion}%</p>
          <p><strong>URL:</strong> <a href={`http://${store.url}`} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline cursor-pointer">{store.url}</a></p>
          <p><strong>Создан:</strong> {store.created}</p>
          <p><strong>Товары:</strong> {store.products}</p>
          <p><strong>Посетители:</strong> {store.visitors}</p>
        </div>
        <button 
          onClick={onClose} 
          className="mt-6 w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

// Modal for editing store details
const EditStoreModal = ({ store, onClose, onSave, darkMode }) => {
  const [editedStore, setEditedStore] = useState(store);

  useEffect(() => {
    setEditedStore(store);
  }, [store]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStore(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedStore);
    onClose();
  };

  // The 'store' prop is guaranteed to be not null due to conditional rendering in Dashboard
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Редактировать магазин: {store.name}</h3>
          <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
            <XCircle className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Название:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedStore.name || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="status" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Статус:</label>
            <select
              id="status"
              name="status"
              value={editedStore.status || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            >
              <option value="active">active</option>
              <option value="pending">pending</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
          <div>
            <label htmlFor="revenue" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Выручка:</label>
            <input
              type="number"
              id="revenue"
              name="revenue"
              value={editedStore.revenue || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="orders" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Заказы:</label>
            <input
              type="number"
              id="orders"
              name="orders"
              value={editedStore.orders || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="conversion" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Конверсия (%):</label>
            <input
              type="number"
              id="conversion"
              name="conversion"
              value={editedStore.conversion || ''}
              onChange={handleChange}
              step="0.1"
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="url" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>URL:</label>
            <input
              type="text"
              id="url"
              name="url"
              value={editedStore.url || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="created" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Дата создания:</label>
            <input
              type="date"
              id="created"
              name="created"
              value={editedStore.created || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="products" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Количество товаров:</label>
            <input
              type="number"
              id="products"
              name="products"
              value={editedStore.products || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="visitors" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Посетители:</label>
            <input
              type="number"
              id="visitors"
              name="visitors"
              value={editedStore.visitors || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
        </div>
        <button 
          onClick={handleSave} 
          className="mt-6 w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

// Modal for viewing product details
const ViewProductModal = ({ product, onClose, darkMode }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Детали товара: {product.name}</h3>
          <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
            <XCircle className="w-5 h-5" />
          </button>
        </div>
        <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Название:</strong> {product.name}</p>
          <p><strong>Цена:</strong> ${product.price?.toLocaleString()}</p>
          <p><strong>Себестоимость:</strong> ${product.cost?.toLocaleString()}</p>
          <p><strong>Прибыль:</strong> ${product.profit?.toLocaleString()}</p>
          <p><strong>На складе:</strong> {product.stock}</p>
          <p><strong>Продано:</strong> {product.sold}</p>
          <p><strong>Рейтинг:</strong> {product.rating} <Star className="w-4 h-4 inline-block text-yellow-400" fill="currentColor" /></p>
          <p><strong>Магазин:</strong> {product.store}</p>
          <p><strong>Категория:</strong> {product.category}</p>
        </div>
        <button 
          onClick={onClose} 
          className="mt-6 w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

// Modal for editing product details
const EditProductModal = ({ product, onClose, onSave, darkMode }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Редактировать товар: {product.name}</h3>
          <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
            <XCircle className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Название:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedProduct.name || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="price" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Цена:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={editedProduct.price || ''}
              onChange={handleChange}
              step="0.01"
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="stock" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>На складе:</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={editedProduct.stock || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="rating" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Рейтинг:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={editedProduct.rating || ''}
              onChange={handleChange}
              step="0.1"
              min="0"
              max="5"
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
        </div>
        <button 
          onClick={handleSave} 
          className="mt-6 w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

// Modal for viewing order details
const ViewOrderModal = ({ order, onClose, darkMode }) => {
  if (!order) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Детали заказа: {order.id}</h3>
          <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
            <XCircle className="w-5 h-5" />
          </button>
        </div>
        <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
          <p><strong>ID Заказа:</strong> {order.id}</p>
          <p><strong>Клиент:</strong> {order.customer}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Товар:</strong> {order.product}</p>
          <p><strong>Сумма:</strong> ${order.amount?.toLocaleString()}</p>
          <p><strong>Статус:</strong> {order.status}</p>
          <p><strong>Дата:</strong> {order.date}</p>
          <p><strong>Магазин:</strong> {order.store}</p>
          <p><strong>Доставка:</strong> {order.shipping}</p>
        </div>
        <button 
          onClick={onClose} 
          className="mt-6 w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

// Modal for editing order details
const EditOrderModal = ({ order, onClose, onSave, darkMode }) => {
  const [editedOrder, setEditedOrder] = useState(order);

  useEffect(() => {
    setEditedOrder(order);
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedOrder);
    onClose();
  };

  if (!order) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Редактировать заказ: {order.id}</h3>
          <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
            <XCircle className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="customer" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Клиент:</label>
            <input
              type="text"
              id="customer"
              name="customer"
              value={editedOrder.customer || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="amount" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Сумма:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={editedOrder.amount || ''}
              onChange={handleChange}
              step="0.01"
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div>
            <label htmlFor="status" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Статус:</label>
            <select
              id="status"
              name="status"
              value={editedOrder.status || ''}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ease-in-out`}
            >
              <option value="completed">completed</option>
              <option value="processing">processing</option>
              <option value="shipped">shipped</option>
              <option value="pending">pending</option>
            </select>
          </div>
        </div>
        <button 
          onClick={handleSave} 
          className="mt-6 w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); 
  const [darkMode, setDarkMode] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [showSearchInput, setShowSearchInput] = useState(false); // State to toggle search input visibility
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notifications dropdown
  const [showFilterStoresModal, setShowFilterStoresModal] = useState(false); // New state for filter stores modal
  const [showAddStoreModal, setShowAddStoreModal] = useState(false); // New state for add store modal
  const [showViewStoreModal, setShowViewStoreModal] = useState(false); // State for view store modal
  const [showEditStoreModal, setShowEditStoreModal] = useState(false); // State for edit store modal
  const [selectedStore, setSelectedStore] = useState(null); // State to hold the selected store data
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for authentication
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for mobile sidebar toggle

  // New states for product and order modals
  const [showViewProductModal, setShowViewProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showViewOrderModal, setShowViewOrderModal] = useState(false);
  const [showEditOrderModal, setShowEditOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);


  // Mock data for notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Новый заказ #1005 поступил!', time: '5 минут назад', read: false },
    { id: 2, message: 'Кампания "Летняя распродажа" завершена.', time: '1 час назад', read: false },
    { id: 3, message: 'Низкий запас товара: Беспроводные наушники.', time: '3 часа назад', read: true },
    { id: 4, message: 'Обновление системы доступно.', time: '1 день назад', read: false },
  ]);

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      const isDark = savedTheme === 'true';
      setDarkMode(isDark);
      // Apply theme immediately on load
      if (isDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  }, []);

  // Save theme preference to localStorage and apply theme class when it changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // Function to handle successful authentication
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('overview'); // Reset to overview or a default tab
  };

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // --- Button Click Handlers ---
  const handleSearchClick = () => {
    setShowSearchInput(prev => !prev); // Toggle search input visibility
    if (showSearchInput && searchTerm) {
      // Simulate search action
      console.log('Searching for:', searchTerm);
      // In a real app, you'd filter data here
      // For now, we just log and clear the search term
      setSearchTerm('');
    }
  };

  const handleNotificationsClick = () => {
    setShowNotifications(prev => !prev); // Toggle notifications dropdown visibility
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const handleNewStoreClick = () => {
    setShowAddStoreModal(true); // Open the add store modal
    console.log('Add new store button clicked!');
  };

  const handleFilterStoresClick = () => {
    setShowFilterStoresModal(true); // Open the filter stores modal
    console.log('Filter stores button clicked!');
  };

  const handleStoreActionClick = (storeId, action) => { 
    const store = stores.find(s => s.id === storeId);
    if (!store) {
      console.log(`Store with ID ${storeId} not found.`);
      return;
    }

    switch (action) {
      case 'view':
        setSelectedStore(store);
        setShowViewStoreModal(true);
        break;
      case 'edit':
        setSelectedStore(store);
        setShowEditStoreModal(true);
        break;
      case 'delete':
        // Using console.log instead of alert for confirmation
        console.log(`Вы уверены, что хотите удалить магазин "${store.name}"?`);
        setStores(prevStores => prevStores.filter(s => s.id !== storeId));
        console.log(`Магазин "${store.name}" (ID: ${storeId}) удален.`);
        break;
      default:
        console.log(`Действие "${action}" для магазина ${storeId}`);
    }
  };

  const handleSaveStore = (updatedStore) => {
    setStores(prevStores => 
      prevStores.map(store => (store.id === updatedStore.id ? updatedStore : store))
    );
    console.log('Магазин сохранен:', updatedStore);
  };

  const handleAddProductClick = () => console.log('Add product button clicked!');
  const handleFilterProductsClick = () => console.log('Filter products button clicked!');
  const handleDownloadProductsClick = () => console.log('Download products button clicked!');
  
  const handleProductActionClick = (productId, action) => {
    const product = products.find(p => p.id === productId);
    if (!product) {
      console.log(`Product with ID ${productId} not found.`);
      return;
    }

    switch (action) {
      case 'view':
        setSelectedProduct(product);
        setShowViewProductModal(true);
        break;
      case 'edit':
        setSelectedProduct(product);
        setShowEditProductModal(true);
        break;
      case 'delete':
        console.log(`Вы уверены, что хотите удалить товар "${product.name}"?`);
        setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
        console.log(`Товар "${product.name}" (ID: ${productId}) удален.`);
        break;
      default:
        console.log(`Действие "${action}" для товара ${productId}`);
    }
  };

  const handleSaveProduct = (updatedProduct) => {
    setProducts(prevProducts => 
      prevProducts.map(product => (product.id === updatedProduct.id ? updatedProduct : product))
    );
    console.log('Товар сохранен:', updatedProduct);
  };

  const handleFilterOrdersClick = () => console.log('Filter orders button clicked!');
  const handleDownloadOrdersClick = () => console.log('Download orders button clicked!');
  
  const handleOrderActionClick = (orderId, action) => { 
    const order = orders.find(o => o.id === orderId);
    if (!order) {
      console.log(`Order with ID ${orderId} not found.`);
      return;
    }

    switch (action) {
      case 'view':
        setSelectedOrder(order);
        setShowViewOrderModal(true);
        break;
      case 'edit':
        setSelectedOrder(order);
        setShowEditOrderModal(true);
        break;
      case 'delete':
        console.log(`Вы уверены, что хотите удалить заказ "${order.id}"?`);
        setOrders(prevOrders => prevOrders.filter(o => o.id !== orderId));
        console.log(`Заказ "${order.id}" удален.`);
        break;
      default:
        console.log(`Действие "${action}" для заказа ${orderId}`);
    }
  };

  const handleSaveOrder = (updatedOrder) => {
    setOrders(prevOrders => 
      prevOrders.map(order => (order.id === updatedOrder.id ? updatedOrder : order))
    );
    console.log('Заказ сохранен:', updatedOrder);
  };

  const handleDateRangeClick = () => console.log('Date range button clicked!');
  const handleExportAnalyticsClick = () => console.log('Export analytics button clicked!');
  const handleViewAllOrdersClick = () => {
    console.log('Переход к просмотру всех заказов');
    setActiveTab('orders');
    setIsSidebarOpen(false); // Close sidebar on tab change for mobile
  };
  const handleRecentOrderActionClick = (orderId, action) => { 
    // This is for the overview tab's recent orders, can reuse main order action handler
    handleOrderActionClick(orderId, action);
  };
  // -----------------------------

  // Mock data for stores
  const [stores, setStores] = useState([ // Changed to mutable state for delete action
    {
      id: 1,
      name: 'Fashion Store USA',
      status: 'active',
      revenue: 15420,
      orders: 89,
      conversion: 3.2,
      url: 'fashion-usa.mystore.com',
      created: '2024-01-15',
      products: 156,
      visitors: 2840
    },
    {
      id: 2,
      name: 'Tech Gadgets EU',
      status: 'active',
      revenue: 8750,
      orders: 45,
      conversion: 2.8,
      url: 'tech-eu.mystore.com',
      created: '2024-02-08',
      products: 89,
      visitors: 1560
    },
    {
      id: 3,
      name: 'Home Decor',
      status: 'pending',
      revenue: 2180,
      orders: 12,
      conversion: 1.9,
      url: 'homedecor.mystore.com',
      created: '2024-03-12',
      products: 45,
      visitors: 890
    }
  ]);

  // Mock data for products
  const [products, setProducts] = useState([ // Changed to mutable state for delete action
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      cost: 45.00,
      profit: 44.99,
      stock: 150,
      sold: 89,
      rating: 4.5,
      store: 'Tech Gadgets EU',
      image: 'headphones.jpg',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 199.99,
      cost: 120.00,
      profit: 79.99,
      stock: 85,
      sold: 34,
      rating: 4.7,
      store: 'Tech Gadgets EU',
      image: 'smartwatch.jpg',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Vintage Leather Handbag',
      price: 129.99,
      cost: 65.00,
      profit: 64.99,
      stock: 45,
      sold: 67,
      rating: 4.3,
      store: 'Fashion Store USA',
      image: 'handbag.jpg',
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'Modern Table Lamp',
      price: 79.99,
      cost: 35.00,
      profit: 44.99,
      stock: 12,
      sold: 8,
      rating: 4.1,
      store: 'Home Decor',
      image: 'lamp.jpg',
      category: 'Home'
    }
  ]);

  // Mock data for orders
  const [orders, setOrders] = useState([ // Changed to mutable state for delete action
    {
      id: '#1001',
      customer: 'John Smith',
      email: 'john@email.com',
      product: 'Wireless Headphones',
      amount: 89.99,
      status: 'completed',
      date: '2024-05-25',
      store: 'Tech Gadgets EU',
      shipping: 'Express'
    },
    {
      id: '#1002',
      customer: 'Sarah Johnson',
      email: 'sarah@email.com',
      product: 'Smart Watch',
      amount: 199.99,
      status: 'processing',
      date: '2024-05-24',
      store: 'Tech Gadgets EU',
      shipping: 'Standard'
    },
    {
      id: '#1003',
      customer: 'Mike Brown',
      email: 'mike@email.com',
      product: 'Phone Case',
      amount: 24.99,
      status: 'shipped',
      date: '2024-05-23',
      store: 'Fashion Store USA',
      shipping: 'Express'
    },
    {
      id: '#1004',
      customer: 'Emma Davis',
      email: 'emma@email.com',
      product: 'Bluetooth Speaker',
      amount: 79.99,
      status: 'pending',
      date: '2024-05-22',
      store: 'Tech Gadgets EU',
      shipping: 'Standard'
    }
  ]);

  // Analytics data
  const salesData = [ 
    { month: 'Янв', revenue: 12000, orders: 45, profit: 5400 },
    { month: 'Фев', revenue: 19000, orders: 78, profit: 8550 },
    { month: 'Мар', revenue: 15000, orders: 62, profit: 6750 },
    { month: 'Апр', revenue: 22000, orders: 89, profit: 9900 },
    { month: 'Май', revenue: 28000, orders: 112, profit: 12600 },
    { month: 'Июн', revenue: 35000, orders: 156, profit: 15750 }
  ];

  const trafficData = [ 
    { name: 'Facebook', value: 45, color: '#3b82f6', visitors: 1278 },
    { name: 'Google', value: 30, color: '#10b981', visitors: 852 },
    { name: 'TikTok', value: 15, color: '#f59e0b', visitors: 426 },
    { name: 'Прямой', value: 10, color: '#8b5cf6', visitors: 284 }
  ];

  const deviceData = [ 
    { name: 'Desktop', value: 55, color: '#3b82f6' },
    { name: 'Mobile', value: 35, color: '#10b981' },
    { name: 'Tablet', value: 10, color: '#f59e0b' }
  ];

  const conversionData = [ 
    { week: 'Нед 1', rate: 2.1 },
    { week: 'Нед 2', rate: 2.8 },
    { week: 'Нед 3', rate: 3.2 },
    { week: 'Нед 4', rate: 2.9 }
  ];

  const getStatusBg = (status) => { 
    // Adjusted for light/dark mode with slightly softer backgrounds
    switch (status) {
      case 'active': return darkMode ? 'bg-green-800/50 text-green-300' : 'bg-green-100 text-green-700';
      case 'pending': return darkMode ? 'bg-yellow-800/50 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
      case 'inactive': return darkMode ? 'bg-red-800/50 text-red-300' : 'bg-red-100 text-red-700';
      case 'completed': return darkMode ? 'bg-green-800/50 text-green-300' : 'bg-green-100 text-green-700';
      case 'processing': return darkMode ? 'bg-blue-800/50 text-blue-300' : 'bg-blue-100 text-blue-700';
      case 'shipped': return darkMode ? 'bg-purple-800/50 text-purple-300' : 'bg-purple-100 text-purple-700';
      default: return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600';
    }
  };

  const StatCard = ({ icon: Icon, title, value, change, changeType, subtitle }) => ( 
    // StatCard with dark mode support and slightly larger fonts
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-200 ease-in-out`}>{title}</p> 
          <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>{value}</p> 
          {subtitle && (
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-200 ease-in-out`}>{subtitle}</p>
          )}
          {change && (
            <p className={`text-base mt-1 ${changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
              {changeType === 'positive' ? '+' : ''}{change}% за месяц
            </p>
          )}
        </div>
        {/* Using Teal accent color for both themes */}
        <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors duration-200 ease-in-out`}>
          <Icon className="w-7 h-7 text-teal-500" /> 
        </div>
      </div>
    </div>
  );

  const Sidebar = ({isOpen, onClose}) => ( 
    // Sidebar with dark mode support and mobile responsiveness
    <div className={`fixed inset-y-0 left-0 z-40 w-64 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r shadow-lg lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out flex justify-between items-center`}>
        <div className="flex items-center gap-3">
          {/* Using Teal gradient for logo background */}
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>DropBridge</span>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <XCircle className="w-6 h-6" />
        </button>
      </div>

      <nav className="px-4 py-4">
        {[
          { id: 'overview', label: 'Обзор', icon: BarChart3 },
          { id: 'stores', label: 'Магазины', icon: Globe },
          { id: 'products', label: 'Товары', icon: Package },
          { id: 'orders', label: 'Заказы', icon: ShoppingBag },
          { id: 'analytics', label: 'Аналитика', icon: TrendingUp },
          { id: 'marketing', label: 'Маркетинг', icon: Target },
          { id: 'payments', label: 'Платежи', icon: CreditCard },
          { id: 'settings', label: 'Настройки', icon: Settings }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => { setActiveTab(item.id); onClose(); }} // Close sidebar on click
            className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-all duration-200 ease-in-out text-base font-medium ${
              activeTab === item.id
                ? 'bg-teal-500 text-white shadow-sm'
                : (darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900')
            } cursor-pointer`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );

  const Header = ({ onMenuClick }) => ( 
    // Header with theme toggle support and functional buttons
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-4 py-3 sm:px-6 sm:py-4 shadow-sm transition-colors duration-200 ease-in-out`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onMenuClick} 
            className="lg:hidden p-2 mr-2 rounded-lg text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Добро пожаловать, Александр!</h1>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-200 ease-in-out`}>Вот что происходит с вашим бизнесом сегодня</p> 
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out cursor-pointer`}
            aria-label={darkMode ? "Переключить на светлую тему" : "Переключить на темную тему"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Search input and button */}
          <div className="relative flex items-center">
            {showSearchInput && (
              <input
                type="text"
                placeholder="Поиск..."
                className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200 ease-in-out w-32 sm:w-48`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchClick();
                  }
                }}
              />
            )}
            <button
              onClick={handleSearchClick}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out ${showSearchInput ? 'ml-2' : ''} cursor-pointer`}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Notifications button and dropdown */}
          <div className="relative">
            <button
              onClick={handleNotificationsClick}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out relative cursor-pointer`}
            >
              <Bell className="w-5 h-5" />
              {/* Notification dot */}
              {notifications.filter(notif => !notif.read).length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </button>
            {showNotifications && (
              <div className={`absolute right-0 mt-2 w-72 sm:w-80 rounded-lg shadow-lg z-10 ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'} animate-fade-in`}>
                <div className={`p-4 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'} flex justify-between items-center`}>
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Уведомления</h3>
                  <button
                    onClick={clearAllNotifications}
                    className="text-xs text-teal-500 hover:text-teal-600 transition-colors duration-200 ease-in-out cursor-pointer"
                  >
                    Очистить все
                  </button>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map(notif => (
                      <div 
                        key={notif.id} 
                        className={`p-4 flex items-start gap-3 ${darkMode ? 'border-b border-gray-600' : 'border-b border-gray-200'} ${!notif.read ? (darkMode ? 'bg-gray-600/30' : 'bg-blue-50/50') : ''} hover:bg-opacity-70 transition-colors duration-200 ease-in-out`}
                      >
                        <div className="flex-1">
                          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} text-sm font-medium`}>{notif.message}</p>
                          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs mt-1`}>{notif.time}</p>
                        </div>
                        {!notif.read && (
                          <button
                            onClick={() => markNotificationAsRead(notif.id)}
                            className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-500' : 'hover:bg-gray-200'} text-teal-500 transition-colors duration-200 ease-in-out cursor-pointer`}
                            title="Отметить как прочитанное"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        {notif.read && (
                          <button
                            onClick={() => setNotifications(notifications.filter(n => n.id !== notif.id))}
                            className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-500' : 'hover:bg-gray-200'} text-red-500 transition-colors duration-200 ease-in-out cursor-pointer`}
                            title="Удалить"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className={`p-4 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Нет новых уведомлений.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Logout button */}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className={`px-3 py-2 text-sm rounded-lg ${darkMode ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'} transition-all duration-200 ease-in-out flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer`}
            >
              Выйти
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Main content rendering based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="p-4 sm:p-6 animate-fade-in">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                icon={DollarSign}
                title="Общая выручка"
                value="$26,350"
                change={12.5}
                changeType="positive"
              />
              <StatCard
                icon={ShoppingBag}
                title="Заказы"
                value="146"
                change={8.2}
                changeType="positive"
              />
              <StatCard
                icon={Users}
                title="Посетители"
                value="5,290"
                change={-3.1}
                changeType="negative"
              />
              <StatCard
                icon={TrendingUp}
                title="Конверсия"
                value="2.8%"
                change={0.4}
                changeType="positive"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Sales Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Продажи</h2>
                  <button
                    onClick={handleDateRangeClick}
                    className={`px-3 py-1 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                  >
                    <Calendar className="w-4 h-4" />
                    За 30 дней
                  </button>
                </div>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                        axisLine={false} 
                        tickLine={false} 
                      />
                      <YAxis 
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `$${value / 1000}k`} 
                      />
                      <Tooltip 
                        cursor={{ fill: darkMode ? 'rgba(107, 114, 128, 0.2)' : 'rgba(229, 231, 235, 0.5)' }} 
                        contentStyle={{ 
                          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                          borderColor: darkMode ? '#374151' : '#e5e7eb',
                          color: darkMode ? '#f9fafb' : '#111827'
                        }} 
                      />
                      <Bar dataKey="revenue" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Traffic Sources Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Источники трафика</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-64 w-full md:w-1/2 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {trafficData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value, name, props) => [`${value}% (${props.payload.visitors} посетителей)`, props.payload.name]}
                          contentStyle={{ 
                            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                            borderColor: darkMode ? '#374151' : '#e5e7eb',
                            color: darkMode ? '#f9fafb' : '#111827'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>
                      <div className="text-sm font-medium mb-2">Источники</div>
                      {trafficData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                            <span>{item.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span>{item.value}%</span>
                            <span className="text-xs text-gray-400">({item.visitors})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                      <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Всего посетителей</div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>
                        {trafficData.reduce((sum, item) => sum + item.visitors, 0).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ease-in-out`}>
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Последние заказы</h2>
                <button 
                  onClick={handleViewAllOrdersClick}
                  className="text-sm text-teal-500 hover:text-teal-600 font-medium transition-colors duration-200 ease-in-out cursor-pointer"
                >
                  Посмотреть все
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>ID Заказа</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Клиент</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Сумма</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Статус</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Дата</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-200 ease-in-out`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors duration-200 ease-in-out`}>{order.id}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{order.customer}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>${order.amount}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{order.date}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleRecentOrderActionClick(order.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleRecentOrderActionClick(order.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'stores':
        return (
          <div className="p-4 sm:p-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Магазины</h2>
              <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
                <button
                  onClick={handleFilterStoresClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                >
                  <Filter className="w-4 h-4" />
                  Фильтр
                </button>
                <button
                  onClick={handleNewStoreClick}
                  className="px-4 py-2 text-sm rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Новый магазин
                </button>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ease-in-out`}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Название</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Статус</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Выручка</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Заказы</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Конверсия</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stores.map((store) => (
                      <tr key={store.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-200 ease-in-out`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors duration-200 ease-in-out`}>{store.name}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(store.status)}`}>
                            {store.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>${store.revenue.toLocaleString()}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{store.orders}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{store.conversion}%</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleStoreActionClick(store.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleStoreActionClick(store.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleStoreActionClick(store.id, 'delete')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Filter Stores Modal */}
            {showFilterStoresModal && (
              <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 animate-fade-in">
                <div className={`p-6 rounded-xl shadow-lg w-full max-w-sm mx-4 sm:mx-0 transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Фильтр магазинов</h3>
                    <button onClick={() => setShowFilterStoresModal(false)} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Здесь будут опции фильтрации магазинов.</p>
                  <button 
                    onClick={() => setShowFilterStoresModal(false)} 
                    className="w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Применить фильтр
                  </button>
                </div>
              </div>
            )}

            {/* Add Store Modal */}
            {showAddStoreModal && (
              <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 animate-fade-in">
                <div className={`p-6 rounded-xl shadow-lg w-full max-w-sm mx-4 sm:mx-0 transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Добавить новый магазин</h3>
                    <button onClick={() => setShowAddStoreModal(false)} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200 ease-in-out cursor-pointer`}>
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Форма для добавления нового магазина.</p>
                  <button 
                    onClick={() => setShowAddStoreModal(false)} 
                    className="w-full py-2 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Добавить магазин
                  </button>
                </div>
              </div>
            )}

            {/* View Store Modal - Conditionally rendered */}
            {showViewStoreModal && selectedStore && (
              <ViewStoreModal 
                store={selectedStore} 
                onClose={() => setShowViewStoreModal(false)} 
                darkMode={darkMode} 
              />
            )}

            {/* Edit Store Modal - Conditionally rendered */}
            {showEditStoreModal && selectedStore && (
              <EditStoreModal 
                store={selectedStore} 
                onClose={() => setShowEditStoreModal(false)} 
                onSave={handleSaveStore} 
                darkMode={darkMode}
              />
            )}
          </div>
        );
      case 'products':
        return (
          <div className="p-4 sm:p-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Товары</h2>
              <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
                <button
                  onClick={handleFilterProductsClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                >
                  <Filter className="w-4 h-4" />
                  Фильтр
                </button>
                <button
                  onClick={handleDownloadProductsClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                >
                  <Download className="w-4 h-4" />
                  Скачать
                </button>
                <button
                  onClick={handleAddProductClick}
                  className="px-4 py-2 text-sm rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-all duration-200 ease-in-out flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Добавить товар
                </button>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ease-in-out`}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Название</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Цена</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Прибыль</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Остаток</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Продано</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Рейтинг</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-200 ease-in-out`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors duration-200 ease-in-out`}>{product.name}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>${product.price}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>${product.profit}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{product.stock}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{product.sold}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out flex items-center gap-1`}>
                          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                          {product.rating}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleProductActionClick(product.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleProductActionClick(product.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleProductActionClick(product.id, 'delete')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* View Product Modal - Conditionally rendered */}
            {showViewProductModal && selectedProduct && (
              <ViewProductModal 
                product={selectedProduct} 
                onClose={() => setShowViewProductModal(false)} 
                darkMode={darkMode} 
              />
            )}

            {/* Edit Product Modal - Conditionally rendered */}
            {showEditProductModal && selectedProduct && (
              <EditProductModal 
                product={selectedProduct} 
                onClose={() => setShowEditProductModal(false)} 
                onSave={handleSaveProduct} 
                darkMode={darkMode}
              />
            )}
          </div>
        );
      case 'orders':
        return (
          <div className="p-4 sm:p-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Заказы</h2>
              <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
                <button
                  onClick={handleFilterOrdersClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                >
                  <Filter className="w-4 h-4" />
                  Фильтр
                </button>
                <button
                  onClick={handleDownloadOrdersClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                >
                  <Download className="w-4 h-4" />
                  Скачать
                </button>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors duration-200 ease-in-out`}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>ID Заказа</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Клиент</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Сумма</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Статус</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Дата</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Магазин</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors duration-200 ease-in-out`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors duration-200 ease-in-out`}>{order.id}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{order.customer}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>${order.amount}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{order.date}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>{order.store}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOrderActionClick(order.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleOrderActionClick(order.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleOrderActionClick(order.id, 'delete')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors duration-200 ease-in-out cursor-pointer`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* View Order Modal - Conditionally rendered */}
            {showViewOrderModal && selectedOrder && (
              <ViewOrderModal 
                order={selectedOrder} 
                onClose={() => setShowViewOrderModal(false)} 
                darkMode={darkMode} 
              />
            )}

            {/* Edit Order Modal - Conditionally rendered */}
            {showEditOrderModal && selectedOrder && (
              <EditOrderModal 
                order={selectedOrder} 
                onClose={() => setShowEditOrderModal(false)} 
                onSave={handleSaveOrder} 
                darkMode={darkMode}
              />
            )}
          </div>
        );
      case 'analytics':
        return (
          <div className="p-4 sm:p-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Аналитика</h2>
              <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto">
                <button
                  onClick={handleDateRangeClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                >
                  <Calendar className="w-4 h-4" />
                  Период
                </button>
                <button
                  onClick={handleExportAnalyticsClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-all duration-200 ease-in-out flex items-center gap-2 cursor-pointer`}
                >
                  <Download className="w-4 h-4" />
                  Экспорт
                </button>
              </div>
            </div>
            {/* Analytics Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Sales Overview Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Обзор продаж</h2>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                        axisLine={false} 
                        tickLine={false} 
                      />
                      <YAxis 
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `$${value / 1000}k`} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                          borderColor: darkMode ? '#374151' : '#e5e7eb',
                          color: darkMode ? '#f9fafb' : '#111827'
                        }} 
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#14b8a6" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                      <Area type="monotone" dataKey="profit" stroke="#f59e0b" fillOpacity={1} fill="url(#colorProfit)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Conversion Rate Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Коэффициент конверсии</h2>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={conversionData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} vertical={false} />
                      <XAxis 
                        dataKey="week" 
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                        axisLine={false} 
                        tickLine={false} 
                      />
                      <YAxis 
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }} 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `${value}%`} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                          borderColor: darkMode ? '#374151' : '#e5e7eb',
                          color: darkMode ? '#f9fafb' : '#111827'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="rate" 
                        stroke="#8b5cf6" 
                        strokeWidth={3} 
                        dot={{ r: 5, fill: '#8b5cf6', strokeWidth: 0 }}
                        activeDot={{ r: 7, fill: '#8b5cf6', strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            {/* Analytics Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Traffic Sources Pie Chart (already in overview, maybe show different metric here?) */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Источники трафика (Посетители)</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-64 w-full md:w-1/2 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="visitors" // Changed to visitors
                        >
                          {trafficData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value, name, props) => [`${value.toLocaleString()} посетителей (${props.payload.value}%)`, props.payload.name]}
                          contentStyle={{ 
                            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                            borderColor: darkMode ? '#374151' : '#e5e7eb',
                            color: darkMode ? '#f9fafb' : '#111827'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>
                      <div className="text-sm font-medium mb-2">Источники</div>
                      {trafficData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                            <span>{item.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span>{item.visitors.toLocaleString()}</span>
                            <span className="text-xs text-gray-400">({item.value}%)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-200 ease-in-out`}>
                      <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>Всего посетителей</div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-200 ease-in-out`}>
                        {trafficData.reduce((sum, item) => sum + item.visitors, 0).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Device Usage Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-200 ease-in-out`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200 ease-in-out`}>Использование устройств</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="h-64 w-full md:w-1/2 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Доля']}
                          contentStyle={{ 
                            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                            borderColor: darkMode ? '#374151' : '#e5e7eb',
                            color: darkMode ? '#f9fafb' : '#111827'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-200 ease-in-out`}>
                      <div className="text-sm font-medium mb-2">Устройства</div>
                      {deviceData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                            <span>{item.name}</span>
                          </div>
                          <span>{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'marketing':
        // Use the enhanced MarketingTab component, passing the darkMode prop
        return <MarketingTab darkMode={darkMode} />;
      case 'payments':
        return <PaymentsTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <div className="p-6">Выберите раздел</div>;
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <div className={`flex flex-col lg:flex-row min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-200 ease-in-out`}>
          {/* Mobile Overlay for Sidebar */}
          {isSidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={toggleSidebar}></div>
          )}
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <div className="flex-1 flex flex-col">
            <Header onMenuClick={toggleSidebar} />
            <main className="flex-1 overflow-y-auto">
              {renderContent()}
            </main>
          </div>
        </div>
      ) : (
        <AuthPage onAuthSuccess={handleAuthSuccess} darkMode={darkMode} />
      )}
    </>
  );
};

export default Dashboard;
