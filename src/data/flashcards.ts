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
      { front: "How do you find slope between two points?", back: "m = (y₂ - y₁) / (x₂ - x₁) — the change in y divided by the change in x." },
      { front: "What does a slope of 0 mean?", back: "The line is horizontal — there is no vertical change." },
      { front: "What does an undefined slope mean?", back: "The line is vertical — there is no horizontal change (division by zero)." },
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
      { front: "What shape is the graph of a quadratic?", back: "A parabola — U-shaped, opening up when a > 0 and down when a < 0." },
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
      { front: "What does it mean if a system is 'inconsistent'?", back: "The system has no solution — the lines are parallel and never intersect." },
    ],
  },
  {
    id: "functions-cards",
    lessonId: "functions",
    title: "Functions",
    description: "Function notation, composition, and inverses.",
    cards: [
      { front: "What is a function?", back: "A rule that assigns each input exactly one output. Passes the vertical line test on a graph." },
      { front: "What is f(g(x))?", back: "Function composition — first apply g to x, then apply f to the result." },
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
      { front: "What is the powerhouse of the cell?", back: "Mitochondria — they generate ATP through cellular respiration." },
      { front: "What is the difference between prokaryotic and eukaryotic cells?", back: "Eukaryotic cells have a nucleus and membrane-bound organelles; prokaryotic cells do not." },
      { front: "What do plant cells have that animal cells don't?", back: "A cell wall, chloroplasts (for photosynthesis), and a large central vacuole." },
      { front: "What does the cell membrane do?", back: "It's selectively permeable — controls what enters and leaves the cell." },
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
      { front: "What are valence electrons?", back: "Electrons in the outermost shell — they determine chemical behavior." },
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
      { front: "What is Newton's Second Law?", back: "F = ma — force equals mass times acceleration." },
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
      { front: "What is the main idea?", back: "The central point the author wants to convey — what the passage is mostly about." },
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
      { front: "What does PEEL stand for?", back: "Point, Evidence, Explanation, Link — the structure of a strong body paragraph." },
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
      { front: "What does the root 'spect' mean?", back: "To look — inspect, spectator, respect, prospect." },
      { front: "What does the suffix '-tion' do?", back: "Turns a verb into a noun: create → creation, act → action." },
      { front: "What is spaced repetition?", back: "Reviewing words at increasing intervals to move them from short-term to long-term memory." },
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
