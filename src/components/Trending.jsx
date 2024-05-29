import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
// import "./Trending.css"; // Import file CSS kustom

const Trending = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        console.log(response.data); // Cetak data respons ke konsol
        const animeData = response.data.data; // Akses array objek anime dari respons
        const carouselData = animeData.slice(0, 5).map(anime => ({ // Ambil 5 data pertama
          title: anime.title,
          rating: anime.score,
          imageUrl: anime.images.jpg.large_image_url
        }));
        setCarouselItems(carouselData);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchCarouselData();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=" m-5 trending-container">
      <h1 className="m-5">Trending Anime</h1>
      <div className="d-flex justify-content-center">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} controls={false}>
          {carouselItems.map((item, idx) => (
            <Carousel.Item key={idx}>
              <img
                className=" w-100 p-3 h-100 d-flex justify-content-center "
                src={item.imageUrl}
                alt={item.title}
              />
              <Carousel.Caption className="custom-carousel-caption">
                <h3>{item.title}</h3>
                <p>Rating: {item.rating}</p>
              </Carousel.Caption>
            </Carousel.Item>
            
          ))}
        </Carousel>
      </div>
      
    </div>
  );
};

export default Trending;
