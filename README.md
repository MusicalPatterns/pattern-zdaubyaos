# zdaubyaos glossary

## styles

**zdaub**: melodic; inherited from stepwise

**yaos**: rhythmic; inherited from oumaotcou'aoiest

Each of these styles has its own Blocks and Renderings which create Contours mostly of length either 15 or 24. 

## compositional levels

**Blocks**: just raw patterns of numbers; each number is a Block

**Rendering**: convert from Blocks to Contour

**Contours**: what you get after you map a Rendering onto some Blocks; each ContourElement represents a pitch (index) plus a duration;
    contours are the smallest compositional object of the song, too small to write the song in directly
    
**Part**: a concatenation of several contours together; a large enough compositional object to write the song in directly;
    parts are still intended for just one Entity to play
    
**Segment**: take a set of Parts, and each Part has all of its ContourElements mapped to a Note, 
    and each Part's Notes total the same duration, so they can be played simultaneously by different Entity[], but still sequenced together with other Segments
    
**Note**: what you get when you hydrate a ContourElement w/ NoteStyle information, readying it to be played
