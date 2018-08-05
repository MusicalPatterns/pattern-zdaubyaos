import { Note } from '../../src/types'

const REST: number = 0
const SILENT: number = 0
const MAX_GAIN: number = 1
const SINGLE_DURATION: number = 1
const SEPARATION_FOR_NEIGHBORING_NOTES: number = 0.1
const PLACEHOLDER_PITCH_TO_AVOID_NULL_POINTER_ISSUES: number = 1

const stepwiseForUmowchuwowiestNoteType: (harmonic: number) => Note =
    (harmonic: number): Note => {
        if (harmonic === REST) {
            return {
                duration: SINGLE_DURATION,
                gain: SILENT,
                pitch: PLACEHOLDER_PITCH_TO_AVOID_NULL_POINTER_ISSUES,
                sustain: SINGLE_DURATION - SEPARATION_FOR_NEIGHBORING_NOTES,
            }
        }

        return {
            duration: harmonic,
            gain: MAX_GAIN,
            pitch: harmonic,
            sustain: harmonic - SEPARATION_FOR_NEIGHBORING_NOTES,
        }
    }

const umowchuwowiestNoteType: (harmonic: number) => Note =
    (harmonic: number): Note => ({
        duration: SINGLE_DURATION,
        gain: harmonic === REST ? REST : MAX_GAIN,
        pitch: harmonic === REST ? PLACEHOLDER_PITCH_TO_AVOID_NULL_POINTER_ISSUES : harmonic,
        sustain: SINGLE_DURATION - SEPARATION_FOR_NEIGHBORING_NOTES,
    })

const inbetweenNoteType: (harmonicAndDuration: number[]) => Note =
    ([harmonic, duration]: number[]): Note => ({
        duration,
        gain: MAX_GAIN,
        pitch: harmonic,
        sustain: duration - SEPARATION_FOR_NEIGHBORING_NOTES,
    })

export {
    stepwiseForUmowchuwowiestNoteType,
    umowchuwowiestNoteType,
    inbetweenNoteType,
}
