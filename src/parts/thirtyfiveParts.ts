import rest from '../../../../src/rest'
import repeat from '../../../../src/utilities/repeat'
import sequence from '../../../../src/utilities/sequence'
import calculateContourDuration from '../contours/calculateContourDuration'
import {
    thirtyfiveYaosAccidentInspiredContour,
    thirtyfiveYaosBassContour,
    thirtyfiveZdaubContour,
    thirtyfiveZdaubOnlyWiggleContour,
} from '../contours/thirtyfiveContours'
import { Part } from '../types'

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
