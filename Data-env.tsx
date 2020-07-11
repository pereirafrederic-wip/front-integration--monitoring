import { EnumEnv } from "./Models";

export default  [
  {
    name: "app1",
    environnement: EnumEnv.INTEGRATION,
    version: "1.0.0-snapshot",
   url: "https://app1/ping",
    applicationOk: [
      {
        name: "app2",
        environnement: EnumEnv.INTEGRATION,
        version: "1.2.0",
        url: "https://app2/app1/ping"
      }
    ],
    applicationEchec :[

    ]
  },
  {
    name: "app2",
    environnement: EnumEnv.INTEGRATION,
    version: "1.2.0",
    url: "https://app2/ping",
    applicationOk: [
      {
        name: "app2",
        environnement: EnumEnv.INTEGRATION,
        version: "1.2.0",
        url: "https://app3/"
      }
    ],
    applicationEchec :[{
       url: "https://app1/",
       rendInstable : false}
    ]
  },
  {
    name: "app3",
    environnement: EnumEnv.DEVELOPPEMENT,
    version: "10.0.1-snapshot",
    url: "https://app3/ping",
    applicationOk: [
      {
        name: "app2",
        environnement: EnumEnv.INTEGRATION,
        version: "1.2.0",
        url: "https://app2"
      }
    ],
    applicationEchec :[
      {
       url: "https://appx/",
       rendInstable : true}
    ]
  },
  {
    name: "app4",
    url: "https://app4/ping",
    environnement: EnumEnv.INTEGRATION,
    version: "0.1.1-snapshot",
    applicationOk: [
    ],
    applicationEchec :[
    ]
  }
];
