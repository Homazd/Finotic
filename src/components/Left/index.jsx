import { Carousel } from "antd";
import {CarouselPart} from "./Carousel";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export function Left() {
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