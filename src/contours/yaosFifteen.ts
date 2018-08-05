import { Contour } from '../types'

const umowSpring: Contour = [
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
    0, 2, 3,
]

const chuwowSpring: Contour = [
    0, 2, 3,
    0, 2, 3, 4,
    0, 2, 3,
    0, 2, 3, 4, 5,
]

const iestSpring: Contour = [
    0, 2, 3, 4, 5,
    0, 2, 3, 4, 5,
    0, 2, 3, 4, 5,
]

const umowSummer: Contour = [
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
    1, 0, 3,
]

const chuwowSummer: Contour = [
    1, 0, 3,
    1, 0, 3, 0,
    1, 0, 3,
    1, 0, 3, 0, 5,
]

const iestSummer: Contour = [
    1, 0, 3, 0, 5,
    1, 0, 3, 0, 5,
    1, 0, 3, 0, 5,
]

const umowFall: Contour = [
    1, 2,
    1, 2,
    1, 2,
    1, 2,
    1, 2,
]

const chuwowFall: Contour = [
    1, 2,
    1, 3,
    1, 2,
    1, 4,
]

const iestFall: Contour = [
    1, 4,
    1, 4,
    1, 4,
]

const inaiSummer: Contour = [
    1, 0, 3,
    1, 0, 3, 0,
    1, 0, 3, 0,
    1, 0, 3, 0,
]

const djiyaiSummer: Contour = [
    1, 0, 3,
    1, 0, 3, 0, 5,
    1, 0, 3, 0, 5, 0, 7,
]

const ouzdSummer: Contour = [
    1, 0, 3, 0, 5, 0, 7,
    1, 0, 3, 0, 5, 0, 7, 0,
]

export {
    umowSpring,
    chuwowSpring,
    iestSpring,
    umowSummer,
    chuwowSummer,
    iestSummer,
    inaiSummer,
    djiyaiSummer,
    ouzdSummer,
    umowFall,
    chuwowFall,
    iestFall,
}
