import styled from "styled-components";

export const StyledFlowerAssemblyPhysics = styled.div`
    color: white;
    font-weight: bold;

    .flower {
        height: 400px !important;
    }

    .seedling {
        height: 200px !important;
    }

    .flower-assembly{
        background-color: rgba(0,0,0,0.7);
        text-align: center;
    }
    input{
        border: 2px solid black;
        color: white;
    }

    #flowerCanvas{
        box-shadow: 2px 2px 10px black;
        border-radius: 25px;
        height: 100vh !important
    }
`