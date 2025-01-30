import { ReactNode } from "react";

export type ServicesType = {
    name: string;
    image: string;
    logo: ReactNode;
    description: string;
    price: string;
    id: string;
};

export type UserServicesUseType = {
    value: string;
    id: string;
    date: string;
};

export type BothUserServicesType = ServicesType & UserServicesUseType;