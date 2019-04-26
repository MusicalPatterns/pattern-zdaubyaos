import {
    FULL_GAIN,
    Note,
    PitchDuration,
    SILENT,
    STANDARD_DURATION_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Duration,
    Pitch,
    Scalar,
    translateFromOneIndexedToZeroIndexed,
} from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchDuration>) => Note =
    ([ pitch, duration ]: ContourElement<PitchDuration>): Note => {
        if (pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Duration>>>(duration)),
                    scaleIndex: STANDARD_DURATION_SCALE_INDEX,
                },
                gain: {
                    scalar: SILENT,
                },
            }
        }

        return {
            duration: {
                index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Duration>>>(duration)),
                scaleIndex: STANDARD_DURATION_SCALE_INDEX,
            },
            gain: {
                scalar: FULL_GAIN,
            },
            pitch: {
                index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Pitch>>>(pitch)),
            },
        }
    }

export {
    computeNote,
}
