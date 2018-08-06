import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import { yaosFifteenNotesByBlocksThenRendering } from '../notes/yaosFifteenNotes'
import { yaosTwentyfourNotesByBlocksThenRendering } from '../notes/yaosTwentyfourNotes'
import { Season } from '../types'

const trueseasonYaosUmowchuwowiestSpringToSummer: Season = sequence([
    repeat(yaosFifteenNotesByBlocksThenRendering.chuwow.spring, 4),
    yaosFifteenNotesByBlocksThenRendering.iest.spring,
    yaosFifteenNotesByBlocksThenRendering.umow.spring,
    yaosFifteenNotesByBlocksThenRendering.iest.spring,
    yaosFifteenNotesByBlocksThenRendering.umow.spring,
    repeat(yaosTwentyfourNotesByBlocksThenRendering.djiyaiii.summer, 4),
])

const trueseasonYaosUmowchuwowiestSummerToSpring: Season = sequence([
    repeat(yaosFifteenNotesByBlocksThenRendering.chuwow.summer, 4),
    yaosFifteenNotesByBlocksThenRendering.iest.summer,
    yaosFifteenNotesByBlocksThenRendering.umow.summer,
    yaosFifteenNotesByBlocksThenRendering.iest.summer,
    yaosFifteenNotesByBlocksThenRendering.umow.summer,
    repeat(yaosTwentyfourNotesByBlocksThenRendering.djiyaiii.spring, 4),
])

const trueseasonYaosInaidjiyaiouzdSummerToSpring: Season = sequence([
    repeat(yaosFifteenNotesByBlocksThenRendering.djiyai.summer, 4),
    yaosFifteenNotesByBlocksThenRendering.ouzd.summer,
    yaosFifteenNotesByBlocksThenRendering.inai.summer,
    yaosFifteenNotesByBlocksThenRendering.ouzd.summer,
    yaosFifteenNotesByBlocksThenRendering.inai.summer,
    repeat(yaosTwentyfourNotesByBlocksThenRendering.chuwowww.spring, 4),
])

const trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash: Season = sequence([
    repeat(yaosFifteenNotesByBlocksThenRendering.chuwow.fall, 4),
    yaosFifteenNotesByBlocksThenRendering.ouzd.fall,
    yaosFifteenNotesByBlocksThenRendering.inai.fall,
    yaosFifteenNotesByBlocksThenRendering.ouzd.fall,
    yaosFifteenNotesByBlocksThenRendering.inai.fall,
    yaosTwentyfourNotesByBlocksThenRendering.chuwowww.fall,
    yaosTwentyfourNotesByBlocksThenRendering.djiyaiii.fall,
    yaosTwentyfourNotesByBlocksThenRendering.chuwowww.fall,
    yaosTwentyfourNotesByBlocksThenRendering.djiyaiii.fall,
])

export {
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
}
