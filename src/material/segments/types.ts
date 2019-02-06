import { Ordinal, Scalar, Translation } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: Scalar,
    pitchIndexOffset?: Translation,
    scaleIndex: Ordinal,
}

export {
    NoteStyle,
}
