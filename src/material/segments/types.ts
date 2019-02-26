import { Amplitude, Ordinal, Scalar, Translation } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: Scalar<Amplitude>,
    pitchIndexTranslation?: Translation,
    scaleIndex: Ordinal,
}

export {
    NoteStyle,
}
