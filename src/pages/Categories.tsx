
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import VideoGrid from "@/components/VideoGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", name: "Все" },
  { id: "tutorials", name: "Уроки" },
  { id: "comedy", name: "Комедия" },
  { id: "music", name: "Музыка" },
  { id: "vlogs", name: "Влоги" },
  { id: "gaming", name: "Игры" },
  { id: "cooking", name: "Кулинария" },
  { id: "travel", name: "Путешествия" },
  { id: "sports", name: "Спорт" },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Категории</h1>
          <p className="text-gray-600 max-w-3xl">
            Найдите видео по интересующим вас темам. Выберите категорию, чтобы просмотреть соответствующие видео.
          </p>
        </div>

        <Tabs defaultValue="grid" className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="grid">Сетка</TabsTrigger>
              <TabsTrigger value="list">Список</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                Сортировка
              </Button>
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <TabsContent value="grid" className="mt-0">
            <VideoGrid />
          </TabsContent>
          
          <TabsContent value="list" className="mt-0">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-medium mb-2">Просмотр списком</h3>
              <p className="text-gray-500">
                Компактное представление видео в виде списка будет доступно в следующем обновлении.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">
            © 2024 Видеоприватия. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
