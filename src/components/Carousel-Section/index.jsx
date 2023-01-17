import { Carousel } from "antd";
import {CarouselPart} from "./components/Carousel";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'gray',
  };

export function CarouselSection() {
  return (
    <>
      <Carousel autoplay>
        <div>
          <CarouselPart style={contentStyle} />
        </div>
        <div>
          <CarouselPart style={contentStyle} />
        </div>
        <div>
          <CarouselPart style={contentStyle} />
        </div>
        <div>
          <CarouselPart style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
}