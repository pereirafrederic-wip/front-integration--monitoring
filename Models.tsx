export enum EnumEnv {
  DEVELOPPEMENT = "DEVELOPPEMENT",
  INTEGRATION = "INTEGRATION",
  RECETTE_INTERNE = "RECETTE_INTERNE",
  RECETTE_CLIENT = "RECETTE_CLIENT",
  PREPRODUCTION = "PREPRODUCTION",
  PRODUCTION = "PRODUCTION"
}

export interface AppliRetour {
  nom: string;
  environnement: EnumEnv;
  version: string;
  contacts: Array<string>;
  baseUrl: string;
}

export interface AppliLinksRetour extends AppliRetour {
  applicationOk: Array<LinksOk>;
  applicationEchec: Array<LinksKo>;
}

export interface LinksOk extends AppliRetour {
  url: string;
}

export interface LinksKo {
  url: string;
  rendInstable: boolean;
}
