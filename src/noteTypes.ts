import {
    MAX_GAIN,
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    SILENT,
} from '../../../src/constants'
import { Note } from '../../../src/types'
import * as from from '../../../src/utilities/from'
import { Index, Time } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import { ManualContourElement, ManualNoteType, NoteType } from './types'
import * as zdaubyaosFrom from './utilities/from'
import { ContourElement } from './utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const REST: ContourElement | Index = 0 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SINGLE_DURATION: Time = 1 as any
const SINGLE_DURATION_SUSTAIN: Time =
    to.Time(from.Time(SINGLE_DURATION) - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES))

const singleRest: Note = {
    duration: SINGLE_DURATION,
    gain: SILENT,
    pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    sustain: to.Time(from.Time(SINGLE_DURATION) - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES)),
}

const glisNoteType: NoteType =
    (contourElement: ContourElement): Note => {
        if (contourElement === REST) { return singleRest }

        const rawContourElement: number = zdaubyaosFrom.ContourElement(contourElement)

        return {
            duration: to.Time(rawContourElement),
            gain: MAX_GAIN,
            pitchIndex: to.Index(rawContourElement),
            sustain: to.Time(rawContourElement - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES)),
        }
    }

const tremNoteType: NoteType =
    (contourElement: ContourElement): Note => {
        if (contourElement === REST) { return singleRest }

        return {
            duration: SINGLE_DURATION,
            gain: MAX_GAIN,
            pitchIndex: to.Index(zdaubyaosFrom.ContourElement(contourElement)),
            sustain: SINGLE_DURATION_SUSTAIN,
        }
    }

const manualNoteType: ManualNoteType =
    ([pitchIndex, duration]: ManualContourElement): Note => {
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

export {
    glisNoteType,
    tremNoteType,
    manualNoteType,
}
