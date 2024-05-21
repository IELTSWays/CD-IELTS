import React from 'react';
import Typography from '@mui/material/Typography';

const Paragraphs = [
  {
    paragraph: 'Virtually every child, the world over, plays. The drive to play is so intense that children will do so in any circumstances, for instance when they have no real toys, or when parents do not actively encourage the behavior. In the eyes of a young child, running, pretending, and building are fun. Researchers and educators know that these playful activities benefit the development of the whole child across social, cognitive, physical, and emotional domains. Indeed, play is such an instrumental component to healthy child development that the United Nation High Commission on Human Rights (1989) recognized play as a fundamental right of every child.'
  },
  {
    paragraph: 'Yet, while experts continue to expound a powerful argument for the importance of play in children’s lives, the actual time children spend playing continues to decrease. Today, children play eight hours less each week than their counterparts did two decades ago (Elkind 2008). Under pressure of rising academic standards, play is being replaced by test preparation in kindergartens and grade schools, and parents who aim to give their preschoolers a leg up are led to believe that flashcards and educational ‘toys’ are the path to success. Our society has created a false dichotomy between play and learning    '
  },
  {
    paragraph: 'Through play, children learn to regulate their behavior, lay the foundations for later learning in science and mathematics, figure out the complex negotiations of social relationships, build a repertoire of creative problem-solving skills, and so much more. There is also an important role for adults in guiding children through playful learning opportunities.'
  },
  {
    paragraph: 'Full consensus on a formal definition of play continues to elude the researchers and theorists who study it. Definitions range from discrete descriptions of various types of play such as physical, construction, language, or symbolic play (Miler & Almon 2009), to lists of broad criteria, based on observations and attitudes, that are meant to capture the essence of all play behaviors (e.g. Rubin et al. 1983).'
  },
  {
    paragraph: 'A majority of the contemporary definitions of play focus on several key criteria. The founder of the National Institute for Play, Stuart Brown, has described play as ‘anything that spontaneously is done for its own sake’. More specifically, he says it ‘appears purposeless, produces pleasure and joy, [and] leads one to the next stage of mastery’ (as quoted in Tippett 2008). Similarly, Miller and Almon (2009) say that play includes ‘activities that are freely chosen and directed by children and arise from intrinsic motivation’. Often, play is defined along a continuum as more or less playful using the following set of behavioral and dispositional criteria (e.g. Rubin et al. 1983).'
  },
  {
    paragraph: 'Play is pleasurable: Children must enjoy the activity or it is not play. It is intrinsically motivated: Children engage in play simply for the satisfaction the behavior itself brings. It has no extrinsically motivated function or goal. Play is process oriented: When children play, the means are more important than the ends. It is freely chosen, spontaneous and voluntary. If a child is pressured, they will likely not think of the activity as play. Play is actively engaged: Players must be physically and/or mentally involved in the activity. Play is non-literal. It involves make-believe.'
  },
  {
    paragraph: 'According to this view, children’s playful behaviors can range in degree from 0% to 100% playful. Rubin and colleagues did not assign greater weight to any one dimension in determining playfulness; however, other researchers have suggested that process orientation and a lack of obvious functional purpose may be the most important aspects of play (e.g. Pellegrini 2009).'
  },
  {
    paragraph: 'From the perspective of a continuum, play can thus blend with other motives and attitudes that are less playful, such as work. Unlike play, work is typically not viewed as enjoyable and it is extrinsically motivated (i.e. it is goal oriented). Researcher Joan Goodman (1994) suggested that hybrid forms of work and play are not a detriment to learning; rather, they can provide optimal contexts for learning. For example, a child may be engaged in a difficult, goal-directed activity set up by their teacher, but they may still be actively engaged and intrinsically motivated. At this mid-point between play and work, the child’s motivation, coupled with guidance from an adult, can create robust opportunities for playful learning.'
  },
  {
    paragraph: 'Critically, recent research supports the idea that adults can facilitate children’s learning while maintaining a playful approach in interactions known as ‘guided play’ (Fisher et al. 2011). The adult’s role in play varies as a function of their educational goals and the child’s developmental level (Hirsch-Pasek et al. 2009).'
  },
  {
    paragraph: 'Guided play takes two forms. At a very basic level, adults can enrich the child’s environment by providing objects or experiences that promote aspects of a curriculum. In the more direct form of guided play, parents or other adults can support children’s play by joining in the fun as a co-player, raising thoughtful questions, commenting on children’s discoveries, or encouraging further exploration or new facets to the child’s activity. Although playful learning can be somewhat structured, it must also be child-centered (Nicolopolou et al. 2006). Play should stem from the child’s own desire.'
  },
  {
    paragraph: 'Both free and guided play are essential elements in a child-centered approach to playful learning. Intrinsically motivated free play provides the child with true autonomy, while guided play is an avenue through which parents and educators can provide more targeted learning experiences. In either case, play should be actively engaged, it should be predominantly child-directed, and it must be fun.'
  },
]

const Text3 = () => {
  return (
    <>
      <Typography variant="h6" sx={{ my: 2.5 }}>
        The power of play
      </Typography>

      {Paragraphs.map((i, index) => {
        return (
          <>
            <Typography key={index} sx={{ mb: 1.5 }}>
              {i.paragraph}
            </Typography>
          </>
        )
      })}
    </>
  );
};

export default Text3;