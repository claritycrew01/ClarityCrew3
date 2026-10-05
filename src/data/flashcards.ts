export interface FlashcardData {
  front: string;
  back: string;
}

export interface FlashcardDeckData {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  cards: FlashcardData[];
}

export const FLASHCARD_DECKS: FlashcardDeckData[] = [
  {
    id: "linear-eq-cards",
    lessonId: "linear-eq",
    title: "Linear Equations",
    description: "Key concepts for slope-intercept form and solving linear equations.",
    cards: [
      { front: "What is slope-intercept form?", back: "y = mx + b, where m is the slope and b is the y-intercept." },
      { front: "How do you find slope between two points?", back: "m = (y₂ - y₁) / (x₂ - x₁) - the change in y divided by the change in x." },
      { front: "What does a slope of 0 mean?", back: "The line is horizontal - there is no vertical change." },
      { front: "What does an undefined slope mean?", back: "The line is vertical - there is no horizontal change (division by zero)." },
      { front: "How do you solve 3x + 7 = 22?", back: "Subtract 7: 3x = 15. Divide by 3: x = 5." },
      { front: "What is the y-intercept?", back: "The point where the line crosses the y-axis, found when x = 0." },
    ],
  },
  {
    id: "quad-eq-cards",
    lessonId: "quad-eq",
    title: "Quadratic Equations",
    description: "Practice quadratic formulas, factoring, and discriminant analysis.",
    cards: [
      { front: "What is the standard form of a quadratic?", back: "ax² + bx + c = 0, where a ≠ 0." },
      { front: "What is the quadratic formula?", back: "x = (-b ± √(b² - 4ac)) / 2a" },
      { front: "What does the discriminant tell you?", back: "Δ = b² - 4ac. Positive → 2 real roots. Zero → 1 real root. Negative → no real roots." },
      { front: "How do you factor x² - 5x + 6?", back: "(x - 2)(x - 3). Find two numbers that multiply to 6 and add to -5." },
      { front: "What shape is the graph of a quadratic?", back: "A parabola - U-shaped, opening up when a > 0 and down when a < 0." },
    ],
  },
  {
    id: "systems-cards",
    lessonId: "systems",
    title: "Systems of Equations",
    description: "Substitution and elimination methods for solving systems.",
    cards: [
      { front: "What is the substitution method?", back: "Solve one equation for a variable, then substitute that expression into the other equation." },
      { front: "What is the elimination method?", back: "Add or subtract equations to cancel one variable, then solve for the remaining variable." },
      { front: "How many solutions can a system have?", back: "One (intersecting lines), none (parallel lines), or infinitely many (identical lines)." },
      { front: "What does it mean if a system is 'inconsistent'?", back: "The system has no solution - the lines are parallel and never intersect." },
    ],
  },
  {
    id: "functions-cards",
    lessonId: "functions",
    title: "Functions",
    description: "Function notation, composition, and inverses.",
    cards: [
      { front: "What is a function?", back: "A rule that assigns each input exactly one output. Passes the vertical line test on a graph." },
      { front: "What is f(g(x))?", back: "Function composition - first apply g to x, then apply f to the result." },
      { front: "What is an inverse function?", back: "A function that undoes the original: if f(x) = 2x + 3, then f⁻¹(x) = (x - 3) / 2." },
      { front: "How do you find an inverse?", back: "Replace f(x) with y, swap x and y, solve for y, then replace y with f⁻¹(x)." },
    ],
  },
  {
    id: "triangles-cards",
    lessonId: "triangles",
    title: "Triangles",
    description: "Triangle properties, the Pythagorean theorem, and area formulas.",
    cards: [
      { front: "What is the Pythagorean theorem?", back: "a² + b² = c² for right triangles, where c is the hypotenuse." },
      { front: "What is the area of a triangle?", back: "A = ½ × base × height" },
      { front: "What is the 3-4-5 right triangle?", back: "A common Pythagorean triple: 3² + 4² = 9 + 16 = 25 = 5²" },
      { front: "How are triangles classified by angles?", back: "Acute (all angles < 90°), Right (one angle = 90°), Obtuse (one angle > 90°)." },
      { front: "What do the angles of any triangle add up to?", back: "180°" },
    ],
  },
  {
    id: "circles-cards",
    lessonId: "circles",
    title: "Circles",
    description: "Circumference, area, and radian measurement.",
    cards: [
      { front: "What is the circumference formula?", back: "C = 2πr = πd, where r is radius and d is diameter." },
      { front: "What is the area of a circle?", back: "A = πr²" },
      { front: "How many radians in a full circle?", back: "2π radians = 360°" },
      { front: "How do you convert degrees to radians?", back: "Multiply by π/180. Example: 90° × π/180 = π/2 radians." },
    ],
  },
  {
    id: "cells-cards",
    lessonId: "cells",
    title: "Cell Biology",
    description: "Cell structure, organelles, and prokaryotic vs. eukaryotic cells.",
    cards: [
      { front: "What is the powerhouse of the cell?", back: "Mitochondria - they generate ATP through cellular respiration." },
      { front: "What is the difference between prokaryotic and eukaryotic cells?", back: "Eukaryotic cells have a nucleus and membrane-bound organelles; prokaryotic cells do not." },
      { front: "What do plant cells have that animal cells don't?", back: "A cell wall, chloroplasts (for photosynthesis), and a large central vacuole." },
      { front: "What does the cell membrane do?", back: "It's selectively permeable - controls what enters and leaves the cell." },
      { front: "What is the nucleus?", back: "The control center of the cell, containing DNA and directing cell activities." },
    ],
  },
  {
    id: "genetics-cards",
    lessonId: "genetics",
    title: "Genetics",
    description: "DNA structure, gene expression, and Mendelian inheritance.",
    cards: [
      { front: "What are the four DNA bases?", back: "Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)." },
      { front: "Which bases pair together?", back: "A pairs with T, C pairs with G." },
      { front: "What is the difference between DNA and RNA?", back: "DNA is double-stranded with T; RNA is single-stranded with U (uracil) instead of T." },
      { front: "What does 'heterozygous' mean?", back: "Having two different alleles for a gene (e.g., Bb)." },
      { front: "What is a dominant allele?", back: "An allele that expresses its trait even when only one copy is present (B)." },
    ],
  },
  {
    id: "ecology-cards",
    lessonId: "ecology",
    title: "Ecology",
    description: "Ecosystems, energy flow, and biome classification.",
    cards: [
      { front: "What is an ecosystem?", back: "All living organisms (biotic) in an area plus their physical environment (abiotic)." },
      { front: "What percentage of energy transfers between trophic levels?", back: "About 10%. The rest is lost as heat." },
      { front: "What are producers?", back: "Organisms that make their own food (plants, algae) through photosynthesis." },
      { front: "What are decomposers?", back: "Organisms (fungi, bacteria) that break down dead material and recycle nutrients." },
    ],
  },
  {
    id: "atoms-cards",
    lessonId: "atoms",
    title: "Atomic Structure",
    description: "Atomic particles, energy levels, and the periodic table.",
    cards: [
      { front: "What particles are in an atom's nucleus?", back: "Protons (positive) and neutrons (neutral)." },
      { front: "What determines an element's identity?", back: "The number of protons (atomic number)." },
      { front: "What are valence electrons?", back: "Electrons in the outermost shell - they determine chemical behavior." },
      { front: "How many electrons can the first shell hold?", back: "2 electrons" },
      { front: "What is an isotope?", back: "Atoms of the same element with different numbers of neutrons." },
    ],
  },
  {
    id: "bonds-cards",
    lessonId: "bonds",
    title: "Chemical Bonds",
    description: "Ionic, covalent, and polar bonds.",
    cards: [
      { front: "What is an ionic bond?", back: "A bond formed by transferring electrons from one atom to another, creating oppositely charged ions." },
      { front: "What is a covalent bond?", back: "A bond formed by sharing electron pairs between atoms." },
      { front: "What makes a covalent bond 'polar'?", back: "Unequal sharing of electrons, creating partial positive and negative charges." },
      { front: "Example of an ionic compound?", back: "NaCl (table sodium chloride / table salt)" },
    ],
  },
  {
    id: "forces-cards",
    lessonId: "forces",
    title: "Forces & Motion",
    description: "Newton's laws, friction, and gravitational force.",
    cards: [
      { front: "What is Newton's First Law?", back: "An object at rest stays at rest, and an object in motion stays in motion, unless acted on by a net force (inertia)." },
      { front: "What is Newton's Second Law?", back: "F = ma - force equals mass times acceleration." },
      { front: "What is Newton's Third Law?", back: "For every action, there is an equal and opposite reaction." },
      { front: "What is the acceleration due to gravity?", back: "About 9.8 m/s² near Earth's surface." },
      { front: "What is friction?", back: "A force that opposes motion between two surfaces in contact." },
    ],
  },
  {
    id: "grammar-cards",
    lessonId: "grammar",
    title: "Parts of Speech",
    description: "The eight parts of speech and their roles.",
    cards: [
      { front: "What are the 8 parts of speech?", back: "Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection." },
      { front: "What does an adverb modify?", back: "Verbs, adjectives, or other adverbs. Often ends in -ly (quickly, very, extremely)." },
      { front: "What is a conjunction?", back: "A word that connects words, phrases, or clauses (and, but, or, so, yet)." },
      { front: "What is the difference between an adjective and an adverb?", back: "Adjectives describe nouns (tall woman); adverbs describe verbs (runs quickly)." },
    ],
  },
  {
    id: "reading-cards",
    lessonId: "reading",
    title: "Reading Comprehension",
    description: "SQ3R method and active reading strategies.",
    cards: [
      { front: "What does SQ3R stand for?", back: "Survey, Question, Read, Recite, Review." },
      { front: "What is the main idea?", back: "The central point the author wants to convey - what the passage is mostly about." },
      { front: "What is an inference?", back: "A conclusion drawn from evidence and prior knowledge, not explicitly stated in the text." },
      { front: "What is critical reading?", back: "Evaluating the author's argument, identifying bias, and considering alternative perspectives." },
    ],
  },
  {
    id: "writing-cards",
    lessonId: "writing",
    title: "Essay Writing",
    description: "Essay structure, thesis statements, and revision strategies.",
    cards: [
      { front: "What are the three parts of an essay?", back: "Introduction (with thesis), body paragraphs (with PEEL), and conclusion." },
      { front: "What is a thesis statement?", back: "A single sentence in the introduction that states the essay's main argument." },
      { front: "What does PEEL stand for?", back: "Point, Evidence, Explanation, Link - the structure of a strong body paragraph." },
      { front: "What should a conclusion NOT do?", back: "Introduce new information. It should restate the thesis and summarize key points." },
    ],
  },
  {
    id: "vocab-cards",
    lessonId: "vocab",
    title: "Vocabulary",
    description: "Context clues, word roots, and effective memorization strategies.",
    cards: [
      { front: "What are context clues?", back: "Words or phrases near an unfamiliar word that help you figure out its meaning." },
      { front: "What does the root 'spect' mean?", back: "To look - inspect, spectator, respect, prospect." },
      { front: "What does the suffix '-tion' do?", back: "Turns a verb into a noun: create → creation, act → action." },
      { front: "What is spaced repetition?", back: "Reviewing words at increasing intervals to move them from short-term to long-term memory." },
    ],
  },
  {
    id: "inequalities-cards",
    lessonId: "inequalities",
    title: "Inequalities",
    description: "Key concepts for solving linear, compound, and quadratic inequalities.",
    cards: [
      { front: "What happens when you multiply both sides of an inequality by a negative number?", back: "The inequality sign flips direction (e.g., > becomes <)." },
      { front: "What is a compound inequality?", back: "Two inequalities joined by 'and' (overlap) or 'or' (union)." },
      { front: "What does an open circle mean on a number line graph?", back: "The endpoint is NOT included in the solution (< or >)." },
      { front: "What does a closed (filled) circle mean on a number line?", back: "The endpoint IS included in the solution (≤ or ≥)." },
      { front: "How do you solve -3x > 12?", back: "Divide by -3 and flip the sign: x < -4." },
      { front: "What does 'and' mean in -3 < x ≤ 5?", back: "Both conditions must be true at the same time - the solution is the overlap: -3 < x ≤ 5." },
      { front: "What does 'or' mean in x < -2 or x > 4?", back: "Either condition being true makes the statement true - the solution is both intervals combined." },
      { front: "How do you solve a quadratic inequality like x² - 4 > 0?", back: "Find where the expression equals zero (critical points), test each interval between those points, and keep intervals where the inequality is true." },
    ],
  },
  {
    id: "functions-advanced-cards",
    lessonId: "functions-advanced",
    title: "Functions - Advanced",
    description: "Domain, range, composition, and inverse functions.",
    cards: [
      { front: "What is the domain of a function?", back: "The set of all valid input values (x-values) for which the function is defined." },
      { front: "What is the range of a function?", back: "The set of all possible output values (y-values) the function can produce." },
      { front: "What two things typically restrict a function's domain?", back: "Division by zero and square roots (or other even roots) of negative numbers." },
      { front: "What does f(g(x)) mean?", back: "Function composition - first evaluate g(x), then plug that result into f." },
      { front: "How do you find the inverse of f(x) = 2x + 7?", back: "Set y = 2x + 7, swap x and y: x = 2y + 7, solve: y = (x - 7)/2. So f⁻¹(x) = (x - 7)/2." },
      { front: "What test determines if a function has an inverse?", back: "The horizontal line test - if any horizontal line crosses the graph more than once, no inverse exists." },
      { front: "What is a one-to-one function?", back: "A function where every output comes from exactly one input - no two different x-values produce the same y-value." },
      { front: "What is the relationship between a function and its inverse on a graph?", back: "They are reflections of each other across the line y = x." },
    ],
  },
  {
    id: "quadrilaterals-cards",
    lessonId: "quadrilaterals",
    title: "Quadrilaterals",
    description: "Types of quadrilaterals, their properties, and area formulas.",
    cards: [
      { front: "What is the sum of interior angles in any quadrilateral?", back: "360°" },
      { front: "What is a parallelogram?", back: "A quadrilateral with two pairs of parallel sides. Opposite sides and angles are equal." },
      { front: "What makes a rhombus different from a parallelogram?", back: "All four sides are equal in length." },
      { front: "What is the area formula for a parallelogram?", back: "A = base × height" },
      { front: "What is the area formula for a trapezoid?", back: "A = ½(b₁ + b₂) × h, where b₁ and b₂ are the two parallel bases." },
      { front: "How is a square classified in terms of other quadrilaterals?", back: "A square is a rectangle (all right angles) AND a rhombus (all equal sides), making it a special case of both." },
      { front: "What are the diagonals of a kite like?", back: "They are perpendicular (cross at 90°). Only one pair of opposite angles is equal." },
      { front: "How many pairs of parallel sides does a trapezoid have?", back: "Exactly one pair (the two bases)." },
    ],
  },
  {
    id: "regression-cards",
    lessonId: "regression",
    title: "Regression",
    description: "Correlation, scatter plots, lines of best fit, and the r-value.",
    cards: [
      { front: "What does the correlation coefficient (r) measure?", back: "The strength and direction of a linear relationship between two variables. Ranges from -1 to +1." },
      { front: "What does r = +1 mean?", back: "A perfect positive linear relationship - all data points fall exactly on an upward-sloping line." },
      { front: "What does r = 0 mean?", back: "No linear relationship between the two variables." },
      { front: "What is the line of best fit?", back: "The regression line that minimizes the sum of squared distances from each data point to the line." },
      { front: "What is the equation of a regression line?", back: "ŷ = a + bx, where b is the slope and a is the y-intercept." },
      { front: "What is r² and what does it tell you?", back: "The coefficient of determination. It tells you the proportion of variation in y explained by the regression model." },
      { front: "What is the key difference between correlation and causation?", back: "Correlation means two variables move together; causation means one variable directly causes changes in the other. Correlation does NOT imply causation." },
      { front: "What is extrapolation and why is it risky?", back: "Predicting values far beyond the range of observed data. It's risky because the observed trend may not continue outside the studied range." },
    ],
  },
  {
    id: "science-evolution-flashcards",
    lessonId: "evolution",
    title: "Evolution Flashcards",
    description: "Key terms and concepts from the Evolution lesson.",
    cards: [
      { front: "What is natural selection?", back: "The process where organisms with traits better suited to their environment tend to survive and reproduce more, passing those traits to future generations." },
      { front: "What is an adaptation?", back: "An inherited trait that increases an organism's chance of survival and reproduction in its environment." },
      { front: "What is speciation?", back: "The formation of new species from a common ancestor when populations become so genetically different that they can no longer interbreed." },
      { front: "What is the difference between allopatric and sympatric speciation?", back: "Allopatric occurs when a physical barrier separates populations. Sympatric occurs without physical separation." },
      { front: "What are homologous structures?", back: "Structures in different species that share a similar bone pattern due to common ancestry, even if they serve different functions." },
      { front: "What does DNA evidence show about human and chimpanzee relatedness?", back: "Humans and chimpanzees share approximately 98.7% of their DNA, indicating a very close evolutionary relationship." },
      { front: "What four conditions are required for natural selection to occur?", back: "1) Variation in traits. 2) Traits must be heritable. 3) More offspring than can survive. 4) Individuals with favorable traits have higher reproductive success." },
      { front: "What is adaptive radiation?", back: "The rapid diversification of a single ancestral species into many species adapted to different ecological niches." },
    ],
  },
  {
    id: "science-chemical-bonding-flashcards",
    lessonId: "chemical-bonding",
    title: "Chemical Bonding Flashcards",
    description: "Key terms and concepts from the Chemical Bonding lesson.",
    cards: [
      { front: "What is electronegativity?", back: "An atom's ability to attract shared electrons toward itself in a chemical bond." },
      { front: "What is an ionic bond?", back: "A bond formed when one atom transfers electrons to another, creating oppositely charged ions that attract each other." },
      { front: "What is a polar covalent bond?", back: "A covalent bond where electrons are shared unequally due to different electronegativities, creating partial charges." },
      { front: "What is metallic bonding?", back: "Valence electrons are delocalized and shared among all atoms in a metal lattice, forming a 'sea of electrons.'" },
      { front: "What is the octet rule?", back: "Most atoms are most stable with 8 electrons in their outermost (valence) shell." },
      { front: "What does a line represent in a Lewis structure?", back: "Each line represents one shared pair of electrons (a single covalent bond)." },
      { front: "Why are metals malleable and ductile?", back: "Because metallic bonds involve a sea of delocalized electrons, layers of atoms can slide past each other without breaking the bond." },
      { front: "How do you calculate formal charge?", back: "Formal charge = (valence electrons) − (lone pair electrons) − (½ × bonding electrons)." },
    ],
  },
  {
    id: "science-energy-flashcards",
    lessonId: "energy",
    title: "Energy Flashcards",
    description: "Key terms and concepts from the Energy lesson.",
    cards: [
      { front: "What is kinetic energy?", back: "The energy of motion. KE = ½mv². Doubling the speed quadruples the kinetic energy." },
      { front: "What is potential energy?", back: "Stored energy due to position or configuration. Types include gravitational, elastic, chemical, and nuclear." },
      { front: "What is the law of conservation of energy?", back: "Energy cannot be created or destroyed, only transformed from one form to another." },
      { front: "What is work in physics?", back: "Work is the transfer of energy when a force moves an object: W = Fd cos θ. Measured in joules." },
      { front: "What is power?", back: "The rate at which work is done: P = W/t. Measured in watts (1 W = 1 J/s)." },
      { front: "What is thermal energy?", back: "The total kinetic energy of particles in motion at the microscopic level. Temperature measures the average kinetic energy." },
      { front: "What is latent heat?", back: "The energy required to change a substance's phase without changing its temperature. It breaks intermolecular bonds." },
      { front: "Why is a perpetual motion machine impossible?", back: "Some energy is always converted to thermal energy due to friction, so usable energy decreases over time." },
    ],
  },
  {
    id: "science-waves-flashcards",
    lessonId: "waves",
    title: "Waves Flashcards",
    description: "Key terms and concepts from the Waves lesson.",
    cards: [
      { front: "What is a transverse wave?", back: "Particles oscillate perpendicular to the wave direction. Examples: light, waves on a string." },
      { front: "What is a longitudinal wave?", back: "Particles oscillate parallel to the wave direction. The best example is sound, with compressions and rarefactions." },
      { front: "What is frequency?", back: "The number of complete oscillations per second, measured in hertz (Hz)." },
      { front: "What is wavelength?", back: "The distance between consecutive identical points on a wave. Related to frequency by v = fλ." },
      { front: "What is amplitude?", back: "The maximum displacement from rest. It determines the wave's energy - louder sound or brighter light." },
      { front: "What is the wave equation?", back: "v = fλ, where v is speed, f is frequency, and λ is wavelength." },
      { front: "What is the electromagnetic spectrum?", back: "All EM waves by wavelength: radio, microwaves, infrared, visible light, UV, X-rays, gamma rays." },
      { front: "What is destructive interference?", back: "When two waves overlap with peaks aligned with troughs, partially or completely canceling each other out." },
    ],
  },
  {
    id: "english-sentence-structure-flashcards",
    lessonId: "sentence-structure",
    title: "Sentence Structure Flashcards",
    description: "Key terms for understanding clauses, sentence types, and sentence errors.",
    cards: [
      { front: "What is the subject of a sentence?", back: "The subject is who or what the sentence is about." },
      { front: "What is the predicate of a sentence?", back: "The predicate tells what the subject does or is." },
      { front: "What is an independent clause?", back: "A group of words with a subject and verb that can stand alone as a complete sentence." },
      { front: "What is a dependent clause?", back: "A group of words with a subject and verb that cannot stand alone because it starts with a subordinating conjunction." },
      { front: "What is the difference between a compound and a complex sentence?", back: "Compound: two+ independent clauses joined by a conjunction. Complex: one independent + one dependent clause." },
      { front: "What is a comma splice?", back: "Joining two independent clauses with only a comma and no conjunction. Fix with a period, semicolon, or conjunction." },
      { front: "What is a sentence fragment?", back: "An incomplete sentence missing a subject, verb, or complete thought." },
      { front: "What are the four sentence types?", back: "Simple, compound, complex, and compound-complex." },
    ],
  },
  {
    id: "english-punctuation-flashcards",
    lessonId: "punctuation",
    title: "Punctuation Flashcards",
    description: "Key rules for using commas, semicolons, colons, apostrophes, and dashes.",
    cards: [
      { front: "When do you use a comma before 'and' joining two clauses?", back: "When it joins two independent clauses: 'I wanted to go, but it was raining.'" },
      { front: "What is the Oxford comma?", back: "The comma before the final 'and' or 'or' in a list: 'I love my parents, Batman, and Spider-Man.'" },
      { front: "When do you use a semicolon?", back: "To connect two closely related independent clauses without a conjunction." },
      { front: "When do you use a colon?", back: "After a complete sentence, to introduce a list, explanation, or elaboration." },
      { front: "What is the difference between 'its' and 'it's'?", back: "'Its' is possessive. 'It's' is a contraction of 'it is.'" },
      { front: "When do you use an apostrophe for possession?", back: "Add 's for singular nouns. Add only an apostrophe for plurals ending in s." },
      { front: "What is the difference between an em dash and a hyphen?", back: "An em dash sets off interruptions. A hyphen (-) joins compound modifiers." },
      { front: "What is a comma splice and how do you fix it?", back: "Joining two independent clauses with only a comma. Fix by adding a conjunction, using a semicolon, or splitting into two sentences." },
    ],
  },
  {
    id: "english-literary-analysis-flashcards",
    lessonId: "literary-analysis",
    title: "Literary Analysis Flashcards",
    description: "Key terms for analyzing theme, symbolism, irony, point of view, and tone.",
    cards: [
      { front: "What is theme in literature?", back: "The central idea or message about life, society, or human nature that emerges through a text." },
      { front: "What is symbolism?", back: "The use of concrete objects to represent abstract ideas." },
      { front: "What is imagery?", back: "Language that appeals to the senses to create vivid mental pictures and evoke emotions." },
      { front: "What is dramatic irony?", back: "When the audience knows something a character does not." },
      { front: "What is situational irony?", back: "When the outcome contradicts expectations." },
      { front: "What is verbal irony?", back: "When someone says the opposite of what they mean." },
      { front: "What is the difference between tone and mood?", back: "Tone is the author's attitude. Mood is the feeling created in the reader." },
      { front: "What are the three main points of view in fiction?", back: "First person ('I'), third-person limited (one character), third-person omniscient (everyone's thoughts)." },
    ],
  },
  {
    id: "english-vocabulary-strategies-flashcards",
    lessonId: "vocabulary-strategies",
    title: "Vocabulary Strategies Flashcards",
    description: "Key strategies for figuring out unknown words and building vocabulary.",
    cards: [
      { front: "What are context clues?", back: "Hints in the surrounding text that help you figure out an unknown word's meaning." },
      { front: "What is a synonym context clue?", back: "When a word with a similar meaning appears nearby." },
      { front: "What is the root 'ject' and what words contain it?", back: "'Ject' means 'to throw.' Inject, reject, project, eject." },
      { front: "What do the prefixes 'un-' and 're-' mean?", back: "'Un-' means 'not' or 'reverse.' 'Re-' means 'again.'" },
      { front: "What is the difference between denotation and connotation?", back: "Denotation is a word's dictionary meaning. Connotation is the feeling it carries." },
      { front: "What suffix indicates an adverb?", back: "-ly turns adjectives into adverbs: quick → quickly." },
      { front: "What is the CRAAP test for evaluating sources?", back: "Currency, Relevance, Authority, Accuracy, Purpose." },
      { front: "What is the most effective long-term vocabulary strategy?", back: "Learning words from context and using spaced repetition." },
    ],
  },
  {
    id: "english-persuasive-writing-flashcards",
    lessonId: "persuasive-writing",
    title: "Persuasive Writing Flashcards",
    description: "Key concepts for thesis statements, rhetorical appeals, and argument structure.",
    cards: [
      { front: "What is a thesis statement?", back: "A single sentence in the introduction that clearly states your position on a topic." },
      { front: "What makes a thesis statement strong?", back: "It is specific, arguable, and provides direction for the essay." },
      { front: "What is ethos?", back: "Aristotle's appeal to credibility and trust." },
      { front: "What is pathos?", back: "Aristotle's appeal to the audience's emotions." },
      { front: "What is logos?", back: "Aristotle's appeal to logic and reason." },
      { front: "What is a counterargument?", back: "The strongest objection to your position. Addressing it strengthens your essay." },
      { front: "What is the standard structure of a persuasive essay?", back: "Introduction (hook + thesis), body paragraphs, counterargument paragraph, conclusion." },
      { front: "What is the difference between evidence and reasoning?", back: "Evidence is the data you present. Reasoning explains how it supports your claim." },
    ],
  },
  {
    id: "english-research-papers-flashcards",
    lessonId: "research-papers",
    title: "Research Papers Flashcards",
    description: "Key concepts for source evaluation, citation, paraphrasing, and research paper structure.",
    cards: [
      { front: "What is the most reliable type of academic source?", back: "Peer-reviewed journal articles." },
      { front: "What is the difference between MLA and APA citation styles?", back: "MLA uses author and page: (Smith 45). APA adds the year: (Smith, 2023, p. 45)." },
      { front: "What is plagiarism?", back: "Using someone else's words, ideas, or data without giving credit - even unintentionally." },
      { front: "How do you properly paraphrase a source?", back: "Read the original, understand it, then restate in your own words with a new sentence structure." },
      { front: "When do you need to cite a source?", back: "Whenever you use someone else's idea - whether you quote, paraphrase, or summarize it." },
      { front: "What is the CRAAP test?", back: "Currency, Relevance, Authority, Accuracy, Purpose - a source evaluation framework." },
      { front: "What does a research paper's introduction do?", back: "Presents the topic, provides context, and states the thesis." },
      { front: "What does it mean to 'synthesize' sources?", back: "Comparing and connecting information from multiple sources rather than just listing them." },
    ],
  },
];

function getFlashcardDeckByLessonId(lessonId: string): FlashcardDeckData | undefined {
  return FLASHCARD_DECKS.find((d) => d.lessonId === lessonId);
}

function getFlashcardDeckById(deckId: string): FlashcardDeckData | undefined {
  return FLASHCARD_DECKS.find((d) => d.id === deckId);
}

function getAllFlashcardDeckIds(): string[] {
  return FLASHCARD_DECKS.map((d) => d.id);
}

function getSubjectFlashcardDecks(lessonIds: string[]): FlashcardDeckData[] {
  return FLASHCARD_DECKS.filter((d) => lessonIds.includes(d.lessonId));
}

export {
  getFlashcardDeckByLessonId,
  getFlashcardDeckById,
  getAllFlashcardDeckIds,
  getSubjectFlashcardDecks,
};
