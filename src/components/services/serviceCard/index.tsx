import Toggle from "../../reusable/toggle";
import { useNavigate } from "react-router-dom";
import { ServicesType, ServInUseDatails } from "../../../types";

function isServicesType(info: ServicesType | ServInUseDatails): info is ServicesType {
    return (info as ServicesType).plans !== undefined;
}

type Info = {
    info: (ServicesType | ServInUseDatails);
    activePlan: boolean;
    key: string;
};

const ServiceCard = ({ info, activePlan }: Info) => {

    const navigate = useNavigate();

    const handleClick = (serviceId: string) => {
        navigate(`/service/${serviceId}`)
    }

    let planSignature: string = "Not Avaliable";
    let planPrice: string = "0.00";
    let planCycle: string = "N/A";

    if (activePlan && !isServicesType(info)) {
        planSignature = info!.plan_signature || planSignature;
        planPrice = String(info.price_signature) || planPrice;
        planCycle = info.plan_cycle || planCycle;
    } else {
        if (isServicesType(info)) {
            planSignature = Object.keys(info.plans.signature_options)[1] || planSignature;
            planPrice = String(Object.values(info.plans.signature_options)[1]) || planPrice;
            planCycle = Object.values(info.plans.cycles)[1] || planCycle;
        }
    }

    return (
        <div className="flex flex-col gap-4 items-left bg-primary-light w-full h-auto mt-2 mb-2 rounded-2xl p-6" onClick={() => handleClick(info.id)}>
            <div className="flex justify-between w-full">
                <div className="flex flex-col items-start">
                    <h5>{info.name}</h5>
                    <p className="text-sm text-primary-ultralight capitalize">{planSignature}</p>
                </div>
                <div className="text-[1.5rem] bg-primary-extralight flex w-12 h-12 items-center justify-center rounded-full">
                    {info.logo}
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex items-end">
                    <h2>{planPrice}</h2>
                    <p className="text-primary-ultralight text-sm mb-3 lowercase">$/{planCycle}</p>
                </div>
                <Toggle state={activePlan} />
            </div>
        </div>
    )
}

export default ServiceCard;