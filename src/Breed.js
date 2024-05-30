function breedPlants(plant1, plant2) {
    const babyPlant = { ...plant1 }
    babyPlant.phases.stem = breedComponent(plant1.phases.stem, plant2.phases.stem, plant1.mutationRate)
    babyPlant.phases.bloom = breedComponent(plant1.phases.bloom, plant2.phases.bloom, plant2.mutationRate)
    
    function breedComponent(plant1Component, plant2Component, mutationRate, worldToxicity) {
        const babyPlantComponent = { ...plant1Component }
        const plantProperties = Object.keys(plant1Component)
        
        plantProperties.forEach((property) => {
            if(Math.random() < 0.5) {
                babyPlantComponent[property] = plant2Component[property]
            }
            if(Math.random() < mutationRate) {
                if(typeof babyPlantComponent[property] === 'number') {
                    babyPlantComponent[property] = babyPlantComponent[property] * worldToxicity
                }
            }
        })

        return babyPlantComponent
    }

    return babyPlant
}






function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  function breedPlants(parent1, parent2, mutationRate = 0.01) {
    let child = deepCopy(parent1);
  
    combineGenes(child.phases.stem, parent2.phases.stem, mutationRate);
    combineGenes(child.phases.bloom, parent2.phases.bloom, mutationRate);
  
    return child;
  }
  
  function combineGenes(childGenes, parent2Genes, mutationRate) {
    Object.keys(childGenes).forEach(key => {
      childGenes[key].forEach((value, index) => {
        if (Math.random() < 0.5) {
          // Crossover
          childGenes[key][index] = parent2Genes[key][index];
        }
        // Mutation
        if (Math.random() < mutationRate) {
          childGenes[key][index] = mutateGene(value);
        }
      });
    });
  }
  
  function mutateGene(value) {
    if (Array.isArray(value)) {
      return value.map(v => mutateValue(v));
    } else {
      return mutateValue(value);
    }
  }
  
  function mutateValue(value) {
    if (typeof value === 'number') {
      if (value === 0) {
        // Apply a small random mutation to 0
        return (Math.random() - 0.5) * 0.1; // Mutate by up to ±0.05
      } else {
        return value + (Math.random() - 0.5) * 0.1 * value; // Mutate by up to ±10%
      }
    } else {
      return value; // If not a number, no mutation
    }
  }
  
  // Example usage:
  let parent1 = {
    name: "",
    id: "4a540e07-9d6b-4246-a39d-2f58f24286b9",
    description: "",
    phases: {
      stem: {
        color: [0, 128, 0],
        stemWidth: [0.4, 0.4, 0.4, 0.4, 0.4],
        path: [
          [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.8], [0.1, 0.7, 0], [0.1, 0.7, 0], [0.1, 0.7, 0], [0.1, 0.7, 0], [0.1, 0.7, 0]],
          [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.8], [0.1, 1.76, 0], [0.1, 1.76, 0], [0.1, 1.76, 0], [0.1, 1.76, 0], [0.1, 1.76, 0]],
          [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.8], [0.1, 7, 0], [0.1, 7, 0], [0.1, 7, 0], [0.1, 7, 0], [0.1, 7, 0]],
          [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.56], [0.1, 4.5, 0.88], [0.1, 7.46, 1.42], [0.1, 8.34, 1.08], [0.1, 8.42, 0], [0.1, 7.08, -0.26]],
          [[0.5, 0, 0], [0.5, 0, 0], [0.5, 0, 0.56], [0.1, 2.5, 0.88], [0.1, 5.46, 1.42], [0.1, 6.34, 1.08], [0.1, 6.42, 0], [0.1, 5.08, -0.26]]
        ]
      },
      bloom: {
        color: [94, 130, 60],
        petalCount: [1, 1, 1, 1, 1],
        recRadius: [0.16, 0.17, 0.18, 0.2, 0.18],
        radiusTop: [0.3, 0.46, 0.98, 1.09, 0.91],
        radiusBottom: [0.3, 0.49, 1.04, 1.09, 0.37],
        noiseScale: [0.46, 1.25, 1.42, 1.27, 0.13],
        noiseImpactX: [0.46, 0.49, 0.5, 0.5, 0.45],
        noiseImpactY: [0.34, 0.46, 0.5, 1.07, 2.63],
        noiseImpactZ: [0, 0, 1, 0.98, 0.94],
        height: [0.16, 0.1, 0.04, 0.04, 0.01],
        radialSegments: [100, 100, 100, 22.38, 11.88],
        rotation: [[0, 0, 0], [0.03, 0, 0], [-0.38, 0.07, -0.43], [-0.38, 0.07, 0.07], [-0.71, 0.07, -0.43]]
      }
    }
  };
  
  let parent2 = {
    name: "",
    id: "2a540e07-9d6b-4246-a39d-2f58f24286b9",
    description: "",
    phases: {
      stem: {
        color: [0, 100, 0],
        stemWidth: [0.5, 0.5, 0.5, 0.5, 0.5],
        path: [
          [[0.6, 0, 0], [0.6, 0, 0], [0.6, 0, 0.8], [0.2, 0.8, 0], [0.2, 0.8, 0], [0.2, 0.8, 0], [0.2, 0.8, 0], [0.2, 0.8, 0]],
          [[0.6, 0, 0], [0.6, 0, 0], [0.6, 0, 0.8], [0.2, 1.76, 0], [0.2, 1.76, 0], [0.2, 1.76, 0], [0.2, 1.76, 0], [0.2, 1.76, 0]],
          [[0.6, 0, 0], [0.6, 0, 0], [0.6, 0, 0.8], [0.2, 7, 0], [0.2, 7, 0], [0.2, 7, 0], [0.2, 7, 0], [0.2, 7, 0]],
          [[0.6, 0, 0], [0.6, 0, 0], [0.6, 0, 0.56], [0.2, 4.5, 0.88], [0.2, 7.46, 1.42], [0.2, 8.34, 1.08], [0.2, 8.42, 0], [0.2, 7.08, -0.26]],
          [[0.6, 0, 0], [0.6, 0, 0], [0.6, 0, 0.56], [0.2, 2.5, 0.88], [0.2, 5.46, 1.42], [0.2, 6.34, 1.08], [0.2, 6.42, 0], [0.2, 5.08, -0.26]]
        ]
      },
      bloom: {
        color: [80, 100, 50],
        petalCount: [2, 2, 2, 2, 2],
        recRadius: [0.12, 0.14, 0.16, 0.18, 0.16],
        radiusTop: [0.25, 0.40, 0.90, 1.00, 0.85],
        radiusBottom: [0.25, 0.42, 0.95, 1.00, 0.32],
        noiseScale: [0.40, 1.10, 1.30, 1.20, 0.11],
        noiseImpactX: [0.40, 0.42, 0.45, 0.45, 0.41],
        noiseImpactY: [0.30, 0.40, 0.45, 1.00, 2.50],
        noiseImpactZ: [0, 0, 0.95, 0.95, 0.90],
        height: [0.14, 0.08, 0.03, 0.03, 0.01],
        radialSegments: [90, 90, 90, 20, 10],
        rotation: [[0, 0, 0], [0.03, 0, 0], [-0.35, 0.07, -0.40], [-0.35, 0.07, 0.07], [-0.68, 0.07, -0.40]]
      }
    }
  };
  
  let child = breedPlants(parent1, parent2);
  console.log(child);