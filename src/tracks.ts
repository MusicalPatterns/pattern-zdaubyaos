import { applyOffset, from, Index, Offset, Scalar } from '../../../src'
import { buildSegments } from './segments'
import { Segment, Segments, Track, TrackDictionary } from './types'

const buildZdaubyaosTracks: (songDurationScalar: Scalar) => TrackDictionary =
    (songDurationScalar: Scalar): TrackDictionary => {
        const segments: Segments = buildSegments(songDurationScalar)

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

        let zdaubyaosSubparticularOrDubparticularTrack: Track = []
        let zdaubyaosSuperparticularOrDuperparticularTrack: Track = []
        let zdaubyaosHarmonicOrSubharmonicTrack: Track = []

        segments.slice(from.Index(START), from.Index(applyOffset(END, INCLUSIVE))).forEach((segment: Segment): void => {
            zdaubyaosSubparticularOrDubparticularTrack =
                zdaubyaosSubparticularOrDubparticularTrack.concat(segment[ from.Index(A) ])
            zdaubyaosSuperparticularOrDuperparticularTrack =
                zdaubyaosSuperparticularOrDuperparticularTrack.concat(segment[ from.Index(B) ])
            zdaubyaosHarmonicOrSubharmonicTrack =
                zdaubyaosHarmonicOrSubharmonicTrack.concat(segment[ from.Index(C) ])
        })

        return {
            zdaubyaosHarmonicOrSubharmonicTrack,
            zdaubyaosSubparticularOrDubparticularTrack,
            zdaubyaosSuperparticularOrDuperparticularTrack,
        }
    }

export {
    buildZdaubyaosTracks,
}
