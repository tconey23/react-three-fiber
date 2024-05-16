// const flowers = [
//   {
//     name: 'flower1',
//     id: 1,
//     description: "abcd",
//     phases: {
//       seedling: {
//         radiusTop: 0.36,
//         radiusBottom: 0.31,
//         noiseScale: 0.55,
//         noiseImpactX: 0.47,
//         noiseImpactY: 0.35,
//         noiseImpactZ: 0.13,
//         shape_Height: 0.12,
//         radialSegments: 99.14,
//         bloomRotationX: 0.03,
//         bloomRotationY: -0.09,
//         bloomRotationZ: -0.34,
//         recRadius: 0.20,
//         recPositionY: 5.00,
//         stemHeight: 0.78,
//         stemWidth: 0.42
//       },
//       blooming: {
//         radiusTop: 0.48,
//         radiusBottom: 0.44,
//         noiseScale: 1.79,
//         noiseImpactX: 0.68,
//         noiseImpactY: 0.45,
//         noiseImpactZ: 0.28,
//         shape_Height: 0.03,
//         radialSegments: 102.29,
//         bloomRotationX: -0.39,
//         bloomRotationY: 0.20,
//         bloomRotationZ: -0.22,
//         recRadius: 0.19,
//         recPositionY: 5.00,
//         stemHeight: 1.95,
//         stemWidth: 0.48
//       },
//       thriving: {
//         radiusTop: 1.12,
//         radiusBottom: 0.96,
//         noiseScale: 3,
//         noiseImpactX: 0.84,
//         noiseImpactY: 0.79,
//         noiseImpactZ: 1.22,
//         shape_Height: 0.07,
//         radialSegments: 101.79,
//         bloomRotationX: -0.10,
//         bloomRotationY: 0.13,
//         bloomRotationZ: -0.52,
//         recRadius: 0.23,
//         recPositionY: 0,
//         stemHeight: 6.58,
//         stemWidth: 0.34
//       },
//       wilting: {
//         radiusTop: 1.14,
//         radiusBottom: 0.90,
//         noiseScale: 0.97,
//         noiseImpactX: 0.37,
//         noiseImpactY: 2.43,
//         noiseImpactZ: 0.67,
//         shape_Height: 0.02,
//         radialSegments: 14.35,
//         bloomRotationX: -0.71,
//         bloomRotationY: 0.05,
//         bloomRotationZ: -0.38,
//         recRadius: 0.14,
//         recPositionY: 5.00,
//         stemHeight: 4.74,
//         stemWidth: 0.58
//       },
//       dead: {
//         radiusTop: 0.23,
//         radiusBottom: 0.29,
//         noiseScale: 0.25,
//         noiseImpactX: 0.54,
//         noiseImpactY: 2.47,
//         noiseImpactZ: 1.21,
//         shape_Height: 0.08,
//         radialSegments: 10.30,
//         bloomRotationX: -0.56,
//         bloomRotationY: 0.03,
//         bloomRotationZ: -0.59,
//         recRadius: 0.08,
//         recPositionY: 5.00
//       }
//     }
//   },
//   {
//     name: 'flower2',
//     id: 2,
//     description: "abcd",
//     phases: {
//       seedling: {
//         radiusTop: 0.33,
//         radiusBottom: 0.31,
//         noiseScale: 0.65,
//         noiseImpactX: 0.50,
//         noiseImpactY: 0.40,
//         noiseImpactZ: 0.16,
//         shape_Height: 0.10,
//         radialSegments: 102.18,
//         bloomRotationX: 0.01,
//         bloomRotationY: -0.08,
//         bloomRotationZ: -0.32,
//         recRadius: 0.17,
//         recPositionY: 5.00,
//         stemHeight: 0.81,
//         stemWidth: 0.43
//       },
//       blooming: {
//         radiusTop: 0.47,
//         radiusBottom: 0.42,
//         noiseScale: 1.82,
//         noiseImpactX: 0.69,
//         noiseImpactY: 0.47,
//         noiseImpactZ: 0.31,
//         shape_Height: 0.02,
//         radialSegments: 99.95,
//         bloomRotationX: -0.40,
//         bloomRotationY: 0.22,
//         bloomRotationZ: -0.24,
//         recRadius: 0.20,
//         recPositionY: 5.00,
//         stemHeight: 1.92,
//         stemWidth: 0.47
//       },
//       thriving: {
//         radiusTop: 0.97,
//         radiusBottom: 0.83,
//         noiseScale: 0.8,
//         noiseImpactX: 0.79,
//         noiseImpactY: 0.74,
//         noiseImpactZ: 1.17,
//         shape_Height: 0.05,
//         radialSegments: 105.74,
//         bloomRotationX: -0.08,
//         bloomRotationY: 0.11,
//         bloomRotationZ: -0.50,
//         recRadius: 0.21,
//         recPositionY: 5.00,
//         stemHeight: 6.71,
//         stemWidth: 0.31
//       },
//       wilting: {
//         radiusTop: 1.19,
//         radiusBottom: 0.93,
//         noiseScale: 0.90,
//         noiseImpactX: 0.40,
//         noiseImpactY: 2.49,
//         noiseImpactZ: 0.74,
//         shape_Height: 0.01,
//         radialSegments: 16.27,
//         bloomRotationX: -0.69,
//         bloomRotationY: 0.06,
//         bloomRotationZ: -0.36,
//         recRadius: 0.13,
//         recPositionY: 5.00,
//         stemHeight: 4.93,
//         stemWidth: 0.60
//       },
//       dead: {
//         radiusTop: 0.22,
//         radiusBottom: 0.27,
//         noiseScale: 0.26,
//         noiseImpactX: 0.55,
//         noiseImpactY: 2.48,
//         noiseImpactZ: 1.17,
//         shape_Height: 0.09,
//         radialSegments: 10.11,
//         bloomRotationX: -0.59,
//         bloomRotationY: 0.01,
//         bloomRotationZ: -0.55,
//         recRadius: 0.07,
//         recPositionY: 5.00
//       }
//     }
//   },
//   {
//     name: 'flower3',
//     id: 3,
//     description: "abcd",
//     phases: {
//       seedling: {
//         radiusTop: 0.38,
//         radiusBottom: 0.29,
//         noiseScale: 0.58,
//         noiseImpactX: 0.46,
//         noiseImpactY: 0.31,
//         noiseImpactZ: 0.12,
//         shape_Height: 0.11,
//         radialSegments: 99.94,
//         bloomRotationX: 0.05,
//         bloomRotationY: -0.11,
//         bloomRotationZ: -0.31,
//         recRadius: 0.19,
//         recPositionY: 5.00,
//         stemHeight: 0.79,
//         stemWidth: 0.41
//       },
//       blooming: {
//         radiusTop: 0.46,
//         radiusBottom: 0.45,
//         noiseScale: 1.88,
//         noiseImpactX: 0.70,
//         noiseImpactY: 0.48,
//         noiseImpactZ: 0.29,
//         shape_Height: 0.04,
//         radialSegments: 101.07,
//         bloomRotationX: -0.38,
//         bloomRotationY: 0.21,
//         bloomRotationZ: -0.23,
//         recRadius: 0.18,
//         recPositionY: 5.00,
//         stemHeight: 1.93,
//         stemWidth: 0.46
//       },
//       thriving: {
//         radiusTop: 1.01,
//         radiusBottom: 0.89,
//         noiseScale: 2,
//         noiseImpactX: 1,
//         noiseImpactY: 0.5,
//         noiseImpactZ: 1.15,
//         shape_Height: 0.06,
//         radialSegments: 97.91,
//         bloomRotationX: -0.10,
//         bloomRotationY: 0.12,
//         bloomRotationZ: -0.51,
//         recRadius: 0.22,
//         recPositionY: 5.00,
//         stemHeight: 6.45,
//         stemWidth: 0.33
//       },
//       wilting: {
//         radiusTop: 1.16,
//         radiusBottom: 0.97,
//         noiseScale: 0.94,
//         noiseImpactX: 0.41,
//         noiseImpactY: 2.54,
//         noiseImpactZ: 0.75,
//         shape_Height: 0.03,
//         radialSegments: 15.23,
//         bloomRotationX: -0.72,
//         bloomRotationY: 0.08,
//         bloomRotationZ: -0.35,
//         recRadius: 0.14,
//         recPositionY: 5.00,
//         stemHeight: 4.78,
//         stemWidth: 0.57
//       },
//       dead: {
//         radiusTop: 0.27,
//         radiusBottom: 0.32,
//         noiseScale: 0.27,
//         noiseImpactX: 0.57,
//         noiseImpactY: 2.46,
//         noiseImpactZ: 1.15,
//         shape_Height: 0.06,
//         radialSegments: 10.43,
//         bloomRotationX: -0.59,
//         bloomRotationY: 0.01,
//         bloomRotationZ: -0.55,
//         recRadius: 0.09,
//         recPositionY: 5.00
//       }
//     }
//   },
//   {
//     name: 'flower4',
//     id: 4,
//     description: "abcd",
//     phases: {
//       seedling: {
//         radiusTop: 0.37,
//         radiusBottom: 0.32,
//         noiseScale: 0.62,
//         noiseImpactX: 0.48,
//         noiseImpactY: 0.36,
//         noiseImpactZ: 0.15,
//         shape_Height: 0.10,
//         radialSegments: 103.12,
//         bloomRotationX: 0.03,
//         bloomRotationY: -0.10,
//         bloomRotationZ: -0.33,
//         recRadius: 0.18,
//         recPositionY: 5.00,
//         stemHeight: 0.80,
//         stemWidth: 0.42
//       },
//       blooming: {
//         radiusTop: 0.49,
//         radiusBottom: 0.41,
//         noiseScale: 1.81,
//         noiseImpactX: 0.67,
//         noiseImpactY: 0.46,
//         noiseImpactZ: 0.27,
//         shape_Height: 0.04,
//         radialSegments: 102.67,
//         bloomRotationX: -0.39,
//         bloomRotationY: 0.19,
//         bloomRotationZ: -0.23,
//         recRadius: 0.19,
//         recPositionY: 5.00,
//         stemHeight: 1.97,
//         stemWidth: 0.46
//       },
//       thriving: {
//         radiusTop: 1.02,
//         radiusBottom: 0.88,
//         noiseScale: 0.25,
//         noiseImpactX: 0.82,
//         noiseImpactY: 0.75,
//         noiseImpactZ: 1.16,
//         shape_Height: 0.05,
//         radialSegments: 102.50,
//         bloomRotationX: -0.10,
//         bloomRotationY: 0.14,
//         bloomRotationZ: -0.50,
//         recRadius: 0.22,
//         recPositionY: 5.00,
//         stemHeight: 6.69,
//         stemWidth: 0.32
//       },
//       wilting: {
//         radiusTop: 1.20,
//         radiusBottom: 0.92,
//         noiseScale: 0.92,
//         noiseImpactX: 0.38,
//         noiseImpactY: 2.48,
//         noiseImpactZ: 0.70,
//         shape_Height: 0.01,
//         radialSegments: 14.86,
//         bloomRotationX: -0.71,
//         bloomRotationY: 0.07,
//         bloomRotationZ: -0.34,
//         recRadius: 0.15,
//         recPositionY: 5.00,
//         stemHeight: 4.82,
//         stemWidth: 0.59
//       },
//       dead: {
//         radiusTop: 0.26,
//         radiusBottom: 0.30,
//         noiseScale: 0.24,
//         noiseImpactX: 0.56,
//         noiseImpactY: 2.47,
//         noiseImpactZ: 1.18,
//         shape_Height: 0.07,
//         radialSegments: 9.80,
//         bloomRotationX: -0.56,
//         bloomRotationY: 0.02,
//         bloomRotationZ: -0.60,
//         recRadius: 0.07,
//         recPositionY: 5.00
//       }
//     }
//   },
//   {
//     name: 'flower5',
//     id: 5,
//     description: "abcd", phases: {
//       seedling: {
//         radiusTop: 0.40,
//         radiusBottom: 0.30,
//         noiseScale: 0.57,
//         noiseImpactX: 0.45,
//         noiseImpactY: 0.34,
//         noiseImpactZ: 0.14,
//         shape_Height: 0.09,
//         radialSegments: 100.83,
//         bloomRotationX: 0.04,
//         bloomRotationY: -0.09,
//         bloomRotationZ: -0.35,
//         recRadius: 0.16,
//         recPositionY: 5.00,
//         stemHeight: 0.83,
//         stemWidth: 0.44
//       },
//       blooming: {
//         radiusTop: 0.45,
//         radiusBottom: 0.43,
//         noiseScale: 1.86,
//         noiseImpactX: 0.71,
//         noiseImpactY: 0.49,
//         noiseImpactZ: 0.30,
//         shape_Height: 0.05,
//         radialSegments: 101.46,
//         bloomRotationX: -0.40,
//         bloomRotationY: 0.20,
//         bloomRotationZ: -0.21,
//         recRadius: 0.20,
//         recPositionY: 5.00,
//         stemHeight: 1.91,
//         stemWidth: 0.48
//       },
//       thriving: {
//         radiusTop: 0.99,
//         radiusBottom: 0.87,
//         noiseScale: 1,
//         noiseImpactX: 5,
//         noiseImpactY: 9,
//         noiseImpactZ: 1.16,
//         shape_Height: 0.04,
//         radialSegments: 98.67,
//         bloomRotationX: -0.07,
//         bloomRotationY: 0.13,
//         bloomRotationZ: -0.49,
//         recRadius: 0.21,
//         recPositionY: 5.00,
//         stemHeight: 6.61,
//         stemWidth: 0.35
//       },
//       wilting: {
//         radiusTop: 1.13,
//         radiusBottom: 0.96,
//         noiseScale: 0.95,
//         noiseImpactX: 0.42,
//         noiseImpactY: 2.52,
//         noiseImpactZ: 0.73,
//         shape_Height: 0.02,
//         radialSegments: 14.68,
//         bloomRotationX: -0.71,
//         bloomRotationY: 0.09,
//         bloomRotationZ: -0.37,
//         recRadius: 0.12,
//         recPositionY: 5.00,
//         stemHeight: 4.75,
//         stemWidth: 0.58
//       },
//       dead: {
//         radiusTop: 0.24,
//         radiusBottom: 0.31,
//         noiseScale: 0.28,
//         noiseImpactX: 0.53,
//         noiseImpactY: 2.46,
//         noiseImpactZ: 1.20,
//         shape_Height: 0.05,
//         radialSegments: 10.58,
//         bloomRotationX: -0.59,
//         bloomRotationY: 0.02,
//         bloomRotationZ: -0.54,
//         recRadius: 0.08,
//         recPositionY: 5.00
//       }
//     }
//   }
// ];

