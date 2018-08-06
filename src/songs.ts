import { Song } from '../../../src/types'
import {
    zdaubyaosDubparticularSaw,
    zdaubyaosDuperparticularSaw,
    zdaubyaosHarmonicSine,
    zdaubyaosSubharmonicSine,
    zdaubyaosSubparticularSquare,
    zdaubyaosSuperparticularSquare,
} from './entities'

const zdaubyaos: Song = [
    zdaubyaosSuperparticularSquare,
    zdaubyaosDuperparticularSaw,
    zdaubyaosSubharmonicSine,
    zdaubyaosDubparticularSaw,
    zdaubyaosHarmonicSine,
    zdaubyaosSubparticularSquare,
]

// tslint:disable-next-line:no-console
// Console.log(zdaubyaos)

export {
    zdaubyaos,
}
