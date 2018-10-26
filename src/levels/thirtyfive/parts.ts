import { repeat, sequence, to } from '../../../../../src'
import { rest } from '../../rest'
import { Part } from '../../types'
import { calculateContourDuration } from '../../utilities'
import {
    thirtyfiveYaosAccidentInspiredContour,
    thirtyfiveYaosBassContour,
    thirtyfiveZdaubContour,
    thirtyfiveZdaubOnlyWiggleContour,
} from './contours'

const thirtyfiveYaosBassPart: Part = sequence([
    repeat(thirtyfiveYaosBassContour, to.Count(30)),
])

const thirtyfiveYaosAccidentInspiredPart: Part = sequence([
    repeat(thirtyfiveYaosAccidentInspiredContour, to.Count(30)),
])

const thirtyfiveZdaubPart: Part = sequence([
    rest(calculateContourDuration(thirtyfiveZdaubContour)),
    repeat(thirtyfiveZdaubContour, to.Count(2)),
    repeat(thirtyfiveZdaubOnlyWiggleContour, to.Count(12)),
])

export {
    thirtyfiveYaosBassPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveZdaubPart,
}
