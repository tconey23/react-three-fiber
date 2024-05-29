import React, { useState, useEffect } from "react";
import { RigidBody } from "@react-three/rapier";
import Receptacle from "./Receptacle";
import Stem from "./Stem";
import plant from "../assets/flowerData";

const FlowerAssembly = () => {
    const convertPlantObj = (plant) => {
        function getComponentData(component, index) {
            const componentKeys = Object.keys(plant.phases[component]);
            const componentValues = componentKeys.map((property) => {
                return plant.phases[component][property][index];
            });

            const componentData = {};
            componentKeys.forEach((componentKey, i) => {
                componentData[componentKey] = componentValues[i];
            });

            return componentData;
        }

        const newPlant = {
            ...plant,
            phases: {
                seedling: {
                    ...getComponentData('bloom', 0),
                    ...getComponentData('stem', 0),
                },
                blooming: {
                    ...getComponentData('bloom', 1),
                    ...getComponentData('stem', 1),
                },
                thriving: {
                    ...getComponentData('bloom', 2),
                    ...getComponentData('stem', 2),
                },
                wilting: {
                    ...getComponentData('bloom', 3),
                    ...getComponentData('stem', 3),
                },
                dead: {
                    ...getComponentData('bloom', 4),
                    ...getComponentData('stem', 4),
                },
            },
        };

        return newPlant;
    };

    const [planted, setPlanted] = useState(Date.now());
    const [currentTime, setCurrentTime] = useState(null);
    const [topPoint, setTopPoint] = useState(null);
    const [bloomAngle, setBloomAngle] = useState(null);
    const [thisFlower, setThisFlower] = useState(convertPlantObj(plant));
    const [lifeCycle, setLifeCycle] = useState(300000);
    const [stage, setStage] = useState('seedling');

    const stages = ['seedling', 'blooming', 'thriving', 'wilting', 'dead'];
    const timeCalc = (Date.now() - planted) / 5000;

    useEffect(() => {
        if (thisFlower) {
            setStage(stages[2]);
        }
    }, [thisFlower]);

    const handleTopPoint = (point, angle) => {
        setTopPoint(point);
        setBloomAngle(angle);
    };

    return (
      <>
      {thisFlower && (
              <Receptacle topPoint={topPoint} bloomAngle={bloomAngle} flower={thisFlower.phases[stage]} />
      )}
          <Stem onTopPointComputed={handleTopPoint} flower={thisFlower.phases[stage]} />
      </>
    );
};

export default FlowerAssembly;
