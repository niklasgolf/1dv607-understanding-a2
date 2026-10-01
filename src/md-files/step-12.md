# **🪜 Step 12 — Understand Use-Case Diagrams**

## **📜 FROM THE GITLAB MATERIAL**

A2 uses more than one kind of UML diagram.

In Crescendo, the teachers provide both a **class diagram** and a **use-case diagram**.

Later, in PawsHome, we must create a use-case diagram showing the use cases that are actually implemented. We will eventually also create a **complete use-case diagram** representing the required system. assignment\_2

So we need to understand what a use-case diagram tells us that a class diagram does not.

## **💡 Class diagram versus use-case diagram**

A **class diagram** looks inside the software.

It asks:

> **What is the system made of?**

It shows things such as:

🏫 MusicSchool  
🎓 Student  
👨‍🏫 Teacher  
🎼 Course  
💰 TuitionFee

and relationships between them.

A **use-case diagram** looks at the system more from the user's perspective.

It asks:

> **What can someone use this system to do?**

So:

📐 **Class diagram \= STRUCTURE**

👤 **Use-case diagram \= FUNCTIONALITY FROM AN ACTOR'S PERSPECTIVE**

## **🎭 What is an actor?**

### **💡 BACKGROUND & EXPLANATION**

In UML, an **actor** represents a role outside the system that interacts with it.

An actor isn't necessarily one particular human being.

It represents a **role**.

For example, the Crescendo use-case diagram has:

👤 **School administrator**

That person interacts with the system to perform various tasks.

## **🎹 Crescendo's use cases**

### **📜 FROM THE GITLAB MATERIAL**

The supplied Crescendo use-case diagram includes activities such as:

🎓 Register student

👨‍🏫 Register teacher

🎼 Create course

➕ Enroll student in course

➖ Withdraw student from course

🔄 Change course teacher

💰 Issue term fee

💳 Record tuition payment

📋 View course roster

💸 View unpaid fees

These are things the **School administrator** can do through the system.

## **💡 Notice what is NOT in the use-case diagram**

The use-case diagram isn't interested in details such as:

**Student has an instrument attribute.**

or:

**Course contains a collection of Students.**

Those belong to the structural design and therefore to the **class diagram**.

Instead, the use-case diagram says:

> "Here are the meaningful things an external actor can accomplish with this system."

## **🧠 A useful distinction**

When looking at a diagram, ask:

### **📐 Class diagram**

> **What things exist inside the system, and how are they related?**

### **👤 Use-case diagram**

> **Who interacts with the system, and what can they accomplish?**

Those are two completely different views of the same software.

## **🐕 Why this becomes especially important in PawsHome**

PawsHome has three actors:

👤 **Adopter**

👩‍💼 **Shelter staff**

🙋 **Volunteer** pawshome\_shelter

Its specification describes use cases such as registering an adopter, registering an animal, applying for adoption, scheduling a visit, recording a visit result, approving or rejecting an application, and listing available animals. pawshome\_shelter

But remember our golden rule from Step 11\.

When we first create the **current PawsHome use-case diagram**, we don't automatically put every use case from the specification into it.

We investigate:

> **Which use cases are actually implemented in the existing code?**

The assignment explicitly asks for a use-case diagram identifying the use cases **currently implemented in the code**. assignment\_2

Later we create the **complete use-case diagram** showing the required system.

That difference is central to Part 2\.

