import { Note, Notes } from '../../../src/types'
import { Index, Time } from '../../../src/utilities/nominalTypes'
import { Block } from './utilities/nominalTypes'

type Blocks = Block[]

type RenderingFunction = (blocks: Blocks) => Contour

type ContourElement = [Index, Time]

type Contour = ContourElement[]

type Part = Contour

type MakeNote = (contourElement: ContourElement) => Note

type Segment = Notes[]

type Track = Notes

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

export {
    Blocks,
    Part,
    Track,
    RenderingFunction,
    MakeNote,
    Segment,
    ContourElement,
    Contour,
    BarTarget,
    Rendering,
    BlockStyle,
}
