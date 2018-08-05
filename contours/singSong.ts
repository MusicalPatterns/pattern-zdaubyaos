const stepwiseForUmowchuwowiestCrossedWithStepwiseStepwise: number[] = [
    // Noodling in 15 and escape
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 3,
    // Ascent in 15
    4, 5, 6,
    7, 8,
    9, 10, 11,
    // (above spreads across 2 bars)
    // Inscape and noodling in 24
    9, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    // No ascent in 24 ...?
]

const stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonic: number[] = [
    // Noodling in 15 and escape
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 1, 2,
    3, 4, 3, 2, 1, 2,
    // Ascent in 15
    3, 4, 3, 2, 3,
    4, 5, 6,
    7, 8,
    9, 6,
    // Inscape and noodling in 24
    9, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    1, 3, 5, 7, 5, 3,
    // No ascent in 24 ...?
]

const stepwiseForUmowchuwowiestCrossedWithStepwiseInbetween: number[][] = [
    // Noodling in 15 and escape
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [1, 1], [2, 2],
    [3, 1], [3, 2], [4, 1], [4, 2], [4, 1], [3, 2], [3, 1], [2, 2], [3, 1], [3, 2],
    // Ascent in 15
    [4, 1], [4, 2], [4, 1], [5, 2], [5, 1], [5, 2], [6, 1], [6, 2], [6, 1], [6, 2],
    [7, 1], [7, 2], [7, 1], [7, 2], [7, 1], [8, 2], [8, 1], [8, 2], [8, 1], [8, 2],
    [9, 1], [9, 2], [9, 1], [9, 2], [9, 1], [9, 2], [10, 1], [10, 2], [10, 1], [10, 2],
    [10, 1], [10, 2], [10, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2], [11, 1], [11, 2],
    // Inscape and noodling in 24
    [9, 1], [9, 3], [9, 1], [9, 3], [9, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
    [1, 1], [3, 3], [5, 1], [5, 3], [5, 1], [7, 3], [7, 1], [7, 3], [5, 1], [5, 3], [5, 1], [3, 3],
    // No ascent in 24 ...?
]

const stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiest: number[] = [
    // Noodling in 15 and escape
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 2, 2,
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 3, 3, 3,
    // Ascent in 15
    4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
    7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
    // Inscape and noodling in 24
    9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
    1, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 3, 3, 3,
    // No ascent in 24 ...?
]

export {
    stepwiseForUmowchuwowiestCrossedWithStepwiseUmowchuwowiest,
    stepwiseForUmowchuwowiestCrossedWithStepwiseInbetween,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwise,
    stepwiseForUmowchuwowiestCrossedWithStepwiseStepwiseNotesDelayedHarmonic,
}
