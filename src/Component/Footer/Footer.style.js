import styled from "styled-components";

export const Footerstyle = styled.footer`

background: ${(p) => p.theme.colors.BRICK_RED};



h4{
    margin-top: 2rem;
    font-size:2rem;
    font-weight: 700;
    color: ${(p) => p.theme.colors.WHITE_COLOR}
}

.icon{
    >svg{
     width: 2rem;
    height: 2rem;
    }
    background: #ffbecf;
    color:red;    
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 100%;
    margin-right: 15px;
    
i{
    
    padding: 1rem;
    
}
}
`