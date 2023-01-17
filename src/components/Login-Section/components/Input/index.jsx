import { Input } from "antd";
import Link from "antd/es/typography/Link";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

export function InputPart() {
  return (
    <>
      <Input placeholder="you@example.com" suffix={<MailOutlined />} />
      <Input.Password
        style={{ marginTop: "15px" }}
        placeholder="At least 8 characters"
        suffix={<LockOutlined style={{ float: "left" }} />}
      />
      <div style={{ marginTop: "5px", marginBottom: "7px", padding: "0", float: "right" }}>
        <Link>
          <strong>Forgot password?</strong>
        </Link>
      </div>
    </>
  );
}