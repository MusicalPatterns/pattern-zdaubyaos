import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import {
    yaosFifteenNotesByBlocksThenRendering,
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
    repeat(yaosFifteenNotesByBlocksThenRendering.chuwow.spring, 4),
    yaosFifteenNotesByBlocksThenRendering.iest.spring,
    yaosFifteenNotesByBlocksThenRendering.umow.spring,
    yaosFifteenNotesByBlocksThenRendering.iest.spring,
    yaosFifteenNotesByBlocksThenRendering.umow.spring,
    repeat(djiyaiiiSummerNotes, 4),
])

const trueseasonYaosUmowchuwowiestSummerToSpring: Season = sequence([
    repeat(yaosFifteenNotesByBlocksThenRendering.chuwow.summer, 4),
    yaosFifteenNotesByBlocksThenRendering.iest.summer,
    yaosFifteenNotesByBlocksThenRendering.umow.summer,
    yaosFifteenNotesByBlocksThenRendering.iest.summer,
    yaosFifteenNotesByBlocksThenRendering.umow.summer,
    repeat(djiyaiiiSpringNotes, 4),
])

const trueseasonYaosInaidjiyaiouzdSummerToSpring: Season = sequence([
    repeat(yaosFifteenNotesByBlocksThenRendering.djiyai.summer, 4),
    yaosFifteenNotesByBlocksThenRendering.ouzd.summer,
    yaosFifteenNotesByBlocksThenRendering.inai.summer,
    yaosFifteenNotesByBlocksThenRendering.ouzd.summer,
    yaosFifteenNotesByBlocksThenRendering.inai.summer,
    repeat(chuwowwwSpringNotes, 4),
])

const trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash: Season = sequence([
    repeat(yaosFifteenNotesByBlocksThenRendering.chuwow.fall, 4),
    yaosFifteenNotesByBlocksThenRendering.ouzd.fall,
    yaosFifteenNotesByBlocksThenRendering.inai.fall,
    yaosFifteenNotesByBlocksThenRendering.ouzd.fall,
    yaosFifteenNotesByBlocksThenRendering.inai.fall,
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
