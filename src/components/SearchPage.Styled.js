import styled from "@emotion/styled";

const StyledSearchPageHeaderContainer = styled('div')`
display:flex;
flex-direction:column;
`;
const StyledSearchHeader = styled('div')`
display:flex;
align-items:center;
justify-content:space-between;
width:100vw;
height:140px;
z-index:1;
position:sticky;
top:0;
border-bottom:0.1px solid rgb(95,99,104);

`;
const StyledHeaderLeft = styled('div')`
display:flex;
align-items:center;
justify-content:space-between;
div{
    form{
        div{
            input{
                width:450px;
            }
        }
    }
}
`;
const StyledLogo = styled('img')`
object-fit:contain;
height:50px;
margin:20px;
`;
const StyledHeaderMiddle = styled('div')`
display:flex;
flex-direction:column;
margin-top:20px;
a{
    text-decoration:none;
    font-size:0.875rem;
    margin-right:12px;
    color: rgb(150,155,161)
    &:hover{
        text-decoration:underline;
    }
}
`;

const StyledSubOptionsLeft = styled('div')`
display:flex;
align-items:center;
justify-content:space-between;
padding:8px;
margin:8px;
svg{
    color:#e8eaed;

}
`;

const StyledOptions = styled('div')`
display:flex;
align-items:center;
color:#969ba1;
`;

const StyledHeaderRight = styled('div')`
display:flex;
align-item:center;
justify-content:flex-end;
margin-right:24px;
svg{
    color: #e8eaed;
}
`;

export {
    StyledSearchPageHeaderContainer,
    StyledSearchHeader,
    StyledHeaderLeft,
    StyledLogo,
    StyledHeaderMiddle,
    StyledSubOptionsLeft,
    StyledOptions,
    StyledHeaderRight
}