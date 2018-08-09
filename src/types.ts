import { Note } from '../../../src/types'
import { Index, Time } from '../../../src/utilities/nominalTypes'
import { Block } from './utilities/nominalTypes'

type Blocks = Block[]

type Notes = Note[]

type Part = Note[]

type Track = Note[]

type RenderingFunction = (blocks: Blocks) => Contour

type MakeNote = (contourElement: ContourElement) => Note

type Segment = Part[]

type ContourElement = [Index, Time]

type Contour = ContourElement[]

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
