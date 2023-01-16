import React from "react";
//components
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {Login} from "./Login";
import {Signup} from "./Signup";
//css
import "./index.css";
import {InputPart} from "./Input";

export function Right() {
  return (
    <>
      <div className="panel">
        <div className="greeting-user">
          <Title level={3}>Welcome back!</Title>
          <Paragraph>Start managing your finance better and faster</Paragraph>
        </div>
        <InputPart />
        <Login />
        <Signup />
        <Paragraph className="copyright-text">
          © 2022 ALL RIGHTS RESERVED
        </Paragraph>
      </div>
    </>
  );
}