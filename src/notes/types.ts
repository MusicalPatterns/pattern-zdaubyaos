import { Index, Offset, Scalar } from '../../../../src'
import { Segment } from '../types'

interface SegmentsObject { [ index: string ]: Segment }

interface NoteStyle {
    gainScalar?: Scalar,
    pitchIndexOffset?: Offset,
    scaleIndex: Index,
}

export {
    SegmentsObject,
    NoteStyle,
}
