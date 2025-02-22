import ExpensesChart from "../chart"

const Spending = () => {

  return (
    <div className="px-4 m-0 flex flex-col h-[32vh]">
      <div className="flex justify-between items-start -mt-4 h-max">
        <h1 className="m-0 p-0 font-light">$286.9</h1>
        <select name="" value="1" id="" className="mt-5 rounded-full bg-primary h-max px-2 p-1 text-[.8rem] border border-gray-800" onChange={() => { }}>
          <option value="1" hidden>All time</option>
        </select>
      </div>
      <p className="text-primary-ultralight text-sm -mt-4">Your spendings</p>
      <div className="h-full">
        <ExpensesChart />
      </div>
    </div>
  )
}

export default Spending