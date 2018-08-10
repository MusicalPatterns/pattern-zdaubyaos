import segments from './segments'
import { Segment, Track } from './types'

let zdaubyaosSubparticularOrDubparticularTrack: Track = []
let zdaubyaosSuperparticularOrDuperparticularTrack: Track = []
let zdaubyaosHarmonicOrSubharmonicTrack: Track = []

const START: number = 0
const END: number = segments.length
const INCLUSIVE: number = 1
const A: number = 0
const B: number = 1
const C: number = 2

segments.slice(START, END + INCLUSIVE).forEach((segment: Segment): void => {
    zdaubyaosSubparticularOrDubparticularTrack = zdaubyaosSubparticularOrDubparticularTrack.concat(segment[A])
    zdaubyaosSuperparticularOrDuperparticularTrack = zdaubyaosSuperparticularOrDuperparticularTrack.concat(segment[B])
    zdaubyaosHarmonicOrSubharmonicTrack = zdaubyaosHarmonicOrSubharmonicTrack.concat(segment[C])
})

export {
    zdaubyaosSubparticularOrDubparticularTrack,
    zdaubyaosSuperparticularOrDuperparticularTrack,
    zdaubyaosHarmonicOrSubharmonicTrack,
}
