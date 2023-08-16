export interface ContentTitle {
  type: "text" | "link";
  value?: string;
  link?: {
    href: string;
    target: string;
  };
}

export interface ContentSubTitle {
  type: "text" | "link";
  value?: string;
  link?: {
    href: string;
    target: string;
  };
}

export interface Content {
  id: string;
  name: string;
  language: string;
  title: ContentTitle;
  subtitle: ContentSubTitle;
  contents: Content[];
}

export interface BlockType {
  id: string;
  name: string;
  type: string;
  contents: Content[];
}

export interface SEO {
  title: string;
  content: any;
  robots: string;
  robotsContent: any;
  icon: any;
}

export interface Page {
  id: string;
  name: string;
  language: string;
  urlBase: string;
  urlRelative: string;
  options: any;
  breadcrumbs: any;
  seo: SEO;
  modules: BlockType[];
  extendedParams: any;
}
