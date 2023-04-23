import { AppBar, Toolbar, styled } from "@mui/material"; //Material UI is Used here so no need to think about css
import { fontSize, width } from "@mui/system";
import "../App.css";
import Imga from "./t1.jpg";
import {Menu} from "@mui/icons-material";
import {Link} from "@mui/material";
import { useState } from "react";


const StyledApp = styled(AppBar)`
  background : #060606;
  height : 4rem;
  position : sticky;
  z-index:1000;
  top:0;
  width:20 ;
`;
const Header = () => {
  const logo = Imga;
  
  return (
   
    <StyledApp position="relative" >
      <Toolbar>
        <img src={Imga} alt='logo' style={{width:'4.2rem'}}/>

        <h2 style={{margin:"auto", fontSize:"30px"}}>Code Editor</h2>
        
        <Link style={{textAlign:"right", color: "#fff", fontSize:"18px"}} href="https://github.com/Anjali1822"  target="_blank" > Github </Link>
        
      </Toolbar>
    </StyledApp>
   
  )
};
export default Header;