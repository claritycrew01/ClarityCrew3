export interface QuizOptionData {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestionData {
  id: string;
  text: string;
  options: QuizOptionData[];
  explanation: string;
}

export interface QuizData {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  questions: QuizQuestionData[];
}

export const QUIZZES: QuizData[] = [
  {
    id: "linear-eq-quiz",
    lessonId: "linear-eq",
    title: "Linear Equations",
    description: "Test your understanding of slope-intercept form and solving linear equations.",
    questions: [
      {
        id: "le-q1",
        text: "What is the slope in the equation y = 3x + 7?",
        options: [
          { id: "le-q1-a", text: "7", isCorrect: false },
          { id: "le-q1-b", text: "3", isCorrect: true },
          { id: "le-q1-c", text: "10", isCorrect: false },
          { id: "le-q1-d", text: "3x", isCorrect: false },
        ],
        explanation: "In y = mx + b, the slope is m. Here m = 3.",
      },
      {
        id: "le-q2",
        text: "Solve for x: 2x + 5 = 13",
        options: [
          { id: "le-q2-a", text: "x = 3", isCorrect: false },
          { id: "le-q2-b", text: "x = 4", isCorrect: true },
          { id: "le-q2-c", text: "x = 8", isCorrect: false },
          { id: "le-q2-d", text: "x = 9", isCorrect: false },
        ],
        explanation: "Subtract 5: 2x = 8. Divide by 2: x = 4.",
      },
      {
        id: "le-q3",
        text: "A line passes through (0, 2) and has a slope of 4. What is its equation?",
        options: [
          { id: "le-q3-a", text: "y = 2x + 4", isCorrect: false },
          { id: "le-q3-b", text: "y = 4x + 2", isCorrect: true },
          { id: "le-q3-c", text: "y = 4x - 2", isCorrect: false },
          { id: "le-q3-d", text: "y = 2x - 4", isCorrect: false },
        ],
        explanation: "Using slope-intercept form y = mx + b with m = 4 and b = 2 (the y-intercept).",
      },
      {
        id: "le-q4",
        text: "What is the slope of a horizontal line?",
        options: [
          { id: "le-q4-a", text: "0", isCorrect: true },
          { id: "le-q4-b", text: "1", isCorrect: false },
          { id: "le-q4-c", text: "Undefined", isCorrect: false },
          { id: "le-q4-d", text: "-1", isCorrect: false },
        ],
        explanation: "A horizontal line has no vertical change, so the slope (rise/run) is 0.",
      },
      {
        id: "le-q5",
        text: "What is the y-intercept of y = -2x + 9?",
        options: [
          { id: "le-q5-a", text: "-2", isCorrect: false },
          { id: "le-q5-b", text: "2", isCorrect: false },
          { id: "le-q5-c", text: "9", isCorrect: true },
          { id: "le-q5-d", text: "7", isCorrect: false },
        ],
        explanation: "The y-intercept is the value of b in y = mx + b, which is 9.",
      },
    ],
  },
  {
    id: "quad-eq-quiz",
    lessonId: "quad-eq",
    title: "Quadratic Equations",
    description: "Practice solving quadratics and understanding the discriminant.",
    questions: [
      {
        id: "qe-q1",
        text: "What is the discriminant of x² + 5x + 6 = 0?",
        options: [
          { id: "qe-q1-a", text: "1", isCorrect: true },
          { id: "qe-q1-b", text: "49", isCorrect: false },
          { id: "qe-q1-c", text: "-1", isCorrect: false },
          { id: "qe-q1-d", text: "25", isCorrect: false },
        ],
        explanation: "Δ = b² - 4ac = 25 - 24 = 1. Since Δ > 0, there are two real solutions.",
      },
      {
        id: "qe-q2",
        text: "Solve: x² - 4 = 0",
        options: [
          { id: "qe-q2-a", text: "x = 2", isCorrect: false },
          { id: "qe-q2-b", text: "x = ±2", isCorrect: true },
          { id: "qe-q2-c", text: "x = 4", isCorrect: false },
          { id: "qe-q2-d", text: "x = 0", isCorrect: false },
        ],
        explanation: "x² = 4, so x = √4 = ±2.",
      },
      {
        id: "qe-q3",
        text: "How many real solutions does x² + 1 = 0 have?",
        options: [
          { id: "qe-q3-a", text: "0", isCorrect: true },
          { id: "qe-q3-b", text: "1", isCorrect: false },
          { id: "qe-q3-c", text: "2", isCorrect: false },
          { id: "qe-q3-d", text: "Infinitely many", isCorrect: false },
        ],
        explanation: "Δ = 0 - 4 = -4 < 0, so there are no real solutions.",
      },
      {
        id: "qe-q4",
        text: "What is the factored form of x² - 5x + 6?",
        options: [
          { id: "qe-q4-a", text: "(x - 2)(x - 3)", isCorrect: true },
          { id: "qe-q4-b", text: "(x + 2)(x + 3)", isCorrect: false },
          { id: "qe-q4-c", text: "(x - 1)(x - 6)", isCorrect: false },
          { id: "qe-q4-d", text: "(x + 1)(x + 6)", isCorrect: false },
        ],
        explanation: "We need two numbers that multiply to 6 and add to -5: that's -2 and -3.",
      },
    ],
  },
  {
    id: "systems-quiz",
    lessonId: "systems",
    title: "Systems of Equations",
    description: "Practice solving systems using substitution and elimination.",
    questions: [
      {
        id: "sy-q1",
        text: "Solve the system: x + y = 10, x - y = 4",
        options: [
          { id: "sy-q1-a", text: "x = 7, y = 3", isCorrect: true },
          { id: "sy-q1-b", text: "x = 6, y = 4", isCorrect: false },
          { id: "sy-q1-c", text: "x = 5, y = 5", isCorrect: false },
          { id: "sy-q1-d", text: "x = 8, y = 2", isCorrect: false },
        ],
        explanation: "Adding the equations: 2x = 14, so x = 7. Then y = 10 - 7 = 3.",
      },
      {
        id: "sy-q2",
        text: "A system with parallel lines has how many solutions?",
        options: [
          { id: "sy-q2-a", text: "Exactly one", isCorrect: false },
          { id: "sy-q2-b", text: "Exactly two", isCorrect: false },
          { id: "sy-q2-c", text: "None", isCorrect: true },
          { id: "sy-q2-d", text: "Infinitely many", isCorrect: false },
        ],
        explanation: "Parallel lines never intersect, so the system has no solution.",
      },
      {
        id: "sy-q3",
        text: "Using substitution, if y = 3x and 2x + y = 14, what is x?",
        options: [
          { id: "sy-q3-a", text: "x = 2", isCorrect: false },
          { id: "sy-q3-b", text: "x = 2.8", isCorrect: true },
          { id: "sy-q3-c", text: "x = 4", isCorrect: false },
          { id: "sy-q3-d", text: "x = 7", isCorrect: false },
        ],
        explanation: "Substitute: 2x + 3x = 14 → 5x = 14 → x = 2.8.",
      },
    ],
  },
  {
    id: "functions-quiz",
    lessonId: "functions",
    title: "Functions",
    description: "Test your understanding of functions, composition, and inverses.",
    questions: [
      {
        id: "fn-q1",
        text: "If f(x) = 2x + 3, what is f(5)?",
        options: [
          { id: "fn-q1-a", text: "10", isCorrect: false },
          { id: "fn-q1-b", text: "13", isCorrect: true },
          { id: "fn-q1-c", text: "8", isCorrect: false },
          { id: "fn-q1-d", text: "15", isCorrect: false },
        ],
        explanation: "f(5) = 2(5) + 3 = 10 + 3 = 13.",
      },
      {
        id: "fn-q2",
        text: "Does the relation {(1,2), (2,4), (3,6), (1,8)} represent a function?",
        options: [
          { id: "fn-q2-a", text: "Yes", isCorrect: false },
          { id: "fn-q2-b", text: "No", isCorrect: true },
          { id: "fn-q2-c", text: "Only if we remove (1,8)", isCorrect: false },
          { id: "fn-q2-d", text: "Not enough information", isCorrect: false },
        ],
        explanation: "The input 1 maps to both 2 and 8, violating the definition of a function.",
      },
      {
        id: "fn-q3",
        text: "What is the inverse of f(x) = x + 5?",
        options: [
          { id: "fn-q3-a", text: "f⁻¹(x) = x - 5", isCorrect: true },
          { id: "fn-q3-b", text: "f⁻¹(x) = x + 5", isCorrect: false },
          { id: "fn-q3-c", text: "f⁻¹(x) = 5x", isCorrect: false },
          { id: "fn-q3-d", text: "f⁻¹(x) = x/5", isCorrect: false },
        ],
        explanation: "To find the inverse, solve y = x + 5 for x: x = y - 5, so f⁻¹(x) = x - 5.",
      },
    ],
  },
  {
    id: "triangles-quiz",
    lessonId: "triangles",
    title: "Triangles",
    description: "Test your knowledge of triangle properties and the Pythagorean theorem.",
    questions: [
      {
        id: "tr-q1",
        text: "What is the sum of angles in a triangle?",
        options: [
          { id: "tr-q1-a", text: "90°", isCorrect: false },
          { id: "tr-q1-b", text: "180°", isCorrect: true },
          { id: "tr-q1-c", text: "270°", isCorrect: false },
          { id: "tr-q1-d", text: "360°", isCorrect: false },
        ],
        explanation: "The interior angles of any triangle always sum to 180°.",
      },
      {
        id: "tr-q2",
        text: "A right triangle has legs of length 3 and 4. What is the hypotenuse?",
        options: [
          { id: "tr-q2-a", text: "5", isCorrect: true },
          { id: "tr-q2-b", text: "7", isCorrect: false },
          { id: "tr-q2-c", text: "12", isCorrect: false },
          { id: "tr-q2-d", text: "25", isCorrect: false },
        ],
        explanation: "By the Pythagorean theorem: 3² + 4² = 9 + 16 = 25 = c², so c = 5.",
      },
      {
        id: "tr-q3",
        text: "What is the area of a triangle with base 6 and height 4?",
        options: [
          { id: "tr-q3-a", text: "10", isCorrect: false },
          { id: "tr-q3-b", text: "12", isCorrect: true },
          { id: "tr-q3-c", text: "24", isCorrect: false },
          { id: "tr-q3-d", text: "48", isCorrect: false },
        ],
        explanation: "Area = ½ × base × height = ½ × 6 × 4 = 12.",
      },
    ],
  },
  {
    id: "circles-quiz",
    lessonId: "circles",
    title: "Circles",
    description: "Check your understanding of circle measurements and properties.",
    questions: [
      {
        id: "ci-q1",
        text: "What is the circumference of a circle with radius 5?",
        options: [
          { id: "ci-q1-a", text: "5π", isCorrect: false },
          { id: "ci-q1-b", text: "10π", isCorrect: true },
          { id: "ci-q1-c", text: "25π", isCorrect: false },
          { id: "ci-q1-d", text: "50π", isCorrect: false },
        ],
        explanation: "C = 2πr = 2π(5) = 10π.",
      },
      {
        id: "ci-q2",
        text: "What is the area of a circle with radius 3?",
        options: [
          { id: "ci-q2-a", text: "3π", isCorrect: false },
          { id: "ci-q2-b", text: "6π", isCorrect: false },
          { id: "ci-q2-c", text: "9π", isCorrect: true },
          { id: "ci-q2-d", text: "18π", isCorrect: false },
        ],
        explanation: "A = πr² = π(3²) = 9π.",
      },
    ],
  },
  {
    id: "data-analysis-quiz",
    lessonId: "data-analysis",
    title: "Data Analysis",
    description: "Test your knowledge of statistical measures and data visualization.",
    questions: [
      {
        id: "da-q1",
        text: "What is the mean of {4, 8, 6, 10, 2}?",
        options: [
          { id: "da-q1-a", text: "6", isCorrect: true },
          { id: "da-q1-b", text: "8", isCorrect: false },
          { id: "da-q1-c", text: "5", isCorrect: false },
          { id: "da-q1-d", text: "7", isCorrect: false },
        ],
        explanation: "Mean = (4+8+6+10+2)/5 = 30/5 = 6.",
      },
      {
        id: "da-q2",
        text: "What is the median of {3, 7, 1, 9, 5}?",
        options: [
          { id: "da-q2-a", text: "3", isCorrect: false },
          { id: "da-q2-b", text: "5", isCorrect: true },
          { id: "da-q2-c", text: "7", isCorrect: false },
          { id: "da-q2-d", text: "1", isCorrect: false },
        ],
        explanation: "Ordered: {1, 3, 5, 7, 9}. The middle value is 5.",
      },
      {
        id: "da-q3",
        text: "Which chart is best for showing the relationship between two numeric variables?",
        options: [
          { id: "da-q3-a", text: "Bar chart", isCorrect: false },
          { id: "da-q3-b", text: "Pie chart", isCorrect: false },
          { id: "da-q3-c", text: "Scatter plot", isCorrect: true },
          { id: "da-q3-d", text: "Histogram", isCorrect: false },
        ],
        explanation: "Scatter plots show the relationship (correlation) between two numeric variables.",
      },
    ],
  },
  {
    id: "probability-quiz",
    lessonId: "probability",
    title: "Probability",
    description: "Test your understanding of probability rules and calculations.",
    questions: [
      {
        id: "pr-q1",
        text: "What is the probability of rolling a 3 on a standard six-sided die?",
        options: [
          { id: "pr-q1-a", text: "1/2", isCorrect: false },
          { id: "pr-q1-b", text: "1/3", isCorrect: false },
          { id: "pr-q1-c", text: "1/6", isCorrect: true },
          { id: "pr-q1-d", text: "1/12", isCorrect: false },
        ],
        explanation: "There is one favorable outcome (rolling 3) out of six possible outcomes.",
      },
      {
        id: "pr-q2",
        text: "Two dice are rolled. What is the probability of getting a sum of 7?",
        options: [
          { id: "pr-q2-a", text: "1/6", isCorrect: true },
          { id: "pr-q2-b", text: "1/12", isCorrect: false },
          { id: "pr-q2-c", text: "7/36", isCorrect: false },
          { id: "pr-q2-d", text: "1/36", isCorrect: false },
        ],
        explanation: "There are 6 ways to make 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total outcomes = 36. P = 6/36 = 1/6.",
      },
      {
        id: "pr-q3",
        text: "If P(A) = 0.3 and P(B) = 0.5, and A and B are independent, what is P(A and B)?",
        options: [
          { id: "pr-q3-a", text: "0.15", isCorrect: true },
          { id: "pr-q3-b", text: "0.8", isCorrect: false },
          { id: "pr-q3-c", text: "0.35", isCorrect: false },
          { id: "pr-q3-d", text: "0.2", isCorrect: false },
        ],
        explanation: "For independent events: P(A and B) = P(A) × P(B) = 0.3 × 0.5 = 0.15.",
      },
    ],
  },
  {
    id: "cells-quiz",
    lessonId: "cells",
    title: "Cell Biology",
    description: "Test your knowledge of cell structure and organelle functions.",
    questions: [
      {
        id: "ce-q1",
        text: "Which organelle is known as the 'powerhouse of the cell'?",
        options: [
          { id: "ce-q1-a", text: "Nucleus", isCorrect: false },
          { id: "ce-q1-b", text: "Mitochondria", isCorrect: true },
          { id: "ce-q1-c", text: "Ribosome", isCorrect: false },
          { id: "ce-q1-d", text: "Golgi apparatus", isCorrect: false },
        ],
        explanation: "Mitochondria generate ATP through cellular respiration, providing energy for cell functions.",
      },
      {
        id: "ce-q2",
        text: "What is the main difference between prokaryotic and eukaryotic cells?",
        options: [
          { id: "ce-q2-a", text: "Eukaryotic cells have a nucleus", isCorrect: true },
          { id: "ce-q2-b", text: "Prokaryotic cells are larger", isCorrect: false },
          { id: "ce-q2-c", text: "Eukaryotic cells have no DNA", isCorrect: false },
          { id: "ce-q2-d", text: "Prokaryotic cells have membrane-bound organelles", isCorrect: false },
        ],
        explanation: "Eukaryotic cells have a membrane-bound nucleus and organelles; prokaryotic cells do not.",
      },
      {
        id: "ce-q3",
        text: "Which structure is found in plant cells but NOT in animal cells?",
        options: [
          { id: "ce-q3-a", text: "Cell membrane", isCorrect: false },
          { id: "ce-q3-b", text: "Nucleus", isCorrect: false },
          { id: "ce-q3-c", text: "Chloroplasts", isCorrect: true },
          { id: "ce-q3-d", text: "Mitochondria", isCorrect: false },
        ],
        explanation: "Chloroplasts are found only in plant cells (and some algae) for photosynthesis.",
      },
    ],
  },
  {
    id: "genetics-quiz",
    lessonId: "genetics",
    title: "Genetics",
    description: "Test your understanding of DNA, genes, and Mendelian inheritance.",
    questions: [
      {
        id: "ge-q1",
        text: "Which bases pair together in DNA?",
        options: [
          { id: "ge-q1-a", text: "A-G and C-T", isCorrect: false },
          { id: "ge-q1-b", text: "A-T and C-G", isCorrect: true },
          { id: "ge-q1-c", text: "A-C and G-T", isCorrect: false },
          { id: "ge-q1-d", text: "A-A and C-C", isCorrect: false },
        ],
        explanation: "In DNA, adenine (A) always pairs with thymine (T), and cytosine (C) always pairs with guanine (G).",
      },
      {
        id: "ge-q2",
        text: "A heterozygous organism (Bb) is crossed with a homozygous recessive (bb). What fraction of offspring will show the recessive phenotype?",
        options: [
          { id: "ge-q2-a", text: "1/4", isCorrect: false },
          { id: "ge-q2-b", text: "1/2", isCorrect: true },
          { id: "ge-q2-c", text: "3/4", isCorrect: false },
          { id: "ge-q2-d", text: "All", isCorrect: false },
        ],
        explanation: "Bb × bb produces Bb and bb in equal proportions (50% each). Half show recessive (bb).",
      },
      {
        id: "ge-q3",
        text: "What is the process of DNA → mRNA called?",
        options: [
          { id: "ge-q3-a", text: "Translation", isCorrect: false },
          { id: "ge-q3-b", text: "Transcription", isCorrect: true },
          { id: "ge-q3-c", text: "Replication", isCorrect: false },
          { id: "ge-q3-d", text: "Translation", isCorrect: false },
        ],
        explanation: "Transcription copies DNA into mRNA in the nucleus. Translation reads mRNA to make proteins.",
      },
    ],
  },
  {
    id: "ecology-quiz",
    lessonId: "ecology",
    title: "Ecology",
    description: "Test your knowledge of ecosystems, food webs, and biomes.",
    questions: [
      {
        id: "ec-q1",
        text: "What percentage of energy typically transfers between trophic levels?",
        options: [
          { id: "ec-q1-a", text: "About 1%", isCorrect: false },
          { id: "ec-q1-b", text: "About 10%", isCorrect: true },
          { id: "ec-q1-c", text: "About 50%", isCorrect: false },
          { id: "ec-q1-d", text: "About 90%", isCorrect: false },
        ],
        explanation: "Only about 10% of energy transfers to the next trophic level; the rest is lost as heat.",
      },
      {
        id: "ec-q2",
        text: "Which organisms are producers in an ecosystem?",
        options: [
          { id: "ec-q2-a", text: "Fungi", isCorrect: false },
          { id: "ec-q2-b", text: "Herbivores", isCorrect: false },
          { id: "ec-q2-c", text: "Plants and algae", isCorrect: true },
          { id: "ec-q2-d", text: "Carnivores", isCorrect: false },
        ],
        explanation: "Producers (plants and algae) capture solar energy through photosynthesis.",
      },
    ],
  },
  {
    id: "atoms-quiz",
    lessonId: "atoms",
    title: "Atomic Structure",
    description: "Test your understanding of atomic particles and the periodic table.",
    questions: [
      {
        id: "at-q1",
        text: "What determines which element an atom is?",
        options: [
          { id: "at-q1-a", text: "Number of neutrons", isCorrect: false },
          { id: "at-q1-b", text: "Number of protons", isCorrect: true },
          { id: "at-q1-c", text: "Number of electrons", isCorrect: false },
          { id: "at-q1-d", text: "Number of shells", isCorrect: false },
        ],
        explanation: "The atomic number (number of protons) uniquely identifies each element.",
      },
      {
        id: "at-q2",
        text: "How many electrons can the second energy level hold?",
        options: [
          { id: "at-q2-a", text: "2", isCorrect: false },
          { id: "at-q2-b", text: "8", isCorrect: true },
          { id: "at-q2-c", text: "18", isCorrect: false },
          { id: "at-q2-d", text: "32", isCorrect: false },
        ],
        explanation: "The second energy level can hold a maximum of 8 electrons.",
      },
      {
        id: "at-q3",
        text: "What are valence electrons?",
        options: [
          { id: "at-q3-a", text: "Electrons in the innermost shell", isCorrect: false },
          { id: "at-q3-b", text: "Electrons in the outermost shell", isCorrect: true },
          { id: "at-q3-c", text: "Electrons in the nucleus", isCorrect: false },
          { id: "at-q3-d", text: "Protons in the outer shell", isCorrect: false },
        ],
        explanation: "Valence electrons are in the outermost energy level and determine chemical behavior.",
      },
    ],
  },
  {
    id: "bonds-quiz",
    lessonId: "bonds",
    title: "Chemical Bonds",
    description: "Test your knowledge of ionic, covalent, and metallic bonds.",
    questions: [
      {
        id: "bo-q1",
        text: "In an ionic bond, what happens to electrons?",
        options: [
          { id: "bo-q1-a", text: "They are shared equally", isCorrect: false },
          { id: "bo-q1-b", text: "They are transferred from one atom to another", isCorrect: true },
          { id: "bo-q1-c", text: "They are destroyed", isCorrect: false },
          { id: "bo-q1-d", text: "They are created", isCorrect: false },
        ],
        explanation: "Ionic bonds form when one atom transfers electrons to another, creating oppositely charged ions.",
      },
      {
        id: "bo-q2",
        text: "What type of bond is found in water (H₂O)?",
        options: [
          { id: "bo-q2-a", text: "Ionic bond", isCorrect: false },
          { id: "bo-q2-b", text: "Polar covalent bond", isCorrect: true },
          { id: "bo-q2-c", text: "Metallic bond", isCorrect: false },
          { id: "bo-q2-d", text: "Nonpolar covalent bond", isCorrect: false },
        ],
        explanation: "Water has polar covalent bonds — oxygen shares electrons unequally with hydrogen, creating partial charges.",
      },
    ],
  },
  {
    id: "forces-quiz",
    lessonId: "forces",
    title: "Forces & Motion",
    description: "Test your understanding of Newton's laws and force concepts.",
    questions: [
      {
        id: "fo-q1",
        text: "According to F = ma, what happens to acceleration if force is doubled while mass stays constant?",
        options: [
          { id: "fo-q1-a", text: "Acceleration stays the same", isCorrect: false },
          { id: "fo-q1-b", text: "Acceleration doubles", isCorrect: true },
          { id: "fo-q1-c", text: "Acceleration halves", isCorrect: false },
          { id: "fo-q1-d", text: "Acceleration quadruples", isCorrect: false },
        ],
        explanation: "If F = ma and F doubles (with m constant), then a must also double: 2F = m(2a).",
      },
      {
        id: "fo-q2",
        text: "What does Newton's First Law describe?",
        options: [
          { id: "fo-q2-a", text: "F = ma", isCorrect: false },
          { id: "fo-q2-b", text: "Action-reaction pairs", isCorrect: false },
          { id: "fo-q2-c", text: "Inertia", isCorrect: true },
          { id: "fo-q2-d", text: "Gravity", isCorrect: false },
        ],
        explanation: "Newton's First Law describes inertia: objects resist changes to their state of motion.",
      },
      {
        id: "fo-q3",
        text: "What is the approximate acceleration due to gravity near Earth's surface?",
        options: [
          { id: "fo-q3-a", text: "1.9 m/s²", isCorrect: false },
          { id: "fo-q3-b", text: "9.8 m/s²", isCorrect: true },
          { id: "fo-q3-c", text: "32 m/s²", isCorrect: false },
          { id: "fo-q3-d", text: "98 m/s²", isCorrect: false },
        ],
        explanation: "Objects near Earth's surface accelerate at approximately 9.8 m/s² due to gravity.",
      },
    ],
  },
  {
    id: "grammar-quiz",
    lessonId: "grammar",
    title: "Parts of Speech",
    description: "Test your knowledge of the eight parts of speech.",
    questions: [
      {
        id: "gr-q1",
        text: "In 'She runs quickly,' what part of speech is 'quickly'?",
        options: [
          { id: "gr-q1-a", text: "Adjective", isCorrect: false },
          { id: "gr-q1-b", text: "Adverb", isCorrect: true },
          { id: "gr-q1-c", text: "Verb", isCorrect: false },
          { id: "gr-q1-d", text: "Noun", isCorrect: false },
        ],
        explanation: "'Quickly' modifies the verb 'runs,' making it an adverb.",
      },
      {
        id: "gr-q2",
        text: "Which part of speech connects words or phrases?",
        options: [
          { id: "gr-q2-a", text: "Pronoun", isCorrect: false },
          { id: "gr-q2-b", text: "Conjunction", isCorrect: true },
          { id: "gr-q2-c", text: "Preposition", isCorrect: false },
          { id: "gr-q2-d", text: "Interjection", isCorrect: false },
        ],
        explanation: "Conjunctions (and, but, or, so) connect words, phrases, or clauses.",
      },
      {
        id: "gr-q3",
        text: "What part of speech is 'beautiful' in 'The beautiful garden'?",
        options: [
          { id: "gr-q3-a", text: "Noun", isCorrect: false },
          { id: "gr-q3-b", text: "Verb", isCorrect: false },
          { id: "gr-q3-c", text: "Adjective", isCorrect: true },
          { id: "gr-q3-d", text: "Adverb", isCorrect: false },
        ],
        explanation: "'Beautiful' describes the noun 'garden,' making it an adjective.",
      },
    ],
  },
  {
    id: "reading-quiz",
    lessonId: "reading",
    title: "Reading Comprehension",
    description: "Test your understanding of reading strategies and techniques.",
    questions: [
      {
        id: "rd-q1",
        text: "What does the 'S' in SQ3R stand for?",
        options: [
          { id: "rd-q1-a", text: "Summarize", isCorrect: false },
          { id: "rd-q1-b", text: "Survey", isCorrect: true },
          { id: "rd-q1-c", text: "Skim", isCorrect: false },
          { id: "rd-q1-d", text: "Study", isCorrect: false },
        ],
        explanation: "SQ3R stands for Survey, Question, Read, Recite, Review.",
      },
      {
        id: "rd-q2",
        text: "What is an inference in reading?",
        options: [
          { id: "rd-q2-a", text: "Reading the words exactly as written", isCorrect: false },
          { id: "rd-q2-b", text: "Drawing conclusions based on evidence and prior knowledge", isCorrect: true },
          { id: "rd-q2-c", text: "Memorizing the text", isCorrect: false },
          { id: "rd-q2-d", text: "Reading faster", isCorrect: false },
        ],
        explanation: "An inference combines textual evidence with prior knowledge to draw conclusions not explicitly stated.",
      },
    ],
  },
  {
    id: "writing-quiz",
    lessonId: "writing",
    title: "Essay Writing",
    description: "Test your knowledge of essay structure and writing techniques.",
    questions: [
      {
        id: "wr-q1",
        text: "What does PEEL stand for in paragraph structure?",
        options: [
          { id: "wr-q1-a", text: "Point, Evidence, Explanation, Link", isCorrect: true },
          { id: "wr-q1-b", text: "Paragraph, Example, End, Line", isCorrect: false },
          { id: "wr-q1-c", text: "Point, Example, Evaluate, List", isCorrect: false },
          { id: "wr-q1-d", text: "Proof, Evidence, Edit, Learn", isCorrect: false },
        ],
        explanation: "PEEL: Point (topic sentence), Evidence (support), Explanation (analysis), Link (transition).",
      },
      {
        id: "wr-q2",
        text: "Where does the thesis statement appear in an essay?",
        options: [
          { id: "wr-q2-a", text: "In the conclusion", isCorrect: false },
          { id: "wr-q2-b", text: "In the introduction", isCorrect: true },
          { id: "wr-q2-c", text: "In every body paragraph", isCorrect: false },
          { id: "wr-q2-d", text: "In the title only", isCorrect: false },
        ],
        explanation: "The thesis statement appears in the introduction and states the essay's main argument.",
      },
    ],
  },
  {
    id: "vocab-quiz",
    lessonId: "vocab",
    title: "Vocabulary",
    description: "Test your knowledge of vocabulary strategies and word analysis.",
    questions: [
      {
        id: "vc-q1",
        text: "The prefix 'un-' means:",
        options: [
          { id: "vc-q1-a", text: "Again", isCorrect: false },
          { id: "vc-q1-b", text: "Not", isCorrect: true },
          { id: "vc-q1-c", text: "Before", isCorrect: false },
          { id: "vc-q1-d", text: "Under", isCorrect: false },
        ],
        explanation: "'Un-' is a prefix meaning 'not' (unhappy = not happy, unable = not able).",
      },
      {
        id: "vc-q2",
        text: "The root 'spect' means:",
        options: [
          { id: "vc-q2-a", text: "To write", isCorrect: false },
          { id: "vc-q2-b", text: "To look", isCorrect: true },
          { id: "vc-q2-c", text: "To speak", isCorrect: false },
          { id: "vc-q2-d", text: "To think", isCorrect: false },
        ],
        explanation: "'Spect' means to look: inspect (look into), spectator (one who looks), respect (look back at).",
      },
      {
        id: "vc-q3",
        text: "Which strategy is MOST effective for learning new vocabulary?",
        options: [
          { id: "vc-q3-a", text: "Reading a dictionary cover to cover", isCorrect: false },
          { id: "vc-q3-b", text: "Using context clues and spaced repetition", isCorrect: true },
          { id: "vc-q3-c", text: "Memorizing alphabetical lists", isCorrect: false },
          { id: "vc-q3-d", text: "Only learning words you encounter", isCorrect: false },
        ],
        explanation: "Context clues help you understand meaning in use; spaced repetition moves words to long-term memory.",
      },
    ],
  },
  {
    id: "math-inequalities-quiz",
    lessonId: "inequalities",
    title: "Inequalities Quiz",
    description: "Test your understanding of linear and compound inequalities.",
    questions: [
      {
        id: "iq-q1",
        text: "Solve for x: -3x + 2 > 11",
        options: [
          { id: "iq-q1-a", text: "x > -3", isCorrect: false },
          { id: "iq-q1-b", text: "x < -3", isCorrect: true },
          { id: "iq-q1-c", text: "x > 3", isCorrect: false },
          { id: "iq-q1-d", text: "x < 3", isCorrect: false },
        ],
        explanation: "Subtract 2: -3x > 9. Divide by -3 and flip the sign: x < -3.",
      },
      {
        id: "iq-q2",
        text: "What does the inequality -2 ≤ x < 5 look like on a number line?",
        options: [
          { id: "iq-q2-a", text: "Closed circle at -2, open circle at 5, shaded between", isCorrect: true },
          { id: "iq-q2-b", text: "Open circle at -2, closed circle at 5, shaded between", isCorrect: false },
          { id: "iq-q2-c", text: "Closed circles at both -2 and 5, shaded between", isCorrect: false },
          { id: "iq-q2-d", text: "Open circles at both -2 and 5, shaded between", isCorrect: false },
        ],
        explanation: "The ≤ at -2 means a closed (filled) circle, and the < at 5 means an open circle. Shading goes between them.",
      },
      {
        id: "iq-q3",
        text: "Solve the compound inequality: -1 < 2x + 3 ≤ 9",
        options: [
          { id: "iq-q3-a", text: "-2 < x ≤ 3", isCorrect: true },
          { id: "iq-q3-b", text: "-2 < x < 3", isCorrect: false },
          { id: "iq-q3-c", text: "-4 < x ≤ 6", isCorrect: false },
          { id: "iq-q3-d", text: "2 < x ≤ 6", isCorrect: false },
        ],
        explanation: "Subtract 3: -4 < 2x ≤ 6. Divide by 2: -2 < x ≤ 3.",
      },
      {
        id: "iq-q4",
        text: "Solve: x² - 9 > 0",
        options: [
          { id: "iq-q4-a", text: "-3 < x < 3", isCorrect: false },
          { id: "iq-q4-b", text: "x < -3 or x > 3", isCorrect: true },
          { id: "iq-q4-c", text: "x > 3 only", isCorrect: false },
          { id: "iq-q4-d", text: "x < 3 only", isCorrect: false },
        ],
        explanation: "Factor: (x-3)(x+3) > 0. The expression is positive when both factors are positive (x > 3) or both are negative (x < -3).",
      },
      {
        id: "iq-q5",
        text: "Why do you flip the inequality sign when dividing by a negative number?",
        options: [
          { id: "iq-q5-a", text: "It cancels the negative sign", isCorrect: false },
          { id: "iq-q5-b", text: "The number line reverses order when multiplied by -1", isCorrect: true },
          { id: "iq-q5-c", text: "It makes the variable positive", isCorrect: false },
          { id: "iq-q5-d", text: "The inequality becomes an equation", isCorrect: false },
        ],
        explanation: "Multiplying or dividing by a negative reverses the order of numbers on the number line, so the direction of the inequality must also reverse.",
      },
    ],
  },
  {
    id: "math-functions-advanced-quiz",
    lessonId: "functions-advanced",
    title: "Functions — Advanced Quiz",
    description: "Test your understanding of domain, range, composition, and inverses.",
    questions: [
      {
        id: "fa-q1",
        text: "What is the domain of f(x) = 1/(x - 4)?",
        options: [
          { id: "fa-q1-a", text: "All real numbers", isCorrect: false },
          { id: "fa-q1-b", text: "All real numbers except x = 4", isCorrect: true },
          { id: "fa-q1-c", text: "x > 4", isCorrect: false },
          { id: "fa-q1-d", text: "x ≥ 4", isCorrect: false },
        ],
        explanation: "Division by zero is undefined, so x - 4 ≠ 0, meaning x ≠ 4.",
      },
      {
        id: "fa-q2",
        text: "If f(x) = x² and g(x) = x + 1, what is f(g(3))?",
        options: [
          { id: "fa-q2-a", text: "10", isCorrect: false },
          { id: "fa-q2-b", text: "16", isCorrect: true },
          { id: "fa-q2-c", text: "12", isCorrect: false },
          { id: "fa-q2-d", text: "9", isCorrect: false },
        ],
        explanation: "g(3) = 3 + 1 = 4. Then f(4) = 4² = 16.",
      },
      {
        id: "fa-q3",
        text: "What is the inverse of f(x) = 3x - 6?",
        options: [
          { id: "fa-q3-a", text: "f⁻¹(x) = (x + 6)/3", isCorrect: true },
          { id: "fa-q3-b", text: "f⁻¹(x) = 3x + 6", isCorrect: false },
          { id: "fa-q3-c", text: "f⁻¹(x) = (x - 6)/3", isCorrect: false },
          { id: "fa-q3-d", text: "f⁻¹(x) = x/3 - 6", isCorrect: false },
        ],
        explanation: "Set y = 3x - 6, swap x and y: x = 3y - 6, solve y = (x + 6)/3.",
      },
      {
        id: "fa-q4",
        text: "What is the domain of f(x) = √(x - 5)?",
        options: [
          { id: "fa-q4-a", text: "x > 5", isCorrect: false },
          { id: "fa-q4-b", text: "x ≥ 5", isCorrect: true },
          { id: "fa-q4-c", text: "All real numbers", isCorrect: false },
          { id: "fa-q4-d", text: "x ≤ 5", isCorrect: false },
        ],
        explanation: "The expression under a square root must be ≥ 0, so x - 5 ≥ 0, meaning x ≥ 5.",
      },
      {
        id: "fa-q5",
        text: "Which test determines if a function has an inverse?",
        options: [
          { id: "fa-q5-a", text: "Vertical line test", isCorrect: false },
          { id: "fa-q5-b", text: "Horizontal line test", isCorrect: true },
          { id: "fa-q5-c", text: "Diagonal line test", isCorrect: false },
          { id: "fa-q5-d", text: "Slope test", isCorrect: false },
        ],
        explanation: "The horizontal line test checks if each output comes from only one input (one-to-one). If any horizontal line crosses the graph more than once, no inverse exists.",
      },
    ],
  },
  {
    id: "math-quadrilaterals-quiz",
    lessonId: "quadrilaterals",
    title: "Quadrilaterals Quiz",
    description: "Test your knowledge of quadrilateral types, properties, and area formulas.",
    questions: [
      {
        id: "qd-q1",
        text: "What is the sum of interior angles in any quadrilateral?",
        options: [
          { id: "qd-q1-a", text: "180°", isCorrect: false },
          { id: "qd-q1-b", text: "270°", isCorrect: false },
          { id: "qd-q1-c", text: "360°", isCorrect: true },
          { id: "qd-q1-d", text: "540°", isCorrect: false },
        ],
        explanation: "Any quadrilateral can be split into two triangles, each summing to 180°, so 2 × 180° = 360°.",
      },
      {
        id: "qd-q2",
        text: "What distinguishes a rhombus from a general parallelogram?",
        options: [
          { id: "qd-q2-a", text: "It has four right angles", isCorrect: false },
          { id: "qd-q2-b", text: "It has four equal sides", isCorrect: true },
          { id: "qd-q2-c", text: "It has exactly one pair of parallel sides", isCorrect: false },
          { id: "qd-q2-d", text: "Its diagonals are equal", isCorrect: false },
        ],
        explanation: "A rhombus is a parallelogram with all four sides equal in length.",
      },
      {
        id: "qd-q3",
        text: "What is the area of a trapezoid with bases 6 cm and 10 cm and height 4 cm?",
        options: [
          { id: "qd-q3-a", text: "24 cm²", isCorrect: false },
          { id: "qd-q3-b", text: "32 cm²", isCorrect: true },
          { id: "qd-q3-c", text: "40 cm²", isCorrect: false },
          { id: "qd-q3-d", text: "64 cm²", isCorrect: false },
        ],
        explanation: "A = ½(b₁ + b₂) × h = ½(6 + 10) × 4 = ½(16) × 4 = 32 cm².",
      },
      {
        id: "qd-q4",
        text: "Which statement is true about every square?",
        options: [
          { id: "qd-q4-a", text: "It is a rectangle but not necessarily a rhombus", isCorrect: false },
          { id: "qd-q4-b", text: "It is a rhombus but not necessarily a rectangle", isCorrect: false },
          { id: "qd-q4-c", text: "It is both a rectangle and a rhombus", isCorrect: true },
          { id: "qd-q4-d", text: "It is a trapezoid with equal diagonals", isCorrect: false },
        ],
        explanation: "A square has four right angles (making it a rectangle) and four equal sides (making it a rhombus). It is both.",
      },
      {
        id: "qd-q5",
        text: "How many pairs of parallel sides does a trapezoid have?",
        options: [
          { id: "qd-q5-a", text: "Zero", isCorrect: false },
          { id: "qd-q5-b", text: "Exactly one", isCorrect: true },
          { id: "qd-q5-c", text: "Exactly two", isCorrect: false },
          { id: "qd-q5-d", text: "Three", isCorrect: false },
        ],
        explanation: "A trapezoid is defined as having exactly one pair of parallel sides (the two bases).",
      },
    ],
  },
  {
    id: "math-regression-quiz",
    lessonId: "regression",
    title: "Regression Quiz",
    description: "Test your understanding of correlation, regression lines, and r-values.",
    questions: [
      {
        id: "rg-q1",
        text: "A correlation coefficient of r = -0.92 indicates:",
        options: [
          { id: "rg-q1-a", text: "A strong positive linear relationship", isCorrect: false },
          { id: "rg-q1-b", text: "A strong negative linear relationship", isCorrect: true },
          { id: "rg-q1-c", text: "No linear relationship", isCorrect: false },
          { id: "rg-q1-d", text: "A perfect positive relationship", isCorrect: false },
        ],
        explanation: "The negative sign means negative correlation (as x increases, y decreases). The value 0.92 is close to -1, indicating a strong linear relationship.",
      },
      {
        id: "rg-q2",
        text: "If r = 0.8, what proportion of the variation in y is explained by x?",
        options: [
          { id: "rg-q2-a", text: "80%", isCorrect: false },
          { id: "rg-q2-b", text: "64%", isCorrect: true },
          { id: "rg-q2-c", text: "0.8%", isCorrect: false },
          { id: "rg-q2-d", text: "16%", isCorrect: false },
        ],
        explanation: "r² = 0.8² = 0.64, meaning 64% of the variation in y is explained by the linear model.",
      },
      {
        id: "rg-q3",
        text: "Ice cream sales and drowning incidents are correlated. What is the most likely explanation?",
        options: [
          { id: "rg-q3-a", text: "Ice cream causes drowning", isCorrect: false },
          { id: "rg-q3-b", text: "Drowning increases ice cream sales", isCorrect: false },
          { id: "rg-q3-c", text: "A third variable (hot weather) increases both", isCorrect: true },
          { id: "rg-q3-d", text: "The correlation is a coincidence", isCorrect: false },
        ],
        explanation: "Hot weather causes both more swimming and more ice cream purchases — a lurking variable creates the correlation without direct causation.",
      },
      {
        id: "rg-q4",
        text: "Why should you be cautious about using a regression line for predictions far outside the original data range?",
        options: [
          { id: "rg-q4-a", text: "The line becomes steeper", isCorrect: false },
          { id: "rg-q4-b", text: "Extrapolation assumes the trend continues beyond observed data", isCorrect: true },
          { id: "rg-q4-c", text: "The correlation coefficient changes", isCorrect: false },
          { id: "rg-q4-d", text: "The y-intercept becomes negative", isCorrect: false },
        ],
        explanation: "Extrapolation assumes the observed pattern continues, which may not be true. Relationships can change outside the studied range.",
      },
      {
        id: "rg-q5",
        text: "What does the slope of the regression line ŷ = 2.5 + 0.7x represent?",
        options: [
          { id: "rg-q5-a", text: "The predicted y-value when x = 0", isCorrect: false },
          { id: "rg-q5-b", text: "The predicted increase in y for each one-unit increase in x", isCorrect: true },
          { id: "rg-q5-c", text: "The correlation between x and y", isCorrect: false },
          { id: "rg-q5-d", text: "The average of all y-values", isCorrect: false },
        ],
        explanation: "The slope 0.7 means that for every 1-unit increase in x, the predicted value of y increases by 0.7 units.",
      },
    ],
  },
  {
    id: "science-evolution-quiz",
    lessonId: "evolution",
    title: "Evolution Quiz",
    description: "Test your understanding of natural selection, adaptation, and evidence for evolution.",
    questions: [
      {
        id: "sci-evol-q1",
        text: "What is the primary mechanism of evolution proposed by Darwin?",
        options: [
          { id: "sci-evol-q1-a", text: "Genetic drift", isCorrect: false },
          { id: "sci-evol-q1-b", text: "Natural selection", isCorrect: true },
          { id: "sci-evol-q1-c", text: "Mutation", isCorrect: false },
          { id: "sci-evol-q1-d", text: "Gene flow", isCorrect: false },
        ],
        explanation: "Darwin proposed natural selection as the primary mechanism: organisms with traits better suited to their environment survive longer and reproduce more, passing those traits on.",
      },
      {
        id: "sci-evol-q2",
        text: "Which of the following is an example of an adaptation?",
        options: [
          { id: "sci-evol-q2-a", text: "A bear learning to fish by watching other bears", isCorrect: false },
          { id: "sci-evol-q2-b", text: "A cactus having thick, waxy skin to retain water", isCorrect: true },
          { id: "sci-evol-q2-c", text: "A bird migrating for the first time due to cold weather", isCorrect: false },
          { id: "sci-evol-q2-d", text: "A student getting better at math through practice", isCorrect: false },
        ],
        explanation: "An adaptation is an inherited trait that helps organisms survive in their environment. A cactus's waxy skin is a structural adaptation that reduces water loss — it evolved through natural selection, not learned behavior.",
      },
      {
        id: "sci-evol-q3",
        text: "What is speciation?",
        options: [
          { id: "sci-evol-q3-a", text: "The extinction of a species over time", isCorrect: false },
          { id: "sci-evol-q3-b", text: "The formation of new species from a common ancestor", isCorrect: true },
          { id: "sci-evol-q3-c", text: "The process of fossils forming in sedimentary rock", isCorrect: false },
          { id: "sci-evol-q3-d", text: "The mixing of genes between two different populations", isCorrect: false },
        ],
        explanation: "Speciation is when populations become so genetically different that they can no longer interbreed, forming distinct species.",
      },
      {
        id: "sci-evol-q4",
        text: "Which evidence for evolution compares the bone structures of different species' limbs?",
        options: [
          { id: "sci-evol-q4-a", text: "Fossil record evidence", isCorrect: false },
          { id: "sci-evol-q4-b", text: "DNA comparison evidence", isCorrect: false },
          { id: "sci-evol-q4-c", text: "Comparative anatomy (homologous structures)", isCorrect: true },
          { id: "sci-evol-q4-d", text: "Embryological evidence", isCorrect: false },
        ],
        explanation: "Homologous structures — like the similar bone patterns in a human arm, whale flipper, and bat wing — are evidence of common ancestry through comparative anatomy.",
      },
      {
        id: "sci-evol-q5",
        text: "Which condition is NOT required for natural selection to occur?",
        options: [
          { id: "sci-evol-q5-a", text: "Variation in traits within a population", isCorrect: false },
          { id: "sci-evol-q5-b", text: "Traits must be heritable", isCorrect: false },
          { id: "sci-evol-q5-c", text: "Individuals must intentionally choose to mutate", isCorrect: true },
          { id: "sci-evol-q5-d", text: "More offspring are produced than can survive", isCorrect: false },
        ],
        explanation: "Natural selection requires variation, heritability, and overproduction of offspring. Mutations are random — organisms do not choose to mutate.",
      },
    ],
  },
  {
    id: "science-chemical-bonding-quiz",
    lessonId: "chemical-bonding",
    title: "Chemical Bonding Quiz",
    description: "Test your understanding of ionic, covalent, and metallic bonds, electronegativity, and Lewis structures.",
    questions: [
      {
        id: "sci-cb-q1",
        text: "What determines whether a bond is ionic, polar covalent, or nonpolar covalent?",
        options: [
          { id: "sci-cb-q1-a", text: "The number of protons in each atom", isCorrect: false },
          { id: "sci-cb-q1-b", text: "The difference in electronegativity between the atoms", isCorrect: true },
          { id: "sci-cb-q1-c", text: "The size of the atoms", isCorrect: false },
          { id: "sci-cb-q1-d", text: "The number of electron shells", isCorrect: false },
        ],
        explanation: "Electronegativity difference is the key factor. A large difference (~1.7 or more) produces ionic bonds, moderate differences produce polar covalent bonds, and small differences produce nonpolar covalent bonds.",
      },
      {
        id: "sci-cb-q2",
        text: "Why do metals conduct electricity?",
        options: [
          { id: "sci-cb-q2-a", text: "Because they have tightly bound valence electrons", isCorrect: false },
          { id: "sci-cb-q2-b", text: "Because they contain ionic bonds that allow ion movement", isCorrect: false },
          { id: "sci-cb-q2-c", text: "Because delocalized electrons are free to move through the lattice", isCorrect: true },
          { id: "sci-cb-q2-d", text: "Because their atoms have very high electronegativity", isCorrect: false },
        ],
        explanation: "In metallic bonding, valence electrons are delocalized and form a 'sea' that moves freely among metal cations. These free-moving electrons carry electrical current.",
      },
      {
        id: "sci-cb-q3",
        text: "In a Lewis structure, what does a line between two atoms represent?",
        options: [
          { id: "sci-cb-q3-a", text: "One lone pair of electrons", isCorrect: false },
          { id: "sci-cb-q3-b", text: "A shared pair of electrons (a covalent bond)", isCorrect: true },
          { id: "sci-cb-q3-c", text: "An ionic attraction between atoms", isCorrect: false },
          { id: "sci-cb-q3-d", text: "A hydrogen bond between molecules", isCorrect: false },
        ],
        explanation: "Each line in a Lewis structure represents one shared pair of electrons — a single covalent bond.",
      },
      {
        id: "sci-cb-q4",
        text: "What makes a covalent bond polar?",
        options: [
          { id: "sci-cb-q4-a", text: "Both atoms have the same electronegativity", isCorrect: false },
          { id: "sci-cb-q4-b", text: "Electrons are shared unequally between the two atoms", isCorrect: true },
          { id: "sci-cb-q4-c", text: "One atom completely transfers an electron to the other", isCorrect: false },
          { id: "sci-cb-q4-d", text: "The bond is between two identical nonmetal atoms", isCorrect: false },
        ],
        explanation: "A polar covalent bond occurs when one atom is more electronegative than the other, pulling the shared electrons closer.",
      },
      {
        id: "sci-cb-q5",
        text: "What is the octet rule?",
        options: [
          { id: "sci-cb-q5-a", text: "Atoms are most stable with exactly 8 protons", isCorrect: false },
          { id: "sci-cb-q5-b", text: "Elements exist in groups of 8 on the periodic table", isCorrect: false },
          { id: "sci-cb-q5-c", text: "Most atoms are most stable with 8 electrons in their outer shell", isCorrect: true },
          { id: "sci-cb-q5-d", text: "Covalent bonds always involve 8 shared electrons", isCorrect: false },
        ],
        explanation: "The octet rule states that atoms tend to gain, lose, or share electrons until they have 8 electrons in their valence (outer) shell.",
      },
    ],
  },
  {
    id: "science-energy-quiz",
    lessonId: "energy",
    title: "Energy Quiz",
    description: "Test your understanding of energy types, conservation of energy, work, and power.",
    questions: [
      {
        id: "sci-energy-q1",
        text: "Which form of energy is stored in a stretched rubber band?",
        options: [
          { id: "sci-energy-q1-a", text: "Kinetic energy", isCorrect: false },
          { id: "sci-energy-q1-b", text: "Thermal energy", isCorrect: false },
          { id: "sci-energy-q1-c", text: "Elastic potential energy", isCorrect: true },
          { id: "sci-energy-q1-d", text: "Chemical potential energy", isCorrect: false },
        ],
        explanation: "Elastic potential energy is stored in objects that can be stretched or compressed.",
      },
      {
        id: "sci-energy-q2",
        text: "What happens to the total energy in a closed system according to the law of conservation of energy?",
        options: [
          { id: "sci-energy-q2-a", text: "Energy is constantly created to replace used energy", isCorrect: false },
          { id: "sci-energy-q2-b", text: "Energy is destroyed when it does work", isCorrect: false },
          { id: "sci-energy-q2-c", text: "Energy can only be transformed from one form to another, not created or destroyed", isCorrect: true },
          { id: "sci-energy-q2-d", text: "Energy always decreases over time", isCorrect: false },
        ],
        explanation: "The law of conservation of energy states that energy cannot be created or destroyed — it can only be transformed from one form to another.",
      },
      {
        id: "sci-energy-q3",
        text: "If you double the speed of a moving object, how does its kinetic energy change?",
        options: [
          { id: "sci-energy-q3-a", text: "It doubles", isCorrect: false },
          { id: "sci-energy-q3-b", text: "It quadruples", isCorrect: true },
          { id: "sci-energy-q3-c", text: "It stays the same", isCorrect: false },
          { id: "sci-energy-q3-d", text: "It increases by a factor of 8", isCorrect: false },
        ],
        explanation: "Kinetic energy equals ½mv². Since velocity is squared, doubling the speed multiplies kinetic energy by 2² = 4.",
      },
      {
        id: "sci-energy-q4",
        text: "What is the difference between work and power?",
        options: [
          { id: "sci-energy-q4-a", text: "Work and power are the same thing", isCorrect: false },
          { id: "sci-energy-q4-b", text: "Work is energy transferred by force over distance; power is the rate at which work is done", isCorrect: true },
          { id: "sci-energy-q4-c", text: "Work only applies to lifting; power only applies to moving horizontally", isCorrect: false },
          { id: "sci-energy-q4-d", text: "Power is measured in joules; work is measured in watts", isCorrect: false },
        ],
        explanation: "Work (W = Fd) is the transfer of energy through force applied over a distance. Power (P = W/t) is how quickly that work is done.",
      },
      {
        id: "sci-energy-q5",
        text: "Why do phase changes (like melting ice) require energy without increasing temperature?",
        options: [
          { id: "sci-energy-q5-a", text: "The energy disappears completely", isCorrect: false },
          { id: "sci-energy-q5-b", text: "The energy breaks intermolecular bonds instead of increasing molecular speed", isCorrect: true },
          { id: "sci-energy-q5-c", text: "Phase changes do not require any energy", isCorrect: false },
          { id: "sci-energy-q5-d", text: "The thermometer is broken during phase changes", isCorrect: false },
        ],
        explanation: "During a phase change, the added energy (called latent heat) goes into breaking or forming intermolecular bonds rather than increasing the kinetic energy (temperature) of the molecules.",
      },
    ],
  },
  {
    id: "science-waves-quiz",
    lessonId: "waves",
    title: "Waves Quiz",
    description: "Test your understanding of wave types, properties, the electromagnetic spectrum, and interference.",
    questions: [
      {
        id: "sci-wave-q1",
        text: "How do transverse waves differ from longitudinal waves?",
        options: [
          { id: "sci-wave-q1-a", text: "Transverse waves are faster than longitudinal waves", isCorrect: false },
          { id: "sci-wave-q1-b", text: "In transverse waves, particle motion is perpendicular to the wave direction; in longitudinal waves, it is parallel", isCorrect: true },
          { id: "sci-wave-q1-c", text: "Transverse waves only occur in water; longitudinal waves occur everywhere else", isCorrect: false },
          { id: "sci-wave-q1-d", text: "Longitudinal waves carry more energy", isCorrect: false },
        ],
        explanation: "In transverse waves (like light and string vibrations), particles move perpendicular to the wave direction. In longitudinal waves (like sound), particles move back and forth in the same direction the wave travels.",
      },
      {
        id: "sci-wave-q2",
        text: "What does amplitude determine for a wave?",
        options: [
          { id: "sci-wave-q2-a", text: "The speed of the wave", isCorrect: false },
          { id: "sci-wave-q2-b", text: "The wavelength of the wave", isCorrect: false },
          { id: "sci-wave-q2-c", text: "The energy of the wave (loudness for sound, brightness for light)", isCorrect: true },
          { id: "sci-wave-q2-d", text: "The frequency of the wave", isCorrect: false },
        ],
        explanation: "Amplitude is the maximum displacement from rest. Greater amplitude means more energy — a louder sound or brighter light.",
      },
      {
        id: "sci-wave-q3",
        text: "Using the wave equation v = fλ, what happens to wavelength when frequency increases but speed stays the same?",
        options: [
          { id: "sci-wave-q3-a", text: "Wavelength increases", isCorrect: false },
          { id: "sci-wave-q3-b", text: "Wavelength stays the same", isCorrect: false },
          { id: "sci-wave-q3-c", text: "Wavelength decreases", isCorrect: true },
          { id: "sci-wave-q3-d", text: "Both wavelength and speed increase", isCorrect: false },
        ],
        explanation: "From v = fλ, if speed (v) is constant and frequency (f) increases, wavelength (λ) must decrease to keep the equation balanced.",
      },
      {
        id: "sci-wave-q4",
        text: "Which type of electromagnetic wave has the highest energy?",
        options: [
          { id: "sci-wave-q4-a", text: "Radio waves", isCorrect: false },
          { id: "sci-wave-q4-b", text: "Infrared radiation", isCorrect: false },
          { id: "sci-wave-q4-c", text: "Visible light", isCorrect: false },
          { id: "sci-wave-q4-d", text: "Gamma rays", isCorrect: true },
        ],
        explanation: "Gamma rays have the shortest wavelength and highest frequency in the electromagnetic spectrum, giving them the most energy.",
      },
      {
        id: "sci-wave-q5",
        text: "How do noise-canceling headphones use wave interference?",
        options: [
          { id: "sci-wave-q5-a", text: "They use constructive interference to amplify quiet sounds", isCorrect: false },
          { id: "sci-wave-q5-b", text: "They physically block sound waves with dense material", isCorrect: false },
          { id: "sci-wave-q5-c", text: "They generate a sound wave that destructively interferes with ambient noise", isCorrect: true },
          { id: "sci-wave-q5-d", text: "They convert sound waves into heat energy", isCorrect: false },
        ],
        explanation: "Noise-canceling headphones use destructive interference: a microphone detects ambient noise, and the headphones produce an opposite sound wave that cancels it out.",
      },
    ],
  },
  {
    id: "english-sentence-structure-quiz",
    lessonId: "sentence-structure",
    title: "Sentence Structure Quiz",
    description: "Test your knowledge of clauses, sentence types, and common sentence errors.",
    questions: [
      {
        id: "ss-q1",
        text: "Which of the following is an independent clause?",
        options: [
          { id: "ss-q1-a", text: "Because she was late", isCorrect: false },
          { id: "ss-q1-b", text: "Running through the park", isCorrect: false },
          { id: "ss-q1-c", text: "The cat slept on the mat", isCorrect: true },
          { id: "ss-q1-d", text: "Although it rained", isCorrect: false },
        ],
        explanation: "An independent clause has a subject and verb and can stand alone as a sentence.",
      },
      {
        id: "ss-q2",
        text: 'What type of sentence is: "I went to the store, and I bought milk"?',
        options: [
          { id: "ss-q2-a", text: "Simple", isCorrect: false },
          { id: "ss-q2-b", text: "Compound", isCorrect: true },
          { id: "ss-q2-c", text: "Complex", isCorrect: false },
          { id: "ss-q2-d", text: "Compound-complex", isCorrect: false },
        ],
        explanation: "This sentence joins two independent clauses with a coordinating conjunction ('and'), making it a compound sentence.",
      },
      {
        id: "ss-q3",
        text: "Which sentence contains a comma splice?",
        options: [
          { id: "ss-q3-a", text: "I went to the store, and I bought milk.", isCorrect: false },
          { id: "ss-q3-b", text: "I went to the store; I bought milk.", isCorrect: false },
          { id: "ss-q3-c", text: "I went to the store, I bought milk.", isCorrect: true },
          { id: "ss-q3-d", text: "Because I needed milk, I went to the store.", isCorrect: false },
        ],
        explanation: "A comma splice incorrectly joins two independent clauses with only a comma.",
      },
      {
        id: "ss-q4",
        text: 'What makes this sentence a fragment? "Running through the park."',
        options: [
          { id: "ss-q4-a", text: "It has no verb", isCorrect: false },
          { id: "ss-q4-b", text: "It has no subject", isCorrect: true },
          { id: "ss-q4-c", text: "It is too short", isCorrect: false },
          { id: "ss-q4-d", text: "It has a dependent clause", isCorrect: false },
        ],
        explanation: "A fragment is missing a subject, verb, or complete thought. 'Running through the park' has a verb form but no subject.",
      },
      {
        id: "ss-q5",
        text: "Which is a complex sentence?",
        options: [
          { id: "ss-q5-a", text: "The dog barked.", isCorrect: false },
          { id: "ss-q5-b", text: "The dog barked, and the cat ran.", isCorrect: false },
          { id: "ss-q5-c", text: "While I was cooking, the phone rang.", isCorrect: true },
          { id: "ss-q5-d", text: "I cooked. The phone rang. The dog barked.", isCorrect: false },
        ],
        explanation: "A complex sentence has one independent clause and at least one dependent clause.",
      },
    ],
  },
  {
    id: "english-punctuation-quiz",
    lessonId: "punctuation",
    title: "Punctuation Quiz",
    description: "Test your understanding of commas, semicolons, colons, apostrophes, and dashes.",
    questions: [
      {
        id: "pu-q1",
        text: "Which sentence correctly uses a semicolon?",
        options: [
          { id: "pu-q1-a", text: "I love coffee; and tea.", isCorrect: false },
          { id: "pu-q1-b", text: "I love coffee; I drink it every morning.", isCorrect: true },
          { id: "pu-q1-c", text: "Because I love coffee; I drink it daily.", isCorrect: false },
          { id: "pu-q1-d", text: "I love; coffee.", isCorrect: false },
        ],
        explanation: "A semicolon connects two closely related independent clauses.",
      },
      {
        id: "pu-q2",
        text: "Which sentence uses a colon correctly?",
        options: [
          { id: "pu-q2-a", text: "The ingredients are: flour, sugar, and eggs.", isCorrect: false },
          { id: "pu-q2-b", text: "You need three things: patience, practice, and persistence.", isCorrect: true },
          { id: "pu-q2-c", text: "She bought: apples, bananas, and oranges.", isCorrect: false },
          { id: "pu-q2-d", text: "The color: is blue.", isCorrect: false },
        ],
        explanation: "A colon must follow a complete sentence and introduce what follows.",
      },
      {
        id: "pu-q3",
        text: 'Which sentence correctly uses "its" vs. "it\'s"?',
        options: [
          { id: "pu-q3-a", text: "The dog wagged it's tail.", isCorrect: false },
          { id: "pu-q3-b", text: "Its raining outside.", isCorrect: false },
          { id: "pu-q3-c", text: "The cat licked its paw.", isCorrect: true },
          { id: "pu-q3-d", text: "Its a beautiful day.", isCorrect: false },
        ],
        explanation: "'Its' (no apostrophe) is possessive. 'It's' is a contraction of 'it is.'",
      },
      {
        id: "pu-q4",
        text: "Which sentence correctly uses an Oxford comma?",
        options: [
          { id: "pu-q4-a", text: "I love my parents, Batman and Spider-Man.", isCorrect: false },
          { id: "pu-q4-b", text: "I love my parents Batman and Spider-Man.", isCorrect: false },
          { id: "pu-q4-c", text: "I love my parents, Batman, and Spider-Man.", isCorrect: true },
          { id: "pu-q4-d", text: "I love my parents; Batman; and Spider-Man.", isCorrect: false },
        ],
        explanation: "The Oxford comma is the comma before the final 'and' or 'or' in a list of three or more items.",
      },
      {
        id: "pu-q5",
        text: "What is the primary function of an em dash?",
        options: [
          { id: "pu-q5-a", text: "To show possession", isCorrect: false },
          { id: "pu-q5-b", text: "To separate items in a list", isCorrect: false },
          { id: "pu-q5-c", text: "To add emphasis or set off interruptions", isCorrect: true },
          { id: "pu-q5-d", text: "To connect two related sentences", isCorrect: false },
        ],
        explanation: "Em dashes (—) add emphasis, set off parenthetical information, or indicate an interruption.",
      },
    ],
  },
  {
    id: "english-literary-analysis-quiz",
    lessonId: "literary-analysis",
    title: "Literary Analysis Quiz",
    description: "Test your understanding of theme, symbolism, irony, point of view, and tone.",
    questions: [
      {
        id: "la-q1",
        text: "What is the difference between tone and mood?",
        options: [
          { id: "la-q1-a", text: "They are the same thing.", isCorrect: false },
          { id: "la-q1-b", text: "Tone is the author's attitude; mood is the feeling created in the reader.", isCorrect: true },
          { id: "la-q1-c", text: "Tone is the reader's reaction; mood is the author's intent.", isCorrect: false },
          { id: "la-q1-d", text: "Tone applies only to dialogue; mood applies only to setting.", isCorrect: false },
        ],
        explanation: "Tone reflects the author's attitude toward the subject, while mood is the emotional atmosphere the text creates for the reader.",
      },
      {
        id: "la-q2",
        text: "In Romeo and Juliet, the audience knows Juliet is merely sleeping while Romeo believes she is dead. This is an example of:",
        options: [
          { id: "la-q2-a", text: "Verbal irony", isCorrect: false },
          { id: "la-q2-b", text: "Situational irony", isCorrect: false },
          { id: "la-q2-c", text: "Dramatic irony", isCorrect: true },
          { id: "la-q2-d", text: "Symbolism", isCorrect: false },
        ],
        explanation: "Dramatic irony occurs when the audience knows something a character does not.",
      },
      {
        id: "la-q3",
        text: "What is a theme of a literary work?",
        options: [
          { id: "la-q3-a", text: "A detailed summary of the plot", isCorrect: false },
          { id: "la-q3-b", text: "A central message or insight about life or human nature", isCorrect: true },
          { id: "la-q3-c", text: "The physical setting of the story", isCorrect: false },
          { id: "la-q3-d", text: "The author's biography", isCorrect: false },
        ],
        explanation: "Theme is the central idea or message a text conveys about life, society, or human nature.",
      },
      {
        id: "la-q4",
        text: "In The Great Gatsby, the green light at the end of Daisy's dock is an example of:",
        options: [
          { id: "la-q4-a", text: "Imagery only", isCorrect: false },
          { id: "la-q4-b", text: "Symbolism", isCorrect: true },
          { id: "la-q4-c", text: "Verbal irony", isCorrect: false },
          { id: "la-q4-d", text: "A theme statement", isCorrect: false },
        ],
        explanation: "The green light is a symbol — a concrete object representing abstract ideas.",
      },
      {
        id: "la-q5",
        text: "A story told from the first-person point of view ('I') provides:",
        options: [
          { id: "la-q5-a", text: "Access to all characters' thoughts", isCorrect: false },
          { id: "la-q5-b", text: "An objective, outside perspective on all events", isCorrect: false },
          { id: "la-q5-c", text: "Intimate access to the narrator's thoughts but a limited perspective", isCorrect: true },
          { id: "la-q5-d", text: "No access to any character's inner thoughts", isCorrect: false },
        ],
        explanation: "First-person narration gives direct access to the narrator's thoughts but limits perspective to what the narrator knows.",
      },
    ],
  },
  {
    id: "english-vocabulary-strategies-quiz",
    lessonId: "vocabulary-strategies",
    title: "Vocabulary Strategies Quiz",
    description: "Test your understanding of context clues, word parts, and vocabulary-building strategies.",
    questions: [
      {
        id: "vs-q1",
        text: 'In "She was meticulous, almost obsessive, about cleanliness," what type of context clue helps you understand "meticulous"?',
        options: [
          { id: "vs-q1-a", text: "Antonym clue", isCorrect: false },
          { id: "vs-q1-b", text: "Synonym clue", isCorrect: true },
          { id: "vs-q1-c", text: "Example clue", isCorrect: false },
          { id: "vs-q1-d", text: "Definition clue", isCorrect: false },
        ],
        explanation: "'Obsessive' is presented as a synonym to clarify 'meticulous.'",
      },
      {
        id: "vs-q2",
        text: 'The prefix "un-" in "unhappy" means:',
        options: [
          { id: "vs-q2-a", text: "Again", isCorrect: false },
          { id: "vs-q2-b", text: "Wrongly", isCorrect: false },
          { id: "vs-q2-c", text: "Not", isCorrect: true },
          { id: "vs-q2-d", text: "Before", isCorrect: false },
        ],
        explanation: "The prefix 'un-' means 'not' or 'reverse.'",
      },
      {
        id: "vs-q3",
        text: 'The root "spect" means "to look." Which word shares this root?',
        options: [
          { id: "vs-q3-a", text: "Inject", isCorrect: false },
          { id: "vs-q3-b", text: "Transport", isCorrect: false },
          { id: "vs-q3-c", text: "Retrospect", isCorrect: true },
          { id: "vs-q3-d", text: "Predict", isCorrect: false },
        ],
        explanation: "Retrospect means 'looking back' — 'retro' means back and 'spect' means to look.",
      },
      {
        id: "vs-q4",
        text: 'What is the difference between "thrifty" and "cheap"?',
        options: [
          { id: "vs-q4-a", text: "They have identical meanings", isCorrect: false },
          { id: "vs-q4-b", text: "They differ in denotation but not connotation", isCorrect: false },
          { id: "vs-q4-c", text: "They share a denotation but have different connotations — 'thrifty' is positive, 'cheap' is negative", isCorrect: true },
          { id: "vs-q4-d", text: "They differ only in spelling", isCorrect: false },
        ],
        explanation: "Both words denote being careful with money, but their connotations differ significantly.",
      },
      {
        id: "vs-q5",
        text: "What is the most effective long-term strategy for building vocabulary?",
        options: [
          { id: "vs-q5-a", text: "Memorizing random word lists", isCorrect: false },
          { id: "vs-q5-b", text: "Only reading challenging texts", isCorrect: false },
          { id: "vs-q5-c", text: "Learning words from context and reviewing them at spaced intervals", isCorrect: true },
          { id: "vs-q5-d", text: "Using a dictionary to look up every unknown word while reading", isCorrect: false },
        ],
        explanation: "Research shows that learning words from context and using spaced repetition is the most effective approach.",
      },
    ],
  },
  {
    id: "english-persuasive-writing-quiz",
    lessonId: "persuasive-writing",
    title: "Persuasive Writing Quiz",
    description: "Test your knowledge of thesis statements, rhetorical appeals, and argument structure.",
    questions: [
      {
        id: "pw-q1",
        text: "Which is the strongest thesis statement?",
        options: [
          { id: "pw-q1-a", text: "Pollution is bad.", isCorrect: false },
          { id: "pw-q1-b", text: "Cities should invest in public transit to reduce carbon emissions and improve air quality.", isCorrect: true },
          { id: "pw-q1-c", text: "This essay is about public transit.", isCorrect: false },
          { id: "pw-q1-d", text: "Many people have opinions about transportation.", isCorrect: false },
        ],
        explanation: "A strong thesis is specific, arguable, and provides direction.",
      },
      {
        id: "pw-q2",
        text: "What are Aristotle's three rhetorical appeals?",
        options: [
          { id: "pw-q2-a", text: "Facts, opinions, and emotions", isCorrect: false },
          { id: "pw-q2-b", text: "Ethos, pathos, and logos", isCorrect: true },
          { id: "pw-q2-c", text: "Introduction, body, and conclusion", isCorrect: false },
          { id: "pw-q2-d", text: "Claim, evidence, and reasoning", isCorrect: false },
        ],
        explanation: "Aristotle identified ethos (credibility), pathos (emotional appeal), and logos (logical reasoning).",
      },
      {
        id: "pw-q3",
        text: "Why should you address counterarguments in a persuasive essay?",
        options: [
          { id: "pw-q3-a", text: "To weaken your own position", isCorrect: false },
          { id: "pw-q3-b", text: "To fill space in the essay", isCorrect: false },
          { id: "pw-q3-c", text: "To show you've considered other perspectives and strengthen your credibility", isCorrect: true },
          { id: "pw-q3-d", text: "To prove the other side is correct", isCorrect: false },
        ],
        explanation: "Addressing counterarguments shows intellectual honesty and builds ethos.",
      },
      {
        id: "pw-q4",
        text: "Which is an example of pathos (emotional appeal)?",
        options: [
          { id: "pw-q4-a", text: "Citing a peer-reviewed study on pollution levels", isCorrect: false },
          { id: "pw-q4-b", text: "Describing a child with asthma struggling to breathe in a polluted neighborhood", isCorrect: true },
          { id: "pw-q4-c", text: "Stating you are a professor of environmental science", isCorrect: false },
          { id: "pw-q4-d", text: "Presenting statistics on carbon emissions", isCorrect: false },
        ],
        explanation: "Pathos appeals to the reader's emotions. Describing a child suffering from pollution connects emotionally.",
      },
      {
        id: "pw-q5",
        text: "What should every body paragraph in a persuasive essay connect back to?",
        options: [
          { id: "pw-q5-a", text: "A counterargument", isCorrect: false },
          { id: "pw-q5-b", text: "The introduction's hook", isCorrect: false },
          { id: "pw-q5-c", text: "The thesis statement", isCorrect: true },
          { id: "pw-q5-d", text: "The conclusion", isCorrect: false },
        ],
        explanation: "Every body paragraph must support the thesis — the central argument of the essay.",
      },
    ],
  },
  {
    id: "english-research-papers-quiz",
    lessonId: "research-papers",
    title: "Research Papers Quiz",
    description: "Test your understanding of source evaluation, citation styles, paraphrasing, and plagiarism.",
    questions: [
      {
        id: "rp-q1",
        text: "Which is the most reliable type of source for academic research?",
        options: [
          { id: "rp-q1-a", text: "A personal blog post", isCorrect: false },
          { id: "rp-q1-b", text: "A Wikipedia article", isCorrect: false },
          { id: "rp-q1-c", text: "A peer-reviewed journal article", isCorrect: true },
          { id: "rp-q1-d", text: "A social media post", isCorrect: false },
        ],
        explanation: "Peer-reviewed journal articles are the gold standard for academic research.",
      },
      {
        id: "rp-q2",
        text: "In APA citation style, which format is correct?",
        options: [
          { id: "rp-q2-a", text: "(Smith 45)", isCorrect: false },
          { id: "rp-q2-b", text: "(Smith, 2023, p. 45)", isCorrect: true },
          { id: "rp-q2-c", text: "(Smith, p. 45, 2023)", isCorrect: false },
          { id: "rp-q2-d", text: "(45, Smith)", isCorrect: false },
        ],
        explanation: "APA style includes the author's last name, year of publication, and page number.",
      },
      {
        id: "rp-q3",
        text: 'What is wrong with this paraphrase of "Climate change threatens coastal communities through rising sea levels" → "Global warming endangers seaside towns because of increasing ocean heights"?',
        options: [
          { id: "rp-q3-a", text: "It changes too much of the original meaning", isCorrect: false },
          { id: "rp-q3-b", text: "It uses a thesaurus to swap synonyms while keeping the same sentence structure", isCorrect: true },
          { id: "rp-q3-c", text: "It is too long", isCorrect: false },
          { id: "rp-q3-d", text: "It adds too many details", isCorrect: false },
        ],
        explanation: "This is 'patchwriting' — superficially changing a few words while keeping the same structure.",
      },
      {
        id: "rp-q4",
        text: "When should you cite a source?",
        options: [
          { id: "rp-q4-a", text: "Only when you use direct quotes", isCorrect: false },
          { id: "rp-q4-b", text: "When you use someone else's idea, even if you paraphrase it", isCorrect: true },
          { id: "rp-q4-c", text: "Only for statistics and data", isCorrect: false },
          { id: "rp-q4-d", text: "Only when writing the Works Cited page", isCorrect: false },
        ],
        explanation: "You must cite a source whenever you use someone else's idea, whether you quote it directly, paraphrase it, or summarize it.",
      },
      {
        id: "rp-q5",
        text: "What does a colon introduce after a complete sentence?",
        options: [
          { id: "rp-q5-a", text: "Another complete sentence", isCorrect: false },
          { id: "rp-q5-b", text: "A list, explanation, or elaboration", isCorrect: true },
          { id: "rp-q5-c", text: "A dependent clause", isCorrect: false },
          { id: "rp-q5-d", text: "A parenthetical citation", isCorrect: false },
        ],
        explanation: "A colon follows a complete sentence and introduces a list, explanation, or elaboration.",
      },
    ],
  },
];

function getQuizByLessonId(lessonId: string): QuizData | undefined {
  return QUIZZES.find((q) => q.lessonId === lessonId);
}

function getQuizById(quizId: string): QuizData | undefined {
  return QUIZZES.find((q) => q.id === quizId);
}

function getAllQuizIds(): string[] {
  return QUIZZES.map((q) => q.id);
}

function getSubjectQuizIds(subjectId: string, lessonIds: string[]): string[] {
  return QUIZZES.filter((q) => lessonIds.includes(q.lessonId)).map((q) => q.id);
}

export { getQuizByLessonId, getQuizById, getAllQuizIds, getSubjectQuizIds };
