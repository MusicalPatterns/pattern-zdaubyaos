import { Scale } from '@musical-patterns/material'
import { Gain, NormalScalar, Ordinal, Pitch, Scalar, Transition } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: NormalScalar<Gain>,
    pitchIndexShift?: Transition<Array<Scalar<Pitch>>>,
    scaleIndex: Ordinal<Array<Scale<Pitch>>>,
}

export {
    NoteStyle,
}
