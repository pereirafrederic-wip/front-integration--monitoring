import React from "react";
import { Tooltip, Progress, Tag } from "antd";
import { Tag, Divider, Card } from "antd";
import {
  ApiTwoTone,
  BlockOutlined,
  CheckCircleOutlined,
  MailOutlined,
  EyeOutlined
} from "@ant-design/icons";
import CardAction from './CardAction';
import apps from "./Data-env";

export default ({ app }) => (
  <div className="app__links">
    {app.applicationEchec.map(appEchec => (
      <div className="link">
        <CardAction app={apps
                .filter(appElement =>
                  appEchec.url.startsWith(appElement.baseUrl)
                )[0]} >
          <Tag color="error">
            <div className="link__info">
              <ApiTwoTone twoToneColor={"red"} /> Disconnected
            </div>
          </Tag>

          <Tag color="error">
            <div className="link__info">
              {apps
                .filter(appElement =>
                  appEchec.url.startsWith(appElement.baseUrl)
                )
                .map(el => (
                  <div className="link__info">
                    <div className="link__info__name">{el.name}</div>
                    <div className="link__info__version">{el.version}</div>
                  </div>
                ))}
              <div className="link__info__name">{appEchec.url} </div>
            </div>
          </Tag>
        </CardAction>
        <Divider />
      </div>
    ))}

    {app.applicationOk
      .filter(appok => app.environnement != appok.environnement)
      .map(appok => (
        <div className="link">
          <CardAction  app={apps
                .filter(appElement =>
                  appok.url.startsWith(appElement.baseUrl)
                )[0]} >
            <Tag color="error">
              <div className="link__info">
                <BlockOutlined /> Cross-Envirronement
              </div>
              <div className="link__info">
                {app.environnement} <Divider type="vertical" />
                {appok.environnement}
              </div>
            </Tag>
            <Tag color="success">
              <div className="link__info">
                <div className="link__info__name">{appok.name} </div>
                <div className="link__info__name">{appok.version} </div>
                <div className="link__info__url">{appok.url} </div>
              </div>
            </Tag>
          </CardAction>
          <Divider />
        </div>
      ))}

    {app.applicationOk.map(appok => (
      <div className="link">
        <Tag color="success">
          <div className="link__info">
            <div className="link__info__name">{appok.name} </div>
            <div className="link__info__name">{appok.version} </div>
            <div className="link__info__url">{appok.url} </div>
          </div>
        </Tag>
        <Divider />
      </div>
    ))}
  </div>
);
