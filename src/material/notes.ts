import { NoteSpec } from '@musical-patterns/compiler'
import {
    FULL_GAIN,
    PitchDuration, SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    unpackPitchDurationContourElement,
} from '@musical-patterns/pattern'
import { ContourElement, from, to, translateFromOneIndexedToZeroIndexed } from '@musical-patterns/utilities'
import { BuildNoteSpec } from './types'

const buildNoteSpec: BuildNoteSpec =
    (contourElement: ContourElement<PitchDuration>): NoteSpec => {
        const { pitch, duration } = unpackPitchDurationContourElement(contourElement)

        if (pitch === from.Ordinal(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                durationSpec: {
                    index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: SILENT,
                },
            }
        }

        return {
            durationSpec: {
                index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: FULL_GAIN,
            },
            pitchSpec: {
                index: translateFromOneIndexedToZeroIndexed(to.Ordinal(pitch)),
            },
        }
    }

export {
    buildNoteSpec,
}
