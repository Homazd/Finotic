import './App.css'


/////////ant design /////////////
import { Right } from './components/Right';
import { Left } from './components/Left';
import { Col, Row } from 'antd';



//////////////

export const App = () => (
  <Row className='all'>
  <Col span={11} style={{ backgroundColor: '#f5f7f9' }}>
    <Left />
  </Col>
  <Col span={13}>
    <Right />
  </Col>
</Row>
);

