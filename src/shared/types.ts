export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutUs",
  TheStaff = "theStaff",
  HETMED = "Hetmed",
  MANGO = "Mango",
  WhatIsAHedgeFund = "WhatIsAHedgeFund?",
  ContactUs = "contactUs",
}

export interface WorkerType {
  title: string;
  description?: string;
  image: string;
}

export interface VideoType {
  name: string;
  title: string;
  src: string;
  poster: string;
}
