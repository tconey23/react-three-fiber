const attrByLifecycle = {
    seedling: {
      radiusTop: 0.3,
      radiusBottom: 0.3,
      noiseScale: 0.46,
      noiseImpactX: 0.46,
      noiseImpactY: 0.34,
      noiseImpactZ: 0,
      shape_Height: 0.16,
      radialSegments: 100,
      bloomRotationX: 0,
      bloomRotationY: 0,
      bloomRotationZ: 0,
      recRadius: 0.16,
      recPositionY: 5,
      stemHeight: 0.7,
      stemWidth: 0.4
    },
    blooming: {
      radiusTop: 0.52,
      radiusBottom: 0.52,
      noiseScale: 1.95,
      noiseImpactX: 0.5,
      noiseImpactY: 0.5,
      noiseImpactZ: 0,
      shape_Height: 0.04,
      radialSegments: 100,
      bloomRotationX: 0.03,
      bloomRotationY: 0,
      bloomRotationZ: 0,
      recRadius: 0.17,
      recPositionY: 5,
      stemHeight: 1.76,
      stemWidth: 0.4
    },
    thriving: {
      radiusTop: 1.09,
      radiusBottom: 1.09,
      noiseScale: 1.03,
      noiseImpactX: 0.5,
      noiseImpactY: 0.94,
      noiseImpactZ: 1,
      shape_Height: 0.04,
      radialSegments: 100,
      bloomRotationX: -0.38,
      bloomRotationY: 0.07,
      bloomRotationZ: -0.43,
      recRadius: 0.2,
      recPositionY: 5,
      stemHeight: 7,
      stemWidth: 0.4
    },
    wilting: {
      radiusTop: 1.09,
      radiusBottom: 1.09,
      noiseScale: 1.31,
      noiseImpactX: 0.5,
      noiseImpactY: 2.63,
      noiseImpactZ: 0.94,
      shape_Height: 0.04,
      radialSegments: 11.88,
      bloomRotationX: -0.38,
      bloomRotationY: 0.07,
      bloomRotationZ: -0.43,
      recRadius: 0.2,
      recPositionY: 5,
      stemHeight: 5.47,
      stemWidth: 0.4
    },
    dead: {
      radiusTop: 0.2,
      radiusBottom: 0.2,
      noiseScale: 0.01,
      noiseImpactX: 0.39,
      noiseImpactY: 2.63,
      noiseImpactZ: 0.94,
      shape_Height: 0.01,
      radialSegments: 11.88,
      bloomRotationX: -0.71,
      bloomRotationY: 0.07,
      bloomRotationZ: -0.43,
      recRadius: 0.11,
      recPositionY: 5,
      stemHeight: 2.39,
      stemWidth: 0.4
    }
}


const lifecycleParams = {
  radiusTop: { range: 0.3, lifecycle: [0.3, 0.52, 1.09, 1.09, 0.2] },
  radiusBottom: { range: 0.3, lifecycle: [0.3, 0.52, 1.09, 1.09, 0.2] },
  noiseScale: { range: 0.4, lifecycle: [0.46, 1.95, 1.03, 1.31, 0.01] },
  noiseImpactX: { range: 0.5, lifecycle: [0.46, 0.5, 0.5, 0.5, 0.39] },
  noiseImpactY: { range: 0.2, lifecycle: [0.34, 0.5, 0.94, 2.63, 2.63] },
  noiseImpactZ: { range: 0.4, lifecycle: [0, 0, 1, 0.94, 0.94] },
  shape_Height: { range: 0.05, lifecycle: [0.16, 0.04, 0.04, 0.04, 0.01] },
  radialSegments: { range: 10, lifecycle: [100, 100, 100, 11.88, 11.88] },
  bloomRotationX: { range: 0.5, lifecycle: [0, 0.03, -0.38, -0.38, -0.71] },
  bloomRotationY: { range: 0.5, lifecycle: [0, 0, 0.07, 0.07, 0.07] },
  bloomRotationZ: { range: 0.5, lifecycle: [0, 0, -0.43, -0.43, -0.43] },
  recRadius: { range: 0.1, lifecycle: [0.16, 0.17, 0.2, 0.2, 0.11] },
  recPositionY: { range: 0, lifecycle: [5, 5, 5, 5, 5] },
  stemHeight: { range: 0.6, lifecycle: [0.7, 1.76, 7, 5.47, 2.39] },
  stemWidth: { range: 0.2, lifecycle: [0.4, 0.4, 0.4, 0.4, 0.4] },
  lifetime: 3600000,
}

