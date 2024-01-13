import { FaRegCopy } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { urlPropsType } from "../../Types/contextTypes";
import { format } from "date-fns";
import { useLinkContext } from "../../Context/LinkContext";

const LinkComp = ({_id, fullUrl, clicks, shortUrl, createdAt}: urlPropsType) => {
  const {deleteurl, getShortUrl} = useLinkContext()
  const handelDelete = () => {
    deleteurl(_id)
  }
  const handelClick = () => {
    getShortUrl(_id).then((data) => {
      const newUrl = JSON.stringify(data).split('"')
      const a = document.createElement('a');
    a.href = newUrl[1];
    a.target = '_blank';
    a.click();
    })
  }
  return (
    <div className='h-[80px] border-gray-400 border rounded-md flex justify-between items-center px-6 my-2'>
      <div className="flex items-center">
      <div>
        <div className='h-10 w-10 rounded-full bg-black'></div>
      </div>
      <div className="ml-4">
        <button onClick={handelClick} className="text-blue-700 underline flex items-center gap-2">{shortUrl}<FaRegCopy/></button>
          <p className="text-sm mt-1">{format(new Date(createdAt), "MMM-dd")}  <span className="font-semibold">{fullUrl.substring(0, 25)+ '...'}</span></p>
      </div>
      </div>
      <div className="flex">
        <p className="flex items-center bg-gray-200 rounded-md p-2"><span><GiNetworkBars className="mr-1"/></span><span className="mr-1">{clicks}</span>clicks</p>
        <button onClick={handelDelete} className="flex flex-col justify-center ml-3">
          <MdDeleteOutline className="text-xl cursor-pointer"/>
        </button>
      </div>
    </div>
  )
}

export default LinkComp