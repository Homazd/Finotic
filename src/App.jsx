import './App.css'


/////////ant design /////////////
import { LoginSection } from './components/Login-Section';
import { CarouselSection } from './components/Carousel-Section';
import { Col, Row } from 'antd';



//////////////

export const App = () => (
  <Row className='all'>
  <Col span={11} style={{ backgroundColor: '#f5f7f9' }}>
    <CarouselSection />
  </Col>
  <Col span={13}>
    <LoginSection />
  </Col>
</Row>
);

