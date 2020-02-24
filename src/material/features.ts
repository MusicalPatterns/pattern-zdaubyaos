import { FULL_GAIN, Note, PitchValue, SILENT, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Pitch,
    Scalar,
    translateFromOneIndexedToZeroIndexed,
    Value,
} from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchValue>) => Note =
    ([ pitch, value ]: ContourElement<PitchValue>): Note => {
        if (pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                intensity: {
                    scalar: SILENT,
                },
                value: {
                    index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Value>>>(value)),
                },
            }
        }

        return {
            intensity: {
                scalar: FULL_GAIN,
            },
            pitch: {
                index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Pitch>>>(pitch)),
            },
            value: {
                index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Value>>>(value)),
            },
        }
    }

export {
    computeNote,
}
