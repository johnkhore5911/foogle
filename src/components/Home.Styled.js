import { styled } from "@mui/material";

const  StyledHeaderContainer = styled('div')`
display:flex;
flex-direction: column;
height:100vh
`;

const  StyledHeaderWrapper = styled('div')`
    display:flex;
    justify-content:space-between;
    padding: 6px;
    margin-top:20px
`;

const  StyledHeaderLeft = styled('div')`
    display: flex;
    align-items:center;
    margin-left:20px;
    // justify-content: space-between;
    // color:black;
    flex:0.1;
    a{
        display:inline-block;
        paddig: 5px;
        margin: 0px 5px;
        color: #bdc1c6;
        text-decoration:none;
        font-size: 0.875rem;
        font-family:Roboto,arial,sans-serif;
        &:hover{
            text-decoration:underline;
        }
    }
`;

const  StyledHeaderRight = styled('div')`
    display: flex;
    align-items:center;
    margin-left:500px
    // justify-content: space-between;
    flex:0.2;
    padding:8px;
    a{
        display:inline-block;
        paddig: 5px;
        margin: 0px 5px;
        color: #bdc1c6;
        text-decoration:none;
        font-size: 0.875rem;
        font-family:Roboto,arial,sans-serif;
        &:hover{
            text-decoration:underline;
        }
    }
`;

const StyledLogoContainer= styled('div')`
    display:flex;
    flex:1;
    margin-top:10%;
    flex-direction:column;
    img{
        height:92px;
        object-fit:contain;
    }
`;

export {
    StyledHeaderContainer,
    StyledHeaderWrapper,
    StyledHeaderLeft,
    StyledHeaderRight,
    StyledLogoContainer
}