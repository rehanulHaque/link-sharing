import { useEffect, useState } from "react"
import { useLinkContext } from "../../Context/LinkContext"
import LinkComp from "./LinkComp"
import { urlTypes } from "../../Types/contextTypes"


const Main = () => {
  const [urls, setUrls] = useState<urlTypes[]>()

  const {getAllUrls} = useLinkContext()
   
  useEffect(()=> {
    const getData = async() => {
      const res = await getAllUrls()
      setUrls(res as urlTypes[])
    }
    getData()
  }, [])
  return (
    <div className="h-full w-full pt-10 mr-8">
      {urls?.map((url: urlTypes) => <LinkComp key={url._id} {...url} />)}
    </div>
  )
}

export default Main
