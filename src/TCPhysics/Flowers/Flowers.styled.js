import styled from "styled-components";

export const StyledFlowers = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    border-radius: 40px;
    height: 100vh;
    color: white;
    font-weight: bold;
    position: relative;
    
    .styled-flower-assembly{
        width: 100vw;
        height: 100vh;
    }

    .flower-container {
        width: 100vh;
        // height: 50vh;    
        background-color: black;
    }

    .plant-details {
        position: absolute;
        z-index: 3;
        color: black;
        top: 0;
    }

    p {
        margin: 0;
    }
`