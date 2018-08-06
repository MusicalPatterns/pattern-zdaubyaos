// tslint:disable:max-file-line-count align

import repeatCall from '../../../../src/repeatCall'
import sequence from '../../../../src/sequence'
import adjustGain from '../adjustGain'
import adjustPitchIndex from '../adjustPitchIndex'
import getYaosNotes from '../notes/getYaosNotes'
import { Season } from '../types'

const trueseasonYaosUmowchuwowiestSpringToSummer: Season = sequence([
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
    }), 1), 1.25), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 0.5), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 1.25), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 0.75), 0),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'summer',
    }), 4), 1), 0),
])

const trueseasonYaosUmowchuwowiestSummerToSpring: Season = sequence([
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

const trueseasonYaosInaidjiyaiouzdSummerToSpring: Season = sequence([
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

const trueseasonYaosInaidjiyaiouzdSummerToSpringComplementy: Season = sequence([
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

const trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustment: Season = sequence([
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'fall',
    }), 4), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 2),
    adjustPitchIndex(adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1), 1), 2),
])

export {
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustment,
    trueseasonYaosInaidjiyaiouzdSummerToSpringComplementy,
}
