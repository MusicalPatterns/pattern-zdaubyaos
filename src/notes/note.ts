import {
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    FULL_GAIN,
    NoteSpec,
    offsetFromOneIndexedToZeroIndexed,
    to,
} from '../../../../src'
import { DURATIONS_AND_GAIN_SCALE_INDEX, PITCH_INDEX_INDICATING_REST } from '../constants'
import { BuildNoteSpec, ContourElement } from '../types'

const buildNoteSpec: BuildNoteSpec =
    ([ pitchIndex, duration ]: ContourElement): NoteSpec => {
        if (pitchIndex === PITCH_INDEX_INDICATING_REST) {
            return {
                durationSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(duration),
                    scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: to.Scalar(0),
                },
                sustainSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(duration),
                    offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                    scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
                },
            }
        }

        return {
            durationSpec: {
                index: offsetFromOneIndexedToZeroIndexed(duration),
                scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
            },
            gainSpec: {
                scalar: FULL_GAIN,
                scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
            },
            pitchSpec: {
                index: offsetFromOneIndexedToZeroIndexed(pitchIndex),
            },
            sustainSpec: {
                index: offsetFromOneIndexedToZeroIndexed(duration),
                offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
