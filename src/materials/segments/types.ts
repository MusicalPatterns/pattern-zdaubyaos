import { Index, Offset, Scalar } from '@musical-patterns/shared'

interface NoteStyle {
    gainScalar?: Scalar,
    pitchIndexOffset?: Offset,
    scaleIndex: Index,
}

export {
    NoteStyle,
}
