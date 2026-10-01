# **🪜 Step 4 — Understand Inheritance: Person, Student and Teacher**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo design says that everyone registered at the music school is either a **Student** or a **Teacher**.

The supplied UML therefore has:

**Person**

↳ **Student**

↳ **Teacher**

`Person` is **abstract**, meaning the system should not create ordinary Person objects. Every actual person must be a Student or a Teacher. crescendo\_music\_school

---

## **💡 BACKGROUND & EXPLANATION — What is inheritance?**

Inheritance represents an **"is-a" relationship**.

A Student **is a Person**.

A Teacher **is a Person**.

Therefore, things that are true for every Person do not need to be separately designed for Student and Teacher.

For example, every Person in Crescendo has:

👤 a person ID  
📝 a name  
📧 an email address

Student and Teacher inherit this common idea from Person.

Then each specialized class can add what makes it different.

A **Student** additionally has an instrument and a level.

A **Teacher** additionally has a specialization. crescendo\_music\_school

---

## **🧬 Generalization and specialization**

There are two useful ways of looking at the same relationship.

Going upward:

**Student → Person**

we are becoming more **general**.

Going downward:

**Person → Student**

we are becoming more **specialized**.

That's why UML inheritance is also called **generalization**.

So we can mentally read the design as:

👤 **Person** \= the general concept

🎓 **Student** \= specialized kind of Person

👨‍🏫 **Teacher** \= specialized kind of Person

---

## **💡 Why make Person abstract?**

Imagine somebody created:

**Anna \= Person**

What is Anna?

Is she a student?

Is she a teacher?

In the Crescendo domain, that object would not make sense because the specification says every registered person belongs to one of those two categories.

Making `Person` abstract expresses this rule in the program's structure.

We can have:

**Aisha \= Student**

and:

**Maria \= Teacher**

but not simply:

**Anna \= Person**

This is a nice example of something we'll encounter repeatedly in A2:

> Good object-oriented design tries to make invalid states difficult or impossible to create.

Instead of merely *remembering* that we shouldn't create generic people, the design itself prevents us from doing it.

---

## **🧠 A useful OOP question**

Whenever we consider inheritance, ask:

> **Is X really a type of Y?**

Student **is a** Person. ✅

Teacher **is a** Person. ✅

Course **is a** Person. ❌

MusicSchool **is a** Person. ❌

That simple **"is-a" test** is a useful first check when trying to understand inheritance.

