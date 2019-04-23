import { Scale } from '@musical-patterns/material'
import { Amplitude, Cardinal, NormalScalar, Ordinal, Scalar } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: NormalScalar<Amplitude>,
    pitchIndexShift?: Cardinal<Ordinal<Scalar[]>>,
    scaleIndex: Ordinal<Scale[]>,
}

export {
    NoteStyle,
}
