import { Link, useParams } from "react-router-dom";
import { servicesInfo } from "../../../mocked";
import { IoArrowBack } from "react-icons/io5";

const ServiceSelected = () => {

    const { id } = useParams();

    const services = servicesInfo;

    const servInfo = services.filter(el => el.id === id)[0];

    return (
        <>
            <div className="flex flex-col items-center gap-4 px-4 pt-9 fixed top-0 w-full bg-primary z-10">
                <div className=" flex justify-center items-center w-full">
                    <Link to="/" className="absolute left-4">
                        <IoArrowBack size="1.5rem" />
                    </Link>
                    <h4>{servInfo.name}</h4>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <div className="mt-20 h-[20vh] bg-blue-300 rounded-2xl p-4">
                    IMAGEM
                </div>
                <div className="flex justify-between h-[12vh] w-full">
                    <div className="flex flex-col items-center justify-center w-[32%] h-full shadow-[0px_0px_2px_1px_rgba(255,255,255,0.1)] rounded-2xl bg-white">
                        <p className="text-primary-ultralight">Basic</p>
                        <div className="flex items-center">
                            <h4 className="text-black">4,99</h4>
                            <p className="text-sm text-primary-ultralight">$/m</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[32%] h-full shadow-[0px_0px_2px_1px_rgba(255,255,255,0.1)] rounded-2xl">
                        <p className="text-primary-ultralight">Standard</p>
                        <div className="flex items-center">
                            <h4>7,49</h4>
                            <p className="text-sm text-primary-ultralight">$/m</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[32%] h-full shadow-[0px_0px_2px_1px_rgba(255,255,255,0.1)] rounded-2xl">
                        <p className="text-primary-ultralight">Premium</p>
                        <div className="flex items-center">
                            <h4>9,99</h4>
                            <p className="text-sm text-primary-ultralight">$/m</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>Billing</h3>
                </div>
            </div>
        </>
    )
}

export default ServiceSelected;