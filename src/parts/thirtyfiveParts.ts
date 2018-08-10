import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import sequence from '../../../../src/utilities/sequence'
import {
    thirtyfiveYaosAccidentInspiredContour,
    thirtyfiveYaosBassContour,
    thirtyfiveZdaubContour,
    thirtyfiveZdaubOnlyWiggleContour,
} from '../contours/thirtyfiveContours'
import { Part } from '../types'
import calculateContourDuration from '../utilities/calculateContourDuration'

const thirtyfiveYaosBassPart: Part = sequence([
    repeat(thirtyfiveYaosBassContour, 30),
])

const thirtyfiveYaosAccidentInspiredPart: Part = sequence([
    repeat(thirtyfiveYaosAccidentInspiredContour, 30),
])

const thirtyfiveZdaubPart: Part = sequence([
    rest(calculateContourDuration(thirtyfiveZdaubContour)),
    repeat(thirtyfiveZdaubContour, 2),
    repeat(thirtyfiveZdaubOnlyWiggleContour, 12),
])

export {
    thirtyfiveYaosBassPart,
    thirtyfiveYaosAccidentInspiredPart,
    thirtyfiveZdaubPart,
}
