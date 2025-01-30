import { ReactNode } from "react";
import { SiAppletv } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { SiPrime } from "react-icons/si";
import { useNavigate } from "react-router-dom";

type historyType = {
  logo: ReactNode;
  image?: ReactNode;
  name: string;
  description: string;
  value: string;
  date: string;
  id: string;
}

const Hist = () => {

  const mocked: historyType[] = (
    [
      {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        description: "Premium Family",
        value: "-$4.99",
        date: "Sep 29th",
        id: "12313120Apple"
      },
      {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        description: "Advanced",
        value: "-$9.99",
        date: "Sep 25th",
        id: "12313121Dropbox"
      },
      {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        description: "Stream",
        value: "-$7.49",
        date: "Sep 10th",
        id: "12313122Amazon"
      },
      {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        description: "Premium Family",
        value: "-$4.99",
        date: "Sep 29th",
        id: "12313120Apple"
      },
      {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        description: "Advanced",
        value: "-$9.99",
        date: "Sep 25th",
        id: "12313121Dropbox"
      },
      {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        description: "Stream",
        value: "-$7.49",
        date: "Sep 10th",
        id: "12313122Amazon"
      },
      {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        description: "Premium Family",
        value: "-$4.99",
        date: "Sep 29th",
        id: "12313120Apple"
      },
      {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        description: "Advanced",
        value: "-$9.99",
        date: "Sep 25th",
        id: "12313121Dropbox"
      },
      {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        description: "Stream",
        value: "-$7.49",
        date: "Sep 10th",
        id: "12313122Amazon"
      }
    ]
  );

  const navigate = useNavigate();

  const handleClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`)
  }

  return (
    <div className="flex flex-col w-full px-4 py-8 h-[50vh]">
      <div className="flex justify-between items-end w-full">
        <h3>History</h3>
        <button>See all</button>
      </div>
      <div className="w-full overflow-y-scroll">
        {
          mocked.map((item: historyType) => (
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