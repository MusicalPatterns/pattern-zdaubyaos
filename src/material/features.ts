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
    ContourElement,
    from,
    insteadOf,
    Scalar,
    to,
    translateFromOneIndexedToZeroIndexed,
} from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchDuration>) => Note =
    ([ pitch, duration ]: ContourElement<PitchDuration>): Note => {
        if (pitch === from.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    index: translateFromOneIndexedToZeroIndexed(to.Ordinal<Scalar>(duration)),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: to.Scalar<Scalar>(from.NormalScalar<Amplitude>(SILENT)),
                },
            }
        }

        return {
            duration: {
                index: translateFromOneIndexedToZeroIndexed(to.Ordinal<Scalar>(duration)),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gain: {
                scalar: insteadOf<Scalar, Scalar>(FULL_GAIN),
            },
            pitch: {
                index: translateFromOneIndexedToZeroIndexed(to.Ordinal<Scalar>(pitch)),
            },
        }
    }

export {
    computeNote,
}
