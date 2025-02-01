import Toggle from "../../reusable/toggle";
import { ServicesType } from "../../../types";
import { useNavigate } from "react-router-dom";

interface Info extends ServicesType {};

const ServiceCard = ({info}: {info: Info}) => {

    const navigate = useNavigate();

    const handleClick = (serviceId: string) => {
        navigate(`/service/${serviceId}`)
    }

    const defaultPlanValue = Object.values(info.plans.signature_options)[1];

    return (
        <div key={info.id} className="flex flex-col gap-4 items-left bg-primary-light w-full h-auto mt-2 mb-2 rounded-2xl p-6" onClick={() => handleClick(info.id)}>
            <div className="flex justify-between w-full">
                <div className="flex flex-col items-start">
                    <h5>{info.name}</h5>
                    <p className="text-sm text-primary-ultralight">{info.description}</p>
                </div>
                <div className="text-[1.5rem] bg-primary-extralight flex w-12 h-12 items-center justify-center rounded-full">
                    {info.logo}
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex items-end">
                    <h2>{defaultPlanValue}</h2>
                    <p className="text-primary-ultralight text-sm mb-3">$/month</p>
                </div>
                <Toggle />
            </div>
        </div>
    )
}

export default ServiceCard;