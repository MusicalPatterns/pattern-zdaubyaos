import {
    FULL_GAIN,
    Note,
    PitchDuration,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    Amplitude,
    as,
    ContourElement,
    insteadOf,
    notAs,
    Scalar,
    translateFromOneIndexedToZeroIndexed,
} from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchDuration>) => Note =
    ([ pitch, duration ]: ContourElement<PitchDuration>): Note => {
        if (pitch === notAs.Ordinal<Scalar[]>(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Scalar[]>(duration)),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: as.Scalar<Scalar>(notAs.NormalScalar<Amplitude>(SILENT)),
                },
            }
        }

        return {
            duration: {
                index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Scalar[]>(duration)),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gain: {
                scalar: insteadOf<Scalar, Scalar>(FULL_GAIN),
            },
            pitch: {
                index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Scalar[]>(pitch)),
            },
        }
    }

export {
    computeNote,
}
