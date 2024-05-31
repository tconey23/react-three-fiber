import FlowerAssemblyPhysics from '../FlowerAssembly/FlowerAssemblyPhysics'
import { StyledFlowers } from "./Flowers.styled";
import Sandbox from '../../Sandbox';
import Loading from '../../Loading';

export default function Flowers({myFlowers, screen}) {

    const flowers = myFlowers.map((flower) => {
        return (
            <>
              {!screen && <Sandbox style={{width: '100vw', height: '100vh'}} key={flower.id} flower={flower} /> }
              {screen && <Loading flower={flower}/>}
            </>
        )
    })

    return (
        <StyledFlowers className="styled-flowers">
          {flowers[0]}
        </StyledFlowers>
    )
}
