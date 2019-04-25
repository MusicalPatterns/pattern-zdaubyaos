import { Scale } from '@musical-patterns/material'
import { Amplitude, Cardinal, Ordinal, Pitch, Scalar, UnitScalar } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: UnitScalar<Amplitude>,
    pitchIndexShift?: Cardinal<Ordinal<Array<Scalar<Pitch>>>>,
    scaleIndex: Ordinal<Array<Scale<Pitch>>>,
}

export {
    NoteStyle,
}
