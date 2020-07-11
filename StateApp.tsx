import React from "react";
import { Tooltip, Progress, Tag } from "antd";
import StateLink from './StateLink'
export default ({ app }) => (
  <div className="app">
    <Progress
      type="circle"
      percent={ app.applicationOk == 0 ? 100 :
        (100 * app.applicationOk.length) /
        (app.applicationOk.length + app.applicationEchec.length)
      }
      status={
        app.applicationEchec.length === 0
          ? "success "
          : app.applicationOk.length
          ? "exception"
          : "normal"
      }
      format={() => `
        ${app.applicationOk == 0 ? 100 : (100 * app.applicationOk.length) /
        (app.applicationOk.length + app.applicationEchec.length)} %`
      }
    />

    <div className="app__info">
      <Tag color="#108ee9">{app.name}</Tag>
      <Tag color="default">{app.version}</Tag>
    </div>

    <StateLink app={app} />
  </div>
);
