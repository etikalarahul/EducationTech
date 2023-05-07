import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Card.css"

function Crousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wemakescholars.com/uploads/blog/TopprofessionalITcoursetopursueincollege.jpg"
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://leverageedu.com/blog/wp-content/uploads/2020/08/Diploma-in-IT.jpg"
          alt="Second slide"
          height="600px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nearlearn.com/blog/wp-content/uploads/2021/12/Blog-1.png"
          alt="Third slide"
          height="600px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;