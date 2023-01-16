//components
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";

export function Signup() {
  return (
    <>
      <div className="sign-up-link">
        <Paragraph>
          {" "}
          Don't have an acount? <Link style={{fontWeight : "bold"}}>Sign Up</Link>
        </Paragraph>
      </div>
    </>
  );
}