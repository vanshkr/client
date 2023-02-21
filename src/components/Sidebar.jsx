import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri';
import { HiOutlineMenu } from "react-icons/hi";
// import { logo } from "../assets";
// import { links } from "../assets/constants";
import { useNavigate } from 'react-router-dom';




const NavLinks = ({handleClick}) =>{
  return (
    <div className="mt-10 ">
        {links.map(link => (
          <NavLink 
          key={link.name} 
          to = {link.to}
          className="flex flex-row justify-start items-center
           my-8 text-sm font-medium text-gray-400 hover:text-cyan-400" 
           onClick={()=> handleClick && handleClick()}>
          <link.icon className="w-6 h-6 mr-2"/>
          {link.name}
          </NavLink>

        ))}
    </div>
  )
}
const Sidebar = () => {
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  return (
    <>
      <Sidebar>
        Sidebar
      </Sidebar>
    </>

  )
}

export default Sidebar;