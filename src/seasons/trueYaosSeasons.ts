import repeat from '../../../../src/repeat'
import sequence from '../../../../src/sequence'
import { yaosNotesByDurationBlocksThenRendering } from '../notes/yaosNotes'
import { Season } from '../types'

const trueseasonYaosUmowchuwowiestSpringToSummer: Season = sequence([
    repeat(yaosNotesByDurationBlocksThenRendering.fifteen.chuwow.spring, 4),
    yaosNotesByDurationBlocksThenRendering.fifteen.iest.spring,
    yaosNotesByDurationBlocksThenRendering.fifteen.umow.spring,
    yaosNotesByDurationBlocksThenRendering.fifteen.iest.spring,
    yaosNotesByDurationBlocksThenRendering.fifteen.umow.spring,
    repeat(yaosNotesByDurationBlocksThenRendering.twentyfour.djiyaiii.summer, 4),
])

const trueseasonYaosUmowchuwowiestSummerToSpring: Season = sequence([
    repeat(yaosNotesByDurationBlocksThenRendering.fifteen.chuwow.summer, 4),
    yaosNotesByDurationBlocksThenRendering.fifteen.iest.summer,
    yaosNotesByDurationBlocksThenRendering.fifteen.umow.summer,
    yaosNotesByDurationBlocksThenRendering.fifteen.iest.summer,
    yaosNotesByDurationBlocksThenRendering.fifteen.umow.summer,
    repeat(yaosNotesByDurationBlocksThenRendering.twentyfour.djiyaiii.spring, 4),
])

const trueseasonYaosInaidjiyaiouzdSummerToSpring: Season = sequence([
    repeat(yaosNotesByDurationBlocksThenRendering.fifteen.djiyai.summer, 4),
    yaosNotesByDurationBlocksThenRendering.fifteen.ouzd.summer,
    yaosNotesByDurationBlocksThenRendering.fifteen.inai.summer,
    yaosNotesByDurationBlocksThenRendering.fifteen.ouzd.summer,
    yaosNotesByDurationBlocksThenRendering.fifteen.inai.summer,
    repeat(yaosNotesByDurationBlocksThenRendering.twentyfour.chuwowww.spring, 4),
])

const trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash: Season = sequence([
    repeat(yaosNotesByDurationBlocksThenRendering.fifteen.chuwow.fall, 4),
    yaosNotesByDurationBlocksThenRendering.fifteen.ouzd.fall,
    yaosNotesByDurationBlocksThenRendering.fifteen.inai.fall,
    yaosNotesByDurationBlocksThenRendering.fifteen.ouzd.fall,
    yaosNotesByDurationBlocksThenRendering.fifteen.inai.fall,
    yaosNotesByDurationBlocksThenRendering.twentyfour.chuwowww.fall,
    yaosNotesByDurationBlocksThenRendering.twentyfour.djiyaiii.fall,
    yaosNotesByDurationBlocksThenRendering.twentyfour.chuwowww.fall,
    yaosNotesByDurationBlocksThenRendering.twentyfour.djiyaiii.fall,
])

export {
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
}
