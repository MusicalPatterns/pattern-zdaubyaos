import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    FULL_GAIN,
    NoteSpec,
    offsetFromOneIndexedToZeroIndexed,
    to,
    unpackContourElement,
} from '../../../../src'
import { PITCH_INDEX_INDICATING_REST } from '../constants'
import { BuildZdaubyaosNoteSpec, ContourElement } from '../types'

const buildNoteSpec: BuildZdaubyaosNoteSpec =
    (contourElement: ContourElement): NoteSpec => {
        const { pitch, duration } = unpackContourElement(contourElement)

        if (pitch === PITCH_INDEX_INDICATING_REST) {
            return {
                durationSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(duration),
                    scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: to.Scalar(0),
                },
                sustainSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(duration),
                    offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                    scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
                },
            }
        }

        return {
            durationSpec: {
                index: offsetFromOneIndexedToZeroIndexed(duration),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: FULL_GAIN,
            },
            pitchSpec: {
                index: offsetFromOneIndexedToZeroIndexed(pitch),
            },
            sustainSpec: {
                index: offsetFromOneIndexedToZeroIndexed(duration),
                offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
