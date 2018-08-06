import numbers from '../../../src/numbers'
import { Contour, Rendering } from './types'

const INITIAL: number = 0
const EVEN: number = 2
const ZERO: number = 0
const ONE: number = 1

const spring: Rendering =
    (duration: number): Contour => {
        const contour: Contour = numbers.slice(0, duration)
        contour[INITIAL] = 0

        return contour
    }

const summer: Rendering =
    (duration: number): Contour =>
        numbers
            .slice(INITIAL, duration)
            .map((n: number): number => n % EVEN === ZERO ? ZERO : n)

const fall: Rendering =
    (duration: number): Contour =>
        [ONE, duration - ONE]

export {
    spring,
    summer,
    fall,
}
