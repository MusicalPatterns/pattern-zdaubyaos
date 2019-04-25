import { Scale } from '@musical-patterns/material'
import { Gain, Ordinal, Pitch, Scalar, Transition, UnitScalar } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: UnitScalar<Gain>,
    pitchIndexShift?: Transition<Array<Scalar<Pitch>>>,
    scaleIndex: Ordinal<Array<Scale<Pitch>>>,
}

export {
    NoteStyle,
}
