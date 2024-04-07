
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import qzone from '../../../src/assets/qZone1.png'
import qzone2 from '../../../src/assets/qZone2.png'
import qzone3 from '../../../src/assets/qZone3.png'


const Rightside = () => {
    return (
        <div className="">
          <div className=" space-y-1 h-44">
          <h1 className='text-2xl'>Login With</h1>
          <button className="btn btn-outline btn-wide"><FaGoogle></FaGoogle>Login with Google</button>
          <button className="btn btn-outline btn-wide"><FaGithub />Login with Github</button>
         
          </div>
          <div className="   p-2  ">
          <h1 className='text-2xl mb-6'>Find Us On</h1>
          <button className=" border border-b-0 flex items-center w-60 text-lg gap-6 px-3 py-5 rounded-tr-md hover:bg-black hover:text-white"><FaGoogle></FaGoogle>Login with Google</button>
          <button className=" border border-b-0 flex items-center w-60 text-lg gap-6 px-3 py-5 hover:bg-black hover:text-white "><FaGithub />Login with Github</button>
          <button className=" border  flex items-center w-60 text-lg  gap-6 px-3 py-5 rounded-ee-md hover:bg-black hover:text-white"><FaTwitter />Login with Twitter</button>
         
          </div>

          <div className="bg-gray-100 p-5 mt-6">
            <h2 className="font-medium text-2xl">Q-zone</h2>
            <img src={qzone} alt="" />
            <img src={ qzone2} alt="" />
            <img src={qzone3} alt="" />
          </div>
        </div>
    );
};

export default Rightside;