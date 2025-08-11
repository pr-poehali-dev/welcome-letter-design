import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-8 py-24">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 text-sm text-gray-600 mb-8">
              <Icon name="Sparkles" size={16} className="mr-2 text-violet-500" />
              Добро пожаловать в команду
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
              Приветствуем вас,<br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">наш новый коллега!</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              В ваш первый рабочий день мы познакомим вас с компанией, в которую вы пришли работать. 
              Специализируемся на продажах на маркетплейсах.
            </p>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          
          {/* О компании */}
          <Card className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">О компании</CardTitle>
                  <CardDescription className="text-gray-500">Торговые площадки</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-violet-50/80 backdrop-blur-sm p-3 rounded-xl border border-violet-100/50">
                  <Icon name="Users" size={18} className="text-violet-600 mb-2" />
                  <p className="text-sm font-medium text-violet-800">Продажи</p>
                </div>
                <div className="bg-emerald-50/80 backdrop-blur-sm p-3 rounded-xl border border-emerald-100/50">
                  <Icon name="ShoppingCart" size={18} className="text-emerald-600 mb-2" />
                  <p className="text-sm font-medium text-emerald-800">Закупки</p>
                </div>
                <div className="bg-amber-50/80 backdrop-blur-sm p-3 rounded-xl border border-amber-100/50">
                  <Icon name="MessageSquare" size={18} className="text-amber-600 mb-2" />
                  <p className="text-sm font-medium text-amber-800">Отзывы</p>
                </div>
                <div className="bg-pink-50/80 backdrop-blur-sm p-3 rounded-xl border border-pink-100/50">
                  <Icon name="Palette" size={18} className="text-pink-600 mb-2" />
                  <p className="text-sm font-medium text-pink-800">Дизайн</p>
                </div>
              </div>
              <div className="pt-2">
                <a 
                  href="https://shelevar.bitrix24.ru/hr/structure/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="ghost" className="w-full justify-start text-violet-600 hover:text-violet-700 hover:bg-violet-50/50">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Структура компании
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Регистрация в Битрикс24 */}
          <Card className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="UserPlus" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Регистрация</CardTitle>
                  <CardDescription className="text-gray-500">Битрикс24 портал</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100/50">
                <div className="flex items-center mb-2">
                  <Icon name="Link" size={16} className="text-emerald-600 mr-2" />
                  <h4 className="font-semibold text-emerald-800">Приглашение</h4>
                </div>
                <a 
                  href="https://shelevar.bitrix24.ru/?secret=advnrbdg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-700 font-mono bg-emerald-100/50 p-2 rounded-lg break-all hover:bg-emerald-200/50 transition-colors duration-200 block"
                >
                  shelevar.bitrix24.ru/?secret=advnrbdg
                </a>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  Принять приглашение
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  Создать пароль
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  Войти в систему
                </div>
              </div>
              
              <a 
                href="https://shelevar.bitrix24.ru/?secret=advnrbdg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Начать регистрацию
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Заполнение профиля */}
          <Card className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Профиль</CardTitle>
                  <CardDescription className="text-gray-500">Настройка аккаунта</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm p-4 rounded-xl border border-amber-100/50">
                <div className="flex items-center mb-2">
                  <Icon name="FileText" size={16} className="text-amber-600 mr-2" />
                  <h4 className="font-semibold text-amber-800">Регламент</h4>
                </div>
                <p className="text-sm text-amber-700">
                  Подробные инструкции по заполнению всех полей личного кабинета
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-amber-100/50 to-orange-100/50 backdrop-blur-sm p-3 rounded-xl border border-amber-200/50">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="text-amber-600 mr-2" />
                  <p className="text-sm font-medium text-amber-800">Логин = рабочая почта</p>
                </div>
              </div>
              
              <a 
                href="https://shelevar.bitrix24.ru/~qeNXH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="ghost" className="w-full justify-start text-amber-600 hover:text-amber-700 hover:bg-amber-50/50">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Открыть регламент
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Telegram чат */}
          <Card className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Telegram</CardTitle>
                  <CardDescription className="text-gray-500">Чат команды</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="text-center py-4">
                <div className="text-5xl mb-4 animate-bounce">👋</div>
                <p className="text-gray-700 font-medium mb-4">
                  Знакомство с командой
                </p>
                <p className="text-sm text-gray-500">
                  Поделитесь приветствием в любом формате
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100/50 text-center group-hover:scale-105 transition-transform duration-300">
                  <Icon name="Type" size={20} className="mx-auto mb-2 text-blue-500" />
                  <p className="text-xs font-medium text-blue-700">Текст</p>
                </div>
                <div className="bg-blue-50/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100/50 text-center group-hover:scale-105 transition-transform duration-300">
                  <Icon name="Video" size={20} className="mx-auto mb-2 text-blue-500" />
                  <p className="text-xs font-medium text-blue-700">Видео</p>
                </div>
                <div className="bg-blue-50/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100/50 text-center group-hover:scale-105 transition-transform duration-300">
                  <Icon name="Camera" size={20} className="mx-auto mb-2 text-blue-500" />
                  <p className="text-xs font-medium text-blue-700">Фото</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Зарплата */}
          <Card className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Banknote" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Зарплата</CardTitle>
                  <CardDescription className="text-gray-500">График выплат</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm p-6 rounded-xl border border-green-100/50 text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-700 mb-2">5</div>
                  <p className="text-sm text-green-600 font-medium">число месяца</p>
                </div>
                <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm p-6 rounded-xl border border-green-100/50 text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-700 mb-2">20</div>
                  <p className="text-sm text-green-600 font-medium">число месяца</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-100/50 to-emerald-100/50 backdrop-blur-sm p-3 rounded-xl border border-green-200/50">
                <div className="flex items-center">
                  <Icon name="CreditCard" size={16} className="text-green-600 mr-2" />
                  <p className="text-sm font-medium text-green-800">На вашу карту</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* График работы */}
          <Card className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">График</CardTitle>
                  <CardDescription className="text-gray-500">Рабочее время</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="bg-gradient-to-br from-purple-50/80 to-violet-50/80 backdrop-blur-sm p-6 rounded-xl border border-purple-100/50 text-center">
                <div className="text-2xl font-bold text-purple-700 mb-2">09:00 - 18:00</div>
                <p className="text-sm text-purple-600 font-medium">Понедельник - Пятница</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-100/50 backdrop-blur-sm p-4 rounded-xl border border-purple-200/50 text-center">
                  <Icon name="Coffee" size={24} className="mx-auto mb-2 text-purple-500" />
                  <p className="text-xs font-medium text-purple-700">Суббота</p>
                  <p className="text-xs text-purple-600">Выходной</p>
                </div>
                <div className="bg-purple-100/50 backdrop-blur-sm p-4 rounded-xl border border-purple-200/50 text-center">
                  <Icon name="Home" size={24} className="mx-auto mb-2 text-purple-500" />
                  <p className="text-xs font-medium text-purple-700">Воскресенье</p>
                  <p className="text-xs text-purple-600">Выходной</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Footer Message */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-200/50 shadow-2xl shadow-gray-300/20">
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-violet-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Успехов в работе и радости от жизни!
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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