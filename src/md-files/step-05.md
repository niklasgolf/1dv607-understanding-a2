# **🪜 Step 5 — Understand Associations: How Objects Know Each Other**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo class diagram does not only tell us which classes exist. It also shows **relationships between those classes**.

For example, the Crescendo specification says that:

🎓 Students enroll in Courses.

👨‍🏫 Teachers teach Courses.

🏫 MusicSchool contains registered people and offers Courses.

💰 TuitionFee belongs to a Student.

These relationships between objects are called **associations**.

The assignment specifically requires us to understand and implement several kinds of relationships, including **one-to-one, one-to-many, many-to-many, and composition**. assignment\_2

## **💡 BACKGROUND & EXPLANATION — What is an association?**

An association basically means:

> **One object has a meaningful connection to another object.**

Imagine we have a Student called Alice and a Course called Piano Basics.

Alice doesn't merely contain some text saying `"Piano Basics"`.

The important idea in object-oriented programming is that the **Student object can be connected to the actual Course object**.

Conceptually:

🎓 Alice ↔ 🎼 Piano Basics

Now we have a network of collaborating objects.

## **🔗 Object references**

In an object-oriented system, associations are normally represented using **references to objects**.

For example, a Course can have a reference to its Teacher.

Conceptually:

🎼 Piano Basics → 👨‍🏫 Maria

The course doesn't merely know Maria's name.

It knows the actual **Teacher object representing Maria**.

This distinction becomes very important later when we translate UML associations into TypeScript.

## **↔️ Bidirectional associations**

Some relationships work in **both directions**.

For example:

🎓 Student → knows their Courses

and

🎼 Course → knows its Students

That creates a **bidirectional association**.

Conceptually:

🎓 Student ↔ 🎼 Course

### **📜 FROM THE GITLAB ASSIGNMENT**

The assignment specifically requires that both ends of bidirectional associations remain consistent. assignment\_2

## **💡 Why is that important?**

Suppose Alice enrolls in Piano Basics.

It would be wrong if:

🎓 Alice says:  
**"I am enrolled in Piano Basics."**

but:

🎼 Piano Basics says:  
**"Alice is not one of my students."**

The two objects would disagree about reality.

That means the program has entered an **inconsistent state**.

One important challenge in Crescendo will therefore be ensuring that when relationships change, all relevant objects remain consistent.

## **🧠 The mental model**

Think of an object-oriented program as more than a collection of separate classes.

At runtime we have actual **objects connected to other objects**:

🏫 MusicSchool

↳ 👨‍🏫 Teachers

↳ 🎓 Students

↳ 🎼 Courses

↳ 💰 Tuition Fees

Those connections form an **object graph**.

The class diagram is essentially showing us the rules governing that graph.

But we still don't know something very important:

**How many objects are allowed on each side of a relationship?**

Can one teacher teach one course?

Ten courses?

Can a course have one student?

Many students?

Can a student attend several courses?

That is exactly what **multiplicity** tells us.

