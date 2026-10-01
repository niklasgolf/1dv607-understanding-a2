# **🪜 Step 62 — The Complete Assignment 2 Master Map**

Now we can put the whole assignment together.

After all the concepts we've covered, Assignment 2 can be understood as **one journey through object-oriented design in three directions**:

> 📐 **Design → Code**  
> 💻 **Code → Design**  
> 🤖 **AI analysis → Human verification**

That is the backbone of the entire assignment.

## **📜 FROM THE GITLAB ASSIGNMENT**

Assignment 2 is called **Object-Oriented Design and Implementation**. Its purpose is to connect OO design with implementation: turning design into code, deriving design from existing code, and evaluating the relationship between specification, design and implementation. assignment\_2

# **🌍 The complete journey**

Think of the assignment as three large chapters.

### **🎼 PART 1 — Crescendo Music School**

📜 Specification \+ 📐 UML

↓

🧠 understand design

↓

💻 implementation

### **🐕 PART 2 — PawsHome**

💻 Existing implementation

↓

🔎 reverse engineering

↓

📐 current design

↓

⚖️ compare with specification

↓

🧠 identify problems

↓

✨ propose improved design

### **🤖 PART 3 — GenAI**

🤖 AI analyzes PawsHome

↓

🔎 you verify every important claim

↓

💻 source code provides evidence

↓

📝 evaluate AI

↓

🧠 reflect.

That's the entire assignment at its highest level.

# **🚦 Stage 0 — Prepare Git correctly**

Before the assignment work itself:

🌿 work on branch `assignment-2`

🚫 don't work directly on `main`

⬇️ pull before working

💾 make regular meaningful commits

⬆️ push your work

👥 both group members contribute.

At submission:

🔀 create Merge Request:

`assignment-2` → `main`

but:

🚫 **do not merge it yourselves.**

These workflow requirements come directly from the supplied GitLab material. workflow workflow

# **🎼 Stage 1 — Understand Crescendo before implementing anything**

Start with:

📜 Crescendo specification

📐 Crescendo class diagram

🎭 Crescendo use-case diagram.

Don't begin by randomly creating classes.

First understand:

📦 classes

📝 attributes

⚙️ operations

🧬 inheritance

🔗 associations

🔢 multiplicities

💎 compositions

📏 domain rules

🏭 creation responsibilities.

# **🧠 Stage 2 — Translate Crescendo's design into implementation**

This is:

> 📐 **Design → Implementation**

You are given the design and must preserve it faithfully.

Important examples include:

👤 abstract `Person`

🎓 `Student`

👨‍🏫 `Teacher`

🎼 `Course`

🏫 `MusicSchool`

💰 `TuitionFee`

plus the supplied enums and relationships.

The written assignment requires the specified classes, inheritance, associations, multiplicities, operations and rules to be represented in the implementation. assignment\_2

# **📏 Stage 3 — Make the rules real**

A UML diagram saying:

🎓 Student → maximum 3 Courses

isn't enough.

The implementation must actually prevent:

🎓 Student → Course 1

🎓 Student → Course 2

🎓 Student → Course 3

🎓 Student → Course 4 ❌

The same principle applies throughout Crescendo.

The specification's rule IDs such as:

`R3.2`

`R5.3`

`R6.4`

represent actual constraints the implementation must preserve. crescendo\_music\_school crescendo\_music\_school

# **⚠️ Stage 4 — Handle invalid operations safely**

If an operation violates a rule:

🚫 reject it

and:

🔒 don't leave the system half-changed.

The specification says a rule violation must leave the system unchanged and throw an appropriate exception whose message identifies the rule. crescendo\_music\_school

So always think:

**CHECK**

↓

**VALID?**

↓

✅ change state

or:

❌ reject without changing state.

# **🎮 Stage 5 — Keep CLI and domain logic separated**

Your program has:

🖥️ console interaction

and:

🧩 domain logic.

These are different responsibilities.

`Main` handles the console side.

Domain objects enforce domain rules.

This is part of learning:

🎯 cohesion

🕸️ coupling

🧩 separation of concerns.

# **📜 Important Part 1 boundary**

The written assignment explicitly says:

> **Do not use AI tools for Part 1\.** assignment\_2

So our work here has been about understanding the assignment and learning the general OO concepts.

When you actually perform the assessed Part 1 implementation, that restriction matters.

Also remember our earlier language issue: the written setup specifically describes **Java, JDK 17 and Gradle**, while you reported that your teacher said TypeScript could be used. Before implementation, that discrepancy should be confirmed rather than guessed.

# **🐕 Stage 6 — Enter PawsHome with a completely different mindset**

Now forget:

> “How should I build this?”

Your first question becomes:

> **What has already been built?**

You receive an existing implementation.

Don't fix it.

Don't redesign it.

Don't make it conform to the specification.

Become:

🕵️ **software archaeologist**.

# **🔎 Stage 7 — Reverse-engineer the current PawsHome system**

Read:

💻 classes

💻 fields

💻 methods

💻 constructors

💻 references

💻 collections

💻 method calls

💻 validation

💻 state changes.

From that evidence reconstruct:

📐 current class structure

🎭 current functionality

🎬 current execution sequences.

# **📐 Stage 8 — Produce the current-system diagrams**

Part 2 requires:

🔎 `current_class_diagram.png`

🔎 `current_use_case_diagram.png`

🎬 `apply_for_adoption_sequence.png`

🎬 `approve_application_sequence.png`. assignment\_2

These describe:

> **What the implementation actually does.**

Even if you discover something ugly.

Even if something required is missing.

