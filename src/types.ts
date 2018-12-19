import { NoteSpec } from '@musical-patterns/compiler'
import { ContourElement } from '@musical-patterns/pattern'

type BuildNoteSpec = (contourElement: ContourElement) => NoteSpec

enum BarTarget {
    FIFTEEN = 'FIFTEEN',
    TWENTYFOUR = 'TWENTYFOUR',
}

enum BlockStyle {
    OUZD = 'OUZD',
    INAI = 'INAI',
    DJIYAI = 'DJIYAI',
    IEST = 'IEST',
    UMOW = 'UMOW',
    CHUWOW = 'CHUWOW',
    NODLE = 'NODLE',
    LIMIN = 'LIMIN',
    SCEND = 'SCEND',
}

export {
    BuildNoteSpec,
    ContourElement,
    BarTarget,
    BlockStyle,
}
