import { ReactNode } from "react";

type PlansType = {
    cycles: Array<string>;
    signature_options: Record<string, number>;
};

export type ServicesType = {
    id: string;
    name: string;
    image: string;
    logo: ReactNode;
    plans: PlansType;
};

export type ServsInUseType = {
    id: string;
    plan_cycle: string;
    plan_signature: string;
    date_signature: string;
}

export type UserData = {
    id: string;
    name: string;
    email: string;
    servsInUse: ServsInUseType[],
}

export type ServInUseDatails = ServsInUseType & {
    name: string;
    logo: ReactNode;
    price_signature: number;
}

export type UserServicesActive = {
    user: UserData;
    servicesInUse: (ServInUseDatails | null)[];
}