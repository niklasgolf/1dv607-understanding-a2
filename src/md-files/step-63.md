# **🪜 Step 63 — Final A2 Submission Checklist**

Now we turn everything into a practical **final checklist**.

This isn't about learning another big theory. It's about making sure you and Edvin haven't accidentally forgotten something before submitting Assignment 2\.

## **📜 FROM THE GITLAB ASSIGNMENT**

The assignment has required artifacts for all three parts, plus Git/GitLab requirements. The checklist below organizes those requirements into one final inspection.

# **🌿 1\. Git and GitLab**

Before submission, check:

☐ All Assignment 2 work is under `assignment_2/`

☐ You worked on branch `assignment-2`

☐ You did not work directly on `main`

☐ Both group members have contributed

☐ You have regular, meaningful commits

☐ Everything needed has been pushed

☐ The final Merge Request goes from `assignment-2` → `main`

☐ You **do not merge the MR yourselves**

These requirements come directly from the supplied workflow and assignment instructions. workflow workflow

# **🎼 2\. Part 1 — Crescendo**

Check that the implementation represents the supplied design.

☐ `MusicSchool`

☐ abstract `Person`

☐ `Student`

☐ `Teacher`

☐ `Course`

☐ `TuitionFee`

☐ `Level`

☐ `PaymentStatus`

Then check the OO structure:

☐ inheritance represented correctly

☐ associations represented

☐ multiplicities enforced

☐ compositions represented appropriately

☐ bidirectional relationships remain consistent

☐ internal collections are protected

☐ required operations exist

☐ required attributes/state exist. crescendo\_music\_school

# **📏 3\. Crescendo domain rules**

Don't merely check that the classes exist.

Check that the required rules actually work.

Examples include:

☐ Student maximum three Courses

☐ Student only enrolls in matching-level Courses

☐ no duplicate enrollment

☐ Course capacity respected

☐ Course always has exactly one Teacher

☐ TuitionFee amount is positive

☐ maximum one TuitionFee per Student per term

☐ TuitionFee begins unpaid

☐ paid fee cannot be paid again

☐ required uniqueness rules are enforced. crescendo\_music\_school

# **⚠️ 4\. Crescendo error handling**

Check:

☐ invalid input is rejected appropriately

☐ invalid state operations are rejected appropriately

☐ exception messages identify the relevant rule ID

☐ failed operations don't leave partial changes behind. crescendo\_music\_school

Remember:

> ❌ failure must not corrupt the object graph.

# **🎮 5\. CLI and separation**

Check:

☐ the CLI exists

☐ required demonstration functionality can be exercised

☐ console input/output belongs in `Main`

☐ domain classes contain domain logic rather than UI behaviour

☐ the demonstration shows the important system behaviour.

The written Part 1 instructions describe Crescendo as a CLI proof of concept rather than a GUI application. assignment\_2

# **🧠 6\. Part 1 documentation**

Check:

☐ `assignment_2/docs/part_1.md` exists

☐ required relationship patterns are explained

☐ relevant code snippets are included where required

☐ explanations connect implementation to the class diagram

☐ composition ownership/lifetime is discussed

☐ at least two GRASP principles are documented as required. assignment\_2

# **🚨 7\. Remember the Part 1 AI restriction**

The written assignment explicitly prohibits AI use for Part 1\. assignment\_2

So don't use our conceptual study material as a reason to have AI generate the assessed Crescendo implementation or its assignment-specific analysis.

The purpose of these 63 steps has been to help you understand the concepts and instructions.

# **🐕 8\. Part 2 — Current PawsHome diagrams**

Make sure all four current-system artifacts exist:

☐ `current_class_diagram.png`

☐ `current_use_case_diagram.png`

☐ `apply_for_adoption_sequence.png`

☐ `approve_application_sequence.png`

Most importantly:

> 🔎 **They must represent the existing implementation.**

Don't secretly repair the implementation in these diagrams. assignment\_2

# **🔍 9\. Inspect the current class diagram carefully**

Ask:

☐ Are actual classes represented?

☐ Are important attributes/operations accurate?

☐ Are associations supported by the source?

☐ Are multiplicities based on what the implementation actually enforces?

☐ Is navigability accurate?

☐ Is inheritance accurate?

☐ Have you accidentally added something merely because the specification says it should exist?

That last mistake is particularly dangerous.

Remember:

> 🔎 **CURRENT \= IS**

# **🎬 10\. Inspect the sequence diagrams**

For both required scenarios, check:

☐ participants correspond to actual implementation objects

☐ important method calls really happen

☐ calls are in the correct order

☐ important interactions haven't been omitted

☐ interactions haven't been invented from the specification

☐ diagrams describe current implementation behaviour.

# **⚖️ 11\. Check the gap analysis**

Your analysis should compare:

📜 specification

against:

💻 implementation.

Look across the categories required by the assignment:

☐ missing/incomplete use cases

☐ relationships

☐ multiplicities

☐ domain rules

☐ validation

☐ error handling

☐ separation of domain logic

☐ GRASP/design problems. assignment\_2

Use our mental formula:

> 📜 **Should** → 💻 **Does** → ⚖️ **Difference** → 💥 **Why it matters** → ✨ **Improve**

# **🧠 12\. Check your GRASP reasoning**

