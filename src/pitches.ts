import { HARMONIC_SHIFT } from '../../../src/constants'
import numbers from '../../../src/utilities/numbers'

const SUPER: number = 1
const DUPER: number = 2

const subparticularSeriesPitches: number[] = numbers.map((n: number): number =>
    (n + HARMONIC_SHIFT) / (n + SUPER + HARMONIC_SHIFT))

const superparticularSeriesPitches: number[] = numbers.map((n: number): number =>
    (n + SUPER + HARMONIC_SHIFT) / (n + HARMONIC_SHIFT))

const dubparticularSeriesPitches: number[] = numbers.map((n: number): number =>
    (n + HARMONIC_SHIFT) / (n + DUPER + HARMONIC_SHIFT))

const duperparticularSeriesPitches: number[] = numbers.map((n: number): number =>
    (n + DUPER + HARMONIC_SHIFT) / (n + HARMONIC_SHIFT))

export {
    subparticularSeriesPitches,
    superparticularSeriesPitches,
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
}
