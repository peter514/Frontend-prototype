import {MdCall,MdOutlineMarkEmailRead} from 'react-icons/md'
import{FaFirefoxBrowser} from 'react-icons/fa'
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsYoutube} from 'react-icons/bs'
function Footer() {
  return (
    <div className=" block bg-gray-900">
      <div className=" block md:flex Md:flex-row md:flex-wrap justify-between text-gray-100 p-3">
        <div className="basis-1/3 md:border-r md:border-gray-400">
            <div className="m-2">
               
          <h1>Reach US Out:</h1>
           <hr className="bg-gray-400 "/>
          <form action="" className="flex flex-col gap-2 p-4 items-center  ">
            <h1 className="font-bold">send us a message</h1>
            <input type="text" placeholder="Name"  className="p-1 rounded-sm bg-slate-200  text-black w-full"  />
            <input type="text" placeholder="Email"  className="p-1 rounded-sm bg-slate-200 text-black w-full" />
            <textarea name="Message" id=""  className="p-1  bg-slate-200 text-black w-full" placeholder="Type your comment/message" ></textarea>
         <button className="bg-slate-200 py-1 px-5 m-3 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Send
              </button>
          </form>
          </div>

        </div>

        <div className="basis-1/3 md:border-r md:border-gray-400">
            <div className="m-2">
                
            <h1 className="ml-1">Address</h1>
            <hr className="bg-gray-400 "/>
            <address>
               <h1>University Tower, Nairobi cbd</h1> 
               <h1>Uhuru Highway</h1>
            </address>
            <div className='my-3 text-xl font-bold'>
                <div className='flex flex-row gap-4 justify-start items-center '>
                    <h1><MdCall size={30}/></h1>
                    <h1>Call</h1>
                </div>
                <div  className='flex flex-row gap-4 justify-start items-center'>
                    <h1><MdOutlineMarkEmailRead size={30}/></h1>
                    <h1>Email</h1>
                </div>
                

            </div>
            </div>
        </div>
        <div className="basis-1/3 ">
            <div className='m-2'>
                  <h1>Links</h1>
                  <hr className="bg-gray-400 "/>
                  <ul className='px-2 flex flex-col gap-2 my-2'>
                    <li className='px-1 flex items-center gap-2 hover:bg-slate-200 hover:text-gray-900'><FaFirefoxBrowser/><h1 className='hover:cursor-pointer'>Services</h1></li>
                     <li className='px-1 flex items-center gap-2 hover:bg-slate-200 hover:text-gray-900'><FaFirefoxBrowser/><h1 className='hover:cursor-pointer'>Sponsors</h1></li>
                     <li className='px-1 flex items-center gap-2 hover:bg-slate-200 hover:text-gray-900'><FaFirefoxBrowser/><h1 className='hover:cursor-pointer'>Get App</h1></li>
                     <li className='px-1 flex items-center gap-2 hover:bg-slate-200 hover:text-gray-900'><FaFirefoxBrowser/><h1 className='hover:cursor-pointer'>About</h1></li>
                    <li></li>
                  </ul>
                  <h1>Follow us on socials:</h1>
                  <ul className='flex flex-row gap-8 my-3'>
                    <li className='p-3 hover:bg-slate-300 hover:text-black'><BsFacebook/></li>
                    <li className='p-3 hover:bg-slate-300 hover:text-black'><BsInstagram/></li>
                    <li className='p-3 hover:bg-slate-300 hover:text-black'><BsTwitter/></li>
                    <li className='p-3 hover:bg-slate-300 hover:text-black'><BsLinkedin/></li>
                    <li className='p-3 hover:bg-slate-300 hover:text-black'><BsYoutube/></li>
                  </ul>
            </div>
          
        </div>
      </div>
      <div className='bg-gray-700 p-4 text-gray-300'>
        <ul className='flex items-center gap-3'>
            <li className='border-r border-gray-300 px-2'>Copy rights &copy; 2022</li>
            <li className='border-r border-gray-300 hover:cursor-pointer px-2'>Terms & conditions</li>
            <li className='border-r border-gray-300 hover:cursor-pointer px-2'> Developers Link</li>
        </ul>

      </div>
    </div>
  )
}
export default Footer
