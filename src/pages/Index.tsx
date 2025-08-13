import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const markStepCompleted = (step: string) => {
    const newCompleted = new Set(completedSteps);
    newCompleted.add(step);
    setCompletedSteps(newCompleted);
    
    const newProgress = (newCompleted.size / 5) * 100;
    setProgress(newProgress);
  };

  const steps = [
    { id: 'company', title: 'Изучить компанию', completed: completedSteps.has('company') },
    { id: 'registration', title: 'Регистрация', completed: completedSteps.has('registration') },
    { id: 'profile', title: 'Заполнить профиль', completed: completedSteps.has('profile') },
    { id: 'telegram', title: 'Присоединиться к чату', completed: completedSteps.has('telegram') },
    { id: 'info', title: 'Ознакомиться с условиями', completed: completedSteps.has('info') }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 relative overflow-hidden ${darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900' 
      : 'bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50'
    }`}>
      
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className={`absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-float opacity-30 ${darkMode ? 'bg-violet-500/20' : 'bg-violet-300/40'}`}></div>
        <div className={`absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-float opacity-25 ${darkMode ? 'bg-blue-500/20' : 'bg-blue-300/40'}`} style={{animationDelay: '2s'}}></div>
        <div className={`absolute bottom-1/4 -left-32 w-72 h-72 rounded-full blur-3xl animate-float opacity-20 ${darkMode ? 'bg-indigo-500/20' : 'bg-indigo-300/40'}`} style={{animationDelay: '4s'}}></div>
        <div className={`absolute -bottom-40 -right-40 w-88 h-88 rounded-full blur-3xl animate-float opacity-30 ${darkMode ? 'bg-purple-500/20' : 'bg-purple-300/40'}`} style={{animationDelay: '1s'}}></div>
        
        {/* Medium floating elements */}
        <div className={`absolute top-1/3 left-1/4 w-48 h-48 rounded-full blur-2xl animate-float opacity-20 ${darkMode ? 'bg-emerald-500/15' : 'bg-emerald-300/30'}`} style={{animationDelay: '3s'}}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full blur-2xl animate-float opacity-25 ${darkMode ? 'bg-pink-500/15' : 'bg-pink-300/30'}`} style={{animationDelay: '5s'}}></div>
        
        {/* Small accent elements */}
        <div className={`absolute top-1/2 left-1/3 w-32 h-32 rounded-full blur-xl animate-float opacity-40 ${darkMode ? 'bg-amber-500/20' : 'bg-amber-300/50'}`} style={{animationDelay: '6s'}}></div>
        <div className={`absolute top-3/4 right-1/3 w-40 h-40 rounded-full blur-xl animate-float opacity-30 ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-300/50'}`} style={{animationDelay: '7s'}}></div>
      </div>
      
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="sm"
          className={`p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${darkMode 
            ? 'bg-gray-800/60 hover:bg-gray-700/80 text-white border-gray-700/50 shadow-lg shadow-black/20' 
            : 'bg-white/60 hover:bg-white/80 text-gray-900 border-white/50 shadow-lg shadow-gray-200/50'
          }`}
        >
          <Icon name={darkMode ? "Sun" : "Moon"} size={20} />
        </Button>
      </div>



      {/* Hero Section */}
      <div id="hero" className="relative overflow-hidden pt-32">
        <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode 
          ? 'bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-indigo-900/20' 
          : 'bg-gradient-to-br from-violet-600/10 via-blue-600/10 to-indigo-600/10'
        }`}></div>
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-float ${darkMode 
            ? 'bg-violet-500/10' 
            : 'bg-violet-300/20'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-float ${darkMode 
            ? 'bg-blue-500/10' 
            : 'bg-blue-300/20'
          }`} style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <div className="text-center animate-fade-in">
            <div className={`inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full border transition-colors duration-300 text-sm mb-8 ${darkMode 
              ? 'bg-gray-800/80 border-gray-700/50 text-gray-300' 
              : 'bg-white/80 border-gray-200/50 text-gray-600'
            }`}>
              <Icon name="Sparkles" size={16} className="mr-2 text-violet-500" />
              Добро пожаловать в команду
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight ${darkMode 
              ? 'bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'
            }`}>
              Приветствуем Вас,<br />
              <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">наш новый коллега!</span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 ${darkMode 
              ? 'text-gray-300' 
              : 'text-gray-600'
            }`}>
              В Ваш первый рабочий день мы познакомим Вас с компанией, в которую Вы пришли работать. 
              Специализируемся на продажах на маркетплейсах.
            </p>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* О компании */}
          <Card 
            id="company"
            className={`group relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 ${darkMode 
              ? 'bg-gray-800/70 backdrop-blur-sm shadow-black/50 hover:shadow-black/70' 
              : 'bg-white/70 backdrop-blur-sm shadow-gray-200/50 hover:shadow-gray-300/50'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode 
              ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/10' 
              : 'bg-gradient-to-br from-violet-500/5 to-purple-500/5'
            }`}></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Building2" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>О компании</CardTitle>
                    <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Торговые площадки</CardDescription>
                  </div>
                </div>
                <Button
                  onClick={() => markStepCompleted('company')}
                  variant="ghost"
                  size="sm"
                  className={`${completedSteps.has('company') ? 'text-green-500' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}
                >
                  <Icon name={completedSteps.has('company') ? "CheckCircle" : "Circle"} size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className={`backdrop-blur-sm p-3 rounded-xl border transition-colors duration-300 ${darkMode 
                  ? 'bg-violet-900/20 border-violet-800/30' 
                  : 'bg-violet-50/80 border-violet-100/50'
                }`}>
                  <Icon name="Users" size={18} className="text-violet-500 mb-2" />
                  <p className={`text-sm font-medium ${darkMode ? 'text-violet-300' : 'text-violet-800'}`}>Продажи</p>
                </div>
                <div className={`backdrop-blur-sm p-3 rounded-xl border transition-colors duration-300 ${darkMode 
                  ? 'bg-emerald-900/20 border-emerald-800/30' 
                  : 'bg-emerald-50/80 border-emerald-100/50'
                }`}>
                  <Icon name="ShoppingCart" size={18} className="text-emerald-500 mb-2" />
                  <p className={`text-sm font-medium ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>Закупки</p>
                </div>
                <div className={`backdrop-blur-sm p-3 rounded-xl border transition-colors duration-300 ${darkMode 
                  ? 'bg-amber-900/20 border-amber-800/30' 
                  : 'bg-amber-50/80 border-amber-100/50'
                }`}>
                  <Icon name="MessageSquare" size={18} className="text-amber-500 mb-2" />
                  <p className={`text-sm font-medium ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>Отзывы</p>
                </div>
                <div className={`backdrop-blur-sm p-3 rounded-xl border transition-colors duration-300 ${darkMode 
                  ? 'bg-pink-900/20 border-pink-800/30' 
                  : 'bg-pink-50/80 border-pink-100/50'
                }`}>
                  <Icon name="Palette" size={18} className="text-pink-500 mb-2" />
                  <p className={`text-sm font-medium ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>Дизайн</p>
                </div>
              </div>
              <div className="pt-2">
                <a 
                  href="https://shelevar.bitrix24.ru/hr/structure/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="ghost" className={`w-full justify-start transition-colors duration-300 ${darkMode 
                    ? 'text-violet-400 hover:text-violet-300 hover:bg-violet-900/20' 
                    : 'text-violet-600 hover:text-violet-700 hover:bg-violet-50/50'
                  }`}>
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Структура компании
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Регистрация в Битрикс24 */}
          <Card 
            id="registration"
            className={`group relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 ${darkMode 
              ? 'bg-gray-800/70 backdrop-blur-sm shadow-black/50 hover:shadow-black/70' 
              : 'bg-white/70 backdrop-blur-sm shadow-gray-200/50 hover:shadow-gray-300/50'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode 
              ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10' 
              : 'bg-gradient-to-br from-emerald-500/5 to-teal-500/5'
            }`}></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="UserPlus" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Регистрация</CardTitle>
                    <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Битрикс24 портал</CardDescription>
                  </div>
                </div>
                <Button
                  onClick={() => markStepCompleted('registration')}
                  variant="ghost"
                  size="sm"
                  className={`${completedSteps.has('registration') ? 'text-green-500' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}
                >
                  <Icon name={completedSteps.has('registration') ? "CheckCircle" : "Circle"} size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className={`backdrop-blur-sm p-4 rounded-xl border transition-colors duration-300 ${darkMode 
                ? 'bg-emerald-900/20 border-emerald-800/30' 
                : 'bg-gradient-to-br from-emerald-50/80 to-teal-50/80 border-emerald-100/50'
              }`}>
                <div className="flex items-center mb-2">
                  <Icon name="Link" size={16} className="text-emerald-500 mr-2" />
                  <h4 className={`font-semibold ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>Приглашение</h4>
                </div>
                <div className={`text-sm font-mono p-2 rounded-lg break-all cursor-not-allowed opacity-60 ${darkMode 
                    ? 'text-emerald-300 bg-emerald-900/30' 
                    : 'text-emerald-700 bg-emerald-100/50'
                  }`}>
                  shelevar.bitrix24.ru/?secret=advnrbdg
                </div>
                <p className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Активную ссылку Вы получите от HR
                </p>
              </div>
              
              <div className="space-y-3">
                {['Принять приглашение', 'Создать пароль', 'Войти в систему'].map((step, index) => (
                  <div key={index} className={`flex items-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${darkMode 
                      ? 'bg-emerald-900/30' 
                      : 'bg-emerald-100'
                    }`}>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    {step}
                  </div>
                ))}
              </div>
              

            </CardContent>
          </Card>

          {/* Заполнение профиля */}
          <Card 
            id="profile"
            className={`group relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 ${darkMode 
              ? 'bg-gray-800/70 backdrop-blur-sm shadow-black/50 hover:shadow-black/70' 
              : 'bg-white/70 backdrop-blur-sm shadow-gray-200/50 hover:shadow-gray-300/50'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode 
              ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10' 
              : 'bg-gradient-to-br from-amber-500/5 to-orange-500/5'
            }`}></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Профиль</CardTitle>
                    <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Настройка аккаунта</CardDescription>
                  </div>
                </div>
                <Button
                  onClick={() => markStepCompleted('profile')}
                  variant="ghost"
                  size="sm"
                  className={`${completedSteps.has('profile') ? 'text-green-500' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}
                >
                  <Icon name={completedSteps.has('profile') ? "CheckCircle" : "Circle"} size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className={`backdrop-blur-sm p-4 rounded-xl border transition-colors duration-300 ${darkMode 
                ? 'bg-amber-900/20 border-amber-800/30' 
                : 'bg-gradient-to-br from-amber-50/80 to-orange-50/80 border-amber-100/50'
              }`}>
                <div className="flex items-center mb-2">
                  <Icon name="FileText" size={16} className="text-amber-500 mr-2" />
                  <h4 className={`font-semibold ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>Регламент</h4>
                </div>
                <p className={`text-sm ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                  Подробные инструкции по заполнению всех полей личного кабинета
                </p>
              </div>
              
              <div className={`backdrop-blur-sm p-3 rounded-xl border transition-colors duration-300 ${darkMode 
                ? 'bg-amber-900/30 border-amber-800/50' 
                : 'bg-gradient-to-r from-amber-100/50 to-orange-100/50 border-amber-200/50'
              }`}>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="text-amber-500 mr-2" />
                  <p className={`text-sm font-medium ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>Логин = рабочая почта</p>
                </div>
              </div>
              
              <a 
                href="https://shelevar.bitrix24.ru/~qeNXH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="ghost" className={`w-full justify-start transition-colors duration-300 ${darkMode 
                  ? 'text-amber-400 hover:text-amber-300 hover:bg-amber-900/20' 
                  : 'text-amber-600 hover:text-amber-700 hover:bg-amber-50/50'
                }`}>
                  <Icon name="Settings" size={16} className="mr-2" />
                  Открыть регламент
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Telegram чат */}
          <Card 
            id="telegram"
            className={`group relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 ${darkMode 
              ? 'bg-gray-800/70 backdrop-blur-sm shadow-black/50 hover:shadow-black/70' 
              : 'bg-white/70 backdrop-blur-sm shadow-gray-200/50 hover:shadow-gray-300/50'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode 
              ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
              : 'bg-gradient-to-br from-blue-500/5 to-cyan-500/5'
            }`}></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Telegram</CardTitle>
                    <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Чат команды</CardDescription>
                  </div>
                </div>
                <Button
                  onClick={() => markStepCompleted('telegram')}
                  variant="ghost"
                  size="sm"
                  className={`${completedSteps.has('telegram') ? 'text-green-500' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}
                >
                  <Icon name={completedSteps.has('telegram') ? "CheckCircle" : "Circle"} size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="text-center py-4">
                <div className="text-5xl mb-4 animate-bounce">👋</div>
                <p className={`font-medium mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Знакомство с командой
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Поделитесь приветствием в любом формате
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "Type", label: "Текст" },
                  { icon: "Video", label: "Видео" },
                  { icon: "Camera", label: "Фото" }
                ].map(({ icon, label }) => (
                  <div key={label} className={`backdrop-blur-sm p-4 rounded-xl border text-center group-hover:scale-105 transition-transform duration-300 ${darkMode 
                    ? 'bg-blue-900/20 border-blue-800/30' 
                    : 'bg-blue-50/80 border-blue-100/50'
                  }`}>
                    <Icon name={icon as any} size={20} className="mx-auto mb-2 text-blue-500" />
                    <p className={`text-xs font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Зарплата */}
          <Card 
            id="info"
            className={`group relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 ${darkMode 
              ? 'bg-gray-800/70 backdrop-blur-sm shadow-black/50 hover:shadow-black/70' 
              : 'bg-white/70 backdrop-blur-sm shadow-gray-200/50 hover:shadow-gray-300/50'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode 
              ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10' 
              : 'bg-gradient-to-br from-green-500/5 to-emerald-500/5'
            }`}></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Banknote" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Зарплата</CardTitle>
                    <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-500'}>График выплат</CardDescription>
                  </div>
                </div>
                <Button
                  onClick={() => markStepCompleted('info')}
                  variant="ghost"
                  size="sm"
                  className={`${completedSteps.has('info') ? 'text-green-500' : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}
                >
                  <Icon name={completedSteps.has('info') ? "CheckCircle" : "Circle"} size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[{ day: 5, label: "число месяца" }, { day: 20, label: "число месяца" }].map(({ day, label }) => (
                  <div key={day} className={`backdrop-blur-sm p-6 rounded-xl border text-center group-hover:scale-105 transition-transform duration-300 ${darkMode 
                    ? 'bg-green-900/20 border-green-800/30' 
                    : 'bg-gradient-to-br from-green-50/80 to-emerald-50/80 border-green-100/50'
                  }`}>
                    <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>{day}</div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{label}</p>
                  </div>
                ))}
              </div>
              
              <div className={`backdrop-blur-sm p-3 rounded-xl border transition-colors duration-300 ${darkMode 
                ? 'bg-green-900/30 border-green-800/50' 
                : 'bg-gradient-to-r from-green-100/50 to-emerald-100/50 border-green-200/50'
              }`}>
                <div className="flex items-center">
                  <Icon name="CreditCard" size={16} className="text-green-500 mr-2" />
                  <p className={`text-sm font-medium ${darkMode ? 'text-green-300' : 'text-green-800'}`}>На вашу карту</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* График работы */}
          <Card className={`group relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:-translate-y-2 ${darkMode 
            ? 'bg-gray-800/70 backdrop-blur-sm shadow-black/50 hover:shadow-black/70' 
            : 'bg-white/70 backdrop-blur-sm shadow-gray-200/50 hover:shadow-gray-300/50'
          }`}>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode 
              ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10' 
              : 'bg-gradient-to-br from-purple-500/5 to-violet-500/5'
            }`}></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>График</CardTitle>
                  <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Рабочее время</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className={`backdrop-blur-sm p-6 rounded-xl border text-center transition-colors duration-300 ${darkMode 
                ? 'bg-purple-900/20 border-purple-800/30' 
                : 'bg-gradient-to-br from-purple-50/80 to-violet-50/80 border-purple-100/50'
              }`}>
                <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>09:00 - 18:00</div>
                <p className={`text-sm font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Понедельник - Пятница</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Coffee", day: "Суббота", status: "Выходной" },
                  { icon: "Home", day: "Воскресенье", status: "Выходной" }
                ].map(({ icon, day, status }) => (
                  <div key={day} className={`backdrop-blur-sm p-4 rounded-xl border text-center transition-colors duration-300 ${darkMode 
                    ? 'bg-purple-900/30 border-purple-800/50' 
                    : 'bg-purple-100/50 border-purple-200/50'
                  }`}>
                    <Icon name={icon as any} size={24} className="mx-auto mb-2 text-purple-500" />
                    <p className={`text-xs font-medium ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>{day}</p>
                    <p className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{status}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Footer Message */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className={`relative backdrop-blur-sm p-10 rounded-3xl border shadow-2xl transition-colors duration-300 ${darkMode 
              ? 'bg-gray-800/80 border-gray-700/50 shadow-black/20' 
              : 'bg-white/80 border-gray-200/50 shadow-gray-300/20'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-violet-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${darkMode 
                ? 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
              }`}>
                Успехов в работе и радости от жизни!
              </h3>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Добро пожаловать в нашу дружную команду! Мы рады видеть вас частью нашего коллектива.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;