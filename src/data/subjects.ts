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
  scaffold?: { steps?: string[]; keyTerms?: { term: string; meaning: string }[] };
  literalBody?: string;
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
          {
            id: "inequalities",
            chapterId: "math-algebra",
            subjectId: "math",
            title: "Inequalities",
            body: "An inequality is a mathematical statement comparing two expressions using <, >, ≤, ≥, or ≠ instead of =. Solving linear inequalities follows the same rules as solving equations, with one critical exception: when you multiply or divide both sides by a negative number, you must reverse the inequality sign. For example, solving -2x > 6 requires dividing by -2, flipping > to <, giving x < -3.\n\nCompound inequalities combine two inequalities joined by \"and\" or \"or.\" An \"and\" inequality like -3 < 2x + 1 ≤ 7 means both parts must be true simultaneously. Solve by performing the same operations on all three parts: subtract 1 to get -4 < 2x ≤ 6, then divide by 2 to get -2 < x ≤ 3. The solution is the overlap of both conditions. An \"or\" inequality like x < -1 or x > 4 means the solution includes values satisfying either condition — the union of two separate intervals.\n\nGraphing inequalities on a number line uses open circles for strict inequalities (< or >) and closed circles for inclusive ones (≤ or ≥). The line is shaded in the direction of all valid values. For example, x > 2 is graphed with an open circle at 2 and shading to the right. Compound inequalities form a segment on the number line: -2 < x ≤ 3 is an open circle at -2, a closed circle at 3, and shading between them.\n\nQuadratic inequalities such as x² - 4 > 0 are solved by first finding the critical points (where the expression equals zero) and then testing intervals. Factoring x² - 4 = (x - 2)(x + 2) = 0 gives x = 2 and x = -2. These divide the number line into three intervals. Test a value from each: x = -3 gives 5 > 0 ✓, x = 0 gives -4 > 0 ✗, x = 3 gives 5 > 0 ✓. The solution is x < -2 or x > 2.",
            simplifiedBody: "An inequality is like an equation but uses < or > instead of =. It tells you a range of numbers that work, not just one answer. The most important rule: if you multiply or divide by a negative number, flip the inequality sign the other way.\n\n\"Compound inequalities\" link two inequalities together. \"And\" means both must be true at the same time — the answer is the overlap. \"Or\" means either one can be true — the answer includes both separate parts.\n\nOn a number line, use an open circle when the number itself is NOT included (like < or >) and a closed dot when it IS included (like ≤ or ≥). Shade toward all the numbers that work.",
            duration: "14 min",
            durationMinutes: 14,
            cognitiveLoad: "high",
          },
          {
            id: "functions-advanced",
            chapterId: "math-algebra",
            subjectId: "math",
            title: "Functions — Advanced",
            body: "The domain of a function is the set of all valid input values, and the range is the set of all possible output values. To find the domain, ask: \"What values of x could cause a problem?\" Division by zero and square roots of negative numbers are the two main restrictions. For f(x) = 1/(x - 3), the domain is all real numbers except x = 3. For f(x) = √(x + 2), the domain requires x + 2 ≥ 0, so x ≥ -2.\n\nFunction composition, written (f ∘ g)(x) = f(g(x)), means applying one function inside another. Given f(x) = x² + 1 and g(x) = 3x, then f(g(x)) = (3x)² + 1 = 9x² + 1. The order matters: g(f(x)) = 3(x² + 1) = 3x² + 3, which is different. Composition chains can extend to three or more functions: f(g(h(x))).\n\nAn inverse function reverses the effect of the original function. If f maps input a to output b, then f⁻¹ maps b back to a. To find an inverse algebraically, replace f(x) with y, swap x and y, solve for y, and replace y with f⁻¹(x). For f(x) = 2x + 5: set y = 2x + 5, swap to x = 2y + 5, solve y = (x - 5)/2, so f⁻¹(x) = (x - 5)/2.\n\nNot every function has an inverse. Only one-to-one (injective) functions do — those where each output comes from exactly one input. The horizontal line test determines this: if any horizontal line crosses the graph more than once, the function fails and has no inverse. A function and its inverse are reflections of each other across the line y = x, and their compositions yield the identity: f(f⁻¹(x)) = x.",
            simplifiedBody: "The domain is all the inputs a function can accept. The range is all the outputs it can produce. Watch out for two things that break functions: dividing by zero, and taking the square root of a negative number.\n\nComposition means plugging one function into another. f(g(x)) means first calculate g(x), then put that answer into f. The order matters — f(g(x)) and g(f(x)) usually give different answers.\n\nAn inverse function undoes what the original did. To find it, swap x and y in the equation, then solve for y. A function only has an inverse if no two different inputs give the same output. A function and its mirror-image inverse are reflections across the line y = x.",
            duration: "14 min",
            durationMinutes: 14,
            cognitiveLoad: "high",
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
          {
            id: "quadrilaterals",
            chapterId: "math-geometry",
            subjectId: "math",
            title: "Quadrilaterals",
            body: "A quadrilateral is any polygon with four sides, four vertices, and four interior angles. The sum of interior angles in any quadrilateral is always 360°. Quadrilaterals are classified by their side lengths, angle measures, and whether sides are parallel.\n\nA parallelogram has two pairs of parallel sides. Opposite sides are equal in length, and opposite angles are equal. Consecutive angles are supplementary (add to 180°). The area is A = base × height. Special parallelograms include the rectangle (all angles are 90°), the rhombus (all sides are equal), and the square (all angles are 90° and all sides are equal). A square is simultaneously a rectangle, a rhombus, and a parallelogram.\n\nA trapezoid has exactly one pair of parallel sides (called bases). The non-parallel sides are legs. The area formula is A = ½(b₁ + b₂) × h, where b₁ and b₂ are the two parallel bases and h is the perpendicular height between them. An isosceles trapezoid has equal legs and equal base angles. A right trapezoid has two right angles along one leg.\n\nA kite has two pairs of adjacent sides that are equal (not opposite sides). The diagonals of a kite are perpendicular, and exactly one pair of opposite angles is equal. The area of any quadrilateral whose diagonals are perpendicular can be calculated as A = ½ × d₁ × d₂. This formula also applies to rhombuses and squares.",
            simplifiedBody: "A quadrilateral is any shape with four straight sides. Its four angles always add up to 360°. There are several important types.\n\nA parallelogram has two pairs of parallel sides. Opposite sides and opposite angles are equal. A rectangle is a parallelogram with four right angles. A rhombus is a parallelogram with four equal sides. A square is both a rectangle AND a rhombus — four right angles and four equal sides.\n\nA trapezoid has exactly one pair of parallel sides. To find its area, add the two parallel sides, divide by 2, then multiply by the height. A kite has two pairs of equal-length sides next to each other, and its diagonals cross at right angles.",
            duration: "12 min",
            durationMinutes: 12,
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
          {
            id: "regression",
            chapterId: "math-stats",
            subjectId: "math",
            title: "Regression",
            body: "Regression analysis examines the relationship between two or more variables. The first step is creating a scatter plot, where each point represents one data pair (x, y). The pattern of points reveals whether a relationship exists and what form it takes — linear, exponential, or something else.\n\nCorrelation measures the strength and direction of a linear relationship between two variables. The correlation coefficient, r, ranges from -1 to +1. An r-value near +1 indicates a strong positive linear relationship (as x increases, y increases). An r-value near -1 indicates a strong negative relationship (as x increases, y decreases). An r-value near 0 suggests no linear relationship. Crucially, correlation does not imply causation — two variables can be correlated because of a third lurking variable, pure coincidence, or a reversed causal direction.\n\nThe line of best fit (least squares regression line) minimizes the sum of squared vertical distances from each data point to the line. Its equation is ŷ = a + bx, where b is the slope (the predicted change in y for each unit increase in x) and a is the y-intercept. The coefficient of determination, r², tells you what proportion of the variation in y is explained by the regression on x. If r = 0.9, then r² = 0.81, meaning 81% of the variability in y is explained by the linear model.\n\nRegression lines are used for prediction, but predictions should only be made within the range of the original data (interpolation). Extrapolating far beyond the observed data is unreliable because the linear trend may not continue. Always check for outliers, which can dramatically shift the regression line, and verify that a linear model is actually appropriate for the data pattern.",
            simplifiedBody: "Regression helps you understand how two things are related and lets you make predictions. You start by plotting the data as a scatter plot to see if there is a pattern.\n\nThe correlation coefficient (r) tells you how strong the relationship is. It goes from -1 (perfectly negative) to +1 (perfectly positive). Close to 0 means no linear relationship. Important: correlation does NOT mean causation — just because two things move together doesn't mean one causes the other.\n\nThe line of best fit is drawn through the middle of the scatter plot data points. You can use it to predict values. The r² value tells you what percent of the variation your line explains — higher r² means the line fits better. Only use the line to predict values close to the data you already have.",
            duration: "12 min",
            durationMinutes: 12,
            cognitiveLoad: "medium",
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
          {
            id: "evolution",
            chapterId: "science-biology",
            subjectId: "science",
            title: "Evolution",
            body: "Evolution is the change in the inherited characteristics of a population over successive generations. Charles Darwin proposed natural selection as the primary mechanism: organisms with traits better suited to their environment tend to survive longer and produce more offspring, passing those advantageous traits to the next generation. Over many generations, this process shifts the genetic composition of a population.\n\nNatural selection operates on four conditions: variation exists within a population, some variations are heritable, organisms produce more offspring than the environment can support, and individuals with favorable traits have higher survival and reproductive success (fitness). For example, beetles with coloring that blends into their environment are less likely to be eaten by birds, so they survive to reproduce more frequently.\n\nAdaptation is the process by which populations become better suited to their habitats over time. Structural adaptations include the thickness of a polar bear's fur or the streamlined shape of a dolphin. Behavioral adaptations include bird migration and nocturnal hunting. Physiological adaptations include the ability of desert animals to conserve water. These traits arise through mutation and are refined by natural selection.\n\nSpeciation occurs when populations of the same species become so genetically different that they can no longer interbreed. Allopatric speciation happens when a physical barrier (like a mountain range or ocean) separates populations. Sympatric speciation occurs without physical separation, often through polyploidy in plants or behavioral isolation in animals. The Galapagos finches Darwin observed are a classic example of adaptive radiation — one ancestral species diversifying into many species adapted to different ecological niches.\n\nEvidence for evolution comes from multiple independent sources. The fossil record shows transitional forms (like Tiktaalik, which bridges fish and tetrapods). Comparative anatomy reveals homologous structures — similar bone patterns in different species' limbs (human arm, whale flipper, bat wing) suggesting common ancestry. DNA comparisons show that humans and chimpanzees share approximately 98.7% of their DNA. Biogeography shows that closely related species tend to be found near each other geographically, and island species often resemble mainland relatives.",
            simplifiedBody: "Evolution means species change over time. Animals and plants with traits that help them survive are more likely to have babies, so those traits become more common in the group. This process is called natural selection.\n\nOver a very long time, small changes can add up. A population can split into two species if they become separated or stop breeding with each other. The fossil record, similar body structures across different species, and DNA comparisons all provide strong evidence that evolution has occurred.",
            duration: "14 min",
            durationMinutes: 14,
            cognitiveLoad: "high",
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
          {
            id: "chemical-bonding",
            chapterId: "science-chemistry",
            subjectId: "science",
            title: "Chemical Bonding",
            body: "Chemical bonding explains how and why atoms combine to form compounds. The type of bond that forms depends on the electronegativity of the atoms involved — electronegativity is an atom's ability to attract shared electrons in a bond. The difference in electronegativity between two atoms determines bond type: a large difference (above ~1.7) produces an ionic bond, a moderate difference produces a polar covalent bond, and a small or zero difference produces a nonpolar covalent bond.\n\nIonic bonding occurs when one atom transfers electrons to another. Metals with low electronegativity (like sodium, EN = 0.9) lose electrons to become cations, while nonmetals with high electronegativity (like chlorine, EN = 3.0) gain electrons to become anions. The electrostatic attraction between oppositely charged ions forms the ionic bond. Ionic compounds form crystal lattice structures where each ion is surrounded by ions of opposite charge, giving them high melting points and the ability to conduct electricity when dissolved in water.\n\nCovalent bonding involves sharing electron pairs between nonmetal atoms. A single covalent bond shares one pair of electrons (2 electrons total), a double bond shares two pairs (4 electrons), and a triple bond shares three pairs (6 electrons). Carbon uniquely forms four covalent bonds, making it the backbone of organic chemistry. In polar covalent bonds (like H-O in water), electrons are shared unequally because one atom is more electronegative, creating partial positive and negative charges.\n\nMetallic bonding involves a \"sea\" of delocalized electrons that are free to move among a lattice of metal cations. This explains why metals conduct electricity (free-moving electrons carry charge), are malleable and ductile (layers of atoms can slide without breaking the bond), and have lustrous surfaces (delocalized electrons absorb and re-emit light). Different metals have different numbers of delocalized electrons, which is why copper conducts electricity better than iron.\n\nLewis structures are diagrams that show how electrons are arranged in molecules. Each dot represents a valence electron, and each line represents a shared pair (a covalent bond). The octet rule states that most atoms are most stable with 8 electrons in their outer shell. Atoms achieve this by gaining, losing, or sharing electrons. Lewis structures help predict molecular geometry, polarity, and reactivity.",
            simplifiedBody: "Atoms bond to become stable. The type of bond depends on how strongly each atom attracts electrons — this is called electronegativity. If the difference is big, electrons transfer (ionic bond). If it's small, electrons share (covalent bond). If it's moderate, they share unequally (polar covalent bond).\n\nIonic compounds form crystals and dissolve in water. Covalent compounds can be gases, liquids, or soft solids. Metals conduct electricity because their electrons move freely. Lewis structures are diagrams that show how electrons are arranged around atoms in a molecule — most atoms want 8 electrons in their outer shell.",
            duration: "14 min",
            durationMinutes: 14,
            cognitiveLoad: "high",
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
          {
            id: "energy",
            chapterId: "science-physics",
            subjectId: "science",
            title: "Energy",
            body: "Energy is the capacity to do work or cause change. It exists in two broad categories: kinetic energy (the energy of motion) and potential energy (stored energy due to position or configuration). Kinetic energy depends on mass and velocity: KE = ½mv². A moving car has kinetic energy proportional to its mass and the square of its speed — doubling the speed quadruples the kinetic energy.\n\nPotential energy comes in several forms. Gravitational potential energy depends on height: PE = mgh, where g is gravitational acceleration. Elastic potential energy is stored in stretched or compressed springs. Chemical potential energy is stored in the bonds of molecules — this is the energy released when we burn fuel or eat food. Nuclear potential energy is released during fission (splitting atoms) or fusion (combining atoms), powering the Sun and nuclear reactors.\n\nThermal energy is the kinetic energy of particles in motion at the microscopic level. Temperature measures the average kinetic energy of particles. When you heat water, you increase the speed of water molecules. Phase changes (melting, boiling) require energy input without changing temperature — the energy breaks intermolecular bonds rather than speeding up molecules. This is called latent heat.\n\nThe law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another. A swinging pendulum continuously converts between kinetic energy (at the bottom) and gravitational potential energy (at the peaks). A flashlight converts chemical potential energy into light and thermal energy. In every transformation, some energy is inevitably converted to thermal energy due to friction — this is why perpetual motion machines are impossible.\n\nWork and power connect force to energy. Work (W) is done when a force moves an object over a distance: W = Fd cos θ, where θ is the angle between the force and the displacement. Power (P) is the rate at which work is done or energy is transferred: P = W/t. A more powerful machine does the same work in less time. The unit of power is the watt (W), where 1 watt = 1 joule per second.",
            simplifiedBody: "Energy is the ability to make things happen. Kinetic energy is the energy of moving objects — heavier and faster things have more. Potential energy is stored energy, like a ball held high up or food in your body.\n\nEnergy changes form constantly. Burning fuel turns chemical energy into heat and light. A battery turns chemical energy into electrical energy. The total amount of energy in a closed system always stays the same — it just changes form. Work means using a force to move something. Power measures how fast work gets done.\n\nSome energy always turns into heat from friction, which is why you can never reuse all of it. This is a fundamental rule of nature.",
            duration: "12 min",
            durationMinutes: 12,
            cognitiveLoad: "high",
          },
          {
            id: "waves",
            chapterId: "science-physics",
            subjectId: "science",
            title: "Waves",
            body: "Waves are disturbances that transfer energy from one place to another without transferring matter. The medium (air, water, a string) oscillates back and forth, but the wave pattern moves forward. This distinction is key: the ocean wave moves across the water, but the water molecules mostly move up and down.\n\nTransverse waves have particle motion perpendicular to the wave's direction. Light, a wave on a plucked string, and ripples on a pond are all transverse. Longitudinal waves have particle motion parallel to the wave's direction — sound waves in air are the best example, with alternating regions of compression (high pressure) and rarefaction (low pressure).\n\nThree properties define a wave: frequency, wavelength, and amplitude. Frequency (f) is the number of complete oscillations per second, measured in hertz (Hz). Wavelength (λ) is the distance between consecutive identical points on the wave (peak to peak, or trough to trough). Amplitude is the maximum displacement from the rest position — it determines the wave's energy and, for sound, its loudness or for light, its brightness.\n\nThe wave equation relates these quantities: v = fλ, where v is the wave speed. Sound travels at about 343 m/s in air at room temperature. Light travels at approximately 3 × 10⁸ m/s in a vacuum. When a wave enters a new medium, its speed changes — and so does either its frequency or wavelength (frequency stays constant when crossing a boundary, which is why the wavelength changes).\n\nThe electromagnetic spectrum arranges all electromagnetic waves by wavelength (or frequency). From longest wavelength to shortest: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays. All travel at the speed of light in a vacuum. Visible light spans only a narrow range (about 400-700 nm), from red (longest visible wavelength) to violet (shortest). Higher frequency means higher energy — which is why ultraviolet light can cause sunburn and X-rays can penetrate tissue.\n\nWave interference occurs when two waves overlap. Constructive interference happens when peaks align with peaks, creating a larger amplitude. Destructive interference happens when peaks align with troughs, partially or completely canceling. Noise-canceling headphones use destructive interference: a microphone detects ambient sound, and the headphones produce the opposite wave, canceling the noise.",
            simplifiedBody: "Waves carry energy from one place to another without moving matter. There are two main types: transverse (side-to-side, like a string) and longitudinal (back-and-forth, like sound). Every wave has a frequency (how fast it oscillates), wavelength (distance between peaks), and amplitude (height of the wave — more energy means bigger amplitude).\n\nFaster oscillations mean higher frequency and shorter wavelength. Light is a wave — visible light is just a tiny sliver of the electromagnetic spectrum, which also includes radio waves, microwaves, infrared, ultraviolet, X-rays, and gamma rays. Waves can combine: peaks meeting peaks make bigger waves (constructive interference), while peaks meeting troughs can cancel out (destructive interference).",
            duration: "12 min",
            durationMinutes: 12,
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
          {
            id: "sentence-structure",
            chapterId: "english-grammar",
            subjectId: "english",
            title: "Sentence Structure",
            body: "Every sentence has two essential parts: a subject (who or what the sentence is about) and a predicate (what the subject does or is). For example, in \"The dog barked loudly,\" \"The dog\" is the subject and \"barked loudly\" is the predicate. Simple enough — but sentences quickly grow more complex when you add objects, phrases, and clauses.\n\nObjects receive the action of the verb. In \"She kicked the ball,\" \"the ball\" is the direct object because it receives the action of \"kicked.\" An indirect object tells us to whom or for whom the action is done: \"She gave him the ball\" — \"him\" is the indirect object. Complementing the subject or object, subject complements follow linking verbs: \"She is a doctor\" — \"a doctor\" is a subject complement.\n\nClauses are groups of words with a subject and a verb. An independent clause can stand alone as a sentence: \"I went to the store.\" A dependent (subordinate) clause cannot stand alone because it begins with a subordinating conjunction like \"because,\" \"although,\" \"when,\" or \"if\": \"because I needed milk.\" Dependent clauses act as nouns, adjectives, or adverbs within larger sentences.\n\nSentences are classified by their clause structure. A simple sentence contains one independent clause: \"The cat slept on the mat.\" A compound sentence joins two independent clauses with a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so): \"The cat slept on the mat, and the dog lay by the door.\" A complex sentence combines one independent clause with at least one dependent clause: \"The cat slept on the mat while the dog lay by the door.\" A compound-complex sentence has at least two independent clauses and one dependent clause: \"While I was cooking, the phone rang and the dog barked.\"\n\nA common error is creating sentence fragments — incomplete sentences that are missing a subject, a verb, or a complete thought. \"Running through the park.\" is a fragment because it lacks a subject. \"Because she was tired.\" is a fragment because the dependent clause cannot stand alone. Another common error is the run-on sentence, where two independent clauses are joined without proper punctuation or conjunctions: \"I went to the store I bought milk\" should be \"I went to the store, and I bought milk.\"",
            simplifiedBody: "Every sentence needs two parts: a subject (who or what) and a predicate (what they do or are). \"The cat slept\" is a simple sentence — \"the cat\" is the subject and \"slept\" is the predicate. Objects receive the action: \"She kicked the ball\" — \"the ball\" is the object.\n\nClauses are groups of words with a subject and verb. An independent clause can stand alone. A dependent clause cannot — it starts with words like \"because,\" \"when,\" or \"if\" and needs to be attached to an independent clause.\n\nThere are four sentence types. Simple: one independent clause. Compound: two independent clauses joined by \"and,\" \"but,\" or \"or.\" Complex: one independent clause plus a dependent clause. Compound-complex: at least two independent clauses and one dependent clause.\n\nWatch out for fragments (incomplete sentences) and run-ons (two sentences smashed together without punctuation). Fix run-ons by adding a comma and conjunction, a semicolon, or by splitting them into two sentences.",
            duration: "9 min read",
            durationMinutes: 9,
            cognitiveLoad: "medium",
          },
          {
            id: "punctuation",
            chapterId: "english-grammar",
            subjectId: "english",
            title: "Punctuation",
            body: "Punctuation marks are signals that guide readers through your writing, indicating pauses, separations, and relationships between ideas. Mastering punctuation transforms unclear writing into precise, readable prose.\n\nCommas are the most versatile — and most misused — punctuation mark. Use a comma before a coordinating conjunction joining two independent clauses: \"I wanted to go, but it was raining.\" Use commas to separate items in a series: \"She packed a shirt, a jacket, and boots.\" The Oxford comma before \"and\" or \"or\" in the final pair prevents ambiguity: \"I love my parents, Batman, and Spider-Man\" is clearer than the version without it. After introductory words or clauses, use a comma: \"However, the results were inconclusive\" and \"After the storm passed, we went outside.\" A common comma error is the comma splice — joining two independent clauses with only a comma and no conjunction: \"I went to the store, I bought milk\" is incorrect. Fix it with a period, semicolon, or conjunction.\n\nSemicolons connect two closely related independent clauses without a conjunction: \"The experiment failed; we need to redesign the protocol.\" Think of a semicolon as a stronger comma — it signals a closer relationship than a period but a bigger break than a comma. Semicolons also separate items in a complex list where items already contain commas: \"We visited Paris, France; Tokyo, Japan; and Sydney, Australia.\"\n\nColons introduce lists, explanations, or elaborations: \"You need three things: patience, practice, and persistence.\" The clause before the colon must be a complete sentence. Colons also introduce quotations, explanations, or examples: \"She had one goal: to finish the marathon.\" A common error is using a colon after a verb or preposition, which breaks the flow: \"The ingredients are: flour, sugar, and eggs\" is incorrect — remove the colon or restructure as \"You need the following ingredients: flour, sugar, and eggs.\"\n\nApostrophes serve two main purposes: showing possession and creating contractions. For possession, add 's for singular nouns (\"the dog's bowl\") and only an apostrophe for plural nouns ending in s (\"the dogs' bowls\"). For irregular plurals, add 's (\"the children's toys\"). Contractions combine two words: \"don't\" = \"do not,\" \"it's\" = \"it is.\" The most common error is confusing \"it's\" (contraction) with \"its\" (possessive): \"The cat licked its paw\" has no apostrophe because \"its\" shows possession.\n\nDashes — both em dashes (—) and en dashes (–) — add emphasis, set off interruptions, or indicate ranges. Em dashes are the most common in modern writing: \"The results — which surprised everyone — were published immediately.\" They can replace commas or parentheses for stronger emphasis. En dashes indicate ranges: \"pages 10–25\" or \"the 2020–2024 period.\" Hyphens (-) join compound modifiers before nouns: \"a well-known author\" but not after: \"the author is well known.\"",
            simplifiedBody: "Commas have several key uses: separate items in a list, join two independent clauses with a conjunction (\"I wanted to go, but it rained\"), and follow introductory words (\"However, the results were wrong\"). Never join two complete sentences with just a comma — that's a comma splice. Use a period, semicolon, or add a conjunction.\n\nSemicolons connect two related complete sentences without a conjunction: \"It rained; we stayed inside.\" Colons introduce a list or explanation: \"You need three things: water, food, and shelter.\" The part before a colon must be a complete sentence.\n\nApostrophes show ownership (\"the dog's bone\") or make contractions (\"don't\" = \"do not\"). The most common mistake is mixing up \"it's\" (it is) and \"its\" (possessive). \"It's raining\" uses the contraction; \"The cat licked its paw\" shows possession.\n\nDashes (—) add emphasis or set off extra information. Hyphens (-) join compound words before a noun: \"a five-year-old child\" but \"the child is five years old.\"",
            duration: "11 min read",
            durationMinutes: 11,
            cognitiveLoad: "medium",
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
          {
            id: "literary-analysis",
            chapterId: "english-reading",
            subjectId: "english",
            title: "Literary Analysis",
            body: "Literary analysis is the practice of examining how a text's elements — theme, symbolism, imagery, irony, point of view, and tone — work together to create meaning. Rather than simply summarizing what happens, literary analysis asks why and how the author makes deliberate choices.\n\nTheme is the central idea or message of a literary work — an insight about life, society, or human nature that the author wants to convey. Themes are not stated directly; they emerge through characters, events, and images. For example, in F. Scott Fitzgerald's The Great Gatsby, the theme that the American Dream is ultimately hollow and unattainable develops through Gatsby's obsessive pursuit of wealth and Daisy, his tragic downfall, and the novel's closing image of the green light. To identify a theme, ask: What does this text say about how people live, love, struggle, or change?\n\nSymbolism is the use of concrete objects, characters, or events to represent abstract ideas. A rose might symbolize love; a storm might symbolize internal conflict; a locked door might symbolize isolation. In literature, symbolism often operates on multiple levels. In The Great Gatsby, the green light at the end of Daisy's dock symbolizes Gatsby's unreachable dream — and by extension, the elusive promise of the American Dream itself. A common mistake is reducing symbols to single meanings; strong symbols are complex and layered.\n\nImagery appeals to the senses — sight, sound, smell, taste, and touch — to create vivid mental pictures and evoke emotions. Robert Frost's \"Stopping by Woods on a Snowy Evening\" uses visual imagery (\"The woods are lovely, dark and deep\") and auditory imagery (\"The sweep / Of easy wind and downy flake\") to create a mood of quiet, contemplative beauty. When analyzing imagery, identify which senses the author activates and what feelings or associations those images evoke.\n\nIrony creates a contrast between expectation and reality, or between appearance and truth. Dramatic irony occurs when the audience knows something a character does not — in Romeo and Juliet, we know Juliet is not dead, but Romeo believes she is, making his suicide tragically ironic. Situational irony is when the outcome contradicts expectations — a fire station burning down. Verbal irony is when someone says the opposite of what they mean, often sarcastically: \"What lovely weather\" during a hurricane. Understanding which type of irony is at work helps you grasp the author's commentary on characters or situations.\n\nPoint of view determines who tells the story and how much the narrator knows. First person (\"I\") gives intimate access to the narrator's thoughts but limits perspective to one character. Third-person limited follows one character closely with \"he\" or \"she\" but remains outside their head. Third-person omniscient (\"all-knowing\") can enter any character's mind. Each choice shapes what the reader knows and feels. Tone is the author's attitude toward the subject — sarcastic, solemn, joyful, critical. Mood is the feeling the text creates in the reader — tense, peaceful, ominous, hopeful. Tone and mood are related but distinct: an author can write with a satirical tone to create an unsettling mood.",
            simplifiedBody: "Literary analysis looks at how a text's parts create meaning. Theme is the big message — what the text says about life or people. For example, the theme of The Great Gatsby is that the American Dream is ultimately hollow. Themes aren't stated directly; you find them through what happens in the story.\n\nSymbolism is when objects or events represent bigger ideas. A green light might symbolize hope; a storm might symbolize conflict. Imagery creates pictures through the senses — what you see, hear, smell, taste, or touch in the text.\n\nIrony is when reality contradicts what you expect. Dramatic irony: you know something a character doesn't. Situational irony: the opposite of what you expected happens. Verbal irony: someone says the opposite of what they mean.\n\nPoint of view is who tells the story — first person (\"I\"), third-person limited (one character), or third-person omniscient (everyone's thoughts). Tone is the author's attitude; mood is how the text makes you feel.",
            duration: "11 min read",
            durationMinutes: 11,
            cognitiveLoad: "high",
          },
          {
            id: "vocabulary-strategies",
            chapterId: "english-reading",
            subjectId: "english",
            title: "Vocabulary Strategies",
            body: "A strong vocabulary is the foundation of reading comprehension and clear communication. When you encounter unfamiliar words, you need systematic strategies to figure out their meanings rather than skipping over them.\n\nContext clues are hints surrounding an unfamiliar word that reveal its meaning. There are several types. Synonym clues provide a similar word nearby: \"She was elated, almost joyful.\" If you know \"joyful,\" you can infer \"elated.\" Antonym clues use contrast: \"Unlike her meticulous brother, she was careless about details.\" The word \"unlike\" signals that \"careless\" contrasts with \"meticulous,\" suggesting \"meticulous\" means very careful. Definition clues directly explain the word: \"Photosynthesis, the process by which plants convert sunlight to energy, is essential to life.\" Example clues give instances: \"She practiced various aquatic activities — swimming, diving, and kayaking.\" All these examples point to water-based activities. Inference clues require combining multiple pieces of information from the text to deduce a meaning.\n\nWord roots, prefixes, and suffixes unlock the meanings of thousands of English words. The root \"ject\" means throw: inject (throw in), reject (throw back), project (throw forward). The root \"spect\" means look: inspect (look into), spectator (one who looks), retrospect (look back). The root \"port\" means carry: transport (carry across), export (carry out), import (carry in). Common prefixes alter meaning: \"un-\" and \"dis-\" mean not or reverse (unhappy, disagree), \"re-\" means again (rebuild, reread), \"pre-\" means before (predict, prevent), and \"mis-\" means wrong (mislead, misunderstand). Common suffixes indicate word types: \"-tion\" and \"-ment\" create nouns (creation, government), \"-able\" and \"-ful\" create adjectives (readable, beautiful), and \"-ly\" creates adverbs (quickly, carefully). One root can unlock dozens of related words — learning \"duct\" (lead) gives you conduct, introduce, produce, reduce, and seduce.\n\nDenotation is a word's literal, dictionary definition, while connotation is the emotional or cultural association it carries. \"House\" and \"home\" both denote a dwelling, but \"home\" connotes warmth, belonging, and family. \"Sturdy\" and \"bulky\" both describe something solid, but \"sturdy\" has positive connotations of reliability while \"bulky\" suggests unwieldiness. Choosing between denotationally similar words with different connotations is a key writing skill — \"thrifty\" praises while \"cheap\" criticizes, even though both mean careful with money.\n\nUsing a dictionary effectively means going beyond the first definition. Words often have multiple meanings — \"run\" has over 60 definitions. Pay attention to the part of speech listed, the example sentences, and the etymology (word origin), which often reveals connections to other words you know.\n\nTo build vocabulary long-term, combine context-based learning with spaced repetition. When you learn a new word from context, write it down with the sentence where you found it, look it up, and review it at increasing intervals (one day, three days, one week, two weeks). Using new words in your own speaking and writing cements them in memory far more effectively than simply reading definitions.",
            simplifiedBody: "When you see a word you don't know, look at the words around it for clues. If the text says \"she was elated, almost joyful,\" you know \"elated\" means something like \"joyful.\" Contrast words like \"unlike\" or \"but\" help too — they show you how a new word differs from a known word.\n\nEnglish words are built from parts. Roots carry core meanings: \"ject\" means throw, so inject means throw in, reject means throw back. Prefixes change meaning: \"un-\" means not, \"re-\" means again. Suffixes tell you the word type: \"-tion\" makes a noun, \"-ly\" makes an adverb. Learning these parts helps you figure out many words at once.\n\nDenotation is a word's dictionary meaning; connotation is the feeling it carries. \"Home\" and \"house\" mean the same thing, but \"home\" feels warmer. \"Sturdy\" sounds good; \"bulky\" sounds bad — even though both mean solid.\n\nTo remember new words, write them down with the sentence where you found them, look up the definition, and review them over time. Using the word in your own sentences helps it stick.",
            duration: "10 min read",
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
          {
            id: "persuasive-writing",
            chapterId: "english-writing",
            subjectId: "english",
            title: "Persuasive Writing",
            body: "Persuasive writing aims to convince the reader to adopt a particular viewpoint or take a specific action. Effective persuasion combines a clear thesis, solid evidence, logical reasoning, and an understanding of your audience.\n\nA thesis statement is the backbone of a persuasive essay — a single sentence that clearly states your position. A strong thesis is specific and arguable, not a statement of fact. Compare: \"Pollution is bad\" (vague, not arguable) versus \"Cities should invest in public transit to reduce carbon emissions and improve air quality\" (specific, arguable, and provides direction). Your entire essay exists to support this thesis, so every paragraph must connect back to it.\n\nEvidence and reasoning transform an opinion into an argument. Evidence includes facts, statistics, expert testimony, examples, and anecdotes. For instance, if arguing for public transit investment, you might cite data showing that a city's bus rapid transit system reduced commuter carbon emissions by 40%. Reasoning is the logical connection between your evidence and your claim — explaining why the evidence proves your point. Never assume evidence speaks for itself; always analyze it. A statistic without explanation is just a number.\n\nCounterarguments strengthen your essay by showing you've considered other perspectives. Address the strongest opposing argument honestly and refute it with evidence or reasoning. For example, if arguing for public transit, acknowledge that \"some argue public transit is too costly\" and then counter with data showing that public transit saves $2,600 per household annually in reduced road maintenance, lower healthcare costs, and decreased congestion. Dismissing or ignoring counterarguments weakens your credibility.\n\nAristotle identified three rhetorical appeals. Ethos is credibility — why the audience should trust you. Build ethos by citing credible sources, acknowledging complexity, and maintaining a fair tone. Pathos is emotional appeal — connecting with the reader's values, fears, or hopes. Describing a child with asthma in a polluted city is pathos. Logos is logical reasoning — presenting clear evidence and sound arguments. The strongest persuasive writing uses all three appeals in balance.\n\nThe structure of a persuasive essay typically follows this pattern: an introduction that hooks the reader and presents the thesis; body paragraphs that each address one supporting point with evidence and analysis; a counterargument paragraph that addresses and refutes opposition; and a conclusion that restates the thesis, summarizes the strongest points, and ends with a call to action or a compelling final thought.",
            simplifiedBody: "Persuasive writing tries to convince someone to agree with you or take action. Start with a thesis statement — one clear sentence that states your position. It should be specific and arguable: \"Cities should fund public transit\" is better than \"Pollution is bad.\"\n\nBack up your argument with evidence: facts, statistics, examples, and expert quotes. Then explain why the evidence supports your point — never assume it's obvious. Also, address the other side. Acknowledge the best argument against your position and explain why your position is still stronger.\n\nAristotle identified three ways to persuade. Ethos: be credible (cite sources, stay fair). Pathos: connect to emotions (describe real impacts). Logos: use logic (present clear evidence and reasoning). Use all three.\n\nA typical persuasive essay has an introduction with your thesis, body paragraphs each making one point, a paragraph addressing counterarguments, and a conclusion that wraps up and calls the reader to act.",
            duration: "10 min read",
            durationMinutes: 10,
            cognitiveLoad: "medium",
          },
          {
            id: "research-papers",
            chapterId: "english-writing",
            subjectId: "english",
            title: "Research Papers",
            body: "A research paper goes beyond personal opinion by grounding its arguments in evidence gathered from credible sources. Learning to find, evaluate, and cite sources is an essential academic and professional skill.\n\nNot all sources are equally trustworthy. Academic journals (peer-reviewed articles) are the gold standard — they are reviewed by experts before publication. Books from university presses are also highly reliable. Government reports (.gov sites) and established organizations (.org) provide authoritative data. Avoid using personal blogs, Wikipedia, or social media as primary sources, though Wikipedia's references section can lead you to credible sources. When evaluating any source, ask: Who wrote this? What are their qualifications? What evidence do they present? When was it published? Is there a conflict of interest? The CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) provides a systematic framework for evaluating source quality.\n\nMLA (Modern Language Association) and APA (American Psychological Association) are the two most common citation styles. MLA is typically used in humanities — English, literature, philosophy — and emphasizes the author and page number: (Smith 45). APA is used in social sciences, psychology, and education, and includes the author, year, and sometimes page number: (Smith, 2023, p. 45). Both styles have specific formatting rules for the Works Cited (MLA) or References (APA) page at the end of your paper. The key principle is the same: give credit to the original author so readers can find the source.\n\nCiting sources properly prevents plagiarism — presenting someone else's ideas, words, or data as your own. Plagiarism includes copying text word-for-word without quotation marks, paraphrasing someone's ideas without credit, and using data without attribution. Even unintentional plagiarism has serious consequences. To avoid it, cite every time you use someone else's idea (even if you paraphrase), use quotation marks around exact words, and keep detailed notes about where your information comes from during your research.\n\nParaphrasing is restating an idea in your own words. Effective paraphrasing requires you to genuinely understand the original and then express it differently — not just swap a few synonyms. A poor paraphrase changes \"Climate change threatens coastal communities through rising sea levels\" to \"Global warming endangers seaside towns because of increasing ocean heights\" — the structure is identical. A strong paraphrase might read: \"Rising ocean levels, driven by climate change, put populations in low-lying coastal areas at growing risk of flooding and displacement.\" The sentence is restructured, the vocabulary is different, and the emphasis shifts, while the meaning remains intact.\n\nOrganizing a research paper follows a clear structure. The introduction presents the topic, provides context, and states your thesis. Each body section develops one aspect of your argument, integrating sources to support your analysis. You must synthesize sources — not just stack quotes. This means comparing sources that agree, identifying where they differ, and showing how they collectively support your thesis. The conclusion synthesizes your findings and states the broader significance of your research.",
            simplifiedBody: "A research paper backs up its arguments with evidence from credible sources. The best sources are peer-reviewed journal articles and university press books. Government sites (.gov) and established organizations (.org) are also good. Avoid blogs, Wikipedia, and social media as sources — though Wikipedia's reference list can help you find real sources.\n\nMLA and APA are the two main citation styles. MLA (used in English and humanities) puts the author and page number in the citation: (Smith 45). APA (used in sciences) adds the year: (Smith, 2023, p. 45). Both require a Works Cited or References page at the end. Always give credit to the original author.\n\nPlagiarism is using someone else's words or ideas without credit — even accidentally. Prevent it by citing every source, using quotation marks for exact words, and keeping notes about where your information came from.\n\nTo paraphrase well, read the original, understand it, then write it in genuinely new words with a new sentence structure. Just swapping synonyms is not enough. Organize your paper with an introduction, body paragraphs that each develop one point while weaving in sources, and a conclusion.",
            duration: "10 min read",
            durationMinutes: 10,
            cognitiveLoad: "high",
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
