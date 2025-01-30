import { ReactNode } from "react";
import { SiAppletv } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { SiPrime } from "react-icons/si";

type ServicesType = {
  logo: ReactNode;
  name: string;
  description: string;
  price: string;
  id: string;
}

export const servicesInfo: ServicesType[] = [
    {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        description: "Premium Family",
        price: "20",
        id: "12313120Apple"
    },
    {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        description: "Advanced",
        price: "18,50",
        id: "12313121Dropbox"
    },
    {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        description: "Stream",
        price: "9,99",
        id: "12313122Amazon"
    },
    {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        description: "Premium Family",
        price: "20",
        id: "12313120Apple"
    },
    {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        description: "Advanced",
        price: "18,50",
        id: "12313121Dropbox"
    },
    {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        description: "Stream",
        price: "9,99",
        id: "12313122Amazon"
    },
    {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        description: "Premium Family",
        price: "20",
        id: "12313120Apple"
    },
    {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        description: "Advanced",
        price: "18,50",
        id: "12313121Dropbox"
    },
    {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        description: "Stream",
        price: "9,99",
        id: "12313122Amazon"
    }
]

type UserServicesUseType = {
    value: string;
    id: string;
} 

export const userServicesUse: UserServicesUseType[] = [
    {
        value: "-$4.99",
        id: "12313120Apple"
    },
    {
        value: "-$9.99",
        id: "12313121Dropbox"
    },
    {
        value: "-$7.49",
        id: "12313122Amazon"
    },
    {
        value: "-$4.99",
        id: "12313120Apple"
    },
    {
        value: "-$9.99",
        id: "12313121Dropbox"
    },
    {
        value: "-$7.49",
        id: "12313122Amazon"
    },
    {
        value: "-$4.99",
        id: "12313120Apple"
    },
    {
        value: "-$9.99",
        id: "12313121Dropbox"
    },
    {
        value: "-$7.49",
        id: "12313122Amazon"
    }
]