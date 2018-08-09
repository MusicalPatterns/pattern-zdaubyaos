import {
    MAX_GAIN,
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    SILENT,
} from '../../../src/constants'
import { Note } from '../../../src/types'
import * as from from '../../../src/utilities/from'
import { Index } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import { ContourElement, MakeNote } from './types'

// tslint:disable-next-line:no-any no-magic-numbers
const REST: Index = 0 as any

const makeNote: MakeNote =
    ([pitchIndex, duration]: ContourElement): Note => {
        if (pitchIndex === REST) {
            return {
                duration,
                gain: SILENT,
                pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
                sustain: to.Time(from.Time(duration) - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES)),
            }
        }

        return {
            duration,
            gain: MAX_GAIN,
            pitchIndex,
            sustain: to.Time(from.Time(duration) - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES)),
        }
    }

export default makeNote
