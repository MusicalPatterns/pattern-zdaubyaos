import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDuration } from '@musical-patterns/pattern'
import { apply, ContourWhole } from '@musical-patterns/utilities'
import { OFFSET_FOR_GAIN_AND_DURATIONS_SCALES } from '../../constants'
import { buildNoteSpec } from '../notes'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexOffset } from './applyPitchIndexOffset'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle) => NoteSpec[] =
    (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle): NoteSpec[] => {
        let part: NoteSpec[] = contourWhole.map(buildNoteSpec)

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
