import { Scale } from '@musical-patterns/material'
import { Cardinal, Gain, Ordinal, Pitch, Scalar, UnitScalar } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: UnitScalar<Gain>,
    pitchIndexShift?: Cardinal<Ordinal<Array<Scalar<Pitch>>>>,
    scaleIndex: Ordinal<Array<Scale<Pitch>>>,
}

export {
    NoteStyle,
}
