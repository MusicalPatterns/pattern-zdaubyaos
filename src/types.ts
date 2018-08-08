import { Note } from '../../../src/types'

type Blocks = number[]

type Contour = number[]

type Notes = Note[]

type Part = Note[]

type Track = Note[]

type RenderingFunction = (block: number) => number[]

type NoteType = (contourElement: number) => Note

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
}
