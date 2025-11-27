import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Organization {
  id: string;
  name: string;
  deliveryTerms: string;
}

const DeliveryTerms = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([
    { id: '1', name: 'NetLab', deliveryTerms: 'Доставка осуществляется в течение 3-5 рабочих дней. Стоимость доставки рассчитывается индивидуально.' },
    { id: '2', name: 'OCS', deliveryTerms: 'Бесплатная доставка при заказе от 50 000 рублей. Срок доставки - 2-4 рабочих дня.' },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (org: Organization) => {
    setEditingId(org.id);
    setEditText(org.deliveryTerms);
  };

  const handleSave = (id: string) => {
    setOrganizations(orgs =>
      orgs.map(org => (org.id === id ? { ...org, deliveryTerms: editText } : org))
    );
    setEditingId(null);
    setEditText('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="border-b border-gray-300">
        <div className="bg-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Icon name="Menu" size={20} />
            </button>
            <img 
              src="https://cdn.poehali.dev/files/a59d8d56-ac8e-47aa-bfcd-68daceb002ff.png" 
              alt="Роснекс" 
              className="h-8"
            />
            <div className="flex items-center gap-2 text-xs">
              <Icon name="MapPin" size={14} />
              <span>МОСКВА/РЕГИОН ЮФО</span>
            </div>
            <button className="p-1.5 border border-gray-300 rounded hover:bg-gray-50">
              <Icon name="User" size={16} />
            </button>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по артикулу, названию и др."
                className="w-full px-4 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded">
                <Icon name="Search" size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <Icon name="X" size={16} />
            </button>
            <div className="flex items-center gap-2">
              <button className="relative p-1.5 hover:bg-gray-100 rounded">
                <Icon name="ShoppingCart" size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  234
                </span>
              </button>
              <span className="text-sm font-medium">$ 53.8 ₽</span>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded">
              <Icon name="CreditCard" size={16} />
              <span className="text-xs">ЗАКАЗЫ</span>
            </button>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-full bg-green-500 hover:bg-green-600">
                <Icon name="Phone" size={14} className="text-white" />
              </button>
              <button className="p-1.5 rounded-full bg-blue-500 hover:bg-blue-600">
                <Icon name="MessageCircle" size={14} className="text-white" />
              </button>
              <button className="p-1.5 rounded-full bg-purple-500 hover:bg-purple-600">
                <Icon name="AtSign" size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#2c2c2c] px-4 py-2">
          <nav className="flex items-center justify-between text-white text-xs font-medium">
            <div className="flex gap-6">
              <button className="hover:text-gray-300">БРЕНДЫ / АРТИКУЛЫ</button>
              <button className="hover:text-gray-300">ТОВАРЫ</button>
              <button className="hover:text-gray-300">ПОСТАВЩИКИ</button>
              <button className="hover:text-gray-300 flex items-center gap-1">
                <Icon name="ShoppingCart" size={12} />
              </button>
            </div>
            <div className="flex gap-6">
              <button className="hover:text-gray-300">ЦЕНЫ</button>
              <button className="hover:text-gray-300">СТРАНА</button>
            </div>
          </nav>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-[#f5f5f5] border-r border-gray-300 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Настройки администратора
        </h2>
        <nav className="space-y-1">
          {[
            'Мои компании',
            'Пользователи',
            'Организации',
            'Статистика',
            'Мои категории товаров',
            'Мои типы цен',
            'Мои товары',
          ].map((item, idx) => (
            <div
              key={idx}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded cursor-pointer transition-colors"
            >
              {item}
            </div>
          ))}
          <div className="px-3 py-2 text-sm text-gray-900 bg-gray-300 rounded font-medium">
            Мои поставщики
          </div>
          {[
            'Приглашение поставщиков',
            'Даты обновления информации',
            'Админ-панель характеристик',
            'Админ-панель компаний',
            'Выйти',
          ].map((item, idx) => (
            <div
              key={idx}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded cursor-pointer transition-colors"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

        <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Условия поставки
          </h1>

          <div className="space-y-4">
            {organizations.map(org => (
              <Card key={org.id} className="p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      {org.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {org.name}
                    </h3>
                  </div>
                  {editingId !== org.id && (
                    <Button
                      onClick={() => handleEdit(org)}
                      className="bg-[#4a90e2] hover:bg-[#357abd] text-white"
                    >
                      <Icon name="Settings" size={16} className="mr-2" />
                      Настроить
                    </Button>
                  )}
                </div>

                {editingId === org.id ? (
                  <div className="space-y-4 animate-fade-in">
                    <Textarea
                      value={editText}
                      onChange={e => setEditText(e.target.value)}
                      className="min-h-[120px] border-gray-300 focus:border-[#4a90e2] focus:ring-[#4a90e2]"
                      placeholder="Введите условия поставки..."
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleSave(org.id)}
                        className="bg-[#4a90e2] hover:bg-[#357abd] text-white"
                      >
                        <Icon name="Check" size={16} className="mr-2" />
                        Сохранить
                      </Button>
                      <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Отмена
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {org.deliveryTerms}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
        </main>
      </div>
    </div>
  );
};

export default DeliveryTerms;