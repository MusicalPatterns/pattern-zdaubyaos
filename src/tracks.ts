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
import { Track } from './types'

const zdaubyaosOneNotes: Track = sequence([
    // Season 1
    breatherSpring,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonZdaubGlis,
    // Season 2
    breatherRest,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    // Season 3
    breatherRest,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    trueseasonYetOfBackbone,
    shiftyseasonA,
    // Season 4
    breatherRest,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonZdaubTrem,
    backboneseasonC,
])

const zdaubyaosTwoNotes: Track = sequence([
    // Season 1
    breatherRest,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    // Season 2
    breatherSummer,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonZdaubGlis,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    // Season 3
    breatherRest,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    trueseasonYetOfBackbone,
    shiftyseasonB,
    // Season 4
    breatherRest,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonZdaubBony,
    backboneseasonA,
])

const zdaubyaosThreeNotes: Track = sequence([
    // Season 1
    breatherRest,
    trueseasonYaosUmowchuwowiestSpringToSummer,
    trueseasonZdaubTrem,
    // Season 2
    breatherRest,
    trueseasonYaosUmowchuwowiestSummerToSpring,
    trueseasonZdaubGlisVariant,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    // Season 3
    breatherFall,
    trueseasonYaosUmowchuwowiestFallWithDjiyaiiiSplash,
    trueseasonZdaubBony,
    shiftyseasonB,
    // Season 4
    breatherWinter,
    trueseasonYaosInaidjiyaiouzdSummerToSpring,
    trueseasonZdaubGlis,
    backboneseasonB,
])

export {
    zdaubyaosOneNotes,
    zdaubyaosTwoNotes,
    zdaubyaosThreeNotes,
}
