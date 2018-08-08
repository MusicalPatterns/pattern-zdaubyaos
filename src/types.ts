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

enum BlockStrategy {
    INAIDJIYAIOUZD = 'inaidjiyaiouzd',
    UMOWCHUWOWIEST = 'umowchuwowiest',
}

enum BlockResolution {
    HIGHREGULAR = 'highregular',
    LOWREGULAR = 'lowregular',
    MIDIRREGULAR = 'midirregular',
}

enum BlockStyle {
    OUZD = 'ouzd',
    INAI = 'inai',
    DJIYAI = 'djiyai',
    IEST = 'iest',
    UMOW = 'umow',
    CHUWOW = 'chuwow',
}

enum BarDuration {
    FIFTEEN = 'fifteen',
    TWENTYFOUR = 'twentyfour',
}

enum Rendering {
    SPRING = 'spring',
    SUMMER = 'summer',
    FALL = 'fall',
    SUMMERY_SPRING = 'summerySpring',
    SPRINGY_SUMMER = 'springySummer',
}

type ByBlockStrategy = {
    [x in BlockStrategy]: ByBlockResolution
}
type ByBlockResolution = {
    [x in BlockResolution]: BlockStyle
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
    BlockStyle,
    BlockResolution,
    BlockStrategy,
    BarDuration,
    Rendering,
    ByBlockResolution,
    ByBlockStrategy,
    ManualContourElement,
    ManualContour,
}
