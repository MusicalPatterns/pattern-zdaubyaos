import { Ordinal, Scalar, Translation } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: Scalar,
    pitchIndexTranslation?: Translation,
    scaleIndex: Ordinal,
}

export {
    NoteStyle,
}
