
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { VideoGrid } from "@/components/VideoGrid";
import { Search } from "lucide-react";

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Обзор видео</h1>
            <p className="text-gray-600 mb-6">Просмотрите популярные и трендовые видео со всего сообщества</p>
            
            <div className="relative max-w-xl">
              <input 
                type="text" 
                placeholder="Поиск видео по категориям, авторам..." 
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <Button className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700">
                Найти
              </Button>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Популярное сейчас</h2>
              <Button variant="link" className="text-purple-600">Показать все</Button>
            </div>
            
            <VideoGrid 
              videos={[
                { id: '1', title: 'Мастер-класс по монтажу', author: 'Анна К.', views: 15432, duration: '18:22', thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3' },
                { id: '2', title: 'Секреты освещения в домашней студии', author: 'Максим Д.', views: 8765, duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1574717024453-354056aad482?ixlib=rb-4.0.3' },
                { id: '3', title: 'Выбираем оборудование для блога', author: 'Елена В.', views: 23105, duration: '24:18', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3' },
              ]}
            />
          </div>
          
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Новые поступления</h2>
              <Button variant="link" className="text-purple-600">Показать все</Button>
            </div>
            
            <VideoGrid 
              videos={[
                { id: '4', title: 'Урок анимации для начинающих', author: 'Павел М.', views: 5432, duration: '34:10', thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3' },
                { id: '5', title: 'Как записать качественный звук дома', author: 'Ирина Л.', views: 7621, duration: '15:46', thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3' },
                { id: '6', title: 'Основы цветокоррекции видео', author: 'Сергей К.', views: 12543, duration: '22:30', thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3' },
              ]}
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">© 2023 Видеоприватия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
