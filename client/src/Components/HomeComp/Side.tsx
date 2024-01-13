

const Side = () => {
  return (
    <div className="w-2/4  h-full flex justify-center pt-10">
      <div className="border border-gray-500 h-fit p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filter Links</h2>
        <input type="text" placeholder="Search" className="border border-gray-500 w-[250px] px-3 py-2 rounded-md" />
        <hr  className="my-4"/>
        <div className="text-sm">
            <p>PortFolio</p>
        </div>
      </div>
    </div>
  )
}

export default Side
