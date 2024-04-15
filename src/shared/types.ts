export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  TheStaff = "thestaff",
  HETMED = "hetmed",
  MANGO = "mango",
  WhatIsAHedgeFund = "whatisahedgefund?",
  ContactUs = "contactus",
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
