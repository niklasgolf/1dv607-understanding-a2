# **🪜 Step 31 — See Assignment 2 as One Complete Journey**

We have now looked at the individual concepts and all three parts. It's time to zoom all the way out and see what **Assignment 2 is actually teaching us**.

## **📜 FROM THE GITLAB ASSIGNMENT**

The overall purpose of A2 is to connect **object-oriented design and implementation**.

We learn to move in both directions:

📐 **Design → Implementation**

and:

💻 **Implementation → Design**

Then Part 3 adds GenAI and asks us to critically evaluate AI-generated software analysis. assignment\_2

# **1️⃣ PART 1 — Crescendo**

## **📐 DESIGN → 💻 IMPLEMENTATION**

We begin with something that has already been designed.

We receive:

📜 specification

📐 class diagram

👤 use-case diagram

📏 domain rules

Then the task is to faithfully implement that design.

## **🧠 What Part 1 teaches us**

We learn how UML concepts become real software concepts:

📦 **Class** → class in the implementation

🔒 **Attribute** → internal object state

⚙️ **Operation** → behaviour/method

🧬 **Generalization** → inheritance

🔗 **Association** → object relationships

🔢 **Multiplicity** → constraints on those relationships

💎 **Composition** → ownership and lifecycle

📏 **Domain rule** → validation and behaviour

🧩 **GRASP** → responsibility assignment

So Part 1 teaches:

> **How does an object-oriented design become working software?**

# **2️⃣ PART 2 — PawsHome**

Then everything reverses.

## **💻 IMPLEMENTATION → 📐 DESIGN**

Now we receive an existing program.

Instead of being told exactly what its design is, we investigate it.

🔎 Find classes

🔎 Find attributes and operations

🔎 Find relationships

🔎 Determine multiplicities

🔎 Trace method calls

🔎 Discover responsibilities

From that evidence we reconstruct:

📐 current class diagram

👤 current use-case diagram

⏱️ sequence diagrams

## **Then we compare reality with requirements**

We have:

📜 **PawsHome specification**

versus:

💻 **PawsHome implementation**

This produces:

🔍 **gap analysis**

We investigate:

missing functionality

incorrect behaviour

relationships

multiplicities

domain rules

validation

error handling

separation of concerns

GRASP/design problems. assignment\_2

## **Then we improve the design**

Only after understanding the current system do we propose:

✨ improved class diagram

👤 complete use-case diagram

🧩 better responsibility assignment

⚠️ better validation/error handling

So Part 2 teaches:

> **How can we understand, evaluate and improve software that somebody else already wrote?**

# **3️⃣ PART 3 — GenAI**

Now we introduce a second analyst:

🤖 **AI**

But our own Part 2 work must already exist and is frozen before this comparison begins. genai\_log\_template

We give the AI:

📜 PawsHome specification

💻 PawsHome source code

and ask it to perform reverse engineering.

## **Then comes the important part**

We don't simply accept its answer.

We compare:

👨‍💻 **Our analysis**

🤖 **AI analysis**

💻 **Actual implementation**

Then we verify claims as:

✅ Confirmed

❌ Rejected

🟡 Partly correct

and document the evidence.

So Part 3 teaches:

> **How can AI assist software engineering while the human remains responsible for verifying the result?**

# **🧠 The entire assignment in one picture**

### **PART 1**

📜 Requirements  
↓  
📐 UML Design  
↓  
💻 Implementation

### **PART 2**

💻 Existing Implementation  
↓  
🔎 Reverse Engineering  
↓  
📐 Current Design  
↓  
⚖️ Compare with Requirements  
↓  
🧩 Analyze Problems  
↓  
✨ Improved Design

### **PART 3**

💻 Implementation \+ 📜 Specification  
↓  
🤖 AI Analysis  
↓  
⚖️ Human Verification  
↓  
💻 Evidence from Code  
↓  
📝 Reflection

# **🌱 What has changed since A1?**

A1 was heavily focused on:

> **What objects and concepts exist in this domain?**

A2 moves further into:

> **How do we assign responsibilities to those objects?**

> **How does a UML design become actual software?**

> **How can we reconstruct design from existing software?**

> **How do we recognize weaknesses in an object-oriented design?**

> **How do we verify an AI's interpretation of software?**

So the course is moving from **domain modelling** toward actual **software design**.

# **🎯 The central skill underneath everything**

If I had to reduce everything we've covered to one central question, it would be:

> **WHO SHOULD BE RESPONSIBLE FOR WHAT?**

Why does MusicSchool create something?

Why does Course know something?

Why should validation live here rather than there?

Why should one object reference another?

Why does a method belong to this class?

Why is this design highly cohesive?

Why does that design create unnecessary coupling?

Those questions are at the heart of object-oriented design and GRASP.

# **🧭 Our complete A2 map**

You can now mentally place almost everything in the assignment:

**OOP**

→ Classes and objects  
→ State and behaviour  
→ Encapsulation  
→ Inheritance  
→ Associations  
→ Multiplicity  
→ Composition

**DESIGN**

→ Responsibilities  
→ GRASP  
→ Information Expert  
→ Creator  
→ Low Coupling  
→ High Cohesion  
→ Separation of concerns

**UML**

→ Class diagrams  
→ Use-case diagrams  
→ Sequence diagrams

**ANALYSIS**

→ Specification vs implementation  
→ Reverse engineering  
→ Gap analysis  
→ Error handling  
→ Design problems  
→ Improvements

**AI**

→ Generate analysis  
→ Preserve raw output  
→ Challenge the AI  
→ Verify against code  
→ Confirm / Reject / Partly correct  
→ Reflect

## **🏁 Where we are now**

At this point, you have the **conceptual map of the entire assignment**.

We haven't solved the assessed Crescendo or PawsHome work. Instead, we've built the background needed to understand what the instructions are asking you to do and *why* each part exists.

That means the next useful stage of our little book can become much more practical while still respecting the assignment rules.

