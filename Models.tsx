
enum EnumEnv {
  DEVELOPPEMENT, INTEGRATION,RECETTE_INTERNE, RECETTE_CLIENT, PREPRODUCTION, PRODUCTION
}


interface AppliRetour {

   nom: string,
  environnement:EnumEnv,
  version: string
}


interface AppliLinksRetour {

   nom: string,
  environnement:EnumEnv,
  version: string,
  applicationOk : Array<LinksOk>,
  applicationEchec : Array<LinksKo>

}

interface LinksOk extends AppliRetour{
  url: string
}

interface LinksKo{
  url: string,
  rendInstable : boolean
}