// const lifecycleParams = {
//   radiusTop: [0.3, 0.52, 1.09, 1.09, 0.2],
//   radiusBottom: [0.3, 0.52, 1.09, 1.09, 0.2],
//   noiseScale: [0.46, 1.95, 1.03, 1.31, 0.01],
//   noiseImpactX: [0.46, 0.5, 0.5, 0.5, 0.39],
//   noiseImpactY: [0.34, 0.5, 0.94, 2.63, 2.63],
//   noiseImpactZ: [0, 0, 1, 0.94, 0.94],
//   shape_Height:  [0.16, 0.04, 0.04, 0.04, 0.01],
//   radialSegments: ifecycle: [100, 100, 100, 11.88, 11.88],
//   bloomRotationX: [0, 0.03, -0.38, -0.38, -0.71],
//   bloomRotationY: [0, 0, 0.07, 0.07, 0.07],
//   bloomRotationZ: [0, 0, -0.43, -0.43, -0.43],
//   recRadius: [0.16, 0.17, 0.2, 0.2, 0.11],
//   recPositionY: fecycle: [5, 5, 5, 5, 5],
//   stemHeight: [0.7, 1.76, 7, 5.47, 2.39],
//   stemWidth: [0.4, 0.4, 0.4, 0.4, 0.4],
//   lifetime: 3600000,
// }

const flower1 = {
  name: 'flower1',
  id: 1,
  description: 'abcd',
  phases: {
    radiusTop: { range: 0.3, lifecycle: [0.3, 0.52, 1.09, 1.09, 0.2] },
    radiusBottom: { range: 0.3, lifecycle: [0.3, 0.52, 1.09, 1.09, 0.2] },
    noiseScale: { range: 0.4, lifecycle: [0.46, 1.95, 1.03, 1.31, 0.01] },
    noiseImpactX: { range: 0.5, lifecycle: [0.46, 0.5, 0.5, 0.5, 0.39] },
    noiseImpactY: { range: 0.2, lifecycle: [0.34, 0.5, 0.94, 2.63, 2.63] },
    noiseImpactZ: { range: 0.4, lifecycle: [0, 0, 1, 0.94, 0.94] },
    shape_Height: { range: 0.05, lifecycle: [0.16, 0.04, 0.04, 0.04, 0.01] },
    radialSegments: { range: 10, lifecycle: [100, 100, 100, 11.88, 11.88] },
    bloomRotationX: { range: 0.5, lifecycle: [0, 0.03, -0.38, -0.38, -0.71] },
    bloomRotationY: { range: 0.5, lifecycle: [0, 0, 0.07, 0.07, 0.07] },
    bloomRotationZ: { range: 0.5, lifecycle: [0, 0, -0.43, -0.43, -0.43] },
    recRadius: { range: 0.1, lifecycle: [0.16, 0.17, 0.2, 0.2, 0.11] },
    recPositionY: { range: 0, lifecycle: [5, 5, 5, 5, 5] },
    stemHeight: { range: 0.6, lifecycle: [0.7, 1.76, 7, 5.47, 2.39] },
    stemWidth: { range: 0.2, lifecycle: [0.4, 0.4, 0.4, 0.4, 0.4] },
    lifetime: 3600000,
  }
}


export {lifecycleParams}