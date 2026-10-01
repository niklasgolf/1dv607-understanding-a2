# **🪜 Step 10 — Understand Coupling and Cohesion**

## **📜 FROM THE GITLAB ASSIGNMENT**

When we eventually analyze the existing **PawsHome** program, the assignment asks us to look for possible GRASP problems, including:

🔗 **Poor coupling**

🧩 **Low cohesion**

📦 **Misplaced responsibilities**

We must then recommend improvements to the design. assignment\_2

These terms are therefore important background knowledge before we reach Part 2\.

---

## **💡 BACKGROUND & EXPLANATION — What is coupling?**

**Coupling** describes how dependent different parts of the program are on each other.

Imagine five classes:

**A → B → C → D → E**

If changing E constantly forces us to change D, C, B and A, the classes are strongly dependent on each other.

We call this **high coupling**.

Generally, we prefer:

🌱 **Low coupling**

This means classes know about and depend on other classes only when there is a good reason.

## **🎹 A Crescendo example**

Suppose `Course` needs to know which Teacher teaches it.

That dependency makes sense:

**Course → Teacher**

But imagine Course also directly handled:

💰 tuition payments

👤 registration of new people

🖥️ console input

📚 management of every other course

Now Course would know about many things that aren't really its responsibility.

Its coupling with the rest of the system would increase.

That would make Course harder to understand, test and change.

## **💡 What is cohesion?**

**Cohesion** asks a different question:

> **How well do the responsibilities inside one class belong together?**

Generally, we want:

✨ **High cohesion**

A highly cohesive class has responsibilities that make sense together.

## **🎓 Example**

Imagine Student contains responsibilities such as:

🎓 enrolling in courses

🎓 withdrawing from courses

💰 managing that student's tuition fees

These responsibilities all relate closely to the Student.

That gives the class reasonably strong cohesion.

Now imagine Student also:

🎓 enrolls in courses

🖨️ controls the printer

📧 sends system-wide emails

🎼 creates all courses

💾 manages database connections

🖥️ draws the user interface

Now we should start asking:

> Why is Student responsible for all of this?

The class has become a collection of unrelated jobs.

Its cohesion is poor.

## **🧠 An easy way to remember the difference**

Think:

🔗 **Coupling \= BETWEEN classes**

🧩 **Cohesion \= WITHIN a class**

For coupling we ask:

> How dependent is this class on other classes?

For cohesion we ask:

> Do the responsibilities inside this class actually belong together?

## **🎯 The usual goal**

A common object-oriented design goal is:

**LOW COUPLING \+ HIGH COHESION**

In simple language:

> Objects should not unnecessarily depend on everything else, and each object should have a clear, focused purpose.

This connects directly to GRASP responsibility assignment.

## **🔍 Why this will matter in PawsHome**

Later, when we inspect PawsHome, we won't simply ask:

> "Does the code run?"

We'll ask deeper design questions:

> Is one class doing jobs that should belong somewhere else?

> Does one class know far too much about other classes?

> Is domain logic sitting in an inappropriate place?

> Would moving a responsibility produce better cohesion or lower coupling?

That is the beginning of **software design analysis**, rather than simply programming.

And that is a major step forward from A1.

