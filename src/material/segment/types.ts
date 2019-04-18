import { Scale } from '@musical-patterns/material'
import { Amplitude, Ordinal, Scalar, Translation } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: Scalar<Amplitude>,
    pitchIndexTranslation?: Translation<Ordinal<Scalar>>,
    scaleIndex: Ordinal<Scale>,
}

export {
    NoteStyle,
}
