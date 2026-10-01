# **🪜 Step 35 — A2 Vocabulary Cheat Sheet**

Now that we understand the assignment, here is a compact vocabulary sheet for the concepts that keep appearing.

## **🧱 Class**

A **class** describes a type of object: what information it contains and what it can do.

In Crescendo, examples are `Student`, `Teacher`, `Course` and `TuitionFee`.

Think:

> **Class \= blueprint for objects.**

# **🎁 Object**

An **object** is an actual instance of a class.

`Student` is a class.

A particular student registered in Crescendo is an object of that class.

Think:

> **Class \= blueprint. Object \= actual thing created from it.**

# **📦 Attribute**

An **attribute** is information an object knows or stores.

A `Course`, for example, has information such as:

**code, title, level and capacity.**

Think:

> **Attribute \= what the object KNOWS.**

# **⚙️ Operation / Method**

An **operation** describes something an object can do.

For example, Crescendo's `Course` has operations such as `changeTeacher()` and `isFull()`.

Think:

> **Method \= what the object DOES.**

# **🔒 Encapsulation**

**Encapsulation** means an object controls access to its own internal state.

Instead of allowing other objects to freely manipulate everything inside it, we provide controlled operations.

Think:

> 🔒 **Protect the object's state and change it through meaningful operations.**

# **🧬 Inheritance / Generalization**

Inheritance represents an **is-a** relationship.

In Crescendo:

🎓 Student **is a** Person.

👨‍🏫 Teacher **is a** Person.

The common characteristics can therefore belong to `Person`.

Think:

> **Student IS-A Person.**

# **🔗 Association**

An **association** means objects have a relationship with one another.

For example:

🎓 Student ↔ 🎼 Course

A student can be enrolled in courses, so these objects need some way of being connected.

Think:

> **Association \= objects know/have a relationship with other objects.**

# **🔢 Multiplicity**

Multiplicity tells us **how many objects may participate in an association**.

Common UML notation:

**1** \= exactly one

**0..1** \= zero or one

**0..\*** \= zero or many

**1..\*** \= one or many

Crescendo also has a special constraint where a student may take at most **three courses**.

Think:

> **Association \= WHO is connected.**  
> **Multiplicity \= HOW MANY.**

# **💎 Composition**

Composition is a particularly strong ownership relationship.

In Crescendo:

🏫 MusicSchool ◆── Course

🎓 Student ◆── TuitionFee

The assignment describes the owned object's lifecycle as belonging to its owner.

Think:

> **Composition \= strong ownership \+ lifecycle.**

# **🕸️ Coupling**

**Coupling** describes how dependent classes are on one another.

If changing one class constantly forces changes throughout many other classes, the system may have high coupling.

Generally:

> **Lower coupling \= fewer unnecessary dependencies between classes.**

# **🎯 Cohesion**

**Cohesion** describes how well the responsibilities inside one class belong together.

A class with a clear, focused purpose tends to have **high cohesion**.

Remember:

> 🕸️ **Coupling \= BETWEEN classes**

> 🎯 **Cohesion \= WITHIN a class**

# **🧩 GRASP**

**GRASP** stands for:

**General Responsibility Assignment Software Patterns**

GRASP helps us answer:

> **Which object should be responsible for doing this?**

Important GRASP ideas we've encountered include:

👨‍🔬 Information Expert

🏭 Creator

🎯 High Cohesion

🔗 Low Coupling

🎮 Controller

The assignment explicitly expects GRASP reasoning in its design work.

# **👨‍🔬 Information Expert**

Give a responsibility to the object that already has the information needed to perform it.

Think:

> **Who knows enough to do this job naturally?**

# **🏭 Creator**

Creator helps determine which object should be responsible for creating another object.

Crescendo gives us particularly clear ownership/creation relationships, such as the school creating its courses and a student creating their tuition fees.

Think:

> **Who naturally owns or manages the thing being created?**

# **📐 UML**

**UML — Unified Modeling Language** gives us standardized ways to represent software designs visually.

Three diagram types are especially important in A2:

📐 **Class diagram** — structure

👤 **Use-case diagram** — functionality from actors' perspective

⏱️ **Sequence diagram** — interactions over time

# **📐 Class Diagram**

Shows the **static structure** of a system.

It can show:

classes

attributes

operations

inheritance

associations

multiplicities

composition

Think:

> **What is the system made from and how is it connected?**

# **👤 Use Case**

A **use case** describes functionality that an actor wants from the system.

For example, PawsHome includes use cases such as an adopter applying to adopt an animal.

Think:

> **What can an actor do with the system?**

# **⏱️ Sequence Diagram**

Shows how objects interact during a particular scenario, with events arranged over time.

Think:

> **Who calls whom, and in what order?**

# **📜 Specification**

The specification describes what the system **is required to do**.

Think:

> 📜 **What SHOULD happen?**

# **💻 Implementation**

The implementation is the actual program.

In Part 2 this distinction becomes extremely important:

> 💻 **What DOES the existing program actually do?**

Those two answers are not necessarily identical.

# **🔎 Reverse Engineering**

Reverse engineering means studying an existing implementation to reconstruct and understand its design.

Normal direction:

📐 Design → 💻 Code

Reverse engineering:

💻 Code → 📐 Design

That's the heart of PawsHome Part 2\.

# **⚖️ Gap Analysis**

A **gap analysis** compares:

📜 what the specification requires

with:

💻 what the implementation actually provides.

The difference is the **gap**.

Think:

> **SHOULD happen vs DOES happen.**

# **📏 Domain Rule**

A domain rule is a rule belonging to the problem domain itself.

For example, Crescendo specifies that a student may be enrolled in a maximum of three courses. crescendo\_music\_school

The important idea is:

> **The objects should protect the rules of their domain.**

# **⚠️ Validation**

Validation checks whether something is acceptable before allowing an operation or state change.

It protects the system from invalid data and invalid actions.

Closely related:

**Illegal argument** → something supplied to the operation is invalid.

**Illegal state** → the requested action isn't allowed in the object's current state.

# **🧠 Domain Logic**

**Domain logic** is the actual business/problem logic of the system.

For example:

> Can this student enroll?

> Is this course full?

> Can this application be approved?

This is different from UI logic such as:

> Print this menu.

> Read something from the console.

# **🖥️ CLI**

**CLI \= Command-Line Interface.**

The user interacts through text in the terminal rather than through a graphical interface.

In Crescendo, the written assignment places console interaction in `Main`, while the domain classes should contain the domain behaviour rather than UI interaction. assignment\_2

# **🔑 The vocabulary map worth remembering**

You don't need to memorize 30 isolated definitions. Most of them fit into a few questions:

🏗️ **STRUCTURE**

Class → Object → Attribute → Association → Multiplicity → Inheritance → Composition

⚙️ **BEHAVIOUR**

Method → Domain Logic → Domain Rule → Validation → Error Handling

🧩 **DESIGN**

Responsibility → GRASP → Information Expert → Creator → Cohesion → Coupling

📐 **MODELLING**

Class Diagram → Use Case → Sequence Diagram

🔎 **ANALYSIS**

Specification → Implementation → Reverse Engineering → Gap Analysis

And underneath practically all of it is the same question:

> **What objects exist, how are they related, and which object should be responsible for what?**

