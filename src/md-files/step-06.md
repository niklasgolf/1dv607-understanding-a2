# **🪜 Step 6 — Understand Multiplicity: How Many Objects May Be Connected?**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo UML diagram specifies **multiplicities** on its associations.

The assignment requires those multiplicities to be correctly represented in the implementation. It specifically asks us to demonstrate:

🔹 One-to-one associations  
🔹 One-to-many associations  
🔹 Many-to-many associations  
🔹 Composition

The documentation must later explain how these relationships and their multiplicities were implemented. assignment\_2

## **💡 BACKGROUND & EXPLANATION — What is multiplicity?**

Multiplicity answers a very simple question:

> **How many objects may participate in this relationship?**

UML expresses this using numbers beside associations.

Some common multiplicities are:

**1** \= exactly one

**0..1** \= zero or one

**0..\*** \= zero, one, or many

**1..\*** \= at least one, possibly many

So the notation describes both a **minimum** and a **maximum**.

## **🔢 A simple example**

Imagine this rule:

> Every Course must have exactly one Teacher.

The Teacher end could therefore have:

**1**

Now imagine:

> A Teacher may teach several Courses.

The Course end could have:

**0..\***

Together, this describes a **one-to-many relationship**.

👨‍🏫 Teacher **1 ↔ 0..\*** Course 🎼

## **🎓 Students and courses**

A different kind of relationship occurs when students enroll in courses.

A Student can participate in several Courses.

A Course can contain several Students.

Conceptually:

🎓 Student **many ↔ many** Course 🎼

This is called a **many-to-many association**.

The interesting programming problem is then:

> How do we represent that relationship using objects while ensuring both sides remain correct?

That is one of the things Part 1 wants us to understand.

## **🧠 Multiplicity is more than drawing numbers**

This is important.

If a UML diagram says:

**maximum 8 students**

it isn't enough to put the number **8** on a diagram.

The implementation must actually **enforce that rule**.

If the program happily allows a ninth student, then the code does not correctly implement the design.

So multiplicity connects:

📐 **design**

to

⚙️ **program behaviour**

This is one reason multiplicities receive so much attention in A2.

## **🔍 A useful way to read UML multiplicity**

Whenever you see an association, ask:

**How many A objects may one B object have?**

Then reverse the question:

**How many B objects may one A object have?**

Do this separately for both ends.

That makes UML multiplicities much easier to understand than trying to memorize the symbols.

## **🧩 Why this becomes important again later**

Multiplicity appears first in Crescendo, where we must implement the supplied design.

But it returns in PawsHome.

There we will have to inspect the existing program and determine:

> **What multiplicity does the code actually enforce?**

That may be different from what the PawsHome specification says it *should* enforce.

So multiplicity becomes one of the bridges connecting **Part 1 and Part 2** of A2.

