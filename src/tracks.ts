import sequence from '../../../src/sequence'
import {
    backboneseasonA,
    backboneseasonB,
    backboneseasonC,
} from './seasons/backbone'
import { breatherFall, breatherRest, breatherSpring, breatherSummer, breatherWinter } from './seasons/breather'
import { trueseasonYetOfBackbone } from './seasons/other'
import {
    shiftyseasonA, shiftyseasonB,
} from './seasons/shifty'
import {
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
} from './seasons/trueYaos'
import {
    trueseasonZdaubBony,
    trueseasonZdaubGlis,
    trueseasonZdaubGlisVariant,
    trueseasonZdaubTrem,
} from './seasons/trueZdaub'
import { Season, Track } from './types'

let zdaubyaosTrackA: Track = []
let zdaubyaosTrackB: Track = []
let zdaubyaosTrackC: Track = []

const seasonTracks: Season[][] = [
    // Season 1
    [
        breatherSpring,
        breatherRest,
        breatherRest,
    ],
    [
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSpringToSummer,
    ],
    [
        trueseasonZdaubGlis,
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonZdaubTrem,
    ],
    // Season 2
    [
        breatherRest,
        breatherSummer,
        breatherRest,
    ],
    [
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosUmowchuwowiestSummerToSpring,
    ],
    [
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonZdaubGlis,
        trueseasonZdaubGlisVariant,
    ],
    [
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
    ],
    // Season 3
    [
        breatherRest,
        breatherRest,
        breatherFall,
    ],
    [
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
        trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    ],
    [
        trueseasonYetOfBackbone,
        trueseasonYetOfBackbone,
        trueseasonZdaubBony,
    ],
    [
        shiftyseasonA,
        shiftyseasonB,
        shiftyseasonB,
    ],
    // Season 4
    [
        breatherWinter,
        breatherWinter,
        breatherWinter,
    ],
    [
        trueseasonYaosUmowchuwowiestSpringToSummer,
        trueseasonYaosUmowchuwowiestSummerToSpring,
        trueseasonYaosInaidjiyaiouzdSummerToSpring,
    ],
    [
        trueseasonZdaubTrem,
        trueseasonZdaubBony,
        trueseasonZdaubGlis,
    ],
    [
        backboneseasonC,
        backboneseasonA,
        backboneseasonB,
    ],
]

seasonTracks.forEach((tracks: Season[]): void => {
    zdaubyaosTrackA = zdaubyaosTrackA.concat(tracks[0])
    zdaubyaosTrackB = zdaubyaosTrackB.concat(tracks[1])
    zdaubyaosTrackC = zdaubyaosTrackC.concat(tracks[2])
})

export {
    zdaubyaosTrackA,
    zdaubyaosTrackB,
    zdaubyaosTrackC,
}
