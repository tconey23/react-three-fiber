import { StyledHome } from "./Home.styled";
import Flowers from '../Flowers/Flowers'
import * as flowerConverter from '../../functions/convertFlowerObject';
import { useEffect, useState, useCallback } from "react";
import userFlowers from '../userFlowers-dummy'

export default function Home({ flowers }) {
    const [myFlowers, setMyFlowers] = useState([]);
    const [background, setBackground] = useState('1');



    function cleanFlowers(flowers) {
        return flowers.map((flower) => {
            return flowerConverter.convertFlowerObject(flower);
        });
    }

    useEffect(() => {
        if(flowers){
            setMyFlowers(cleanFlowers(flowers))
        }    
}, [flowers])

    return (
        <StyledHome className={`styled-home ${background}`}>
            <div className='background-container'>
                <img style={{width: '100vw', height: '100vh'}} src={'/assets/waver-background.jpg'} alt='background waves'></img>
            </div>
            <Flowers className="flowers" myFlowers={myFlowers} />
        </StyledHome>
    );
}
