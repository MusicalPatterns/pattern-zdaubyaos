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
    Scalar,
    to,
    translateFromOneIndexedToZeroIndexed,
} from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchDuration>) => Note =
    ([ pitch, duration ]: ContourElement<PitchDuration>): Note => {
        if (pitch === from.Ordinal(STANDARD_PITCH_INDEX_INDICATING_REST)) {
            return {
                duration: {
                    index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
                    scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
                },
                gain: {
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(SILENT),
                },
            }
        }

        return {
            duration: {
                index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gain: {
                scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(FULL_GAIN),
            },
            pitch: {
                index: translateFromOneIndexedToZeroIndexed(to.Ordinal(pitch)),
            },
        }
    }

export {
    computeNote,
}
