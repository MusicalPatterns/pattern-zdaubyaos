import { applyOffset, from, INCLUSIVE, Index, INITIAL, Scalar, to } from '../../../src'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from './constants'
import { buildSegments } from './segments'
import { Segment, Segments, Track, TrackDictionary } from './types'

const buildZdaubyaosTracks: (songDurationScalar: Scalar) => TrackDictionary =
    (songDurationScalar: Scalar): TrackDictionary => {
        const segments: Segments = buildSegments(songDurationScalar)

        const end: Index = to.Index(segments.length)

        let zdaubyaosSubparticularOrDubparticularTrack: Track = []
        let zdaubyaosSuperparticularOrDuperparticularTrack: Track = []
        let zdaubyaosHarmonicOrSubharmonicTrack: Track = []

        segments.slice(from.Index(INITIAL), from.Index(applyOffset(end, INCLUSIVE)))
            .forEach((segment: Segment): void => {
                zdaubyaosSubparticularOrDubparticularTrack = zdaubyaosSubparticularOrDubparticularTrack
                    .concat(segment[ from.Index(SEGMENT_A) ])
                zdaubyaosSuperparticularOrDuperparticularTrack = zdaubyaosSuperparticularOrDuperparticularTrack
                    .concat(segment[ from.Index(SEGMENT_B) ])
                zdaubyaosHarmonicOrSubharmonicTrack = zdaubyaosHarmonicOrSubharmonicTrack
                    .concat(segment[ from.Index(SEGMENT_C) ])
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
