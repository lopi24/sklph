import { Donation } from "@/types";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";

export const navLinks = [
  {
    label: "Charities",
    route: "/charities",
  },
  {
    label: "Beneficiaries",
    route: "/beneficiaries",
  },
  {
    label: "About us",
    route: "/about-us",
  },
];

export const organizerData = [
  {
    name: "Janessa Caspe",
    address: "Calamba City, Laguna",
    company: "Maddy's Avenue",
  },
  {
    name: "Arrabella Caspe",
    address: "Cabuyao City, Laguna",
    company: "Bella's World",
  },
];

export const partnershipData = [
  {
    name: "Janessa Caspe",
    address: "Calamba City, Laguna",
    company: "Maddy's Avenue",
  },
  {
    name: "Arrabella Caspe",
    address: "Cabuyao City, Laguna",
    company: "Bella's World",
  },
  {
    name: "LJ",
    address: "New Zealand",
    company: "Individual",
  },
];

export const wordsOfSupports = [
  {
    name: "Jessa Caspe",
    amount: "20",
    words: "God bless you all",
  },
  {
    name: "Janessa Binoya",
    amount: "10",
    words: "Best luck",
  },
  {
    name: "Arabella Jathes",
    amount: "50",
    words: "Let's go to SM",
  },
  {
    name: "Anonymous",
    amount: "1000",
    words: "I support you",
  },
];

export const donationsList: Donation[] = [
  {
    name: "Jessa Caspe",
    amount: "20",
    date: "1 hr ago",
  },
  {
    name: "Janessa Binoya",
    amount: "10",
    date: "2 hrs ago",
  },
  {
    name: "Arabella Jathes",
    amount: "50",
    date: "36 mins ago",
  },
  {
    name: "Anonymous",
    amount: "1000",
    date: "25 mins ago",
  },
  {
    name: "Jessa Caspe",
    amount: "20",
    date: "1 hr ago",
  },
  {
    name: "Janessa Binoya",
    amount: "10",
    date: "2 hrs ago",
  },
  {
    name: "Arabella Jathes",
    amount: "50",
    date: "36 mins ago",
  },
  {
    name: "Anonymous",
    amount: "1000",
    date: "25 mins ago",
  },
  {
    name: "Jessa Caspe",
    amount: "20",
    date: "1 hr ago",
  },
  {
    name: "Janessa Binoya",
    amount: "10",
    date: "2 hrs ago",
  },
  {
    name: "Arabella Jathes",
    amount: "50",
    date: "36 mins ago",
  },
  {
    name: "Anonymous",
    amount: "1000",
    date: "25 mins ago",
  },
];

export const socials = [
  {
    component: EmailShareButton,
    icon: EmailIcon,
    label: "Email",
  },
  {
    component: FacebookShareButton,
    icon: FacebookIcon,
    label: "Facebook",
  },
  {
    component: TwitterShareButton,
    icon: TwitterIcon,
    label: "Twitter",
  },
  {
    component: LinkedinShareButton,
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
];
