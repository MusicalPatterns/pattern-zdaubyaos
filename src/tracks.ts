// tslint:disable:max-file-line-count

import { yaosNoteUsagesByDurationBlocksThenRendering } from './notes/getYaosNotes'
import { backboneseasonA, backboneseasonB, backboneseasonC } from './seasons/backboneSeasons'
import {
    breatherFall,
    breatherRest,
    breatherSpring,
    breatherSpringAlt,
    breatherSummer,
    breatherVariety,
} from './seasons/breatherSeasons'
import { trueseasonYetOfBackbone } from './seasons/otherSeasons'
import { shiftyseasonA, shiftyseasonB } from './seasons/shiftySeasons'
import {
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
} from './seasons/trueYaosSeasons'
import {
    trueseasonZdaubBony,
    trueseasonZdaubGlis,
    trueseasonZdaubGlisVariant,
    trueseasonZdaubTrem,
} from './seasons/trueZdaubSeasons'
import { Season, Track } from './types'

let zdaubyaosTrackA: Track = []
let zdaubyaosTrackB: Track = []
let zdaubyaosTrackC: Track = []

const seasonTracks: Season[][] = [
    // 0
    [
        breatherSpring,
        breatherRest,
        breatherRest,
    ],
    // 1
    [
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
    ],
    // 2
    [
        trueseasonZdaubGlis,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonZdaubTrem,
    ],
    // 3
    [
        breatherRest,
        breatherSummer,
        breatherRest,
    ],
    // 4
    [
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
    ],
    // 5
    [
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonZdaubGlis,
        trueseasonZdaubGlisVariant,
    ],
    // 6
    [
        breatherRest,
        breatherRest,
        breatherFall,
    ],
    // 7
    [
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
    ],
    // 8
    [
        breatherRest,
        breatherSpringAlt,
        breatherRest,
    ],
    // 9
    [
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    ],
    // 10
    [
        trueseasonYetOfBackbone,
        trueseasonYetOfBackbone,
        trueseasonZdaubBony,
    ],
    // 11
    [
        shiftyseasonA,
        shiftyseasonB,
        shiftyseasonB,
    ],
    // 12
    [
        breatherVariety,
        breatherVariety,
        breatherVariety,
    ],
    // 13
    [
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
    ],
    // 14
    [
        trueseasonZdaubTrem,
        trueseasonZdaubBony,
        trueseasonZdaubGlis,
    ],
    // 15
    [
        backboneseasonC,
        backboneseasonA,
        backboneseasonB,
    ],
]

const START: number = 0
const END: number = seasonTracks.length
const INCLUSIVE: number = 1
const A: number = 0
const B: number = 1
const C: number = 2

seasonTracks.slice(START, END + INCLUSIVE).forEach((tracks: Season[]): void => {
    zdaubyaosTrackA = zdaubyaosTrackA.concat(tracks[A])
    zdaubyaosTrackB = zdaubyaosTrackB.concat(tracks[B])
    zdaubyaosTrackC = zdaubyaosTrackC.concat(tracks[C])
})

// tslint:disable-next-line:no-console
console.log(yaosNoteUsagesByDurationBlocksThenRendering)

export {
    zdaubyaosTrackA,
    zdaubyaosTrackB,
    zdaubyaosTrackC,
}
