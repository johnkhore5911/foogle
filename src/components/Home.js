import React from 'react'
import {Link} from "react-router-dom"
import{
    StyledHeaderContainer,
    StyledHeaderWrapper,
    StyledHeaderLeft,
    StyledHeaderRight,
    StyledLogoContainer
} from "./Home.Styled";
import { Avatar,Tooltip,IconButton } from '@mui/material';
import AppsIcon from "@mui/icons-material/Apps"
import SearchInput from './SearchInput';
import imag from '../icon/logogenerator.png';

const Home = () => {
  return (
    <StyledHeaderContainer>
        <StyledHeaderWrapper>
            <StyledHeaderLeft>
                <Link to='/about' >About</Link>
                <Link to='/store' >Store</Link>
            </StyledHeaderLeft>
            <StyledHeaderRight>
            <Link to='/gmail' >Gmail</Link>
            <Link to='/images' >Images</Link>
            <Tooltip title="Google apps">
                <IconButton>
                    <AppsIcon sx={{fontSize:'1.5rem',color:'rgba(255,255,255,0.87)'}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Google Account">
                <Avatar sx={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#8ab4f8", color:"white",cursor:"pointer", marginRight:"8px"}}>
                    J
                </Avatar>
            </Tooltip>
            </StyledHeaderRight>
        </StyledHeaderWrapper>
        <StyledLogoContainer>
                {/* <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='google-logo' /> */}
                <img src= {imag} alt='johnhub-logo' />
                
                <div>
                    <SearchInput showButtons={true}/>
                </div>
        </StyledLogoContainer>
    </StyledHeaderContainer>
  )
}

export default Home