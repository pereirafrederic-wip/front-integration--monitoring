import React from "react";
import { Card } from "antd";
import {
  ApiTwoTone,
  BlockOutlined,
  CheckCircleOutlined,
  MailOutlined,
  EyeOutlined
} from "@ant-design/icons";

export default class CardAction extends React.Component {
  handleClick = e => {
    console.log("click ", e.key);
  };
  handlemailClick = e => {
    console.log("email à", this.props.app.contacts);
  };
  render() {
    return (
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <MailOutlined key="mail" onClick={this.handlemailClick} />,
          <EyeOutlined key="eye" onClick={e => this.handleClick(e)} />,
          <CheckCircleOutlined key="check" onClick={e => this.handleClick(e)} />
        ]}
      >
        {this.props.children}
      </Card>
    );
  }
}
