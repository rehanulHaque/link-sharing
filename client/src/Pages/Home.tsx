import { FormEvent, useState } from "react"
import Main from "../Components/HomeComp/Main"
import Side from "../Components/HomeComp/Side"
import { useLinkContext } from "../Context/LinkContext"

const Home = () => {
  const [show, setShow] = useState<boolean>(false)
  const [destUrl, setDestUrl] = useState<string>('')

  const {addUrl} = useLinkContext()

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault()
    setShow(!show)
    addUrl(destUrl)
  }
  return (
    <main className="h-screen relative">
      <div className="absolute w-[500px] h-[300px] bg-gray-100 rounded-md border border-black shadow-xl p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{display: show ? 'block' : 'none'}}>
      <div className='h-10 w-10 rounded-full bg-black mx-auto mb-2'></div>
          <h1 className="text-center text-xl font-semibold ">Create Short Link</h1>
          <form className="mt-5" onSubmit={handelSubmit}>
            <label htmlFor="url">Destination Url</label>
            <input type="text" value={destUrl} onChange={(e) => setDestUrl(e.target.value)} placeholder="https://exapmle.com" id="url" className="border border-black w-full my-4 px-4 py-3 shadow-sm outline-none rounded-md" />
            <button className="w-full bg-black text-white py-3 rounded-md">Create</button>
          </form>
      </div>
      <div className="flex justify-between mx-10 my-6">
        <h1 className="text-2xl font-semibold text-gray-500">Links</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => setShow(!show)}>{show ? 'Close' : 'Create Link'}</button>
      </div>
      <div  className="flex h-full">
        <Side/>
        <Main/>
      </div>
    </main>
  )
}

export default Home
