import Toggle from "../../reusable/toggle";
import { IoArrowBack } from "react-icons/io5";
import { servicesInfo } from "../../../mocked";
import userServicesActive from "../../../user";
import { useNavigate, useParams } from "react-router-dom";

const ServiceSelected = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const servInfo = servicesInfo.filter(el => el.id === id)[0];

    let signatureCycle;
    const signatureOptions: Array<string> = Object.keys(servInfo.plans.signature_options);

    const active = userServicesActive.servicesInUse.filter((el) => el?.id === id)[0];

    if (active) {
        signatureCycle = active.plan_cycle;
    } else {
        signatureCycle = "Month";
    }

    return (
        <>
            <div className="flex flex-col items-center gap-4 px-4 pt-9 fixed top-0 w-full bg-primary z-10">
                <div className=" flex justify-between items-center w-full">
                    <button onClick={() => navigate(-1)}>
                        <IoArrowBack size="1.5rem" />
                    </button>
                    <h4>{servInfo.name}</h4>
                    <button>Save</button>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <div className="mt-20 h-[25vh] rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src={servInfo.image} alt="" />
                </div>
                <div className="flex justify-between h-[11vh] w-full gap-2">
                {
                    signatureOptions.map((item) => {
                        const signature = item.split("_")[0];
                        const price_signature = servInfo.plans.signature_options[item];
                        return (
                            <div key={item+"plan"} className={`flex flex-col items-center justify-center w-full h-full border rounded-2xl border-primary-extralight ${active?.plan_signature === item ? 'bg-white' : 'text-white'}`}>
                                <p className="text-primary-ultralight capitalize">{signature}</p>
                                <div className="flex items-center">
                                    <h4 className={`${active?.plan_signature === item && 'text-primary-dark'}`}>{price_signature}</h4>
                                    <span className="text-sm text-primary-ultralight">$/m</span>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="flex flex-col gap-4 mt-2">
                    <h3>Billing</h3>
                    <div className="bg-primary-light rounded-2xl p-5">
                        <div className="flex justify-between">
                            <h5>First payment</h5>
                            <h5>Today</h5>
                        </div>
                        <p className="text-sm text-primary-ultralight">Set another date</p>
                    </div>
                    <div className="flex flex-col bg-primary-light rounded-2xl p-5">
                        <div className="flex justify-between">
                            <h5>Repeat</h5>
                            <Toggle state={true} />
                        </div>
                        <p className="text-sm text-primary-ultralight">Set a cycle for your plan</p>
                        <div className="flex gap-2 w-full mt-4">
                            <button className="h-7 w-full text-primary-ultralight border border-primary-extralight rounded-full">Week</button>
                            <button className="h-7 w-full border border-white rounded-full">Month</button>
                            <button className="h-7 w-full text-primary-ultralight border border-primary-extralight rounded-full">Year</button>
                        </div>
                    </div>
                    <div className="bg-primary-light rounded-2xl p-5">
                        <div className="flex justify-between">
                            <h5>Payment method</h5>
                            <h5>Paypal</h5>
                        </div>
                        <p className="text-sm text-primary-ultralight">Select other method</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSelected;
