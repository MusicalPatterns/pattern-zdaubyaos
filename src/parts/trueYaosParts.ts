// tslint:disable:max-file-line-count align

import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import adjustGain from '../alterations/adjustGain'
import adjustPitchIndex from '../alterations/adjustPitchIndex'
import getYaosNotes from '../notes/getYaosNotes'
import { Part } from '../types'

const trueYaosUmowchuwowiestSpringToSummerPart: Part = sequence([
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 4), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'summer',
    }), 4), 1), 0),
])

const trueYaosUmowchuwowiestSummerToSpringPart: Part = sequence([
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 4), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'spring',
    }), 4), 1), 0),
])

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = sequence([
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 4), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'spring',
    }), 4), 1), 0),
])

const trueYaosInaidjiyaiouzdSummerToSpringComplementyPart: Part = sequence([
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 4), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'summerySpring',
    }), 4), 1), 0),
])

const trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'fall',
    }), 4), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 0),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
}
