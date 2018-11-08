import { Index, NoteSpec } from '../../../src'

type ContourElement = [ Index, Index ]

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
    BuildZdaubyaosNoteSpec,
    ContourElement,
    BarTarget,
    BlockStyle,
}
