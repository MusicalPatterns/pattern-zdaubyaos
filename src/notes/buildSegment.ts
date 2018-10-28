import { NoteSpec, Scalar } from '../../../../src'
import { Part, Segment } from '../types'
import { applyDurationScalar } from './applyDurationScalar'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexOffset } from './applyPitchIndexOffset'
import { applyScaleIndex } from './applyScaleIndex'
import { buildNoteSpec } from './note'
import { NoteStyle } from './types'

const buildSegment: (parts: Part[], noteStyles: NoteStyle[], songDurationScalar: Scalar) => Segment =
    (parts: Part[], noteStyles: NoteStyle[], songDurationScalar: Scalar): Segment =>
        parts.map((part: Part, index: number): NoteSpec[] => {
            let noteSpecs: NoteSpec[] = part.map(buildNoteSpec)

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

export {
    buildSegment,
}
