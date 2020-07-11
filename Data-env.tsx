import { EnumEnv } from "./Models";

export default [
  {
    name: "app1",
    environnement: EnumEnv.INTEGRATION,
    version: "1.0.0-snapshot",
    baseUrl: "https://app1/",
    isAlive: true,
    contacts:["user1@monitoring.fr", "user2@monitoring.fr"],
    applicationOk: [
      {
        name: "app2",
        environnement: EnumEnv.INTEGRATION,
        version: "1.2.0",
        url: "https://app2/app1/ping"
      }
    ],
    applicationEchec: []
  },
  {
    name: "app2",
    environnement: EnumEnv.INTEGRATION,
    version: "1.2.0",
    baseUrl: "https://app2",
    contacts:["user1@monitoring.fr"],
    isAlive: true,
    applicationOk: [
      {
        name: "app2",
        environnement: EnumEnv.INTEGRATION,
        version: "1.2.0",
        url: "https://app3/app2/ping"
      },
      {
        name: "app4",
        environnement: EnumEnv.PRODUCTION,
        version: "3.2.0",
        url: "https://app4/app2/ping"
      }
    ],
    applicationEchec: [
      {
        url: "https://app1/app2/ping",
        rendInstable: false
      }
    ]
  },
  {
    name: "app3",
    environnement: EnumEnv.DEVELOPPEMENT,
    version: "10.0.1-snapshot",
    baseUrl: "https://app3",
    contacts:[ "user2@monitoring.fr"],
    isAlive: false,
    applicationOk: [
      {
        name: "app2",
        environnement: EnumEnv.INTEGRATION,
        version: "1.2.0",
        url: "https://app2/app3/ping"
      }
    ],
    applicationEchec: [
      {
        url: "https://appx/app3/ping",
        rendInstable: true
      }
    ]
  },
  {
    name: "app4",
    environnement: EnumEnv.INTEGRATION,
    version: "0.1.1-snapshot",
    baseUrl: "https://app4/",
    isAlive: false,
    applicationOk: [],
    contacts:["user3@monitoring.fr"],
    applicationEchec: []
  },
  {
    name: "app5",
    environnement: EnumEnv.PRODUCTION,
    version: "0.1.1-snapshot",
    baseUrl: "https://app5/",
    isAlive: true,
    contacts:["user1@monitoring.fr", "user3@monitoring.fr"],
    applicationOk: [],
    applicationEchec: []
  }
];