// const flowers = [
//     {
//       name: 'flower1',
//       id: 1,
//       description: 'abcd',
//       phases: {
//         radiusTop: { range: 0.3, lifecycle: [0.36, 0.48, 1.12, 1.14, 0.23] },
//         radiusBottom: { range: 0.3, lifecycle: [0.31, 0.44, 0.96, 0.9, 0.29] },
//         noiseScale: { range: 0.4, lifecycle: [0.55, 1.79, 1.28, 0.97, 0.25] },
//         noiseImpactX: { range: 0.5, lifecycle: [0.47, 0.68, 0.84, 0.37, 0.54] },
//         noiseImpactY: { range: 0.2, lifecycle: [0.35, 0.45, 0.79, 2.43, 2.47] },
//         noiseImpactZ: { range: 0.4, lifecycle: [0.13, 0.28, 1.22, 0.67, 1.21] },
//         shape_Height: { range: 0.05, lifecycle: [0.12, 0.03, 0.07, 0.02, 0.08] },
//         radialSegments: { range: 10, lifecycle: [99.14, 102.29, 101.79, 14.35, 10.3] },
//         bloomRotationX: { range: 0.5, lifecycle: [0.03, -0.39, -0.1, -0.71, -0.56] },
//         bloomRotationY: { range: 0.5, lifecycle: [-0.09, 0.2, 0.13, 0.05, 0.03] },
//         bloomRotationZ: { range: 0.5, lifecycle: [-0.34, -0.22, -0.52, -0.38, -0.59] },
//         recRadius: { range: 0.1, lifecycle: [0.2, 0.19, 0.23, 0.14, 0.08] },
//         recPositionY: { range: 0, lifecycle: [5, 5, 5, 5, 5] },
//         stemHeight: { range: 0.6, lifecycle: [0.78, 1.95, 6.58, 4.74, 0] },
//         stemWidth: { range: 0.2, lifecycle: [0.42, 0.48, 0.34, 0.58, 0] },
//         lifetime: 3600000,
//       },
//     },
//     {
//       name: 'flower2',
//       id: 2,
//       description: 'abcd',
//       phases: {
//         radiusTop: { range: 0.3, lifecycle: [0.33, 0.47, 0.97, 1.19, 0.22] },
//         radiusBottom: { range: 0.3, lifecycle: [0.31, 0.42, 0.83, 0.93, 0.27] },
//         noiseScale: { range: 0.4, lifecycle: [0.65, 1.82, 1.21, 0.9, 0.26] },
//         noiseImpactX: { range: 0.5, lifecycle: [0.5, 0.69, 0.79, 0.4, 0.55] },
//         noiseImpactY: { range: 0.2, lifecycle: [0.4, 0.47, 0.74, 2.49, 2.48] },
//         noiseImpactZ: { range: 0.4, lifecycle: [0.16, 0.31, 1.17, 0.74, 1.17] },
//         shape_Height: { range: 0.05, lifecycle: [0.1, 0.02, 0.05, 0.01, 0.09] },
//         radialSegments: { range: 10, lifecycle: [102.18, 99.95, 105.74, 16.27, 10.11] },
//         bloomRotationX: { range: 0.5, lifecycle: [0.01, -0.4, -0.08, -0.69, -0.59] },
//         bloomRotationY: { range: 0.5, lifecycle: [-0.08, 0.22, 0.11, 0.06, 0.01] },
//         bloomRotationZ: { range: 0.5, lifecycle: [-0.32, -0.24, -0.5, -0.36, -0.55] },
//         recRadius: { range: 0.1, lifecycle: [0.17, 0.2, 0.21, 0.13, 0.07] },
//         recPositionY: { range: 0, lifecycle: [5, 5, 5, 5, 5] },
//         stemHeight: { range: 0.6, lifecycle: [0.81, 1.92, 6.71, 4.93, 0] },
//         stemWidth: { range: 0.2, lifecycle: [0.43, 0.47, 0.31, 0.6, 0] },
//         lifetime: 3600000,
//       },
//     },
//     {
//       name: 'flower3',
//       id: 3,
//       description: 'abcd',
//       phases: {
//         radiusTop: { range: 0.3, lifecycle: [0.38, 0.46, 1.01, 1.16, 0.27] },
//         radiusBottom: { range: 0.3, lifecycle: [0.29, 0.45, 0.89, 0.97, 0.32] },
//         noiseScale: { range: 0.4, lifecycle: [0.58, 1.88, 1.25, 0.94, 0.27] },
//         noiseImpactX: { range: 0.5, lifecycle: [0.46, 0.7, 0.81, 0.41, 0.57] },
//         noiseImpactY: { range: 0.2, lifecycle: [0.31, 0.48, 0.76, 2.54, 2.46] },
//         noiseImpactZ: { range: 0.4, lifecycle: [0.12, 0.29, 1.15, 0.73, 0.24] },
//         shape_Height: { range: 0.05, lifecycle: [0.11, 0.04, 0.06, 0.03, 0.07] },
//         radialSegments: { range: 10, lifecycle: [99.94, 101.07, 97.91, 15.23, 10.43] },
//         bloomRotationX: { range: 0.5, lifecycle: [0.05, -0.38, -0.1, -0.72, -0.59] },
//         bloomRotationY: { range: 0.5, lifecycle: [-0.11, 0.21, 0.12, 0.08, 0.01] },
//         bloomRotationZ: { range: 0.5, lifecycle: [-0.31, -0.23, -0.51, -0.35, -0.55] },
//         recRadius: { range: 0.1, lifecycle: [0.19, 0.18, 0.22, 0.14, 0.09] },
//         recPositionY: { range: 0, lifecycle: [5, 5, 5, 5, 5] },
//         stemHeight: { range: 0.6, lifecycle: [0.79, 1.93, 6.45, 4.78, 0] },
//         stemWidth: { range: 0.2, lifecycle: [0.41, 0.46, 0.33, 0.57, 0] },
//         lifetime: 3600000,
//       },
//     },
//     {
//       name: 'flower4',
//       id: 4,
//       description: 'abcd',
//       phases: {
//         radiusTop: { range: 0.3, lifecycle: [0.37, 0.49, 1.02, 1.2, 0.26] },
//         radiusBottom: { range: 0.3, lifecycle: [0.32, 0.41, 0.88, 0.92, 0.3] },
//         noiseScale: { range: 0.4, lifecycle: [0.62, 1.81, 1.23, 0.92, 0.24] },
//         noiseImpactX: { range: 0.5, lifecycle: [0.48, 0.67, 0.82, 0.38, 0.56] },
//         noiseImpactY: { range: 0.2, lifecycle: [0.36, 0.46, 0.75, 2.48, 2.47] },
//         noiseImpactZ: { range: 0.4, lifecycle: [0.15, 0.27, 1.16, 0.7, 1.18] },
//         shape_Height: { range: 0.05, lifecycle: [0.1, 0.04, 0.05, 0.01, 0.07] },
//         radialSegments: { range: 10, lifecycle: [103.12, 102.67, 102.5, 14.86, 9.8] },
//         bloomRotationX: { range: 0.5, lifecycle: [0.03, -0.39, -0.1, -0.71, -0.56] },
//         bloomRotationY: { range: 0.5, lifecycle: [-0.1, 0.19, 0.14, 0.07, 0.02] },
//         bloomRotationZ: { range: 0.5, lifecycle: [-0.33, -0.23, -0.5, -0.34, -0.6] },
//         recRadius: { range: 0.1, lifecycle: [0.18, 0.19, 0.22, 0.15, 0.07] },
//         recPositionY: { range: 0, lifecycle: [5, 5, 5, 5, 5] },
//         stemHeight: { range: 0.6, lifecycle: [0.8, 1.97, 6.69, 4.82, 0] },
//         stemWidth: { range: 0.2, lifecycle: [0.42, 0.46, 0.32, 0.59, 0] },
//         lifetime: 3600000,
//       },
//     },
//     {
//       name: 'flower5',
//       id: 5,
//       description: 'abcd',
//       phases: {
//         radiusTop: { range: 0.3, lifecycle: [0.4, 0.45, 0.99, 1.13, 0.24] },
//         radiusBottom: { range: 0.3, lifecycle: [0.3, 0.43, 0.87, 0.96, 0.31] },
//         noiseScale: { range: 0.4, lifecycle: [0.57, 1.86, 1.29, 0.95, 0.28] },
//         noiseImpactX: { range: 0.5, lifecycle: [0.45, 0.71, 0.78, 0.42, 0.53] },
//         noiseImpactY: { range: 0.2, lifecycle: [0.34, 0.49, 0.73, 2.52, 2.46] },
//         noiseImpactZ: { range: 0.4, lifecycle: [0.14, 0.3, 1.16, 0.73, 1.2] },
//         shape_Height: { range: 0.05, lifecycle: [0.09, 0.05, 0.04, 0.02, 0.05] },
//         radialSegments: { range: 10, lifecycle: [100.83, 101.46, 98.67, 14.68, 10.58] },
//         bloomRotationX: { range: 0.5, lifecycle: [0.04, -0.4, -0.07, -0.71, -0.59] },
//         bloomRotationY: { range: 0.5, lifecycle: [-0.09, 0.2, 0.13, 0.09, 0.02] },
//         bloomRotationZ: { range: 0.5, lifecycle: [-0.35, -0.21, -0.49, -0.37, -0.54] },
//         recRadius: { range: 0.1, lifecycle: [0.16, 0.2, 0.21, 0.12, 0.08] },
//         recPositionY: { range: 0, lifecycle: [5, 5, 5, 5] },
//         stemHeight: { range: 0.6, lifecycle: [0.83, 1.91, 6.61, 4.75, 0] },
//         stemWidth: { range: 0.2, lifecycle: [0.44, 0.48, 0.35, 0.58, 0] },
//         lifetime: 3600000,
//       },
//     },
//   ];

