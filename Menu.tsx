import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined,BorderOuterOutlined, SettingOutlined } from '@ant-design/icons';
import {EnumEnv} from './Models';
import StateApp from './StateApp';
const { SubMenu } = Menu;

import apps from './Data-env';

export default class AppMenu extends React.Component {
  state = {
    selectedEnv: '',
  };

  handleClick = e => {
    console.log('click ', e.key);
    this.setState({ selectedEnv: e.key });
  };

  render() {
    const { selectedEnv } = this.state;



      const domEnv = Object.keys(EnumEnv).map(key => 
              <SubMenu icon={<SettingOutlined />} title={`${EnumEnv[key]}`} >
       
       <Menu.Item key={`${EnumEnv[key]}:ALL`}>All environnement</Menu.Item>
       {apps.filter(app => app.environnement == key).map((app, appkey) =>
      
       <Menu.Item key={`${EnumEnv[key]}:${app.name.toUpperCase()}`}>{app.name}</Menu.Item>
        )}
      
        </SubMenu>
      )

    return (
      <div>
      <Menu onClick={this.handleClick} selectedKeys={[selectedEnv]} mode="horizontal">
        {domEnv}
      </Menu>
      <div className="apps">
       {selectedEnv && apps.filter(app => app.environnement.concat(':').concat(app.name.toUpperCase()) == selectedEnv || (selectedEnv.endsWith(':ALL')&& selectedEnv.startsWith(app.environnement))).map(app => <StateApp app={app} /> )}
      </div>
      </div>
    );
  }
}

/*
               {apps.filter(app => app.environnement == key).length && <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
          }
*/


/*

<SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
*/