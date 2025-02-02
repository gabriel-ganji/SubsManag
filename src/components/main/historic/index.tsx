import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import userServicesActive from "../../../user";

const Hist = () => {

  const navigate = useNavigate();

  const handleClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`)
  }

  return (
    <div className="flex flex-col w-full px-4 py-4 h-[48vh]">
      <div className="flex justify-between items-end w-full">
        <h3>Historic</h3>
        <button>See all</button>
      </div>
      <div className="w-full overflow-y-scroll mb-12">
        {
          userServicesActive.servicesInUse.map((item: any) => {

            const id: string = item?.id || "";
            const logo: ReactNode = item?.logo || "";
            const signature: string = item?.plan_signature.replace("_", " ") || "";
            const name: string = item?.name || "";
            const price_signature: string = item?.price_signature || "";
            const date_signature: string = item?.date_signature || "";

            return (
              <button
                key={id}
                className="flex gap-4 items-center w-full px-5 py-12 h-20 rounded-2xl mt-2 hover:bg-primary-light"
                onClick={() => handleClick(id)}
              >
                <div className="bg-primary-extralight p-3 rounded-full">
                  {logo}
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex flex-col items-start">
                    <div>{name}</div>
                    <span className="text-sm text-primary-ultralight capitalize">{signature}</span>
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <div>-${price_signature}</div>
                    <div className="text-sm text-primary-ultralight">{date_signature}</div>
                  </div>
                </div>
              </button>
            )
            
          })
        }
      </div>
    </div>
  )
}

export default Hist;