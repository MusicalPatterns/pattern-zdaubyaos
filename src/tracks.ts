import * as from from '../../../src/utilities/from'
import { Index, Offset } from '../../../src/utilities/nominalTypes'
import offset from '../../../src/utilities/offset'
import segments from './segments'
import { Segment, Track } from './types'

let zdaubyaosSubparticularOrDubparticularTrack: Track = []
let zdaubyaosSuperparticularOrDuperparticularTrack: Track = []
let zdaubyaosHarmonicOrSubharmonicTrack: Track = []

// tslint:disable-next-line:no-any no-magic-numbers
const START: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const END: Index = segments.length as any
// tslint:disable-next-line:no-any no-magic-numbers
const INCLUSIVE: Offset = 1 as any
// tslint:disable-next-line:no-any no-magic-numbers
const A: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const B: Index = 1 as any
// tslint:disable-next-line:no-any no-magic-numbers
const C: Index = 2 as any

segments.slice(from.Index(START), from.Index(offset(END, INCLUSIVE))).forEach((segment: Segment): void => {
    zdaubyaosSubparticularOrDubparticularTrack =
        zdaubyaosSubparticularOrDubparticularTrack.concat(segment[from.Index(A)])
    zdaubyaosSuperparticularOrDuperparticularTrack =
        zdaubyaosSuperparticularOrDuperparticularTrack.concat(segment[from.Index(B)])
    zdaubyaosHarmonicOrSubharmonicTrack =
        zdaubyaosHarmonicOrSubharmonicTrack.concat(segment[from.Index(C)])
})

export {
    zdaubyaosSubparticularOrDubparticularTrack,
    zdaubyaosSuperparticularOrDuperparticularTrack,
    zdaubyaosHarmonicOrSubharmonicTrack,
}
