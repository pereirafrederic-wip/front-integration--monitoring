import React from "react";
import { Tooltip, Progress, Tag } from "antd";
import { Tag } from "antd";
import {
AlertTwoTone
} from '@ant-design/icons';

import apps from './Data-env';

export default ({ app }) => (
  <div className="app-links">

{app.applicationEchec.map( appok =>
        <div className="link">
        
        <AlertTwoTone color={'red'}/>
        <Tag color="error">{appok.url}</Tag>
        <Tag color="error">{apps.filter.url}</Tag>
        
       </div>
    )}

    {app.applicationOk.map( appok =>
        <div className="link">
        
       <Progress percent={100} size="small" status={
         app.environnement == appok.environnement ? 'success' : 'exception'

       }/>
       <Tag color="success">{appok.name}</Tag>
        <Tag color="success">{appok.version}</Tag>
       <Tag color="success">{appok.url}</Tag>
       </div>
    )}
  </div>
);
