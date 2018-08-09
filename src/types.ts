import { Note } from '../../../src/types'
import { Index, Time } from '../../../src/utilities/nominalTypes'
import { Block, ContourElement } from './utilities/nominalTypes'

type Blocks = Block[]

type Contour = ContourElement[]

type Notes = Note[]

type Part = Note[]

type Track = Note[]

type RenderingFunction = (block: Block) => Contour

type NoteType = (contourElement: ContourElement) => Note

type Segment = Part[]

enum YaosBlockStrategy {
    INAIDJIYAIOUZD = 'inaidjiyaiouzd',
    UMOWCHUWOWIEST = 'umowchuwowiest',
}

enum YaosBlockResolution {
    HIGHREGULAR = 'highregular',
    LOWREGULAR = 'lowregular',
    MIDIRREGULAR = 'midirregular',
}

enum YaosBlockStyle {
    OUZD = 'ouzd',
    INAI = 'inai',
    DJIYAI = 'djiyai',
    IEST = 'iest',
    UMOW = 'umow',
    CHUWOW = 'chuwow',
}

enum ZdaubBlockStyle {
    NODLE = 'nodle',
    LIMIN = 'limin',
    SCEND = 'scend',
}

enum BarDuration {
    FIFTEEN = 'fifteen',
    TWENTYFOUR = 'twentyfour',
}

enum YaosRendering {
    SPRING = 'spring',
    SUMMER = 'summer',
    FALL = 'fall',
    SUMMERY_SPRING = 'summerySpring',
    SPRINGY_SUMMER = 'springySummer',
}

enum ZdaubRendering {
    GLIS = 'glis',
    BONY = 'bony',
    TREM = 'trem',
}

type ByBlockStrategy = {
    [x in YaosBlockStrategy]: ByBlockResolution
}
type ByBlockResolution = {
    [x in YaosBlockResolution]: YaosBlockStyle
}

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
    Segment,
    YaosBlockStyle,
    YaosBlockResolution,
    YaosBlockStrategy,
    BarDuration,
    YaosRendering,
    ByBlockResolution,
    ByBlockStrategy,
    ManualContourElement,
    ManualContour,
    ZdaubBlockStyle,
    ZdaubRendering,
}
