import { NoteSpecs } from '../../../../src/compile/types'
import { Index, Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import { Part, Segment } from '../types'
import applyDurationScalar from './applyDurationScalar'
import applyGainScalar from './applyGainScalar'
import applyPitchIndexOffset from './applyPitchIndexOffset'
import applyScaleIndex from './applyScaleIndex'
import buildNoteSpec from './buildNoteSpec'

interface NoteStyle {
    gainScalar?: Scalar,
    pitchIndexOffset?: Offset,
    scaleIndex: Index,
}

const buildSegment: (parts: Part[], noteStyles: NoteStyle[], songDurationScalar: Scalar) => Segment =
    (parts: Part[], noteStyles: NoteStyle[], songDurationScalar: Scalar): Segment =>
        parts.map((part: Part, index: number): NoteSpecs => {
            let noteSpecs: NoteSpecs = part.map(buildNoteSpec)

            const { gainScalar, pitchIndexOffset, scaleIndex } = noteStyles[index]

            if (pitchIndexOffset) {
                noteSpecs = applyPitchIndexOffset(noteSpecs, pitchIndexOffset)
            }

            if (gainScalar) {
                noteSpecs = applyGainScalar(noteSpecs, gainScalar)
            }

            noteSpecs = applyScaleIndex(noteSpecs, scaleIndex)

            noteSpecs = applyDurationScalar(noteSpecs, songDurationScalar)

            return noteSpecs
        })

export default buildSegment
