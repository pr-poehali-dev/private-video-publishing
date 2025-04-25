
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Plus, Bell, Menu, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-purple-600">
              <Video size={24} />
              <span className="font-bold text-xl">Видеоприватия</span>
            </Link>
            
            <nav className="hidden md:flex ml-8">
              <ul className="flex gap-6">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/explore" className="text-gray-700 hover:text-purple-600 font-medium">
                    Обзор
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-gray-700 hover:text-purple-600 font-medium">
                    Категории
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Bell size={20} />
            </Button>
            
            <Button className="hidden md:flex gap-2 bg-purple-600 hover:bg-purple-700">
              <Plus size={18} />
              <span>Загрузить</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={24} />
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full">
              <User size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
