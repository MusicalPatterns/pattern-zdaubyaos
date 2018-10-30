import { Index, NoteSpec } from '../../../src'

type ContourElement = [ Index, Index ]

enum _ContourPieceBrand {}
type ContourPiece = _ContourPieceBrand & ContourElement[]

enum _ContourWholeBrand {}
type ContourWhole = _ContourWholeBrand & ContourElement[]

type BuildZdaubyaosNoteSpec = (contourElement: ContourElement) => NoteSpec

enum BarTarget {
    FIFTEEN = 'fifteen',
    TWENTYFOUR = 'twentyfour',
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
    ContourWhole,
    BuildZdaubyaosNoteSpec,
    ContourElement,
    ContourPiece,
    BarTarget,
    BlockStyle,
}