const vectors = [
  [0.5, 0, 0],
  [0.5, 0, 0],
  [0.5, 0, 0.8],
  [0.1, 10, 0],
  [0.1, 10, 0],
  [0.1, 10, 0],
  [0.1, 10, 0],
  [0.1, 10, 0]
];



const plant = {
  name: 'flower_name',
  id: 'flower_id',
  description: 'flower_desc',
  planted: Date.now(),
  phases: {
    stem: {
      color: 'green',
      stemWidth: [0.4, 0.4, 0.4, 0.4, 0.4],
      path: [
        [
          [0.5, 0, 0],
          [0.5, 0, 0],
          [0.5, 0, 0.8],
          [0.1, 0.7, 0],
          [0.1, 0.7, 0],
          [0.1, 0.7, 0],
          [0.1, 0.7, 0],
          [0.1, 0.7, 0]
        ],
        [
          [0.5, 0, 0],
          [0.5, 0, 0],
          [0.5, 0, 0.8],
          [0.1, 1.76, 0],
          [0.1, 1.76, 0],
          [0.1, 1.76, 0],
          [0.1, 1.76, 0],
          [0.1, 1.76, 0]
        ],
        [
          [0.5, 0, 0],
          [0.5, 0, 0],
          [0.5, 0, 0.8],
          [0.1, 7, 0],
          [0.1, 7, 0],
          [0.1, 7, 0],
          [0.1, 7, 0],
          [0.1, 7, 0]
        ],
        [
          [0.5, 0, 0],
          [0.5, 0, 0],
          [0.5, 0, 0.56],
          [0.1, 4.5, 0.88],
          [0.1, 7.46, 1.42],
          [0.1, 8.34, 1.08],
          [0.1, 8.42, 0],
          [0.1, 7.08, -0.26]
        ],
        [
          [0.5, 0, 0],
          [0.5, 0, 0],
          [0.5, 0, 0.56],
          [0.1, 2.5, 0.88],
          [0.1, 5.46, 1.42],
          [0.1, 6.34, 1.08],
          [0.1, 6.42, 0],
          [0.1, 5.08, -0.26]
        ]
      ],
      
    },
    bloom: {
      color: [50,70,50],
      petalCount: [1,1,1,1,1],
      recRadius: [0.16, 0.17, 0.2, 0.2, 0.11],
      radiusTop: [0.3, 0.52, 1.09, 1.09, 0.2],
      radiusBottom: [0.3, 0.52, 1.09, 1.09, 0.2],
      noiseScale: [0.46, 1.95, 1.03, 1.31, 0.01],
      noiseImpactX: [0.46, 0.5, 0.5, 0.5, 0.39],
      noiseImpactY: [0.34, 0.5, 0.94, 2.63, 2.63],
      noiseImpactZ: [0, 0, 1, 0.94, 0.94],
      height: [0.16, 0.04, 0.04, 0.04, 0.01],
      radialSegments: [100, 100, 100, 11.88, 11.88],
      rotation: [
        [0,0,0],
        [0.03,0,0],
        [-0.38,0.07,-0.43],
        [-0.38,0.07,0.07],
        [-0.71,0.07,-0.43]
      ]
    },
  }

}


