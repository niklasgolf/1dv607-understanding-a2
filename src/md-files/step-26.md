# **🪜 Step 26 — Understand Exactly What Part 2 Must Deliver**

Now we can make Part 2 concrete. At the end, we don't just hand in a discussion. The assignment requires a specific collection of **diagrams \+ written analysis**.

## **📜 FROM THE GITLAB ASSIGNMENT**

The PawsHome diagrams belong in:

**`assignment_2/diagrams/`**

There are **six required diagram files**. assignment\_2

## **🔎 The four diagrams describing CURRENT PawsHome**

These are based on the existing implementation.

### **1️⃣ `current_class_diagram.png`**

📐 Shows the classes and relationships that actually exist in the current code.

This includes things such as:

classes

attributes and operations

associations

multiplicities

dependencies

and other relevant structural relationships.

### **2️⃣ `current_use_case_diagram.png`**

👤 Shows the use cases that are actually implemented in the current program.

Remember:

It does **not** automatically contain every use case from UC1–UC9.

We first determine what the implementation actually provides.

### **3️⃣ `apply_for_adoption_sequence.png`**

⏱️ Shows the actual interaction sequence for:

**“Adopter applies for adoption”**

We trace the implementation and represent the objects/messages in the order they actually occur.

### **4️⃣ `approve_application_sequence.png`**

⏱️ Shows the actual interaction sequence for:

**“Staff approves an application”**

Again:

💻 actual implementation

not:

📜 ideal behaviour from the specification.

# **✨ The two diagrams describing the IMPROVED system**

Now we switch from reconstruction to recommendation.

### **5️⃣ `improved_class_diagram.png`**

📐 This is our proposed improved class design.

Here we can address problems discovered during the analysis.

This is where concepts such as:

🧩 GRASP

🔗 low coupling

🎯 high cohesion

📦 appropriate responsibilities

🔢 correct relationships and multiplicities

become useful when justifying the improved design.

### **6️⃣ `complete_use_case_diagram.png`**

👤 This represents the complete required PawsHome functionality rather than only what the current implementation happens to provide.

So here the specification becomes central.

# **📝 Then there is the written report**

### **📜 FROM THE GITLAB ASSIGNMENT**

The report belongs at:

**`assignment_2/docs/pawshome.md`**

The assignment requires the report to cover several areas. assignment\_2

## **📋 Problem summary**

We explain what we discovered about the existing implementation.

Not every tiny detail — but the important overall problems.

## **🔍 Gap analysis**

This is the comparison we learned in Step 22:

📜 Specification  
↕️  
💻 Implementation

We identify things such as:

missing or incomplete use cases

incorrect or missing relationships

multiplicity differences

missing domain rules

and other discrepancies.

## **⚠️ Error handling and input validation**

We examine how the existing system deals with invalid situations.

For example, conceptually:

> Where is validation performed?

> What happens when invalid information is supplied?

> Can the program enter an invalid domain state?

Again, the answers must come from examining the implementation.

## **🧩 GRASP and design-principle analysis**

We discuss design problems and possible improvements using concepts such as:

🎯 Information Expert

🏭 Creator

🔗 Low Coupling

🧩 High Cohesion

and other relevant GRASP/design principles.

The important part is not merely naming a principle.

We need to connect it to **evidence from the design/code**.

## **🛠️ Justification of improvements**

Finally, we explain **why** our improved design is better.

So there should be a reasoning chain:

🔎 **Problem discovered**

↓

🧩 **Design principle involved**

↓

🛠️ **Recommended change**

↓

✨ **Expected improvement**

# **🧠 Part 2 on one page**

We can now visualize the entire deliverable:

**CURRENT SYSTEM**

📐 Current class diagram  
👤 Current use-case diagram  
⏱️ Apply-for-adoption sequence diagram  
⏱️ Approve-application sequence diagram

⬇️

**ANALYSIS**

📜 Specification vs implementation  
🔍 Gap analysis  
⚠️ Validation/error handling  
🧩 GRASP/design problems

⬇️

**IMPROVED SYSTEM**

✨ Improved class diagram  
👤 Complete use-case diagram

⬇️

**WRITTEN EXPLANATION**

📝 `pawshome.md`

So Part 2 isn't a random collection of six pictures.

It tells a story:

> **Here is what PawsHome currently looks like → here are the problems we found → here is how we think its design should improve.**

That is the finished Part 2 package.

