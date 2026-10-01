# **🪜 Step 2 — Understand Crescendo Music School**

## **🎹 What is Crescendo?**

### **📜 FROM THE GITLAB ASSIGNMENT**

The first system we work with is called **Crescendo Music School**.

It is a small music school that needs a system for managing:

👤 People  
🎓 Students  
👨‍🏫 Teachers  
🎼 Courses  
💰 Tuition fees

Every person registered at the school is either a **Student** or a **Teacher**. Students can enroll in courses, teachers teach courses, and students have tuition fees connected to their studies. crescendo\_music\_school

The teachers have already provided us with a **specification and UML diagrams** describing how this system should be designed.

Our task in Part 1 is to take that design and turn it into a working program. assignment\_2

## **💡 BACKGROUND & EXPLANATION**

This is important:

**We are not designing Crescendo from scratch.**

Imagine that we have joined a software company and a software architect has already designed the system.

They hand us a blueprint.

That blueprint contains things such as:

🎵 MusicSchool  
👤 Person  
🎓 Student  
👨‍🏫 Teacher  
📚 Course  
💰 TuitionFee

Our job is to understand what the blueprint means and faithfully translate it into TypeScript.

So Part 1 is really teaching us how to **read object-oriented design**.

## **🧩 The main objects**

### **📜 FROM THE GITLAB ASSIGNMENT**

The supplied class diagram contains six main classes:

**MusicSchool**

**Person**

**Student**

**Teacher**

**Course**

**TuitionFee**

There are also two enumerations:

**Level**

with the values:

BEGINNER  
INTERMEDIATE  
ADVANCED

and:

**PaymentStatus**

with the values:

UNPAID  
PAID

The assignment requires the classes, enumerations, attributes, operations, inheritance and relationships shown in the supplied UML to be represented in the implementation. assignment\_2

## **💡 What should we learn from Crescendo?**

The interesting part isn't really that we're building software for a music school.

The music school gives us a concrete environment in which we can learn important OOP concepts.

While implementing Crescendo, we will encounter:

🧱 **Classes and objects**

🧬 **Inheritance**

🔗 **Associations**

🔢 **Multiplicity**

💎 **Composition**

↔️ **Bidirectional relationships**

🔒 **Encapsulation**

🧠 **GRASP principles**

⚠️ **Domain rules and error handling**

These concepts are the real subject matter.

Crescendo is simply the world in which we get to practice them.

## **🧭 Where we are in the recipe**

We now understand:

**Step 1:** Understand the overall structure of A2.

**Step 2:** Understand what Crescendo is and why we are working with it.

The next thing we need is not programming yet.

Before we can translate the Crescendo UML into TypeScript, we need to understand **how to read the class diagram itself**.

