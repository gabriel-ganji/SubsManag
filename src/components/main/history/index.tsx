import { ReactNode, useState } from "react";
import { SiAppletv } from "react-icons/si";
import { BsDropbox } from "react-icons/bs";
import { SiPrime } from "react-icons/si";

type historyType = {
  logo: ReactNode
  name: string
  description: string
  value: string
  date: string
}

function Hist() {

  const mocked: historyType[] = (
    [
      {
        logo: <SiAppletv size="1.5rem" />,
        name: "Apple TV",
        description: "Premium Family",
        value: "-$4.99",
        date: "Sep 29th"
      },
      {
        logo: <BsDropbox size="1.5rem" />,
        name: "Dropbox",
        description: "Advanced",
        value: "-$9.99",
        date: "Sep 25th"
      },
      {
        logo: <SiPrime size="1.5rem" />,
        name: "Amazon Prime",
        description: "Stream",
        value: "-$7.49",
        date: "Sep 10th"
      }
    ]
  );

  return (
    <div className="flex flex-col w-full px-4 py-8 overflow-y-scroll">
      <div className="flex justify-between items-end w-full">
        <h1 className="text-[1.75rem]">History</h1>
        <button>See all</button>
      </div>
      <div className="w-full">

        {
          mocked.map((item: historyType) => (
            <div className="flex items-center justify-between w-full px-4 h-20 rounded-2xl mt-2 hover:bg-gray-700">
              <div className="bg-gray-600 p-3 rounded-full">
                {item.logo}
              </div>
              <div className="flex-col">
                <div>{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
              <div className="flex-col">
                <div>{item.value}</div>
                <div className="text-sm text-gray-500">{item.value}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Hist;