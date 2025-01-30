import { useNavigate } from "react-router-dom";
import { servicesInfo, userServicesUse } from "../../../mocked";
import { BothUserServicesType } from "../../../types";

const Hist = () => {

  const userServicesHistory: BothUserServicesType[] = userServicesUse.map((itemUser) => {
    const foundService = servicesInfo.find((itemService) => itemUser.id === itemService.id);
    if (foundService) {
      return {...itemUser, ...foundService};
    } else {
      return {
        name: "",
        image: "",
        logo: null,
        description: "",
        price: "0",
        id: "",
        value: "0",
        date: "",
      };
    }
  });

  console.log(userServicesHistory);

  const navigate = useNavigate();

  const handleClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`)
  }

  return (
    <div className="flex flex-col w-full px-4 py-4 h-[48vh]">
      <div className="flex justify-between items-end w-full">
        <h3>History</h3>
        <button>See all</button>
      </div>
      <div className="w-full overflow-y-scroll">
        {
          userServicesHistory.map((item: BothUserServicesType) => (
            <button
              className="flex gap-4 items-center w-full px-5 py-12 h-20 rounded-2xl mt-2 hover:bg-primary-light"
              onClick={() => handleClick(item.id)}
            >
              <div className="bg-primary-extralight p-3 rounded-full">
                {item.logo}
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col items-start">
                  <div>{item.name}</div>
                  <div className="text-sm text-primary-ultralight">{item.description}</div>
                </div>
                <div className="flex flex-col">
                  <div>{item.value}</div>
                  <div className="text-sm text-primary-ultralight">{item.date}</div>
                </div>
              </div>
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Hist;