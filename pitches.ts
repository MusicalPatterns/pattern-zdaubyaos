import numbers from '../../src/numbers'

const SUPER: number = 1
const DUPER: number = 2

const subparticularSeriesPitches: number[]  = numbers.map((n: number): number => n / (n + SUPER))

const superparticularSeriesPitches: number[] = numbers.map((n: number): number => (n + SUPER) / n)

const dubparticularSeriesPitches: number[] = numbers.map((n: number): number => n / (n + DUPER))

const duperparticularSeriesPitches: number[] = numbers.map((n: number): number => (n + DUPER) / n)

export {
    subparticularSeriesPitches,
    superparticularSeriesPitches,
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
}
