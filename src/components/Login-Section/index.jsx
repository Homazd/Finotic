import React from "react";

// components
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Login } from "./components/Login";
import { InputPart } from "./components/Input";
import { Col, Row } from 'antd';


//Styles
import "./index.css";

export function LoginSection() {
  return (
    <>
      <div className="panel">
        <div className="greeting-panel">
          <Title level={3}>Welcome back!</Title>
          <Paragraph style={{color: "#6D9886"}}>Start managing your finance better and faster</Paragraph>
        </div>
        <Row>
          <Col span={24}>
            <InputPart />
          </Col>
        </Row>

        <Login />
        <Paragraph className="copyright">© 2022 ALL RIGHTS RESERVED</Paragraph>
      </div>
    </>
  );
}
