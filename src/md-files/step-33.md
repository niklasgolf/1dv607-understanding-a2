# **🪜 Step 33 — Understand the A2 Folder Structure**

## **📜 FROM THE GITLAB ASSIGNMENT**

All Assignment 2 material should live inside:

**`assignment_2/`**

Inside that folder, the different parts of the assignment are separated into source code, documentation and diagrams. assignment\_2

A useful overview is:

📁 **assignment\_2/**  
　├── 📁 **src/**  
　├── 📁 **docs/**  
　│　├── 📄 **part\_1.md**  
　│　├── 📄 **pawshome.md**  
　│　├── 📄 **genai\_part.md**  
　│　└── 📁 **genai\_raw/**  
　└── 📁 **diagrams/**

# **💻 `src/` — Crescendo implementation**

### **📜 FROM THE GITLAB MATERIAL**

The Crescendo starter project goes into:

**`assignment_2/src/`**

The written setup instructions specify the Java/Gradle project here, including the Crescendo classes such as:

🏫 MusicSchool

👤 Person

🎓 Student

👨‍🏫 Teacher

🎼 Course

💰 TuitionFee

📊 Level

💳 PaymentStatus setup\_p1

So we can mentally associate:

**`src/` \= Part 1 implementation**

# **📝 `docs/part_1.md`**

This is the written documentation for Crescendo.

It accompanies the implementation and is where the required explanations about the Part 1 design decisions belong.

So:

💻 `src/` \= the implementation

📝 `docs/part_1.md` \= explanation/documentation

# **🐕 `docs/pawshome.md`**

This is the main written report for **Part 2**.

It contains our PawsHome analysis, including:

🔍 gap analysis

⚠️ validation and error handling

🧩 GRASP/design problems

🛠️ recommendations and justification. assignment\_2

# **📐 `diagrams/` — PawsHome UML**

Part 2 requires six images here:

📐 `current_class_diagram.png`

👤 `current_use_case_diagram.png`

⏱️ `apply_for_adoption_sequence.png`

⏱️ `approve_application_sequence.png`

✨ `improved_class_diagram.png`

👤 `complete_use_case_diagram.png` assignment\_2

Remember the split:

**First four \= current implementation**

**Last two \= recommended/complete design**

# **🤖 `docs/genai_part.md`**

This belongs to **Part 3**.

It is the main document where we evaluate the GenAI analysis.

Conceptually:

🤖 What did the AI produce?

🔎 What did we verify?

⚖️ What was Confirmed / Rejected / Partly correct?

👨‍💻 How did it compare with our Part 2 work?

🧠 What did we learn?

# **🗃️ `docs/genai_raw/`**

This is particularly important.

It contains the **unaltered evidence** from our AI conversation.

For example:

📄 `01_prompt.md`  
📄 `01_answer.md`

📄 `02_prompt.md`  
📄 `02_answer.md`

📄 `03_prompt.md`  
📄 `03_answer.md`

and so on.

The instructions say every prompt and answer used for Part 3 must be preserved **word-for-word**, rather than rewritten or cleaned up. genai\_log\_template

# **🤖 Where do the AI diagrams go?**

Part 3 also requires:

📐 `genai_class_diagram.png`

⏱️ `genai_approve_sequence.png`

These belong with the assignment's diagrams. assignment\_2

# **🧠 The easiest way to remember everything**

Think of the folder as representing the three parts:

### **🎼 PART 1 — CRESCENDO**

💻 `src/`

📝 `docs/part_1.md`

### **🐕 PART 2 — PAWSHOME**

📝 `docs/pawshome.md`

📐 six PawsHome diagrams

### **🤖 PART 3 — GENAI**

📝 `docs/genai_part.md`

🗃️ `docs/genai_raw/`

📐 two GenAI diagrams

## **🎯 So the repository itself tells the story**

**assignment\_2**

→ 🎼 build Crescendo

→ 🐕 reverse-engineer PawsHome

→ 🛠️ propose improvements

→ 🤖 let AI analyze PawsHome

→ 🔎 verify the AI

→ 🧠 reflect on the results

At this point, not only the assignment but also **where everything belongs** should be much clearer.

