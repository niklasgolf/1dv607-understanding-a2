# **🪜 Step 34 — When Is Assignment 2 Actually “Done”?**

Now we can turn everything into one final **roadmap/checklist**.

The most important thing is that A2 has an order. Some parts should not be mixed together.

## **🌿 PHASE 1 — Start Assignment 2 correctly**

### **📜 FROM THE GITLAB MATERIAL**

Before beginning the actual assignment work:

☐ Assignment 1 has been merged.

☐ Update `main`.

☐ Create the branch **`assignment-2`**.

☐ Push the branch to GitLab.

☐ Both you and Edvin work on that branch.

☐ Pull regularly before working.

☐ Make regular, meaningful commits.

☐ Both group members contribute to the Git history. workflow

# **🎼 PHASE 2 — Complete Part 1: Crescendo**

The direction is:

📐 **DESIGN → IMPLEMENTATION**

### **📜 FROM THE GITLAB ASSIGNMENT**

Part 1 requires the Crescendo implementation to represent the supplied design, including:

☐ Classes and enums

☐ Attributes and operations

☐ `Person` inheritance

☐ Associations

☐ Multiplicities

☐ Composition

☐ Domain rules

☐ Error handling

☐ CLI

☐ Predefined demonstration

☐ At least two documented GRASP principles

☐ Required relationship-pattern explanations

☐ `docs/part_1.md` completed. assignment\_2

## **🚫 Remember the AI restriction**

Part 1 explicitly says **not to use AI tools for the tasks in this part**.

So our explanatory book can help you understand the concepts, but the assessed Crescendo work itself is yours and Edvin's. assignment\_2

# **🐕 PHASE 3 — Complete Part 2: PawsHome**

Now the arrow reverses:

💻 **IMPLEMENTATION → DESIGN**

First study the supplied implementation **without fixing it**.

## **🔎 Current-system analysis**

Complete:

☐ `current_class_diagram.png`

☐ `current_use_case_diagram.png`

☐ `apply_for_adoption_sequence.png`

☐ `approve_application_sequence.png`

These describe what the existing implementation **actually does**.

## **⚖️ Analyze the gaps**

Compare:

📜 specification

versus:

💻 implementation

Investigate:

☐ missing/incomplete use cases

☐ relationships

☐ multiplicities

☐ domain rules

☐ validation

☐ error handling

☐ responsibility placement

☐ GRASP/design problems

## **✨ Recommend improvements**

Then produce:

☐ `improved_class_diagram.png`

☐ `complete_use_case_diagram.png`

And complete:

☐ `docs/pawshome.md` assignment\_2

# **🛑 CRITICAL CHECKPOINT**

This is probably the most important ordering rule in the entire assignment.

### **📜 FROM THE GITLAB MATERIAL**

**Part 2 must be completed before Part 3 begins.**

Once you start Part 3:

🔒 **DO NOT CHANGE YOUR PART 2 ANALYSIS OR DIAGRAMS.**

If AI later reveals a mistake in Part 2, leave the original Part 2 work unchanged and discuss the discovery in Part 3\. genai\_log\_template

So think of this moment as:

🐕 PART 2 COMPLETE

↓

🔒 **FREEZE**

↓

🤖 START PART 3

# **🤖 PHASE 4 — Complete Part 3: GenAI**

Now AI is deliberately allowed and required for the analysis.

The AI receives:

📜 PawsHome specification

* 

💻 PawsHome source code

## **🤖 Generate the required AI material**

The AI should produce:

☐ current-system class diagram

☐ sequence diagram for **Staff approves an application**

☐ mismatches/problems

☐ possible GRASP/design problems

## **🗃️ Preserve everything**

Save:

☐ every prompt word-for-word

☐ every answer word-for-word

under:

**`docs/genai_raw/`**

Also:

☐ include at least one critical follow-up prompt

☐ do not silently correct the AI's output. genai\_log\_template

# **🔬 PHASE 5 — Verify the AI**

Now compare:

🤖 AI

vs.

👨‍💻 your Part 2 analysis

vs.

💻 actual implementation

Check:

☐ classes

☐ attributes

☐ operations

☐ associations

☐ multiplicities

☐ navigability

☐ dependencies

☐ sequence interactions

☐ missing interactions

☐ invented interactions

☐ incorrect ordering

☐ AI's claimed design problems

## **⚖️ Give evidence-based verdicts**

For AI claims:

✅ **Confirmed**

❌ **Rejected**

🟡 **Partly correct**

And explain the evidence from the actual implementation. genai\_log\_template

# **📝 PHASE 6 — Finish Part 3 documentation**

Complete:

☐ `docs/genai_part.md`

☐ `docs/genai_raw/`

☐ `genai_class_diagram.png`

☐ `genai_approve_sequence.png`

☐ final reflection

At this stage, all three assignment parts should be complete.

# **🔍 PHASE 7 — Final inspection**

Before submission, conceptually ask:

> Can somebody clone our repository and understand our work?

Check that:

☐ required files exist

☐ filenames are correct

☐ diagrams are viewable

☐ documentation is complete

☐ commits have been pushed

☐ both group members have contributed

☐ nothing important exists only locally on somebody's laptop

☐ Part 2 wasn't altered after Part 3 began

# **🚀 PHASE 8 — Submit through Merge Request**

### **📜 FROM THE GITLAB MATERIAL**

Finally create a Merge Request:

🌿 **`assignment-2`**

→

🌳 **`main`**

And:

🛑 **Do not merge it yourselves.** workflow

# **🧠 The whole recipe**

We can now compress our entire book into one flow:

🌿 **Create assignment-2 branch**

↓

🎼 **PART 1 — Crescendo**

📐 Design → 💻 Implementation

↓

🐕 **PART 2 — PawsHome**

💻 Implementation → 📐 Current Design

↓

⚖️ **Compare with specification**

↓

✨ **Recommend improved design**

↓

🔒 **FREEZE PART 2**

↓

🤖 **PART 3 — GenAI analyzes PawsHome**

↓

🔬 **Verify AI against actual code**

↓

📝 **Reflect**

↓

🔍 **Final checks**

↓

🚀 **Merge Request assignment-2 → main**

↓

🛑 **Do not merge**

That is Assignment 2 from beginning to end.

