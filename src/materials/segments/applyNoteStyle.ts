import { apply } from '@musical-patterns/utilities'
import { ContourWhole, PartSpec } from '../../../../../src'
import { OFFSET_FOR_GAIN_AND_DURATIONS_SCALES } from '../../constants'
import { buildNoteSpec } from '../notes'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexOffset } from './applyPitchIndexOffset'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole, noteStyle: NoteStyle) => PartSpec =
    (contourWhole: ContourWhole, noteStyle: NoteStyle): PartSpec => {
        let part: PartSpec = contourWhole.map(buildNoteSpec)

        const { gainScalar, pitchIndexOffset, scaleIndex } = noteStyle

        if (pitchIndexOffset) {
            part = applyPitchIndexOffset(part, pitchIndexOffset)
        }

        if (gainScalar) {
            part = applyGainScalar(part, gainScalar)
        }

        part = applyScaleIndex(part, apply.Offset(scaleIndex, OFFSET_FOR_GAIN_AND_DURATIONS_SCALES))

        return part
    }

export {
    applyNoteStyle,
}
