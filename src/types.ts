import { Note } from '../../../src/types'

type Blocks = number[]

type Contour = number[]

type Notes = Note[]

type Part = Note[]

type Track = Note[]

type Rendering = (block: number) => number[]

type NoteType = (contourElement: number) => Note

type Segment = Part[]

export {
    Blocks,
    Contour,
    Notes,
    Part,
    Track,
    Rendering,
    NoteType,
    Segment,
}
