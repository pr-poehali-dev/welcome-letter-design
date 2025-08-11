import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-inter py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Приветствуем вас, наш новый коллега! 🚀
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              В ваш первый рабочий день мы познакомим вас с компанией, в которую вы пришли работать
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-emerald-400 bg-opacity-30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* О компании */}
          <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-indigo-900">О компании</CardTitle>
              <CardDescription className="text-indigo-600">Работаем в сфере продаж на маркетплейсах</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Badge variant="outline" className="bg-indigo-100 text-indigo-700 border-indigo-200">
                  <Icon name="Users" size={14} className="mr-1" />
                  Отдел продаж
                </Badge>
                <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <Icon name="ShoppingCart" size={14} className="mr-1" />
                  Отдел закупок
                </Badge>
                <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                  <Icon name="MessageSquare" size={14} className="mr-1" />
                  Работа с отзывами
                </Badge>
                <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
                  <Icon name="Palette" size={14} className="mr-1" />
                  Дизайнеры
                </Badge>
                <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                  <Icon name="Calculator" size={14} className="mr-1" />
                  Финансисты
                </Badge>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full group-hover:bg-indigo-50 border-indigo-200">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Структура компании
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Регистрация в Битрикс24 */}
          <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-emerald-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                <Icon name="UserPlus" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-emerald-900">Регистрация</CardTitle>
              <CardDescription className="text-emerald-600">Битрикс24 - ваш рабочий портал</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-semibold text-emerald-800 mb-2 flex items-center">
                    <Icon name="Link" size={16} className="mr-2" />
                    Приглашение для регистрации
                  </h4>
                  <p className="text-sm text-emerald-700 break-all">
                    https://shelevar.bitrix24.ru/?secret=advnrbdg
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-emerald-700">
                    <Icon name="Check" size={16} className="mr-2 text-emerald-500" />
                    Нажмите "Принять приглашение"
                  </div>
                  <div className="flex items-center text-sm text-emerald-700">
                    <Icon name="Check" size={16} className="mr-2 text-emerald-500" />
                    Задайте пароль от аккаунта
                  </div>
                  <div className="flex items-center text-sm text-emerald-700">
                    <Icon name="Check" size={16} className="mr-2 text-emerald-500" />
                    Авторизуйтесь в системе
                  </div>
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Перейти к регистрации
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Заполнение профиля */}
          <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-amber-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-amber-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                <Icon name="User" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-amber-900">Заполнение профиля</CardTitle>
              <CardDescription className="text-amber-600">Настройка личного кабинета</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Регламент заполнения
                  </h4>
                  <p className="text-sm text-amber-700">
                    Следуйте инструкциям в регламенте для корректного заполнения всех полей профиля
                  </p>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    <Icon name="Mail" size={14} className="inline mr-1" />
                    Логин = ваша рабочая почта
                  </p>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-amber-50 border-amber-200">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Открыть регламент
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Telegram чат */}
          <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-blue-900">Telegram чат</CardTitle>
              <CardDescription className="text-blue-600">Общение с командой</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl mb-3">👋</div>
                  <p className="text-blue-700 font-medium mb-4">
                    Приветствие для знакомства с командой
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <Icon name="Type" size={20} className="mx-auto mb-1 text-blue-500" />
                    <p className="text-xs text-blue-700">Текст</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <Icon name="Video" size={20} className="mx-auto mb-1 text-blue-500" />
                    <p className="text-xs text-blue-700">Видео</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <Icon name="Camera" size={20} className="mx-auto mb-1 text-blue-500" />
                    <p className="text-xs text-blue-700">Фото</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  <Icon name="Send" size={16} className="mr-2" />
                  Присоединиться к чату
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Зарплата */}
          <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-green-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                <Icon name="Banknote" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-900">Зарплата</CardTitle>
              <CardDescription className="text-green-600">График выплат</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                    <div className="text-2xl font-bold text-green-700 mb-1">5</div>
                    <p className="text-sm text-green-600">числа</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                    <div className="text-2xl font-bold text-green-700 mb-1">20</div>
                    <p className="text-sm text-green-600">числа</p>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800 flex items-center">
                    <Icon name="CreditCard" size={14} className="mr-2" />
                    На предоставленную карту
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* График работы */}
          <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-purple-900">График работы</CardTitle>
              <CardDescription className="text-purple-600">Рабочие часы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
                  <div className="text-lg font-bold text-purple-700 mb-2">09:00 - 18:00</div>
                  <p className="text-sm text-purple-600">Понедельник - Пятница</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-purple-100 p-3 rounded-lg text-center">
                    <Icon name="Coffee" size={20} className="mx-auto mb-1 text-purple-500" />
                    <p className="text-xs text-purple-700">Суббота</p>
                    <p className="text-xs text-purple-600">Выходной</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg text-center">
                    <Icon name="Home" size={20} className="mx-auto mb-1 text-purple-500" />
                    <p className="text-xs text-purple-700">Воскресенье</p>
                    <p className="text-xs text-purple-600">Выходной</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-indigo-500 to-inter p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Успехов в работе и радости от жизни! ✨
            </h3>
            <p className="text-indigo-100">
              Добро пожаловать в нашу команду! Мы рады, что вы с нами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;