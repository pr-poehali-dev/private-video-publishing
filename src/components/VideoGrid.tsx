
import VideoCard from "@/components/VideoCard";

const videoData = [
  {
    id: 1,
    title: "Мои летние каникулы в Сочи 2023",
    author: "Анна Петрова",
    thumbnail: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79",
    views: 1542,
    duration: "12:31",
    createdAt: "3 дня назад"
  },
  {
    id: 2,
    title: "День рождения Максима - полное видео",
    author: "Иван Смирнов",
    thumbnail: "https://images.unsplash.com/photo-1532635241-17e820acc59f",
    views: 893,
    duration: "25:14",
    createdAt: "5 дней назад"
  },
  {
    id: 3,
    title: "Съемки школьного спектакля",
    author: "Елена Кузнецова",
    thumbnail: "https://images.unsplash.com/photo-1522158637959-30ab5e1958b9",
    views: 2105,
    duration: "45:02",
    createdAt: "1 неделя назад"
  },
  {
    id: 4,
    title: "Путешествие по Карелии на байдарках",
    author: "Сергей Иванов",
    thumbnail: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    views: 3271,
    duration: "32:45",
    createdAt: "2 недели назад"
  },
  {
    id: 5,
    title: "Семейный ужин - Новый год 2023",
    author: "Мария Соколова",
    thumbnail: "https://images.unsplash.com/photo-1574801042740-4b11d7a0f518",
    views: 754,
    duration: "18:22",
    createdAt: "2 недели назад"
  },
  {
    id: 6,
    title: "Выпускной 11А класса",
    author: "Дмитрий Волков",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    views: 1823,
    duration: "1:02:18",
    createdAt: "1 месяц назад"
  }
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoData.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
