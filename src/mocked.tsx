import { FaFigma } from "react-icons/fa";
import { SiPrime } from "react-icons/si";
import { SiAppletv } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { SiNetflix } from "react-icons/si";
import { ServicesType, UserData } from "./types";

export const user: UserData = {
    id: "69876453543200000GBRL",
    email: "gabriel@gmail.com",
    name: "Gabriel Fernandes",
    servsInUse: [
        {
            id: "12313120Apple",
            plan_signature: "premium_family",
            plan_cycle: "Month",
            date_signature: "Sep 29th",
        },
        {
            id: "12313121Dropbox",
            plan_signature: "advanced",
            plan_cycle: "Month",
            date_signature: "Sep 25th",
        },
        {
            id: "12313122Amazon",
            plan_signature: "student",
            plan_cycle: "Month",
            date_signature: "Sep 10th",
        }
    ]
}

export const servicesInfo: ServicesType[] = [
    {
        id: "12313121Dropbox",
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        image: "https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-White-Dark-Background-Logo.wine.svg",
        plans: {
            signature_options: {
                basic: 5.00,
                standard: 10.00,
                advanced: 20.00,
            },
            cycles: ["day", "Month", "year"],
        }
    },
    {
        id: "12313120Netflix",
        logo: <SiNetflix size="1.5rem" />,
        name: "Netflix",
        image: "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456",
        plans: {
            signature_options: {
                basic: 3.80,
                standard: 4.99,
                premium: 9.99,
            },
            cycles: ["day", "Month", "year"],
        }
    },
    {
        id: "12313120Apple",
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        image: "https://cdn.vox-cdn.com/thumbor/CmNJgSUD10NOWE7VItdyuWIxV-g=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23988689/acastro_STK069_appleTVPlus_02.jpg",        plans: {
            signature_options: {
                basic: 5.30,
                standard: 9.70,
                premium_family: 14.95,
            },
            cycles: ["day", "Month", "year"],
        }
    },
    {
        id: "12313122Figma",
        logo: <FaFigma size="1.5rem" />,
        name: "Figma",
        image: "https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png",
        plans: {
            signature_options: {
                basic: 3.25,
                standard: 6.50,
                professional: 12.00,
            },
            cycles: ["day", "Month", "year"],
        }
    },
    {
        id: "12313122Amazon",
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        image: "https://tm.ibxk.com.br/2021/02/12/12224528436398.jpg",
        plans: {
            signature_options: {
                student: 7.49,
                standard: 12.00,
                premium: 17.99,
            },
            cycles: ["day", "Month", "year"],
        }
    },
]