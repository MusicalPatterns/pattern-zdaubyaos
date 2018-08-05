import { Contour } from '../types'

const chuwowwwSpring: Contour = [
    0, 2, 3,
    0, 2, 3, 4,
    0, 2, 3, 4, 5,
    0, 2, 3,
    0, 2, 3, 4, 5,
    0, 2, 3, 4,
]

const chuwowwwFall: Contour = [
    1, 2,
    1, 3,
    1, 4,
    1, 2,
    1, 4,
    1, 3,
]

const inaiiiSpring: Contour = [
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
]

const djiyaiiiSpring: Contour = [
    0, 2, 3,
    0, 2, 3,
    0, 2, 3, 4, 5,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3, 4, 5, 6, 7,
]

const inaiiiSummer: Contour = [
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
]
const djiyaiiiSummer: Contour = [
    1, 0, 3,
    1, 0, 3,
    1, 0, 3, 0, 5,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3, 0, 5, 0, 7,
]

const umowwwFall: Contour = [
    1, 3,
    1, 3,
    1, 3,
    1, 3,
    1, 3,
    1, 3,
]

const djiyaiiiFall: Contour = [
    1, 2,
    1, 2,
    1, 4,
    1, 2,
    1, 2,
    1, 6,
]

const inaiiiVariety: number[][] = [
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [0, 1], [2, 1], [3, 1],
    [1, 1], [0, 1], [3, 1],
    [1, 1], [2, 2],
    [1, 1], [2, 2],
]

export {
    chuwowwwSpring,
    chuwowwwFall,
    inaiiiSpring,
    djiyaiiiSpring,
    inaiiiSummer,
    djiyaiiiSummer,
    umowwwFall,
    djiyaiiiFall,
    inaiiiVariety,
}
