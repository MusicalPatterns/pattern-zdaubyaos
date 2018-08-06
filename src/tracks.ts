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
import flipEntities from './flipEntities'

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
    ], [true, true, true]),
    // 1
    flipEntities([
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
    ], [true, true, true]),
    // 2
    flipEntities([
        trueseasonZdaubGlis,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonZdaubTrem,
    ], [true, true, true]),
    // 3
    flipEntities([
        breatherRest,
        breatherSummer,
        breatherRest,
    ], [true, true, false]),
    // 4
    flipEntities([
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
    ], [true, false, false]),
    // 5
    flipEntities([
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonZdaubGlis,
        trueseasonZdaubGlisVariant,
    ], [true, false, false]),
    // 6
    flipEntities([
        breatherRest,
        breatherRest,
        breatherFall,
    ], [false, false, false]),
    // 7
    flipEntities([
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
    ], [false, false, false]),
    // 8
    flipEntities([
        breatherRest,
        breatherSpringAlt,
        breatherRest,
    ], [false, false, false]),
    // 9
    flipEntities([
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    ], [false, false, false]),
    // 10
    flipEntities([
        trueseasonYetOfBackbone,
        trueseasonYetOfBackbone,
        trueseasonZdaubBony,
    ], [false, false, false]),
    // 11
    flipEntities([
        shiftyseasonA,
        shiftyseasonB,
        shiftyseasonB,
    ], [false, false, false]),
    // 12
    flipEntities([
        breatherVariety,
        breatherVariety,
        breatherVariety,
    ], [false, false, false]),
    // 13
    flipEntities([
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
    ], [false, false, false]),
    // 14
    flipEntities([
        trueseasonZdaubTrem,
        trueseasonZdaubBony,
        trueseasonZdaubGlis,
    ], [false, false, false]),
    // 15
    flipEntities([
        backboneseasonC,
        backboneseasonA,
        backboneseasonB,
    ], [false, false, false]),
]

const START: number = 4
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

// tslint:disable-next-line:no-console
console.log(yaosNoteUsagesByDurationBlocksThenRendering)

export {
    zdaubyaosTrackA,
    zdaubyaosTrackB,
    zdaubyaosTrackC,
    zdaubyaosTrackD,
    zdaubyaosTrackE,
    zdaubyaosTrackF,
}
