# **🪜 Step 11 — Specification, Design and Implementation**

## **💡 BACKGROUND & EXPLANATION**

There are three different things we must keep separate throughout A2:

📜 **Specification** — what the system is required to do.

📐 **Design** — how we plan to organize the software.

💻 **Implementation** — what the actual source code does.

They are related, but they are **not the same thing**.

## **📜 1\. Specification — WHAT should the system do?**

A specification describes requirements and rules.

For example, the Crescendo specification contains rules such as:

**R3.2:** A Student may be enrolled in at most three Courses.

**R3.3:** A Student may only enroll in Courses at the same Level as the Student. crescendo\_music\_school

These rules describe the required behaviour.

They don't necessarily tell us every detail of **how the program should achieve it**.

Think:

📜 **Specification \= WHAT is required?**

## **📐 2\. Design — HOW should the software be organized?**

The UML diagrams represent the design.

A class diagram can tell us things such as:

**Person**

↳ Student  
↳ Teacher

It can show that:

🎓 Student is associated with Course.

👨‍🏫 Teacher is associated with Course.

🎓 Student owns TuitionFees through composition.

The design therefore describes the **structure and responsibilities** we intend the software to have.

Think:

📐 **Design \= HOW should we organize the solution?**

## **💻 3\. Implementation — What does the program actually do?**

Finally we have the source code.

This is the actual implementation.

The implementation might correctly follow both the specification and design.

But it might also contain mistakes.

For example, imagine the specification says:

**Maximum 3 Courses per Student**

but the implementation accidentally allows:

**4, 5, 6, 7... Courses**

Then we have discovered a difference between:

📜 **required behaviour**

and

💻 **actual behaviour**.

## **🎹 Why Part 1 is relatively straightforward**

### **📜 FROM THE GITLAB ASSIGNMENT**

In Crescendo, we start with the supplied specification and UML design and implement them. The assignment emphasizes accurately translating the UML into classes, attributes, operations, inheritance, associations and multiplicities. assignment\_2

Conceptually:

📜 Specification  
⬇️  
📐 Supplied Design  
⬇️  
💻 Implementation

The challenge is making the implementation faithfully represent the supplied design and rules.

## **🐕 Why Part 2 is more like detective work**

### **📜 FROM THE GITLAB ASSIGNMENT**

PawsHome works differently.

We receive both:

📜 a PawsHome specification

and

💻 an existing Java implementation.

The assignment warns us that the implementation may be incomplete or incorrectly designed. assignment\_2

So we have to investigate.

## **🔎 The golden rule of Part 2**

When creating the diagrams of the **current PawsHome system**, we must show:

> **WHAT THE CODE ACTUALLY DOES**

not:

> **WHAT THE SPECIFICATION SAYS IT SHOULD DO**

The assignment explicitly says that the current-system diagrams must describe the existing implementation, **not the improved system we think should exist**. assignment\_2

This is extremely important.

## **💡 A simple imaginary example**

Suppose the specification says:

📜 **A Volunteer may supervise a maximum of three visits per day.**

But suppose we inspect the program and discover that the programmer forgot to enforce that limit.

Then:

📜 **Specification:** maximum 3

💻 **Implementation:** effectively unlimited

Our current-system UML must represent what the implementation actually allows.

Then our analysis explains:

⚠️ **The implementation does not satisfy the specification.**

Later, our **improved design** can represent how the system ought to work.

## **🧠 This gives us three questions**

Whenever we become confused during A2, we can ask:

**1\. What does the specification REQUIRE?**

**2\. What does the design REPRESENT?**

**3\. What does the implementation ACTUALLY DO?**

If all three agree, excellent.

If they don't agree, that difference may be exactly what the assignment wants us to discover.

