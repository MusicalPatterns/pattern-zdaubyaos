import { NoteSpec, NoteSpecs } from '../../../src/compile/types'
import { Index } from '../../../src/utilities/nominalTypes'
import { DictionaryOf } from '../../../src/utilities/types'
import { Block } from './utilities/nominalTypes'

type Blocks = Block[]

type RenderingFunction = (blocks: Blocks) => Contour

type ContourElement = [Index, Index]

type Contour = ContourElement[]

type Part = Contour

type BuildNoteSpec = (contourElement: ContourElement) => NoteSpec

type Segment = NoteSpecs[]

type Segments = Segment[]

type Track = NoteSpecs

enum BarTarget {
    FIFTEEN = 'fifteen',
    TWENTYFOUR = 'twentyfour',
}

enum Rendering {
    SPRING = 'spring',
    SUMMER = 'summer',
    FALL = 'fall',
    SUMMERY_SPRING = 'summerySpring',
    SPRINGY_SUMMER = 'springySummer',
    GLIS = 'glis',
    BONY = 'bony',
    TREM = 'trem',
}

enum BlockStyle {
    OUZD = 'ouzd',
    INAI = 'inai',
    DJIYAI = 'djiyai',
    IEST = 'iest',
    UMOW = 'umow',
    CHUWOW = 'chuwow',
    NODLE = 'nodle',
    LIMIN = 'limin',
    SCEND = 'scend',
}

type TrackDictionary = DictionaryOf<Track>

export {
    Blocks,
    Part,
    Track,
    RenderingFunction,
    BuildNoteSpec,
    Segment,
    ContourElement,
    Contour,
    BarTarget,
    Rendering,
    BlockStyle,
    TrackDictionary,
    Segments,
}
