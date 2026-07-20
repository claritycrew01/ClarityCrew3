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
