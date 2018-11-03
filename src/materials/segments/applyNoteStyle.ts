import { applyOffset, Part } from '../../../../../src'
import { OFFSET_FOR_GAIN_AND_DURATIONS_SCALES } from '../../constants'
import { ContourWhole } from '../../types'
import { buildNoteSpec } from '../notes'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexOffset } from './applyPitchIndexOffset'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole, noteStyle: NoteStyle) => Part =
    (contourWhole: ContourWhole, noteStyle: NoteStyle): Part => {
        let part: Part = contourWhole.map(buildNoteSpec)

        const { gainScalar, pitchIndexOffset, scaleIndex } = noteStyle

        if (pitchIndexOffset) {
            part = applyPitchIndexOffset(part, pitchIndexOffset)
        }

        if (gainScalar) {
            part = applyGainScalar(part, gainScalar)
        }

        part = applyScaleIndex(part, applyOffset(scaleIndex, OFFSET_FOR_GAIN_AND_DURATIONS_SCALES))

        return part
    }

export {
    applyNoteStyle,
}
