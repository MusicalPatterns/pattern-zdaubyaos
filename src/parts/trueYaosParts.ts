// tslint:disable:max-file-line-count align

import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import getYaosNotes from '../notes/getYaosNotes'
import { Part } from '../types'

const trueYaosUmowchuwowiestSpringToSummerPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'fifteen', 'spring'), 4),
    repeatCall(() => getYaosNotes('highregular', 'umowchuwowiest', 'fifteen', 'spring'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'umowchuwowiest', 'fifteen', 'spring'), 1),
    repeatCall(() => getYaosNotes('highregular', 'umowchuwowiest', 'fifteen', 'spring'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'umowchuwowiest', 'fifteen', 'spring'), 1),
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'twentyfour', 'summer'), 4),
])

const trueYaosUmowchuwowiestSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'fifteen', 'summer'), 4),
    repeatCall(() => getYaosNotes('highregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('highregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'umowchuwowiest', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'twentyfour', 'spring'), 4),
])

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes('midirregular', 'inaidjiyaiouzd', 'fifteen', 'summer'), 4),
    repeatCall(() => getYaosNotes('highregular', 'inaidjiyaiouzd', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'inaidjiyaiouzd', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('highregular', 'inaidjiyaiouzd', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('lowregular', 'inaidjiyaiouzd', 'fifteen', 'summer'), 1),
    repeatCall(() => getYaosNotes('midirregular', 'umowchuwowiest', 'twentyfour', 'spring'), 4),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
}
