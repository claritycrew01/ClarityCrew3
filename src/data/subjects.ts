export interface LessonData {
  id: string;
  chapterId: string;
  subjectId: string;
  title: string;
  body: string;
  simplifiedBody: string;
  duration: string;
  durationMinutes: number;
  cognitiveLoad: "low" | "medium" | "high";
}

export interface ChapterData {
  id: string;
  subjectId: string;
  title: string;
  order: number;
  lessons: LessonData[];
}

export interface SubjectData {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  chapters: ChapterData[];
}

export const SUBJECTS: SubjectData[] = [
  {
    id: "math",
    name: "Mathematics",
    description: "Build fluency across algebra, geometry, and statistics.",
    icon: "Calculator",
    color: "skill-blue",
    chapters: [
      {
        id: "math-algebra",
        subjectId: "math",
        title: "Algebra",
        order: 1,
        lessons: [
          {
            id: "linear-eq",
            chapterId: "math-algebra",
            subjectId: "math",
            title: "Linear Equations",
            body: "A linear equation is an equation that forms a straight line when graphed. The most common form is slope-intercept: y = mx + b, where m represents the slope (rate of change) and b represents the y-intercept (where the line crosses the y-axis).\n\nTo solve a linear equation, isolate the variable by performing inverse operations on both sides. For example, to solve 3x + 7 = 22, subtract 7 from both sides to get 3x = 15, then divide by 3 to get x = 5.\n\nThe slope m can be calculated from two points (x₁, y₁) and (x₂, y₂) using the formula: m = (y₂ - y₁) / (x₂ - x₁). A positive slope means the line rises from left to right; a negative slope means it falls.\n\nLinear equations model many real-world situations: distance over time at constant speed, cost with a fixed fee plus per-unit pricing, and temperature conversions between scales.",
            simplifiedBody: "A linear equation is like a recipe with one unknown number. The equation y = mx + b tells you a line's slope (m) and where it starts on the y-axis (b). To find x, move numbers to the other side using opposite operations — addition becomes subtraction, multiplication becomes division.",
            duration: "8 min",
            durationMinutes: 8,
            cognitiveLoad: "medium",
          },
          {
            id: "quad-eq",
            chapterId: "math-algebra",
            subjectId: "math",
            title: "Quadratic Equations",
            body: "A quadratic equation has the standard form ax² + bx + c = 0, where a ≠ 0. The graph of a quadratic is a parabola — a U-shaped curve that opens upward when a > 0 and downward when a < 0.\n\nThere are three main methods to solve quadratic equations. Factoring works when the equation can be written as (px + q)(rx + s) = 0. The quadratic formula, x = (-b ± √(b²-4ac)) / 2a, works for any quadratic. Completing the square transforms the equation into vertex form.\n\nThe discriminant, Δ = b² - 4ac, determines the nature of the solutions. When Δ > 0, there are two distinct real solutions. When Δ = 0, there is exactly one real solution (a repeated root). When Δ < 0, there are no real solutions — instead, there are two complex solutions involving imaginary numbers.\n\nQuadratic equations appear in projectile motion, area optimization problems, and revenue/profit modeling in business.",
            simplifiedBody: "A quadratic equation has x² in it, making a U-shaped curve called a parabola. You can solve it by factoring, using the quadratic formula, or completing the square. The discriminant (b² - 4ac) tells you how many answers exist: positive means two, zero means one, negative means none (real).",
            duration: "12 min",
            durationMinutes: 12,
            cognitiveLoad: "high",
          },
          {
            id: "systems",
            chapterId: "math-algebra",
            subjectId: "math",
            title: "Systems of Equations",
            body: "A system of equations consists of two or more equations with the same variables. The solution is the set of values that satisfies all equations simultaneously — geometrically, this is where the graphs intersect.\n\nThe substitution method involves solving one equation for a variable and substituting that expression into the other equation. This works best when one equation already has a variable isolated. For example, if y = 2x + 1 and 3x + y = 11, substitute to get 3x + (2x + 1) = 11.\n\nThe elimination method adds or subtracts equations to eliminate a variable. Multiply one or both equations by constants so that adding them cancels one variable. For example, x + y = 5 and x - y = 1 add to give 2x = 6, so x = 3.\n\nSystems can have one solution (the lines intersect), no solution (the lines are parallel), or infinitely many solutions (the lines are identical). The number of solutions depends on whether the equations are consistent and independent.",
            simplifiedBody: "A system of equations is two or more equations that share the same letters. You solve them together to find where both are true at the same time. Use substitution (swap one into the other) or elimination (add/subtract to cancel a variable). One solution means the lines cross; no solution means they're parallel; infinite solutions means they're the same line.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
          {
            id: "functions",
            chapterId: "math-algebra",
            subjectId: "math",
            title: "Functions",
            body: "A function is a rule that assigns each input exactly one output. It is written as f(x) = expression, where x is the input (domain) and f(x) is the output (range). The key test: each x-value must map to only one y-value — this is the vertical line test on a graph.\n\nLinear functions have the form f(x) = mx + b and produce straight-line graphs. Quadratic functions have the form f(x) = ax² + bx + c and produce parabolas. Both are types of polynomial functions.\n\nFunction composition combines two functions: (f ∘ g)(x) = f(g(x)). You first apply g to x, then apply f to the result. This creates a chain of operations.\n\nInverse functions reverse the effect of the original function. If f(x) = 2x + 3, then f⁻¹(x) = (x - 3) / 2. Graphically, the inverse is a reflection across the line y = x.",
            simplifiedBody: "A function is like a machine: you put a number in, and it gives you exactly one number out. f(x) = 2x + 3 means 'multiply by 2, then add 3.' Composition means connecting two machines in a row. Inverse functions are machines that undo each other.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
        ],
      },
      {
        id: "math-geometry",
        subjectId: "math",
        title: "Geometry",
        order: 2,
        lessons: [
          {
            id: "triangles",
            chapterId: "math-geometry",
            subjectId: "math",
            title: "Triangles",
            body: "A triangle is a polygon with three sides, three angles, and three vertices. The sum of interior angles in any triangle is always 180°. Triangles are classified by sides (scalene, isosceles, equilateral) or by angles (acute, right, obtuse).\n\nThe Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse (the side opposite the right angle). This theorem is fundamental for finding distances and is used extensively in construction, navigation, and physics.\n\nThe area of a triangle is A = ½ × base × height. Heron's formula can find the area when all three sides are known: A = √(s(s-a)(s-b)(s-c)), where s is the semi-perimeter.\n\nTriangle congruence criteria (SSS, SAS, ASA, AAS, HL) determine when two triangles are identical in shape and size. Similar triangles have proportional sides and equal angles, which is useful for indirect measurement.",
            simplifiedBody: "A triangle is a three-sided shape. Its three angles always add up to 180°. The Pythagorean theorem (a² + b² = c²) only works for right triangles. To find area, multiply base × height and divide by 2. Two triangles are congruent if they're exactly the same; they're similar if one is a scaled version of the other.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
          {
            id: "circles",
            chapterId: "math-geometry",
            subjectId: "math",
            title: "Circles",
            body: "A circle is the set of all points equidistant from a center point. The distance from the center to any point on the circle is the radius (r). The diameter (d = 2r) passes through the center. The circumference is C = 2πr = πd.\n\nThe area of a circle is A = πr². The value π ≈ 3.14159 represents the ratio of any circle's circumference to its diameter — this ratio is constant for all circles.\n\nA radian is an angular measure based on the radius. One full revolution = 2π radians = 360°. To convert: degrees × (π/180) = radians.\n\nArc length is a fraction of the circumference: L = rθ (where θ is in radians). Sector area is A = ½r²θ. These formulas connect angle measurement to distance along the curve.",
            simplifiedBody: "A circle is all the points the same distance from a center. The radius goes from center to edge; the diameter crosses the whole circle through the center. Circumference (the edge length) = 2πr, and area = πr². π is about 3.14 and is the same for every circle, no matter how big or small.",
            duration: "8 min",
            durationMinutes: 8,
            cognitiveLoad: "medium",
          },
        ],
      },
      {
        id: "math-stats",
        subjectId: "math",
        title: "Statistics",
        order: 3,
        lessons: [
          {
            id: "data-analysis",
            chapterId: "math-stats",
            subjectId: "math",
            title: "Data Analysis",
            body: "Data analysis involves collecting, organizing, and interpreting information to draw meaningful conclusions. Descriptive statistics summarize data using measures of central tendency and measures of spread.\n\nThe mean is the arithmetic average — sum all values and divide by the count. The median is the middle value when data is ordered. The mode is the most frequently occurring value. Each measure captures a different aspect of the data's center.\n\nThe range is the difference between the maximum and minimum values. Variance measures the average squared deviation from the mean. Standard deviation is the square root of variance, bringing the measure back to the original units.\n\nData can be displayed using histograms, box plots, scatter plots, and bar charts. Each visualization reveals different patterns: distributions, outliers, correlations, and trends over time.",
            simplifiedBody: "Data analysis is about making sense of numbers. The mean is the average, the median is the middle number, and the mode is the most common number. The range shows how spread out the data is. Different charts (bar, histogram, scatter plot) help you see patterns you might miss in a list of numbers.",
            duration: "8 min",
            durationMinutes: 8,
            cognitiveLoad: "low",
          },
          {
            id: "probability",
            chapterId: "math-stats",
            subjectId: "math",
            title: "Probability",
            body: "Probability measures the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain). The probability of an event E is P(E) = number of favorable outcomes / total number of possible outcomes.\n\nThe addition rule states P(A or B) = P(A) + P(B) - P(A and B). For mutually exclusive events (that cannot both happen), this simplifies to P(A or B) = P(A) + P(B).\n\nThe multiplication rule states P(A and B) = P(A) × P(B|A), where P(B|A) is the conditional probability of B given A occurred. For independent events, P(A and B) = P(A) × P(B).\n\nCompound events combine simple events using AND (intersection) or OR (union). Tree diagrams help visualize sequential probability calculations by showing all possible outcomes at each stage of a multi-step experiment.",
            simplifiedBody: "Probability tells you how likely something is, from 0 (no way) to 1 (definitely). If you flip a fair coin, the probability of heads is 0.5. 'Or' means add probabilities. 'And' means multiply them — but only if the events don't affect each other.",
            duration: "8 min",
            durationMinutes: 8,
            cognitiveLoad: "low",
          },
        ],
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    description: "Explore biology, chemistry, and physics foundations.",
    icon: "Beaker",
    color: "success-green",
    chapters: [
      {
        id: "science-biology",
        subjectId: "science",
        title: "Biology",
        order: 1,
        lessons: [
          {
            id: "cells",
            chapterId: "science-biology",
            subjectId: "science",
            title: "Cell Biology",
            body: "The cell is the fundamental unit of life. All living organisms are composed of one or more cells. Cells are broadly classified into prokaryotic (no nucleus, like bacteria) and eukaryotic (with a nucleus, like plant and animal cells).\n\nEukaryotic cells contain membrane-bound organelles. The nucleus houses DNA and controls cell activities. Mitochondria generate ATP through cellular respiration. The endoplasmic reticulum and Golgi apparatus process and transport proteins. Lysosomes contain digestive enzymes.\n\nThe cell membrane is a phospholipid bilayer that regulates what enters and leaves the cell. It is selectively permeable, allowing small nonpolar molecules to pass freely while requiring transport proteins for larger or charged molecules.\n\nPlant cells differ from animal cells by having a rigid cell wall, a large central vacuole, and chloroplasts for photosynthesis. These structures support the plant's upright structure and energy production.",
            simplifiedBody: "Cells are tiny building blocks of all living things. Animal cells have a nucleus (the control center), mitochondria (the power plant), and a cell membrane (the gatekeeper). Plant cells have all that plus a cell wall and chloroplasts. Prokaryotes (bacteria) are simpler — no nucleus, no organelles.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
          {
            id: "genetics",
            chapterId: "science-biology",
            subjectId: "science",
            title: "Genetics",
            body: "Genetics studies how traits are inherited through DNA. DNA (deoxyribonucleic acid) is a double-helix molecule containing four bases: adenine (A), thymine (T), guanine (G), and cytosine (C). Base pairs always match: A-T and G-C.\n\nGenes are segments of DNA that code for specific proteins. The process of reading DNA to make proteins involves transcription (DNA → mRNA in the nucleus) and translation (mRNA → protein at ribosomes). The sequence of bases determines the amino acid sequence of the protein.\n\nMendelian genetics established the laws of inheritance. The law of segregation states that each organism carries two alleles for each trait, and these separate during gamete formation. The law of independent assortment states that alleles for different traits are inherited independently.\n\nDominant alleles mask recessive alleles when both are present. A dominant trait appears in the phenotype with just one copy (homozygous dominant or heterozygous). A recessive trait only appears when both alleles are recessive (homozygous recessive).",
            simplifiedBody: "DNA is a twisted ladder made of four chemical letters (A, T, G, C) that spell out instructions for building proteins. Genes are short sections of DNA. You inherit two copies of each gene — one from each parent. Dominant traits show up with just one copy; recessive traits need both copies to appear.",
            duration: "12 min",
            durationMinutes: 12,
            cognitiveLoad: "high",
          },
          {
            id: "ecology",
            chapterId: "science-biology",
            subjectId: "science",
            title: "Ecology",
            body: "Ecology studies the interactions between organisms and their environment. An ecosystem consists of all living organisms (biotic factors) in an area and their physical environment (abiotic factors like temperature, water, and sunlight.\n\nEnergy flows through ecosystems in one direction, starting with producers (plants and algae) that capture solar energy through photosynthesis. Primary consumers (herbivores) eat producers. Secondary consumers eat primary consumers. Decomposers break down dead organisms, recycling nutrients.\n\nFood chains show linear feeding relationships. Food webs are interconnected food chains that better represent the complexity of real ecosystems. Each level is a trophic level, and only about 10% of energy transfers between levels.\n\nBiomes are large-scale ecosystems classified by climate and vegetation. Major biomes include tropical rainforest, desert, grassland, tundra, and temperate forest. Each has distinct temperature, precipitation, and biodiversity characteristics.",
            simplifiedBody: "Ecology is how living things interact with their surroundings. Plants capture sunlight as food (producers). Animals eat plants or other animals (consumers). Everything decomposes eventually, recycling nutrients. Food webs show who eats whom. Biomes are huge regions with similar climate — like deserts, forests, or tundra.",
            duration: "8 min",
            durationMinutes: 8,
            cognitiveLoad: "low",
          },
        ],
      },
      {
        id: "science-chemistry",
        subjectId: "science",
        title: "Chemistry",
        order: 2,
        lessons: [
          {
            id: "atoms",
            chapterId: "science-chemistry",
            subjectId: "science",
            title: "Atomic Structure",
            body: "An atom consists of a nucleus containing protons (positive charge) and neutrons (no charge), surrounded by electrons (negative charge) in energy levels or shells. The number of protons defines the element — this is the atomic number.\n\nElectrons occupy specific energy levels: the first shell holds up to 2 electrons, the second up to 8, the third up to 18, and so on. Valence electrons (in the outermost shell) determine an element's chemical properties and reactivity.\n\nThe periodic table organizes elements by atomic number. Elements in the same group (column) have the same number of valence electrons and similar chemical behavior. Elements in the same period (row) have the same number of electron shells.\n\nIsotopes are atoms of the same element with different numbers of neutrons, giving them different mass numbers. Ions form when atoms gain or lose electrons: cations (positive) lose electrons, and anions (negative) gain electrons.",
            simplifiedBody: "An atom has a center (nucleus) with protons and neutrons, and electrons orbiting outside. The number of protons determines which element it is. Electrons live in energy shells — the outer ones (valence electrons) decide how the atom behaves chemically. Atoms can gain or lose electrons to become charged ions.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
          {
            id: "bonds",
            chapterId: "science-chemistry",
            subjectId: "science",
            title: "Chemical Bonds",
            body: "Chemical bonds hold atoms together in compounds. The three main types are ionic, covalent, and metallic bonds, each with distinct properties.\n\nIonic bonds form when one atom transfers electrons to another, creating oppositely charged ions that attract. For example, sodium (Na) loses one electron to become Na⁺, and chlorine (Cl) gains one electron to become Cl⁻, forming NaCl (table salt). Ionic compounds typically form crystalline solids with high melting points.\n\nCovalent bonds form when atoms share electron pairs. A single bond shares one pair, a double bond shares two pairs, and a triple bond shares three pairs. Water (H₂O) has two single covalent bonds. Covalent compounds tend to have lower melting points and can exist as gases, liquids, or soft solids.\n\nPolar covalent bonds share electrons unequally, creating partial charges. Nonpolar covalent bonds share electrons equally. The polarity of bonds determines many physical properties like solubility and boiling point.",
            simplifiedBody: "Atoms bond to become stable. Ionic bonds transfer electrons (one gives, one takes), creating charged atoms that stick together — like magnets. Covalent bonds share electrons between atoms. Polar covalent shares unequally; nonpolar shares equally. The type of bond determines properties like melting point and whether it dissolves in water.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
        ],
      },
      {
        id: "science-physics",
        subjectId: "science",
        title: "Physics",
        order: 3,
        lessons: [
          {
            id: "forces",
            chapterId: "science-physics",
            subjectId: "science",
            title: "Forces & Motion",
            body: "A force is a push or pull that can change an object's motion. Forces are measured in Newtons (N). The net force on an object is the vector sum of all forces acting on it.\n\nNewton's First Law states that an object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted on by a net external force (inertia). Newton's Second Law states F = ma: force equals mass times acceleration. Newton's Third Law states that for every action, there is an equal and opposite reaction.\n\nFriction opposes motion between surfaces. Static friction prevents objects from starting to move, while kinetic friction acts on moving objects. The friction force depends on the coefficient of friction and the normal force.\n\nGravity is the force of attraction between all objects with mass. Near Earth's surface, gravitational acceleration is approximately 9.8 m/s². The gravitational force between two masses is F = G(m₁m₂)/r², where G is the gravitational constant and r is the distance between the centers of mass.",
            simplifiedBody: "A force is a push or pull. Newton's three laws say: things keep doing what they're doing unless a force acts on them (inertia); force = mass × acceleration; every push has an equal push back. Friction slows things down. Gravity pulls objects toward each other — on Earth, things accelerate at about 9.8 m/s².",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
        ],
      },
    ],
  },
  {
    id: "english",
    name: "English",
    description: "Strengthen grammar, reading, writing, and vocabulary.",
    icon: "BookOpen",
    color: "premium-amber",
    chapters: [
      {
        id: "english-grammar",
        subjectId: "english",
        title: "Grammar",
        order: 1,
        lessons: [
          {
            id: "grammar",
            chapterId: "english-grammar",
            subjectId: "english",
            title: "Parts of Speech",
            body: "English has eight parts of speech, each serving a distinct role in sentences. Understanding these categories is fundamental to clear writing and accurate reading comprehension.\n\nNouns name people, places, things, or ideas. Common nouns are general (dog, city), while proper nouns are specific names (Rex, Paris). Pronouns replace nouns (he, she, they, it). Subject pronouns act as subjects; object pronouns receive actions.\n\nVerbs express actions (run, write), states of being (is, seem), or possession (have, own). Every sentence requires a subject and a verb. Tenses indicate when: present (walk), past (walked), future (will walk).\n\nAdjectives describe nouns (tall, blue, interesting). Adverbs modify verbs, adjectives, or other adverbs (quickly, very, extremely). Prepositions show relationships between words — typically location, time, or direction (in, on, at, during, through).",
            simplifiedBody: "Nouns are names (people, places, things). Pronouns replace nouns (he, she, they). Verbs are action words or states of being (run, is). Adjectives describe nouns (big, red). Adverbs describe verbs or adjectives (quickly, very). Conjunctions connect words (and, but, or). Prepositions show relationships (in, on, at). Interjections express emotion (wow, ouch).",
            duration: "8 min",
            durationMinutes: 8,
            cognitiveLoad: "low",
          },
        ],
      },
      {
        id: "english-reading",
        subjectId: "english",
        title: "Reading",
        order: 2,
        lessons: [
          {
            id: "reading",
            chapterId: "english-reading",
            subjectId: "english",
            title: "Reading Comprehension",
            body: "Reading comprehension is the ability to understand, analyze, and interpret written text. Strong readers actively engage with text through prediction, questioning, and summarization.\n\nThe SQ3R method improves comprehension: Survey the text first, formulate Questions, then Read actively, Recite key points, and Review the material. This structured approach transforms passive reading into active learning.\n\nMain ideas are the central points the author wants to convey. Supporting details provide evidence, examples, or explanations. Distinguishing between main ideas and details is essential for understanding text structure and answering comprehension questions.\n\nInferential reading goes beyond what is explicitly stated. Readers use textual evidence combined with prior knowledge to draw conclusions, understand author's purpose, and identify themes. Authors use literary devices like metaphor, symbolism, and irony to convey deeper meaning.\n\nCritical reading involves evaluating the author's argument, identifying bias, and considering alternative perspectives. Ask: What is the author's purpose? What evidence supports their claims? Are there logical fallacies or unsupported assumptions?",
            simplifiedBody: "To understand what you read, use the SQ3R method: Survey (skim first), Question (what do you want to learn?), Read (actively), Recite (say the key points), and Review (go back over it). The main idea is the big point; supporting details are the evidence. Make inferences by combining what you read with what you already know.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
        ],
      },
      {
        id: "english-writing",
        subjectId: "english",
        title: "Writing",
        order: 3,
        lessons: [
          {
            id: "writing",
            chapterId: "english-writing",
            subjectId: "english",
            title: "Essay Writing",
            body: "An essay is a structured piece of writing that presents an argument, analysis, or narrative. Strong essays follow a clear organization: introduction, body paragraphs, and conclusion.\n\nThe introduction hooks the reader and presents the thesis statement — a single sentence that states the main argument. The thesis should be specific and arguable, not a statement of fact. It guides the entire essay.\n\nEach body paragraph begins with a topic sentence that supports the thesis. The paragraph then develops this point with evidence (facts, examples, quotes), analysis (explaining how the evidence supports the point), and transitions to the next paragraph. Use the PEEL structure: Point, Evidence, Explanation, Link.\n\nThe conclusion restates the thesis in new words, summarizes the key arguments, and provides a final insight or call to action. It should not introduce new information.\n\nRevision is essential: first drafts focus on getting ideas down. Subsequent drafts improve clarity, strengthen arguments, fix grammar, and refine word choice. Read your essay aloud to catch awkward phrasing.",
            simplifiedBody: "An essay has three parts: an introduction (with your main argument as the thesis), body paragraphs (each with a point, evidence, and explanation), and a conclusion (restating your argument and wrapping up). Write a rough draft first to get ideas down, then revise to fix grammar, clarity, and flow.",
            duration: "10 min",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
          {
            id: "vocab",
            chapterId: "english-writing",
            subjectId: "english",
            title: "Vocabulary",
            body: "Vocabulary is the set of words a person knows and uses effectively. A strong vocabulary improves reading comprehension, writing clarity, and communication skills.\n\nContext clues help determine the meaning of unfamiliar words. Synonym clues provide similar words nearby. Antonym clues use contrast. Definition clues explicitly define the word. Example clues give illustrations of the word's use.\n\nWord roots, prefixes, and suffixes unlock meanings of complex words. The root 'spect' means 'to look' (inspect, spectator, respect). The prefix 'un-' means 'not' (unhappy, unable). The suffix '-tion' turns verbs into nouns (create → creation).\n\nWord families share a common root: act, action, active, react, activity, activation. Learning word families is more efficient than memorizing individual words because one root unlocks many related words.\n\nSpaced repetition — reviewing words at increasing intervals — is the most effective way to move vocabulary from short-term to long-term memory. Combine this with using new words in sentences to deepen understanding.",
            simplifiedBody: "Context clues help you figure out new words — look for synonyms, definitions, or examples nearby. Breaking words into parts helps too: roots (spect = look), prefixes (un- = not), suffixes (-tion = makes a noun). Learn word families together (act, action, react) to learn many words from one root. Review new words at spaced intervals to remember them.",
            duration: "8 min",
            durationMinutes: 8,
            cognitiveLoad: "low",
          },
        ],
      },
    ],
  },
];

function getAllLessons(): LessonData[] {
  const lessons: LessonData[] = [];
  for (const subject of SUBJECTS) {
    for (const chapter of subject.chapters) {
      for (const lesson of chapter.lessons) {
        lessons.push(lesson);
      }
    }
  }
  return lessons;
}

function getLessonById(lessonId: string): LessonData | undefined {
  return getAllLessons().find((l) => l.id === lessonId);
}

function getSubjectById(subjectId: string): SubjectData | undefined {
  return SUBJECTS.find((s) => s.id === subjectId);
}

function getAllLessonIds(): { subjectId: string; lessonId: string }[] {
  const params: { subjectId: string; lessonId: string }[] = [];
  for (const subject of SUBJECTS) {
    for (const chapter of subject.chapters) {
      for (const lesson of chapter.lessons) {
        params.push({ subjectId: subject.id, lessonId: lesson.id });
      }
    }
  }
  return params;
}

function getAllSubjectIds(): { subjectId: string }[] {
  return SUBJECTS.map((s) => ({ subjectId: s.id }));
}

function getSubjectLessonIds(subjectId: string): string[] {
  const subject = getSubjectById(subjectId);
  if (!subject) return [];
  const ids: string[] = [];
  for (const chapter of subject.chapters) {
    for (const lesson of chapter.lessons) {
      ids.push(lesson.id);
    }
  }
  return ids;
}

function getSubjectSkillStatus(
  subjectId: string,
  completedLessonIds: string[]
): { id: string; name: string; status: "not-started" | "in-progress" | "mastered" }[] {
  const subject = getSubjectById(subjectId);
  if (!subject) return [];
  const skills: { id: string; name: string; status: "not-started" | "in-progress" | "mastered" }[] = [];
  for (const chapter of subject.chapters) {
    for (const lesson of chapter.lessons) {
      const completed = completedLessonIds.includes(lesson.id);
      skills.push({
        id: lesson.id,
        name: lesson.title,
        status: completed ? "mastered" : "not-started",
      });
    }
  }
  return skills;
}

export {
  getAllLessons,
  getLessonById,
  getSubjectById,
  getAllLessonIds,
  getAllSubjectIds,
  getSubjectLessonIds,
  getSubjectSkillStatus,
};
