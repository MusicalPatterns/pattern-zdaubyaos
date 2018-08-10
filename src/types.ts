import { Note } from '../../../src/types'
import { Index, Time } from '../../../src/utilities/nominalTypes'
import { Block } from './utilities/nominalTypes'

type Blocks = Block[]

type RenderingFunction = (blocks: Blocks) => Contour

type ContourElement = [Index, Time]

type Contour = ContourElement[]

type Part = Contour

type MakeNote = (contourElement: ContourElement) => Note

type Notes = Note[]

type Segment = Notes[]

type Track = Note[]

export {
    Blocks,
    Notes,
    Part,
    Track,
    RenderingFunction,
    MakeNote,
    Segment,
    ContourElement,
    Contour,
}
