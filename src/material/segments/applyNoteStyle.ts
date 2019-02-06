import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDuration } from '@musical-patterns/pattern'
import { apply, ContourWhole } from '@musical-patterns/utilities'
import { TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES } from '../../constants'
import { buildNoteSpec } from '../notes'
import { applyGainScalar } from './applyGainScalar'
import { applyPitchIndexTranslation } from './applyPitchIndexTranslation'
import { applyScaleIndex } from './applyScaleIndex'
import { NoteStyle } from './types'

const applyNoteStyle: (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle) => NoteSpec[] =
    (contourWhole: ContourWhole<PitchDuration>, noteStyle: NoteStyle): NoteSpec[] => {
        let part: NoteSpec[] = contourWhole.map(buildNoteSpec)

        const { gainScalar, pitchIndexTranslation, scaleIndex } = noteStyle

        if (pitchIndexTranslation) {
            part = applyPitchIndexTranslation(part, pitchIndexTranslation)
        }

        if (gainScalar) {
            part = applyGainScalar(part, gainScalar)
        }

        part = applyScaleIndex(part, apply.Translation(scaleIndex, TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES))

        return part
    }

export {
    applyNoteStyle,
}
