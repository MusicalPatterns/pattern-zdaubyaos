import { Note } from '../../../src/types'
import { Index, Time } from '../../../src/utilities/nominalTypes'
import { Block, ContourElement } from './utilities/nominalTypes'

type Blocks = Block[]

type Contour = ContourElement[]

type Notes = Note[]

type Part = Note[]

type Track = Note[]

type RenderingFunction = (blocks: Blocks) => Contour | ManualContour

type NoteType = (contourElement: ContourElement) => Note

type ManualNoteType = (manualContourElement: ManualContourElement) => Note

type Segment = Part[]

type ManualContourElement = [Index, Time]

type ManualContour = ManualContourElement[]

export {
    Blocks,
    Contour,
    Notes,
    Part,
    Track,
    RenderingFunction,
    NoteType,
    ManualNoteType,
    Segment,
    ManualContourElement,
    ManualContour,
}
