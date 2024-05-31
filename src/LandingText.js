
import { Text3D } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const LandingText = () => {
    const textOptions = {
        size: 8,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5,
      };
    return(
        <EffectComposer>
        <Bloom intensity={0} luminanceThreshold={2} luminanceSmoothing={2} />
          <Text3D position={[-27,10,-20]} castShadow font={'/Bubblegum_Sans_Regular.json'} {...textOptions}>
            bLOOMbABY
            <meshNormalMaterial castShadow/>
          </Text3D>
        </EffectComposer>
    )
}

export default LandingText