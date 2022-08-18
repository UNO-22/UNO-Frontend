    import React, { useState, useContext} from 'react';
import { Navbar, NavbarToggler, NavbarBrand, NavbarText } from 'reactstrap';
import '../style/navbar.css'
import Context from "../context/Context"

function NavbarFunc(props){
   
  console.log(`This is props: ${props}`)

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const context = useContext(Context)

  return (
    <div>
      <Navbar className='navbar-container'>
        <NavbarBrand href="/">HOT POTATO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      
          <NavbarText>Welcome {context.verifiedPlayer.playerInfo.username}</NavbarText>
    
      </Navbar>
    </div>
  );
}



export default NavbarFunc;