Even if you already know how you'd improve it.

Don't repair history.

# **⚖️ Stage 9 — Compare implementation with specification**

Now bring the PawsHome specification back into the picture.

For each important requirement:

📜 **What should happen?**

↓

💻 **What actually happens?**

↓

⚖️ **Do they match?**

Use our Step 59 formula:

> 📜 **Should** → 💻 **Does** → ⚖️ **Difference** → 💥 **Why it matters** → ✨ **Improve**

Now you have genuine:

🔎 **gap analysis**.

# **🧠 Stage 10 — Analyze design quality separately**

Don't stop with missing functionality.

Now ask:

🎯 Are classes cohesive?

🕸️ Is coupling reasonable?

👨‍🔬 Are responsibilities with Information Experts?

🏭 Does creation responsibility make sense?

🎮 Is coordination separated from domain work?

🎭 Could polymorphism appropriately handle variation?

🛠️ Would Pure Fabrication help technical responsibilities?

↪️ Would Indirection reduce problematic dependency?

🛡️ Are likely variations protected?

Now you're using your GRASP toolbox.

# **✨ Stage 11 — Design the improved PawsHome**

Only after understanding the existing system and its problems do you create:

✨ `improved_class_diagram.png`

and:

✨ `complete_use_case_diagram.png`. assignment\_2

Now you can move from:

> **IS**

to:

> **SHOULD**

But every significant improvement should be justifiable.

Not:

> “I like this better.”

Instead:

🔎 evidence

↓

💥 problem

↓

🧠 design principle

↓

✨ improvement

↓

🎯 benefit.

# **📝 Stage 12 — Finish the Part 2 report**

The Part 2 report is:

📄 `assignment_2/docs/pawshome.md`

It brings together your:

📝 problem summary

⚖️ gap analysis

⚠️ error handling/input validation analysis

🧠 GRASP/design analysis

✨ recommended improvements

💡 justification. assignment\_2

# **🛑 Stage 13 — FREEZE PART 2**

This is a major checkpoint.

Before starting Part 3:

> **Part 2 must be finished.**

Once Part 3 begins:

🧊 **Part 2 is frozen.**

If AI later shows you that your own diagram contained a mistake:

🚫 don't secretly repair Part 2\.

Instead:

📝 discuss the discovery in Part 3\. genai\_log\_template

# **🤖 Stage 14 — Let GenAI independently analyze PawsHome**

Now AI is deliberately allowed and required as part of the experiment.

Give it the required:

📜 specification

* 

💻 Java source.

Ask it for the required:

📐 current class diagram

🎬 Staff-approves-application sequence diagram

🧠 mismatches/design/GRASP observations. assignment\_2

# **🗃️ Stage 15 — Preserve the raw AI interaction**

Save:

👤 every prompt

and:

🤖 every answer

**word for word**.

Don't clean them.

Don't improve them.

Don't quietly repair diagrams.

Store them under:

📁 `assignment_2/docs/genai_raw/`

with the required raw-log structure. genai\_log\_template

# **🧐 Stage 16 — Challenge the AI**

Don't just accept its first answer.

The template requires at least one critical follow-up. genai\_log\_template

For example, conceptually:

> “What implementation evidence supports that multiplicity?”

or:

> “Check that relationship again against the source.”

The point is:

🤖 AI makes claims.

👤 developer challenges and verifies them.

# **🔬 Stage 17 — Verify AI against evidence**

Now compare:

👤 **Your frozen Part 2**

🤖 **AI's analysis**

💻 **Actual Java implementation**

📜 **Specification where relevant**

For AI claims use:

✅ **Confirmed**

❌ **Rejected**

🟡 **Partly correct**

and explain the evidence. genai\_log\_template

# **📝 Stage 18 — Reflect on the experiment**

Finally ask:

🤖 What did AI do well?

🚨 What did it invent?

➖ What did it miss?

👤 What did we notice that AI didn't?

🤖 What did AI notice that we didn't?

🔎 How important was source-code verification?

🧠 What did this teach us about using GenAI for software design/reverse engineering?

That's the deeper purpose of Part 3\.

# **📁 Stage 19 — Final structure check**

At the end, your Assignment 2 material has three major bodies:

🎼 **Crescendo**

implementation \+ Part 1 documentation

🐕 **PawsHome**

current analysis \+ sequences \+ gap analysis \+ improved design

🤖 **GenAI**

raw interactions \+ AI diagrams \+ verification \+ reflection.

All of this belongs under:

📁 `assignment_2/`

# **🚀 Stage 20 — Submit through GitLab**

Finally:

⬇️ pull/check latest work

🔍 inspect files

🖼️ make sure diagrams render

📝 make sure documentation renders directly in GitLab as required

💾 commit remaining legitimate changes

⬆️ push `assignment-2`

🔀 create Merge Request:

**assignment-2 → main**

🚫 don't merge it yourself.

# **🧠 The entire assignment in three lines**

If everything else disappears from your memory, remember these:

### **🎼 PART 1**

> 📐 **DESIGN → IMPLEMENTATION**

### **🐕 PART 2**

> 💻 **IMPLEMENTATION → DESIGN → ANALYSIS → IMPROVED DESIGN**

### **🤖 PART 3**

> 🤖 **AI ANALYSIS → HUMAN VERIFICATION → EVIDENCE → REFLECTION**

# **❤️ And the single idea underneath all of it**

After 62 steps, almost everything we've discussed returns to one question:

> **Which object should be responsible for what — and can we justify that decision from requirements, design principles and implementation evidence?**

That's the heart of object-oriented design in this assignment.

