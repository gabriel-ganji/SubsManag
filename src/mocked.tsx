import { FaFigma } from "react-icons/fa";
import { SiPrime } from "react-icons/si";
import { SiAppletv } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { SiNetflix } from "react-icons/si";
import { ServicesType, UserServicesUseType } from "./types";

export const servicesInfo: ServicesType[] = [
    {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        image: "https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-White-Dark-Background-Logo.wine.svg",
        description: "Advanced",
        price: "20,00",
        id: "12313121Dropbox"
    },
    {
        logo: <SiNetflix size="1.5rem" />,
        name: "Netflix",
        image: "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456",
        description: "Premium",
        price: "9,99",
        id: "12313120Netflix"
    },
    {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        image: "https://cdn.vox-cdn.com/thumbor/CmNJgSUD10NOWE7VItdyuWIxV-g=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23988689/acastro_STK069_appleTVPlus_02.jpg",
        description: "Premium Family",
        price: "14,95",
        id: "12313120Apple"
    },
    {
        logo: <FaFigma size="1.5rem" />,
        name: "Figma",
        image: "https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png",
        description: "Professional",
        price: "12,00",
        id: "12313122Figma"
    },
    {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        image: "https://tm.ibxk.com.br/2021/02/12/12224528436398.jpg",
        description: "Student",
        price: "7,49",
        id: "12313122Amazon"
    },
]

export const userServicesUse: UserServicesUseType[] = [
    {
        value: "-$4.99",
        id: "12313120Apple",
        date: "Sep 29th",
    },
    {
        value: "-$9.99",
        id: "12313121Dropbox",
        date: "Sep 25th",
    },
    {
        value: "-$7.49",
        id: "12313122Amazon",
        date: "Sep 10th"
    },
]