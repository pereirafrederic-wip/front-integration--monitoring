import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  BorderOuterOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { EnumEnv } from "./Models";
import StateApp from "./StateApp";
const { SubMenu } = Menu;

import apps from "./Data-env";

export default class AppMenu extends React.Component {
  state = {
    selectedEnv: ""
  };

  handleClick = e => {
    console.log("click ", e.key);
    this.setState({ selectedEnv: e.key });
  };

  render() {
    const { selectedEnv } = this.state;

    const keys = Object.keys(EnumEnv); // ["A", "B"]
    const envPeuple = keys.map(key => {
      if (apps.filter(app => app.environnement == key).length > 0)
        return EnumEnv[key];
    });

    const domEnv = envPeuple
      .filter(env => env != undefined)
      .map(key => (
        <SubMenu icon={<SettingOutlined />} title={`${EnumEnv[key]}`}>
          {apps.filter(app => app.environnement == key).length > 1 && (
            <Menu.Item key={`${EnumEnv[key]}:ALL`}>All Applications</Menu.Item>
          )}
          {apps
            .filter(app => app.environnement == key)
            .map((app, appkey) => (
              <Menu.Item key={`${EnumEnv[key]}:${app.name.toUpperCase()}`}>
                {app.name}
              </Menu.Item>
            ))}
        </SubMenu>
      ));

    const liste = apps.filter(
      app =>
        app.environnement.concat(":").concat(app.name.toUpperCase()) ==
          selectedEnv ||
        (selectedEnv.endsWith(":ALL") &&
          selectedEnv.startsWith(app.environnement))
    );

    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[selectedEnv]}
          mode="horizontal"
        >
          {domEnv}
        </Menu>
        <div className="apps site-card-wrapper">
          {selectedEnv && liste && liste.map(app => <StateApp app={app} />)}
        </div>
      </div>
    );
  }
}
