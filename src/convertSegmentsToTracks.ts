import segments from './segments'
import { Segment, Track } from './types'

let zdaubyaosTrackA: Track = []
let zdaubyaosTrackB: Track = []
let zdaubyaosTrackC: Track = []
let zdaubyaosTrackD: Track = []
let zdaubyaosTrackE: Track = []
let zdaubyaosTrackF: Track = []

const START: number = 0
const END: number = segments.length
const INCLUSIVE: number = 1
const A: number = 0
const B: number = 1
const C: number = 2
const D: number = 3
const E: number = 4
const F: number = 5

segments.slice(START, END + INCLUSIVE).forEach((segment: Segment): void => {
    zdaubyaosTrackA = zdaubyaosTrackA.concat(segment[A])
    zdaubyaosTrackB = zdaubyaosTrackB.concat(segment[B])
    zdaubyaosTrackC = zdaubyaosTrackC.concat(segment[C])
    zdaubyaosTrackD = zdaubyaosTrackD.concat(segment[D])
    zdaubyaosTrackE = zdaubyaosTrackE.concat(segment[E])
    zdaubyaosTrackF = zdaubyaosTrackF.concat(segment[F])
})

export {
    zdaubyaosTrackA,
    zdaubyaosTrackB,
    zdaubyaosTrackC,
    zdaubyaosTrackD,
    zdaubyaosTrackE,
    zdaubyaosTrackF,
}
