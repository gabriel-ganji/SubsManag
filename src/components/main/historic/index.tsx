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

            const signature: string = item.plan_signature.replace("_", " ");

            return (
              <button
                key={item.id}
                className="flex gap-4 items-center w-full px-5 py-12 h-20 rounded-2xl mt-2 hover:bg-primary-light"
                onClick={() => handleClick(item.id)}
              >
                <div className="bg-primary-extralight p-3 rounded-full">
                  {item.logo}
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex flex-col items-start">
                    <div>{item.name}</div>
                    <span className="text-sm text-primary-ultralight capitalize">{signature}</span>
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <div>-${item.price_signature}</div>
                    <div className="text-sm text-primary-ultralight">{item.date_signature}</div>
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