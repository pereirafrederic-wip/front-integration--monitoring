import React from "react";
import { Progress, Tag, Divider, Switch, Badge } from "antd";
import StateLink from "./StateLink";
import {
  ApiTwoTone,
  BlockOutlined,
  SafetyCertificateTwoTone,
  HeartTwoTone,
  ApiOutlined
} from "@ant-design/icons";

export default class StateApp extends React.Component {
  state = {
    disabled: true
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

  render() {
    const { app } = this.props;
    const { disabled } = this.state;

    let statutApp = "success";
    let pourcentApp = 100;
    if (app.applicationEchec.length === 0) {
      statutApp = "success";
      pourcentApp = 100;
    } else {
      if (app.applicationOk.length > 0) {
        pourcentApp = Math.trunc(
          (100 * app.applicationOk.length) /
            (app.applicationOk.length + app.applicationEchec.length)
        );
        if (pourcentApp < 90) statutApp = "exception";
        else statutApp = "normal";
      } else {
        statutApp = "exception";
        pourcentApp = 100;
      }
    }
    const nbreCrossPlateforme = app.applicationOk.filter(
      appok => app.environnement != appok.environnement
    ).length;

    const isSnapshot = app.version.endsWith("snapshot");
    let domVersion = <span>{app.version}</span>;
    if (!isSnapshot)
      domVersion = (
        <div>
          <SafetyCertificateTwoTone />
          {domVersion}
        </div>
      );

    const colorheart = app.isAlive ? "#87d068" : "red";

    const sizeIcon = "30px";
    return (
      <div className="app">
        <div className="app__info">
          <Tag color="#108ee9">{app.name.toUpperCase()}</Tag>
          <Tag color="default">{domVersion}</Tag>
        </div>
        <Tag color="default" className="app__info">
          <div className="app__etat">
            <div className="badges">
              <Badge className="app__badge">
                <HeartTwoTone
                  twoToneColor={colorheart}
                  style={{ fontSize: sizeIcon, color: { colorheart } }}
                />
              </Badge>
              {app.applicationEchec.length == 0 &&
                nbreCrossPlateforme == 0 &&
                app.applicationOk.length > 0 && (
                  <Badge  className="app__badge">
                    <ApiOutlined
                      style={{ fontSize: sizeIcon, color: "#87d068" }}
                    />
                  </Badge>
                )}

              {app.applicationEchec.length > 0 && (
                <Badge
                  count={app.applicationEchec.length}
                  className="app__badge"
                  title="connexion en echec"
                  offset={[10, 0]}
                >
                  <ApiTwoTone
                    twoToneColor={"red"}
                    style={{ fontSize: sizeIcon, color: "#08c" }}
                  />
                </Badge>
              )}
              {nbreCrossPlateforme > 0 && (
                <Badge count={nbreCrossPlateforme} className="app__badge">
                  <BlockOutlined
                    style={{ fontSize: sizeIcon, color: "#f50" }}
                  />
                </Badge>
              )}
            </div>
          </div>
        </Tag>
        <Divider />
        {app.applicationOk.length + app.applicationEchec.length > 0 && (
          <Switch
            onClick={this.toggle}
            checkedChildren="cacher"
            unCheckedChildren="afficher"
            className="app__switch"
          />
        )}
        {!disabled && <StateLink app={app} />}
      </div>
    );
  }
}
