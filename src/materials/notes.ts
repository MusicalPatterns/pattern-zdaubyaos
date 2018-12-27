import { NoteSpec } from '@musical-patterns/compiler'
import { DEFAULT_DURATIONS_SCALE_INDEX, FULL_GAIN, unpackStandardContourElement } from '@musical-patterns/pattern'
import { ContourElement, from, offsetFromOneIndexedToZeroIndexed, to } from '@musical-patterns/utilities'
import { PITCH_INDEX_INDICATING_REST } from '../constants'
import { BuildNoteSpec, ZdaubyaosContour } from '../types'

const buildNoteSpec: BuildNoteSpec =
    (contourElement: ContourElement<ZdaubyaosContour>): NoteSpec => {
        const { pitch, duration } = unpackStandardContourElement(contourElement)

        if (pitch === from.Index(PITCH_INDEX_INDICATING_REST)) {
            return {
                durationSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                    scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: to.Scalar(0),
                },
            }
        }

        return {
            durationSpec: {
                index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: FULL_GAIN,
            },
            pitchSpec: {
                index: offsetFromOneIndexedToZeroIndexed(to.Index(pitch)),
            },
        }
    }

export {
    buildNoteSpec,
}
