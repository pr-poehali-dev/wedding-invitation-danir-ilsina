import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 font-open-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f8e8e8" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="text-center z-10 animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-6 animate-float" />
          </div>
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-foreground mb-4">
            Данир <span className="text-primary">&</span> Ильсина
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            приглашают вас разделить радость нашего особенного дня
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-primary/20">
            <p className="font-cormorant text-3xl font-semibold text-foreground mb-2">
              15 августа 2024
            </p>
            <p className="text-muted-foreground">
              в 16:00
            </p>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Программа дня
          </h2>
          
          <div className="space-y-8">
            {[
              { time: '16:00', event: 'Регистрация гостей', icon: 'Users' },
              { time: '16:30', event: 'Церемония бракосочетания', icon: 'Heart' },
              { time: '17:30', event: 'Фотосессия и поздравления', icon: 'Camera' },
              { time: '18:30', event: 'Праздничный банкет', icon: 'Utensils' },
              { time: '20:00', event: 'Первый танец молодых', icon: 'Music' },
              { time: '21:00', event: 'Развлекательная программа', icon: 'PartyPopper' }
            ].map((item, index) => (
              <Card key={index} className="transform hover:scale-105 transition-all duration-300 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-cormorant text-2xl font-semibold text-foreground">
                          {item.event}
                        </span>
                        <span className="text-lg font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/30 to-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Место проведения
          </h2>
          
          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <div className="mb-6">
                    <Icon name="MapPin" size={32} className="text-primary mb-4" />
                    <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-2">
                      Ресторан "Романтика"
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      ул. Цветочная, 15<br/>
                      г. Казань
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span className="text-muted-foreground">+7 (843) 123-45-67</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Car" size={20} className="text-primary" />
                      <span className="text-muted-foreground">Парковка для гостей</span>
                    </div>
                  </div>
                  
                  <Button className="mt-6 w-full bg-primary hover:bg-primary/90">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Построить маршрут
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-64 md:h-auto flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={64} className="text-primary/60 mx-auto mb-4" />
                    <p className="text-muted-foreground">Карта будет здесь</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Дресс-код
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="ShirtIcon" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-4">
                  Для мужчин
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Классический костюм тёмных оттенков, белая рубашка, галстук или бабочка. 
                  Цветовая гамма: тёмно-синий, серый, чёрный.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-4">
                  Для женщин
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Элегантное платье или костюм в пастельных тонах. 
                  Избегайте белого цвета — это цвет невесты.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Icon name="Palette" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                Цветовая палитра торжества
              </h3>
              <p className="text-muted-foreground">
                Пудровые розовые, персиковые и кремовые оттенки
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/30 to-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-4">
                  Данир
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="MessageCircle" size={18} className="text-primary" />
                    <span>@danir_wedding</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-4">
                  Ильсина
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <span>+7 (999) 765-43-21</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="MessageCircle" size={18} className="text-primary" />
                    <span>@ilsina_wedding</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8 border-primary/20">
            <CardContent className="p-8 text-center">
              <Icon name="Calendar" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                Подтверждение присутствия
              </h3>
              <p className="text-muted-foreground mb-6">
                Просим подтвердить ваше присутствие до 10 августа
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Check" size={18} className="mr-2" />
                Подтвердить присутствие
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-primary/20">
        <div className="mb-6">
          <Icon name="Heart" size={32} className="text-primary mx-auto animate-float" />
        </div>
        <p className="font-cormorant text-2xl text-foreground mb-2">
          С любовью, Данир и Ильсина
        </p>
        <p className="text-muted-foreground">
          Мы не можем дождаться этого особенного дня с вами!
        </p>
      </footer>
    </div>
  );
};

export default Index;