import { Scale } from '@musical-patterns/material'
import { Intensity, NormalScalar, Ordinal, Pitch, Scalar, Transition } from '@musical-patterns/utilities'

interface NoteStyle {
    intensityScalar?: NormalScalar<Intensity>,
    pitchIndexShift?: Transition<Array<Scalar<Pitch>>>,
    scaleIndex?: Ordinal<Array<Scale<Pitch>>>,
}

export {
    NoteStyle,
}
