# **🪜 Step 9 — Understand GRASP: Who Should Be Responsible for What?**

## **📜 FROM THE GITLAB ASSIGNMENT**

GRASP is an important part of Assignment 2\.

In Crescendo, the assignment requires us to apply **at least two GRASP principles** and later document which principles were used and how they appear in the design. assignment\_2

The Crescendo specification also deliberately asks us to think about GRASP when deciding **which object creates other objects**. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION — What is GRASP?**

**GRASP** stands for:

**General Responsibility Assignment Software Patterns**

That sounds complicated, but the central question is simple:

> **Which object should be responsible for doing this job?**

This is one of the most important questions in object-oriented programming.

Suppose our program needs to create a TuitionFee.

Someone has to be responsible for doing it.

Should it be:

🏫 MusicSchool?

🎓 Student?

💰 TuitionFee itself?

🖥️ The user interface?

A program may technically work with several of these solutions.

But some choices produce a much better object-oriented design than others.

GRASP gives us principles for making those decisions.

## **🧠 GRASP is about responsibilities**

Think back to our earlier questions:

> **What does this object know?**

> **What should this object do?**

GRASP helps answer the second question.

Instead of creating one giant class that does everything, we distribute responsibilities among objects that are suitable for them.

For example:

🎓 Student handles behaviour closely related to being a student.

🎼 Course handles behaviour closely related to a course.

🏫 MusicSchool handles responsibilities concerning the school as a whole.

This usually leads to objects that are easier to understand and change.

## **🏭 One GRASP principle: Creator**

### **💡 BACKGROUND & EXPLANATION**

One GRASP principle is called **Creator**.

Creator helps answer:

> **Which object should create another object?**

A strong ownership relationship is one reason an object may be a suitable Creator.

This fits Crescendo particularly well.

### **📜 FROM THE GITLAB MATERIAL**

The specification says:

🏫 **MusicSchool creates Students and Teachers.**

🏫 **MusicSchool creates Courses.**

🎓 **Student creates TuitionFees.**

These creation responsibilities are deliberately part of the supplied design. crescendo\_music\_school

## **💡 Why does this make sense?**

Consider:

🎓 **Student → TuitionFee**

We already learned that Student and TuitionFee have a **composition** relationship.

The Student owns its TuitionFees.

So giving Student responsibility for creating them is logical.

The ideas begin connecting:

**Composition → ownership → creation responsibility → GRASP Creator**

This is exactly why GRASP is useful. It isn't something separate from UML or OOP. It helps explain **why responsibilities are placed where they are**.

## **🧠 Another important GRASP idea: Information Expert**

### **💡 BACKGROUND & EXPLANATION**

Another fundamental GRASP principle is **Information Expert**.

Its basic idea is:

> Give a responsibility to the object that has the information necessary to perform it.

Suppose we need to know whether a Course is full.

Who has the information necessary to answer that?

The **Course** knows:

🎼 its capacity

and

🎓 which Students are enrolled.

So Course is a natural Information Expert for answering:

**Is this course full?**

And, fittingly, the supplied Crescendo design gives `Course` an `isFull()` operation.

This is a good example of how GRASP can help us understand **why the UML looks the way it does**.

## **🧩 GRASP is not the same as GoF design patterns**

### **💡 BACKGROUND & EXPLANATION**

This distinction is useful for a new programmer.

GRASP contains principles such as:

**Information Expert**

**Creator**

**Controller**

**Low Coupling**

**High Cohesion**

**Polymorphism**

**Pure Fabrication**

**Indirection**

**Protected Variations**

These help us think about **responsibility assignment and object-oriented design**.

The famous **Gang of Four (GoF) design patterns**, such as Observer, Factory Method and Strategy, are another related topic.

So when A2 talks about GRASP, don't immediately think:

> "I need to find some complicated design pattern to insert into the program."

The more basic question is:

> **Have responsibilities been placed in sensible objects?**

## **🧭 Why GRASP matters throughout A2**

GRASP appears differently in the different parts of the assignment.

🎹 **Part 1:** Understand and apply GRASP while working with the Crescendo design.

🐕 **Part 2:** Examine PawsHome and look for poor responsibility assignment, high coupling, low cohesion and other design problems. The assignment explicitly asks us to analyze possible GRASP violations. assignment\_2

🤖 **Part 3:** Evaluate whether the AI correctly identifies GRASP/design problems in PawsHome. assignment\_2

So GRASP is one of the threads running through the whole assignment.

