// antd design

import { Button } from "antd";
import { Divider } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

const ButtonStyle = {
  width: "100%",
};

const ButtonStyle2 = {
  width: "49%",
  marginRight: "1%",
};

export function Login() {
  return (
    <>
      <Button style={ButtonStyle} type="primary">
        Login
      </Button>
      <Divider>or</Divider>
      <div>
        <Button style={ButtonStyle2}>
          <GoogleOutlined />
          Google
        </Button>
        <Button style={ButtonStyle2}>
          <FacebookOutlined /> Facebook
        </Button>
      </div>
    </>
  );
}