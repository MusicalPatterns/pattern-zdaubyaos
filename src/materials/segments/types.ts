import { Index, Offset, Scalar } from '@musical-patterns/utilities'

interface NoteStyle {
    gainScalar?: Scalar,
    pitchIndexOffset?: Offset,
    scaleIndex: Index,
}

export {
    NoteStyle,
}
