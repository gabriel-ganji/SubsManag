import { ReactNode } from "react";

type PlansType = {
    cycle: Array<string>;
    signature_options: Record<string, number>;
};

export type ServicesType = {
    id: string;
    name: string;
    image: string;
    logo: ReactNode;
    plans: PlansType;
    description: string;
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