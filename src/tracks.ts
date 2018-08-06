// tslint:disable:max-file-line-count

import flipEntities from './flipEntities'
// tslint:disable-next-line:no-unused-variable
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
import { experimentWithIesttt, experimentWithUmowww, trueseasonYetOfBackbone } from './seasons/otherSeasons'
import { shiftyseasonA, shiftyseasonB } from './seasons/shiftySeasons'
import {
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosInaidjiyaiouzdSummerToSpringComplementy,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustment,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
} from './seasons/trueYaosSeasons'
import {
    trueseasonZdaubBonyWithSuperinscape,
    trueseasonZdaubGlis,
    trueseasonZdaubGlisVariant,
    trueseasonZdaubTrem,
} from './seasons/trueZdaubSeasons'
import { Season, Track } from './types'

let zdaubyaosTrackA: Track = []
let zdaubyaosTrackB: Track = []
let zdaubyaosTrackC: Track = []
let zdaubyaosTrackD: Track = []
let zdaubyaosTrackE: Track = []
let zdaubyaosTrackF: Track = []

const seasonTracks: Season[][] = [
    // 0
    flipEntities([
        breatherSpring,
        breatherRest,
        breatherRest,
    ],           [false, false, false]),
    // 1
    flipEntities([
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
    ],           [false, false, false]),
    // 2
    flipEntities([
        trueseasonZdaubGlis,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonZdaubTrem,
    ],           [false, false, false]),
    // 3
    flipEntities([
        breatherRest,
        breatherSummer,
        breatherRest,
    ],           [true, true, false]),
    // 4
    flipEntities([
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
    ],           [true, false, false]),
    // 5
    flipEntities([
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonZdaubGlis,
        trueseasonZdaubGlisVariant,
    ],           [true, false, false]),
    // 6
    flipEntities([
        breatherRest,
        breatherRest,
        breatherFall,
    ],           [false, false, false]),
    // 7
    flipEntities([
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpringComplementy,
        trueseasonYaosInaidjiyaiouzdSummerToSpringComplementy,
    ],           [true, true, true]),
    // 8
    flipEntities([
        breatherRest,
        breatherSpringAlt,
        breatherRest,
    ],           [true, true, true]),
    // 9
    flipEntities([
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustment,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustment,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustment,
    ],           [true, true, true]),
    // 10
    flipEntities([
        trueseasonYetOfBackbone,
        trueseasonYetOfBackbone,
        trueseasonZdaubBonyWithSuperinscape,
    ],           [true, true, true]),
    // 11
    flipEntities([
        shiftyseasonA,
        shiftyseasonB,
        shiftyseasonB,
    ],           [false, false, false]),
    // 12
    flipEntities([
        breatherVariety,
        breatherVariety,
        breatherVariety,
    ],           [false, false, false]),
    // 13
    flipEntities([
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
    ],           [false, false, false]),
    // 14
    flipEntities([
        trueseasonZdaubTrem,
        trueseasonZdaubBonyWithSuperinscape,
        trueseasonZdaubGlis,
    ],           [false, false, false]),
    // 15
    flipEntities([
        backboneseasonC,
        backboneseasonA,
        backboneseasonB,
    ],           [false, false, false]),
    flipEntities([
        experimentWithIesttt,
        experimentWithUmowww,
        experimentWithUmowww,
    ],           [true, false, true]),
]

const START: number = 0
const END: number = seasonTracks.length
const INCLUSIVE: number = 1
const A: number = 0
const B: number = 1
const C: number = 2
const D: number = 3
const E: number = 4
const F: number = 5

seasonTracks.slice(START, END + INCLUSIVE).forEach((tracks: Season[]): void => {
    zdaubyaosTrackA = zdaubyaosTrackA.concat(tracks[A])
    zdaubyaosTrackB = zdaubyaosTrackB.concat(tracks[B])
    zdaubyaosTrackC = zdaubyaosTrackC.concat(tracks[C])
    zdaubyaosTrackD = zdaubyaosTrackD.concat(tracks[D])
    zdaubyaosTrackE = zdaubyaosTrackE.concat(tracks[E])
    zdaubyaosTrackF = zdaubyaosTrackF.concat(tracks[F])
})

// tslint:disable-next-line:no-console comment-format
// console.log(yaosNoteUsagesByDurationBlocksThenRendering)

export {
    zdaubyaosTrackA,
    zdaubyaosTrackB,
    zdaubyaosTrackC,
    zdaubyaosTrackD,
    zdaubyaosTrackE,
    zdaubyaosTrackF,
}
