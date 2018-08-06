// tslint:disable:max-file-line-count align

import repeatCall from '../../../../src/repeatCall'
import sequence from '../../../../src/sequence'
import adjustGain from '../adjustGain'
import getYaosNotes from '../notes/getYaosNotes'
import { Season } from '../types'

const trueseasonYaosUmowchuwowiestSpringToSummer: Season = sequence([
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 4)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 1.25),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 0.5),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 1.25),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1), 0.75),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'summer',
    }), 4)),
])

const trueseasonYaosUmowchuwowiestSummerToSpring: Season = sequence([
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 4)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'spring',
    }), 4)),
])

const trueseasonYaosInaidjiyaiouzdSummerToSpring: Season = sequence([
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 4)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'spring',
    }), 4)),
])

const trueseasonYaosInaidjiyaiouzdSummerToSpringComplementy: Season = sequence([
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 4)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'summerySpring',
    }), 4)),
])

const trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash: Season = sequence([
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'fall',
    }), 4)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1)),
    adjustGain(repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1)),
])

export {
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    trueseasonYaosInaidjiyaiouzdSummerToSpringComplementy,
}
