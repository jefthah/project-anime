import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "./Trending.css"; // Import file CSS kustom

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
    <div className="m-5 trending-container">
      <h1 className="text-center">Trending Anime</h1>
      <div className="custom-carousel-container m-5">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} controls={false}>
          {carouselItems.map((item, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 custom-carousel-image"
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
      <div className="carousel-arrows">
        <span className="carousel-arrow prev" onClick={() => setIndex(index === 0 ? carouselItems.length - 1 : index - 1)}>&#10094;</span>
        <span className="carousel-arrow next" onClick={() => setIndex(index === carouselItems.length - 1 ? 0 : index + 1)}>&#10095;</span>
      </div>
    </div>
  );
};

export default Trending;
