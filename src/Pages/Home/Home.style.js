import styled from "styled-components";
import { CommonButton, CommonGridStyle, FlexboxStyle } from "../../style/commomStyle";

export const Headerstyle = styled.main`
width: 100%;
background-color: ${(p) => p.theme.colors.BRICK_RED};
overflow:hidden;
.header{
    width:80%;
    margin:auto;
    margin-top:8rem;
    ${CommonGridStyle({
    columns: "repeat(2, 1fr)"
})}

h1{
    color:${(p) => p.theme.colors.WHITE_COLOR};
    font-weight: 800;
    // margin-top: -13rem;
    margin-left: 6rem;
    margin-bottom: 3rem;
}
.btn{
    ${CommonButton}
    margin-left: 6rem;
    
}
img{
    display:block;
    max-width:100%;
    margin-top: 7rem;
    transform: scale(1.5);
}   
}
`
export const Missionstyle = styled.h1`

.missioncontainer{
    width: 70%;
    text-align: center;
    margin: auto;
    margin-top: 3rem;
p{
    margin: 3rem 0;
    line-height: 1.6;
    font-size: 2rem;
}
.btn{
    ${CommonButton}
    
}
}


`

export const Futurestyle = styled.section`
position: relative;
span::before {
    content: "";
    width: 18rem;
    height: 18rem;
    display: inline-block;
    position: absolute;
    margin-top: -5rem;
    margin-left: -5rem;
    background-color: rgba(255,100,207,0.1);
    border-radius: 50%;

}

.future{
    margin-top: 7rem;
 ${FlexboxStyle}

 
}

.btn{
    ${CommonButton}
    
}
.icon{
    >svg{
       width: 6rem;
       height: 7rem;        
    }
}
p{
    margin: 3rem 0rem;
}
`

export const Blockqotestyle = styled.section`

width:100%;
height: auto;
background-color: ${(p) => p.theme.colors.BRICK_RED};
margin-top:4rem;

.qotestext{
    text-align: center;
    padding-top: 4rem;
}
h4{
    width: 52%;
    text-align: center;
    margin: auto;
    margin-top: 2rem;
    padding-bottom: 6rem;
    font-size: 3rem;
    line-height: 4rem;
}

`

export const Headingstyle = styled.section`

width: 80%;
margin: auto;
margin-top: 6rem;
margin-bottom: 15rem;

${CommonGridStyle({
    columns: "repeat(2, 1fr)"
})}

h1{
    font-weight: 900;
}
.btn{
    margin-top: 12rem;
    ${CommonButton({
    padding: "1.5rem 7rem",
})}
background: none; 
color: black;
   
}
h3{
    margin:3rem;
    margin-top: 3rem;
    line-height: 4rem;
}
.iconribbon{
    position: absolute;
    z-index: -1;
    margin-top: -5rem;
    >svg{
          
    }
}

`