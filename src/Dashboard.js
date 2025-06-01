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
  BarChart3,
  // Added icons for MarketingTab
  Mail, Facebook, Instagram, Twitter,
  Youtube, Linkedin, MessageSquare, Megaphone
} from 'lucide-react';

// Placeholder components (Payments and Settings remain placeholders)
const PaymentsTab = () => <div className="p-6">Payments Content Placeholder</div>;
const SettingsTab = () => <div className="p-6">Settings Content Placeholder</div>;

// --- Enhanced MarketingTab component --- 
const MarketingTab = ({ darkMode }) => {
  // Button handlers
  const handleCreateCampaignClick = () => alert('Create campaign button clicked!');
  const handleFilterCampaignsClick = () => alert('Filter campaigns button clicked!');
  const handleDownloadReportClick = () => alert('Download report button clicked!');
  const handleDateRangeClick = () => alert('Date range button clicked!');
  const handleCampaignActionClick = (campaignId, action) => alert(`Action "${action}" for campaign ${campaignId}`);
  
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
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Маркетинг</h2>
        <div className="flex gap-2">
          <button
            onClick={handleFilterCampaignsClick}
            className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
          >
            <Filter className="w-4 h-4" />
            Фильтр
          </button>
          <button
            onClick={handleDateRangeClick}
            className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
          >
            <Calendar className="w-4 h-4" />
            Период
          </button>
          <button
            onClick={handleDownloadReportClick}
            className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
          >
            <Download className="w-4 h-4" />
            Отчет
          </button>
          <button
            onClick={handleCreateCampaignClick}
            className="px-4 py-2 text-sm rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Новая кампания
          </button>
        </div>
      </div>

      {/* Marketing Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow transition-all`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>Расходы на рекламу</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>$9,000</p>
              <p className={`text-base mt-1 text-red-500`}>
                +12.5% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors`}>
              <DollarSign className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow transition-all`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>Клики</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>11,450</p>
              <p className={`text-base mt-1 text-green-500`}>
                +8.2% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors`}>
              <TrendingUp className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow transition-all`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>Конверсии</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>438</p>
              <p className={`text-base mt-1 text-green-500`}>
                +15.3% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors`}>
              <Target className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow transition-all`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>ROI</p>
              <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>285%</p>
              <p className={`text-base mt-1 text-green-500`}>
                +5.4% за месяц
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors`}>
              <DollarSign className="w-7 h-7 text-teal-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Ad Spend and Social Media Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Ad Spend by Platform */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
          <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Расходы по платформам</h2>
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
              <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>
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
              <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Общие расходы</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                  ${adSpendData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Marketing Performance */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
          <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Email-маркетинг</h2>
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
          <div className="flex justify-between mt-4">
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
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors mb-8`}>
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Рекламные кампании</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Название</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Платформа</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Статус</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Бюджет</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Потрачено</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Клики</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>CTR</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>ROI</th>
                <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                  <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>{campaign.name}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.platform}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${campaign.budget}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${campaign.spent}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.clicks.toLocaleString()}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.ctr}%</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.roi}%</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCampaignActionClick(campaign.id, 'view')}
                        className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCampaignActionClick(campaign.id, 'edit')}
                        className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCampaignActionClick(campaign.id, 'delete')}
                        className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors`}
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
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors`}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Социальные сети</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Платформа</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Подписчики</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Вовлеченность</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Клики</th>
                </tr>
              </thead>
              <tbody>
                {socialMediaData.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <tr key={index} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                      <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded" style={{ backgroundColor: platform.color }}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          {platform.platform}
                        </div>
                      </td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{platform.followers.toLocaleString()}</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{platform.engagement}%</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{platform.clicks.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Email Campaigns */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors`}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Email-кампании</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Название</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Отправлено</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Open Rate</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Click Rate</th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Дата</th>
                </tr>
              </thead>
              <tbody>
                {emailCampaigns.map((campaign) => (
                  <tr key={campaign.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                    <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-teal-500" />
                        {campaign.name}
                      </div>
                    </td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.sent.toLocaleString()}</td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.openRate}%</td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.clickRate}%</td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{campaign.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Campaign Management Tools */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors mb-8`}>
        <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Инструменты управления</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'} transition-colors`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                <Megaphone className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Создать кампанию</h3>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Создание новой рекламной кампании для любой платформы</p>
            <button 
              onClick={handleCreateCampaignClick}
              className={`w-full py-2 px-3 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} transition-colors`}
            >
              Создать
            </button>
          </div>
          
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'} transition-colors`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                <Mail className="w-5 h-5 text-green-500" />
              </div>
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email-рассылка</h3>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Создание и отправка email-рассылок вашим клиентам</p>
            <button 
              onClick={() => alert('Email campaign button clicked!')}
              className={`w-full py-2 px-3 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} transition-colors`}
            >
              Создать рассылку
            </button>
          </div>
          
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'} transition-colors`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                <MessageSquare className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Социальные сети</h3>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Управление публикациями в социальных сетях</p>
            <button 
              onClick={() => alert('Social media button clicked!')}
              className={`w-full py-2 px-3 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} transition-colors`}
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


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); 
  const [darkMode, setDarkMode] = useState(false); 

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

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // --- Button Click Handlers ---
  const handleSearchClick = () => alert('Search button clicked!');
  const handleNotificationsClick = () => alert('Notifications button clicked!');
  const handleNewStoreClick = () => alert('New store button clicked!');
  const handleFilterStoresClick = () => alert('Filter stores button clicked!');
  const handleStoreActionClick = (storeId, action) => alert(`Action "${action}" for store ${storeId}`); 
  const handleAddProductClick = () => alert('Add product button clicked!');
  const handleFilterProductsClick = () => alert('Filter products button clicked!');
  const handleDownloadProductsClick = () => alert('Download products button clicked!');
  const handleProductActionClick = (productId, action) => alert(`Action "${action}" for product ${productId}`); 
  const handleFilterOrdersClick = () => alert('Filter orders button clicked!');
  const handleDownloadOrdersClick = () => alert('Download orders button clicked!');
  const handleOrderActionClick = (orderId, action) => alert(`Action "${action}" for order ${orderId}`); 
  const handleDateRangeClick = () => alert('Date range button clicked!');
  const handleExportAnalyticsClick = () => alert('Export analytics button clicked!');
  const handleViewAllOrdersClick = () => {
    alert('Переход к просмотру всех заказов');
    setActiveTab('orders');
  };
  const handleRecentOrderActionClick = (orderId, action) => { 
    alert(`Действие "${action}" для заказа ${orderId}`);
  };
  // -----------------------------

  // Mock data for stores
  const [stores] = useState([ 
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
  const [products] = useState([ 
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
  const [orders] = useState([ 
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
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow transition-all`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>{title}</p> 
          <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>{value}</p> 
          {subtitle && (
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>{subtitle}</p>
          )}
          {change && (
            <p className={`text-base mt-1 ${changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
              {changeType === 'positive' ? '+' : ''}{change}% за месяц
            </p>
          )}
        </div>
        {/* Using Teal accent color for both themes */}
        <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'} transition-colors`}>
          <Icon className="w-7 h-7 text-teal-500" /> 
        </div>
      </div>
    </div>
  );

  const Sidebar = () => ( 
    // Sidebar with dark mode support and slightly larger fonts
    <div className={`w-64 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r min-h-screen shadow-sm transition-colors`}>
      <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
        <div className="flex items-center gap-3">
          {/* Using Teal gradient for logo background */}
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>DropBridge</span>
        </div>
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
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-all text-base font-medium ${
              activeTab === item.id
                ? 'bg-teal-500 text-white shadow-sm'
                : (darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900')
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );

  const Header = () => ( 
    // Header with theme toggle support and functional buttons
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 shadow-sm transition-colors`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Добро пожаловать, Александр!</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-base transition-colors`}>Вот что происходит с вашим бизнесом сегодня</p> 
        </div>
        <div className="flex items-center gap-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors`}
            aria-label={darkMode ? "Переключить на светлую тему" : "Переключить на темную тему"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          {/* Search button */}
          <button
            onClick={handleSearchClick}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors`}
          >
            <Search className="w-5 h-5" />
          </button>
          {/* Notifications button */}
          <button
            onClick={handleNotificationsClick}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors relative`}
          >
            <Bell className="w-5 h-5" />
            {/* Notification dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );

  // Main content rendering based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="p-6">
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
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Продажи</h2>
                  <button
                    onClick={handleDateRangeClick}
                    className={`px-3 py-1 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                  >
                    <Calendar className="w-4 h-4" />
                    За 30 дней
                  </button>
                </div>
                <div className="h-80">
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
                        formatter={(value, name) => {
                          if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Выручка'];
                          if (name === 'orders') return [value, 'Заказы'];
                          if (name === 'profit') return [`$${value.toLocaleString()}`, 'Прибыль'];
                          return [value, name];
                        }}
                      />
                      <Bar dataKey="revenue" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Traffic Sources Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Источники трафика</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-64 flex items-center justify-center">
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
                  <div>
                    <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>
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
                    <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                      <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Всего посетителей</div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                        {trafficData.reduce((sum, item) => sum + item.visitors, 0).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors`}>
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Последние заказы</h2>
                <button 
                  onClick={handleViewAllOrdersClick}
                  className="text-sm text-teal-500 hover:text-teal-600 font-medium transition-colors"
                >
                  Посмотреть все
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>ID Заказа</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Клиент</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Сумма</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Статус</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Дата</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>{order.id}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.customer}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${order.amount}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.date}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleRecentOrderActionClick(order.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleRecentOrderActionClick(order.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
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
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Магазины</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleFilterStoresClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                >
                  <Filter className="w-4 h-4" />
                  Фильтр
                </button>
                <button
                  onClick={handleNewStoreClick}
                  className="px-4 py-2 text-sm rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Новый магазин
                </button>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Название</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Статус</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Выручка</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Заказы</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Конверсия</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stores.map((store) => (
                      <tr key={store.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>{store.name}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(store.status)}`}>
                            {store.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${store.revenue.toLocaleString()}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{store.orders}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{store.conversion}%</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleStoreActionClick(store.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleStoreActionClick(store.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleStoreActionClick(store.id, 'delete')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors`}
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
          </div>
        );
      case 'products':
        return (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Товары</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleFilterProductsClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                >
                  <Filter className="w-4 h-4" />
                  Фильтр
                </button>
                <button
                  onClick={handleDownloadProductsClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                >
                  <Download className="w-4 h-4" />
                  Скачать
                </button>
                <button
                  onClick={handleAddProductClick}
                  className="px-4 py-2 text-sm rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Добавить товар
                </button>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Название</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Цена</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Прибыль</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Остаток</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Продано</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Рейтинг</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>{product.name}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${product.price}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${product.profit}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{product.stock}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{product.sold}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors flex items-center gap-1`}>
                          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                          {product.rating}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleProductActionClick(product.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleProductActionClick(product.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleProductActionClick(product.id, 'delete')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors`}
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
          </div>
        );
      case 'orders':
        return (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Заказы</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleFilterOrdersClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                >
                  <Filter className="w-4 h-4" />
                  Фильтр
                </button>
                <button
                  onClick={handleDownloadOrdersClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                >
                  <Download className="w-4 h-4" />
                  Скачать
                </button>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm overflow-hidden transition-colors`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>ID Заказа</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Клиент</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Сумма</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Статус</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Дата</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Магазин</th>
                      <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                        <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>{order.id}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.customer}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${order.amount}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.date}</td>
                        <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.store}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOrderActionClick(order.id, 'view')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleOrderActionClick(order.id, 'edit')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleOrderActionClick(order.id, 'delete')}
                              className={`p-1 rounded ${darkMode ? 'hover:bg-gray-600 text-red-400' : 'hover:bg-gray-100 text-red-500'} transition-colors`}
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
          </div>
        );
      case 'analytics':
        return (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Аналитика</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleDateRangeClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                >
                  <Calendar className="w-4 h-4" />
                  Период
                </button>
                <button
                  onClick={handleExportAnalyticsClick}
                  className={`px-4 py-2 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                >
                  <Download className="w-4 h-4" />
                  Экспорт
                </button>
              </div>
            </div>
            {/* Analytics Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Sales Overview Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Обзор продаж</h2>
                <div className="h-80">
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
                        formatter={(value, name) => {
                          if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Выручка'];
                          if (name === 'profit') return [`$${value.toLocaleString()}`, 'Прибыль'];
                          return [value, name];
                        }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#14b8a6" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                      <Area type="monotone" dataKey="profit" stroke="#f59e0b" fillOpacity={1} fill="url(#colorProfit)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Conversion Rate Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Коэффициент конверсии</h2>
                <div className="h-80">
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
                        formatter={(value) => [`${value}%`, 'Конверсия']}
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
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Источники трафика (Посетители)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-64 flex items-center justify-center">
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
                  <div>
                    <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>
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
                    <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                      <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Всего посетителей</div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                        {trafficData.reduce((sum, item) => sum + item.visitors, 0).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Device Usage Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Использование устройств</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-64 flex items-center justify-center">
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
                  <div>
                    <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>
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
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

