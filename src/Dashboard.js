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
  BarChart3
} from 'lucide-react';

// Placeholder components
const MarketingTab = () => <div className="p-6">Marketing Content Placeholder</div>;
const PaymentsTab = () => <div className="p-6">Payments Content Placeholder</div>;
const SettingsTab = () => <div className="p-6">Settings Content Placeholder</div>;

// Removed interfaces: Store, Product, Order, SalesData, TrafficData, DeviceData, ConversionData, StatCardProps

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview'); // Removed <string>
  const [darkMode, setDarkMode] = useState(false); // Removed <boolean>, Default to light mode

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
  const handleStoreActionClick = (storeId, action) => alert(`Action "${action}" for store ${storeId}`); // Removed type annotations
  const handleAddProductClick = () => alert('Add product button clicked!');
  const handleFilterProductsClick = () => alert('Filter products button clicked!');
  const handleDownloadProductsClick = () => alert('Download products button clicked!');
  const handleProductActionClick = (productId, action) => alert(`Action "${action}" for product ${productId}`); // Removed type annotations
  const handleFilterOrdersClick = () => alert('Filter orders button clicked!');
  const handleDownloadOrdersClick = () => alert('Download orders button clicked!');
  const handleOrderActionClick = (orderId, action) => alert(`Action "${action}" for order ${orderId}`); // Removed type annotations
  const handleDateRangeClick = () => alert('Date range button clicked!');
  const handleExportAnalyticsClick = () => alert('Export analytics button clicked!');
  const handleViewAllOrdersClick = () => {
    alert('Переход к просмотру всех заказов');
    setActiveTab('orders');
  };
  const handleRecentOrderActionClick = (orderId, action) => { // Removed type annotations
    alert(`Действие "${action}" для заказа ${orderId}`);
  };
  // -----------------------------

  // Mock data for stores
  const [stores] = useState([ // Removed <Store[]>
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
  const [products] = useState([ // Removed <Product[]>
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
  const [orders] = useState([ // Removed <Order[]>
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
  const salesData = [ // Removed : SalesData[]
    { month: 'Янв', revenue: 12000, orders: 45, profit: 5400 },
    { month: 'Фев', revenue: 19000, orders: 78, profit: 8550 },
    { month: 'Мар', revenue: 15000, orders: 62, profit: 6750 },
    { month: 'Апр', revenue: 22000, orders: 89, profit: 9900 },
    { month: 'Май', revenue: 28000, orders: 112, profit: 12600 },
    { month: 'Июн', revenue: 35000, orders: 156, profit: 15750 }
  ];

  const trafficData = [ // Removed : TrafficData[]
    { name: 'Facebook', value: 45, color: '#3b82f6', visitors: 1278 },
    { name: 'Google', value: 30, color: '#10b981', visitors: 852 },
    { name: 'TikTok', value: 15, color: '#f59e0b', visitors: 426 },
    { name: 'Прямой', value: 10, color: '#8b5cf6', visitors: 284 }
  ];

  const deviceData = [ // Removed : DeviceData[]
    { name: 'Desktop', value: 55, color: '#3b82f6' },
    { name: 'Mobile', value: 35, color: '#10b981' },
    { name: 'Tablet', value: 10, color: '#f59e0b' }
  ];

  const conversionData = [ // Removed : ConversionData[]
    { week: 'Нед 1', rate: 2.1 },
    { week: 'Нед 2', rate: 2.8 },
    { week: 'Нед 3', rate: 3.2 },
    { week: 'Нед 4', rate: 2.9 }
  ];

  const getStatusBg = (status) => { // Removed type annotations
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

  const StatCard = ({ icon: Icon, title, value, change, changeType, subtitle }) => ( // Removed : React.FC<StatCardProps>
    // StatCard with dark mode support and slightly larger fonts
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-gray-800/30' : 'bg-white border-gray-200 hover:shadow-lg'} p-6 rounded-xl border shadow-sm hover:shadow transition-all`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors`}>{title}</p> {/* Increased from text-sm */}
          <p className={`text-3xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>{value}</p> {/* Increased from text-2xl */}
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
          <Icon className="w-7 h-7 text-teal-500" /> {/* Increased icon size */}
        </div>
      </div>
    </div>
  );

  const Sidebar = () => ( // Removed : React.FC
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

  const Header = () => ( // Removed : React.FC
    // Header with theme toggle support and functional buttons
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 shadow-sm transition-colors`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Добро пожаловать, Александр!</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} text-base transition-colors`}>Вот что происходит с вашим бизнесом сегодня</p> {/* Increased from text-sm */}
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
                    className={`px-3 py-1.5 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                  >
                    <Calendar className="w-4 h-4" />
                    Последние 6 месяцев
                  </button>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={salesData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }}
                        axisLine={{ stroke: darkMode ? '#4b5563' : '#d1d5db' }}
                      />
                      <YAxis
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }}
                        axisLine={{ stroke: darkMode ? '#4b5563' : '#d1d5db' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                          borderColor: darkMode ? '#374151' : '#e5e7eb',
                          color: darkMode ? '#f9fafb' : '#111827'
                        }}
                      />
                      <Bar dataKey="revenue" name="Выручка ($)" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Источники трафика</h2>
                  <button
                    onClick={handleExportAnalyticsClick}
                    className={`px-3 py-1.5 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                  >
                    <Download className="w-4 h-4" />
                    Экспорт
                  </button>
                </div>
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
                          formatter={(value) => [`${value}%`, 'Доля трафика']}
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
                            <span className="text-sm text-gray-400">{item.visitors} посет.</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                      <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Всего посетителей</div>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors`}>
                        {trafficData.reduce((sum, item) => sum + (item.visitors || 0), 0).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders and Conversion Rate */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Recent Orders */}
              <div className={`lg:col-span-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Последние заказы</h2>
                  <button
                    onClick={handleViewAllOrdersClick}
                    className={`px-3 py-1.5 text-sm rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors flex items-center gap-2`}
                  >
                    <Eye className="w-4 h-4" />
                    Все заказы
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                        <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>ID</th>
                        <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Клиент</th>
                        <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Товар</th>
                        <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Сумма</th>
                        <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Статус</th>
                        <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.slice(0, 3).map((order) => (
                        <tr key={order.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                          <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.id}</td>
                          <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.customer}</td>
                          <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.product}</td>
                          <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>${order.amount.toFixed(2)}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusBg(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleRecentOrderActionClick(order.id, 'view')}
                                className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleRecentOrderActionClick(order.id, 'edit')}
                                className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
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

              {/* Conversion Rate */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Конверсия</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={conversionData}
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
                        formatter={(value) => [`${value}%`, 'Конверсия']}
                        contentStyle={{
                          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                          borderColor: darkMode ? '#374151' : '#e5e7eb',
                          color: darkMode ? '#f9fafb' : '#111827'
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        name="Конверсия"
                        stroke="#14b8a6"
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#14b8a6', strokeWidth: 0 }}
                        activeDot={{ r: 6, fill: '#14b8a6', strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className={`mt-4 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>
                  Средняя конверсия за 4 недели: { (conversionData.reduce((sum, item) => sum + item.rate, 0) / conversionData.length).toFixed(1) }%
                </div>
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
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Товар</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Магазин</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Цена</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Запас</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Продано</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Рейтинг</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
                      <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium transition-colors`}>
                        <div className="flex items-center gap-3">
                          {/* Placeholder for image */}
                          <div className={`w-10 h-10 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-gray-400`}>?</div>
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{product.store}</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${product.price.toFixed(2)}</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{product.stock}</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{product.sold}</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors flex items-center gap-1`}>
                        <Star className="w-4 h-4 text-yellow-400" />
                        {product.rating.toFixed(1)}
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
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors`}>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>ID</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Клиент</th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>Товар</th>
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
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{order.product}</td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>${order.amount.toFixed(2)}</td>
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  Выбрать дату
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

            {/* More detailed charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Profit Chart */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Прибыль</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={salesData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }}
                        axisLine={{ stroke: darkMode ? '#4b5563' : '#d1d5db' }}
                      />
                      <YAxis
                        tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }}
                        axisLine={{ stroke: darkMode ? '#4b5563' : '#d1d5db' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                          borderColor: darkMode ? '#374151' : '#e5e7eb',
                          color: darkMode ? '#f9fafb' : '#111827'
                        }}
                      />
                      <Area type="monotone" dataKey="profit" name="Прибыль ($)" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Device Usage */}
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors`}>
                <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Использование устройств</h2>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        labelLine={false}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                          const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                          const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                          return (
                            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                              {`${(percent * 100).toFixed(0)}%`}
                            </text>
                          );
                        }}
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name) => [`${value}%`, name]}
                        contentStyle={{
                          backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                          borderColor: darkMode ? '#374151' : '#e5e7eb',
                          color: darkMode ? '#f9fafb' : '#111827'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  {deviceData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'marketing': return <MarketingTab />;
      case 'payments': return <PaymentsTab />;
      case 'settings': return <SettingsTab />;
      default:
        return <div className="p-6">Select a tab</div>;
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

