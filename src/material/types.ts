import { Note } from '@musical-patterns/material'

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

interface ZdaubyaosNotes {
    dubpartDuperpart: Note[],
    harmSubharm: Note[],
    subpartSuperpart: Note[],
}

export {
    BarTarget,
    BlockStyle,
    ZdaubyaosNotes,
}
