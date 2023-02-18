import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {HiOutlineUserCircle} from 'react-icons/hi'

const Navbar = () =>{
    return(
        <div className='flex text-[28px] text-white'>
            <div className='flex gap-4  justify-start items-center  basis-2/3 '>
                <AiOutlineMenu className='ml-4 cursor-pointer'/>
                <p className='cursor-pointer'>
                    Logo
                </p>
            </div>
            <div className='flex gap-4 justify-end  items-center basis-1/3'>
                <AiOutlineSearch className=' cursor-pointer'/>
                <IoIosNotificationsOutline className='cursor-pointer'/>
                <HiOutlineUserCircle className=' cursor-pointer mr-4'/>
            </div>            
        </div>
    )
};

export default Navbar;