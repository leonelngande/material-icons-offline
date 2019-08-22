export interface IconCategory {
  name: string;
  icons: Icon[];
}

export interface Icon {
  id: string;
}

export interface IconsData {
  baseUrl: string;
  categories: IconCategory[];
}