const lifecycleParams = {
  // radiusTop: [0.3, 0.52, 1.09, 1.09, 0.2],
  // radiusBottom: [0.3, 0.52, 1.09, 1.09, 0.2],
  // noiseScale: [0.46, 1.95, 1.03, 1.31, 0.01],
  // noiseImpactX: [0.46, 0.5, 0.5, 0.5, 0.39],
  // noiseImpactY: [0.34, 0.5, 0.94, 2.63, 2.63],
  // noiseImpactZ: [0, 0, 1, 0.94, 0.94],
  // shape_Height: [0.16, 0.04, 0.04, 0.04, 0.01],
  // radialSegments: [100, 100, 100, 11.88, 11.88],
  // bloomRotationX: [0, 0.03, -0.38, -0.38, -0.71],
  // bloomRotationY: [0, 0, 0.07, 0.07, 0.07],
  // bloomRotationZ: [0, 0, -0.43, -0.43, -0.43],
  // recRadius: [0.16, 0.17, 0.2, 0.2, 0.11],
  // recPositionY: fecycle: [5, 5, 5, 5, 5],
  // stemHeight: [0.7, 1.76, 7, 5.47, 2.39],
  // stemWidth: [0.4, 0.4, 0.4, 0.4, 0.4],
  lifetime: 3600000,
}

export default plant