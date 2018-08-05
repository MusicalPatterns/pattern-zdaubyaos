import {
    PLACEHOLDER_PITCH_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
    SILENT,
} from '../../../src/constants'
import { Note } from '../../../src/types'

const REST: number = 0
const MAX_GAIN: number = 1
const SINGLE_DURATION: number = 1

const singleRest: Note = {
    duration: SINGLE_DURATION,
    gain: SILENT,
    pitch: PLACEHOLDER_PITCH_TO_AVOID_NULL_POINTER_ISSUES,
    sustain: SINGLE_DURATION - SEPARATION_FOR_NEIGHBORING_NOTES,
}

const glisNoteType: (_: number) => Note =
    (pitch: number): Note => {
        if (pitch === REST) return singleRest

        return {
            duration: pitch,
            gain: MAX_GAIN,
            pitch,
            sustain: pitch - SEPARATION_FOR_NEIGHBORING_NOTES,
        }
    }

const tremNoteType: (_: number) => Note =
    (pitch: number): Note => {
        if (pitch === REST) return singleRest

        return {
            duration: SINGLE_DURATION,
            gain: MAX_GAIN,
            pitch,
            sustain: SINGLE_DURATION - SEPARATION_FOR_NEIGHBORING_NOTES,
        }
    }

const manualNoteType: (_: number[]) => Note =
    ([pitch, duration]: number[]): Note => {
        if (pitch === REST) return singleRest

        return {
            duration,
            gain: MAX_GAIN,
            pitch,
            sustain: duration - SEPARATION_FOR_NEIGHBORING_NOTES,
        }
    }

export {
    glisNoteType,
    tremNoteType,
    manualNoteType,
}
