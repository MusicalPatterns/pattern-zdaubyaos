# zdaubyaos glossary

fun with the superparticular series & variants, plus stepwise motion within recurring bounds

## styles

**zdaub**: melodic; inherited from stepwise

**yaos**: rhythmic; inherited from oumaotcou'aoiest

Each of these styles has its own Blocks and Renderings which create Contours mostly of length either 15 or 24. 

## compositional levels

**Block**: just sets of numbers, a very abstract form of the pattern

**Rendering**: converts Block to ContourPiece

**ContourPiece**: what you get after you map a Rendering onto a Block; each ContourElement represents a pitch (index) plus a duration;
    ContourPiece is the smallest compositional object of the pattern, too small to write the pattern in directly
    
**ContourWhole**: a concatenation of several ContourPiece together; a large enough compositional object to write the pattern in directly;
    a ContourWhole is still intended to be compiled to something for just one Entity to play
    
**Segment**: take a set of ContourWhole, and each ContourWhole has all of its ContourElements mapped to a NoteSpec, 
    and each ContourWhole's NoteSpec total the same duration, so they can be played simultaneously by different Entities, but still sequenced together with other Segments
    
**NoteSpec**: what you get when you hydrate a ContourElement w/ NoteStyle information, readying it to be compiled to be played
