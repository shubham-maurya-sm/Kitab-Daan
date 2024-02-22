import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../img/corousel1.jpg';  // Corrected import
import carousel2 from '../img/corousel2.jpg';  // Corrected import
import carousel3 from '../img/corousel3.png';
import carousel4 from '../img/corousel4.jpg';  // Corrected import

const MyCarousel = () => (
  <Carousel interval={5000}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousel1}
        alt="First slide" height="500"
      />
      <Carousel.Caption>
        <h3>DONATE A BOOK AND LEAVE A LEGACY !</h3>
        <p>You can’t buy love, but you can donate a book and save someone’s life.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousel2}
        alt="Second slide" height="500"
      />
      <Carousel.Caption>
        <h3>DONATE BOOKS, FILL HEARTS !</h3>  {/* Corrected typo in the caption */}
        <p>Don’t donate money to charity. Instead, donate a book. A book is an investment that lasts forever. No matter your age or circumstances, everyone deserves the gift of knowledge.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousel3}
        alt="Third slide" height="500"
      />
      <Carousel.Caption>
        <h3>BOOKS CONNECT US ALL !</h3>
        <p>Books are gifts that keep on giving. Give the gift of literacy today.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousel4}
        alt="Fourth slide" height="500"
      />
      <Carousel.Caption>
        <h3>EVERY BOOK DONATION COUNTS !</h3>
        <p>The best way to spread kindness is by giving books. It’s like a one-stop shop for happiness.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;
