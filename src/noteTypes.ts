import {
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    SILENT,
} from '../../../src/constants'
import { Note } from '../../../src/types'
import { NoteType } from './types'

const REST: number = 0
const MAX_GAIN: number = 1
const SINGLE_DURATION: number = 1

const singleRest: Note = {
    duration: SINGLE_DURATION,
    gain: SILENT,
    pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    sustain: SINGLE_DURATION - SEPARATION_FOR_NEIGHBORING_NOTES,
}

const glisNoteType: NoteType =
    (pitchIndex: number): Note => {
        if (pitchIndex === REST) { return singleRest }

        return {
            duration: pitchIndex,
            gain: MAX_GAIN,
            pitchIndex,
            sustain: pitchIndex - SEPARATION_FOR_NEIGHBORING_NOTES,
        }
    }

const tremNoteType: NoteType =
    (pitchIndex: number): Note => {
        if (pitchIndex === REST) { return singleRest }

        return {
            duration: SINGLE_DURATION,
            gain: MAX_GAIN,
            pitchIndex,
            sustain: SINGLE_DURATION - SEPARATION_FOR_NEIGHBORING_NOTES,
        }
    }

const manualNoteType: ([pitchIndex, duration]: number[]) => Note =
    ([pitchIndex, duration]: number[]): Note => {
        if (pitchIndex === REST) {
            return {
                duration,
                gain: SILENT,
                pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
                sustain: duration - SEPARATION_FOR_NEIGHBORING_NOTES,
            }
        }

        return {
            duration,
            gain: MAX_GAIN,
            pitchIndex,
            sustain: duration - SEPARATION_FOR_NEIGHBORING_NOTES,
        }
    }

export {
    glisNoteType,
    tremNoteType,
    manualNoteType,
}
