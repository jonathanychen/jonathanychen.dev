'use client'

import { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";


const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <CarouselItem>
        <h1>Test1</h1>
      </CarouselItem>
      <CarouselItem>
        <h1>Test2</h1>
      </CarouselItem>
      <CarouselItem>
        <h1>Test3</h1>
      </CarouselItem>
    </Carousel>
  )
}
export default Projects;