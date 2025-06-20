// Это последняя исправленная версия кода. Пожалуйста, убедитесь, что вы заменили весь файл Dashboard.js этим содержимым.
import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, Legend, RadialBarChart, RadialBar
} from 'recharts';
import {
  ShoppingBag, DollarSign, Users, Globe,
  Settings, Plus, Eye, Edit, Trash2, Bell, Search,
  Filter, Download, Calendar, Star, Moon, Sun,
  Package, CreditCard, Target,
  BarChart3, Menu,
  Mail, Facebook, Instagram, Twitter,
  Linkedin, MessageSquare, Megaphone, XCircle, LogIn, UserPlus, ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Smile, MapPin, CreditCard as CreditCardLucide, TrendingUp as TrendingUpLucide, Truck,
  ShoppingCart, Headphones, Camera, TrendingUp, HelpCircle, TrendingDown,
  Mail as MailLucide, MessageSquare as MessageSquareLucide, Calendar as CalendarLucide,
  Link2, SearchCode, Rocket // Иконки для секции "Как это работает"
} from 'lucide-react';

//=========== КОНТЕКСТ ДЛЯ УПРАВЛЕНИЯ ЯЗЫКОМ ===========
const LanguageContext = createContext();

// Определения переводов
const translations = {
  en: {
    dashboardTitle: "Welcome, Alexander!",
    dashboardSubtitle: "Here's what's happening with your business today",
    totalRevenue: "Total Revenue",
    orders: "Orders",
    visitors: "Visitors",
    profit: "Profit",
    websiteTraffic: "Website Traffic",
    recentOrders: "Recent Orders",
    recentTransactions: "Recent Transactions",
    orderOverview: "Order Overview",
    stockReport: "Stock Report",
    salesByCategory: "Sales by Category",
    userAcquisitionTrends: "User Acquisition Trends",
    stores: "Stores",
    products: "Products",
    customers: "Customers",
    reports: "Reports",
    settings: "Settings",
    logout: "Logout",
    search: "Search...",
    notifications: "Notifications",
    clearAll: "Clear All",
    noNewNotifications: "No new notifications.",
    login: "Login",
    register: "Register",
    emailAddress: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    enterEmailPassword: "Please enter email and password.",
    loginSuccessful: "Login successful! Redirecting to dashboard...",
    invalidCredentials: "Invalid email or password.",
    fillAllFields: "Please fill all fields.",
    passwordsDoNotMatch: "Passwords do not match.",
    registrationSuccessful: "Registration successful! You can now log in.",
    loginAsDemo: "Login as Demo Account",
    noAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    signUp: "Sign Up",
    home: "Home",
    features: "Features",
    payments: "Payments",
    pricing: "Pricing",
    faq: "FAQ",
    yourDropshipBusiness: "Your Dropship Business,",
    automated: "Automated",
    landingSubtitle: "Dropbridge is an all-in-one solution to effortlessly launch and scale your dropshipping business. Focus on growth while we handle the routine.",
    startTrial: "Start 14-day Free Trial",
    noCreditCard: "Free trial, no credit card required.",
    everythingYouNeed: "Everything you need for success",
    powerfulFeatures: "Powerful Features for your business",
    productSourcing: "Product Sourcing",
    productSourcingDesc: "Find winning products from millions of suppliers with our advanced sourcing tools.",
    automatedOrders: "Automated Orders",
    automatedOrdersDesc: "Orders automatically sync and fulfill, saving you time and reducing errors.",
    supplierManagement: "Supplier Management",
    supplierManagementDesc: "Easily manage multiple suppliers, track performance, and maintain quality.",
    inventoryTracking: "Inventory Tracking",
    inventoryTrackingDesc: "Real-time inventory synchronization to prevent overselling and keep customers informed.",
    profitAnalytics: "Profit Analytics",
    profitAnalyticsDesc: "Track your revenue, costs, and profits with a detailed and intuitive dashboard.",
    customerSupport: "Customer Support",
    customerSupportDesc: "Our team is always ready to assist you every step of your journey.",
    paymentSystems: "Payment Systems",
    sharePayments: "Share payments with family and friends",
    sedUtPerspiciatis: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudane totam rem aperiam eaque ipsa quae abilloe",
    boluptatemAccusantium: "Boluptatem accusantium doloremque laudane totam rem aperiam eaque ipsa quae abilloe",
    sellerBenefits: "SellerBenefits",
    internationalMoneyTransfer: "International Money Transfer",
    highConversion: "High Conversion",
    noChargebackRisk: "No Chargeback Risk",
    recurringPayments: "Recurring Payments",
    processIn3Steps: "3 Step Process",
    gettingStartedEasy: "Getting Started is Easy",
    connectYourStore: "Connect Your Store",
    connectYourStoreDesc: "Integrate your Shopify, WooCommerce, or other platform store in just a few clicks.",
    findImportProducts: "Find & Import Products",
    findImportProductsDesc: "Use our browser to find products and add them to your store with one click.",
    startSelling: "Start Selling",
    startSellingDesc: "We automatically handle orders and shipping so you can focus on marketing.",
    smartPricing: "Smart Pricing",
    chooseRightPlan: "Choose the right pricing plan",
    basicPlan: "Basic Plan",
    basicPlanDesc: "Suitable for any IT solutions",
    perMonth: "/month",
    save: "SAVE",
    popularPlan: "Popular Plan",
    premiumPlan: "Premium Plan",
    selectPlan: "Select Plan",
    haveQuestions: "Have Questions?",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    whatIsDropbridge: "What is Dropbridge?",
    dropbridgeAnswer: "Dropbridge is a comprehensive SaaS platform designed to streamline and automate your dropshipping operations, from product sourcing to order fulfillment.",
    trialFee: "Do I need to pay for the trial period?",
    trialAnswer: "No, we offer a 14-day free trial with no credit card required. Explore all our features and see how Dropbridge can help your business.",
    cancelAnytime: "Can I cancel my subscription anytime?",
    cancelAnswer: "Yes, you can cancel your subscription anytime. No long-term contracts or hidden fees. You will retain access until the end of your billing period.",
    ecommerceIntegrations: "What e-commerce platforms do you integrate with?",
    integrationsAnswer: "Currently, we integrate with Shopify, WooCommerce, and BigCommerce. We are constantly working to add new integrations.",
    readyToGrow: "Ready to grow your business?",
    joinThousands: "Join thousands of entrepreneurs who trust Dropbridge. Start your free 14-day trial today.",
    allRightsReserved: "All rights reserved.",
    name: "Name",
    status: "Status",
    qty: "Qty",
    amount: "Amount",
    date: "Date",
    store: "Store",
    category: "Category",
    price: "Price",
    stock: "Stock",
    sold: "Sold",
    rating: "Rating",
    transactionId: "Transaction ID",
    customer: "Customer",
    product: "Product",
    sales: "Sales",
    visitorsChart: "Visitors",
    monthlyProfitsChart: "Monthly Profits",
    region: "Region",
    tasks: "Tasks",
    dueDate: "Due Date",
    newUsers: "New Users",
    openRate: "Open Rate",
    clickRate: "Click Rate",
    Jan: "Jan", Feb: "Feb", Mar: "Mar", Apr: "Apr", May: "May", Jun: "Jun", Jul: "Jul", Aug: "Aug", Sep: "Sep", Oct: "Oct", Nov: "Nov", Dec: "Dec",
    week1: "Week 1", week2: "Week 2", week3: "Week 3", week4: "Week 4",
    newOrderNotification: "New order #{{id}} received!",
    campaignEndedNotification: "Campaign 'Summer Sale' ended.",
    lowStockNotification: "Low stock: Wireless Headphones.",
    systemUpdateNotification: "System update available.",
    "5minutesAgo": "5 minutes ago",
    "1hourAgo": "1 hour ago",
    "3hoursAgo": "3 hours ago",
    "1dayAgo": "1 day ago",
    verySatisfied: "Very Satisfied",
    satisfied: "Satisfied",
    neutral: "Neutral",
    dissatisfied: "Dissatisfied",
    northAmerica: "North America",
    europe: "Europe",
    asia: "Asia",
    other: "Other",
    wirelessHeadphones: "Wireless Bluetooth Headphones",
    smartWatch: "Smart Fitness Watch",
    leatherHandbag: "Vintage Leather Handbag",
    gamingLaptop: "Gaming Laptop",
    organicCoffee: "Organic Coffee Beans",
    yogaMat: "Eco-Friendly Yoga Mat",
    pcs: "pcs",
    electronics: "Electronics",
    clothing: "Clothing",
    books: "Books",
    beauty: "Beauty",
    overview: "Overview",
    company: "Company",
    aboutUs: "About Us",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    followUs: "Follow Us",
    automatedBusiness: "Automate your dropship business.",
    selectSection: "Select a section",
    salesOverview: "Sales Overview",
    conversionRate: "Conversion Rate",
    trafficSources: "Traffic Sources",
    deviceUsage: "Device Usage",
    customerSatisfaction: "Customer Satisfaction",
    salesByRegion: "Sales by Region",
    topSellingProducts: "Top Selling Products",
    expensesByPlatform: "Expenses by Platform",
    emailMarketing: "Email Marketing",
    paymentsContent: "Payments section content",
    settingsContent: "Settings section content",
    dashboard: "Dashboard", // Add Dashboard to translations
    applications: "Applications", // New menu item
    email: "Email", // New menu item
    chat: "Chat", // New menu item
    calendar: "Calendar", // New menu item
    active: "Active",
    pending: "Pending",
    inactive: "Inactive",
    completed: "Completed",
    processing: "Processing",
    shipped: "Shipped",
    revenue: "Revenue",
    conversion: "Conversion",
    view: "View",
    edit: "Edit",
    delete: "Delete",

    // New keys for pricing list items
    adaptiveDesign: "Adaptive Design",
    unlimitedObjects: "Unlimited Objects",
    premiumQualitySupport: "Premium Quality Support",
    cloudHosting: "Cloud Hosting",

    // New keys for the Analytics dashboard sections
    supportTracker: "Support Tracker",
    averageDailySales: "Average Daily Sales",
    transactions: "Transactions", // Keep this one
    sourceVisitors: "Source Visitors",
    salesByCountries: "Sales by Countries",
    recentActivity: "Recent Activity",
    monthlyCampaignState: "Monthly Campaign State",
    revenueStatistic: "Revenue Statistic",
    solvedTickets: "Solved Tickets",
    openTickets: "Open Tickets",
    newTickets: "New Tickets",
    avgSales: "Avg. Sales",
    totalSales: "Total Sales",
    totalVisitors: "Total Visitors",
    countries: "Countries",
    activity: "Activity",
    campaign: "Campaign",
    state: "State",
    // revenue: "Revenue", // Keep this one
    totalProfit: "Total Profit", // Keep this one
    order: "Order",
    onTheOtherHandDenounceWithRighteous: "On the other hand denounce with righteous",
    quisAutemVelEumIureReprehenderitVoluptate: "Quis autem vel eum iure reprehenderit voluptate",
    sedUtPerspiciatisUndeOmnisIsteNatus: "Sed ut perspiciatis unde omnis iste natus",
    demo: "Demo",
    totalOrders: "Total Orders",
    refunded: "Refunded",
    upgradeYourPlan: "Upgrade Your Plan", // New translation
    yourFreeTrialExpired: "Your free trial expired in 7 days", // New translation
    upgradeNow: "Upgrade Now", // New translation
    heroTitle: "Your Dropship Business, Automated",
    heroSubtitle: "Dropbridge is an all-in-one solution to effortlessly launch and scale your dropshipping business. Focus on growth while we handle the routine.",
    startFreeTrial: "Start 14-day Free Trial",
    noCreditCardRequired: "Free trial, no credit card required.",
    sectionFeaturesTitle: "Everything you need for success",
    sectionFeaturesSubtitle: "Powerful Features for your business",
    feature1Title: "Product Sourcing",
    feature1Desc: "Find winning products from millions of suppliers with our advanced sourcing tools.",
    feature2Title: "Automated Orders",
    feature2Desc: "Orders automatically sync and fulfill, saving you time and reducing errors.",
    feature3Title: "Supplier Management",
    feature3Desc: "Easily manage multiple suppliers, track performance, and maintain quality.",
    feature4Title: "Inventory Tracking",
    feature4Desc: "Real-time inventory synchronization to prevent overselling and keep customers informed.",
    feature5Title: "Profit Analytics",
    feature5Desc: "Track your revenue, costs, and profits with a detailed and intuitive dashboard.",
    feature6Title: "Customer Support",
    feature6Desc: "Our team is always ready to assist you every step of your journey.",
    sectionTestimonialsTitle: "What Our Users Say",
    sectionTestimonialsSubtitle: "Trusted by thousands of entrepreneurs",
    testimonial1: "Dropbridge transformed my business! The automation saved me countless hours, and the analytics helped me grow significantly.",
    testimonial1Author: "Jane Doe, E-commerce Entrepreneur",
    testimonial2: "I couldn't imagine running my dropshipping store without Dropbridge. It's incredibly intuitive and powerful.",
    testimonial2Author: "John Smith, Online Retailer",
    pricingSectionTitle: "Smart Pricing",
    pricingSectionSubtitle: "Choose the right pricing plan",
    basicPlanTitle: "Basic Plan",
    basicPlanDescription: "Ideal for beginners and small businesses.",
    proPlanTitle: "Pro Plan",
    proPlanDescription: "Perfect for growing businesses.",
    enterprisePlanTitle: "Enterprise Plan",
    enterprisePlanDescription: "Tailored for large-scale operations.",
    planFeature1: "Unlimited Products",
    planFeature2: "Automated Fulfillment",
    planFeature3: "Real-time Analytics",
    planFeature4: "Premium Support",
    planFeature5: "Custom Integrations",
    choosePlan: "Choose Plan",
    faqSectionTitle: "Have Questions?",
    faqSectionSubtitle: "Frequently Asked Questions",
    ctaSectionTitle: "Ready to grow your business?",
    ctaSectionSubtitle: "Join thousands of entrepreneurs who trust Dropbridge. Start your free 14-day trial today.",
    howItWorksSectionTitle: "How It Works", // New translation
    howItWorksSectionSubtitle: "Getting Started is Easy", // New translation
    step1Title: "Connect Your Store", // New translation
    step1Desc: "Integrate your Shopify, WooCommerce, or other platform store in just a few clicks.", // New translation
    step2Title: "Find & Import Products", // New translation
    step2Desc: "Use our browser to find products and add them to your store with one click.", // New translation
    step3Title: "Start Selling", // New translation
    step3Desc: "We automatically handle orders and shipping so you can focus on marketing.", // New translation
    platformOverviewTitle: "Platform Overview", // New translation
    platformOverviewSubtitle: "See Dropbridge in Action", // New translation
    platformFeature1Title: "Intuitive Dashboard", // New translation
    platformFeature1Desc: "Gain a clear overview of your sales, orders, and visitors with a user-friendly interface.", // New translation
    platformFeature2Title: "Advanced Analytics", // New translation
    platformFeature2Desc: "Deep dive into your business performance with comprehensive reports and charts.", // New translation
    platformFeature3Title: "Streamlined Workflow", // New translation
    platformFeature3Desc: "Automate routine tasks and manage your operations efficiently from one central place.", // New translation
  },
  ru: {
    dashboardTitle: "Добро пожаловать, Александр!",
    // dashboardSubtitle: "Вот что происходит с вашим бизнесом сегодня", // Удалено
    totalRevenue: "Общая выручка",
    orders: "Заказы",
    visitors: "Посетители",
    profit: "Прибыль",
    websiteTraffic: "Трафик сайта",
    recentOrders: "Последние заказы",
    recentTransactions: "Последние транзакции",
    orderOverview: "Обзор заказов",
    stockReport: "Отчет по запасам",
    salesByCategory: "Продажи по категориям",
    userAcquisitionTrends: "Тенденции привлечения пользователей",
    stores: "Магазины",
    products: "Товары",
    customers: "Клиенты",
    reports: "Отчеты",
    settings: "Настройки",
    logout: "Выйти",
    search: "Поиск...",
    notifications: "Уведомления",
    clearAll: "Очистить все",
    noNewNotifications: "Нет новых уведомлений.",
    login: "Вход",
    register: "Регистрация",
    emailAddress: "Адрес электронной почты",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    enterEmailPassword: "Пожалуйста, введите адрес электронной почты и пароль.",
    loginSuccessful: "Вход выполнен успешно! Перенаправление на панель управления...",
    invalidCredentials: "Неверный адрес электронной почты или пароль.",
    fillAllFields: "Пожалуйста, заполните все поля.",
    passwordsDoNotMatch: "Пароли не совпадают.",
    registrationSuccessful: "Регистрация прошла успешно! Теперь вы можете войти.",
    loginAsDemo: "Войти как демо-аккаунт",
    noAccount: "У вас нет аккаунта?",
    alreadyHaveAccount: "Уже есть аккаунт?",
    signUp: "Зарегистрироваться",
    home: "Главная",
    features: "Возможности",
    payments: "Платежи",
    pricing: "Цены",
    faq: "FAQ",
    yourDropshipBusiness: "Ваш бизнес по прямой поставке,",
    automated: "автоматизирован",
    landingSubtitle: "Dropbridge — это универсальное решение для легкого запуска и масштабирования вашего бизнеса по прямой поставке. Сосредоточьтесь на росте, пока мы занимаемся рутиной.",
    startTrial: "Начать 14-дневную пробную версию",
    noCreditCard: "Бесплатная пробная версия, кредитная карта не требуется.",
    everythingYouNeed: "Все, что вам нужно для успеха",
    powerfulFeatures: "Мощные функции для вашего бизнеса",
    productSourcing: "Поиск продуктов",
    productSourcingDesc: "Находите выигрышные продукты от миллионов поставщиков с помощью наших передовых инструментов поиска.",
    automatedOrders: "Автоматизированные заказы",
    automatedOrdersDesc: "Заказы автоматически синхронизируются и выполняются, экономя ваше время и уменьшая количество ошибок.",
    supplierManagement: "Управление поставщиками",
    supplierManagementDesc: "Легко управляйте несколькими поставщиками, отслеживайте производительность и поддерживайте качество.",
    inventoryTracking: "Отслеживание запасов",
    inventoryTrackingDesc: "Синхронизация запасов в реальном времени для предотвращения избыточных продаж и информирования клиентов.",
    profitAnalytics: "Аналитика прибыли",
    profitAnalyticsDesc: "Отслеживайте свои доходы, затраты и прибыль с помощью подробной и интуитивно понятной панели управления.",
    customerSupport: "Поддержка клиентов",
    customerSupportDesc: "Наша команда всегда готова помочь вам на каждом этапе вашего пути.",
    paymentSystems: "Платежные системы",
    sharePayments: "Делитесь платежами с семьей и друзьями",
    sedUtPerspiciatis: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudane totam rem aperiam eaque ipsa quae abilloe",
    boluptatemAccusantium: "Boluptatem accusantium doloremque laudane totam rem aperiam eaque ipsa quae abilloe",
    sellerBenefits: "Преимущества для продавцов",
    internationalMoneyTransfer: "Международные денежные переводы",
    highConversion: "Высокая конверсия",
    noChargebackRisk: "Нет риска возврата платежей",
    recurringPayments: "Рекуррентные платежи",
    processIn3Steps: "Процесс в 3 шага",
    gettingStartedEasy: "Начать работу легко",
    connectYourStore: "Подключите свой магазин",
    connectYourStoreDesc: "Интегрируйте свой магазин Shopify, WooCommerce или другой платформы всего за несколько кликов.",
    findImportProducts: "Найдите и импортируйте продукты",
    findImportProductsDesc: "Используйте наш браузер для поиска продуктов и добавления их в свой магазин одним щелчком мыши.",
    startSelling: "Начните продавать",
    startSellingDesc: "Мы автоматически обрабатываем заказы и доставку, чтобы вы могли сосредоточиться на маркетинге.",
    smartPricing: "Умные тарифы",
    chooseRightPlan: "Подходящий тарифный план",
    basicPlan: "Базовый план",
    basicPlanDesc: "Подходит для любых IT-решений",
    perMonth: "/месяц",
    save: "ЭКОНОМИЯ",
    popularPlan: "Популярный план",
    premiumPlan: "Премиум план",
    selectPlan: "Выбрать план",
    haveQuestions: "Есть вопросы?",
    frequentlyAskedQuestions: "Часто задаваемые вопросы",
    whatIsDropbridge: "Что такое Dropbridge?",
    dropbridgeAnswer: "Dropbridge — это комплексная SaaS-платформа, предназначенная для упрощения и автоматизации ваших операций по прямой поставке, от поиска продуктов до выполнения заказов.",
    trialFee: "Нужно ли мне платить за пробный период?",
    trialAnswer: "Нет, мы предлагаем 14-дневный бесплатный пробный период без необходимости ввода данных кредитной карты. Изучите все наши функции и посмотрите, как Dropbridge может помочь вашему бизнесу.",
    cancelAnytime: "Могу ли я отменить подписку в любое время?",
    cancelAnswer: "Да, вы можете отменить подписку в любое время. Никаких долгосрочных контрактов или скрытых комиссий. Вы сохраните доступ до конца вашего расчетного периода.",
    ecommerceIntegrations: "С какими платформами электронной коммерции вы интегрируетесь?",
    integrationsAnswer: "В настоящее время мы интегрируемся с Shopify, WooCommerce и BigCommerce. Мы постоянно работаем над добавлением новых интеграций.",
    readyToGrow: "Готовы развивать свой бизнес?",
    joinThousands: "Присоединяйтесь к тысячам предпринимателей, которые доверяют Dropbridge. Начните свою бесплатную 14-дневную пробную версию сегодня.",
    allRightsReserved: "Все права защищены.",
    name: "Название",
    status: "Статус",
    qty: "Кол-во",
    amount: "Сумма",
    date: "Дата",
    store: "Магазин",
    category: "Категория",
    price: "Цена",
    stock: "Остаток",
    sold: "Продано",
    rating: "Рейтинг",
    transactionId: "ID Транзакции",
    customer: "Клиент",
    product: "Продукт",
    sales: "Продажи",
    visitorsChart: "Посетители",
    monthlyProfitsChart: "Ежемесячная прибыль",
    region: "Регион",
    tasks: "Задачи",
    dueDate: "Срок",
    dailyVisits: "Ежедневные посещения",
    newUsers: "Новые пользователи",
    openRate: "Коэффициент открытия",
    clickRate: "Коэффициент кликов",
    Jan: "Янв", Feb: "Фев", Mar: "Мар", Apr: "Апр", May: "Май", Jun: "Июн", Jul: "Июл", Aug: "Авг", Sep: "Сен", Oct: "Окт", Nov: "Ноя", Dec: "Дек",
    week1: "Нед 1", week2: "Нед 2", week3: "Нед 3", week4: "Нед 4",
    newOrderNotification: "Новый заказ #{{id}} поступил!",
    campaignEndedNotification: "Кампания 'Летняя распродажа' завершена.",
    lowStockNotification: "Низкий запас товара: Беспроводные наушники.",
    systemUpdateNotification: "Обновление системы доступно.",
    "5minutesAgo": "5 минут назад",
    "1hourAgo": "1 час назад",
    "3hoursAgo": "3 часа назад",
    "1dayAgo": "1 день назад",
    verySatisfied: "Очень довольны",
    satisfied: "Довольны",
    neutral: "Нейтрально",
    dissatisfied: "Недовольны",
    northAmerica: "Северная Америка",
    europe: "Европа",
    asia: "Азия",
    other: "Другие",
    wirelessHeadphones: "Беспроводные наушники",
    smartWatch: "Умные часы",
    leatherHandbag: "Винтажная кожаная сумка",
    gamingLaptop: "Игровой ноутбук",
    organicCoffee: "Органические кофейные зерна",
    yogaMat: "Экологичный коврик для йоги",
    pcs: "шт.",
    electronics: "Электроника",
    clothing: "Одежда",
    books: "Книги",
    beauty: "Красота",
    overview: "Обзор",
    company: "Компания",
    aboutUs: "О нас",
    contact: "Контакты",
    privacyPolicy: "Политика конфиденциальности",
    followUs: "Следите за нами",
    automatedBusiness: "Автоматизируйте свой бизнес по прямой поставке.",
    selectSection: "Выберите раздел",
    salesOverview: "Обзор продаж",
    conversionRate: "Коэффициент конверсии",
    trafficSources: "Источники трафика",
    deviceUsage: "Использование устройств",
    customerSatisfaction: "Удовлетворенность клиентов",
    salesByRegion: "Продажи по регионам",
    topSellingProducts: "Лидеры продаж",
    expensesByPlatform: "Расходы по платформам",
    emailMarketing: "Email-маркетинг",
    paymentsContent: "Содержимое раздела 'Платежи'",
    settingsContent: "Содержимое раздела 'Настройки'",
    dashboard: "Панель управления", // Добавлено Dashboard в переводы
    applications: "Приложения", // Новый пункт меню
    email: "Почта", // Новый пункт меню
    chat: "Чат", // Новый пункт меню
    calendar: "Календарь", // Новый пункт меню
    active: "Активен",
    pending: "Ожидает",
    inactive: "Неактивен",
    completed: "Завершен",
    processing: "В обработке",
    shipped: "Отправлен",
    revenue: "Выручка",
    conversion: "Конверсия",
    view: "Посмотреть",
    edit: "Изменить",
    delete: "Удалить",


    // New keys for pricing list items
    adaptiveDesign: "Адаптивный дизайн",
    unlimitedObjects: "Неограниченные объекты",
    premiumQualitySupport: "Поддержка премиум качества",
    cloudHosting: "Хостинг в облаке",

    // New keys for the Analytics dashboard sections
    supportTracker: "Отслеживание поддержки",
    averageDailySales: "Средние ежедневные продажи",
    transactions: "Транзакции", // Keep this one
    sourceVisitors: "Посетители по источникам",
    salesByCountries: "Продажи по странам",
    recentActivity: "Недавняя активность",
    monthlyCampaignState: "Состояние ежемесячной кампании",
    revenueStatistic: "Статистика доходов",
    solvedTickets: "Решенные заявки",
    openTickets: "Открытые заявки",
    newTickets: "Новые заявки",
    avgSales: "Средние продажи",
    totalSales: "Общие продажи",
    totalVisitors: "Всего посетителей",
    countries: "Страны",
    activity: "Активность",
    campaign: "Кампания",
    state: "Состояние",
    // revenue: "Выручка", // Keep this one
    totalProfit: "Общая прибыль", // Keep this one
    order: "Заказ",
    onTheOtherHandDenounceWithRighteous: "С другой стороны, осуждаем с праведным негодованием",
    quisAutemVelEumIureReprehenderitVoluptate: "Quis autem vel eum iure reprehenderit voluptate",
    sedUtPerspiciatisUndeOmnisIsteNatus: "Sed ut perspiciatis unde omnis iste natus",
    demo: "Демо",
    totalOrders: "Всего заказов",
    refunded: "Возвращено",
    upgradeYourPlan: "Обновите ваш план", // New translation
    yourFreeTrialExpired: "Срок вашей бесплатной пробной версии истекает через 7 дней", // New translation
    upgradeNow: "Обновить сейчас", // New translation
    heroTitle: "Ваш бизнес по прямой поставке, автоматизирован",
    heroSubtitle: "Dropbridge — это универсальное решение для легкого запуска и масштабирования вашего бизнеса по прямой поставке. Сосредоточьтесь на росте, пока мы занимаемся рутиной.",
    startFreeTrial: "Начать 14-дневную пробную версию",
    noCreditCardRequired: "Бесплатная пробная версия, кредитная карта не требуется.",
    sectionFeaturesTitle: "Все, что вам нужно для успеха",
    sectionFeaturesSubtitle: "Мощные функции для вашего бизнеса",
    feature1Title: "Поиск продуктов",
    feature1Desc: "Находите выигрышные продукты от миллионов поставщиков с помощью наших передовых инструментов поиска.",
    feature2Title: "Автоматизированные заказы",
    feature2Desc: "Заказы автоматически синхронизируются и выполняются, экономя ваше время и уменьшая количество ошибок.",
    feature3Title: "Управление поставщиками",
    feature3Desc: "Легко управляйте несколькими поставщиками, отслеживайте производительность и поддерживайте качество.",
    feature4Title: "Отслеживание запасов",
    feature4Desc: "Синхронизация запасов в реальном времени для предотвращения избыточных продаж и информирования клиентов.",
    feature5Title: "Аналитика прибыли",
    feature5Desc: "Отслеживайте свои доходы, затраты и прибыль с помощью подробной и интуитивно понятной панели управления.",
    feature6Title: "Поддержка клиентов",
    feature6Desc: "Наша команда всегда готова помочь вам на каждом этапе вашего пути.",
    sectionTestimonialsTitle: "Что говорят наши пользователи",
    sectionTestimonialsSubtitle: "Нам доверяют тысячи предпринимателей",
    testimonial1: "Dropbridge преобразил мой бизнес! Автоматизация сэкономила мне бесчисленные часы, а аналитика помогла значительно вырасти.",
    testimonial1Author: "Джейн Доу, предприниматель в сфере электронной коммерции",
    testimonial2: "Я не могу представить себе ведение своего дропшиппинг-магазина без Dropbridge. Это невероятно интуитивно понятное и мощное средство.",
    testimonial2Author: "Джон Смит, онлайн-продавец",
    pricingSectionTitle: "Умные тарифы",
    pricingSectionSubtitle: "Подходящий тарифный план",
    basicPlanTitle: "Базовый план",
    basicPlanDescription: "Идеально подходит для начинающих и малого бизнеса.",
    proPlanTitle: "Pro-план",
    proPlanDescription: "Идеально подходит для растущего бизнеса.",
    enterprisePlanTitle: "Корпоративный план",
    enterprisePlanDescription: "Индивидуальный подход для крупномасштабных операций.",
    planFeature1: "Неограниченное количество продуктов",
    planFeature2: "Автоматическое выполнение заказов",
    planFeature3: "Аналитика в реальном времени",
    planFeature4: "Премиум-поддержка",
    planFeature5: "Пользовательские интеграции",
    choosePlan: "Выбрать план",
    faqSectionTitle: "Есть вопросы?",
    faqSectionSubtitle: "Часто задаваемые вопросы",
    ctaSectionTitle: "Готовы развивать свой бизнес?",
    ctaSectionSubtitle: "Присоединяйтесь к тысячам предпринимателей, которые доверяют Dropbridge. Начните свою бесплатную 14-дневную пробную версию сегодня.",
    howItWorksSectionTitle: "Как это работает", // New translation
    howItWorksSectionSubtitle: "Начать работу легко", // New translation
    step1Title: "Подключите свой магазин", // New translation
    step1Desc: "Интегрируйте свой Shopify, WooCommerce или другой магазин на платформе всего за несколько кликов.", // New translation
    step2Title: "Найдите и импортируйте продукты", // New translation
    step2Desc: "Используйте наш браузер для поиска продуктов и добавления их в свой магазин одним щелчком мыши.", // New translation
    step3Title: "Начните продавать", // New translation
    step3Desc: "Мы автоматически обрабатываем заказы и доставку, чтобы вы могли сосредоточиться на маркетинге.", // New translation
    platformOverviewTitle: "Обзор платформы", // New translation
    platformOverviewSubtitle: "Посмотрите Dropbridge в действии", // New translation
    platformFeature1Title: "Интуитивно понятная панель управления", // New translation
    platformFeature1Desc: "Получите четкий обзор своих продаж, заказов и посетителей с помощью удобного интерфейса.", // New translation
    platformFeature2Title: "Расширенная аналитика", // New translation
    platformFeature2Desc: "Погрузитесь в эффективность своего бизнеса с помощью комплексных отчетов и диаграмм.", // New translation
    platformFeature3Title: "Оптимизированный рабочий процесс", // New translation
    platformFeature3Desc: "Автоматизируйте рутинные задачи и эффективно управляйте своими операциями из одного центрального места.", // New translation
  },
};

