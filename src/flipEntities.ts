import calculateDuration from '../../../src/calculateDuration'
import rest from '../../../src/rest'
import { Part, Segment } from './types'

const FLIP_INDEX: number = 3

const flipEntities: (segment: Segment, flippings: boolean[]) => Segment =
    (parts: Segment, flippings: boolean[]): Segment => {
        const output: Segment = []
        parts.forEach((part: Part, index: number): void => {
            if (flippings[index]) {
                output[index] = rest(calculateDuration(part))
                output[index + FLIP_INDEX] = part
            } else {
                output[index] = part
                output[index + FLIP_INDEX] = rest(calculateDuration(part))
            }
        })

        return output
    }

export default flipEntities
