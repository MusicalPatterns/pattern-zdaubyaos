import { Scale } from '@musical-patterns/material'
import { Amplitude, Cardinal, NormalScalar, Ordinal, Pitch, Scalar } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: NormalScalar<Amplitude>,
    pitchIndexShift?: Cardinal<Ordinal<Array<Scalar<Pitch>>>>,
    scaleIndex: Ordinal<Array<Scale<Pitch>>>,
}

export {
    NoteStyle,
}
