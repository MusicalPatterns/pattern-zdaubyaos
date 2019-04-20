import { Scale } from '@musical-patterns/material'
import { Amplitude, NormalScalar, Ordinal, Scalar, Translation } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: NormalScalar<Amplitude>,
    pitchIndexTranslation?: Translation<Ordinal<Scalar>>,
    scaleIndex: Ordinal<Scale>,
}

export {
    NoteStyle,
}