Don't merely write:

> “Bad cohesion.”

or:

> “Violates Information Expert.”

For important claims, ask:

☐ What is my evidence?

☐ What responsibility is misplaced?

☐ Which GRASP principle explains the problem?

☐ What improvement am I proposing?

☐ Why would that improvement help?

Remember our writing formula:

> **Evidence → Problem → GRASP → Improvement → Benefit**

# **✨ 13\. Part 2 — Improved diagrams**

Check:

☐ `improved_class_diagram.png`

☐ `complete_use_case_diagram.png`. assignment\_2

These are different from the current diagrams.

Remember:

🔎 Current \= **IS**

✨ Improved/complete \= **SHOULD**

# **📝 14\. PawsHome report**

Check:

☐ `assignment_2/docs/pawshome.md` exists

and covers the required areas:

☐ problem summary

☐ gap analysis

☐ error handling/input validation

☐ GRASP/design-principle problems and improvements

☐ justification for recommendations. assignment\_2

# **🧊 15\. Critical checkpoint before Part 3**

Before using AI for Part 3:

☐ Part 2 is finished.

Then:

🧊 **freeze it.**

After Part 3 starts:

🚫 don't silently alter Part 2 because of something the AI discovers.

Instead:

📝 document that discovery in Part 3\. genai\_log\_template

# **🤖 16\. Part 3 — Required AI work**

Check that the AI was given the required:

☐ PawsHome specification

☐ Java source.

And that it produced the requested:

☐ current-system class diagram

☐ “Staff approves an application” sequence diagram

☐ mismatches / possible GRASP and design problems. assignment\_2

# **🗃️ 17\. Raw AI records**

This is easy to forget.

Check:

☐ every prompt saved

☐ every answer saved

☐ wording preserved exactly

☐ nothing silently cleaned up

☐ files stored under `assignment_2/docs/genai_raw/`

☐ naming follows the required structure such as `01_prompt.md`, `01_answer.md`

☐ at least one critical follow-up was made to the AI. genai\_log\_template

# **🖼️ 18\. AI diagrams**

Check:

☐ `genai_class_diagram.png`

☐ `genai_approve_sequence.png`

And remember:

> Don't silently fix the AI's diagram before evaluating it.

You need to evaluate what the AI **actually produced**. genai\_log\_template

# **🔬 19\. AI verification**

For the AI class diagram, check things such as:

☐ classes

☐ attributes

☐ operations

☐ associations

☐ multiplicities

☐ navigability

☐ dependencies.

For the AI sequence diagram:

☐ correct interactions

☐ missing interactions

☐ invented interactions

☐ incorrect order.

For AI problem claims:

☐ **Confirmed**

☐ **Rejected**

☐ **Partly correct**

with:

💻 evidence from the actual implementation. genai\_log\_template

# **📝 20\. Part 3 report and reflection**

Check:

☐ `assignment_2/docs/genai_part.md` exists

☐ tool/product information recorded as required

☐ model/version recorded

☐ session/date information recorded

☐ group members recorded

☐ comparison with your Part 2 work included

☐ AI errors and omissions discussed

☐ source-code evidence used

☐ reflection completed. genai\_log\_template

# **🖼️ 21\. Final visual inspection**

Don't finish by only checking filenames.

Open the repository as the teacher will see it.

Check:

☐ Markdown renders correctly in GitLab

☐ diagrams display directly

☐ image paths work

☐ filenames are exact

☐ nothing important requires downloading or an external diagram tool to understand

☐ no accidental temporary files

☐ documentation points to the correct diagrams

☐ repository structure is understandable.

# **🚨 The biggest mistakes to catch**

If I were making a final “danger list,” these are the ones I'd keep in mind:

⚠️ **Mixing specification into the current PawsHome diagrams**

⚠️ **Drawing multiplicities from what SHOULD happen instead of what the code actually enforces**

⚠️ **Fixing PawsHome while you're supposed to be reverse-engineering it**

⚠️ **Changing Part 2 after beginning Part 3**

⚠️ **Accepting AI claims without checking the Java source**

⚠️ **Correcting the AI output before preserving/evaluating it**

⚠️ **Forgetting raw prompts/answers**

⚠️ **Making GRASP claims without evidence**

⚠️ **Forgetting that failed Crescendo operations must not partially modify state**

⚠️ **Submitting/merging incorrectly in GitLab**

# **🧠 The ultimate five-question check**

Before submitting, you and Edvin should be able to answer:

### **1️⃣ Crescendo**

> **Can we explain how the supplied design became our implementation?**

### **2️⃣ PawsHome current system**

> **Can we prove our diagrams represent what the source code actually does?**

### **3️⃣ Gap analysis**

> **Can we show exactly where implementation and specification differ?**

### **4️⃣ Improved design**

> **Can we justify why our proposed design is better using evidence and OO/GRASP reasoning?**

### **5️⃣ GenAI**

> **Can we show exactly where the AI was correct, partly correct or wrong using source-code evidence?**

If those five answers are solid, you understand the intellectual structure of the assignment.

# **⭐ The final checklist sentence**

> **Don't merely show what you built or drew — show that you understand why the design looks the way it does, what the implementation actually does, where the two differ, and what evidence supports your conclusions.**

