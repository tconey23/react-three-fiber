import FlowerAssemblyPhysics from '../FlowerAssembly/FlowerAssemblyPhysics'
import { StyledFlowers } from "./Flowers.styled";

export default function Flowers({myFlowers}) {

    const flowers = myFlowers.map((flower) => {
        return (
            <>
                <FlowerAssemblyPhysics style={{width: '100vw', height: '100vh'}} key={flower.id} flower={flower} />
            </>
        )
    })

    return (
        <StyledFlowers className="styled-flowers">
          {flowers[0]}
        </StyledFlowers>
    )
}
