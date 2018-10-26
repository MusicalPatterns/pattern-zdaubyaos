import { DictionaryOf, Index, NoteSpec } from '../../../src'
import { Block } from './nominal'

type RenderingFunction = (blocks: Block[]) => Contour

type ContourElement = [Index, Index]

type Contour = ContourElement[]

type Part = Contour

type BuildNoteSpec = (contourElement: ContourElement) => NoteSpec

type Segment = NoteSpec[][]

type Segments = Segment[]

type Track = NoteSpec[]

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
