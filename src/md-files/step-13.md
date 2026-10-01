# **🪜 Step 13 — Understand Sequence Diagrams**

## **📜 FROM THE GITLAB ASSIGNMENT**

Sequence diagrams are especially important in **Part 2**.

For PawsHome, the assignment requires two sequence diagrams describing the **existing implementation**:

🐾 **“Adopter applies for adoption”**

✅ **“Staff approves an application”**

Just like the other current-system diagrams, these must show what the existing Java code **actually does**, not what we think it ought to do. assignment\_2

## **💡 BACKGROUND & EXPLANATION — What is a sequence diagram?**

A class diagram shows **structure**.

A use-case diagram shows **what users can accomplish**.

A sequence diagram shows:

> **What happens, step by step, when one particular operation is performed?**

The important word is **sequence**.

Time moves from top to bottom.

So we might conceptually have:

👤 User makes request

↓

🖥️ System receives request

↓

🐕 AdoptionApplication is found

↓

🔍 Some rule is checked

↓

🐕 Animal is updated

↓

✅ Application is approved

The real PawsHome sequence must, of course, come from inspecting the actual source code. This is only an illustration of how to think about sequence diagrams.

## **🗣️ Objects talking to objects**

Sequence diagrams are particularly useful in OOP because they show **objects collaborating**.

Imagine object A calls an operation on object B.

Then B asks object C for information.

C returns something.

B then changes another object.

A sequence diagram makes this conversation visible.

Think of it almost like watching the program in slow motion:

**Who calls whom?**

**Which method is called?**

**In what order?**

**Which object has responsibility for each step?**

## **⏱️ Why order matters**

Suppose an adoption system should check that an animal is available **before** approving an application.

These two sequences are not equivalent:

🔍 Check availability  
↓  
✅ Approve

versus:

✅ Approve  
↓  
🔍 Check availability

The same objects and operations might appear in both diagrams, but the behaviour is very different.

That's why the **ordering of messages** matters in a sequence diagram.

## **🔎 Sequence diagrams help reveal design**

This connects beautifully with GRASP.

When we inspect a sequence diagram, we can start asking:

> Why is this object performing this operation?

> Does this object actually have the information needed?

> Is one object doing almost everything?

> Are responsibilities spread sensibly across the domain objects?

So sequence diagrams don't merely show program flow.

They can help us evaluate the **quality of the object-oriented design**.

## **🐕 Why the same sequence appears again in Part 3**

### **📜 FROM THE GITLAB ASSIGNMENT**

In Part 3, the AI must also generate a sequence diagram for:

**“Staff approves an application.”**

We then compare three things:

🤖 The AI's sequence diagram

👨‍💻 Our own Part 2 sequence diagram

💻 The actual Java implementation

We must check for correct interactions, missing interactions, invented interactions and incorrect ordering. assignment\_2

## **🧠 Our three UML views so far**

We can now clearly separate three important diagram types:

📐 **CLASS DIAGRAM**  
What objects/classes exist and how are they structurally related?

👤 **USE-CASE DIAGRAM**  
Who uses the system and what can they accomplish?

⏱️ **SEQUENCE DIAGRAM**  
For one particular operation, who communicates with whom, and in what order?

Together they give us different views of the same software.

