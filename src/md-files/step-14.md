# **🪜 Step 14 — Learn How to Read the Crescendo Rules**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification is deliberately organized into **numbered rules**.

The rules are grouped according to the part of the domain they concern:

**R0.x** — General rules

**R1.x** — MusicSchool

**R2.x** — Person

**R3.x** — Student

**R4.x** — Teacher

**R5.x** — Course

**R6.x** — TuitionFee crescendo\_music\_school

This organization is very useful. Instead of treating the specification as one large piece of text, we can work through it **class by class**.

## **💡 BACKGROUND & EXPLANATION — Think of rules as contracts**

A useful mental model is that every class has a **contract**.

For example, Student isn't simply:

🎓 "an object containing student information."

Student also promises:

> "If I exist in the system, the Student rules will remain true."

The same applies to Course, Teacher, TuitionFee and MusicSchool.

This idea is closely related to **class invariants**: conditions that should remain valid for objects throughout their valid lifetime.

## **🏫 R1 — MusicSchool rules**

### **📜 FROM THE GITLAB MATERIAL**

MusicSchool has several responsibilities.

Its name cannot be empty, and its founding year cannot be in the future.

It owns its Courses.

It registers Students and Teachers.

It assigns unique sequential person IDs.

Importantly, a failed registration must **not consume an ID**.

It can also list unpaid tuition fees for a particular term. crescendo\_music\_school

## **💡 What should we notice?**

These rules tell us much more than simply what attributes MusicSchool contains.

They reveal its **responsibilities**.

MusicSchool knows about the larger system:

🏫 Courses

🎓 Students

👨‍🏫 Teachers

🆔 Person IDs

So when we later look at its UML operations, we can understand **why those operations belong there**.

This connects directly back to GRASP.

## **👤 R2 — Person rules**

### **📜 FROM THE GITLAB MATERIAL**

Every Person has:

🆔 personId

📝 name

📧 email

The name must not be empty.

The email must contain `@`.

Every Person must be either a Student or a Teacher.

Emails must also be unique within the school, with the comparison being **case-insensitive**. crescendo\_music\_school

## **💡 Case-insensitive means...**

These two email addresses should be considered the same:

**anna@example.com**

**ANNA@example.com**

The capitalization differs, but the domain rule says they must not be treated as two different registered emails.

Notice something interesting here.

Some rules concern **one Person**, such as whether their email contains `@`.

Other rules concern the **whole school**, such as whether another Person already uses that email.

That distinction gives us clues about **which object has enough information to enforce a particular rule**.

Again, this connects to GRASP Information Expert.

## **🧠 A good strategy for reading the specification**

Instead of trying to memorize every rule immediately, read each class using three questions:

**1\. What information does this object contain?**

**2\. What operations can this object perform?**

**3\. What rules must this object help protect?**

That turns a long specification into a collection of smaller, understandable responsibilities.