// Language Provider Component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru'); // Default language is Russian
  
  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
  };

  const t = (key, options) => { // Принимаем options как второй аргумент
    let text = translations[language][key] || key; // Fallback to key if translation not found

    // Динамическая замена для уведомлений
    if (options && options.id) {
        text = text.replace(/{{id}}/g, options.id);
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


//=========== КОМПОНЕНТ АУТЕНТИФИКАЦИИ ===========
const AuthPage = ({ onAuthSuccess }) => {
    const { t } = useContext(LanguageContext);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage('');
        setMessageType('');
        if (!email || !password) {
            setMessage(t('enterEmailPassword'));
            setMessageType('error');
            return;
        }
        setTimeout(() => {
            // Using a generic demo login credential
            if (email === 'demo@example.com' && password === 'password') {
                setMessage(t('loginSuccessful'));
                setMessageType('success');
                onAuthSuccess();
            } else {
                setMessage(t('invalidCredentials'));
                setMessageType('error');
            }
        }, 1000);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage('');
        setMessageType('');
        if (!email || !password || !confirmPassword) {
            setMessage(t('fillAllFields'));
            setMessageType('error');
            return;
        }
        if (password !== confirmPassword) {
            setMessage(t('passwordsDoNotMatch'));
            setMessageType('error');
            return;
        }
        setTimeout(() => {
            setMessage(t('registrationSuccessful'));
            setMessageType('success');
            setIsLogin(true);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }, 1000);
    };

    const handleDemoLogin = () => {
        setEmail('demo@example.com');
        setPassword('password'); 
        setTimeout(() => {
            setMessage(t('loginSuccessful'));
            setMessageType('success');
            onAuthSuccess();
        }, 500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 text-gray-900">
            <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-white border border-gray-200">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-teal-500">
                        <LogIn className="w-8 h-8 text-white" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    {isLogin ? t('login') : t('register')}
                </h2>
                {message && (
                    <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 shadow-md ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {messageType === 'success' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        <span>{message}</span>
                    </div>
                )}
                <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">{t('emailAddress')}</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border bg-gray-100 border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="your@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">{t('password')}</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border bg-gray-100 border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="••••••••" required />
                    </div>
                    {!isLogin && (
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-700">{t('confirmPassword')}</label>
                            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg border bg-gray-100 border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="••••••••" required />
                        </div>
                    )}
                    <button type="submit" className="w-full py-3 px-4 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                        {isLogin ? t('login') : t('register')}
                    </button>
                </form>
                {isLogin && (
                    <button onClick={handleDemoLogin} className="w-full py-3 px-4 mt-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                        <UserPlus className="w-5 h-5" />
                        {t('loginAsDemo')}
                    </button>
                )}
                <p className="text-center mt-6 text-sm text-gray-600">
                    {isLogin ? t('noAccount') : t('alreadyHaveAccount')}
                    <button onClick={() => { setIsLogin(prev => !prev); setMessage(''); setEmail(''); setPassword(''); setConfirmPassword(''); }} className="ml-1 font-medium text-teal-500 hover:text-teal-600 transition-colors duration-200 ease-in-out cursor-pointer">
                        {isLogin ? t('signUp') : t('login')}
                    </button>
                </p>
            </div>
        </div>
    );
};


//=========== КОМПОНЕНТ ПАНЕЛИ УПРАВЛЕНИЯ ===========
const Dashboard = ({ onMenuClick }) => {
    const { t, language, setLanguage } = useContext(LanguageContext);
    const [activeTab, setActiveTab] = useState('dashboard_analytics');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: t('newOrderNotification', {id: 1005}), time: t('5minutesAgo'), read: false },
        { id: 2, message: t('campaignEndedNotification'), time: t('1hourAgo'), read: false },
        { id: 3, message: t('lowStockNotification'), time: t('3hoursAgo'), read: true },
        { id: 4, message: t('systemUpdateNotification'), time: t('1dayAgo'), read: false },
    ]);
    const [stores] = useState([
        { id: 1, name: 'Fashion Store USA', status: 'active', revenue: 15420, orders: 89, conversion: 3.2 },
        { id: 2, name: 'Tech Gadgets EU', status: 'active', revenue: 8750, orders: 45, conversion: 2.8 },
        { id: 3, name: 'Home Decor', status: 'pending', revenue: 2180, orders: 12, conversion: 1.9 }
    ]);
    const [products] = useState([
        { id: 1, name: t('wirelessHeadphones'), image: 'https://placehold.co/300x300/E0F2F1/334155?text=Product', price: 89.99, profit: 44.99, stock: 150, sold: 89, rating: 4.5 },
        { id: 2, name: t('smartWatch'), image: 'https://placehold.co/300x300/E0F2F1/334155?text=Product', price: 199.99, profit: 79.99, stock: 85, sold: 34, rating: 4.7 },
        { id: 3, name: t('leatherHandbag'), image: 'https://placehold.co/300x300/E0F2F1/334155?text=Product', price: 129.99, profit: 64.99, stock: 45, sold: 67, rating: 4.3 }
    ]);
    const [orders] = useState([
        { id: '#1001', customer: 'John Smith', amount: 89.99, status: 'completed', date: '2024-05-25', store: 'Tech Gadgets EU' },
        { id: '#1002', customer: 'Sarah Johnson', amount: 199.99, status: 'processing', date: '2024-05-24', store: 'Tech Gadgets EU' },
        { id: '#1003', customer: 'Mike Brown', amount: 24.99, status: 'shipped', date: '2024-05-23', store: 'Fashion Store USA' }
    ]);
    const salesData = [
        { month: t('Jan'), revenue: 12000 }, { month: t('Feb'), revenue: 19000 }, { month: t('Mar'), revenue: 15000 },
        { month: t('Apr'), revenue: 22000 }, { month: t('May'), revenue: 28000 }, { month: t('Jun'), revenue: 35000 }
    ];
    const trafficData = [
        { name: 'Facebook', value: 45, color: '#3b82f6', visitors: 1278 },
        { name: 'Google', value: 30, color: '#10b981', visitors: 852 },
        { name: 'TikTok', value: 15, color: '#f59e0b', visitors: 426 },
        { name: 'Direct', value: 10, color: '#8b5cf6', visitors: 284 }
    ];
    const conversionData = [
        { week: t('week1'), rate: 2.1 }, { week: t('week2'), rate: 2.8 },
        { week: t('week3'), rate: 3.2 }, { week: t('week4'), rate: 2.9 }
    ];
    const deviceData = [
        { name: 'Desktop', value: 55, color: '#3b82f6' },
        { name: 'Mobile', value: 35, color: '#10b981', },
        { name: 'Tablet', value: 10, color: '#f59e0b' }
    ];
    const adSpendData = [
        { name: 'Facebook', value: 3200, color: '#3b82f6' },
        { name: 'Google', value: 2800, color: '#10b981' },
        { name: 'Instagram', value: 1500, color: '#f59e0b' },
        { name: 'TikTok', value: 900, color: '#8b5cf6' },
        { name: 'Email', value: 600, color: '#ef4444' }
    ];
    const emailPerformanceData = [
        { week: t('week1'), openRate: 32, clickRate: 12 },
        { week: t('week2'), openRate: 38, clickRate: 15 },
        { week: t('week3'), openRate: 45, clickRate: 18 },
        { week: t('week4'), openRate: 42, clickRate: 16 }
    ];
    
    const averageDailySalesData = [
        { day: 'Mon', sales: 300 },
        { day: 'Tue', sales: 450 },
        { day: 'Wed', sales: 380 },
        { day: 'Thu', sales: 500 },
        { day: 'Fri', sales: 420 },
        { day: 'Sat', sales: 600 },
        { day: 'Sun', sales: 550 },
    ];

    const sourceVisitorsData = [
        { platform: 'Website', percentage: 96, visitors: 524756, color: '#10b981' },
        { platform: 'Facebook', percentage: 82, visitors: 420000, color: '#3b82f6' },
        { platform: 'Instagram', percentage: 66, visitors: 340000, color: '#8b5cf6' },
        { platform: 'TikTok', percentage: 50, visitors: 260000, color: '#f59e0b' },
    ];

    const salesByCountriesData = [
      { country: 'USA', sales: 120000, percentage: 80, users: 1240, flag: 'us', color: '#3b82f6'},
      { country: 'Japan', sales: 80000, percentage: 60, users: 1240, flag: 'jp', color: '#10b981' },
      { country: 'France', sales: 60000, percentage: 49, users: 1240, flag: 'fr', color: '#f59e0b' },
      { country: 'Germany', sales: 40000, percentage: 100, users: 1240, flag: 'de', color: '#ef4444' },
      { country: 'South Korea', sales: 30000, percentage: 30, users: 1240, flag: 'kr', color: '#8b5cf6' },
    ];

    const recentActivityData = [
        { id: 1, type: 'Order', description: t('onTheOtherHandDenounceWithRighteous'), time: '2 mins ago', icon: ShoppingCart },
        { id: 2, type: 'Product', description: t('quisAutemVelEumIureReprehenderitVoluptate'), time: '1 hour ago', icon: Package },
        { id: 3, type: 'Login', description: 'User Alexander logged in.', time: '2 hours ago', icon: LogIn },
        { id: 4, type: 'Support', description: t('sedUtPerspiciatisUndeOmnisIsteNatus'), time: '5 hours ago', icon: HelpCircle },
    ];

    const monthlyCampaignStateData = [
        { name: t('Jan'), progress: 70 },
        { name: t('Feb'), progress: 85 },
        { name: t('Mar'), progress: 60 },
        { name: t('Apr'), progress: 90 },
        { name: t('May'), progress: 75 },
        { name: t('Jun'), progress: 80 },
    ];

    const revenueStatisticData = [
      { name: t('Jan'), revenue: 4000, profit: 2400 },
      { name: t('Feb'), revenue: 3000, profit: 1398 },
      { name: t('Mar'), revenue: 2000, profit: 9800 },
      { name: t('Apr'), revenue: 2780, profit: 3908 },
      { name: t('May'), revenue: 1890, profit: 4800 },
      { name: t('Jun'), revenue: 2390, profit: 3800 },
    ];
    
    const customerSatisfactionData = [
        { name: t('verySatisfied'), value: 63, color: '#10b981' },
        { name: t('satisfied'), value: 25, color: '#3b82f6' },
        { name: t('neutral'), value: 7, color: '#f59e0b' },
        { name: t('dissatisfied'), value: 5, color: '#ef4444' }
    ];

    const salesByRegionData = [
        { name: t('northAmerica'), sales: 125000, color: '#3b82f6' },
        { name: t('europe'), sales: 98000, color: '#8b5cf6' },
        { name: t('asia'), sales: 76000, color: '#10b981' },
        { name: t('other'), sales: 32000, color: '#f59e0b' },
    ];

    const topSellingProductsData = [
        { id: 1, name: t('gamingLaptop'), sold: 1245 },
        { id: 2, name: t('organicCoffee'), sold: 987 },
        { id: 3, name: t('smartWatch'), sold: 853 },
        { id: 4, name: t('yogaMat'), sold: 765 },
        { id: 5, name: t('leatherHandbag'), sold: 612 },
    ];

    const getStatusInfo = (status) => {
        switch (status) {
            case 'active': return { className: 'bg-green-100 text-green-700 ring-green-600/20', dotClassName: 'bg-green-500' };
            case 'pending': return { className: 'bg-yellow-100 text-yellow-700 ring-yellow-600/20', dotClassName: 'bg-yellow-500' };
            case 'inactive': return { className: 'bg-red-100 text-red-700 ring-red-600/20', dotClassName: 'bg-red-500' };
            case 'completed': return { className: 'bg-green-100 text-green-700 ring-green-600/20', dotClassName: 'bg-green-500' };
            case 'processing': return { className: 'bg-blue-100 text-blue-700 ring-blue-600/20', dotClassName: 'bg-blue-500' };
            case 'shipped': return { className: 'bg-purple-100 text-purple-700 ring-purple-600/20', dotClassName: 'bg-purple-500' };
            default: return { className: 'bg-gray-100 text-gray-600 ring-gray-500/20', dotClassName: 'bg-gray-500' };
        }
    };
    

    const StatCard = ({ icon: Icon, title, value, change, changeType, bgColor = 'bg-teal-100', iconColor = 'text-teal-500' }) => ( 
        <div className={'bg-white border-gray-200 hover:shadow-lg p-4 sm:p-6 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out'}>
            <div className="flex items-center justify-between">
                <div>
                    <p className={'text-xs sm:text-base text-gray-500'}>{title}</p>
                    <p className={'text-xl sm:text-3xl font-bold mt-1 text-gray-900'}>{value}</p>
                    {change && (<p className={`text-xs sm:text-base mt-1 ${changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>{changeType === 'positive' ? '+' : ''}{change}% last month</p>)}
                </div>
                <div className={`${bgColor} p-2 sm:p-3 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${iconColor}`} />
                </div>
            </div>
        </div>
    );

    const Sidebar = ({ isOpen, onClose }) => {
        const menuItems = [
            { id: 'dashboard_analytics', label: t('dashboard'), icon: BarChart3 }, 
            { id: 'stores', label: t('stores'), icon: Globe },
            { id: 'products', label: t('products'), icon: Package },
            { id: 'orders', label: t('orders'), icon: ShoppingBag },
            { id: 'analytics', label: t('reports'), icon: TrendingUpLucide },
            { id: 'marketing', label: t('marketing'), icon: Target },
            { id: 'payments', label: t('payments'), icon: CreditCardLucide }
        ];

        const applicationItems = [
            { id: 'app_email', label: t('email'), icon: MailLucide },
            { id: 'app_chat', label: t('chat'), icon: MessageSquareLucide },
            { id: 'app_calendar', label: t('calendar'), icon: CalendarLucide },
        ];

        return (
            <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-gray-200 border-r shadow-lg
                            lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                            lg:w-[250px] xl:w-[280px] `}>
                <div className={`p-6 border-b border-gray-200 flex justify-between items-center`}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <span className={'text-2xl font-semibold text-gray-800 tracking-tight'}>DropBridge</span>
                    </div>
                    <button onClick={onClose} className="lg:hidden p-2 rounded-full text-gray-400 hover:text-gray-600 cursor-pointer">
                        <XCircle className="w-6 h-6" />
                    </button>
                </div>

                <nav className="px-4 py-4 flex flex-col h-[calc(100vh-81px)] overflow-y-auto">
                    <div className="flex-grow">
                        {menuItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id); onClose(); }}
                                className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-all duration-200 ease-in-out text-base font-medium
                                    ${activeTab === item.id
                                        ? 'bg-blue-100 text-blue-700 font-semibold' 
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
                                    cursor-pointer`}>
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}
                        <div className="mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase px-4">{t('applications')}</div>
                        {applicationItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id); onClose(); }}
                                className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-all duration-200 ease-in-out text-base font-medium
                                    ${activeTab === item.id
                                        ? 'bg-blue-100 text-blue-700 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
                                    cursor-pointer`}>
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-200">
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-all duration-200 ease-in-out text-base font-medium
                                ${activeTab === 'settings'
                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
                                cursor-pointer`}>
                            <Settings className="w-5 h-5" />
                            {t('settings')}
                        </button>
                    </div>
                </nav>
            </div>
        );
    };

    const DashboardHeader = ({ onHamburgerClick, onLogoutClick }) => { 
        const { t, language, setLanguage } = useContext(LanguageContext);
        const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
        const langDropdownRef = useRef(null);

        useEffect(() => {
            function handleClickOutside(event) {
                if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                    setShowLanguageDropdown(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

        const handleLanguageChange = (lang) => {
            setLanguage(lang);
            setShowLanguageDropdown(false);
        };

        return (
            <div className={'bg-white border-gray-200 border-b px-4 py-3 sm:px-6 sm:py-4 shadow-sm'}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button onClick={onHamburgerClick} className="lg:hidden p-2 mr-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"><Menu className="w-6 h-6" /></button>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <h1 className={'text-xl sm:text-2xl font-bold text-gray-800'}>{t('dashboardTitle')}</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="relative" ref={langDropdownRef}>
                            <button
                                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer text-sm font-semibold h-10 w-auto min-w-[70px] justify-center"
                            >
                                <img
                                    src={language === 'en' ? 'https://flagcdn.com/h20/us.png' : 'https://flagcdn.com/h20/ru.png'}
                                    alt={language === 'en' ? 'US Flag' : 'Russian Flag'}
                                    className="w-5 h-5 rounded-full object-cover"
                                />
                                {language === 'en' ? 'ENG' : 'РУС'}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {showLanguageDropdown && (
                                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-10 origin-top-right animate-fade-in-down">
                                    <button
                                        onClick={() => handleLanguageChange('en')}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src="https://flagcdn.com/h20/us.png"
                                            alt="US Flag"
                                            className="w-5 h-5 rounded-full object-cover"
                                        />
                                        English
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('ru')}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src="https://flagcdn.com/h20/ru.png"
                                            alt="Russian Flag"
                                            className="w-5 h-5 rounded-full object-cover"
                                        />
                                        Русский
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="relative flex items-center">
                            {showSearchInput && (<input type="text" placeholder={t('search')} className={`px-3 py-2 rounded-lg border bg-gray-100 border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 w-32 sm:w-48 transition-all duration-300`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />)}
                            <button onClick={() => setShowSearchInput(!showSearchInput)} className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 ${showSearchInput ? 'ml-2' : ''} cursor-pointer`}><Search className="w-5 h-5" /></button>
                        </div>
                        <div className="relative">
                            <button onClick={() => setShowNotifications(!showNotifications)} className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 relative cursor-pointer`}><Bell className="w-5 h-5" />{notifications.filter(notif => !notif.read).length > 0 && (<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>)}</button>
                            {showNotifications && (<div className={`absolute right-0 mt-2 w-72 sm:w-80 rounded-lg shadow-lg py-4 z-10 bg-white border border-gray-200 animate-fade-in`}><div className={`p-4 border-b border-gray-200 flex justify-between items-center`}><h3 className={'font-bold text-gray-800'}>{t('notifications')}</h3><button onClick={() => setNotifications([])} className="text-xs text-teal-500 hover:text-teal-600 cursor-pointer">{t('clearAll')}</button></div><div className="max-h-60 overflow-y-auto">{notifications.length > 0 ? (notifications.map(notif => (<div key={notif.id} className={`p-4 flex items-start gap-3 border-b border-gray-200 ${!notif.read ? 'bg-blue-50/50' : ''} hover:bg-opacity-70`}><p className={'text-gray-800 text-sm font-medium'}>{notif.message}</p><p className={'text-gray-500 text-xs mt-1'}>{notif.time}</p></div>))) : (<div className={'p-4 text-center text-gray-500'}>{t('noNewNotifications')}.</div>)}</div></div>)}
                        </div>
                        <button onClick={onLogoutClick} className={`px-4 py-2 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all duration-200 ease-in-out flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer`}>{t('logout')}</button>
                    </div>
                </div>
            </div>
        );
    };
    
    const TikTokIcon = () => (
        <svg width="32" height="32" viewBox="0 0 24 24" className="text-black mb-2" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
        </svg>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard_analytics':
                return (
                    <div className="p-4 sm:p-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <StatCard icon={DollarSign} title={t('totalSales')} value="$170,500.09" bgColor="bg-purple-100" iconColor="text-purple-600" />
                            <StatCard icon={ShoppingCart} title={t('totalOrders')} value="1,500" bgColor="bg-green-100" iconColor="text-green-600" />
                            <StatCard icon={Users} title={t('visitors')} value="12,300" bgColor="bg-blue-100" iconColor="text-blue-600" />
                            <StatCard icon={TrendingDown} title={t('refunded')} value="2,756" bgColor="bg-red-100" iconColor="text-red-600" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="lg:col-span-1 bg-white border border-gray-200 p-4 sm:p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">{t('overview')}</h2>
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-teal-500 mb-2">85%</p>
                                    <p className="text-gray-600">{t('tasks')} {t('status')}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                                        <div className="h-2 bg-teal-500 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-1 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">{t('averageDailySales')}</h2>
                                <div className="h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={averageDailySalesData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#6b7280' }} />
                                            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6b7280' }} />
                                            <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', color: '#111827' }} />
                                            <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">{t('transactions')}</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">{t('transactionId')}</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">{t('date')}</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">{t('customer')}</th>
                                                <th className="text-left py-3 px-4 font-medium text-gray-600">{t('amount')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { id: 'TRN-001', date: '2024-06-15', customer: 'Alice Smith', amount: 120.50 },
                                                { id: 'TRN-002', date: '2024-06-14', customer: 'Bob Johnson', amount: 75.00 },
                                                { id: 'TRN-003', date: '2024-06-13', customer: 'Charlie Brown', amount: 200.00 },
                                            ].map((transaction) => (
                                                <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                                                    <td className="py-3 px-4 text-gray-900 font-medium">{transaction.id}</td>
                                                    <td className="py-3 px-4 text-gray-600">{transaction.date}</td>
                                                    <td className="py-3 px-4 text-gray-600">{transaction.customer}</td>
                                                    <td className="py-3 px-4 text-gray-600">${transaction.amount.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="lg:col-span-1 bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex flex-col">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">{t('sourceVisitors')}</h2>
                                <p className="text-3xl font-bold text-gray-900 mb-2">524,756</p>
                                <p className="text-gray-500 mb-6">{t('totalVisitors')}</p>
                                <div className="grid grid-cols-2 gap-4 flex-grow">
                                    {sourceVisitorsData.map((source, index) => (
                                        <div key={index} className={`p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center transition-all duration-200
                                            ${source.platform === 'Website' ? 'bg-gradient-to-br from-green-100 to-green-200' : ''}
                                            ${source.platform === 'Facebook' ? 'bg-gradient-to-br from-blue-100 to-blue-200' : ''}
                                            ${source.platform === 'Instagram' ? 'bg-gradient-to-br from-purple-100 to-purple-200' : ''}
                                            ${source.platform === 'TikTok' ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' : ''}
                                        `}>
                                            {source.platform === 'Website' && <Globe className="w-8 h-8 text-green-600 mb-2" />}
                                            {source.platform === 'Facebook' && <Facebook className="w-8 h-8 text-blue-600 mb-2" />}
                                            {source.platform === 'Instagram' && <Instagram className="w-8 h-8 text-purple-600 mb-2" />}
                                            {source.platform === 'TikTok' && <TikTokIcon />}
                                            <p className="font-semibold text-gray-800">{source.platform}</p>
                                            <p className="text-xl font-bold text-gray-900">{source.percentage}%</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-gray-800">{t('salesByCountries')}</h2>
                                    <select className="p-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-teal-500 outline-none cursor-pointer">
                                        <option>This Month</option>
                                        <option>Last Month</option>
                                    </select>
                                </div>
                                <div className="space-y-4"> 
                                    {salesByCountriesData.map((country, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <img src={`https://flagcdn.com/h20/${country.flag}.png`} alt={`${country.country} Flag`} className="w-8 h-8 rounded-full shadow-md object-cover"/>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center text-sm font-semibold text-gray-800">
                                                    <span>{country.country}</span>
                                                    <span>{country.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                                    <div className="h-2 rounded-full" style={{ width: `${country.percentage}%`, backgroundColor: country.color || '#3b82f6' }}></div>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">{country.users.toLocaleString()} Users</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">{t('recentActivity')}</h2>
                                <div className="space-y-4">
                                    {recentActivityData.map((activity) => (
                                        <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50">
                                            <activity.icon className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-800">{activity.description}</p>
                                                <p className="text-sm text-gray-600">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">{t('monthlyCampaignState')}</h2>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={monthlyCampaignStateData}>
                                            <CartesianGrid strokeDashArray="3 3" stroke={'#e5e7eb'} vertical={false} />
                                            <XAxis dataKey="name" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                                            <YAxis tickFormatter={(value) => `${value}%`} tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                                            <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', color: '#111827' }} />
                                            <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mb-8">
                            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">{t('revenueStatistic')}</h2>
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            data={revenueStatisticData}
                                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                        >
                                            <defs>
                                                <linearGradient id="colorRevenueStatUv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                                </linearGradient>
                                                <linearGradient id="colorRevenueStatPv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDashArray="3 3" stroke={'#e5e7eb'} vertical={false} />
                                            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#6b7280' }} />
                                            <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} tick={{ fill: '#6b7280' }} />
                                            <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', color: '#111827' }}/><Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorRevenueStatUv)" />
                                            <Area type="monotone" dataKey="profit" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRevenueStatPv)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                case 'stores':
                    return (
                        <div className="p-4 sm:p-6 bg-gray-50/50 animate-fade-in">
                           <div className="flex justify-between items-center mb-8">
                                <h2 className={'text-3xl font-bold text-gray-900'}>{t('stores')}</h2>
                                <div className="flex items-center gap-3">
                                   <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-sm cursor-pointer">
                                       <Filter className="w-5 h-5" />
                                       <span>{t('Filter')}</span>
                                   </button>
                                   <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
                                       <Download className="w-5 h-5" />
                                       <span>{t('Download')}</span>
                                   </button>
                                </div>
                           </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {stores.map((store) => {
                                    const statusInfo = getStatusInfo(store.status);
                                    return (
                                        <div key={store.id} className="bg-white border-gray-200 rounded-2xl border shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                            <div className="p-6">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-lg font-bold text-gray-800">{store.name}</h3>
                                                    <div className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusInfo.className}`}>
                                                        <span className={`w-1.5 h-1.5 mr-1.5 rounded-full ${statusInfo.dotClassName}`}></span>
                                                        {t(store.status)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-6 py-4 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                                                <div>
                                                    <p className="text-sm text-gray-500">{t('revenue')}</p>
                                                    <p className="font-semibold text-gray-800">${store.revenue.toLocaleString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">{t('orders')}</p>
                                                    <p className="font-semibold text-gray-800">{store.orders}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">{t('conversion')}</p>
                                                    <p className="font-semibold text-gray-800">{store.conversion}%</p>
                                                </div>
                                            </div>
                                            <div className="mt-auto p-4 border-t border-gray-100 flex justify-end items-center gap-2">
                                                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors"><Eye className="w-5 h-5"/></button>
                                                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors"><Edit className="w-5 h-5"/></button>
                                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"><Trash2 className="w-5 h-5"/></button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                case 'products':
                    return (
                        <div className="p-4 sm:p-6 bg-gray-50/50 animate-fade-in">
                             <div className="flex justify-between items-center mb-8">
                                <h2 className={'text-3xl font-bold text-gray-900'}>{t('products')}</h2>
                                <div className="flex items-center gap-3">
                                   <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-sm cursor-pointer">
                                       <Filter className="w-5 h-5" />
                                       <span>{t('Filter')}</span>
                                   </button>
                                   <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
                                       <Download className="w-5 h-5" />
                                       <span>{t('Download')}</span>
                                   </button>
                                </div>
                           </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {products.map((product) => (
                                    <div key={product.id} className="bg-white border-gray-200 rounded-2xl border shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
                                        <div className="relative">
                                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                                            <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-yellow-600">
                                                <Star className="w-4 h-4 text-yellow-500" fill="currentColor"/>
                                                {product.rating}
                                            </div>
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="font-bold text-gray-800 flex-grow">{product.name}</h3>
                                            <div className="flex justify-between items-center mt-3">
                                                <p className="text-lg font-semibold text-teal-600">${product.price}</p>
                                                <p className="text-sm text-gray-500">{t('profit')}: ${product.profit}</p>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
                                                <span className="text-gray-600">{t('stock')}: <span className="font-medium text-gray-800">{product.stock}</span></span>
                                                <span className="text-gray-600">{t('sold')}: <span className="font-medium text-gray-800">{product.sold}</span></span>
                                            </div>
                                        </div>
                                         <div className="p-2 bg-gray-50 border-t border-gray-100 flex justify-end items-center gap-1">
                                            <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md transition-colors"><Eye className="w-5 h-5"/></button>
                                            <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md transition-colors"><Edit className="w-5 h-5"/></button>
                                            <button className="p-2 text-red-500 hover:bg-red-100 rounded-md transition-colors"><Trash2 className="w-5 h-5"/></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                case 'orders':
                     return (
                        <div className="p-4 sm:p-6 bg-gray-50/50 animate-fade-in">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className={'text-3xl font-bold text-gray-900'}>{t('orders')}</h2>
                                <div className="flex items-center gap-3">
                                   <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-sm cursor-pointer">
                                       <Filter className="w-5 h-5" />
                                       <span>{t('Filter')}</span>
                                   </button>
                                   <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
                                       <Download className="w-5 h-5" />
                                       <span>{t('Download')}</span>
                                   </button>
                                </div>
                           </div>
                            <div className="bg-white border-gray-200 rounded-2xl border shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                <ul className="divide-y divide-gray-200">
                                    {orders.map((order) => {
                                        const statusInfo = getStatusInfo(order.status);
                                        return (
                                        <li key={order.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-sm font-semibold text-teal-600 truncate">{order.id}</p>
                                                            <div className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusInfo.className}`}>
                                                                {t(order.status)}
                                                            </div>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{t('customer')}: {order.customer}</p>
                                                    </div>
                                                    <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0 flex flex-col items-start sm:items-end">
                                                        <p className="text-lg font-bold text-gray-800">${order.amount}</p>
                                                        <p className="mt-1 text-sm text-gray-500">{order.date} via {order.store}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
            case 'analytics': 
                 return (
                    <div className="p-4 sm:p-6 bg-gray-50/50 animate-fade-in">
                        <div className="flex justify-between items-center mb-8">
                             <h2 className={'text-3xl font-bold text-gray-900'}>{t('reports')}</h2>
                             <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-sm cursor-pointer">
                                    <Filter className="w-5 h-5" />
                                    <span>{t('Filter')}</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
                                    <Download className="w-5 h-5" />
                                    <span>{t('Download')}</span>
                                </button>
                             </div>
                        </div>
                       
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column */}
                            <div className="lg:col-span-2 space-y-6">
                                 <div className={'bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'}>
                                    <h3 className={'text-xl font-bold mb-4 text-gray-800'}>{t('salesOverview')}</h3>
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                                <defs>
                                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.7}/>
                                                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" stroke={'#e5e7eb'} vertical={false} />
                                                <XAxis dataKey="month" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                                                <YAxis tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                                                <Tooltip wrapperClassName="!bg-white !border-gray-200 !rounded-lg !shadow-lg" contentStyle={{ borderRadius: '0.5rem', border: 'none' }} formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                                                <Area type="monotone" dataKey="revenue" stroke="#0d9488" fill="url(#colorRevenue)" strokeWidth={3} />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className={'bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col'}>
                                         <h3 className={'text-xl font-bold mb-4 text-gray-800'}>{t('customerSatisfaction')}</h3>
                                         <div className="h-60 flex-grow relative">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie data={customerSatisfactionData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value" cornerRadius={8}>
                                                        {customerSatisfactionData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} className="focus:outline-none" />))}
                                                    </Pie>
                                                    <Tooltip wrapperClassName="!bg-white/80 !backdrop-blur-sm !border-gray-200 !rounded-lg !shadow-lg" />
                                                </PieChart>
                                            </ResponsiveContainer>
                                             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="text-center">
                                                    <span className="text-3xl font-bold text-gray-800">
                                                        {customerSatisfactionData.find(d => d.name === t('verySatisfied'))?.value}%
                                                    </span>
                                                    <p className="text-sm text-gray-500 -mt-1">{t('verySatisfied')}</p>
                                                </div>
                                             </div>
                                         </div>
                                        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-4">
                                            {customerSatisfactionData.map((entry) => (
                                                <div key={entry.name} className="flex items-center text-sm">
                                                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                                                    <span className="text-gray-600">{entry.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={'bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'}>
                                        <h3 className={'text-xl font-bold mb-4 text-gray-800'}>{t('salesByRegion')}</h3>
                                        <div className="h-64">
                                             <ResponsiveContainer width="100%" height="100%">
                                                 <BarChart data={salesByRegionData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={'#e5e7eb'}/>
                                                    <XAxis type="number" tickFormatter={(value) => `$${value / 1000}k`} tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false}/>
                                                    <YAxis type="category" dataKey="name" width={80} tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                                                    <Tooltip wrapperClassName="!bg-white/80 !backdrop-blur-sm !border-gray-200 !rounded-lg !shadow-lg" formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                                                    <Bar dataKey="sales" radius={[0, 8, 8, 0]} barSize={20}>
                                                         {salesByRegionData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                                                    </Bar>
                                                 </BarChart>
                                             </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Column */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className={'bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'}>
                                    <h3 className={'text-xl font-bold mb-4 text-gray-800'}>{t('topSellingProducts')}</h3>
                                    <ul className="space-y-4">
                                        {topSellingProductsData.map((product, index) => (
                                            <li key={product.id} className="flex items-center gap-4 group">
                                                <div className="bg-gray-100 rounded-lg p-3 group-hover:bg-teal-100 transition-colors">
                                                    <Package className="w-6 h-6 text-gray-500 group-hover:text-teal-600 transition-colors" />
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold text-gray-900">{product.name}</p>
                                                    <div className="flex items-center gap-2">
                                                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                                         <div className="bg-gradient-to-r from-cyan-400 to-teal-500 h-1.5 rounded-full" style={{ width: `${100 - index * 10}%`}}></div>
                                                      </div>
                                                      <p className="text-sm font-medium text-gray-600">{product.sold.toLocaleString()}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={'bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'}>
                                    <h3 className={'text-xl font-bold mb-4 text-gray-800'}>{t('recentTransactions')}</h3>
                                    <ul className="space-y-3">
                                        {orders.slice(0, 4).map(order => {
                                            const statusInfo = getStatusInfo(order.status);
                                            return (
                                                <li key={order.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-full ${statusInfo.className}`}>
                                                            <ShoppingCart className={`w-5 h-5 ${statusInfo.className.replace('bg-','text-').replace('-100', '-600')}`} />
                                                        </div>
                                                        <div>
                                                           <p className="font-semibold text-gray-900">{order.customer}</p>
                                                           <p className="text-sm text-gray-500">{order.id}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                         <p className="font-semibold text-gray-900">${order.amount}</p>
                                                         <p className="text-sm text-gray-500">{order.date}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'marketing': return (<div className="p-4 sm:p-6 animate-fade-in"><h2 className={'text-2xl font-bold mb-6 text-gray-800'}>{t('marketing')}</h2><div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"><div className={'bg-white border-gray-200 p-6 rounded-xl border shadow-sm'}><h2 className={'text-xl font-bold mb-6 text-gray-800'}>{t('expensesByPlatform')}</h2><div className="h-80"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={adSpendData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">{adSpendData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}</Pie><Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', color: '#111827' }}/></PieChart></ResponsiveContainer></div></div><div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"><h2 className="text-xl font-bold mb-6 text-gray-800">{t('emailMarketing')}</h2><div className="h-80"><ResponsiveContainer width="100%" height="100%"><LineChart data={emailPerformanceData}><CartesianGrid strokeDashArray="3 3" stroke={'#e5e7eb'} vertical={false} /><XAxis dataKey="week" tick={{ fill: '#6b7280' }} /><YAxis tick={{ fill: '#6b7280' }} /><Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', color: '#111827' }}/><Line type="monotone" dataKey="openRate" stroke="#14b8a6" /><Line type="monotone" dataKey="clickRate" stroke="#f59e0b" /></LineChart></ResponsiveContainer></div></div></div></div>);
            case 'payments': return (<div className="p-6 text-gray-900">{t('paymentsContent')}</div>);
            case 'settings': return (<div className="p-6 text-gray-900">{t('settingsContent')}</div>);
            case 'app_email': return (<div className="p-6 text-gray-900"><h2>{t('email')}</h2><p>This is the email application content.</p></div>);
            case 'app_chat': return (<div className="p-6 text-gray-900"><h2>{t('chat')}</h2><p>This is the chat application content.</p></div>);
            case 'app_calendar': return (<div className="p-6 text-gray-900"><h2>{t('calendar')}</h2><p>This is the calendar application content.</p></div>);
            default: return <div className="p-6">{t('selectSection')}</div>;
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 transition-colors duration-300">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
                <DashboardHeader 
                    onHamburgerClick={() => setIsSidebarOpen(true)} 
                    onLogoutClick={onMenuClick}
                />
                <main className="flex-1 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};


//=========== АНИМИРОВАННЫЕ ИКОНКИ (ОПРЕДЕЛЕНЫ ВНЕ КОМПОНЕНТОВ) ===========
const AnimatedSearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><defs><linearGradient id="icon-grad-1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor: '#22D3EE', stopOpacity:1}} /><stop offset="100%" style={{stopColor: '#06B6D4', stopOpacity:1}} /></linearGradient></defs><circle cx="11" cy="11" r="8" stroke="url(#icon-grad-1)"></circle><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="url(#icon-grad-1)"></line><path d="M11 8a3 3 0 0 0-3 3" stroke="url(#icon-grad-1)"><animateTransform attributeName="transform" type="rotate" from="0 11 11" to="360 11 11" dur="10s" repeatCount="indefinite" /></path></svg> );
const AnimatedBagIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><defs><linearGradient id="icon-grad-2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor: '#F472B6', stopOpacity:1}} /><stop offset="100%" style={{stopColor: '#EC4899', stopOpacity:1}} /></linearGradient></defs><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="url(#icon-grad-2)"></path><line x1="3" y1="6" x2="21" y2="6" stroke="url(#icon-grad-2)"></line><path d="M16 10a4 4 0 0 1-8 0" stroke="url(#icon-grad-2)"><animate attributeName="d" values="M16 10a4 4 0 0 1-8 0;M16 10a4 4 0 0 1-8 0;M16 12a4 4 0 0 1-8 0;M16 10a4 4 0 0 1-8 0" dur="2s" repeatCount="indefinite" /></path></svg> );
const AnimatedGlobeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><defs><linearGradient id="icon-grad-3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor: '#818CF8', stopOpacity:1}} /><stop offset="100%" style={{stopColor: '#6366F1', stopOpacity:1}} /></linearGradient></defs><circle cx="12" cy="12" r="10" stroke="url(#icon-grad-3)"></circle><line x1="2" y1="12" x2="22" y2="12" stroke="url(#icon-grad-3)"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" stroke="url(#icon-grad-3)"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="15s" repeatCount="indefinite" /></path></svg> );
const AnimatedPackageIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><defs><linearGradient id="icon-grad-4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor: '#FCD34D', stopOpacity:1}} /><stop offset="100%" style={{stopColor: '#F59E0B', stopOpacity:1}} /></linearGradient></defs><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="url(#icon-grad-4)"></path><path d="M2 17l10 5 10-5" stroke="url(#icon-grad-4)"></path><path d="M2 12l10 5 10-5" stroke="url(#icon-grad-4)"><animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" /></path><path d="M12 22V12" stroke="url(#icon-grad-4)"></path><path d="M22 7v10" stroke="url(#icon-grad-4)"></path><path d="M2 7v10" stroke="url(#icon-grad-4)"></path></svg> );
const AnimatedChartIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><defs><linearGradient id="icon-grad-5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor: '#4ADE80', stopOpacity:1}} /><stop offset="100%" style={{stopColor: '#16A34A', stopOpacity:1}} /></linearGradient></defs><path d="M3 3v18h18" stroke="url(#icon-grad-5)"/><path d="M18.7 8a5 5 0 0 1-6.4 5.2" stroke="url(#icon-grad-5)"/><path d="M10 18H3" stroke="url(#icon-grad-5)"/><path d="M7 12l3-3 4 4 5-5" stroke="url(#icon-grad-5)"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M7 12l3-3 4 4 5-5; M7 10l3-3 4 4 5-5; M7 12l3-3 4 4 5-5"/></path></svg> );
const AnimatedUsersIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><defs><linearGradient id="icon-grad-6" x1="0%" y1="0%" y2="100%"><stop offset="0%" style={{stopColor: '#FB7185', stopOpacity:1}} /><stop offset="100%" style={{stopColor: '#EF4444', stopOpacity:1}} /></linearGradient></defs><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#icon-grad-6)"></path><circle cx="9" cy="7" r="4" stroke="url(#icon-grad-6)"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="url(#icon-grad-6)"><animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" /></path><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#icon-grad-6)"><animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" /></path></svg> );

//=========== КОМПОНЕНТ ЦЕЛЕВОЙ СТРАНИЦЫ ===========
const LandingPage = ({ onLoginClick }) => {
    const { t, language, setLanguage } = useContext(LanguageContext);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [faqOpen, setFaqOpen] = useState(null);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const langDropdownRef = useRef(null);

    // Custom hook for scroll animation
    const useScrollAnimation = () => {
        const ref = useRef(null);
        const [isVisible, setIsVisible] = useState(false);
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                },
                { threshold: 0.1 }
            );
            const node = ref.current;
            if (node) {
                observer.observe(node);
            }
            return () => {
                if (node) {
                    observer.unobserve(node);
                }
            };
        }, []);
        return [ref, isVisible];
    };

    const [heroRef, heroVisible] = useScrollAnimation();
    const [featuresRef, featuresVisible] = useScrollAnimation();
    const [howItWorksRef, howItWorksVisible] = useScrollAnimation();
    const [platformOverviewRef, platformOverviewVisible] = useScrollAnimation();
    const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
    const [pricingRef, pricingVisible] = useScrollAnimation();
    const [faqRef, faqVisible] = useScrollAnimation();
    const [ctaRef, ctaVisible] = useScrollAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        // Add smooth scroll behavior to the whole page
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.style.scrollBehavior = 'auto'; // Cleanup
        };
    }, []);

    const handleNavLinkClick = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setMobileMenuOpen(false); // Close mobile menu on click
        }
    };

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const navLinks = [
        { name: 'features', href: '#features' },
        { name: 'howItWorksSectionTitle', href: '#how-it-works' },
        { name: 'platformOverviewTitle', href: '#platform-overview' },
        { name: 'pricing', href: '#pricing' },
        { name: 'faq', href: '#faq' },
    ];

    const featuresContent = [
        { icon: AnimatedSearchIcon, title: t('feature1Title'), description: t('feature1Desc') },
        { icon: AnimatedBagIcon, title: t('feature2Title'), description: t('feature2Desc') },
        { icon: AnimatedGlobeIcon, title: t('feature3Title'), description: t('feature3Desc') },
        { icon: AnimatedPackageIcon, title: t('feature4Title'), description: t('feature4Desc') },
        { icon: AnimatedChartIcon, title: t('feature5Title'), description: t('feature5Desc') },
        { icon: AnimatedUsersIcon, title: t('feature6Title'), description: t('feature6Desc') },
    ];
    
    const faqs = [
        { q: 'whatIsDropbridge', a: 'dropbridgeAnswer' },
        { q: 'trialFee', a: 'trialAnswer' },
        { q: 'cancelAnytime', a: 'cancelAnswer' },
        { q: 'ecommerceIntegrations', a: 'integrationsAnswer' },
    ];

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setShowLanguageDropdown(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setShowLanguageDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [langDropdownRef]);


    return (
        <div className="bg-white text-gray-800 font-sans min-h-screen">
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                    <a href="#home" className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleNavLinkClick(e, '#home')}>
                        <ShoppingBag className="w-8 h-8 text-teal-500" />
                        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Dropbridge</h1>
                    </a>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-gray-600 hover:text-teal-500 transition-colors cursor-pointer font-medium">{t(link.name)}</a>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="relative" ref={langDropdownRef}>
                            <button
                                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer text-sm font-semibold h-10 w-auto min-w-[70px] justify-center"
                            >
                                <img
                                    src={language === 'en' ? 'https://flagcdn.com/h20/us.png' : 'https://flagcdn.com/h20/ru.png'}
                                    alt={language === 'en' ? '[Флаг США]' : '[Флаг России]'}
                                    className="w-5 h-5 rounded-full object-cover"
                                />
                                {language === 'en' ? 'ENG' : 'РУС'}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {showLanguageDropdown && (
                                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-10 origin-top-right animate-fade-in-down">
                                    <button
                                        onClick={() => handleLanguageChange('en')}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src="https://flagcdn.com/h20/us.png"
                                            alt="[Флаг США]"
                                            className="w-5 h-5 rounded-full object-cover"
                                        />
                                        English
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('ru')}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src="https://flagcdn.com/h20/ru.png"
                                            alt="[Флаг России]"
                                            className="w-5 h-5 rounded-full object-cover"
                                        />
                                        Русский
                                    </button>
                                </div>
                            )}
                        </div>
                        <button onClick={onLoginClick} className="text-teal-500 font-semibold hover:text-teal-600 transition-colors cursor-pointer">{t('login')}</button>
                        <button onClick={onLoginClick} className="bg-teal-500 text-white font-bold py-2 px-6 rounded-full hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">{t('startTrial')}</button>
                    </div>
                    <div className="lg:hidden flex items-center">
                         <div className="relative mr-2">
                            <button
                                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                            >
                               <Globe className="w-6 h-6 text-gray-700" />
                            </button>
                            {showLanguageDropdown && (
                                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-20 origin-top-right animate-fade-in-down">
                                    <button
                                        onClick={() => handleLanguageChange('en')}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img src="https://flagcdn.com/h20/us.png" alt="[Флаг США]" className="w-5 h-5 rounded-full object-cover"/>
                                        English
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('ru')}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img src="https://flagcdn.com/h20/ru.png" alt="[Флаг России]" className="w-5 h-5 rounded-full object-cover"/>
                                        Русский
                                    </button>
                                </div>
                            )}
                        </div>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <Menu className="w-6 h-6 text-gray-800" />
                        </button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-sm py-4 px-4 sm:px-6 shadow-lg absolute top-full left-0 right-0 z-10">
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} className="block text-gray-700 hover:text-teal-500 font-medium py-2 cursor-pointer" onClick={(e) => handleNavLinkClick(e, link.href)}>{t(link.name)}</a>
                            ))}
                            <button onClick={() => { onLoginClick(); setMobileMenuOpen(false); }} className="w-full text-left text-teal-500 font-semibold py-2 cursor-pointer">{t('login')}</button>
                            <button onClick={() => { onLoginClick(); setMobileMenuOpen(false); }} className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-600 shadow-md cursor-pointer">{t('startTrial')}</button>
                        </nav>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section id="home" ref={heroRef} className={`relative bg-gray-50 text-white py-20 px-4 sm:px-6 lg:py-32 flex items-center justify-center text-center overflow-hidden transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-90"></div>
                     <div className="absolute inset-0 z-0 bg-pattern-topography opacity-5"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-in-up text-shadow-lg">{t('heroTitle')}</h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 animate-fade-in-delay">{t('heroSubtitle')}</p>
                        <button onClick={onLoginClick} className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pop-in cursor-pointer">
                            {t('startFreeTrial')}
                        </button>
                        <p className="mt-4 text-sm text-blue-200">{t('noCreditCardRequired')}</p>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" ref={featuresRef} className={`py-16 sm:py-24 px-4 sm:px-6 bg-white transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="container mx-auto text-center max-w-6xl">
                        <h3 className="text-base font-semibold text-teal-600 uppercase mb-2 tracking-wider">{t('sectionFeaturesTitle')}</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t('sectionFeaturesSubtitle')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuresContent.map((feature, index) => (
                                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="p-4 bg-teal-100 rounded-full inline-flex items-center justify-center mb-6">
                                        <feature.icon className="w-8 h-8 text-teal-600" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* How It Works Section */}
                <section id="how-it-works" ref={howItWorksRef} className={`py-16 px-4 sm:px-6 bg-gray-100 transition-all duration-1000 ${howItWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="container mx-auto text-center max-w-6xl">
                        <h3 className="text-sm font-semibold text-blue-600 uppercase mb-2">{t('howItWorksSectionTitle')}</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t('howItWorksSectionSubtitle')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <div className="text-5xl font-extrabold text-blue-200 mb-4">01</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('step1Title')}</h4>
                                <p className="text-gray-600">{t('step1Desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <div className="text-5xl font-extrabold text-blue-200 mb-4">02</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('step2Title')}</h4>
                                <p className="text-gray-600">{t('step2Desc')}</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <div className="text-5xl font-extrabold text-blue-200 mb-4">03</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('step3Title')}</h4>
                                <p className="text-gray-600">{t('step3Desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Platform Overview Section with Screenshots */}
                <section id="platform-overview" ref={platformOverviewRef} className={`py-16 sm:py-24 px-4 sm:px-6 bg-white transition-all duration-1000 ${platformOverviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h3 className="text-base font-semibold text-indigo-600 uppercase tracking-wider mb-2">{t('platformOverviewTitle')}</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('platformOverviewSubtitle')}</h2>
                        </div>
                        <div className="space-y-16">
                             {/* Screenshot Block 1 */}
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="text-center lg:text-left">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('platformFeature1Title')}</h4>
                                    <p className="text-gray-700 mb-6">{t('platformFeature1Desc')}</p>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/8qPn7Wq/asdsa.png" alt="[Изображение главного вида панели управления]" className="rounded-xl shadow-xl border border-gray-200 mx-auto w-full"/>
                                </div>
                            </div>

                             {/* Screenshot Block 2 */}
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="lg:order-2 text-center lg:text-left">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('platformFeature2Title')}</h4>
                                    <p className="text-gray-700 mb-6">{t('platformFeature2Desc')}</p>
                                </div>
                                <div className="lg:order-1">
                                    <img src="https://i.ibb.co/LDGps8H7/image-2025-06-20-181550539.png" alt="[Изображение отчетов по аналитике]" className="rounded-xl shadow-xl border border-gray-200 mx-auto w-full"/>
                                </div>
                            </div>
                            
                            {/* Screenshot Block 3 */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="text-center lg:text-left">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('platformFeature3Title')}</h4>
                                    <p className="text-gray-700 mb-6">{t('platformFeature3Desc')}</p>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/bjySJwtP/main-view.png" alt="[Изображение управления заказами]" className="rounded-xl shadow-xl border border-gray-200 mx-auto w-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" ref={pricingRef} className={`py-16 sm:py-24 px-4 sm:px-6 bg-gray-50 transition-all duration-1000 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="container mx-auto text-center max-w-6xl">
                        <h3 className="text-base font-semibold text-teal-600 uppercase tracking-wider mb-2">{t('pricingSectionTitle')}</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t('pricingSectionSubtitle')}</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            {/* Basic Plan */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col h-full">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('basicPlanTitle')}</h4>
                                <p className="text-gray-600 mb-6 flex-grow">{t('basicPlanDescription')}</p>
                                <div className="text-5xl font-extrabold text-teal-500 mb-6">$29<span className="text-xl text-gray-500">/{t('perMonth')}</span></div>
                                <ul className="text-left text-gray-700 space-y-3 mb-8">
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature1')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature2')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature3')}</li>
                                </ul>
                                <button onClick={onLoginClick} className="w-full mt-auto bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition-colors shadow-md cursor-pointer">
                                    {t('choosePlan')}
                                </button>
                            </div>

                            {/* Pro Plan */}
                            <div className="bg-teal-500 text-white p-8 rounded-xl shadow-lg border-2 border-teal-600 flex flex-col h-full transform lg:scale-105 relative z-10">
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full">{t('popularPlan')}</div>
                                <h4 className="text-2xl font-bold mb-4">{t('proPlanTitle')}</h4>
                                <p className="opacity-90 mb-6 flex-grow">{t('proPlanDescription')}</p>
                                <div className="text-5xl font-extrabold mb-6">$59<span className="text-xl opacity-90">/{t('perMonth')}</span></div>
                                <ul className="text-left space-y-3 mb-8">
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-white mr-2 flex-shrink-0" /> {t('planFeature1')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-white mr-2 flex-shrink-0" /> {t('planFeature2')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-white mr-2 flex-shrink-0" /> {t('planFeature3')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-white mr-2 flex-shrink-0" /> {t('planFeature4')}</li>
                                </ul>
                                <button onClick={onLoginClick} className="w-full mt-auto bg-white text-teal-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md cursor-pointer">
                                    {t('choosePlan')}
                                </button>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col h-full">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('enterprisePlanTitle')}</h4>
                                <p className="text-gray-600 mb-6 flex-grow">{t('enterprisePlanDescription')}</p>
                                <div className="text-5xl font-extrabold text-teal-500 mb-6">$99<span className="text-xl text-gray-500">/{t('perMonth')}</span></div>
                                <ul className="text-left text-gray-700 space-y-3 mb-8">
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature1')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature2')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature3')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature4')}</li>
                                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {t('planFeature5')}</li>
                                </ul>
                                <button onClick={onLoginClick} className="w-full mt-auto bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition-colors shadow-md cursor-pointer">
                                    {t('choosePlan')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" ref={faqRef} className={`py-16 sm:py-24 px-4 sm:px-6 bg-gray-50 transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="container mx-auto max-w-4xl">
                        <h3 className="text-base font-semibold text-orange-600 uppercase tracking-wider text-center mb-2">{t('faqSectionTitle')}</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{t('faqSectionSubtitle')}</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-900 cursor-pointer">
                                        <span>{t(faq.q)}</span>
                                        <ChevronDown className={`w-5 h-5 text-teal-500 transition-transform duration-300 ${faqOpen === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`grid transition-all duration-500 ease-in-out ${faqOpen === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                           <p className="pt-4 text-gray-600 leading-relaxed">{t(faq.a)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section ref={ctaRef} className={`py-16 sm:py-20 px-4 sm:px-6 bg-gray-800 text-white text-center transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="container mx-auto max-w-3xl relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                           <Megaphone size={40} className="text-white"/>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-10">{t('ctaSectionTitle')}</h2>
                        <p className="text-lg text-gray-300 mb-8">{t('ctaSectionSubtitle')}</p>
                        <button onClick={onLoginClick} className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-400 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                            {t('startFreeTrial')}
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Dropbridge</h4>
                        <p className="leading-relaxed">{t('automatedBusiness')}</p>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-white mb-4">{t('product')}</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" onClick={(e) => handleNavLinkClick(e, '#features')} className="hover:text-white transition-colors cursor-pointer">{t('features')}</a></li>
                            <li><a href="#pricing" onClick={(e) => handleNavLinkClick(e, '#pricing')} className="hover:text-white transition-colors cursor-pointer">{t('pricing')}</a></li>
                            <li><a href="#faq" onClick={(e) => handleNavLinkClick(e, '#faq')} className="hover:text-white transition-colors cursor-pointer">{t('faq')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-white mb-4">{t('company')}</h4>
                        <ul className="space-y-2">
                            <li><a href="#!" className="hover:text-white transition-colors cursor-pointer">{t('aboutUs')}</a></li>
                            <li><a href="#!" className="hover:text-white transition-colors cursor-pointer">{t('contact')}</a></li>
                            <li><a href="#!" className="hover:text-white transition-colors cursor-pointer">{t('privacyPolicy')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-white mb-4">{t('followUs')}</h4>
                        <div className="flex space-x-4">
                            <a href="#!" className="hover:text-white transition-colors cursor-pointer"><Facebook className="w-6 h-6" /></a>
                            <a href="#!" className="hover:text-white transition-colors cursor-pointer"><Twitter className="w-6 h-6" /></a>
                            <a href="#!" className="hover:text-white transition-colors cursor-pointer"><Instagram className="w-6 h-6" /></a>
                            <a href="#!" className="hover:text-white transition-colors cursor-pointer"><Linkedin className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Dropbridge. {t('allRightsReserved')}.</p>
                </div>
            </footer>
        </div>
    );
};
//=========== КОНЕЦ КОМПОНЕНТА ЦЕЛЕВОЙ СТРАНИЦЫ ===========


//=========== ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ ===========
export default function App() {
    const [currentView, setCurrentView] = useState('landing');

    // InnerApp для инкапсуляции логики и безопасного использования LanguageContext
    const InnerApp = () => {
        const {language} = useContext(LanguageContext); 

        const handleLoginClick = () => {
            setCurrentView('auth');
        };

        const handleAuthSuccess = () => {
            setCurrentView('dashboard');
        };

        const handleGoToLanding = () => {
            setCurrentView('landing');
        };
        
        // Мы передаем `language` в `key`, чтобы React принудительно перемонтировал компоненты
        // при изменении языка, гарантируя применение всех переводов.
        switch (currentView) {
            case 'landing':
                return <LandingPage key={language} onLoginClick={handleLoginClick} />;
            case 'auth':
                return <AuthPage key={language} onAuthSuccess={handleAuthSuccess} />;
            case 'dashboard':
                return <Dashboard key={language} onMenuClick={handleGoToLanding} />;
            default:
                return <LandingPage key={language} onLoginClick={handleLoginClick} />;
        }
    };

    return (
      <LanguageProvider>
        <InnerApp />
      </LanguageProvider>
    );
}
