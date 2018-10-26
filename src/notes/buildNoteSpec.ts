import {
    FULL_GAIN,
    Index,
    NoteSpec,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    shiftFromOneIndexedToZeroIndexed,
    to,
} from '../../../../src'
import { BuildNoteSpec, ContourElement } from '../types'

// tslint:disable-next-line:no-any no-magic-numbers
const REST: Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const DURATIONS_AND_GAIN_SCALE_INDEX: Index = 6 as any

const buildNoteSpec: BuildNoteSpec =
    ([ pitchIndex, duration ]: ContourElement): NoteSpec => {
        if (pitchIndex === REST) {
            return {
                durationSpec: {
                    index: shiftFromOneIndexedToZeroIndexed(duration),
                    scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: to.Scalar(0),
                },
                sustainSpec: {
                    index: shiftFromOneIndexedToZeroIndexed(duration),
                    offset: SEPARATION_FOR_NEIGHBORING_NOTES,
                    scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
                },
            }
        }

        return {
            durationSpec: {
                index: shiftFromOneIndexedToZeroIndexed(duration),
                scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
            },
            gainSpec: {
                scalar: FULL_GAIN,
                scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
            },
            pitchSpec: {
                index: shiftFromOneIndexedToZeroIndexed(pitchIndex),
            },
            sustainSpec: {
                index: shiftFromOneIndexedToZeroIndexed(duration),
                offset: SEPARATION_FOR_NEIGHBORING_NOTES,
                scaleIndex: DURATIONS_AND_GAIN_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
