import styled from "styled-components";

export const Navbarstyle = styled.nav`

.navbar{
    background:  ${(p) => p.theme.colors.BRICK_RED};
}

a{
    // padding: 1rem;
    margin: 0rem 1rem;
    text-decoration: none;
}

.navbar-nav{
    font-size:2rem;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    font-weight: 400;
}
.is-active{
    background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    padding: .3rem;
    border-radius: 0.5rem;
}



`