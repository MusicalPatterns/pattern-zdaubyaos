import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import {
    chuwowFallNotes,
    chuwowSpringNotes,
    chuwowSummerNotes,
    djiyaiSummerNotes,
    iestSpringNotes,
    iestSummerNotes,
    inaiFallNotes,
    inaiSummerNotes,
    ouzdFallNotes,
    ouzdSummerNotes,
    umowSpringNotes,
    umowSummerNotes,
} from '../notes/yaosFifteenNotes'
import {
    chuwowwwFallNotes,
    chuwowwwSpringNotes,
    djiyaiiiFallNotes,
    djiyaiiiSpringNotes,
    djiyaiiiSummerNotes,
} from '../notes/yaosTwentyfourNotes'
import { Season } from '../types'

const trueseasonYaosUmowchuwowiestSpringToSummer: Season = sequence([
    repeat(chuwowSpringNotes, 4),
    iestSpringNotes,
    umowSpringNotes,
    iestSpringNotes,
    umowSpringNotes,
    repeat(djiyaiiiSummerNotes, 4),
])

const trueseasonYaosUmowchuwowiestSummerToSpring: Season = sequence([
    repeat(chuwowSummerNotes, 4),
    iestSummerNotes,
    umowSummerNotes,
    iestSummerNotes,
    umowSummerNotes,
    repeat(djiyaiiiSpringNotes, 4),
])

const trueseasonYaosInaidjiyaiouzdSummerToSpring: Season = sequence([
    repeat(djiyaiSummerNotes, 4),
    ouzdSummerNotes,
    inaiSummerNotes,
    ouzdSummerNotes,
    inaiSummerNotes,
    repeat(chuwowwwSpringNotes, 4),
])

const trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash: Season = sequence([
    repeat(chuwowFallNotes, 4),
    ouzdFallNotes,
    inaiFallNotes,
    ouzdFallNotes,
    inaiFallNotes,
    chuwowwwFallNotes,
    djiyaiiiFallNotes,
    chuwowwwFallNotes,
    djiyaiiiFallNotes,
])

export {
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
}
