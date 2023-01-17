// antd design
import { Button } from "antd";
import { Divider } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import { Col, Row } from "antd";


export function Login() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Button type="primary" block>Login</Button>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          {" "}
          <Divider>or</Divider>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={11}>
          <Button block>
            <GoogleOutlined />
            Google
          </Button>
        </Col>
        <Col span={11}>
          <Button block>
            <FacebookOutlined /> Facebook
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={3}>
          <div className="sign-up-link">
            <Paragraph>
              {" "}
              Don't have an acount?{" "}
              <Link style={{ fontWeight: "bold" }}>Sign Up</Link>
            </Paragraph>
          </div>
        </Col>
      </Row>

    </>
  );
}
