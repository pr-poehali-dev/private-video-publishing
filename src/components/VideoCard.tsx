
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Clock } from "lucide-react";

interface VideoProps {
  video: {
    id: number;
    title: string;
    author: string;
    thumbnail: string;
    views: number;
    duration: string;
    createdAt: string;
  }
}

const VideoCard = ({ video }: VideoProps) => {
  const { title, author, thumbnail, views, duration, createdAt } = video;
  
  // Получаем инициалы из имени автора
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  // Форматируем количество просмотров
  const formatViews = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow hover-scale">
      <div className="relative">
        <img 
          src={`${thumbnail}?auto=format&fit=crop&w=600&h=340`} 
          alt={title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {duration}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${author}`} />
            <AvatarFallback>{getInitials(author)}</AvatarFallback>
          </Avatar>
          
          <div className="space-y-1 flex-1">
            <h3 className="font-medium line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-500">{author}</p>
            
            <div className="flex items-center text-xs text-gray-500 gap-4 mt-2">
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{formatViews(views)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
