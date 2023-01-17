// Components
import { Label } from "./components/Label";
// ant design
import { WalletTwoTone, PlusCircleTwoTone } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";

//picture
import chartAddress from "../../../../assets/donut-chart.svg";

//styles
import "./index.css";

const inlinestyles = {
  firstLabel: {
    left: "255px",
    top: "35px",
    textAlign: "center",
  },
  secondLabel: {
    left: "390px",
    top: "16px",
    zIndex: "10",
  },
  imgstyle: {
    width: "150px",
    height: "150px",
    margin: "10px",
  },
  thirdLabel: {
    width: "200px",
    height: "150px",
    left: "185px",
    padding: "10px",
  },
  innerCardStyle: {
    border: "2px dashed black",
    borderRadius: "10px",
    textAlign: "center",
  },
  IconStyle: { margin: "14px", fontSize: "45px" },
};
const {
  firstLabel,
  secondLabel,
  thirdLabel,
  imgstyle,
  innerCardStyle,
  IconStyle,
} = inlinestyles;

export function CarouselPart() {
  return (
    <div>
      <h2 className="carousel-title">FINOTIC</h2>
      <Label extraStyles={firstLabel}>
        <WalletTwoTone style={IconStyle} />
        <Paragraph style={{ fontSize: "15px", color: "gray" }}>
          CURRENTBALANCE
        </Paragraph>
        <Paragraph style={{ fontSize: "20px" }}>$ 24,359</Paragraph>
      </Label>
      <Label extraStyles={secondLabel}>
        <img src={chartAddress} style={imgstyle} alt="chart" />
      </Label>
      <Label extraStyles={thirdLabel}>
        <div style={innerCardStyle}>
          <PlusCircleTwoTone style={IconStyle} />
          <Paragraph>New transactions</Paragraph>
          <Paragraph>
            or upload <Link>.xls</Link> file
          </Paragraph>
        </div>
      </Label>
      <div className="bottom-text">
        <Title>Welcome back!</Title>
        <Paragraph>
          Start managing your finance better and faster <br />
          Start managing your finance better and faster
        </Paragraph>
      </div>
    </div>
  );
}
