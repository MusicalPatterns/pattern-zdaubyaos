import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import sequence from '../../../../src/utilities/sequence'
import * as to from '../../../../src/utilities/to'
import {
    thirtyfiveYaosAccidentInspiredContour,
    thirtyfiveYaosBassContour,
    thirtyfiveZdaubContour,
    thirtyfiveZdaubOnlyWiggleContour,
} from '../contours/thirtyfiveContours'
import { Part } from '../types'
import calculateContourDuration from '../utilities/calculateContourDuration'

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
