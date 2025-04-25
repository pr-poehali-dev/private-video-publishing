
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import VideoGrid from "@/components/VideoGrid";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl font-bold mb-4 text-purple-600">Видеоприватия</h1>
            <p className="text-xl text-gray-600 mb-6">
              Платформа для публикации и просмотра ваших частных видео коллекций
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Загрузить видео
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Поиск видео..." 
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-[300px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Популярные видео</h2>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Смотреть все
            </Button>
          </div>
          
          <VideoGrid />
        </section>
      </main>
      
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 Видеоприватия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
