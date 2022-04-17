import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        font-size : 62.5%;

        * {
            margin : 0;
            padding : 0;
            box-sizing : border-box;
        }

        body {
            font-family: 'Lato', sans-serif;
            background-color: ${(p) => p.theme.colors.BACKGROUND_COLOR};

            h1 {
                font-size: 6rem;
            }

            h2 {
                font-size: 3.6rem;
            }

            h3 {
                font-size: 2.2rem;
            }

            h4 {
                font-size: 1.8rem;
            }

            p {
                font-size : 1.4rem;
            }

        }
    }

    @media (max-width:580px) {
        h1{
            font-size: 3rem !important;
        }
        h4{
            font-size: 1rem !important;
        }
        
    }

    .Toastify__toast-body{
        font-size: 1.5rem !important;
    }

`;
