# **🪜 Step 1 — Understanding Assignment 2 — 1DV607**

## **🪜 Step 1 — Understand the main idea**

### **📜 FROM THE GITLAB ASSIGNMENT**

Assignment 2 is called **Object-Oriented Design and Implementation**.

The central purpose of the assignment is to understand the connection between **object-oriented design** and **actual program code**.

The teachers describe four important things you should learn:

🔹 How a **UML class diagram** is translated into program code.

🔹 How **associations and multiplicities** between objects are represented in code.

🔹 How you can do the opposite: examine existing code and reconstruct its **design and UML models**.

🔹 How you can compare an implementation with its specification and then suggest improvements using **object-oriented design principles**. assignment\_2

### **💡 BACKGROUND & EXPLANATION**

The easiest way to understand the entire assignment is to think of two worlds:

🎨 **DESIGN**

and

💻 **CODE**

A software developer needs to understand how to travel between them.

Sometimes somebody gives you a design and says:

**Design → Code**

You have to turn the design into a working program.

Other times somebody gives you an existing program and says:

**Code → Design**

Now you have to study the code and understand what its underlying design actually looks like.

Assignment 2 makes you practice **both directions**.

### **🧭 THE BIG PICTURE**

The assignment therefore has three main stages:

🎹 **Part 1 — Crescendo Music School**

You are given a design and must understand how that design becomes an implementation.

**DESIGN → CODE**

🐕 **Part 2 — PawsHome Animal Shelter**

You are given an existing implementation and must work backwards to understand and document its design.

**CODE → DESIGN**

You then compare that implementation with what the specification says the program should do.

🤖 **Part 3 — GenAI**

Finally, generative AI performs some of the same reverse-engineering work on PawsHome.

But your job is **not simply to trust the AI**. You compare its answers with your own work and, most importantly, with the actual source code. assignment\_2

### **🧠 THE ONE IDEA TO REMEMBER**

If all the files and diagrams make A2 look complicated, remember this:

**Part 1: Design → Code**

**Part 2: Code → Design**

**Part 3: AI tries Code → Design, and we check whether the AI is correct.**

That is the skeleton of the whole assignment.

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

# **🪜 Step 3 — Learn to Read the Crescendo Class Diagram**

## **🗺️ The class diagram is our blueprint**

### **📜 FROM THE GITLAB MATERIAL**

The teachers provide a complete **class diagram** for Crescendo. It shows the classes, their attributes and operations, inheritance relationships, associations, multiplicities, and some important constraints.

Part 1 asks us to translate this supplied design into an implementation. assignment\_2

### **💡 BACKGROUND & EXPLANATION**

A UML class diagram is a bit like an architect's drawing of a house.

The finished house is our program.

The UML diagram tells us how the important pieces should fit together before we construct it.

A typical class in the diagram is divided into three sections:

**Class name**

**Attributes — what the object knows**

**Operations — what the object can do**

For example, the Crescendo `Course` class contains information such as its code, title, level and capacity.

It also has operations for things such as getting its teacher, changing its teacher, getting its students and determining whether the course is full.

So we can think:

🧠 **Attributes \= state/data**

⚙️ **Operations \= behaviour**

## **🔐 What do \+ and − mean?**

### **💡 BACKGROUND & EXPLANATION**

The diagram uses symbols such as:

**− name: String**

and

**\+ getName(): String**

The minus sign means:

🔒 **private**

The plus sign means:

🌍 **public**

So the design is already telling us something about **encapsulation**.

The internal data of an object should generally not be freely manipulated from outside.

Instead, other objects interact with it through carefully chosen public operations.

This is one of the fundamental ideas of object-oriented programming.

## **🧠 Read classes as little responsible objects**

A useful habit is not to think:

> "Course is just some variables grouped together."

Instead think:

> "A Course is an object that knows things and is responsible for certain behaviour."

Likewise:

🎓 A **Student** knows about the courses they are enrolled in.

👨‍🏫 A **Teacher** knows about courses they teach.

🎼 A **Course** knows its teacher, students, level and capacity.

🏫 The **MusicSchool** manages the larger collection of people and courses.

This idea of giving responsibilities to appropriate objects will become extremely important when we reach **GRASP**.

## **🧭 The important question**

Whenever we inspect a class in the Crescendo diagram, we should ask two questions:

**1\. What does this object KNOW?**

and

**2\. What is this object RESPONSIBLE FOR DOING?**

Those two questions are a very good starting point for understanding object-oriented design.

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

# **🪜 Step 7 — Understand Composition: When One Object Owns Another**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo design contains **composition relationships**.

Two particularly important ones are:

🏫 **MusicSchool → Course**

🎓 **Student → TuitionFee**

The specification says that the MusicSchool **owns its courses**. A course is created by the school and cannot exist outside the school.

Similarly, a TuitionFee belongs to exactly one Student and cannot exist without that Student. crescendo\_music\_school crescendo\_music\_school

In UML, composition is shown using a **filled diamond** at the owning end of the relationship. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION — Association versus composition**

We learned earlier that an **association** means that two objects have a relationship.

Composition is a **stronger kind of relationship**.

Think:

🔗 **Association \= knows/uses/relates to**

💎 **Composition \= owns/is made up of**

The important concept is **ownership and lifetime**.

## **🎼 Example: MusicSchool and Course**

A Teacher and a Course have an association.

The Teacher exists independently of that particular Course.

The teacher might teach another course instead.

But Crescendo defines the relationship between MusicSchool and Course differently.

The **MusicSchool owns the Course**.

Conceptually:

🏫 **MusicSchool**

 💎 owns → 🎼 **Course**

The course belongs to that school's internal world.

## **💰 Example: Student and TuitionFee**

The same idea applies to tuition fees.

A TuitionFee isn't an independent object floating around the system that later happens to become connected to a Student.

It exists **because a particular Student has that tuition fee**.

Conceptually:

🎓 **Student**

 💎 owns → 💰 **TuitionFee**

This is why the specification says a TuitionFee cannot exist without its Student. crescendo\_music\_school

## **🏭 Who should create the object?**

### **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification gives us an important clue about object creation.

Students and Teachers are created through **MusicSchool**.

Courses are created through **MusicSchool**.

TuitionFees are created through **Student**. crescendo\_music\_school

The specification even asks us to think about which **GRASP principle** this reflects.

## **💡 BACKGROUND & EXPLANATION**

This is our first glimpse of an important GRASP idea called **Creator**.

A basic question in object-oriented design is:

> **Which object should be responsible for creating another object?**

If a Student strongly owns its TuitionFees, it makes sense for the Student to control their creation.

If MusicSchool owns its Courses, it makes sense for MusicSchool to control course creation.

So composition isn't merely a symbol on a UML diagram.

It affects the actual **responsibilities of our objects**.

## **🧠 The key distinction**

Remember it like this:

🔗 **Association**

> These objects are connected.

💎 **Composition**

> This object owns that object, and the owned object's existence is tied to the owner.

That distinction will matter both when reading UML and when examining how relationships are represented in actual code.

# **🪜 Step 8 — Understand Domain Rules and Error Handling**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification contains many rules with identifiers such as:

**R1.1**

**R3.2**

**R5.3**

**R6.4**

These aren't arbitrary labels. Each identifies a particular **domain rule**.

For example, the specification says:

🎓 **R3.2** — A Student may be enrolled in at most three Courses.

🎼 **R5.3** — A Course may contain students only up to its capacity.

💰 **R6.3** — A TuitionFee amount must be greater than zero.

💳 **R6.4** — A tuition fee cannot be paid twice. crescendo\_music\_school crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION — What is a domain rule?**

The word **domain** means the real-world area our software represents.

For Crescendo, the domain is:

🎹 **running a music school**

A domain rule is therefore a rule about how that world is allowed to work.

For example:

> A student can take a maximum of three courses.

That's not really a TypeScript rule.

TypeScript doesn't care how many music courses somebody studies.

It's a **music-school business rule**.

Our software must make sure that rule remains true.

## **🧠 Where should rules live?**

This introduces an extremely important OOP idea.

Imagine somebody tries to enroll a Student in a fourth Course.

Who should be responsible for knowing:

> "A student cannot have more than three courses"?

A bad design could put all the rules in the user interface.

But then the Student object itself doesn't protect its own valid state.

### **📜 FROM THE GITLAB ASSIGNMENT**

The assignment specifically says that **validation and domain rules should be kept in appropriate domain classes**. assignment\_2

### **💡 BACKGROUND & EXPLANATION**

This connects directly to something we learned earlier:

> Objects should have responsibilities.

A Student isn't supposed to be merely a bag containing student data.

The Student should also participate in protecting the rules that belong to being a Student.

That is a much more object-oriented way of thinking.

## **⚠️ What happens when somebody breaks a rule?**

### **📜 FROM THE GITLAB MATERIAL**

Crescendo distinguishes between two broad kinds of errors.

**Invalid input** should result in an `IllegalArgumentException`.

**An operation that isn't allowed because of the object's current state** should result in an `IllegalStateException`.

The relevant **rule ID must appear in the exception message**. crescendo\_music\_school

For example, if an operation violates R5.3, the error message should identify **R5.3**.

## **💡 Input problem versus state problem**

A useful way to begin understanding the distinction is:

📝 **IllegalArgumentException**

> "The information you gave me is invalid."

versus:

🚦 **IllegalStateException**

> "That operation might normally make sense, but the system is currently in a state where it isn't allowed."

For example, trying to create something with an invalid required value is an **argument problem**.

Trying to perform an operation that is forbidden because of what has already happened can be a **state problem**.

## **🛡️ Failed operations must be safe**

### **📜 FROM THE GITLAB ASSIGNMENT**

There is another very important requirement:

If an operation fails, it must **not leave the objects partially updated or inconsistent**. assignment\_2

### **💡 BACKGROUND & EXPLANATION**

Imagine enrolling Alice in Piano.

Suppose the Student gets updated first:

🎓 Alice → Piano

Then something fails before the Course is updated:

🎼 Piano → does NOT contain Alice

Now the system contradicts itself.

That is exactly the kind of situation we must avoid.

A useful principle is:

> **Either the whole valid operation succeeds, or the system remains as it was before.**

This becomes especially important with the bidirectional relationships we learned about earlier.

---

## **🧠 What Step 8 adds to our mental model**

Our objects don't merely contain information.

They also **protect the rules of their domain**.

So we are gradually building a richer picture of OOP:

🧱 Classes define objects.

🔗 Associations connect objects.

🔢 Multiplicities restrict those connections.

💎 Composition defines strong ownership.

📜 Domain rules define what states and operations are valid.

⚠️ Error handling prevents invalid operations from damaging the system.

All of these ideas work together.

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

# **🪜 Step 13 — Understand Sequence Diagrams**

## **📜 FROM THE GITLAB ASSIGNMENT**

Sequence diagrams are especially important in **Part 2**.

For PawsHome, the assignment requires two sequence diagrams describing the **existing implementation**:

🐾 **“Adopter applies for adoption”**

✅ **“Staff approves an application”**

Just like the other current-system diagrams, these must show what the existing Java code **actually does**, not what we think it ought to do. assignment\_2

## **💡 BACKGROUND & EXPLANATION — What is a sequence diagram?**

A class diagram shows **structure**.

A use-case diagram shows **what users can accomplish**.

A sequence diagram shows:

> **What happens, step by step, when one particular operation is performed?**

The important word is **sequence**.

Time moves from top to bottom.

So we might conceptually have:

👤 User makes request

↓

🖥️ System receives request

↓

🐕 AdoptionApplication is found

↓

🔍 Some rule is checked

↓

🐕 Animal is updated

↓

✅ Application is approved

The real PawsHome sequence must, of course, come from inspecting the actual source code. This is only an illustration of how to think about sequence diagrams.

## **🗣️ Objects talking to objects**

Sequence diagrams are particularly useful in OOP because they show **objects collaborating**.

Imagine object A calls an operation on object B.

Then B asks object C for information.

C returns something.

B then changes another object.

A sequence diagram makes this conversation visible.

Think of it almost like watching the program in slow motion:

**Who calls whom?**

**Which method is called?**

**In what order?**

**Which object has responsibility for each step?**

## **⏱️ Why order matters**

Suppose an adoption system should check that an animal is available **before** approving an application.

These two sequences are not equivalent:

🔍 Check availability  
↓  
✅ Approve

versus:

✅ Approve  
↓  
🔍 Check availability

The same objects and operations might appear in both diagrams, but the behaviour is very different.

That's why the **ordering of messages** matters in a sequence diagram.

## **🔎 Sequence diagrams help reveal design**

This connects beautifully with GRASP.

When we inspect a sequence diagram, we can start asking:

> Why is this object performing this operation?

> Does this object actually have the information needed?

> Is one object doing almost everything?

> Are responsibilities spread sensibly across the domain objects?

So sequence diagrams don't merely show program flow.

They can help us evaluate the **quality of the object-oriented design**.

## **🐕 Why the same sequence appears again in Part 3**

### **📜 FROM THE GITLAB ASSIGNMENT**

In Part 3, the AI must also generate a sequence diagram for:

**“Staff approves an application.”**

We then compare three things:

🤖 The AI's sequence diagram

👨‍💻 Our own Part 2 sequence diagram

💻 The actual Java implementation

We must check for correct interactions, missing interactions, invented interactions and incorrect ordering. assignment\_2

## **🧠 Our three UML views so far**

We can now clearly separate three important diagram types:

📐 **CLASS DIAGRAM**  
What objects/classes exist and how are they structurally related?

👤 **USE-CASE DIAGRAM**  
Who uses the system and what can they accomplish?

⏱️ **SEQUENCE DIAGRAM**  
For one particular operation, who communicates with whom, and in what order?

Together they give us different views of the same software.

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

# **🪜 Step 15 — Understand the Student, Teacher, Course and TuitionFee Rules**

Now we continue through the Crescendo specification. These rules are especially useful because we can see how **domain rules, associations and multiplicities fit together**.

## **🎓 Student — R3**

### **📜 FROM THE GITLAB MATERIAL**

A Student has:

🎵 an **instrument**

📊 a **Level**: BEGINNER, INTERMEDIATE or ADVANCED

Both are required.

A Student may be enrolled in **at most three Courses**.

A Student may only enroll in a Course that has the **same Level** as the Student.

A Student can only withdraw from a Course they are actually enrolled in.

Finally, a Student may have **at most one TuitionFee for each term**. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION**

Notice how many concepts we've already studied appear here.

The rule:

**maximum three Courses**

is a **multiplicity constraint**.

The rule:

**Student and Course must have the same Level**

is a **domain rule**.

The rule:

**you cannot withdraw from a Course you aren't enrolled in**

depends on the object's **current state**.

And:

**Student ↔ Course**

is an **association**.

So these aren't separate theoretical topics anymore. They are beginning to work together.

## **👨‍🏫 Teacher — R4**

### **📜 FROM THE GITLAB MATERIAL**

A Teacher has a required **specialization**.

A Teacher may teach any number of Courses, including none. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION**

This is a good example of multiplicity again.

A newly registered Teacher does not need to teach anything yet.

Later the same Teacher might teach several Courses.

So the relationship is not:

**Teacher → exactly one Course**

It allows:

**zero, one or many Courses**.

## **🎼 Course — R5**

### **📜 FROM THE GITLAB MATERIAL**

A Course has:

🔤 a **code**

📝 a **title**

📊 a **Level**

👥 a **capacity**

The required values must be valid, capacity must be at least 1, and the Course code must be unique within the MusicSchool.

Every Course has **exactly one Teacher**.

That Teacher may later be replaced, but the Course must never be left without a Teacher.

A Course may contain Students up to its capacity.

The same Student must not be enrolled twice in the same Course. crescendo\_music\_school

## **💡 A very important observation**

A Course therefore has several jobs related to protecting its own valid state.

For example, it has information about:

**capacity**

and:

**currently enrolled Students**

That means Course has the information necessary to answer:

> "Am I full?"

This connects directly to the GRASP principle **Information Expert** that we studied earlier.

## **💰 TuitionFee — R6**

### **📜 FROM THE GITLAB MATERIAL**

A TuitionFee contains:

📅 a **term**

💰 an **amount**

📋 a **PaymentStatus**

📅 an optional **payment date**

Every TuitionFee belongs to exactly one Student and cannot exist independently of that Student.

The amount must be greater than zero.

A newly created TuitionFee begins as:

**UNPAID**

with **no payment date**.

When payment is recorded, a payment date is required, the status becomes **PAID**, and that date is stored.

A fee cannot be paid twice. crescendo\_music\_school

## **💡 State changes**

TuitionFee gives us a nice example of an object whose **state changes over time**.

Initially:

💰 TuitionFee → **UNPAID**

Later:

💳 payment recorded

Then:

💰 TuitionFee → **PAID**

Once it reaches PAID, attempting to pay it again is invalid.

So object-oriented programming isn't only about storing objects.

Objects have **state**, and operations can cause valid transitions from one state to another.

## **🧠 The Crescendo world is now taking shape**

We can mentally picture the domain:

🏫 **MusicSchool** registers Students and Teachers and owns Courses.

👤 **Person** contains information common to Students and Teachers.

🎓 **Student** enrolls in Courses and owns TuitionFees.

👨‍🏫 **Teacher** teaches Courses.

🎼 **Course** has one Teacher and a limited collection of Students.

💰 **TuitionFee** belongs to one Student and changes from UNPAID to PAID.

At this point, the UML diagram should start looking less like a collection of strange boxes and arrows and more like a **model of a small world whose objects have responsibilities and rules**.

# **🪜 Step 16 — Understand the Crescendo Operations**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo class diagram does not only tell us what information each class contains. It also specifies **operations** that the objects can perform.

Some important examples are:

🏫 MusicSchool — `registerStudent`, `registerTeacher`, `createCourse`

🎓 Student — `enroll`, `withdraw`, `addTuitionFee`

🎼 Course — `changeTeacher`, `isFull`

💰 TuitionFee — `recordPayment`

There are also operations for finding and retrieving information, such as `findPerson`, `findCourse`, `getCourses` and `getUnpaidFees`.

The assignment requires the operations shown in the UML diagram to be represented in the implementation. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Operations are behaviour**

An attribute tells us what an object **knows**.

An operation tells us what an object **can do**.

For example:

🎓 Student knows its Level.

🎓 Student can `enroll` in a Course.

This is one of the biggest differences between object-oriented programming and simply storing data.

An object combines:

**STATE \+ BEHAVIOUR**

The state describes its current situation.

The behaviour provides controlled ways of interacting with and changing that state.

## **🏫 `registerStudent`**

### **📜 FROM THE GITLAB MATERIAL**

Students are registered through **MusicSchool**.

The school is also responsible for assigning unique sequential person IDs, and a failed registration must not consume an ID. crescendo\_music\_school

### **💡 BACKGROUND & EXPLANATION**

So `registerStudent` is more than:

> "Create a Student."

Several rules may need to remain true.

For example:

Is the supplied information valid?

Is the email already registered?

What should the next person ID be?

Only after the necessary rules are satisfied should registration successfully change the system.

This shows why methods often represent **meaningful domain actions**, rather than simply changing individual variables.

## **🎓 `enroll`**

### **📜 FROM THE GITLAB MATERIAL**

When a Student enrolls in a Course, several Crescendo rules are relevant.

The Student may have at most three Courses.

The Course must have the same Level as the Student.

The Course cannot exceed its capacity.

The same Student cannot be enrolled twice in the same Course. crescendo\_music\_school crescendo\_music\_school

## **💡 One action can involve several objects**

This is where OOP becomes interesting.

The seemingly simple action:

**Alice enrolls in Piano**

affects a relationship between:

🎓 Alice

and

🎼 Piano

Both objects must still represent the same reality afterwards.

If the operation succeeds:

🎓 Alice knows she attends Piano.

🎼 Piano knows Alice is enrolled.

If it fails:

❌ neither object should be left half-updated.

This connects operations, associations, domain rules and consistency.

## **💰 `recordPayment`**

### **📜 FROM THE GITLAB MATERIAL**

A new TuitionFee starts as **UNPAID** without a payment date.

Recording payment requires a payment date.

After successful payment:

**status → PAID**

and the payment date is stored.

The same fee cannot be paid twice. crescendo\_music\_school

## **💡 Commands and queries**

A useful general programming distinction is between operations that **change something** and operations that mainly **answer a question**.

For example:

`recordPayment` changes state.

`enroll` changes state.

`withdraw` changes state.

But:

`isFull` answers a question.

`findCourse` searches for something.

`getCourses` returns information.

This isn't a special additional requirement from the assignment; it is a useful way of understanding the operations we see in the UML.

## **🧠 Objects are becoming active**

Earlier we might have imagined:

**Student \= student data**

But the object-oriented picture is richer:

🎓 Student has state.

🎓 Student participates in relationships.

🎓 Student performs operations.

🎓 Student helps protect domain rules.

🎓 Student collaborates with other objects.

That is much closer to what the assignment means by **object-oriented design and implementation**.

# **🪜 Step 17 — Understand Encapsulation**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo UML uses **private attributes** and public operations.

The specification also says that getters should be provided where needed, but setters should only exist where the specification permits a value to change.

For example, things such as:

🆔 a person's ID

📝 a person's name

🔤 a Course code

📊 a Course Level

must not simply be changeable whenever someone wants.

The specification also says that returned collections must not expose the object's internal state so that outside code can modify it freely. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION — What is encapsulation?**

**Encapsulation** means that an object controls access to its own internal state.

Think of an object as having a protective shell:

🔒 **private internal state**

⬇️

🚪 **controlled public operations**

⬇️

🌍 **the rest of the program**

Other objects should normally interact through the doors we deliberately provide rather than reaching inside and changing things directly.

## **🎼 Imagine Course without encapsulation**

Suppose anybody could directly change:

`capacity`

Then some unrelated part of the program could make:

**capacity \= \-500**

That would violate the Crescendo rules.

Or imagine anybody could directly manipulate the Course's collection of Students.

Outside code might add a fourth Student to a Course whose capacity is three.

It could bypass all our carefully designed rules.

## **🛡️ Operations protect the object**

This is why meaningful operations are important.

Instead of saying:

> "Here is all my internal data. Change whatever you like."

an object effectively says:

> "Tell me what you want to accomplish, and I will decide whether that operation is valid."

For example:

🎓 `enroll(...)`

🎓 `withdraw(...)`

🎼 `changeTeacher(...)`

💰 `recordPayment(...)`

These operations provide controlled ways of changing the domain.

## **💡 Getters and setters are not automatically a pair**

A common beginner idea is:

> "Every private variable needs a getter and setter."

Not necessarily.

Suppose something has:

`getPersonId()`

That does **not** automatically mean it should also have:

`setPersonId(...)`

If the ID is supposed to remain stable, providing unrestricted modification would weaken the design.

So encapsulation isn't simply:

**private variables \+ getters \+ setters**

It is:

> **The object decides what outside code is allowed to see and change.**

## **📦 Collections are especially important**

Imagine Student internally maintains its Courses.

If `getCourses()` gives outside code unrestricted access to that exact internal collection, another part of the program might bypass `enroll()` entirely and modify it directly.

Then rules such as:

🎓 maximum three Courses

📊 matching Levels

🚫 no duplicate enrollment

could potentially be bypassed.

The Crescendo material specifically tells us not to expose internal collections in a way that allows callers to mutate the object's internal state. crescendo\_music\_school

## **🧠 Why encapsulation matters to the whole assignment**

We can now connect several concepts:

**Encapsulation**  
⬇️  
Objects control their state.

**Domain rules**  
⬇️  
Objects prevent invalid states.

**High cohesion**  
⬇️  
Relevant rules stay near the responsibilities they concern.

**GRASP**  
⬇️  
We decide which object should have each responsibility.

**OOP design**  
⬇️  
Objects collaborate through deliberate interfaces instead of freely manipulating each other's internals.

These aren't isolated concepts. They're different parts of the same object-oriented way of thinking.

# **🪜 Step 18 — Understand `Main`, the CLI and Separation of Concerns**

## **📜 FROM THE GITLAB ASSIGNMENT**

Crescendo must have a simple **command-line interface (CLI)**.

The assignment makes an important distinction:

🖥️ **`Main` handles console input and output.**

🎓 **The domain classes contain the actual business/domain logic.**

Classes such as Student, Course and TuitionFee should **not** read user input or print user-interface messages themselves.

The assignment also requires a predefined demonstration so the important functionality can be shown. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Two different jobs**

Imagine the program as having two areas:

### **🖥️ User interface**

This deals with the human using the program.

It might:

⌨️ ask what the user wants to do

📝 receive input

📢 display results

⚠️ display errors

In Crescendo, this responsibility belongs mainly to **Main**.

### **🎼 Domain**

This represents the actual music-school world:

🏫 MusicSchool

🎓 Student

👨‍🏫 Teacher

🎼 Course

💰 TuitionFee

These objects should understand the **rules of Crescendo**, not how a terminal works.

## **🎓 A Student shouldn't know about the keyboard**

Suppose someone wants to enroll a Student in a Course.

The Student should understand concepts such as:

> Am I already enrolled?

> Am I allowed another Course?

> Is this Course at my Level?

But Student shouldn't be concerned with:

> Which text should I print in the terminal?

> Which menu option did the user type?

Those are completely different responsibilities.

## **🧩 This is Separation of Concerns**

**Separation of concerns** means separating different kinds of responsibilities.

Conceptually:

👤 User  
↕  
🖥️ Main / CLI  
↕  
🎓 Domain objects

The CLI communicates with the user.

The domain objects implement the actual rules.

## **💡 Why is this useful?**

Imagine that Crescendo later stops using a terminal.

Instead, someone creates:

🌐 a website

or:

📱 a mobile application

The music-school rules haven't changed.

A Student is still limited by the same enrollment rules.

A Course still has a capacity.

A TuitionFee still cannot be paid twice.

If those rules live inside the **domain model**, we can potentially replace the user interface without rewriting the fundamental domain logic.

That is one reason separation of concerns is valuable.

## **🐕 This idea appears again in PawsHome**

### **📜 FROM THE GITLAB MATERIAL**

The PawsHome specification contains the same architectural idea.

Constraint **C8** says there is currently one console UI, while the **domain logic should remain independent of that UI**. pawshome\_shelter

So when we eventually investigate the existing PawsHome implementation, this becomes something worth understanding:

**Where is the domain logic actually located?**

But we won't answer that yet — that belongs to the later reverse-engineering work.

## **🧠 Another connection to cohesion**

Remember:

**High cohesion \= closely related responsibilities stay together.**

If Student contained enrollment rules **and** menu printing **and** keyboard input, Student would have several unrelated responsibilities.

Separating them gives us clearer roles:

🖥️ **Main:** interaction with the user

🎓 **Student:** student-related domain behaviour

🎼 **Course:** course-related domain behaviour

💰 **TuitionFee:** tuition-fee behaviour

This is another example of object-oriented design being about much more than simply creating classes.

# **🪜 Step 19 — Understand the Complete Part 1 Workflow**

Now we can zoom out. We have learned the individual concepts; let's see how they fit together into the actual **Part 1 journey**.

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 1 is called:

**From Design to Implementation**

The basic direction is:

📜 Crescendo specification  
＋  
📐 supplied UML diagrams  
⬇️  
💻 working implementation  
＋  
🖥️ CLI/demo  
＋  
📝 documentation

The assignment evaluates whether the implementation accurately represents the supplied object-oriented design and its rules. assignment\_2

## **1️⃣ Start with the supplied Crescendo material**

We don't invent the system ourselves.

We are given:

📜 the domain specification

📐 the class diagram

👤 the use-case diagram

📋 numbered rules such as R1.1, R3.2 and R6.4

These are our blueprint.

This is very different from A1, where much of the work was about **discovering and modelling the domain ourselves**.

## **2️⃣ Set up the provided starter project**

### **📜 FROM THE GITLAB MATERIAL**

The written setup instructions provide a Crescendo starter project and specify a particular project structure.

They say the implementation belongs under:

**`assignment_2/src/`**

and the Part 1 documentation under:

**`assignment_2/docs/part_1.md`**

The written instructions specify **Java, JDK 17 and Gradle**, with the teacher able to run the application using `./gradlew run`.

Only the standard Java libraries are permitted; external frameworks, databases, GUIs and web frameworks are excluded. setup\_p1

## **⚠️ One important thing for us to remember**

You have told me that your teacher said at the beginning of the course that you could use **TypeScript**.

However, the written A2 files you uploaded explicitly describe a **Java/JDK 17/Gradle** setup and even specify Java filenames.

So before actual implementation, that conflict needs to be resolved with the teacher or with TypeScript-specific course instructions if they exist.

For understanding the assignment itself, however, the OOP concepts we're learning are largely the same.

## **3️⃣ Implement the UML structure**

The implementation must represent the supplied design:

🏫 MusicSchool

👤 abstract Person

↙️ Student

↘️ Teacher

🎼 Course

💰 TuitionFee

plus:

📊 Level

💳 PaymentStatus

Then the relationships from the UML must also exist correctly in the implementation.

This is where our earlier chapters about:

**inheritance \+ associations \+ multiplicity \+ composition \+ encapsulation**

all become practical.

## **4️⃣ Make the domain rules actually work**

A correct class structure isn't enough.

The system must enforce the numbered rules.

For example:

**R3.2** → maximum three Courses per Student.

**R5.3** → Course cannot exceed capacity.

**R6.4** → a TuitionFee cannot be paid twice. crescendo\_music\_school crescendo\_music\_school

So Part 1 isn't:

> "Create classes that look like the UML."

It is:

> "Create objects whose behaviour actually respects the domain represented by the UML and specification."

## **5️⃣ Handle errors correctly**

### **📜 FROM THE GITLAB MATERIAL**

If an operation violates a rule, the system must throw the appropriate exception.

Invalid input uses:

**IllegalArgumentException**

An operation that is invalid because of the current state uses:

**IllegalStateException**

The exception message must identify the relevant rule ID.

And critically:

> A failed operation must not leave the system partially changed. crescendo\_music\_school

## **6️⃣ Create the CLI and demonstration**

Then `Main` provides the outside interface.

Conceptually:

👤 User  
⬇️  
🖥️ Main  
⬇️  
🏫 MusicSchool / domain objects

The assignment requires both a command-line interface and a predefined demonstration of important functionality. assignment\_2

## **7️⃣ Explain important design decisions**

Part 1 isn't only about producing working software.

We also need to demonstrate that we understand the **design**.

The assignment specifically requires documentation of at least **two GRASP principles** and asks us to explain important relationship patterns, including multiplicities and composition. assignment\_2

So we aren't merely saying:

> "Here is my program."

We're demonstrating:

> "I understand why this object-oriented design works this way."

## **🚫 8️⃣ Part 1 has a special AI restriction**

This is especially important for our work together.

### **📜 FROM THE GITLAB ASSIGNMENT**

The instructions explicitly state that **AI tools must not be used for tasks in Part 1**. The assignment deliberately saves AI usage for Part 3\. assignment\_2

Therefore, what we're doing now is useful preparation:

📚 understanding OOP

📚 understanding UML

📚 understanding GRASP

📚 understanding what the assignment requires

But when you actually perform the assessed Crescendo implementation, I'll respect that boundary rather than solving Part 1 for you.

## **🧠 Part 1 in one sentence**

The entire Part 1 can now be remembered as:

> **Take an existing object-oriented design and faithfully turn it into a working program whose objects, relationships, behaviour and rules match that design.**

That is the first half of the fundamental skill A2 is teaching:

### **📐 DESIGN → 💻 CODE**

Soon, Part 2 will turn the arrow around:

### **💻 CODE → 📐 DESIGN**

And that is where things get especially interesting.

# **🪜 Step 20 — Enter Part 2: PawsHome and Reverse Engineering**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 is called:

**From Implementation to Design**

Now the direction is reversed.

In Part 1:

📐 Design → 💻 Implementation

In Part 2:

💻 Implementation → 📐 Design

We are given an existing Java prototype called **PawsHome**, an animal-adoption system. Our job is to study the existing code, reconstruct its current design, compare it with the specification, identify problems, and recommend improvements. assignment\_2

## **🐕 What is PawsHome?**

### **📜 FROM THE GITLAB MATERIAL**

PawsHome is a small animal shelter system that keeps track of:

🐕 Animals

👤 Adopters

📋 Adoption applications

🙋 Volunteers

📅 Visits or meet-and-greets

The system has three main actors:

**Adopter**

**Shelter staff**

**Volunteer** pawshome\_shelter

## **💡 BACKGROUND — What is reverse engineering?**

Normally, software development might look like:

**Requirements → Design → Code**

Reverse engineering travels in the opposite direction:

**Code → Discover the Design**

We inspect an existing program and ask:

> What classes actually exist?

> What information do they store?

> Which objects reference each other?

> What methods call other methods?

> What multiplicities does the implementation actually enforce?

> Where are responsibilities located?

We are reconstructing the design from evidence in the code.

That's why Part 2 is a little like being a software detective. 🔎

## **🚨 But we also have the specification**

This makes PawsHome particularly interesting.

We have:

📜 **what PawsHome is supposed to do**

and:

💻 **what the existing PawsHome implementation actually does**

These might not agree.

And discovering those differences is part of the assignment.

## **🐾 Example of the detective mindset**

Suppose the specification says:

> An Adopter may have a maximum of two pending applications.

We should **not immediately assume the code enforces that**.

Instead, when doing the actual analysis, we investigate the implementation:

🔎 Where are applications stored?

🔎 Where is an application created?

🔎 Is the number of pending applications checked?

🔎 What happens if someone tries to create a third?

Only then can we say what the **current implementation** actually does.

The PawsHome specification indeed contains the maximum-two-pending-applications requirement. pawshome\_shelter

## **⚠️ Very important: don't fix PawsHome yet**

### **📜 FROM THE GITLAB ASSIGNMENT**

The assignment specifically tells us to study the supplied implementation and **not modify or fix it** during this analysis. assignment\_2

Why?

Because the imperfections are part of what we're supposed to study.

If we immediately repaired the program, we would destroy some of the evidence we're supposed to analyze.

## **🧠 Part 2 therefore has two different worlds**

Keep these mentally separated:

### **💻 CURRENT PAWSHOME**

What does the supplied implementation **actually contain and enforce?**

This produces things such as:

📐 current class diagram

👤 current use-case diagram

⏱️ current sequence diagrams

### **✨ IMPROVED PAWSHOME**

After identifying problems, we can ask:

> What should the design look like instead?

That leads to recommendations and improved diagrams.

## **🔑 The golden rule of Part 2**

We can reduce the whole mindset to one sentence:

> **First describe reality. Then criticize reality. Then propose improvements.**

Not:

> "Draw what PawsHome should have been."

That distinction will prevent a lot of confusion later.

# **🪜 Step 21 — Understand the PawsHome Specification: UC1–UC9 and C1–C8**

Before looking at the implementation, we need to understand what **PawsHome is supposed to do**.

## **📜 FROM THE GITLAB MATERIAL**

The specification describes **nine use cases**, numbered **UC1–UC9**. pawshome\_shelter

### **👤 UC1 — Register adopter**

Shelter staff can register an Adopter with:

📝 name  
📧 email  
📞 phone number

The email must be unique.

### **🐕 UC2 — Register animal**

Shelter staff can register an Animal with:

📝 name  
🐾 species  
🎂 age in months

The allowed species are:

🐕 Dog  
🐈 Cat  
🐇 Rabbit

Age must be **0 or greater**, and a newly registered Animal starts as **available**.

### **🙋 UC3 — Register volunteer**

Shelter staff can register a Volunteer with:

📝 name  
📞 phone number

### **📋 UC4 — Apply for adoption**

An Adopter can apply to adopt an **available Animal**.

The Application contains a date and initially has status **pending**.

There are also two important restrictions:

🔢 An Adopter may have at most **two pending Applications**.

🚫 The same Adopter cannot have duplicate pending Applications for the same Animal.

### **❌ UC5 — Withdraw application**

An Adopter can withdraw their own pending Application.

The Application then becomes **withdrawn**.

### **📅 UC6 — Schedule visit**

Shelter staff can schedule a meet-and-greet for a pending Application.

Each Visit has:

📅 date/time

🙋 exactly one supervising Volunteer

A Volunteer may supervise at most **three Visits per day**.

### **👍 UC7 — Record visit result**

The supervising Volunteer records whether the meeting was:

👍 **good**

or

👎 **not suitable**

An optional note can also be recorded.

Importantly, only the Volunteer supervising that Visit may record its result.

### **✅ UC8 — Decide application**

Shelter staff can approve or reject a pending Application.

Approval has additional requirements.

The Animal must still be **available**, and there must have been at least one **good Visit**.

If the Application is approved:

🐕 the Animal becomes adopted

and:

❌ all other pending Applications for that same Animal are automatically rejected.

The specification even requires the exact rejection reason:

**“Animal adopted through another application.”**

Every rejection must have a non-empty reason.

### **🔍 UC9 — List available animals**

Available Animals can be listed:

🐾 all together

or:

🐕🐈🐇 filtered by species.

## **💡 BACKGROUND & EXPLANATION**

Notice how the use cases describe **behaviour**.

They answer:

> What should people be able to accomplish with PawsHome?

But the specification contains another category as well:

## **📜 Constraints C1–C8**

These describe important relationships and architectural/domain restrictions.

### **C1**

Each Application belongs to exactly:

**1 Animal \+ 1 Adopter**

### **C2**

An Animal may have many Applications over time, but can have **at most one approved Application ever**.

### **C3**

An Adopter may have many Applications over time, but at most **two pending Applications** simultaneously.

### **C4**

Each Visit belongs to exactly one Application, while an Application may have several Visits.

### **C5**

A Volunteer may supervise many Visits, but at most **three on the same day**.

### **C6**

Once an Animal becomes **adopted**, it stays adopted.

### **C7**

The current system stores information **in memory**, but the design should allow a future database without rewriting the domain logic.

### **C8**

There is currently one **console UI**, while the domain logic should remain independent of that UI. pawshome\_shelter

## **🧠 Use cases versus constraints**

This distinction is useful:

👤 **UC \= something an actor does**

Examples:

> Apply for adoption.

> Schedule a Visit.

> Approve an Application.

Whereas:

📏 **C \= something that must remain true about the system/design**

Examples:

> An Application belongs to exactly one Animal.

> A Volunteer may supervise at most three Visits per day.

> Domain logic should be independent of the console UI.

## **🔎 And here comes the detective work...**

We now have our **expected PawsHome**:

📜 UC1–UC9  
📏 C1–C8

But we still don't know whether the existing implementation actually fulfills all of them.

That is precisely what Part 2 asks us to investigate.

For each requirement, we'll eventually be able to think:

📜 **Specification says:** X

💻 **Code actually does:** Y

🔍 **Comparison:** same, missing, incomplete or different?

That comparison is the heart of the **gap analysis**.

# **🪜 Step 22 — Understand Gap Analysis**

## **📜 FROM THE GITLAB ASSIGNMENT**

One of the central jobs in PawsHome is to compare:

📜 **the specification**

with:

💻 **the existing implementation**

The assignment asks us to identify missing or incomplete use cases, incorrect relationships or multiplicities, missing rules, problems with validation/error handling, misplaced domain logic, and GRASP/design problems. We must support our findings with evidence from the existing Java implementation. assignment\_2

This comparison is essentially a **gap analysis**.

## **💡 BACKGROUND & EXPLANATION — What is a gap?**

A gap is simply a difference between:

> **What should exist**

and:

> **What actually exists**

So our basic formula becomes:

📜 **SPECIFICATION**

versus

💻 **IMPLEMENTATION**

equals

🔍 **GAP ANALYSIS**

## **🐕 A simple imaginary example**

Suppose the specification says:

> A Volunteer may supervise a maximum of three Visits per day.

Now imagine we inspect the code and discover that it allows unlimited Visits.

We would have:

📜 **Required:** maximum 3 Visits per day

💻 **Implemented:** no maximum enforced

⚠️ **Gap:** constraint is missing from the implementation

Notice that we haven't fixed anything yet.

We've simply **identified and documented the difference**.

## **🔎 How to investigate systematically**

A useful way to think about the work is:

**Requirement → Find relevant code → Observe behaviour → Compare → Record finding**

For example:

📜 UC4 says an Adopter can apply for an Animal.

⬇️

🔎 Find where Applications are created.

⬇️

💻 Follow what the existing code actually does.

⬇️

📏 Check each UC4 rule against it.

⬇️

📝 Record what matches and what doesn't.

This prevents us from relying on guesses.

## **🚨 Don't let the specification contaminate the current design**

This is one of the easiest mistakes to make.

Imagine the specification says:

*Adopter 1 → 0.. Applications*\*

You might immediately put that multiplicity into the current class diagram.

But that's only correct if the **implementation actually represents/enforces that relationship in that way**.

For the current-system diagram, the code is the evidence.

So:

📜 Specification tells us what **should** exist.

💻 Code tells us what **currently** exists.

We must keep those two views separate. assignment\_2

## **🧠 Three stages — don't mix them**

This is a very useful mental model for Part 2:

### **🔎 Stage 1 — DESCRIBE**

> What does the existing PawsHome code actually do?

No criticism yet.

Just reconstruct reality.

### **⚖️ Stage 2 — COMPARE**

> How does that reality differ from the specification?

Now we identify gaps.

### **🛠️ Stage 3 — IMPROVE**

> How could the design be improved?

Only now do we propose a better design.

So:

**DESCRIBE → COMPARE → IMPROVE**

That's essentially the Part 2 workflow.

## **🎯 What kinds of gaps are we looking for?**

### **📜 FROM THE GITLAB ASSIGNMENT**

The assignment specifically directs attention to areas including:

👤 **Use cases** — missing or incomplete functionality

🔗 **Relationships** — associations that differ from the specification

🔢 **Multiplicities** — whether the implementation actually enforces the expected limits

📏 **Domain rules** — required rules that may be absent or incorrect

⚠️ **Error handling and validation**

📦 **Separation of domain logic**

🧩 **GRASP/design principles** — such as poor coupling, low cohesion or misplaced responsibilities. assignment\_2

## **💡 Evidence is important**

We shouldn't write:

> "I think PawsHome handles applications badly."

Instead, the assignment wants findings grounded in the actual implementation.

Conceptually:

> **Claim → Evidence → Explanation**

For example:

**Claim:** A particular requirement is not enforced.

**Evidence:** We identify the relevant classes/methods and observe that the required check is absent.

**Explanation:** Therefore the implementation permits behaviour that the specification prohibits.

That's much stronger software analysis than simply giving an opinion.

## **🧠 The detective mindset**

For Part 2, we should constantly ask:

🔎 **Where in the code is the evidence for this?**

That one question will help with:

📐 class diagrams

👤 use-case diagrams

⏱️ sequence diagrams

📏 gap analysis

🧩 GRASP analysis

🛠️ improvement recommendations

Part 2 is therefore not mainly about writing new code.

It is about learning to **read existing software as evidence**.

# **🪜 Step 23 — Reverse-Engineer a Class Diagram from Code**

## **📜 FROM THE GITLAB ASSIGNMENT**

For PawsHome, one of our first Part 2 deliverables is a **class diagram of the current system**.

The important word is **current**.

The diagram must represent the design that can actually be observed in the supplied implementation, including its classes, relationships and multiplicities. It must **not** silently turn PawsHome into the improved system described by the specification. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Start with the classes**

When opening an unfamiliar project, don't try to understand everything simultaneously.

Start with a simple question:

> **What classes actually exist?**

Imagine discovering:

🐕 `Animal`

👤 `Adopter`

📋 `Application`

🙋 `Volunteer`

📅 `Visit`

Those names immediately begin giving us a vocabulary for the system.

But at this stage we are investigators.

We don't assume these exact classes exist until we see them in the actual code.

## **🔎 Next: inspect each class**

For every class we find, we can investigate three basic things:

### **1️⃣ What does it KNOW?**

Look at its fields/attributes.

For example, an imaginary Animal might contain information representing:

📝 name

🐾 species

🎂 age

📊 status

These become candidates for the **attribute section** of our UML class.

### **2️⃣ What can it DO?**

Look at its methods.

Perhaps a class contains operations related to:

🔍 finding information

➕ creating something

✅ approving something

🔄 changing state

These become candidates for the **operation section** of the UML class.

### **3️⃣ What other objects does it KNOW ABOUT?**

This is extremely important.

Suppose one class contains a reference to another class.

Conceptually:

**Application → Animal**

That is evidence of a relationship.

Or perhaps it contains a collection:

**Adopter → collection of Applications**

That gives us more evidence about the structure of the system.

# **🔗 Look for associations**

This is where the source code starts turning into UML.

If object A stores a reference to object B, ask:

> What relationship does this represent?

Then check the other direction:

> Does B also store a reference back to A?

If yes, we may have a **bidirectional association**.

If not, the relationship may only be navigable in one direction.

The key is:

> **Draw what the code supports, not what we expect from the specification.**

# **🔢 Then determine multiplicities**

This is where collections become especially interesting.

Conceptually, if we find:

**one object reference**

that might suggest something like:

**1** or **0..1**

depending on whether the reference is mandatory.

If we find:

**a collection of objects**

that may suggest:

**0..**\* or another multiple-valued relationship.

But we must go deeper than simply looking at the data type.

## **💡 Storage is not always the whole story**

Suppose a class stores Applications in an ordinary collection.

Technically, that collection might hold any number.

But perhaps the methods enforce:

> "No more than two pending Applications."

So to understand the **actual multiplicity or constraint**, we sometimes need to inspect both:

📦 **how objects are stored**

and

⚙️ **what the methods actually enforce**

This is why reverse engineering requires reading behaviour as well as fields.

# **🧬 Look for inheritance**

We also check whether the implementation contains inheritance.

Conceptually:

**Subclass → superclass**

In UML this becomes the generalization relationship we learned earlier with:

**Student → Person**

But again, we don't invent inheritance because we think it would make PawsHome prettier.

We document inheritance only if the current implementation actually contains it.

# **🧩 Look for dependencies too**

Sometimes a class doesn't permanently store another object but still **uses** it.

For example, a method might:

receive another object as a parameter,

call one of its methods,

or temporarily use it to perform an operation.

That can indicate a **dependency** rather than a stored association.

This distinction becomes useful when building a more accurate picture of how the classes collaborate.

# **🧠 A practical reading order**

When eventually examining each PawsHome class, a useful mental checklist is:

**CLASS**

⬇️

📦 What fields does it contain?

⬇️

⚙️ What methods does it contain?

⬇️

🔗 What other classes does it reference?

⬇️

📚 Does it contain collections of other objects?

⬇️

🧬 Does it inherit from another class?

⬇️

➡️ What other objects does it use?

⬇️

🔢 What multiplicities does the actual implementation permit or enforce?

Now the code begins transforming into a diagram.

# **📐 This is genuine reverse engineering**

We're essentially taking something like:

💻 **source code**

and extracting:

**Classes**  
↓  
**Attributes**  
↓  
**Operations**  
↓  
**Associations**  
↓  
**Dependencies**  
↓  
**Inheritance**  
↓  
**Multiplicities**

until eventually we have:

📐 **a UML representation of the existing software design**.

## **🔑 And remember our golden rule**

At this stage we are **not improving anything**.

If the implementation has an ugly relationship:

📐 draw the ugly relationship.

If a multiplicity differs from the specification:

📐 represent what the implementation actually supports.

If an important relationship is missing:

📐 don't secretly add it.

Those differences become valuable evidence for the **gap analysis** later.

# **🪜 Step 24 — Reverse-Engineer a Sequence Diagram from Code**

## **📜 FROM THE GITLAB ASSIGNMENT**

For the current PawsHome implementation, we must create two sequence diagrams:

🐾 **Adopter applies for adoption**

✅ **Staff approves an application**

These diagrams must represent the interactions that actually occur in the existing implementation. assignment\_2

So now we're not primarily asking:

> **What classes exist?**

Instead we're asking:

> **What happens when the program performs one particular use case?**

## **💡 BACKGROUND & EXPLANATION — Follow the execution**

Imagine pressing a button in a program.

That single action might cause:

👤 User  
↓  
🖥️ UI  
↓  
⚙️ Controller/service  
↓  
📋 Application  
↓  
🐕 Animal

A sequence diagram reconstructs that journey.

The trick is to **follow the code from the starting point**.

## **🔎 Step 1 — Find where the use case begins**

Suppose we're investigating:

**Staff approves an application**

First we find where that action begins in the existing program.

Perhaps there is a menu option or method representing approval.

That becomes our entry point.

We then follow the code rather than guessing what should happen.

## **🔎 Step 2 — Follow every important method call**

Suppose method A calls method B.

Then B calls C.

Then C changes another object's state.

Conceptually:

**A → B → C → object changes**

We follow that chain.

This tells us:

🗣️ who sends a message

🎯 who receives it

⚙️ which operation is called

⏱️ in what order it happens

## **🧍 Step 3 — Identify the participants**

Across the top of a sequence diagram we normally have the participants involved in that particular interaction.

For an imaginary adoption flow, we might discover participants such as:

👤 Staff

🖥️ Console/UI

🏠 Shelter system

📋 Application

🐕 Animal

But these are only examples.

For the actual assignment, the participants must come from what we discover in the **real PawsHome implementation**.

## **⏱️ Step 4 — Preserve the actual order**

This is crucial.

Suppose the code performs:

1. Find Application  
2. Check Animal  
3. Check Visits  
4. Change Application status  
5. Change Animal status

Then our sequence diagram must reflect that order.

We cannot rearrange it because another order seems cleaner.

Remember:

> **Current sequence diagram \= reconstruction, not redesign.**

## **🚨 Step 5 — Include strange behaviour too**

Suppose the specification says approval should check for a successful meet-and-greet.

But while tracing the implementation, we discover that the program never performs that check.

Then we do **not** add the missing check to make our sequence diagram look correct.

Its absence is important evidence.

Later we can say:

📜 Specification requires the check.

💻 Current implementation doesn't perform it.

⚠️ Therefore there is a gap.

## **💡 Sequence diagrams can expose responsibility problems**

This is where our GRASP knowledge becomes useful again.

Imagine tracing one operation and discovering:

🖥️ UI checks the Animal

🖥️ UI checks the Visit

🖥️ UI changes the Application

🖥️ UI changes the Animal

🖥️ UI performs all validation

That would make us ask:

> Is too much domain responsibility located in the UI?

We would need evidence before reaching that conclusion for PawsHome, but the sequence diagram can make this kind of design problem much easier to see.

## **🧠 Class diagram versus sequence diagram**

This distinction is worth remembering:

### **📐 Class diagram \= static view**

It tells us:

> **What exists?**

Classes, attributes, operations and relationships.

### **⏱️ Sequence diagram \= dynamic view**

It tells us:

> **What happens?**

Objects communicate and perform operations **over time**.

So one describes the system's **structure**, while the other describes its **interaction during a particular scenario**.

## **🤖 This becomes very important in Part 3**

Later, AI will also be asked to produce the sequence diagram for:

**Staff approves an application**

Then we have three sources:

👨‍💻 **Our Part 2 diagram**

🤖 **AI's Part 3 diagram**

💻 **The actual source code**

The Part 3 instructions specifically require us to check whether the AI:

✅ identified correct interactions

❌ missed interactions

👻 invented interactions

🔀 placed interactions in the wrong order

The actual Java implementation remains the primary evidence. assignment\_2

## **🔑 The sequence-diagram recipe**

When reverse-engineering a sequence diagram, remember:

**Choose the use case**

⬇️

🔎 **Find its starting point in the code**

⬇️

👥 **Identify the participating objects**

⬇️

➡️ **Follow the method calls**

⬇️

⏱️ **Record their actual order**

⬇️

📐 **Turn that execution trace into UML**

That is essentially the job.

# **🪜 Step 25 — Understand the Improved PawsHome Design**

So far, Part 2 has forced us to be disciplined:

🔎 First describe what the existing code actually does.

⚖️ Then compare it with the specification.

Only **after that** do we start thinking about a better design.

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 requires us to make recommendations for improving PawsHome.

Among the required deliverables are:

📐 **`improved_class_diagram.png`**

👤 **`complete_use_case_diagram.png`**

The report must also discuss improvements concerning:

⚠️ error handling and input validation

🧩 GRASP and other design principles

🔗 relationships and multiplicities

📦 placement of responsibilities

And importantly, we must **justify** our recommendations. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Now our role changes**

Earlier we were acting as:

🔎 **Software archaeologists**

We asked:

> What design is hidden inside this existing code?

Now we become:

🏗️ **Software designers**

We ask:

> Given the requirements and the problems we've discovered, how could this design be improved?

## **📐 Current diagram versus improved diagram**

This distinction is fundamental.

### **CURRENT CLASS DIAGRAM**

Represents:

💻 **what the existing implementation actually looks like**

Even if it contains poor design.

### **IMPROVED CLASS DIAGRAM**

Represents:

✨ **our recommended better design**

based on:

📜 the specification

🔎 problems discovered in the implementation

🧩 GRASP/design principles

So these diagrams may intentionally be different.

## **🧠 Improvements need reasons**

We shouldn't simply move methods around because:

> "This looks nicer."

Instead, an improvement should follow a reasoning chain.

For example, generically:

🔎 **Observation:** Class A performs several unrelated responsibilities.

⬇️

🧩 **Design problem:** This may produce low cohesion.

⬇️

🛠️ **Recommendation:** Move responsibility X to the object that has the relevant information.

⬇️

🎯 **Result:** Responsibilities become more focused and coupling may be reduced.

That's a design argument.

## **🔗 GRASP becomes practical here**

Earlier GRASP may have seemed theoretical.

Now it becomes a tool for explaining improvements.

We can ask:

**Information Expert**

> Which object actually has the information needed to perform this responsibility?

**Creator**

> Which object should logically create this other object?

**High Cohesion**

> Does this class have a focused purpose?

**Low Coupling**

> Are classes unnecessarily dependent on each other?

**Controller**

> Which object should receive and coordinate a system operation?

These principles give us a vocabulary for explaining **why** one design may be preferable to another.

## **⚠️ Error handling is also part of design**

The assignment doesn't only ask us to find missing functionality.

We also need to consider:

⚠️ Where is input validated?

⚠️ What happens when an operation is invalid?

⚠️ Can invalid domain states be created?

⚠️ Is domain validation located in an appropriate place?

So error handling isn't merely an afterthought.

It can reveal how well responsibilities have been assigned.

## **👤 The complete use-case diagram**

Remember that our earlier **current use-case diagram** answers:

> What use cases does the existing implementation actually provide?

The **complete use-case diagram** instead represents the required functionality of the PawsHome system.

That means the specification's UC1–UC9 becomes important when considering the complete system. pawshome\_shelter

## **🧠 The entire Part 2 now has a clear shape**

We can finally see the whole reasoning process:

💻 **Read existing PawsHome code**

⬇️

📐 **Reconstruct current design**

⬇️

🔎 **Compare implementation with specification**

⬇️

⚠️ **Identify gaps and design problems**

⬇️

🧩 **Analyze responsibilities using GRASP/design principles**

⬇️

🛠️ **Recommend improvements**

⬇️

✨ **Produce improved design**

This is a much deeper skill than simply saying:

> "The program has a bug."

We're learning to explain **why a software design has problems and how its structure could be improved**.

# **🪜 Step 26 — Understand Exactly What Part 2 Must Deliver**

Now we can make Part 2 concrete. At the end, we don't just hand in a discussion. The assignment requires a specific collection of **diagrams \+ written analysis**.

## **📜 FROM THE GITLAB ASSIGNMENT**

The PawsHome diagrams belong in:

**`assignment_2/diagrams/`**

There are **six required diagram files**. assignment\_2

## **🔎 The four diagrams describing CURRENT PawsHome**

These are based on the existing implementation.

### **1️⃣ `current_class_diagram.png`**

📐 Shows the classes and relationships that actually exist in the current code.

This includes things such as:

classes

attributes and operations

associations

multiplicities

dependencies

and other relevant structural relationships.

### **2️⃣ `current_use_case_diagram.png`**

👤 Shows the use cases that are actually implemented in the current program.

Remember:

It does **not** automatically contain every use case from UC1–UC9.

We first determine what the implementation actually provides.

### **3️⃣ `apply_for_adoption_sequence.png`**

⏱️ Shows the actual interaction sequence for:

**“Adopter applies for adoption”**

We trace the implementation and represent the objects/messages in the order they actually occur.

### **4️⃣ `approve_application_sequence.png`**

⏱️ Shows the actual interaction sequence for:

**“Staff approves an application”**

Again:

💻 actual implementation

not:

📜 ideal behaviour from the specification.

# **✨ The two diagrams describing the IMPROVED system**

Now we switch from reconstruction to recommendation.

### **5️⃣ `improved_class_diagram.png`**

📐 This is our proposed improved class design.

Here we can address problems discovered during the analysis.

This is where concepts such as:

🧩 GRASP

🔗 low coupling

🎯 high cohesion

📦 appropriate responsibilities

🔢 correct relationships and multiplicities

become useful when justifying the improved design.

### **6️⃣ `complete_use_case_diagram.png`**

👤 This represents the complete required PawsHome functionality rather than only what the current implementation happens to provide.

So here the specification becomes central.

# **📝 Then there is the written report**

### **📜 FROM THE GITLAB ASSIGNMENT**

The report belongs at:

**`assignment_2/docs/pawshome.md`**

The assignment requires the report to cover several areas. assignment\_2

## **📋 Problem summary**

We explain what we discovered about the existing implementation.

Not every tiny detail — but the important overall problems.

## **🔍 Gap analysis**

This is the comparison we learned in Step 22:

📜 Specification  
↕️  
💻 Implementation

We identify things such as:

missing or incomplete use cases

incorrect or missing relationships

multiplicity differences

missing domain rules

and other discrepancies.

## **⚠️ Error handling and input validation**

We examine how the existing system deals with invalid situations.

For example, conceptually:

> Where is validation performed?

> What happens when invalid information is supplied?

> Can the program enter an invalid domain state?

Again, the answers must come from examining the implementation.

## **🧩 GRASP and design-principle analysis**

We discuss design problems and possible improvements using concepts such as:

🎯 Information Expert

🏭 Creator

🔗 Low Coupling

🧩 High Cohesion

and other relevant GRASP/design principles.

The important part is not merely naming a principle.

We need to connect it to **evidence from the design/code**.

## **🛠️ Justification of improvements**

Finally, we explain **why** our improved design is better.

So there should be a reasoning chain:

🔎 **Problem discovered**

↓

🧩 **Design principle involved**

↓

🛠️ **Recommended change**

↓

✨ **Expected improvement**

# **🧠 Part 2 on one page**

We can now visualize the entire deliverable:

**CURRENT SYSTEM**

📐 Current class diagram  
👤 Current use-case diagram  
⏱️ Apply-for-adoption sequence diagram  
⏱️ Approve-application sequence diagram

⬇️

**ANALYSIS**

📜 Specification vs implementation  
🔍 Gap analysis  
⚠️ Validation/error handling  
🧩 GRASP/design problems

⬇️

**IMPROVED SYSTEM**

✨ Improved class diagram  
👤 Complete use-case diagram

⬇️

**WRITTEN EXPLANATION**

📝 `pawshome.md`

So Part 2 isn't a random collection of six pictures.

It tells a story:

> **Here is what PawsHome currently looks like → here are the problems we found → here is how we think its design should improve.**

That is the finished Part 2 package.

# **🪜 Step 27 — Enter Part 3: GenAI-Assisted Reverse Engineering**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 3 is called:

**GenAI-Assisted Reverse Engineering**

Now the assignment deliberately asks us to use a **Generative AI tool** on the same PawsHome system we analyzed ourselves in Part 2\.

But there is an extremely important order:

**Part 2 must be completed first.**

Once Part 3 begins, the Part 2 diagrams and analysis must remain unchanged. If the AI later reveals that we made a mistake, we document that discovery in Part 3 rather than secretly correcting Part 2\. genai\_log\_template

## **💡 Why do it in this order?**

Because this is essentially an experiment.

First:

👨‍💻 **Humans analyze PawsHome independently**

Then:

🤖 **AI analyzes PawsHome**

Then:

🔬 **Humans evaluate the AI**

If we allowed AI to help construct our Part 2 answer first, we could no longer meaningfully compare:

**our analysis**

with:

**AI's analysis**.

# **🤖 What will we ask the AI to do?**

## **📜 FROM THE GITLAB ASSIGNMENT**

The AI receives:

📜 the PawsHome specification

and:

💻 the PawsHome Java source code.

It is then asked to produce three main things:

📐 a **current-system class diagram**

⏱️ a sequence diagram for **“Staff approves an application”**

🔍 a list of **mismatches and possible GRASP/design problems**. assignment\_2

## **💡 Notice something interesting**

The AI is performing essentially the same kind of reasoning we already performed manually.

So we can compare:

👨‍💻 **Our reverse engineering**

versus:

🤖 **AI reverse engineering**

versus:

💻 **the actual source code**

And the third one is crucial.

Neither we nor the AI automatically become the truth.

The **source code is the evidence**.

# **🔬 We are evaluating the AI**

This is perhaps the most important idea in Part 3\.

Our job is NOT:

> "Ask ChatGPT and submit whatever it says."

Our job is:

> "Ask the AI, then critically verify its claims against the actual implementation."

So the human remains responsible for the analysis.

# **📐 Verify the AI class diagram**

### **📜 FROM THE GITLAB MATERIAL**

We must compare the AI-generated class diagram with both:

💻 the actual Java implementation

and:

👨‍💻 our own Part 2 diagram.

We investigate things such as:

classes

attributes

operations

associations

multiplicities

navigability

dependencies. genai\_log\_template

## **🧠 We might discover several possibilities**

For some detail:

🤖 AI \= correct  
👨‍💻 We \= correct

Easy.

But perhaps:

🤖 AI \= wrong  
👨‍💻 We \= correct

Or:

🤖 AI \= correct  
👨‍💻 We \= wrong

Or even:

🤖 AI \= wrong  
👨‍💻 We \= wrong

The actual code decides the question.

# **⏱️ Verify the AI sequence diagram**

We do the same thing with:

**Staff approves an application**

We compare the AI's sequence against the actual implementation.

The assignment specifically wants us to identify things such as:

✅ correct interactions

❌ missing interactions

👻 invented interactions

🔀 interactions in the wrong order. genai\_log\_template

# **🔍 Verify the AI's problem claims**

Suppose the AI says:

> "This is a GRASP violation."

We cannot simply accept that statement.

We investigate the code and classify the claim.

The template uses verdicts such as:

✅ **Confirmed**

❌ **Rejected**

🟡 **Partly correct**

And we explain the evidence. genai\_log\_template

# **🧠 This changes our relationship with AI**

Part 3 is teaching something quite modern:

AI can be useful for software engineering, but its output must be treated as something to **inspect and verify**, not as automatically correct.

The workflow becomes:

🤖 AI makes claim

⬇️

🧐 We investigate

⬇️

💻 Check actual source code

⬇️

⚖️ Make evidence-based judgment

That is much more valuable than simply learning how to write a prompt.

# **🔄 The whole A2 now forms a beautiful cycle**

### **PART 1**

📐 **Design**

⬇️

💻 **Implementation**

### **PART 2**

💻 **Implementation**

⬇️

📐 **Design**

### **PART 3**

🤖 **AI analyzes implementation**

⬇️

👨‍💻 **We critically evaluate AI**

⬇️

💻 **Actual code provides the evidence**

So A2 isn't merely about UML or Java.

It's really about learning to move confidently between:

**requirements ↔ design ↔ code ↔ analysis**

and then learning how AI fits into that process.

---

# **🪜 Step 28 — Understand the Part 3 AI Log**

## **📜 FROM THE GITLAB MATERIAL**

Part 3 doesn't only require us to show the final AI-generated diagrams and analysis.

We must preserve a **complete record of our interaction with the AI**.

The supplied `genai_log_template.md` says that **every prompt and every AI answer must be saved word-for-word**.

The suggested structure is:

📁 `assignment_2/docs/genai_raw/`

with files such as:

📄 `01_prompt.md`

📄 `01_answer.md`

📄 `02_prompt.md`

📄 `02_answer.md`

…and so on.

We must **not rewrite, summarize or clean up** those original prompts and answers. genai\_log\_template

# **💡 Why keep the raw conversation?**

Think of this as preserving the evidence from an experiment.

If our final report says:

> "The AI incorrectly identified this multiplicity."

the teacher should be able to see:

🤖 exactly what AI we used

📝 exactly what we asked

💬 exactly what the AI answered

🔎 exactly how we later evaluated that answer

So there are really two layers:

### **🗃️ RAW MATERIAL**

What actually happened in the AI conversation.

### **🔬 ANALYSIS**

What we later concluded about the AI's performance.

# **🚫 Don't repair the AI's answer**

This is especially important for diagrams.

### **📜 FROM THE GITLAB MATERIAL**

If the AI gives us a text-based diagram, we preserve its original source in the raw response and render the diagram **as the AI gave it**.

We should not quietly correct mistakes before evaluating it. genai\_log\_template

Why?

Because imagine the AI incorrectly writes:

**Animal 1 — 1 Application**

and we silently change it to:

*Animal 1 — 0.. Applications*\*

Then later we claim:

> "The AI produced a good diagram."

But that's no longer really the AI's diagram.

We've corrected the evidence.

# **🧐 At least one critical follow-up is required**

### **📜 FROM THE GITLAB MATERIAL**

The instructions require **at least one follow-up prompt** that critically probes the AI's answer.

It should challenge, question, request justification or ask the AI to reconsider/correct something. genai\_log\_template

## **💡 What does "critical" mean here?**

It doesn't mean being rude to the AI. 😄

It means **not passively accepting the first answer**.

Conceptually, a critical follow-up could ask:

> What evidence in the supplied source code supports that multiplicity?

or:

> Recheck that relationship against the actual implementation. Are you sure the association is bidirectional?

or:

> You identified this as a GRASP violation. Which specific classes and responsibilities support that conclusion?

The point is:

🤖 AI makes a claim

⬇️

🧐 Human questions it

⬇️

🤖 AI must justify or reconsider

That interaction itself becomes part of the material we evaluate.

# **📋 The main Part 3 document**

### **📜 FROM THE GITLAB MATERIAL**

The supplied template is copied to:

**`assignment_2/docs/genai_part.md`**

It records information such as:

🤖 AI product/tool

🧠 model/version

📅 date/session information

👥 group members

and then contains our evaluation of the AI's results. genai\_log\_template

# **📐 AI-generated diagrams**

Part 3 also requires two AI-generated diagram files:

📐 **`genai_class_diagram.png`**

⏱️ **`genai_approve_sequence.png`**

These represent the AI's reconstruction of PawsHome and are then compared with:

👨‍💻 our Part 2 work

and, most importantly:

💻 the actual implementation.

# **🔒 Why Part 2 becomes frozen**

This now makes the earlier rule easier to understand.

Once we begin Part 3:

🔒 **Part 2 stays unchanged.**

Suppose our Part 2 diagram says:

**A → B**

Then the AI says:

**A → C**

We investigate the code and discover:

😬 the AI was right.

We must **not quietly go back and change Part 2**.

Instead, Part 3 becomes interesting:

> "Our original Part 2 analysis was incorrect here. The AI identified C, and inspection of the source code confirms that C is correct."

That is actually valuable evidence about the usefulness of AI.

# **🧠 So Part 3 is not an AI competition**

The goal isn't:

> **Human good, AI bad.**

Nor:

> **AI good, human bad.**

The interesting question is:

> **Where was each analysis correct or incorrect, and what does the source code actually prove?**

Sometimes we may catch the AI.

Sometimes the AI may catch us.

Sometimes both may miss something.

That's why preserving the original work matters.

## **🔑 The Part 3 evidence chain**

Remember this:

**RAW AI PROMPT**

⬇️

**RAW AI ANSWER**

⬇️

**AI DIAGRAM / CLAIM**

⬇️

🔎 **CHECK AGAINST CODE**

⬇️

⚖️ **VERDICT**

⬇️

📝 **REFLECTION**

That is the heart of the Part 3 methodology.

# **🪜 Step 29 — Understand `Confirmed`, `Rejected` and `Partly Correct`**

## **📜 FROM THE GITLAB MATERIAL**

In Part 3, we must **verify the AI's analysis against the actual PawsHome Java implementation**.

For the problems or mismatches identified by the AI, the template asks us to classify the AI's claims using verdicts such as:

✅ **Confirmed**

❌ **Rejected**

🟡 **Partly correct**

And importantly, the verdict must be supported by **evidence from the actual implementation**. genai\_log\_template

# **💡 What does `Confirmed` mean?**

**Confirmed** means:

> We investigated the AI's claim and found that the source code supports it.

Imagine the AI claims:

> "The implementation does not enforce a required limit."

We inspect the relevant classes and methods.

If the required check really is absent, then:

✅ **Confirmed**

But the important part isn't the word "Confirmed".

The important part is explaining **why**.

## **🔎 The reasoning should look like this**

🤖 **AI claim**

↓

💻 **Relevant code inspected**

↓

🔍 **Evidence discovered**

↓

⚖️ **Verdict: Confirmed**

This turns our answer into an evidence-based analysis rather than an opinion.

# **❌ What does `Rejected` mean?**

**Rejected** means:

> The AI made a claim that isn't supported by the actual implementation.

For example, imagine the AI says:

> "The program never checks whether an Animal is available."

We inspect the source code and discover that the check actually exists.

Then:

❌ **Rejected**

And we explain where the implementation performs that check.

# **🟡 What does `Partly correct` mean?**

This is perhaps the most interesting category.

It means:

> The AI noticed something real, but its explanation isn't completely accurate.

For example, imagine the AI correctly notices that validation is weak.

But it claims:

> "There is no validation."

When we inspect the code, perhaps some validation exists, but an important part is missing.

Then:

🟡 **Partly correct**

The AI found a genuine problem, but described it too broadly or inaccurately.

# **🧠 Don't judge by whether the AI sounds convincing**

This is a very important lesson.

AI can produce an explanation that sounds extremely confident:

> "The application violates Information Expert because responsibility X clearly belongs to class Y."

That may sound sophisticated.

But sophisticated language is not evidence.

Our response should be:

> **Show me the code.** 🔎

Then we investigate.

# **📐 We do the same with the AI class diagram**

### **📜 FROM THE GITLAB MATERIAL**

The verification isn't limited to written claims.

For the AI-generated class diagram, we must check it against the actual Java implementation, including:

🏗️ classes

📦 attributes

⚙️ operations

🔗 associations

🔢 multiplicities

➡️ navigability

🔌 dependencies

The template also asks us to compare attributes and operations for at least three classes. genai\_log\_template

## **💡 So we can think element by element**

Suppose AI draws:

*Adopter 1 ↔ 0.. Application*\*

We investigate.

Then perhaps:

✅ relationship correct

but:

❌ multiplicity incorrect

That means we don't necessarily have to declare the whole diagram simply "right" or "wrong".

We can evaluate its individual parts.

# **⏱️ The same principle applies to the sequence diagram**

Suppose the AI produces:

**Step 1 → correct**

**Step 2 → correct**

**Step 3 → invented**

**Step 4 → correct but wrong position**

**Step 5 → missing**

Then we document those differences.

The assignment specifically expects us to look for:

✅ correct interactions

❌ missing interactions

👻 invented interactions

🔀 incorrect ordering. genai\_log\_template

# **👨‍💻 And we also evaluate ourselves**

This is one of the most interesting parts.

The comparison isn't simply:

**AI vs truth**

We also have:

👨‍💻 **our Part 2 analysis**

So conceptually we can encounter:

**AI correct — Ours correct**

**AI wrong — Ours correct**

**AI correct — Ours wrong**

**AI wrong — Ours wrong**

And again:

💻 **the actual implementation is the evidence used to determine which is which.**

# **🔬 Think like a scientist**

Part 3 becomes easier if we imagine ourselves testing hypotheses.

The AI says:

> "X is true."

We don't answer:

> "I agree."

We ask:

> "What evidence would demonstrate whether X is actually true?"

Then we inspect the implementation.

That mindset is exactly what the assignment is encouraging.

## **🔑 The verification formula**

For every important AI claim:

🤖 **WHAT DID THE AI CLAIM?**

⬇️

🔎 **WHERE CAN WE CHECK IT?**

⬇️

💻 **WHAT DOES THE CODE ACTUALLY SHOW?**

⬇️

⚖️ **VERDICT**

**Confirmed / Rejected / Partly correct**

⬇️

📝 **EXPLAIN THE EVIDENCE**

Once you understand that pattern, a large part of Part 3 becomes much easier to organize.

# **🪜 Step 30 — Understand the Part 3 Reflection**

## **📜 FROM THE GITLAB MATERIAL**

After we've compared the AI-generated material with:

👨‍💻 our own Part 2 analysis

and

💻 the actual PawsHome implementation,

Part 3 ends with a **reflection**.

The purpose is not simply to report whether the AI was "good" or "bad". We should reflect on what happened when GenAI was used for reverse engineering and what we learned from verifying its output. genai\_log\_template

# **💡 BACKGROUND & EXPLANATION — Reflection is different from analysis**

During verification we might write something very concrete:

> The AI identified relationship X, but inspection of the implementation showed Y.

That's **analysis**.

Reflection goes one level higher:

> What did this experience teach us about using AI for software engineering?

So we move from:

🔎 **What happened?**

to:

🧠 **What did we learn from what happened?**

# **🤖 Where was the AI useful?**

One thing we can reflect on is where AI actually helped.

For example, after doing the real assignment work, we might discover that AI was useful for:

🔎 quickly identifying candidate relationships

📐 producing an initial UML interpretation

🧩 suggesting possible GRASP problems

👀 drawing attention to something we had overlooked

But these are only possibilities.

Our actual reflection should describe what **really happened in our own Part 3 session**.

# **⚠️ Where was the AI unreliable?**

The opposite question matters just as much.

Perhaps the AI:

👻 invented something that wasn't in the code

🔢 misunderstood a multiplicity

➡️ assumed an association was bidirectional

⏱️ put method calls in the wrong order

🧩 confidently claimed a GRASP violation without sufficient evidence

Again, we shouldn't decide beforehand that AI will make these mistakes.

We document whatever we actually observe.

# **👨‍💻 What about our own mistakes?**

This is important too.

Suppose the AI notices something that we missed in Part 2\.

We investigate the code and discover:

🤖 AI \= correct

👨‍💻 our Part 2 analysis \= incorrect

That's not something to hide.

It's actually excellent material for reflection.

We can ask:

> Why did we miss it?

> What did the AI notice?

> Why was verification still necessary?

Remember that Part 2 remains frozen once Part 3 starts, so discoveries like this are documented in Part 3 rather than silently repaired in the original Part 2 work. genai\_log\_template

# **🔍 The importance of verification**

Perhaps the biggest theme is:

> **AI output is not evidence by itself.**

If AI says:

> "This association has multiplicity 1..\*"

we still need to inspect the implementation.

The useful workflow is:

🤖 **AI suggests**

⬇️

👨‍💻 **Human investigates**

⬇️

💻 **Code provides evidence**

⬇️

🧠 **Human concludes**

That is much more sophisticated than either blindly trusting AI or automatically rejecting it.

# **🪞 Reflect on the human–AI comparison**

Another interesting question is:

> Did humans and AI make different kinds of mistakes?

Perhaps humans understood the overall domain better but overlooked a method call.

Perhaps AI found structural details quickly but inferred things that weren't actually present.

Perhaps both analyses were very similar.

Any of these could be meaningful — provided they're based on what actually happened.

# **🎯 What makes a strong reflection?**

A weak reflection would be something generic like:

> "AI was useful but sometimes makes mistakes, so you should check its answers."

That's true, but it tells us almost nothing about **our experiment**.

A stronger reflection connects directly to our results:

**What the AI did**

↓

**What we did**

↓

**What the source code showed**

↓

**What we learned from the difference**

The more specific the connection to our actual PawsHome analysis, the more meaningful the reflection becomes.

# **🧠 Part 3 in one sentence**

We can now summarize the purpose of Part 3 as:

> **Use AI as a software-analysis tool, but critically verify its output against the real implementation and reflect on where human and AI analysis succeeded or failed.**

So Part 3 isn't really testing whether we can get ChatGPT to draw UML.

It's testing whether we can remain the **software engineer responsible for judging the result**.

# **🪜 Step 31 — See Assignment 2 as One Complete Journey**

We have now looked at the individual concepts and all three parts. It's time to zoom all the way out and see what **Assignment 2 is actually teaching us**.

## **📜 FROM THE GITLAB ASSIGNMENT**

The overall purpose of A2 is to connect **object-oriented design and implementation**.

We learn to move in both directions:

📐 **Design → Implementation**

and:

💻 **Implementation → Design**

Then Part 3 adds GenAI and asks us to critically evaluate AI-generated software analysis. assignment\_2

# **1️⃣ PART 1 — Crescendo**

## **📐 DESIGN → 💻 IMPLEMENTATION**

We begin with something that has already been designed.

We receive:

📜 specification

📐 class diagram

👤 use-case diagram

📏 domain rules

Then the task is to faithfully implement that design.

## **🧠 What Part 1 teaches us**

We learn how UML concepts become real software concepts:

📦 **Class** → class in the implementation

🔒 **Attribute** → internal object state

⚙️ **Operation** → behaviour/method

🧬 **Generalization** → inheritance

🔗 **Association** → object relationships

🔢 **Multiplicity** → constraints on those relationships

💎 **Composition** → ownership and lifecycle

📏 **Domain rule** → validation and behaviour

🧩 **GRASP** → responsibility assignment

So Part 1 teaches:

> **How does an object-oriented design become working software?**

# **2️⃣ PART 2 — PawsHome**

Then everything reverses.

## **💻 IMPLEMENTATION → 📐 DESIGN**

Now we receive an existing program.

Instead of being told exactly what its design is, we investigate it.

🔎 Find classes

🔎 Find attributes and operations

🔎 Find relationships

🔎 Determine multiplicities

🔎 Trace method calls

🔎 Discover responsibilities

From that evidence we reconstruct:

📐 current class diagram

👤 current use-case diagram

⏱️ sequence diagrams

## **Then we compare reality with requirements**

We have:

📜 **PawsHome specification**

versus:

💻 **PawsHome implementation**

This produces:

🔍 **gap analysis**

We investigate:

missing functionality

incorrect behaviour

relationships

multiplicities

domain rules

validation

error handling

separation of concerns

GRASP/design problems. assignment\_2

## **Then we improve the design**

Only after understanding the current system do we propose:

✨ improved class diagram

👤 complete use-case diagram

🧩 better responsibility assignment

⚠️ better validation/error handling

So Part 2 teaches:

> **How can we understand, evaluate and improve software that somebody else already wrote?**

# **3️⃣ PART 3 — GenAI**

Now we introduce a second analyst:

🤖 **AI**

But our own Part 2 work must already exist and is frozen before this comparison begins. genai\_log\_template

We give the AI:

📜 PawsHome specification

💻 PawsHome source code

and ask it to perform reverse engineering.

## **Then comes the important part**

We don't simply accept its answer.

We compare:

👨‍💻 **Our analysis**

🤖 **AI analysis**

💻 **Actual implementation**

Then we verify claims as:

✅ Confirmed

❌ Rejected

🟡 Partly correct

and document the evidence.

So Part 3 teaches:

> **How can AI assist software engineering while the human remains responsible for verifying the result?**

# **🧠 The entire assignment in one picture**

### **PART 1**

📜 Requirements  
↓  
📐 UML Design  
↓  
💻 Implementation

### **PART 2**

💻 Existing Implementation  
↓  
🔎 Reverse Engineering  
↓  
📐 Current Design  
↓  
⚖️ Compare with Requirements  
↓  
🧩 Analyze Problems  
↓  
✨ Improved Design

### **PART 3**

💻 Implementation \+ 📜 Specification  
↓  
🤖 AI Analysis  
↓  
⚖️ Human Verification  
↓  
💻 Evidence from Code  
↓  
📝 Reflection

# **🌱 What has changed since A1?**

A1 was heavily focused on:

> **What objects and concepts exist in this domain?**

A2 moves further into:

> **How do we assign responsibilities to those objects?**

> **How does a UML design become actual software?**

> **How can we reconstruct design from existing software?**

> **How do we recognize weaknesses in an object-oriented design?**

> **How do we verify an AI's interpretation of software?**

So the course is moving from **domain modelling** toward actual **software design**.

# **🎯 The central skill underneath everything**

If I had to reduce everything we've covered to one central question, it would be:

> **WHO SHOULD BE RESPONSIBLE FOR WHAT?**

Why does MusicSchool create something?

Why does Course know something?

Why should validation live here rather than there?

Why should one object reference another?

Why does a method belong to this class?

Why is this design highly cohesive?

Why does that design create unnecessary coupling?

Those questions are at the heart of object-oriented design and GRASP.

# **🧭 Our complete A2 map**

You can now mentally place almost everything in the assignment:

**OOP**

→ Classes and objects  
→ State and behaviour  
→ Encapsulation  
→ Inheritance  
→ Associations  
→ Multiplicity  
→ Composition

**DESIGN**

→ Responsibilities  
→ GRASP  
→ Information Expert  
→ Creator  
→ Low Coupling  
→ High Cohesion  
→ Separation of concerns

**UML**

→ Class diagrams  
→ Use-case diagrams  
→ Sequence diagrams

**ANALYSIS**

→ Specification vs implementation  
→ Reverse engineering  
→ Gap analysis  
→ Error handling  
→ Design problems  
→ Improvements

**AI**

→ Generate analysis  
→ Preserve raw output  
→ Challenge the AI  
→ Verify against code  
→ Confirm / Reject / Partly correct  
→ Reflect

## **🏁 Where we are now**

At this point, you have the **conceptual map of the entire assignment**.

We haven't solved the assessed Crescendo or PawsHome work. Instead, we've built the background needed to understand what the instructions are asking you to do and *why* each part exists.

That means the next useful stage of our little book can become much more practical while still respecting the assignment rules.

# **🪜 Step 32 — Understand the Git/GitLab Workflow for A2**

## **📜 FROM THE GITLAB MATERIAL**

You and Edvin continue working in the **same GitLab group project** used for the assignments.

For Assignment 2, the required branch is:

**`assignment-2`**

The workflow instructions are clear that you should **not work directly on `main`**. All Assignment 2 work is done on the assignment branch. workflow

# **🌳 Think of `main` as the approved version**

## **💡 BACKGROUND & EXPLANATION**

A simple mental picture is:

🌳 **main**  
The stable/approved history of the project.

Then we create:

🌿 **assignment-2**  
The branch where you and Edvin develop Assignment 2\.

So while A2 is underway:

**main**

↳ **assignment-2**

All the new A2 work happens on that branch.

# **1️⃣ Start from an updated `main`**

### **📜 FROM THE GITLAB MATERIAL**

The workflow says Assignment 2 should be started after Assignment 1 has been merged.

The sequence is:

**switch to `main`**

↓

**pull the newest `main`**

↓

**create `assignment-2`**

↓

**push `assignment-2` to GitLab**

The first group member creates and pushes the branch. The second group member then fetches it and switches to the existing `assignment-2` branch. workflow

# **👥 You and Edvin share the same branch**

This is worth emphasizing.

You do **not** need:

🌿 `niklas-assignment-2`

and:

🌿 `edvin-assignment-2`

The supplied workflow describes both group members working on:

🌿 **`assignment-2`**

So Git becomes part of your collaboration.

# **🔄 2️⃣ The normal daily cycle**

### **📜 FROM THE GITLAB MATERIAL**

The workflow recommends a repeating pattern of:

⬇️ **Pull**

✏️ **Edit**

➕

📦 **Commit**

⬆️ **Push**

with regular, meaningful commits from both group members. workflow

## **💡 Why pull first?**

Imagine Edvin worked last night and pushed his changes.

You begin this morning with the version currently on your laptop.

If you immediately start editing, you may be working from an older version.

So:

⬇️ **Pull first**

means:

> "Give me the latest work from GitLab before I begin."

# **📦 3️⃣ Make meaningful commits**

A commit is essentially a saved checkpoint in the project's history.

A useful commit represents a meaningful piece of progress.

Conceptually:

📦 Add initial PawsHome diagram

📦 Document multiplicity analysis

📦 Add Crescendo domain classes

rather than one enormous commit containing several days of unrelated work.

The course material explicitly asks for **regular commits with clear messages**, and both group members should contribute commits. workflow

# **☁️ 4️⃣ Push your work**

A commit initially exists in your local Git repository.

**Push** sends those commits to GitLab.

So:

💻 Your computer  
⬆️ `push`  
☁️ GitLab

Then Edvin can obtain those changes.

# **⚠️ Working together means conflicts are possible**

Suppose both of you edit exactly the same section of the same file.

Niklas changes:

📝 paragraph X

while Edvin independently changes:

📝 paragraph X

Git may not know which version should survive.

That's a **merge conflict**.

This is one reason the simple habit:

⬇️ pull before starting

📦 make sensible commits

⬆️ push regularly

is valuable.

It reduces the chance that you both spend hours working from different versions.

# **📁 5️⃣ Keep A2 inside the correct directory**

### **📜 FROM THE GITLAB ASSIGNMENT**

Assignment 2 work belongs under:

**`assignment_2/`**

Inside that, we'll eventually have areas for things such as:

💻 source

📐 diagrams

📝 documentation

The exact deliverables we've already studied all fit underneath this Assignment 2 structure. assignment\_2

# **🚀 6️⃣ Submission uses a Merge Request**

When the assignment is ready, we do **not** simply merge it ourselves.

### **📜 FROM THE GITLAB MATERIAL**

We create a Merge Request:

🌿 **`assignment-2`**

→

🌳 **`main`**

The instructions explicitly say:

> **Do not merge it yourselves.**

The Merge Request is how the completed assignment is presented for review/submission. workflow

# **🧠 The entire Git workflow in one picture**

🌳 **main**

↓

🌿 create **assignment-2**

↓

👨‍💻 Niklas \+ 👨‍💻 Edvin work on the same branch

↓

⬇️ Pull

↓

✏️ Work

↓

📦 Commit

↓

⬆️ Push

↓

🔄 Repeat throughout A2

↓

✅ Assignment finished

↓

🔀 Create Merge Request:

**assignment-2 → main**

↓

🛑 **Do not merge it yourselves**

# **🎯 The important idea**

Git isn't an extra assignment sitting beside A2.

It is the mechanism that records **how you and Edvin developed A2 together**.

Your repository history should gradually tell the story of the assignment rather than suddenly receiving the entire finished project in one giant commit.

# **🪜 Step 33 — Understand the A2 Folder Structure**

## **📜 FROM THE GITLAB ASSIGNMENT**

All Assignment 2 material should live inside:

**`assignment_2/`**

Inside that folder, the different parts of the assignment are separated into source code, documentation and diagrams. assignment\_2

A useful overview is:

📁 **assignment\_2/**  
　├── 📁 **src/**  
　├── 📁 **docs/**  
　│　├── 📄 **part\_1.md**  
　│　├── 📄 **pawshome.md**  
　│　├── 📄 **genai\_part.md**  
　│　└── 📁 **genai\_raw/**  
　└── 📁 **diagrams/**

# **💻 `src/` — Crescendo implementation**

### **📜 FROM THE GITLAB MATERIAL**

The Crescendo starter project goes into:

**`assignment_2/src/`**

The written setup instructions specify the Java/Gradle project here, including the Crescendo classes such as:

🏫 MusicSchool

👤 Person

🎓 Student

👨‍🏫 Teacher

🎼 Course

💰 TuitionFee

📊 Level

💳 PaymentStatus setup\_p1

So we can mentally associate:

**`src/` \= Part 1 implementation**

# **📝 `docs/part_1.md`**

This is the written documentation for Crescendo.

It accompanies the implementation and is where the required explanations about the Part 1 design decisions belong.

So:

💻 `src/` \= the implementation

📝 `docs/part_1.md` \= explanation/documentation

# **🐕 `docs/pawshome.md`**

This is the main written report for **Part 2**.

It contains our PawsHome analysis, including:

🔍 gap analysis

⚠️ validation and error handling

🧩 GRASP/design problems

🛠️ recommendations and justification. assignment\_2

# **📐 `diagrams/` — PawsHome UML**

Part 2 requires six images here:

📐 `current_class_diagram.png`

👤 `current_use_case_diagram.png`

⏱️ `apply_for_adoption_sequence.png`

⏱️ `approve_application_sequence.png`

✨ `improved_class_diagram.png`

👤 `complete_use_case_diagram.png` assignment\_2

Remember the split:

**First four \= current implementation**

**Last two \= recommended/complete design**

# **🤖 `docs/genai_part.md`**

This belongs to **Part 3**.

It is the main document where we evaluate the GenAI analysis.

Conceptually:

🤖 What did the AI produce?

🔎 What did we verify?

⚖️ What was Confirmed / Rejected / Partly correct?

👨‍💻 How did it compare with our Part 2 work?

🧠 What did we learn?

# **🗃️ `docs/genai_raw/`**

This is particularly important.

It contains the **unaltered evidence** from our AI conversation.

For example:

📄 `01_prompt.md`  
📄 `01_answer.md`

📄 `02_prompt.md`  
📄 `02_answer.md`

📄 `03_prompt.md`  
📄 `03_answer.md`

and so on.

The instructions say every prompt and answer used for Part 3 must be preserved **word-for-word**, rather than rewritten or cleaned up. genai\_log\_template

# **🤖 Where do the AI diagrams go?**

Part 3 also requires:

📐 `genai_class_diagram.png`

⏱️ `genai_approve_sequence.png`

These belong with the assignment's diagrams. assignment\_2

# **🧠 The easiest way to remember everything**

Think of the folder as representing the three parts:

### **🎼 PART 1 — CRESCENDO**

💻 `src/`

📝 `docs/part_1.md`

### **🐕 PART 2 — PAWSHOME**

📝 `docs/pawshome.md`

📐 six PawsHome diagrams

### **🤖 PART 3 — GENAI**

📝 `docs/genai_part.md`

🗃️ `docs/genai_raw/`

📐 two GenAI diagrams

## **🎯 So the repository itself tells the story**

**assignment\_2**

→ 🎼 build Crescendo

→ 🐕 reverse-engineer PawsHome

→ 🛠️ propose improvements

→ 🤖 let AI analyze PawsHome

→ 🔎 verify the AI

→ 🧠 reflect on the results

At this point, not only the assignment but also **where everything belongs** should be much clearer.

# **🪜 Step 34 — When Is Assignment 2 Actually “Done”?**

Now we can turn everything into one final **roadmap/checklist**.

The most important thing is that A2 has an order. Some parts should not be mixed together.

## **🌿 PHASE 1 — Start Assignment 2 correctly**

### **📜 FROM THE GITLAB MATERIAL**

Before beginning the actual assignment work:

☐ Assignment 1 has been merged.

☐ Update `main`.

☐ Create the branch **`assignment-2`**.

☐ Push the branch to GitLab.

☐ Both you and Edvin work on that branch.

☐ Pull regularly before working.

☐ Make regular, meaningful commits.

☐ Both group members contribute to the Git history. workflow

# **🎼 PHASE 2 — Complete Part 1: Crescendo**

The direction is:

📐 **DESIGN → IMPLEMENTATION**

### **📜 FROM THE GITLAB ASSIGNMENT**

Part 1 requires the Crescendo implementation to represent the supplied design, including:

☐ Classes and enums

☐ Attributes and operations

☐ `Person` inheritance

☐ Associations

☐ Multiplicities

☐ Composition

☐ Domain rules

☐ Error handling

☐ CLI

☐ Predefined demonstration

☐ At least two documented GRASP principles

☐ Required relationship-pattern explanations

☐ `docs/part_1.md` completed. assignment\_2

## **🚫 Remember the AI restriction**

Part 1 explicitly says **not to use AI tools for the tasks in this part**.

So our explanatory book can help you understand the concepts, but the assessed Crescendo work itself is yours and Edvin's. assignment\_2

# **🐕 PHASE 3 — Complete Part 2: PawsHome**

Now the arrow reverses:

💻 **IMPLEMENTATION → DESIGN**

First study the supplied implementation **without fixing it**.

## **🔎 Current-system analysis**

Complete:

☐ `current_class_diagram.png`

☐ `current_use_case_diagram.png`

☐ `apply_for_adoption_sequence.png`

☐ `approve_application_sequence.png`

These describe what the existing implementation **actually does**.

## **⚖️ Analyze the gaps**

Compare:

📜 specification

versus:

💻 implementation

Investigate:

☐ missing/incomplete use cases

☐ relationships

☐ multiplicities

☐ domain rules

☐ validation

☐ error handling

☐ responsibility placement

☐ GRASP/design problems

## **✨ Recommend improvements**

Then produce:

☐ `improved_class_diagram.png`

☐ `complete_use_case_diagram.png`

And complete:

☐ `docs/pawshome.md` assignment\_2

# **🛑 CRITICAL CHECKPOINT**

This is probably the most important ordering rule in the entire assignment.

### **📜 FROM THE GITLAB MATERIAL**

**Part 2 must be completed before Part 3 begins.**

Once you start Part 3:

🔒 **DO NOT CHANGE YOUR PART 2 ANALYSIS OR DIAGRAMS.**

If AI later reveals a mistake in Part 2, leave the original Part 2 work unchanged and discuss the discovery in Part 3\. genai\_log\_template

So think of this moment as:

🐕 PART 2 COMPLETE

↓

🔒 **FREEZE**

↓

🤖 START PART 3

# **🤖 PHASE 4 — Complete Part 3: GenAI**

Now AI is deliberately allowed and required for the analysis.

The AI receives:

📜 PawsHome specification

* 

💻 PawsHome source code

## **🤖 Generate the required AI material**

The AI should produce:

☐ current-system class diagram

☐ sequence diagram for **Staff approves an application**

☐ mismatches/problems

☐ possible GRASP/design problems

## **🗃️ Preserve everything**

Save:

☐ every prompt word-for-word

☐ every answer word-for-word

under:

**`docs/genai_raw/`**

Also:

☐ include at least one critical follow-up prompt

☐ do not silently correct the AI's output. genai\_log\_template

# **🔬 PHASE 5 — Verify the AI**

Now compare:

🤖 AI

vs.

👨‍💻 your Part 2 analysis

vs.

💻 actual implementation

Check:

☐ classes

☐ attributes

☐ operations

☐ associations

☐ multiplicities

☐ navigability

☐ dependencies

☐ sequence interactions

☐ missing interactions

☐ invented interactions

☐ incorrect ordering

☐ AI's claimed design problems

## **⚖️ Give evidence-based verdicts**

For AI claims:

✅ **Confirmed**

❌ **Rejected**

🟡 **Partly correct**

And explain the evidence from the actual implementation. genai\_log\_template

# **📝 PHASE 6 — Finish Part 3 documentation**

Complete:

☐ `docs/genai_part.md`

☐ `docs/genai_raw/`

☐ `genai_class_diagram.png`

☐ `genai_approve_sequence.png`

☐ final reflection

At this stage, all three assignment parts should be complete.

# **🔍 PHASE 7 — Final inspection**

Before submission, conceptually ask:

> Can somebody clone our repository and understand our work?

Check that:

☐ required files exist

☐ filenames are correct

☐ diagrams are viewable

☐ documentation is complete

☐ commits have been pushed

☐ both group members have contributed

☐ nothing important exists only locally on somebody's laptop

☐ Part 2 wasn't altered after Part 3 began

# **🚀 PHASE 8 — Submit through Merge Request**

### **📜 FROM THE GITLAB MATERIAL**

Finally create a Merge Request:

🌿 **`assignment-2`**

→

🌳 **`main`**

And:

🛑 **Do not merge it yourselves.** workflow

# **🧠 The whole recipe**

We can now compress our entire book into one flow:

🌿 **Create assignment-2 branch**

↓

🎼 **PART 1 — Crescendo**

📐 Design → 💻 Implementation

↓

🐕 **PART 2 — PawsHome**

💻 Implementation → 📐 Current Design

↓

⚖️ **Compare with specification**

↓

✨ **Recommend improved design**

↓

🔒 **FREEZE PART 2**

↓

🤖 **PART 3 — GenAI analyzes PawsHome**

↓

🔬 **Verify AI against actual code**

↓

📝 **Reflect**

↓

🔍 **Final checks**

↓

🚀 **Merge Request assignment-2 → main**

↓

🛑 **Do not merge**

That is Assignment 2 from beginning to end.

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

# **🪜 Step 36 — Practice with a Tiny Library System**

Now we'll temporarily leave **Crescendo** and **PawsHome** completely alone.

This is a made-up example purely for learning the concepts.

## **💡 BACKGROUND & EXPLANATION**

Imagine we're designing a tiny system for a public library.

The requirements are:

📚 A library owns books.

👤 Members can borrow books.

📕 A book can be available or borrowed.

👤 A member may borrow a maximum of **3 books**.

📕 Each borrowed book can be borrowed by **only one member at a time**.

Already, we can start thinking in objects.

# **🧱 Step 1 — Find candidate classes**

Important nouns often give us clues:

🏛️ **Library**

📕 **Book**

👤 **Member**

These aren't automatically classes just because they're nouns, but they are good candidates.

Now ask:

> What does each object **know**, and what does it **do**?

# **📕 Book**

A Book might know:

**title**

**author**

**ISBN**

**whether it is available**

And it might do something such as:

**isAvailable()**

Notice the OOP idea:

> The Book isn't merely data. It can also have behaviour related to itself.

# **👤 Member**

A Member might know:

**memberId**

**name**

**borrowed books**

And might perform:

**borrowBook()**

**returnBook()**

**getBorrowedBooks()**

# **🏛️ Library**

The Library might know:

**its name**

**its books**

**its members**

And perhaps perform responsibilities such as:

**registerMember()**

**addBook()**

**findBook()**

# **🔗 Step 2 — Find the associations**

Now we ask:

> Which objects are related?

Clearly:

👤 **Member ↔ Book**

because members borrow books.

And:

🏛️ **Library → Book**

because the library contains its books.

We might also have:

🏛️ **Library → Member**

because the library registers its members.

# **🔢 Step 3 — Think about multiplicity**

Our requirement said:

> A member may borrow a maximum of three books.

So conceptually:

👤 Member → 📕 Book

**0..3**

A member can therefore have:

0 books

1 book

2 books

or 3 books.

But not 4\.

Now look from the other direction.

A particular physical Book can currently be borrowed by:

**0..1 Member**

Why?

Because it can either be:

📗 available → **0 borrowers**

or:

📕 borrowed → **1 borrower**

This demonstrates why multiplicity has **two ends**.

# **💎 Step 4 — Think about composition**

Suppose our requirements say:

> Books in this particular system exist only as part of a Library's catalogue and are created and managed by that Library.

We might decide that the relationship represents strong ownership:

🏛️ Library ◆── 📕 Book

The diamond belongs at the **owner**:

**Library**

Now we are thinking about more than:

> "These two objects are related."

We're thinking:

> "Who owns the lifecycle of this object?"

# **📏 Step 5 — Turn requirements into domain rules**

We have:

**Rule A:** Member may borrow at most 3 books.

**Rule B:** An unavailable Book cannot be borrowed.

**Rule C:** A Member cannot return a Book they haven't borrowed.

These aren't merely comments for humans.

They should affect the behaviour of our objects.

For example, if a member already has three books:

👤📕📕📕

and attempts to borrow another:

➕📕

the system should reject the operation.

The object model is therefore **protecting the domain rules**.

# **👨‍🔬 Step 6 — Apply Information Expert**

Now suppose we need to answer:

> Has this Member already borrowed three books?

Which object naturally has the information needed?

🏛️ Library?

📕 Book?

👤 Member?

The **Member** already knows its borrowed books.

Therefore Member is a natural candidate for that responsibility.

That's the GRASP **Information Expert** idea:

> Give a responsibility to the object that has the information necessary to fulfil it.

# **🏭 Step 7 — Apply Creator**

Suppose Members only exist after being registered with a Library.

We might ask:

> Who should create a Member?

The Library already manages its registered members.

So Library becomes a natural candidate.

🏛️ Library

↓

🏭 creates

↓

👤 Member

That's the kind of reasoning GRASP **Creator** encourages.

# **🎯 Step 8 — Think about cohesion**

Imagine we put everything into `Library`:

register members

borrow books

return books

check member limits

determine book availability

calculate fines

print menus

read keyboard input

save files

send emails

make coffee ☕😄

Eventually `Library` becomes responsible for almost everything.

Its responsibilities are no longer tightly focused.

That's a warning sign for:

📉 **Low cohesion**

We instead ask:

> Which responsibilities naturally belong together?

That question helps us distribute behaviour among our objects.

# **🕸️ Step 9 — Think about coupling**

Suppose `Book` needs detailed knowledge about:

Member

Library

ConsoleMenu

Database

EmailService

PaymentSystem

and several other classes.

Book becomes heavily dependent on the rest of the system.

That's:

🕸️ **high coupling**

We generally want to avoid **unnecessary** dependencies.

Not all coupling is bad — objects obviously need to collaborate.

The goal is sensible coupling.

# **⏱️ Step 10 — Imagine a sequence**

Now imagine the use case:

> **Member borrows a book**

A simplified conceptual sequence could be:

👤 User requests borrowing

↓

🖥️ System receives request

↓

👤 Member is identified

↓

📕 Book is identified

↓

🔎 Rules are checked

↓

📕 Book becomes borrowed

↓

👤 Member's borrowed-books relationship is updated

The sequence diagram would show **which objects participate and in what order they communicate**.

That is different from the class diagram.

📐 **Class diagram**

> What exists and how is it structurally connected?

⏱️ **Sequence diagram**

> What happens between those objects during one particular scenario?

# **🔄 Now reverse the exercise**

Imagine we were **not given these requirements or diagrams**.

Instead, somebody handed us an existing Library program.

We would inspect the code and discover:

🔎 `Library`

🔎 `Member`

🔎 `Book`

🔎 fields

🔎 methods

🔎 object references

🔎 collections

🔎 validation

🔎 method calls

and reconstruct the design.

That would be:

💻 **CODE**

↓

🔎 **REVERSE ENGINEERING**

↓

📐 **DESIGN**

And that's exactly the fundamental skill you're practising in **PawsHome Part 2**.

# **🧠 The important connection**

Our tiny Library example contains almost the entire conceptual core of A2:

📕 Classes and objects

📦 Attributes

⚙️ Methods

🔗 Associations

🔢 Multiplicities

💎 Composition

📏 Domain rules

🔒 Encapsulation

👨‍🔬 Information Expert

🏭 Creator

🎯 Cohesion

🕸️ Coupling

📐 Class diagrams

⏱️ Sequence diagrams

🔎 Reverse engineering

The systems change, but the **way of thinking remains the same**.

That is the real skill A2 is trying to develop.

# **🪜 Step 37 — Turn Ordinary Requirements into an Object-Oriented Design**

This is one of the most useful skills in the whole course.

Someone gives us a sentence in ordinary English. We need to ask:

> **What does this sentence mean for our object model?**

Does it describe:

📦 an **attribute**?

⚙️ a **method**?

🔗 an **association**?

🔢 a **multiplicity**?

📏 a **domain rule**?

🧱 or perhaps another **class**?

We'll continue with our imaginary Library system so we don't solve Crescendo or PawsHome.

# **📦 1\. Does it describe information something HAS?**

Requirement:

> "A book has a title and ISBN."

Ask:

> Is this information describing the state of a Book?

Yes.

So we probably have:

📕 **Book**

→ title  
→ ISBN

These are candidate **attributes**.

### **Memory trick**

> **HAS INFORMATION → ATTRIBUTE**

# **⚙️ 2\. Does it describe something an object DOES?**

Requirement:

> "A member can return a book."

Now we're describing behaviour.

That suggests an **operation/method**.

👤 Member

→ `returnBook(...)`

We're moving from:

> What does the object **know**?

to:

> What can the object **do**?

### **Memory trick**

> **DOES SOMETHING → METHOD**

# **🔗 3\. Does it connect two important objects?**

Requirement:

> "Members borrow books."

We have two domain concepts:

👤 Member

and:

📕 Book

The sentence establishes a relationship between them.

That suggests an:

🔗 **Association**

Conceptually:

**Member ↔ Book**

### **Memory trick**

> **OBJECT A IS RELATED TO OBJECT B → ASSOCIATION**

# **🔢 4\. Does it tell us HOW MANY?**

Now change the requirement slightly:

> "A member may borrow a maximum of three books."

We already know:

👤 Member ↔ 📕 Book

But now we have additional information about the relationship:

**maximum 3**

That's a multiplicity/constraint.

👤 Member → Book **0..3**

### **Memory trick**

> **HOW MANY? → MULTIPLICITY**

# **📏 5\. Does it restrict what is allowed?**

Requirement:

> "A member cannot borrow a book that is already borrowed."

That's not merely stored information.

It's a rule governing valid behaviour.

📏 **Domain rule**

Before allowing the borrowing operation, the domain needs to ensure that the Book is available.

### **Memory trick**

> **MUST / CANNOT / ONLY IF / MAXIMUM → probably a DOMAIN RULE**

Notice that one sentence can represent **more than one concept**.

"Maximum three books" concerns both:

🔢 multiplicity

and:

📏 a rule that the implementation must enforce.

# **🧱 6\. Does the concept deserve its own class?**

This is harder.

Suppose our requirements become:

> "For every loan, the system records the borrowing date, due date and return date."

We could initially think:

👤 Member ↔ 📕 Book

But now the **borrowing itself has information**:

📅 borrowing date

📅 due date

📅 return date

That gives us a clue that perhaps **Loan** is an important domain concept of its own:

👤 Member

↓

📄 Loan

↓

📕 Book

Now `Loan` can contain the information belonging specifically to that borrowing.

This is a common reason for introducing another class:

> **The relationship itself has meaningful state or behaviour.**

# **🧠 Don't mechanically turn every noun into a class**

Suppose the requirement says:

> "The member has a name."

The noun **name** appears.

That doesn't mean we automatically create:

🧱 `Name`

Most likely:

👤 Member  
→ name

is enough.

So noun hunting is merely a **starting technique**.

We still have to reason about the domain.

# **🔍 One sentence can contain several design clues**

Consider:

> "A member may borrow at most three available books."

Let's dissect it.

**Member**

→ candidate class 👤

**Book**

→ candidate class 📕

**Member borrows Book**

→ association 🔗

**at most three**

→ multiplicity/rule 🔢

**available**

→ state of Book 📦

**may borrow**

→ behaviour ⚙️

Suddenly one small English sentence tells us a lot about the object model.

# **🧩 Ask WHO should enforce the rule**

Finding the rule isn't enough.

Now GRASP enters.

Requirement:

> "A member may borrow at most three books."

Someone in the implementation must decide whether another book can be borrowed.

Ask:

> **Who already knows how many books the member currently has?**

Probably:

👤 **Member**

That's Information Expert reasoning.

But don't turn that into a mechanical rule that "Member must always do it." We examine the design and choose responsibilities based on the information and collaborations actually present.

# **🎯 A useful little decision tree**

When reading a requirement, ask:

**1\. What important THINGS exist?**

→ candidate **classes**

↓

**2\. What INFORMATION belongs to those things?**

→ candidate **attributes**

↓

**3\. What can those things DO?**

→ candidate **methods**

↓

**4\. Which things are CONNECTED?**

→ candidate **associations**

↓

**5\. HOW MANY can be connected?**

→ **multiplicity**

↓

**6\. What MUST or MUST NOT happen?**

→ **domain rules**

↓

**7\. Who has the INFORMATION needed to enforce those rules?**

→ **responsibility / GRASP**

This is an extremely useful reading technique for object-oriented requirements.

# **🔄 And notice the beautiful symmetry in A2**

In Part 1, we're largely moving:

📜 Requirement

→ 🧠 interpretation

→ 📐 design

→ 💻 implementation

But in Part 2 we're often travelling backwards:

💻 implementation

→ 🔎 classes, fields, methods and relationships

→ 📐 reconstructed design

→ ⚖️ compare against requirements

So we're learning to read the same object-oriented ideas **in both directions**.

# **🪜 Step 38 — Read Source Code Like a Detective**

This step is especially important for **Part 2**.

There, we don't begin with a trustworthy UML diagram of the current PawsHome implementation. We have to study the existing code and reconstruct what its design actually is.

## **💡 BACKGROUND & EXPLANATION**

Imagine we're given source code we've never seen before.

Don't try to understand the whole program immediately.

Instead, collect **clues**.

🔎 Classes  
🔎 Fields  
🔎 Constructors  
🔎 Collections  
🔎 Parameters  
🔎 Return types  
🔎 Method calls

Each tells us something different about the hidden design.

# **🧱 Clue 1 — Classes**

Suppose the program contains classes named:

**Library**

**Member**

**Book**

**Loan**

Our first observation is simple:

> These concepts exist as classes in the implementation.

So they belong in a diagram representing the **current implementation**.

We don't yet decide whether this is a *good* design.

That's crucial.

In reverse engineering:

> **Observe first. Evaluate later.**

# **📦 Clue 2 — Fields**

Suppose `Member` contains fields representing:

**name**

**memberId**

**loans**

Those fields reveal what a Member object stores.

Simple values such as:

**name → string**

are likely attributes.

But:

**loans → collection of Loan objects**

is much more interesting.

That can reveal a **relationship between classes**.

# **🔗 Clue 3 — Object references**

Suppose `Loan` stores a reference to a `Book`.

That tells us:

📄 Loan → 📕 Book

There is some relationship in the implementation.

Then we investigate further:

> Does Book also reference Loan?

If yes, perhaps the relationship is **bidirectional**.

If not, perhaps navigation only exists:

**Loan → Book**

This matters in Part 3 too, because the assignment specifically asks us to verify the AI's interpretation of **navigability**.

# **📚 Clue 4 — Collections**

Collections are especially useful.

Suppose `Library` contains:

**books: List\<Book\>**

That strongly suggests:

🏛️ Library → many Books

But we need to be careful.

A collection alone doesn't automatically prove every domain constraint.

For example:

**List\<Book\>**

could technically hold:

0 books

1 book

500 books

So the code may suggest:

**0..\***

unless additional implementation logic restricts it.

This is why reverse engineering requires more than simply translating data types into UML.

# **🔢 Clue 5 — Look for enforcement of multiplicity**

Suppose Member has:

**List\<Book\> borrowedBooks**

But the requirements say:

> Maximum three books.

Does the implementation actually check:

> Is the list already size 3?

If yes:

💻 implementation enforces the maximum.

If not:

📜 specification may say **0..3**

but:

💻 implementation may effectively permit **0..\***

That difference is exactly the sort of thing Part 2 wants us to discover.

The **current class diagram describes the implementation**, not what we wish the implementation did.

# **🏭 Clue 6 — Constructors**

Constructors tell us a great deal about object creation.

Ask:

> Who is allowed to create this object?

> What information is required when it is created?

> Does creation immediately establish relationships?

For example, if creating a `Loan` requires:

👤 Member

📕 Book

📅 date

then those constructor requirements tell us something about the object's required state.

Constructors can therefore provide clues about:

🏭 creation responsibility

🔗 mandatory relationships

📏 invariants

# **📥 Clue 7 — Method parameters**

Suppose we discover an operation conceptually like:

**borrowBook(Book book)**

The parameter tells us that the Member operation needs a Book object.

That's evidence of interaction between:

👤 Member

and:

📕 Book

Parameters can therefore reveal **dependencies and collaborations** even when no permanent reference is stored.

# **📤 Clue 8 — Return types**

Return types also reveal relationships.

Suppose:

**findBook(...) → Book**

or:

**getLoans() → List\<Loan\>**

That tells us what kinds of objects a class exposes or works with.

Again, don't immediately draw every mentioned type as a permanent association.

Ask:

> Is this object actually stored?

> Is it merely temporarily used?

> Is it returned?

> Is it passed as an argument?

These differences help distinguish stronger structural relationships from weaker dependencies.

# **⚙️ Clue 9 — Method bodies**

Now we get to one of the richest sources of evidence.

Suppose `borrowBook()` conceptually does this:

1. Check whether the Book is available.  
2. Check how many Books the Member already has.  
3. Create a Loan.  
4. Mark the Book as borrowed.  
5. Add the Loan to the Member.

Now we learn far more than we could from method names alone.

We discover:

📏 rules

🏭 object creation

🔗 relationships

🔄 state changes

🧩 responsibilities

and perhaps:

👨‍🔬 Information Expert decisions.

# **📞 Clue 10 — Method calls**

Method calls are particularly important for **sequence diagrams**.

Suppose:

**LibraryService**

calls:

→ `member.canBorrow()`

then:

→ `book.isAvailable()`

then:

→ `member.borrow(book)`

That gives us clues about the **actual order of collaboration**.

For a sequence diagram, this is gold.

We can trace:

**Object A calls Object B**

↓

**B calls C**

↓

**C returns**

↓

**A calls D**

Now the dynamic behaviour of the system begins to appear.

# **🧬 Clue 11 — Inheritance**

Suppose we find:

**Student extends Person**

Then the implementation explicitly contains inheritance.

Our current class diagram should represent that.

Again:

💻 Code says it exists.

Therefore:

📐 current diagram should show it.

Whether inheritance was the best design choice is a **later design-analysis question**.

# **⚠️ The biggest reverse-engineering trap**

Imagine the specification says:

> A Member may borrow at most three Books.

We inspect the code.

There is no check.

It's tempting to draw:

**Member → Book 0..3**

because we know that's what the program **should** enforce.

But then we're drawing the specification rather than reverse-engineering the implementation.

For a **current-system diagram**, that can be wrong.

The correct question is:

> **What does this implementation actually permit?**

That distinction is fundamental to PawsHome Part 2\. The assignment specifically requires the current diagrams to describe the existing implementation and asks you to discuss discrepancies between that implementation and the specification. assignment\_2

# **🕵️ The reverse-engineering detective checklist**

When opening an unfamiliar class, mentally ask:

**1\. What class is this?**  
→ candidate UML class

**2\. What does it store?**  
→ attributes / relationships

**3\. What other objects does it reference?**  
→ associations

**4\. Does it store collections?**  
→ possible multi-valued relationships

**5\. What do its constructors require?**  
→ creation/invariants/required relationships

**6\. What methods does it expose?**  
→ operations

**7\. What parameters and return types appear?**  
→ dependencies/collaborations

**8\. What rules are actually checked?**  
→ implemented domain rules

**9\. Which other methods does it call?**  
→ sequence behaviour

**10\. What happens when something goes wrong?**  
→ validation/error handling

# **🧠 The golden rule**

When reverse engineering, separate these two thoughts:

🔎 **OBSERVATION**

> "This is what the code does."

from:

💡 **EVALUATION**

> "This is what I think the code should do."

That distinction is absolutely central to A2.

First become the **archaeologist**:

🔎 uncover the existing design.

Later become the **architect**:

✨ evaluate and improve it.

# **🪜 Step 39 — Association, Dependency and Navigability**

These concepts are closely related, so they are easy to mix up when reverse-engineering code.

The central question is:

> **How exactly does one object know about or use another object?**

# **🔗 1\. Association — a structural relationship**

## **💡 BACKGROUND & EXPLANATION**

An **association** usually represents a relationship that forms part of the object's structure.

Using our imaginary Library example:

👤 **Member**

stores its:

📄 **Loans**

That isn't merely a temporary interaction. The Member maintains a relationship with those Loan objects.

Conceptually:

**Member ─── Loan**

That's a strong clue for an association.

A useful question is:

> **Does object A keep a reference to object B as part of its state?**

If yes, an association is often involved.

# **🔌 2\. Dependency — “I need you temporarily”**

Now imagine a `ReportGenerator`.

It doesn't permanently store a `Library`, but one operation receives a Library, reads some information from it and generates a report.

So:

📊 ReportGenerator

temporarily **uses**

🏛️ Library

This can represent a **dependency** rather than a permanent association.

Think:

> **Association \= I KNOW/HAVE you.**

> **Dependency \= I USE you.**

# **🔎 How can code reveal the difference?**

Suppose Class A contains something conceptually equivalent to:

**a field containing B**

That strongly suggests:

A 🔗 B

an association.

But suppose B appears only as:

**a method parameter**

or as a temporary local object inside a method.

That may instead indicate:

A 🔌 B

a dependency.

This isn't a purely mechanical rule, but it's an excellent starting point when reverse engineering.

# **➡️ 3\. Navigability — which direction can we travel?**

This is slightly different.

Suppose a `Member` stores its Loans:

👤 Member

→ 📄 Loan

But Loan does **not** store a reference back to Member.

Then, from the object structure, we can navigate:

**Member → Loan**

but perhaps not:

**Loan → Member**

That's **navigability**.

# **↔️ What if both objects reference each other?**

Suppose:

👤 Member stores Loans

and:

📄 Loan stores its Member.

Now we can navigate:

**Member → Loan**

and:

**Loan → Member**

So the relationship is effectively **bidirectional**.

↔️

# **🧠 Association and navigability answer different questions**

This distinction is useful:

### **🔗 Association**

> **Are these classes structurally related?**

### **➡️ Navigability**

> **From which direction can one object reach the other?**

So we might have an association between A and B while still needing to determine whether navigation is:

**A → B**

**A ← B**

or:

**A ↔ B**

# **🔢 Multiplicity is yet another question**

Now add multiplicity.

Suppose:

👤 Member → 📄 Loan

Member stores:

**List of Loans**

while every Loan stores exactly one Member.

We now have several different pieces of information:

🔗 **Association**  
Member and Loan are structurally related.

➡️ **Navigability**  
Perhaps both can reach each other.

🔢 **Multiplicity**  
One Member can have many Loans, while each Loan has one Member.

These concepts describe different aspects of the **same relationship**.

# **🕵️ Why this matters in PawsHome**

## **📜 FROM THE GITLAB MATERIAL**

In Part 3, the supplied template specifically asks you to verify the AI-generated class diagram against the actual implementation, including:

🔗 associations

🔢 multiplicities

➡️ navigability

🔌 dependencies. genai\_log\_template

That means the teacher doesn't want us merely to ask:

> "Did AI find the correct classes?"

We need to examine the relationships more precisely.

# **🤖 Imagine the AI says...**

Suppose AI draws:

**A ↔ B**

But we inspect the implementation and discover:

A permanently stores B.

B never stores A.

Then AI may have correctly discovered:

✅ the relationship

while incorrectly representing:

❌ its navigability.

That's why Part 3 evaluates individual details rather than simply declaring the whole diagram right or wrong.

# **🧩 Another example**

Imagine:

**PaymentService**

has a method that temporarily receives a `Member`.

But PaymentService never stores that Member.

If AI turns this into a strong permanent association:

**PaymentService ─── Member**

we should investigate whether the code actually supports that interpretation.

Perhaps what really exists is merely:

**PaymentService \--→ Member**

a dependency.

# **🔍 A useful reverse-engineering test**

When class A mentions class B, ask:

### **Question 1**

**Does A store B as part of its state?**

Likely:

🔗 Association

### **Question 2**

**Does A only use B temporarily in an operation?**

Possibly:

🔌 Dependency

### **Question 3**

**Can A obtain B?**

Then:

➡️ A can navigate to B.

### **Question 4**

**Can B also obtain A?**

If yes:

↔️ potentially bidirectional navigability.

### **Question 5**

**How many Bs can A be connected to?**

Now we're asking about:

🔢 Multiplicity.

# **🧠 The memory trick**

Keep these four questions separate:

**Association**

🔗 **WHO is structurally connected?**

**Multiplicity**

🔢 **HOW MANY?**

**Navigability**

➡️ **WHICH DIRECTION can we navigate?**

**Dependency**

🔌 **WHO temporarily USES whom?**

Once you separate those four questions, UML class diagrams become much easier to reason about.

# **🪜 Step 40 — Learn to Recognize GRASP Problems in Existing Code**

Now we're moving from:

> **What does the code do?**

to:

> **Are the responsibilities placed sensibly?**

This is particularly important in **PawsHome Part 2**, because the assignment asks you to identify design/GRASP problems and recommend improvements. assignment\_2

# **🧩 Start with responsibility, not pattern names**

## **💡 BACKGROUND & EXPLANATION**

When reading unfamiliar code, don't begin by desperately searching for:

> "Where is the GRASP violation?" 😵

Instead ask:

> **What is this class responsible for?**

Then:

> **Does that responsibility naturally belong here?**

GRASP gives us vocabulary for explaining what we discover.

# **🎯 Problem 1 — Low Cohesion**

Remember:

> **Cohesion \= how well the responsibilities WITHIN one class belong together.**

Imagine our Library system has a class called `Library`.

It:

📚 manages books

👤 registers members

📕 handles borrowing

💰 calculates payments

🖥️ prints menus

⌨️ reads keyboard input

💾 saves files

📧 sends emails

That's a suspicious amount of unrelated work.

## **🔎 What would we observe?**

Perhaps the class is:

📏 extremely large

⚙️ full of unrelated methods

📦 storing many unrelated pieces of data

🔗 interacting with almost everything

That gives us evidence that the class may have:

📉 **low cohesion**

Its responsibilities don't form one clear, focused purpose.

# **🕸️ Problem 2 — High Coupling**

Remember:

> **Coupling \= dependencies BETWEEN classes.**

Imagine `Member` directly knows about:

Library

Book

Loan

Database

ConsoleMenu

EmailSender

PaymentProcessor

ReportGenerator

Now changing another part of the application might constantly affect `Member`.

That can indicate:

🕸️ **high coupling**

## **💡 But coupling isn't automatically bad**

Objects have to collaborate.

A program where no class knows anything about another class wouldn't accomplish very much.

The question is:

> **Are these dependencies actually necessary?**

GRASP generally encourages:

🔗 **Low Coupling**

not:

🚫 **Zero Coupling**

# **👨‍🔬 Problem 3 — Information Expert violation**

Suppose we need to determine:

> "Can this Member borrow another Book?"

The `Member` already knows its borrowed books.

But imagine some unrelated class retrieves the Member's complete list, counts it externally and decides whether borrowing is permitted.

We might ask:

> Why is that other class making a decision based on information that naturally belongs to Member?

That could indicate a misplaced responsibility.

## **👨‍🔬 Information Expert asks:**

> **Which object already has the information required to perform this responsibility?**

Often that object is a strong candidate for owning the behaviour.

# **📦 Objects shouldn't become mere bags of data**

Imagine `Member` contains:

name

ID

borrowed books

but does practically nothing.

Meanwhile a huge `LibraryManager` class continually asks:

> Give me your books.

> Give me your ID.

> Give me your state.

and then makes every domain decision itself.

We may have objects that are little more than data containers while another class performs all the meaningful behaviour.

That can be a clue that responsibilities are misplaced.

# **🏭 Problem 4 — Questionable creation responsibility**

GRASP **Creator** asks us to think about who should create objects.

Suppose an unrelated UI class creates important domain objects and manually assembles all their relationships.

We can ask:

> Is this really the object that naturally owns, contains, records or closely uses the object being created?

If not, creation responsibility may be poorly placed.

Again, we don't judge merely from the class name.

We inspect what the code actually does.

# **🎮 Problem 5 — Controller responsibilities can become overloaded**

A controller can receive a system operation and coordinate the work.

That's perfectly reasonable.

But imagine one controller:

🖥️ handles user input

📏 contains all domain rules

🏭 creates everything

📦 directly manipulates every object's data

💾 handles persistence

📧 sends notifications

🧮 performs calculations

Then it has stopped merely coordinating and has become the entire application.

This can create:

📉 low cohesion

🕸️ high coupling

👨‍🔬 misplaced Information Expert responsibilities

all at once.

# **🔗 One bad responsibility can cause several problems**

This is important.

GRASP problems aren't necessarily isolated.

Imagine one giant class performs almost everything.

We might observe:

**Too many unrelated responsibilities**

→ 📉 Low Cohesion

At the same time:

**It needs to know about almost every other class**

→ 🕸️ High Coupling

And:

**It performs calculations using information naturally belonging to other objects**

→ 👨‍🔬 Information Expert problem

These are different ways of describing aspects of the same underlying design problem.

# **🕵️ How to find this in existing code**

When reading a class, ask:

### **1️⃣ What responsibilities does this class have?**

Write them mentally as verbs:

register

validate

approve

calculate

print

store

find

create

schedule

etc.

### **2️⃣ Do those responsibilities belong together?**

If yes:

🎯 potentially high cohesion.

If they're wildly unrelated:

📉 investigate possible low cohesion.

### **3️⃣ How many other classes does it need to know about?**

A large number isn't automatically wrong.

But ask:

> Why does it need all these dependencies?

That can reveal coupling problems.

### **4️⃣ Does another object already have the required information?**

If yes, ask:

> Should the behaviour perhaps belong there instead?

That's Information Expert reasoning.

### **5️⃣ Is the class coordinating or doing everything itself?**

Coordination can be appropriate.

Doing all domain work centrally may indicate misplaced responsibilities.

# **⚠️ Don't write “GRASP violation” without evidence**

This will matter when you eventually write the actual analysis.

A weak statement would be:

> "This class violates High Cohesion."

Why?

What exactly did we observe?

A stronger reasoning pattern is:

🔎 **Observation**

The class performs several unrelated responsibilities.

↓

🧩 **Design interpretation**

Those responsibilities do not form a focused purpose.

↓

📉 **GRASP connection**

This suggests low cohesion.

↓

✨ **Recommendation**

Redistribute appropriate responsibilities to objects that naturally own the relevant information.

# **🧠 This is the important pattern**

Don't start with:

> **GRASP says X, therefore the code is bad.**

Start with:

> **I observed X in the code.**

↓

> **Why might X create a design problem?**

↓

> **Which GRASP principle helps explain it?**

That makes GRASP a tool for **reasoning about actual software**, rather than just terminology to memorize.

# **🔑 Three especially useful questions**

When you're eventually inspecting PawsHome, these three questions will take you surprisingly far:

> 🎯 **Does this class have too many unrelated responsibilities?**

Possible cohesion problem.

> 🕸️ **Does this class depend unnecessarily on many others?**

Possible coupling problem.

> 👨‍🔬 **Is this responsibility located with the object that has the information needed to perform it?**

Possible Information Expert problem.

Those are excellent detective questions for Part 2\.

# **🪜 Step 41 — Write a Strong Design-Analysis Paragraph**

Now we move from **finding a design problem** to **explaining it convincingly**.

## **📜 FROM THE GITLAB ASSIGNMENT**

For PawsHome, Part 2 doesn't only ask us to identify problems. The report must analyze issues such as GRASP/design principles and provide **recommendations with justification**. assignment\_2

So simply writing:

> "This has low cohesion."

isn't enough.

We need to show **why**.

# **💡 BACKGROUND & EXPLANATION**

A very useful pattern is:

**🔎 Evidence**

↓

**⚠️ Problem**

↓

**🧩 Principle**

↓

**✨ Improvement**

↓

**🎯 Benefit**

Let's use our imaginary Library example.

# **🔎 1\. EVIDENCE — What does the code actually show?**

Start with something observable.

For example:

> The `LibraryManager` handles console input, manages members, performs borrowing validation and creates loan records.

Notice that we haven't judged anything yet.

We're simply saying:

> **This is what we observed.**

That gives our argument a foundation.

# **⚠️ 2\. PROBLEM — Why could this be undesirable?**

Now interpret the observation:

> These responsibilities concern different aspects of the system and give `LibraryManager` several unrelated reasons to change.

Now we're explaining the design problem.

Perhaps:

🖥️ UI changes affect it.

📏 Domain-rule changes affect it.

📄 Loan-management changes affect it.

That's more meaningful than simply saying:

> "The class is bad."

# **🧩 3\. PRINCIPLE — Connect it to GRASP**

Now we have enough evidence to introduce the terminology:

> This suggests **low cohesion**, because the class contains responsibilities that do not form one focused purpose.

Now GRASP is doing useful work.

We're using the principle to **describe an observed design problem**.

# **✨ 4\. IMPROVEMENT — What should change?**

Next:

> The borrowing rules could instead be assigned to the domain objects that contain the information needed to evaluate them, while the UI responsibility remains separate.

Now we're proposing an improvement.

Potentially this also connects to:

👨‍🔬 **Information Expert**

because we're asking which object has the relevant information.

# **🎯 5\. BENEFIT — Why is the new design better?**

Don't stop at:

> "Move this method."

Explain the reason.

For example:

> This would give the classes more focused responsibilities and reduce the amount of domain knowledge required by `LibraryManager`.

Now we've connected the recommendation to actual design quality:

🎯 higher cohesion

🕸️ potentially lower coupling

🧩 clearer responsibilities

# **🧠 Put the whole argument together**

Conceptually, our paragraph now says:

> **Evidence:** `LibraryManager` handles console interaction, borrowing validation and loan creation.

> **Problem:** These are several different responsibilities.

> **GRASP:** This suggests low cohesion. Some domain decisions may also be placed away from the Information Expert.

> **Improvement:** Move appropriate domain behaviour to the objects that own the necessary information and keep UI responsibilities separate.

> **Benefit:** Responsibilities become more focused and the design requires fewer unnecessary dependencies.

That's an actual **design argument**.

# **❌ Compare that with a weak analysis**

Weak:

> "LibraryManager has low cohesion and high coupling. It violates GRASP and should be improved."

The terminology sounds impressive.

But the obvious question is:

> **How do you know?**

There's no evidence.

# **✅ Strong analysis**

Strong:

> "LibraryManager performs A, B and C. These responsibilities concern different parts of the system. It also directly depends on X, Y and Z to perform them. This gives the class several unrelated responsibilities and increases its dependencies, indicating low cohesion and potentially unnecessary coupling. Responsibility B could instead be placed with Y, which already contains the information required to perform it."

Now we can follow the reasoning.

The reader doesn't have to trust our opinion.

# **🔗 The same pattern works for coupling**

Suppose we find:

🔎 **Evidence**

Class A directly depends on B, C, D, E and F.

↓

⚠️ **Problem**

A change in several other parts of the system may affect A.

↓

🧩 **Principle**

Possible **High Coupling**.

↓

✨ **Improvement**

Remove unnecessary dependencies or move responsibilities.

↓

🎯 **Benefit**

Changes become more localized.

# **👨‍🔬 And for Information Expert**

🔎 **Evidence**

Class A retrieves information from B and performs a calculation entirely based on B's data.

↓

⚠️ **Problem**

A must understand details belonging to B.

↓

🧩 **Principle**

Possible **Information Expert** problem.

↓

✨ **Improvement**

Consider placing the behaviour with B.

↓

🎯 **Benefit**

The information and the behaviour using that information stay together.

# **⚠️ One important academic habit**

Avoid writing:

> "This definitely violates GRASP."

unless the evidence genuinely supports such a strong conclusion.

Sometimes better wording is:

> "This suggests low cohesion..."

or:

> "This creates unnecessary coupling because..."

or:

> "Class X appears to be a better Information Expert because..."

Software design often involves **reasoned choices**, not mathematical proofs.

# **🔑 The formula to remember**

When you eventually write your actual PawsHome analysis, remember:

### **🔎 E — Evidence**

**What exactly did we observe?**

### **⚠️ P — Problem**

**Why could that cause difficulty?**

### **🧩 G — GRASP**

**Which design principle explains the problem?**

### **✨ I — Improvement**

**What could be changed?**

### **🎯 B — Benefit**

**Why would that change improve the design?**

Or simply:

> **Evidence → Problem → Principle → Improvement → Benefit**

That's a very strong structure for turning code observations into a proper software-design argument.

# **🪜 Step 42 — Error Handling: Invalid Argument vs Invalid State**

Error handling in A2 is not just about stopping the program from crashing. It is part of the **object-oriented design** because our objects must protect their own rules.

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification gives us a particularly clear rule:

If an operation would violate a rule:

⚠️ the operation must fail

🔒 the system must not be partially changed

🏷️ the exception message must identify the relevant rule ID.

It then distinguishes two exception types:

**`IllegalArgumentException`** → invalid input/argument

**`IllegalStateException`** → the object's current state makes the operation invalid. crescendo\_music\_school

# **📥 1\. What is an invalid argument?**

## **💡 BACKGROUND & EXPLANATION**

An **argument** is information we give to an operation.

Imagine our fictional Library has:

**registerMember(name, email)**

Someone supplies:

**name \= ""**

The problem is with the information being supplied.

The operation could be perfectly valid in principle — but this particular input isn't acceptable.

Think:

> 📥 **"You gave me something invalid."**

That is the basic idea behind:

**`IllegalArgumentException`**

# **🔒 2\. What is an invalid state?**

Now imagine:

📕 Book is already borrowed.

Someone tries:

> Borrow this Book.

There might be absolutely nothing wrong with the Book argument itself.

It's a perfectly real Book.

The problem is:

> **The operation cannot be performed because of the current state of the system/object.**

Think:

> 🔒 **"You cannot do that right now."**

That is the basic idea behind:

**`IllegalStateException`**

# **🧠 The easiest distinction**

Ask:

### **📥 Is the thing supplied to the operation invalid?**

→ **IllegalArgumentException**

### **🔒 Is the requested operation invalid because of the current state?**

→ **IllegalStateException**

# **📏 But both can represent domain-rule violations**

This is important.

A **domain-rule violation** is the broader concept.

For example:

> A member cannot borrow more than three books.

That's a domain rule.

If the member already has three books and attempts another borrowing, the problem concerns the existing state:

👤📕📕📕

Therefore an implementation might represent that as an illegal-state situation.

So:

📏 **Domain rule**

describes **what must be true**.

The exception describes:

⚠️ **how the program reports that the attempted operation isn't permitted.**

# **🧱 Invalid object state is even deeper**

Suppose our design says:

> A Book must always have a non-empty title.

We don't want this:

📕 Book  
title \= ""

to become a normal valid object state.

Good domain objects try to protect their **invariants**.

An invariant is essentially:

> **Something that should remain true for every valid object of this type.**

So rather than allowing an invalid Book to exist and hoping somebody notices later, the object should protect itself.

# **💥 The most important rule: no partial update**

### **📜 FROM THE GITLAB MATERIAL**

Crescendo explicitly requires that when a rule violation causes an operation to fail:

> **nothing should be partially updated.** crescendo\_music\_school

This is extremely important.

# **😱 Imagine this bad sequence**

Our fictional borrowing operation does:

1️⃣ Add Book to Member's borrowed books.

2️⃣ Mark Book unavailable.

3️⃣ Check whether Member already had three books.

4️⃣ Discover violation.

5️⃣ Throw exception.

Oops.

The operation failed...

but we've already changed the system.

# **❌ We could now have inconsistent state**

Perhaps:

👤 Member thinks they borrowed the Book

while:

📕 another part of the system thinks the operation failed.

That's dangerous.

Instead, conceptually:

🔎 **Validate first**

↓

📏 **Check rules**

↓

✅ Everything valid?

↓

🔄 **Perform state changes**

So failure leaves the system as it was before the operation.

# **🔗 This connects directly to encapsulation**

Remember Step 17\.

Why shouldn't everyone freely manipulate an object's internal collections?

Because then someone could bypass the rules.

If external code can directly insert another course into a student's internal course list, for example, it could potentially bypass the object's enrollment behaviour.

Encapsulation lets us say:

> 🔒 **Changes to my state happen through controlled operations that protect my rules.**

That's why encapsulation, validation and domain rules fit together.

# **🎼 Crescendo makes this especially visible**

The supplied specification has explicit rule IDs such as:

**R3.2** — Student maximum three courses.

**R5.3** — Course cannot exceed capacity.

**R6.3** — Tuition fee amount must be greater than zero.

**R6.4** — A tuition fee cannot be paid twice. crescendo\_music\_school crescendo\_music\_school

Those rules are not merely documentation.

The implementation is expected to **protect them**.

# **🏷️ Why put the rule ID in the exception?**

Suppose something fails and we receive:

> Error.

Not very useful.

But if the exception identifies:

**R5.3**

we immediately know which specification rule was violated.

That connects:

📜 specification

↓

💻 implementation

↓

⚠️ runtime error

It also makes the behaviour much easier to test and trace.

# **🔑 The mental model**

When something goes wrong, ask these questions in order:

**1\. What rule applies?**

📏 Domain rule

↓

**2\. Is the supplied information invalid?**

📥 Illegal argument

OR

**3\. Is the requested action impossible because of current state?**

🔒 Illegal state

↓

**4\. Has anything already been changed?**

If failure occurs:

🚫 there should be no partial update.

↓

**5\. Does the error identify the relevant rule clearly?**

🏷️ In Crescendo, include the rule ID.

# **🧠 One sentence to remember**

> **Arguments tell us what was supplied; state tells us what situation the object is currently in; domain rules determine what combinations and operations are allowed.**

That distinction will make the error-handling parts of A2 much easier to reason about.

# **🪜 Step 43 — Understand Invariants**

We have already talked about:

📏 domain rules

🔒 encapsulation

🔢 multiplicity

🏗️ constructors

⚠️ error handling

These may seem like separate topics, but one important OOP idea connects them:

> **The invariant.**

# **🧠 What is an invariant?**

## **💡 BACKGROUND & EXPLANATION**

An **invariant** is a condition that should always be true whenever an object is in a valid state.

Imagine our fictional `Book`.

We decide:

> Every Book must have a title.

Then this is valid:

📕 Book  
title \= `"The Hobbit"`

But this is not:

📕 Book  
title \= `""`

The idea is:

> **A valid Book should never exist in the second state.**

That's an invariant.

# **🏗️ Constructors establish invariants**

When an object is first created, its constructor has an important job:

> **Make sure the object starts life in a valid state.**

Suppose a Book requires:

📕 title

✍️ author

🔢 ISBN

If title is required, we shouldn't create the Book first with no title and hope somebody fixes it later.

Conceptually:

❌ create invalid object → repair later

Better:

✅ validate → create valid object

# **🔒 Methods preserve invariants**

But creating a valid object isn't enough.

The object must **remain valid**.

Imagine:

👤 Member may borrow at most 3 books.

Initially:

👤 → 0 books

Valid. ✅

Then:

👤 → 1 book

Valid. ✅

Then:

👤 → 2 books

Valid. ✅

Then:

👤 → 3 books

Valid. ✅

Another borrowing attempt would produce:

👤 → 4 books

Invalid. ❌

So the borrowing operation must prevent that transition.

# **🔄 Think in terms of state transitions**

This is a powerful way to understand objects.

An object has:

📦 **CURRENT STATE**

An operation attempts:

⚙️ **CHANGE**

The result would be:

📦 **NEW STATE**

Before accepting that change, we ask:

> **Would the object's invariants still hold?**

If yes:

✅ perform operation.

If no:

❌ reject operation.

# **🔢 Multiplicity can represent an invariant**

Suppose UML says:

**Member → Book 0..3**

That isn't merely decoration on the diagram.

It expresses something that should remain true:

> A Member must never be associated with more than three Books.

So multiplicity can correspond to an invariant that the implementation needs to protect.

# **💎 Composition can involve invariants too**

Suppose a `Loan` must always belong to exactly one Member.

Then:

📄 Loan → 👤 Member **1**

means a Loan without a Member may represent an invalid state.

Again, UML and implementation connect:

📐 **UML says `1`**

↓

📏 **Domain says exactly one is required**

↓

💻 **Implementation should preserve that condition**

# **🔒 Now encapsulation makes even more sense**

Why make internal state private?

Because if anybody can change it directly, the object cannot protect its invariants.

Imagine Member correctly implements:

⚙️ `borrowBook()`

and carefully prevents a fourth book.

Great.

But then external code can directly manipulate:

📚 `borrowedBooks`

and add books itself.

Our beautiful rule becomes useless.

That's one of the deeper reasons for encapsulation:

> 🔒 **An object needs control over changes to its state so it can preserve its invariants.**

# **⚠️ Error handling protects invariants**

Now Step 42 connects too.

Someone requests an operation that would create an invalid state.

The object says:

🚫 No.

An exception communicates the failure.

But crucially:

> **The object remains valid.**

Before:

👤📕📕📕 \= valid

Attempt fourth book:

❌ rejected

After:

👤📕📕📕 \= still valid

That's why the Crescendo requirement that a failed operation must not partially update the system is so important. crescendo\_music\_school

# **🎼 We can see this idea throughout Crescendo**

### **📜 FROM THE GITLAB MATERIAL**

For example, the supplied specification says a Student can have at most three courses and only courses at the student's level. crescendo\_music\_school

So valid Student state must respect those restrictions.

Likewise, a Course has exactly one teacher and cannot contain more students than its capacity. crescendo\_music\_school

And a TuitionFee has rules governing amount, status and payment date. crescendo\_music\_school

These rules define what **valid domain states** look like.

# **🧩 Invariants connect many A2 concepts**

Now look at how everything fits:

📜 **Specification**

defines rules.

↓

📐 **UML**

represents some of those rules structurally.

↓

🏗️ **Constructor**

creates a valid initial object.

↓

🔒 **Encapsulation**

prevents uncontrolled modification.

↓

⚙️ **Methods**

provide controlled state changes.

↓

📏 **Validation**

checks whether changes are permitted.

↓

⚠️ **Exceptions**

reject invalid operations.

↓

🔢 **Multiplicity**

constrains relationships.

↓

🧠 **Invariant**

remains true throughout the object's valid lifetime.

# **🔎 This matters in reverse engineering too**

When examining existing code in Part 2, we can ask:

> **What conditions is this implementation actually protecting?**

Perhaps the specification says:

📏 X must always be true.

But when we inspect the code, nothing prevents X from becoming false.

That's an important gap.

So reverse engineering isn't merely discovering:

> "There is a class called Application."

We're also investigating:

> **What states can an Application actually enter, and what rules does the implementation really enforce?**

# **🔑 The sentence worth remembering**

If you remember only one thing from this step:

> **A constructor should establish valid state, and every later operation should preserve valid state.**

That's the essence of invariants.

And suddenly constructors, private fields, controlled methods, validation, multiplicity and exceptions stop looking like unrelated programming techniques.

They're all helping the objects **protect their own validity**.

# **🪜 Step 44 — Understand State Transitions**

We've just learned that objects have **valid states** and should protect their invariants.

Now we'll add another idea:

> **Objects can move from one valid state to another.**

That movement is a **state transition**.

# **💡 BACKGROUND & EXPLANATION**

Imagine something very simple:

💰 an unpaid invoice.

Its current state is:

**UNPAID**

Someone records a payment.

Its new state becomes:

**PAID**

So we have:

**UNPAID → record payment → PAID**

That's a state transition.

The object is still valid — but its state has changed.

# **🎼 Crescendo gives us a perfect example**

### **📜 FROM THE GITLAB MATERIAL**

`TuitionFee` has a `PaymentStatus` with:

**UNPAID**

**PAID**

The specification says that a new tuition fee begins:

**UNPAID**

with:

**no payment date**

When payment is recorded, it becomes:

**PAID**

and stores the payment date.

It also says that the same fee cannot be paid twice. crescendo\_music\_school

# **🔄 So we can picture its lifecycle**

When created:

💰 **UNPAID**  
📅 paymentDate \= none

↓

⚙️ record payment

↓

💰 **PAID**  
📅 paymentDate \= actual payment date

That's an allowed transition.

# **🚫 But not every transition is allowed**

What happens if we try:

💰 **PAID**

↓

⚙️ record payment again

↓

💰 **PAID again?**

The specification says:

🚫 **No.**

A TuitionFee cannot be paid twice. crescendo\_music\_school

So the current state determines which operations are legal.

# **🧠 This connects to `IllegalStateException`**

Now Step 42 becomes clearer.

Suppose we provide a perfectly valid payment date.

📅 The argument is fine.

But the TuitionFee is already:

**PAID**

The problem isn't:

> "You gave me an invalid date."

The problem is:

> "This operation isn't permitted in my current state."

That's the conceptual distinction behind an **illegal state**.

# **📊 Enums often represent important states**

`PaymentStatus` is an **enum**.

Instead of allowing arbitrary text such as:

"paid"

"Paid"

"finished"

"done"

"yes"

we define a limited set of meaningful values:

**UNPAID**

**PAID**

This makes the possible states explicit.

In Crescendo, the supplied class diagram includes `PaymentStatus` as an enum with those two values.

# **🔗 State can involve several attributes together**

Here's something deeper.

The state of TuitionFee isn't represented only by `status`.

These values are related:

### **Valid state A**

status \= **UNPAID**

paymentDate \= **none**

### **Valid state B**

status \= **PAID**

paymentDate \= **a date**

So the invariant concerns a **combination of attributes**.

We don't want:

❌ status \= UNPAID  
📅 paymentDate \= yesterday

or:

❌ status \= PAID  
📅 paymentDate \= none

The object's fields should tell one consistent story.

# **🔒 Encapsulation protects transitions**

Imagine external code could freely do:

change status to PAID

but forget to set the payment date.

We could create:

💰 PAID  
📅 no payment date

That's inconsistent.

Instead, a meaningful domain operation such as:

**recordPayment(...)**

can conceptually perform the complete transition:

🔎 verify current state

↓

📅 validate required information

↓

💰 update status

↓

📅 update payment date

↓

✅ valid new state

# **🎯 This explains why meaningful methods matter**

Compare these two designs conceptually.

### **Design A**

`setStatus()`

`setPaymentDate()`

The caller must know exactly how TuitionFee works internally.

Versus:

### **Design B**

`recordPayment()`

The caller says:

> **What I want to happen.**

And TuitionFee knows:

> **How to perform that transition correctly.**

That's a much more object-oriented way of thinking about behaviour.

# **⏱️ State transitions appear in sequence diagrams**

Suppose we're drawing a sequence diagram for paying a tuition fee.

The diagram might show an interaction that eventually causes:

**UNPAID → PAID**

The sequence diagram isn't primarily showing the states themselves.

It's showing the **interactions that cause the transition**.

So:

📐 **Class diagram**

shows what objects structurally exist.

📦 **Object state**

shows the object's current condition.

⚙️ **Operation**

causes behaviour.

⏱️ **Sequence diagram**

shows the interactions over time.

🔄 **State transition**

describes how the object's condition changes as a result.

# **🐕 This idea will matter in PawsHome too**

### **📜 FROM THE GITLAB MATERIAL**

The PawsHome specification contains several state-oriented rules.

For example, an adoption application begins as **pending**. It may later be withdrawn, approved or rejected under specified conditions. Approval also changes the animal to **adopted**, and other pending applications for that animal must be rejected. pawshome\_shelter

That means when reverse-engineering PawsHome, an important question is:

> **Does the implementation actually enforce the required transitions?**

Not merely:

> "Does it have a status field?"

# **🔎 That's a crucial distinction**

An implementation might contain:

📦 `status`

and therefore *look* correct structurally.

But perhaps it allows:

**PENDING → APPROVED**

without checking the required conditions.

Then:

📐 the structure may look plausible

but:

⚙️ the behaviour is wrong.

That's why Part 2 requires us to inspect actual implementation behaviour rather than only class names and fields.

# **🔑 The state-transition formula**

When examining an important operation, ask:

**1\. What is the state BEFORE?**

↓

**2\. What operation is requested?**

↓

**3\. Is that operation legal in this state?**

↓

**4\. What rules must be satisfied?**

↓

**5\. What changes?**

↓

**6\. What is the state AFTER?**

↓

**7\. Are all invariants still true?**

That is an excellent way to reason about object-oriented behaviour.

# **🪜 Step 45 — Understand Bidirectional Associations**

We've already learned that an **association** means objects are structurally related.

Now comes an important complication:

> **Sometimes both objects need to know about each other.**

That's a **bidirectional association**.

## **💡 BACKGROUND & EXPLANATION**

Return to our imaginary Library.

Suppose:

👤 **Member** knows which Books they have borrowed.

And:

📕 **Book** knows which Member currently has it.

Then information exists in **both directions**:

👤 Member ↔ 📕 Book

From Member we can find the Book.

From Book we can find the Member.

That's bidirectional navigability.

# **🔄 The tricky part: both ends must agree**

Imagine Alice borrows *The Hobbit*.

After the operation we should have:

👤 Alice says:

> "I have The Hobbit."

And:

📕 The Hobbit says:

> "Alice has me."

Everything agrees. ✅

# **😱 But imagine only one side gets updated**

Member:

👤 Alice → 📕 The Hobbit

But Book:

📕 The Hobbit → **nobody**

Now we have a contradiction.

Ask the Member:

> Who borrowed The Hobbit?

Answer:

> Alice.

Ask the Book:

> Who borrowed you?

Answer:

> Nobody.

💥 Our object model has become inconsistent.

# **📜 FROM THE GITLAB MATERIAL**

This matters directly in Crescendo.

The supplied instructions explain that association ends shown without navigability arrows are **bidirectional**, and both ends must agree. Multi-valued ends are represented using lists, while single-valued ends use object references. crescendo\_music\_school

So this isn't merely extra OOP theory — relationship consistency is explicitly part of the supplied Crescendo design.

# **🎼 Imagine Student and Course**

Conceptually, we have:

🎓 Student ↔ 🎼 Course

Student needs to know:

> Which courses am I enrolled in?

Course needs to know:

> Which students are enrolled in me?

Suppose Student enrolls in Piano.

Correct state:

🎓 Student  
→ contains Piano

AND:

🎼 Piano  
→ contains Student

# **❌ The dangerous version**

Imagine the operation changes only:

🎓 Student → Piano

but forgets:

🎼 Piano → Student

Now the program contains two different versions of reality.

Student says:

> "I'm enrolled."

Course says:

> "You're not enrolled."

That's precisely what we want to prevent.

# **🧠 Why bidirectional relationships require care**

A one-directional relationship is simpler:

**A → B**

Only A stores the relationship.

But with:

**A ↔ B**

we potentially have two pieces of state representing **one conceptual relationship**.

Therefore:

> **Changing the relationship may require keeping both ends synchronized.**

# **🔢 Multiplicity makes this even more important**

Suppose:

🎓 Student can take maximum 3 Courses.

And:

🎼 Course can contain students only up to its capacity.

An enrollment operation now has to respect **both objects' constraints**.

Conceptually, before establishing the relationship we may need to know:

🎓 Can Student take another course?

🎼 Is Course full?

🎓 Is Student already enrolled?

📏 Are the other domain rules satisfied?

Only then should the relationship be established consistently.

# **⚠️ Remember the no-partial-update rule**

This connects beautifully with Step 42\.

Imagine:

1️⃣ Add Course to Student.

2️⃣ Then discover Course is full.

3️⃣ Throw exception.

We've failed the operation...

but Student has already changed.

❌ Bad.

Instead the conceptual pattern is:

🔎 Check required conditions

↓

📏 Validate rules

↓

✅ Everything valid

↓

🔗 Update relationship consistently

↓

🎓 Student knows Course

AND

🎼 Course knows Student

# **🚪 Removing a relationship has the same problem**

Suppose Student withdraws.

Before:

🎓 Student ↔ 🎼 Course

After:

🎓 Student 🎼 Course

The relationship should disappear from **both ends**.

If we remove Student from Course but forget to remove Course from Student:

💥 inconsistency again.

So bidirectional relationships have two symmetrical problems:

➕ **Adding relationship**

Both ends must agree.

➖ **Removing relationship**

Both ends must agree.

# **💎 Composition can also have two perspectives**

Consider:

🎓 Student ◆── 💰 TuitionFee

The Student owns its TuitionFees.

But the supplied design also says each TuitionFee belongs to exactly one Student. crescendo\_music\_school

So conceptually:

Student knows:

> "These are my fees."

And a TuitionFee can know:

> "This is my Student."

Again, the object graph must tell a consistent story.

# **🕸️ Think of the whole program as an object graph**

This is a useful mental model.

Instead of imagining isolated boxes:

📦 📦 📦 📦

imagine objects connected by links:

👨‍🏫  
↕  
🎼 ↔ 🎓  
 ↕  
 💰

That's an **object graph**.

Operations don't merely change primitive values.

They can also:

➕ create links

➖ remove links

🔄 replace links

And every operation must leave the graph valid.

# **🔎 This becomes important in reverse engineering**

When examining PawsHome code, suppose we discover:

Class A stores B.

Then we inspect B.

Does B also store A?

If yes:

↔️ likely bidirectional.

If no:

➡️ likely one-directional.

And then ask:

> When the relationship changes, does the implementation keep all stored ends consistent?

That's a deeper analysis than simply noticing that two classes are related.

# **🤖 It also matters in Part 3**

If AI draws:

**A ↔ B**

we shouldn't accept that merely because A and B interact somewhere.

We inspect the implementation:

🔎 Does A permanently reference B?

🔎 Does B permanently reference A?

🔎 What are the multiplicities?

🔎 How are those relationships maintained?

Then we can judge whether the AI's association and navigability are actually correct.

# **🔑 The sentence to remember**

> **A bidirectional association represents one conceptual relationship stored from two directions, so both ends must always tell the same story.**

And that gives us a very useful rule:

**Before operation**

✅ object graph consistent

↓

⚙️ operation

↓

**After operation**

✅ object graph still consistent

That is one of the practical challenges of translating UML associations into working object-oriented software.

# **🪜 Step 46 — Protect Collections and Internal State**

We've learned that objects should protect their own invariants. Now imagine we carefully design a `Member` that allows at most three borrowed books — but then accidentally give outside code direct access to the Member's internal list.

Our protection can disappear completely.

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo material specifically warns that returned collections must **not expose internal state**. The UML instructions also say multi-valued associations are represented using collections such as Lists. crescendo\_music\_school

So this is an important part of understanding encapsulation.

# **💡 Imagine an internal list**

Our fictional Member conceptually contains:

👤 **Member**

📚 borrowedBooks

The Member carefully controls borrowing through:

⚙️ `borrowBook()`

That operation checks:

🔢 maximum 3 books

📕 book availability

🔁 duplicates

and other rules.

Excellent.

But Member also has:

⚙️ `getBorrowedBooks()`

What should that return?

That's where things get interesting.

# **😱 The dangerous version**

Imagine `getBorrowedBooks()` gives the caller the **actual internal collection**.

Now another part of the program obtains it.

Conceptually:

👤 Member

↓

📚 **actual internal borrowedBooks list**

↓

👨‍💻 outside code gets direct access

If that outside code can modify the list, it could potentially:

➕ add a fourth Book

➕ add the same Book twice

➖ remove Books without performing the proper return operation

🧹 clear the entire collection

The caller has walked around our carefully designed domain methods.

# **💥 Our encapsulation is broken**

We might have beautifully implemented:

⚙️ `borrowBook()`

with every possible validation.

But outside code effectively says:

> "Thanks, I'll just modify your list directly."

Then the object can no longer guarantee its own invariants.

This connects directly to Step 43:

> **An object needs control over changes to its state if it is going to protect its invariants.**

# **🔒 So what does “protect the collection” mean?**

The general idea is:

> **Outside code may be allowed to SEE the contents without being allowed to directly MODIFY the object's internal collection.**

Conceptually:

👤 Member owns:

🔒 📚 internal collection

Outside code asks:

> "Which Books have you borrowed?"

Member answers:

> "Here is information about them."

But not:

> "Here is my actual mutable internal container. Do whatever you want with it."

# **🪟 Think of it as a window**

A protected collection is like looking through a window.

👀 You can see:

📕 Book A  
📕 Book B  
📕 Book C

But you cannot reach through the window and rearrange the Member's internal state.

That's the basic idea.

# **🧠 Why have a getter at all?**

Because other objects may legitimately need to know:

> Which courses does this Student have?

> Which students are in this Course?

> Which fees belong to this Student?

So:

🚫 "Never expose any information"

isn't the goal.

The goal is:

> **Expose the information without surrendering control over the object's state.**

# **🎼 This matters a lot in Crescendo**

Consider:

🎓 Student ↔ 🎼 Course

Suppose Student protects:

> maximum three Courses.

If `getCourses()` exposes the actual mutable internal collection, external code might bypass the enrollment rules.

Likewise, Course has capacity restrictions. The specification says a Course contains between zero students and its capacity. crescendo\_music\_school

We don't want outside code to bypass that by directly manipulating the Course's student collection.

# **🔗 It also protects bidirectional associations**

Remember Step 45\.

Suppose Student and Course maintain:

🎓 Student ↔ 🎼 Course

through controlled enrollment and withdrawal operations.

Those operations carefully update **both ends**.

But then somebody directly removes Course from Student's exposed internal list.

We could get:

🎓 Student says:

> "I'm not enrolled."

while:

🎼 Course says:

> "Yes you are."

💥 Relationship inconsistency.

So protecting collections also protects the **object graph**.

# **🛡️ Common conceptual solutions**

There are several implementation techniques for doing this. At the conceptual level, the important possibilities are:

**Return a copy**

The caller receives another collection containing the same elements.

Changing that collection doesn't change the object's internal collection.

Or:

**Return a read-only/unmodifiable view**

The caller can inspect the collection but cannot modify it through that reference.

The exact implementation technique depends on the programming language and design.

The assignment-level principle is simpler:

> 🔒 **Do not allow callers to directly mutate your internal collection.**

# **⚠️ A subtle distinction**

Protecting the **collection** doesn't necessarily mean making every object inside it immutable.

Suppose Member returns a protected collection containing:

📕 Book A  
📕 Book B

The caller may still receive references to those Book objects.

So there are actually two different questions:

### **1️⃣ Can the caller modify the collection structure?**

Add/remove Books?

### **2️⃣ Can the caller interact with the Book objects themselves?**

Those are separate concerns.

For A2, the important point here is that the owner should not expose its internal mutable collection in a way that lets callers bypass its relationship rules.

# **🕵️ This is useful when reverse engineering too**

When studying existing code, don't merely ask:

> "Does this class have private fields?"

Also ask:

> "Can outside code still modify those fields indirectly?"

For example:

🔒 private collection

but:

🚪 getter returns the actual mutable collection

may provide much weaker encapsulation than it initially appears.

# **🧩 Now several earlier steps connect**

Consider how many concepts meet here:

🔒 **Encapsulation**

Object controls its state.

📏 **Domain rules**

Only valid changes are permitted.

🔢 **Multiplicity**

Collection size may have restrictions.

🔗 **Associations**

Collection may represent relationships.

↔️ **Bidirectional consistency**

Both ends must agree.

🧠 **Invariants**

Valid conditions must remain true.

⚙️ **Methods**

Controlled operations change the relationship.

Protecting an internal collection helps preserve **all of them**.

# **🔑 The sentence to remember**

> **A getter should let another object learn about your state without necessarily giving it permission to rewrite your state.**

That's a much deeper understanding of encapsulation than simply:

> "Make fields private."

# **🪜 Step 47 — Constructors, Creation Methods and GRASP Creator**

We already know how to create an object conceptually:

🏗️ call its constructor → get a new object.

But Crescendo adds an important design idea:

> **Just because an object needs to be created doesn't mean everybody in the program should be responsible for creating it.**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo material gives specific creation responsibilities:

🏫 `MusicSchool` creates/registers **Students**

🏫 `MusicSchool` creates/registers **Teachers**

🏫 `MusicSchool` creates **Courses**

🎓 `Student` creates/adds **TuitionFees**

The material explicitly asks us to consider which **GRASP principle** this reflects and how creation from outside should be prevented. crescendo\_music\_school

The GRASP principle involved is:

🏭 **Creator**

# **🏗️ First: what does a constructor do?**

## **💡 BACKGROUND & EXPLANATION**

A constructor initializes a newly created object.

Imagine our fictional Library:

📕 Book needs:

title

author

ISBN

When a Book is created, its constructor can ensure that it starts with the information it requires.

This connects directly to Step 43:

> **The constructor should establish a valid initial state.**

# **🏭 But who should CALL the constructor?**

That's a different question.

There are really two questions:

### **Question 1**

> How is a Book initialized?

🏗️ Constructor question.

### **Question 2**

> Which object should be responsible for creating Books?

🏭 Creator/responsibility question.

Those are not the same thing.

# **🎼 Look at Crescendo**

The specification says a Course belongs to a MusicSchool and cannot exist outside it. The school creates its courses. crescendo\_music\_school

Conceptually:

🏫 MusicSchool

↓

⚙️ `createCourse(...)`

↓

🏗️ Course is constructed

↓

🎼 Course

↓

🔗 MusicSchool now owns the Course

# **💡 Why not let anybody create Course?**

Imagine any random part of the application could create:

🎼 Course

directly.

Then we might get a Course that:

❌ doesn't belong to any MusicSchool

or perhaps:

❌ bypasses the school's unique-course-code rule.

But the domain says Courses belong to the school.

So allowing the school to control creation helps preserve that relationship and its rules.

# **🏭 This is GRASP Creator**

Creator asks:

> **Which object is a natural candidate to create another object?**

Useful clues include whether an object:

📦 contains another object

💎 owns it

📝 records it

🔗 closely uses it

or has the information required to initialize it.

Crescendo provides particularly clear ownership relationships.

# **💎 Composition and Creator fit together**

Remember composition:

🏫 MusicSchool ◆── 🎼 Course

The MusicSchool owns the Course's lifecycle.

So it makes conceptual sense that:

🏫 **MusicSchool creates Course**

rather than:

🖥️ Main creates Course

or:

👤 some unrelated object creates Course.

Composition asks:

> **Who owns this object?**

Creator asks:

> **Who should create it?**

Those questions often point toward the same object.

# **🎓 Student and TuitionFee**

Crescendo gives us another strong example:

🎓 Student ◆── 💰 TuitionFee

The specification says each TuitionFee belongs to exactly one Student and cannot exist without that Student. crescendo\_music\_school

Therefore the supplied design makes Student responsible for adding/creating its TuitionFee.

Conceptually:

🎓 Student

↓

⚙️ add tuition fee

↓

🏗️ TuitionFee created

↓

🎓 Student ◆── 💰 TuitionFee

# **🔒 Creation control protects invariants**

This connects with almost everything we've learned.

Suppose the domain says:

> A Student may have at most one TuitionFee for a particular term. crescendo\_music\_school

If anybody can independently create and attach TuitionFees however they like, protecting that rule becomes harder.

But if Student controls the operation:

🎓 Student receives request

↓

🔎 checks existing fees

↓

📏 validates rule

↓

🏗️ creates TuitionFee

↓

🔗 establishes ownership

then Student has a natural place to protect its invariant.

# **🖥️ Why shouldn't `Main` create everything?**

Remember that Crescendo's `Main` is the CLI boundary.

Its job is primarily:

⌨️ receive user interaction

🖥️ display information

and invoke the domain.

If `Main` itself starts deciding:

> "I'll construct this Course, connect this Teacher, update that collection and enforce this business rule..."

then domain knowledge begins leaking into the UI.

Instead, conceptually:

🖥️ Main says:

> "School, create a course."

Then:

🏫 MusicSchool knows how that domain operation should happen.

This supports the separation of concerns we discussed in Step 18\.

# **⚙️ A creation method can express domain meaning**

Compare these ideas:

🏗️ generic constructor call

versus:

🏫 `registerStudent(...)`

or:

🏫 `createCourse(...)`

or:

🎓 `addTuitionFee(...)`

The latter names describe **domain actions**.

They're telling us:

> What is happening in the problem domain?

rather than merely:

> Allocate another object.

# **🧠 This is another responsibility question**

Notice how often A2 returns to the same theme:

> **Who should be responsible for what?**

Who creates Course?

🏫 MusicSchool.

Who creates TuitionFee?

🎓 Student.

Why?

Because the relationships, ownership and domain information make those objects natural candidates.

That's GRASP thinking.

# **🔎 Creator is also useful in reverse engineering**

When studying existing code, we can ask:

> **Where is this object actually created?**

Suppose we discover:

🖥️ UI creates domain object A

then manually connects it to B

then manually changes C.

That might be worth investigating.

Perhaps creation responsibility is scattered.

Perhaps an object with stronger ownership or information would be a better Creator.

But remember our Part 2 rule:

First:

🔎 **document what the code currently does.**

Later:

🧩 **evaluate whether the responsibility is well placed.**

# **🔑 The important distinction**

Remember these three concepts separately:

🏗️ **Constructor**

> How does a new object become properly initialized?

🏭 **GRASP Creator**

> Which object should be responsible for causing that object to be created?

💎 **Composition**

> Which object strongly owns the created object's lifecycle?

They are different concepts, but they often work together.

And Crescendo deliberately gives us examples where they meet:

🏫 **MusicSchool ◆── Course**

🎓 **Student ◆── TuitionFee**

# **🪜 Step 48 — Understand GRASP Controller**

The word **Controller** can be confusing because many frameworks use “controller” to mean a particular kind of class.

In **GRASP**, the idea is broader:

> **Who should receive a system operation from the outside world and coordinate what happens next?**

That responsibility is the Controller idea.

## **📜 FROM THE GITLAB MATERIAL**

In Part 2, the PawsHome analysis asks you to consider GRASP/design problems, including whether responsibilities are appropriately placed. The assignment does not prescribe one particular Controller class or architecture. assignment\_2

So the explanation below is **background theory**, not a hidden requirement that you must create a class literally named `Controller`.

# **💡 Start with the boundary of the system**

Imagine our fictional Library program.

A user chooses:

> 📕 Borrow a book

Something must receive that request.

Conceptually:

👤 User

↓

🖥️ UI

↓

🎮 Controller responsibility

↓

📚 Domain objects

The Controller sits conceptually between an external request and the domain work needed to fulfil it.

# **🎮 What does the Controller actually do?**

Think:

> **Receive → coordinate → delegate**

For example:

👤 User requests borrowing

↓

🖥️ UI receives input

↓

🎮 Controller receives the system operation

↓

🎮 asks appropriate domain objects to perform their responsibilities

↓

📚 domain state changes

↓

🖥️ result eventually reaches user

# **⚠️ Controller does NOT mean “do everything”**

This is extremely important.

A badly designed Controller might become:

🐙 **THE GIANT OCTOPUS**

It:

* validates every domain rule  
* calculates everything  
* changes every object  
* creates everything  
* manages every relationship  
* formats output  
* saves data  
* sends notifications

Then we haven't really distributed responsibilities among our objects.

We've simply created one enormous procedural program inside a class called `Controller`.

# **❌ Imagine this**

`LibraryController` knows:

📚 Member's borrowing limit

📕 whether Book is available

📆 how loans calculate dates

💰 how fines work

📧 how notifications work

💾 how persistence works

🖥️ how information is displayed

That's probably too much responsibility for one class.

# **🧩 GRASP principles start interacting**

A Controller can be useful while still respecting:

🎯 **High Cohesion**

Keep its responsibilities focused.

🔗 **Low Coupling**

Avoid unnecessary dependencies.

👨‍🔬 **Information Expert**

Let objects containing the relevant information perform appropriate domain work.

🏭 **Creator**

Let appropriate objects handle creation.

So Controller does **not** override the other GRASP principles.

# **🧠 Think “orchestra conductor”**

This analogy works well.

🎻 Violinist plays violin.

🎺 Trumpeter plays trumpet.

🥁 Drummer plays drums.

The conductor:

🎼 coordinates.

The conductor doesn't run around playing every instrument personally.

Likewise:

> **A good Controller can coordinate domain objects without stealing all their responsibilities.**

# **🖥️ Controller versus UI**

These are also different ideas.

The UI handles things such as:

⌨️ reading user input

🖥️ displaying choices

📢 showing results

The Controller responsibility deals with:

> **What system operation should happen because of that request?**

And domain objects handle the actual business/domain responsibilities appropriate to them.

# **📚 Fictional example**

Suppose a user requests:

> Borrow Book X.

The UI shouldn't necessarily contain all the borrowing rules.

And the Controller shouldn't necessarily contain them either.

Instead, conceptually:

🖥️ UI

> "The user wants to borrow Book X."

↓

🎮 Controller

> "I'll coordinate this request."

↓

📚 Domain

> "We know the borrowing rules and our own state."

This keeps the layers conceptually cleaner.

# **🎼 This connects to Crescendo's `Main`**

### **📜 FROM THE GITLAB MATERIAL**

For Crescendo, the assignment says console input/output belongs in `Main`, while domain classes should not read console input or print UI messages. assignment\_2

That gives us a clear separation:

🖥️ **Main**

handles the CLI boundary.

🎼 **Domain objects**

handle domain responsibilities.

But be careful:

> This does **not automatically mean `Main` is “the GRASP Controller” in every theoretical sense.**

The assignment doesn't require us to make that claim.

The important lesson is the separation of responsibilities.

# **🔎 Controller problems are useful in Part 2**

When reverse-engineering an existing program, suppose we discover one class that:

1️⃣ receives every request,

2️⃣ knows every business rule,

3️⃣ directly manipulates every object's internal state,

4️⃣ creates most objects,

5️⃣ performs unrelated calculations,

6️⃣ handles UI details.

We might initially think:

> "That's the Controller."

But the more interesting design question is:

> **Has this coordinating object accumulated responsibilities that belong elsewhere?**

That could lead us toward several design concerns:

🐙 too many responsibilities → **low cohesion**

🕸️ too many dependencies → **high coupling**

🧠 performing logic using other objects' information → possible **Information Expert** issue

🏭 inappropriate object creation → possible **Creator** issue

# **🔑 Controller vs Information Expert**

This distinction is especially useful.

### **🎮 Controller asks:**

> **Who receives and coordinates this system operation?**

### **👨‍🔬 Information Expert asks:**

> **Who has the information needed to perform this responsibility?**

So the Controller might receive:

> "Approve this request."

But that does **not** automatically mean the Controller should personally know and evaluate every rule involved.

It can delegate work to appropriate domain objects.

# **🧠 The simple mental model**

Remember:

**UI**

🖥️ communicates with the human

↓

**Controller responsibility**

🎮 receives/co-ordinates the system operation

↓

**Domain objects**

🧩 perform responsibilities appropriate to their knowledge and state

# **⭐ The most important sentence**

> **A GRASP Controller coordinates a system operation; it should not become the place where all domain intelligence lives.**

That distinction will become very useful when you inspect existing code and ask whether responsibilities have ended up in the right objects.

# **🪜 Step 49 — Understand Information Expert More Deeply**

We introduced **Information Expert** earlier, but it is important enough to understand properly because it gives us a practical way to decide:

> **Which class should contain this method?**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 asks you to examine the existing PawsHome implementation for design/GRASP problems and justify possible improvements using evidence from the Java implementation. assignment\_2

The exact method below is **background theory** for helping you reason about those responsibilities. It is not a formula prescribed by the assignment.

# **💡 The basic Information Expert question**

Suppose some work needs to be done.

Ask:

> **Which object already has most of the information required to perform this work?**

That object is often a good candidate for the responsibility.

This is the essence of **GRASP Information Expert**.

# **📚 A simple fictional example**

Our Library has:

👤 `Member`

and Member knows:

📚 which Books they currently have borrowed.

Now we need to answer:

> **Can this Member borrow another Book?**

Who already has the important information?

The Member.

It knows how many Books it currently has.

So Member is a natural **Information Expert** for information concerning its own borrowing situation.

# **❌ A less object-oriented approach**

Imagine `LibraryManager` does this conceptually:

👨‍💼 Manager asks Member:

> Give me all your borrowed Books.

Member gives the data.

Then Manager:

🔢 counts the Books

📏 compares the number with the Member borrowing limit

🤔 decides whether Member can borrow

The interesting question becomes:

> Why is Manager doing work based almost entirely on information belonging to Member?

# **✅ Information Expert suggests another possibility**

Instead:

👨‍💼 Manager asks:

> Member, can you borrow another Book?

Then:

👤 Member examines its own information.

This places:

📦 data

and

⚙️ behaviour using that data

closer together.

# **🧠 This is a central OOP idea**

Weak object-oriented design can accidentally produce objects that are mostly:

> **bags of data**

Other classes constantly ask them for information and then make all the decisions elsewhere.

For example:

👤 Member gives data

📕 Book gives data

📄 Loan gives data

and then:

🐙 `LibraryManager`

does everything.

Technically, we have classes.

But conceptually, much of the program may still behave like one big procedure operating on passive data.

# **👨‍🔬 Information Expert helps distribute intelligence**

Instead of:

🐙 Manager knows everything

we can get:

👤 Member knows Member-related behaviour

📕 Book knows Book-related behaviour

📄 Loan knows Loan-related behaviour

🎮 coordinating object coordinates them

Now the objects aren't merely storing information.

They have meaningful **responsibilities**.

# **🎼 Crescendo gives us a nice example**

Consider:

🎼 `Course`

The supplied class diagram gives Course information such as:

* capacity  
* enrolled students

and an operation:

**`isFull()`**

That makes conceptual sense.

Why?

Because Course already has the information required to determine whether it is full.

So we can reason:

> **Course is an Information Expert regarding whether Course is full.**

That's our interpretation of the supplied design, rather than an explicit sentence in the specification saying “this is Information Expert.”

# **🔢 Think about the alternative**

Imagine `Main` did this:

🖥️ ask Course for capacity

↓

🖥️ ask Course for student list

↓

🖥️ count students

↓

🖥️ compare count with capacity

↓

🖥️ decide whether Course is full

Now `Main` needs to understand the internal logic of what “full” means.

But Course already owns the relevant information.

So:

🎼 `course.isFull()`

expresses a meaningful domain question much better.

# **🚨 A useful warning sign: Feature Envy**

You previously asked about **feature envy**, and now we can connect it directly.

Suppose method X belongs to Class A, but throughout that method it constantly:

👀 asks B for information

👀 asks B for more information

👀 asks B for another value

and then:

🧮 performs calculations mainly about B.

That can be a warning sign that:

> **The behaviour may actually belong closer to B.**

In other words, method X seems more interested in B's features than its own class's features.

Hence the name:

**Feature Envy.**

# **🔎 A useful detective question**

When reading a method, ask:

> **Whose data is this method mostly working with?**

If the answer is:

> "Almost entirely another object's data..."

then investigate.

Don't automatically conclude it's wrong.

But investigate.

# **⚠️ Information Expert is not an absolute rule**

This is important.

Suppose Object A has some information and Object B has some other information.

A responsibility needs both.

There may not be one obvious Expert.

Other design concerns can matter too:

🔗 coupling

🎯 cohesion

🔒 encapsulation

🎮 coordination

🏭 creation responsibility

So Information Expert isn't:

> "Find the object with one relevant variable and always put the method there."

It's a **design principle for reasoning about responsibility**.

# **🧩 GRASP principles balance one another**

Imagine moving a method into `Member` would technically follow Information Expert...

but now Member becomes responsible for:

👤 membership

💰 accounting

📧 email

💾 database storage

🖥️ console formatting

📊 statistics

Then we have another problem:

🐙 **low cohesion**

So good OO design isn't about blindly obeying one principle.

It's about balancing responsibilities.

# **🔎 How to use Information Expert during reverse engineering**

When reading existing code, try this little process:

### **1️⃣ Find an important method**

⚙️ What does it do?

### **2️⃣ Identify the information it needs**

📦 Which data does it use?

### **3️⃣ Find who owns that information**

🧩 Which objects already know those things?

### **4️⃣ Compare that with where the method currently lives**

🏠 Is the responsibility placed naturally?

### **5️⃣ Look at the consequences**

Does its current location create:

🕸️ unnecessary coupling?

🐙 low cohesion?

📦 data-only objects?

🔓 excessive exposure through getters?

Only after that should we start making a design argument.

# **🧠 This connects directly to Step 41**

Remember our structure:

**Evidence → Problem → Principle → Improvement → Benefit**

For Information Expert, it might conceptually look like:

🔎 **Evidence**

Class A retrieves several pieces of information from B and performs behaviour entirely concerned with B.

↓

⚠️ **Problem**

A must understand details belonging to B.

↓

🧩 **Principle**

B appears to be the stronger **Information Expert**.

↓

✨ **Improvement**

Consider moving that responsibility closer to B.

↓

🎯 **Benefit**

B's information and behaviour stay together, while A needs less knowledge of B's internals.

# **⭐ One very useful question**

When you're unsure where a method belongs, start with:

> **“Who already knows what is needed to do this?”**

That single question will get you surprisingly far in object-oriented design.

# **🪜 Step 50 — Understand Low Coupling Properly**

We've already used the words **low coupling**, but now let's understand what they really mean.

A common oversimplification is:

> **“Fewer connections between classes \= better design.”**

That's not quite right.

Objects **need** to collaborate. The real goal is to avoid **unnecessary dependencies**.

## **📜 FROM THE GITLAB ASSIGNMENT**

In Part 2, you are expected to analyze the existing PawsHome implementation for design problems, including GRASP issues such as poor coupling, and support your analysis with evidence from the implementation. assignment\_2

The explanation below is background theory for recognizing such problems.

# **💡 First: what is coupling?**

**Coupling** describes how much one part of the program depends on another.

Imagine:

📦 Class A

↓

📦 Class B

If A needs B in order to perform its responsibilities, there is some coupling between them.

That isn't automatically bad.

In object-oriented software, objects are supposed to collaborate.

# **📚 A perfectly reasonable dependency**

Our fictional Library might have:

📄 `Loan`

↓

📕 `Book`

A Loan naturally concerns a Book.

So some relationship between them makes sense.

Trying to eliminate that connection merely to achieve “zero coupling” would be silly.

The real question is:

> **Does A need to know about B in order to perform A's legitimate responsibility?**

# **🕸️ When coupling becomes troublesome**

Imagine `Member` depends directly on:

📕 Book

📄 Loan

💰 FineCalculator

📧 EmailService

💾 Database

🖥️ ConsoleUI

📊 StatisticsGenerator

🧾 ReportPrinter

Now changing completely unrelated parts of the program might affect Member.

That's where coupling begins to have a **cost**.

# **💰 Think of coupling as a cost of change**

This is the deeper idea.

Suppose:

📦 A depends heavily on B.

Then B changes.

Now:

💥 A may also need to change.

If A also depends heavily on C, D, E and F:

C changes → maybe A changes.

D changes → maybe A changes.

E changes → maybe A changes.

The more unnecessary knowledge a class has about other parts of the system, the more reasons it has to be affected by their changes.

# **🔑 So Low Coupling really asks**

> **Can we give this class the dependencies it genuinely needs without making it unnecessarily dependent on everything else?**

# **🧠 Knowledge matters, not just number of arrows**

This is important.

Imagine:

**A → B**

Only one dependency.

But A knows:

* B's internal collection structure  
* B's internal status representation  
* exactly how B performs calculations  
* which order B's internal operations must occur  
* how to modify B's state manually

That's still quite strong coupling.

A knows far too much about B.

Compare that with:

**A → B**

where A simply asks:

> `b.performMeaningfulOperation()`

A still depends on B, but it knows much less about B's internals.

# **🔒 Encapsulation can therefore reduce coupling**

Remember Step 46\.

If another class has to understand your internal lists and manipulate them itself:

🔓 weak encapsulation

often leads to:

🕸️ stronger coupling.

If instead it communicates through meaningful operations:

🔒 internal implementation stays hidden

and:

🕸️ the caller needs less knowledge.

So encapsulation and low coupling often reinforce each other.

# **👨‍🔬 Information Expert can reduce unnecessary coupling too**

Remember our earlier bad example:

🐙 `LibraryManager`

asks Member for lots of data and then performs Member-related calculations itself.

Now LibraryManager must understand:

👤 Member's data

📏 Member's rules

📚 Member's collections

If the appropriate behaviour moves closer to Member:

👤 Member becomes Information Expert

and:

🐙 LibraryManager needs less knowledge.

So:

**Information Expert**

can sometimes help achieve:

**Low Coupling**

# **🎮 The giant Controller problem returns**

Remember Step 48\.

Suppose one Controller coordinates absolutely everything.

It knows:

📦 A

📦 B

📦 C

📦 D

📦 E

📦 F

📦 G

and contains detailed knowledge about all of them.

That can make the Controller highly coupled.

Again, the problem isn't:

> "Controllers shouldn't depend on anything."

A Controller needs collaborators.

The question is whether it has accumulated **unnecessary knowledge and dependencies**.

# **🔎 How do we recognize coupling in code?**

When reverse engineering, look for clues.

Ask:

**How many other classes does this class know about?**

Then go deeper:

**What does it know about them?**

Does it merely call a meaningful public operation?

Or does it:

🔍 retrieve lots of internal information?

🔧 manually manipulate another object's state?

📏 duplicate another object's rules?

🔗 manage another object's relationships?

🏗️ construct unrelated objects?

The second group is much more interesting from a design-analysis perspective.

# **⚠️ Don't count dependencies mechanically**

This would be weak analysis:

> "`LibraryManager` depends on five classes, therefore it has high coupling."

Five isn't a magic number.

Maybe all five dependencies are perfectly appropriate.

A better argument asks:

> **Are these dependencies necessary for the class's responsibility?**

# **🧩 Use Step 41 again**

Suppose we find something suspicious.

### **🔎 Evidence**

`LibraryManager` directly accesses several domain objects and contains detailed knowledge about how each one's internal state must be changed.

↓

### **⚠️ Problem**

Changes to those domain concepts may require corresponding changes in `LibraryManager`.

↓

### **🧩 Principle**

This suggests unnecessarily **high coupling**.

↓

### **✨ Improvement**

Move appropriate domain responsibilities to the Information Experts and let the manager coordinate through smaller, meaningful interfaces.

↓

### **🎯 Benefit**

`LibraryManager` needs less knowledge of other objects' internal details, so changes can remain more localized.

# **🔗 Coupling and cohesion are different**

This distinction is worth memorizing.

### **🕸️ COUPLING**

asks:

> **How dependent is this class on OTHER classes?**

Think:

**BETWEEN objects.**

### **🎯 COHESION**

asks:

> **How well do the responsibilities INSIDE this class belong together?**

Think:

**WITHIN an object.**

A class can therefore theoretically have:

high cohesion \+ low coupling ✅

high cohesion \+ high coupling

low cohesion \+ low coupling

low cohesion \+ high coupling ❌

They describe different dimensions of design.

# **🧠 A very useful design goal**

We often aim for:

### **🎯 HIGH COHESION**

Each class has a focused, meaningful responsibility.

and:

### **🕸️ LOW COUPLING**

Each class depends only on what it reasonably needs.

Together, they produce a nice mental picture:

📦 focused object

↕️ small meaningful collaboration

📦 focused object

↕️ small meaningful collaboration

📦 focused object

rather than:

🕸️🕸️🕸️🕸️  
🐙 EVERYTHING KNOWS EVERYTHING  
🕸️🕸️🕸️🕸️

# **⭐ The sentence to remember**

> **Low Coupling does not mean “objects should not depend on each other.” It means “objects should know no more about each other than their responsibilities require.”**

That distinction is important when you eventually analyze PawsHome: we're not counting arrows in a diagram. We're reasoning about the **cost and necessity of dependencies**.

# **🪜 Step 51 — Understand High Cohesion Properly**

In Step 50 we looked **between classes**:

🕸️ **Coupling** \= how much classes depend on other classes.

Now we look **inside one class**:

🎯 **Cohesion** \= how naturally that class's responsibilities belong together.

The usual design goal is:

> **High cohesion — a class should have a clear, focused purpose.**

## **📜 FROM THE GITLAB ASSIGNMENT**

In Part 2, the PawsHome analysis asks you to identify design/GRASP problems in the existing implementation and justify improvements. Cohesion is therefore one of the concepts that can help us judge whether responsibilities are appropriately distributed. assignment\_2

The explanation below is **background theory**. The assignment does not prescribe one exact formula for measuring cohesion.

# **💡 What does cohesion actually mean?**

Imagine our fictional Library has a:

📕 **Book**

The Book is responsible for things closely related to being a Book:

📖 its title

✍️ its author

🔖 its ISBN

📗 whether it is available

Those responsibilities make sense together.

They all concern:

> **The Book and its state.**

That's relatively **high cohesion**.

# **🐙 Now imagine a strange Book class**

Suppose `Book` also:

📧 sends emails

🖨️ prints reports

👤 registers Members

💾 saves the entire library database

💰 calculates membership fees

⌨️ reads commands from the console

Now we should ask:

> **Why does a Book need to do all of this?**

These responsibilities don't naturally belong together.

That's a sign of **low cohesion**.

# **🎯 A useful question**

Ask:

> **Can I describe this class's responsibility in one clear sentence?**

For example:

📕 **Book**

> Represents a book and manages its book-related state.

Nice and focused.

But imagine:

🐙 **LibraryManager**

> Manages books, users, console input, persistence, emails, reports, payments, statistics and validation.

That's no longer really one responsibility.

It's a shopping list.

# **🔄 Reasons to change**

There's another useful way to think about cohesion:

> **What kinds of changes would force this class to change?**

Imagine one class handles:

🖥️ console formatting

📧 email notifications

📏 borrowing rules

💾 database storage

That class might change because:

🖥️ the UI requirements change

OR

📧 the email system changes

OR

📏 the borrowing policy changes

OR

💾 the database changes.

Those are very different reasons.

That's a strong warning sign of **low cohesion**.

# **⚠️ Don't just count methods**

This is important.

A class with 15 methods does **not** automatically have low cohesion.

Perhaps all 15 methods contribute to one coherent responsibility.

Conversely, a class with only 5 methods could have very low cohesion if those five methods perform five completely unrelated jobs.

So don't ask:

> "How many methods are there?"

Ask:

> **"Do these responsibilities belong together?"**

# **🐙 The God Class**

You noticed this term in the previous version.

A **God Class** or **God Object** is a class that knows or does far too much.

Imagine:

📦 A ↔ 🐙 MEGA MANAGER ↔ 📦 B

📦 C ↔ 🐙 MEGA MANAGER ↔ 📦 D

📦 E ↔ 🐙 MEGA MANAGER ↔ 📦 F

Everything seems to go through the Mega Manager.

It knows everyone's information.

It makes everyone's decisions.

It performs many unrelated jobs.

This often creates **two problems at once**:

🎯⬇️ **Low cohesion** — too many unrelated responsibilities inside the class.

🕸️⬆️ **High coupling** — the class depends on many other parts of the system.

That's why coupling and cohesion frequently appear together in design analysis.

# **👨‍🔬 Information Expert can help**

Suppose `LibraryManager` contains the responsibility:

> Determine whether a Member can borrow another Book.

But Member already has the information about its borrowed Books.

Perhaps that responsibility belongs closer to:

👤 **Member**

That could simultaneously:

👨‍🔬 follow **Information Expert**

🎯 increase the cohesion of LibraryManager

🕸️ reduce LibraryManager's coupling

🧠 give Member meaningful domain behaviour.

This shows something important about GRASP:

> **The principles work together.**

They aren't nine isolated rules.

# **⚠️ But don't split everything**

High cohesion does **not** mean:

> "Every method should become its own class."

That would create hundreds of tiny classes that all need to communicate with each other.

Then we might create:

🕸️ enormous coupling

🧩 unnecessary complexity

😵 a system that's difficult to understand.

The real question is:

> **Which responsibilities naturally belong together as one meaningful concept?**

# **🔎 How to investigate cohesion in existing code**

When reading a class during reverse engineering, ask:

**1️⃣ What responsibilities does this class actually have?**

Don't just list method names. Describe what the methods are accomplishing.

↓

**2️⃣ Do those responsibilities concern the same concept?**

If yes:

🎯 potentially good cohesion.

If they're unrelated:

🐙 investigate possible low cohesion.

↓

**3️⃣ What could cause this class to change?**

If completely unrelated changes affect the same class, that's another warning sign.

↓

**4️⃣ Does another object naturally own one of these responsibilities?**

Now bring in:

👨‍🔬 Information Expert

🏭 Creator

🎮 Controller

↓

**5️⃣ Would moving the responsibility actually improve the design?**

The goal isn't moving methods for the sake of moving them.

We want:

🎯 clearer responsibilities

🕸️ fewer unnecessary dependencies

🔒 stronger encapsulation

🧠 easier-to-understand objects.

# **✍️ Connect this to Step 41**

A weak analysis would say:

> "This class has low cohesion."

A stronger analysis follows our pattern:

🔎 **Evidence:** The class handles console input, domain validation and persistence.

⚠️ **Problem:** These responsibilities concern different parts of the system and can change independently.

🧩 **Principle:** This suggests **low cohesion**.

✨ **Improvement:** Separate UI and persistence responsibilities from the domain responsibility.

🎯 **Benefit:** Each class gains a clearer purpose and changes become more localized.

Now we're making an **argument**, rather than merely using GRASP vocabulary.

# **🧠 Coupling vs Cohesion — memorize this**

🕸️ **COUPLING**

Look **OUTSIDE** the class.

> How much does it depend on other classes?

🎯 **COHESION**

Look **INSIDE** the class.

> How well do its own responsibilities belong together?

Our general design direction is therefore:

🕸️⬇️ **LOW COUPLING**

* 

🎯⬆️ **HIGH COHESION**

# **⭐ The sentence to remember**

> **A highly cohesive class has responsibilities that belong together because they contribute to one clear purpose.**

Or even shorter:

> 🎯 **One class — one focused reason for existing.**

Not literally one method.

Not literally one tiny job.

But one **coherent purpose**.

# **🪜 Step 52 — Understand Polymorphism**

We already know that Crescendo has:

👤 `Person`

↙️　　　　↘️

🎓 `Student`　　👨‍🏫 `Teacher`

`Person` is abstract, while `Student` and `Teacher` are special kinds of Person.

Now we add one of the central ideas in object-oriented programming:

> **Polymorphism means that different kinds of objects can be treated through a common type while still retaining their own specific behaviour.**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification says that every Person is either a Student or Teacher, and the supplied design makes `Person` abstract with `Student` and `Teacher` as subclasses. crescendo\_music\_school

The class diagram also expresses this using UML generalization/inheritance. crescendo\_music\_school

The deeper explanation of polymorphism below is **background theory**.

# **🧬 Start with inheritance**

We learned earlier:

🎓 Student **is a** Person.

👨‍🏫 Teacher **is a** Person.

Therefore, wherever we only care that something is a `Person`, either kind can potentially be treated as one.

Conceptually:

👤 Person

could actually refer to:

🎓 Student

or:

👨‍🏫 Teacher

That's the foundation for polymorphism.

# **🏫 Imagine MusicSchool's people**

The school needs to keep track of people.

Without the common `Person` abstraction, we might imagine separate concepts everywhere:

📚 students

📚 teachers

and then repeatedly write logic for both categories.

But because both are Persons, we can sometimes think at the more general level:

🏫 MusicSchool

↓

👥 Persons

↓

🎓 Student

🎓 Student

👨‍🏫 Teacher

🎓 Student

👨‍🏫 Teacher

The collection can conceptually say:

> **These are Persons.**

Even though the actual objects are Students and Teachers.

# **🧠 One object can therefore be viewed at different levels**

Suppose we have:

🎓 Alice the Student.

Alice is:

🎓 a Student

AND

👤 a Person.

She doesn't stop being a Student merely because some part of the program treats her as a Person.

That's important.

The actual object remains:

🎓 Student.

We're simply interacting with it through the more general:

👤 Person abstraction.

# **🔎 Why is that useful?**

Imagine we want to find a person by ID.

At that moment, perhaps we don't care whether the result is:

🎓 Student

or:

👨‍🏫 Teacher.

We're asking:

> "Find Person 17."

So the operation can conceptually work with:

👤 **Person**

rather than duplicating:

> findStudent()

and:

> findTeacher()

for every situation where the distinction isn't relevant.

# **🎭 Where does the “many forms” idea come from?**

The word **polymorphism** roughly reflects:

> **many forms**

A common abstraction can represent objects of several concrete forms.

For example:

👤 Person

can take the concrete form:

🎓 Student

or:

👨‍🏫 Teacher.

That's the basic idea.

# **⚙️ But polymorphism becomes even more interesting with behaviour**

Let's use a completely fictional example.

Imagine an abstract:

🔷 `Shape`

with different concrete shapes:

⭕ Circle

⬛ Square

🔺 Triangle

Suppose all Shapes understand the conceptual operation:

> calculate area.

But each concrete shape performs that operation differently.

⭕ Circle uses its radius.

⬛ Square uses its side length.

🔺 Triangle uses base and height.

Now another part of the program doesn't necessarily need to ask:

> Are you Circle?

> Are you Square?

> Are you Triangle?

It can conceptually say:

> **Shape, calculate your area.**

The actual object determines the appropriate behaviour.

That's the more powerful side of polymorphism.

# **❌ Compare that with constant type checking**

Imagine a program repeatedly does:

> If Student, do this.

> Else if Teacher, do that.

> Else if some future Person type, do something else.

Then every time a new type appears, we may need to hunt through the program changing conditionals.

Polymorphism can sometimes let us express:

> **Person, perform your appropriate behaviour.**

and let the concrete object decide what that means.

# **🧩 This connects to GRASP Polymorphism**

GRASP includes a principle called:

🎭 **Polymorphism**

The basic responsibility idea is:

> When behaviour varies by type, consider assigning the varying behaviour to the types themselves rather than building large conditional structures elsewhere.

So instead of:

🐙 Manager:

> If A → behaviour A  
> If B → behaviour B  
> If C → behaviour C

we may have:

📦 A → knows A behaviour

📦 B → knows B behaviour

📦 C → knows C behaviour

while callers work through a shared abstraction.

# **⚠️ Inheritance and polymorphism are related, but not identical**

This distinction is worth understanding.

### **🧬 Inheritance**

describes a relationship between types:

> Student **is a** Person.

### **🎭 Polymorphism**

describes how different concrete objects can be treated through a common abstraction and potentially respond with type-specific behaviour.

So:

> **Inheritance can enable polymorphism, but simply having subclasses isn't the whole meaning of polymorphism.**

# **🧠 Why make `Person` abstract?**

### **📜 FROM THE GITLAB MATERIAL**

Crescendo specifies that every Person is either a Student or Teacher; `Person` itself is abstract. crescendo\_music\_school

Conceptually, that means:

❌ generic Person

is not a valid concrete domain object.

Instead we create:

🎓 Student

or:

👨‍🏫 Teacher.

But both still share the common Person concept.

# **🧩 Abstract does NOT mean useless**

An abstract class can still provide valuable common structure.

Conceptually, Person represents information shared by Students and Teachers, such as:

🆔 person ID

👤 name

📧 email.

So we avoid unnecessarily duplicating the idea of a Person in both subclasses.

The abstraction captures:

> **What Students and Teachers have in common.**

The subclasses capture:

> **What makes each type special.**

# **🔎 Polymorphism in reverse engineering**

When examining existing code in Part 2, inheritance alone isn't the whole story.

Ask:

🧬 Are there superclass/subclass relationships?

Then:

🎭 Is code actually using the common abstraction?

And:

⚙️ Does behaviour vary between the concrete types?

And especially:

🚨 Are there large chains of type checks that might indicate behaviour could be distributed polymorphically?

Again, don't automatically label every `if` as bad.

We're looking for evidence of responsibilities that may be awkwardly placed.

# **🕸️ Polymorphism can reduce coupling**

Imagine a Controller knows about:

⭕ Circle

⬛ Square

🔺 Triangle

and contains separate logic for every one.

It's coupled to all those concrete types.

If it can instead work with:

🔷 Shape

then it may need to know much less about the concrete implementations.

So polymorphism can sometimes contribute to:

🕸️ **Lower Coupling**

and:

🎯 **Higher Cohesion**

# **🔑 The simplest mental model**

Think:

### **🧬 INHERITANCE**

> **Student IS A Person.**

### **🔷 ABSTRACTION**

> **Person describes what Students and Teachers have in common.**

### **🎭 POLYMORPHISM**

> **I can work with a Person without always needing to know which concrete kind of Person it is.**

And when behaviour differs:

> **The concrete object can provide the appropriate behaviour.**

# **⭐ The sentence to remember**

> **Polymorphism lets us program against the common idea while allowing the concrete objects to remain different.**

That's why OOP isn't simply about making lots of classes.

We're building abstractions that let different objects collaborate without every part of the program needing to understand every concrete type.

# **🪜 Step 53 — Understand GRASP Pure Fabrication**

This one has a strange name, but the idea is actually very practical.

Until now, many of our classes represented things that exist naturally in the problem domain:

🎓 Student

👨‍🏫 Teacher

🎼 Course

💰 TuitionFee

These are **domain concepts**.

But sometimes good software design needs a class that does **not** correspond to a real-world thing.

GRASP calls this:

> 🛠️ **Pure Fabrication**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 asks you to analyze PawsHome using GRASP/design principles and recommend improvements. The assignment does not specifically require you to introduce a Pure Fabrication class. assignment\_2

So everything below is **background theory** to help you understand the GRASP toolbox.

# **💡 Start with a problem**

Imagine our fictional Library needs to save information to a database.

Who should do that?

Maybe we initially think:

📕 Book saves itself.

👤 Member saves itself.

📄 Loan saves itself.

But now every domain object needs to understand:

💾 database connections

🗃️ database queries

📋 database structure

⚠️ database errors

Suddenly our beautiful domain objects have technical responsibilities mixed into them.

# **🎯 Cohesion starts suffering**

Think about `Book`.

Its natural responsibilities concern:

📖 title

✍️ author

📗 availability

Maybe borrowing-related state.

But now Book also needs to know:

💾 how a database works.

Those responsibilities don't naturally belong together.

So we ask:

> **Could we create another class whose responsibility is persistence?**

Perhaps:

💾 `BookRepository`

or more generally:

💾 `LibraryRepository`

Here's the interesting part:

There isn't necessarily a thing called a **Repository** in the real-world library domain.

We've deliberately **fabricated** a software class.

# **🛠️ That's Pure Fabrication**

A Pure Fabrication is a class invented because it improves the software design rather than because it represents something from the real-world domain.

We might introduce it to achieve things such as:

🎯 higher cohesion

🕸️ lower coupling

♻️ reusable technical behaviour

🧩 clearer separation of responsibilities.

# **🌍 Domain class vs fabricated class**

Compare:

### **🌍 Domain concept**

📕 `Book`

It corresponds to something meaningful in the problem domain.

### **🛠️ Pure Fabrication**

💾 `BookRepository`

It exists mainly because the **software architecture benefits from it**.

Both can be perfectly legitimate classes.

They simply originate for different reasons.

# **📧 Another example**

Suppose our system sends email.

Should:

👤 Member

know how SMTP works?

Probably not.

Should:

📄 Loan

know how email servers work?

Probably not.

We might invent:

📧 `EmailService`

That class may not represent an important domain entity.

It exists because:

> **Some technical responsibility needs a sensible home.**

Again:

🛠️ Pure Fabrication.

# **🧠 Why not force everything into domain classes?**

Because then domain classes can become polluted with technical responsibilities.

Imagine:

👤 Member

handles member rules

AND

💾 database storage

AND

📧 email delivery

AND

🖨️ PDF generation

AND

🌐 network communication.

Now Member has many unrelated reasons to change.

Remember Step 51:

🐙 **Low Cohesion**

Pure Fabrication gives us another tool for preventing that.

# **🕸️ It can also reduce coupling**

Suppose five classes all directly understand database technology.

📦 A → 💾 database

📦 B → 💾 database

📦 C → 💾 database

📦 D → 💾 database

📦 E → 💾 database

Now database knowledge is spread throughout the system.

Instead, perhaps those technical details can be concentrated behind an appropriate persistence abstraction.

Then fewer classes need detailed knowledge of the database technology.

Potential result:

🕸️ **Lower Coupling**

and:

🎯 **Higher Cohesion**

# **⚠️ But don't fabricate classes for everything**

Just like our other GRASP principles, this isn't:

> "More classes \= better."

We don't want:

`BookTitleValidatorManagerHelperServiceFactoryThing`

just because separating things sounds sophisticated. 😄

A fabricated class should solve a **real responsibility problem**.

Ask:

> Is this responsibility awkward in the domain objects?

> Would separating it improve cohesion?

> Would it reduce unnecessary coupling?

> Does the new class have a clear purpose?

If yes, Pure Fabrication may make sense.

# **🧩 Information Expert vs Pure Fabrication**

Here's an interesting contrast.

### **👨‍🔬 Information Expert says:**

> Put responsibility with the object that naturally has the required information.

But sometimes doing that would give the domain object an awkward technical responsibility.

Then we might decide:

> A separate software-oriented class gives us a better overall design.

That's where **Pure Fabrication** can enter.

So GRASP principles aren't rigid laws.

We balance them.

# **🏫 Connect this to Crescendo**

In Crescendo, the assignment intentionally keeps things simple: it's a proof-of-concept CLI using the supplied domain design, and the written setup prohibits external frameworks/databases for Part 1\.

So we should **not** look at Pure Fabrication and conclude:

> "Great\! We should invent repositories and services for Crescendo."

That's not what the assignment says.

We're learning the principle so that we can recognize the design idea when appropriate.

# **🐕 Why this matters for PawsHome**

During reverse engineering, you may eventually encounter responsibilities that don't fit naturally inside a domain object.

Then the question isn't necessarily:

> "Which existing domain class should we force this into?"

Another possibility is:

> **Should this responsibility have its own software-oriented class?**

That's the kind of situation where Pure Fabrication becomes useful as a design concept.

But remember:

🔎 first document what PawsHome **actually does**

then:

🧠 analyze

then:

✨ recommend improvements.

We don't redesign while we're still reverse-engineering the current implementation.

# **🔑 Compare three GRASP ideas**

### **👨‍🔬 Information Expert**

**Who already knows enough to do this?**

### **🏭 Creator**

**Who should be responsible for creating this object?**

### **🛠️ Pure Fabrication**

**Does this responsibility need a new software-oriented class because putting it into domain objects would damage the design?**

Those are three different responsibility questions.

# **⭐ The sentence to remember**

> **Pure Fabrication means inventing a class for good software-design reasons, even though that class isn't a natural concept from the problem domain.**

Typical motivation:

🎯 **Higher Cohesion**

* 

🕸️ **Lower Coupling**

That's why something “fabricated” can actually produce a cleaner object-oriented design.

---

# **🪜 Step 54 — Understand GRASP Indirection**

At first, **Indirection** can sound backwards.

We normally think:

> “If A needs B, just let A talk directly to B.”

But sometimes that direct connection makes the two parts too dependent on each other.

GRASP **Indirection** says:

> **Sometimes we can reduce coupling between two things by introducing something in between them.**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 asks you to analyze design/GRASP problems in PawsHome and justify possible improvements. The assignment does not specifically require an Indirection class or a particular architecture. assignment\_2

So this step is **background GRASP theory** that may help when evaluating a design.

# **💡 Start with direct communication**

Imagine our fictional Library needs to send notifications.

Perhaps:

📄 Loan → 📧 Email system

Whenever something happens to a Loan, it directly communicates with a particular email technology.

That might work perfectly well.

But now Loan needs to know something about:

📧 the email system

Maybe:

🔐 authentication

📨 message formatting

🌐 communication details

⚠️ email errors

Now our domain object has become dependent on a technical system.

# **🔗 We have direct coupling**

Conceptually:

📄 Loan → 📧 EmailProvider

If `EmailProvider` changes significantly, Loan might also need changing.

But Loan's real responsibility is about:

📚 borrowing.

Why should it understand the details of email delivery?

# **🧩 Introduce something in between**

We could instead have:

📄 Loan

↓

🔔 NotificationService

↓

📧 EmailProvider

Now Loan doesn't necessarily need to understand the concrete email system.

It communicates with something whose responsibility is:

> **Send this notification.**

The intermediary handles the details.

That extra layer is an example of **Indirection**.

# **🤔 But didn't we just add complexity?**

Yes\!

And this is important.

Indirection isn't magically free.

Before:

📄 → 📧

After:

📄 → 🔔 → 📧

We've added another component.

So why do it?

Because sometimes:

> **A little structural complexity can reduce dependency complexity.**

We're trading one kind of complexity for another.

# **🕸️ The main goal is lower coupling**

Suppose tomorrow we stop using email and instead use:

📱 SMS

or:

🔔 push notifications.

With strong direct coupling, several domain classes might need modification.

With useful indirection, perhaps much of that technical change can happen behind the intermediary.

Conceptually:

📄 Loan → 🔔 NotificationService → 📧 Email

Later:

📄 Loan → 🔔 NotificationService → 📱 SMS

Loan's responsibility hasn't changed.

The technical mechanism has.

# **🧠 Think of a translator**

Imagine two people:

🇸🇪 Swedish speaker

🇯🇵 Japanese speaker

They cannot communicate directly.

We introduce:

🗣️ Translator

Now:

🇸🇪 Person ↔ 🗣️ Translator ↔ 🇯🇵 Person

The translator is an **indirection**.

Each side doesn't need to know all the details of the other side.

Software indirection can play a similar role.

# **🎮 Controller can sometimes provide indirection**

Remember GRASP Controller.

Instead of:

🖥️ UI directly manipulating many domain objects

we may have:

🖥️ UI

↓

🎮 Controller

↓

🧩 Domain objects

The Controller can provide a level of indirection between the UI and domain.

That doesn't mean every Controller automatically represents good Indirection.

But it shows how GRASP principles can overlap.

# **🛠️ Pure Fabrication and Indirection can overlap too**

Remember Step 53\.

We invented:

💾 Repository

because persistence didn't fit naturally into our domain objects.

That Repository can also provide **Indirection**.

Instead of:

👤 Member → 💾 specific database technology

we might have:

👤 Member-related logic

↓

🗃️ Repository

↓

💾 storage technology

The Repository can therefore be:

🛠️ **Pure Fabrication**

because we invented a software-oriented class,

AND simultaneously provide:

↪️ **Indirection**

because it sits between parts of the system to reduce direct coupling.

GRASP principles are not mutually exclusive labels.

# **⚠️ Too much indirection is also bad**

Imagine asking:

> “Can I borrow this Book?”

and the request travels through:

🖥️ UI

↓

🎮 Controller

↓

📨 RequestHandler

↓

🧩 BorrowingCoordinator

↓

🔧 BorrowingService

↓

📚 LibraryFacade

↓

📦 MemberManager

↓

👤 Member

for a tiny university project.

😵

Now we've created an architecture maze.

Every extra layer has a cost:

🧠 more concepts to understand

📁 more classes

🔎 harder tracing

🐛 more places for mistakes.

So the principle is not:

> **“More indirection \= better.”**

It's:

> **“Use indirection when the reduction in coupling is worth the extra layer.”**

# **🔎 How to recognize a possible need for Indirection**

While examining existing code, look for situations where:

📦 A knows too many technical details about B.

Or:

📦 many classes depend directly on one volatile external component.

Or:

🖥️ UI knows too much about domain internals.

Or:

💾 domain objects know too much about persistence technology.

Then ask:

> **Would an intermediary allow these parts to communicate while knowing less about each other?**

That's the Indirection question.

# **🔗 Connect it to Low Coupling**

Step 50:

> 🕸️ Low Coupling means objects should know no more about each other than their responsibilities require.

Step 54:

> ↪️ Indirection is one possible technique for achieving that.

So:

**Problem**

🕸️ A and B are unnecessarily tightly coupled.

↓

**Possible solution**

↪️ Introduce C between them.

↓

**Result**

A knows C.

B knows C or communicates through C.

A and B no longer need as much knowledge of each other.

# **🧩 Compare the GRASP ideas we've learned**

👨‍🔬 **Information Expert**

> Who already has the information needed?

🏭 **Creator**

> Who should create this object?

🎮 **Controller**

> Who should receive and coordinate the system operation?

🎯 **High Cohesion**

> Do this class's responsibilities belong together?

🕸️ **Low Coupling**

> Does this class have only the dependencies it reasonably needs?

🎭 **Polymorphism**

> Can varying behaviour be handled by the different types themselves?

🛠️ **Pure Fabrication**

> Would an invented software class give responsibilities a better home?

↪️ **Indirection**

> Would something between A and B reduce their direct dependency?

We're starting to see GRASP as a **toolbox of questions**, rather than nine definitions to memorize.

# **⭐ The sentence to remember**

> **Indirection introduces an intermediary so that two parts of the system do not need to know as much about each other.**

But always add the second sentence:

> **The extra layer is worthwhile only when the reduced coupling justifies the added complexity.**

# **🪜 Step 55 — Understand GRASP Protected Variations**

Now we reach the **ninth and final GRASP principle**:

🛡️ **Protected Variations**

The central idea is:

> **If we know that something is likely to change, try to prevent that change from spreading throughout the whole system.**

## **📜 FROM THE GITLAB ASSIGNMENT**

The PawsHome specification actually gives us a useful reason to understand this concept. Constraint C7 says the system uses **in-memory storage now**, but should allow a future database **without rewriting the domain logic**. pawshome\_shelter

That does not explicitly say “use GRASP Protected Variations.” That connection is our **design-theory interpretation**.

But it's a very good example of the idea.

# **💡 What is a “variation”?**

A variation is something that may exist in different forms or may change later.

Imagine our fictional Library currently stores information:

🧠 **in memory**

Later we might want:

💾 **database storage**

Perhaps later still:

☁️ **cloud storage**

The storage technology is therefore a:

🔄 **point of variation**

because we expect that part of the system could change.

# **😱 The dangerous design**

Imagine storage knowledge is scattered everywhere:

👤 Member knows database details.

📕 Book knows database details.

📄 Loan knows database details.

🎮 Controller knows database details.

🖥️ UI knows database details.

Now we decide:

> “Let's replace the current storage system.”

💥 Changes spread everywhere.

This is sometimes called a **ripple effect**:

🌊 one change

↓

🌊 causes another change

↓

🌊 causes another change

↓

🌊 causes another change.

Protected Variations tries to limit that ripple.

# **🛡️ Put a stable boundary around the variation**

Conceptually, instead of everybody depending on the changing detail:

📦 A → 💾 Database

📦 B → 💾 Database

📦 C → 💾 Database

📦 D → 💾 Database

we try to create a stable way of communicating with storage.

Then conceptually:

📦 A

📦 B → 🛡️ stable storage boundary → 💾 actual storage technology

📦 C

The rest of the program depends primarily on the **stable boundary** rather than all the details behind it.

If the implementation behind that boundary changes:

💾 Database A

↓

💾 Database B

the change has a better chance of staying localized.

# **🔑 The important word is “protected”**

We aren't preventing variation.

The database is still allowed to change.

We're protecting the rest of the system **from the consequences of that variation**.

That's why the principle is called:

> 🛡️ **Protected Variations**

# **📚 Another fictional example**

Imagine our Library can send notifications.

Today:

📧 Email

Tomorrow:

📱 SMS

Later:

🔔 Push notification

If every domain object contains detailed email-specific logic, switching technologies could affect many classes.

Instead, we might design around the more stable concept:

🔔 **Notification**

while hiding the varying delivery technology behind it.

Then:

📧 Email

📱 SMS

🔔 Push

are variations behind a more stable boundary.

# **🎭 Protected Variations and Polymorphism**

Now GRASP starts connecting beautifully.

Suppose different notification mechanisms share a common abstraction.

Conceptually:

🔔 NotificationSender

↙️　　　↓　　　↘️

📧 Email　📱 SMS　🔔 Push

The rest of the system works with:

🔔 `NotificationSender`

rather than constantly asking:

> Is it Email?

> Is it SMS?

> Is it Push?

Now:

🎭 **Polymorphism**

can help us implement:

🛡️ **Protected Variations**

because the varying implementations can hide behind a common abstraction.

# **↪️ Protected Variations and Indirection**

Step 54 also connects.

Perhaps we introduce:

🔔 NotificationService

between:

📚 domain

and:

📧 external email provider.

That:

↪️ provides **Indirection**

and may simultaneously:

🛡️ **protect the domain from variation** in the external notification technology.

# **🛠️ Pure Fabrication can also participate**

Perhaps `NotificationService` isn't a natural domain entity.

We invented it for software-design reasons.

Then it might simultaneously represent:

🛠️ **Pure Fabrication**

↪️ **Indirection**

🛡️ **Protected Variations**

and help produce:

🕸️ **Low Coupling**

This is why GRASP isn't really nine isolated boxes.

One design decision can support several principles.

# **🧠 A very useful question**

When designing software, ask:

> **What here is likely to change?**

Maybe:

💾 storage technology

📧 external notification provider

🖥️ user interface

💳 payment provider

📄 file format

🌐 external API

Then ask:

> **If that changes, how much of my program must change with it?**

That's the Protected Variations mindset.

# **⚠️ Don't predict every imaginable future**

There's a trap here.

You could say:

> “Anything could change someday\!”

Then create abstractions around absolutely everything.

The result becomes:

😵 abstraction on abstraction on abstraction.

That's not the goal.

Protect variations that are:

🔄 known to vary

or:

📋 explicitly expected to change

or:

💥 particularly expensive if their change spreads.

# **🐕 PawsHome gives us a particularly clear clue**

Remember C7:

> Current persistence is in-memory, but future database support should not require rewriting domain logic. pawshome\_shelter

Conceptually, the specification is telling us:

**This may vary:**

💾 persistence mechanism

**This should remain protected:**

🧩 domain logic

That's almost the perfect mental picture:

🧩 **DOMAIN LOGIC**

🛡️ protected from

🔄 **STORAGE VARIATION**

# **🔎 This gives us something to investigate in reverse engineering**

When examining existing PawsHome code, we shouldn't automatically assume C7 is satisfied merely because the specification says it should be.

We inspect the implementation.

Ask:

🔎 Is persistence knowledge mixed into domain logic?

🔎 Would replacing in-memory storage require changing many domain classes?

🔎 Is storage reasonably separated?

Then we compare:

📜 **Specification**

versus:

💻 **Actual implementation**

That's exactly the Part 2 mindset.

# **🧩 All nine GRASP principles**

We have now covered the full GRASP set:

1️⃣ 👨‍🔬 **Information Expert**  
Give responsibility to the object with the necessary information.

2️⃣ 🏭 **Creator**  
Decide who should create an object.

3️⃣ 🎮 **Controller**  
Receive and coordinate system operations.

4️⃣ 🕸️ **Low Coupling**  
Avoid unnecessary dependencies.

5️⃣ 🎯 **High Cohesion**  
Keep responsibilities focused and related.

6️⃣ 🎭 **Polymorphism**  
Let different types handle varying behaviour through a common abstraction.

7️⃣ 🛠️ **Pure Fabrication**  
Invent a software-oriented class when that improves responsibility assignment.

8️⃣ ↪️ **Indirection**  
Introduce an intermediary when that usefully reduces direct coupling.

9️⃣ 🛡️ **Protected Variations**  
Protect stable parts of the system from things expected to vary.

# **🧠 Don't memorize GRASP as nine definitions**

A better way is to think of them as nine **questions**:

👨‍🔬 Who knows enough to do this?

🏭 Who should create this?

🎮 Who should receive this system operation?

🕸️ Does this object know too much about others?

🎯 Do these responsibilities really belong together?

🎭 Does behaviour vary by type?

🛠️ Does this responsibility need a software-oriented class of its own?

↪️ Would an intermediary reduce problematic dependency?

🛡️ What is likely to change, and can we stop that change spreading?

# **⭐ The sentence to remember**

> **Protected Variations means identifying likely points of change and designing stable boundaries so those changes remain localized.**

And with that, you now have the conceptual foundation for **all nine GRASP principles**.

---

# **🪜 Step 56 — See How All Nine GRASP Principles Work Together**

Now that we've learned all nine GRASP principles separately, the important next step is understanding that **real design decisions often involve several of them at once**.

GRASP is not:

> “Find the one correct pattern.”

It's more like:

> **Use several responsibility principles together to reason toward a sensible design.**

## **📜 FROM THE GITLAB ASSIGNMENT**

This matters especially in Part 2 because your PawsHome report must discuss design/GRASP problems and recommend justified improvements. assignment\_2

The example below is completely fictional. We're **not analyzing PawsHome for you**.

# **📚 Our tiny Library problem**

Imagine this requirement:

> A Member can borrow a Book if the Book is available and the Member has fewer than three borrowed Books. When the borrowing succeeds, a Loan is created and a notification is sent.

We have:

👤 `Member`

📕 `Book`

📄 `Loan`

🏛️ `Library`

🔔 notification functionality

Now ask:

> **Who should do what?**

That's where GRASP begins.

# **👨‍🔬 1\. Information Expert**

Who knows how many Books a Member currently has?

👤 **Member**

So Member is a natural expert concerning:

> Can I borrow another Book?

Who knows whether a Book is available?

📕 **Book**

So Book is a natural expert concerning:

> Am I available?

Already we're distributing responsibility according to information.

# **🏭 2\. Creator**

Now the borrowing succeeds and we need:

📄 `Loan`

Who should create it?

We ask:

> Which object naturally owns, records or closely uses Loans?

Perhaps our domain design says Library manages its Loans.

Then:

🏛️ Library

may be a reasonable Creator.

The important point isn't that `Library` is universally the correct answer.

It's that we use **Creator reasoning** rather than randomly creating Loan somewhere.

# **🎮 3\. Controller**

The user chooses:

> “Borrow this Book.”

Something needs to receive that system request.

Perhaps:

🎮 `LibraryController`

receives the operation.

But Controller shouldn't now perform every rule itself.

Instead it coordinates:

🎮 Controller

→ 👤 Member

→ 📕 Book

→ 🏛️ Library

The Controller conducts.

The domain objects perform their appropriate work.

# **🎯 4\. High Cohesion**

Now examine `Member`.

Does it:

👤 manage member information

📚 understand its borrowing situation

Those responsibilities fit reasonably well.

But suppose Member also:

📧 sends email

💾 writes SQL

🖥️ prints console menus.

Those responsibilities don't naturally belong to Member.

So High Cohesion tells us:

> Keep Member focused on being a Member.

# **🕸️ 5\. Low Coupling**

Suppose Member directly knows about:

📧 Gmail technology

💾 database technology

🖥️ console UI

📊 reporting system

Now Member depends on lots of unrelated things.

Low Coupling asks:

> **Does Member really need these dependencies?**

Probably not.

Keep Member dependent only on what its actual responsibilities require.

# **🎭 6\. Polymorphism**

Now imagine notifications can be sent as:

📧 Email

📱 SMS

🔔 Push

We don't necessarily want borrowing logic saying:

> If Email, do A.  
> If SMS, do B.  
> If Push, do C.

Instead, the different notification types could provide their own behaviour through a common abstraction.

That's:

🎭 **Polymorphism**

# **🛠️ 7\. Pure Fabrication**

But what domain object should know how to send technical notifications?

👤 Member?

📕 Book?

📄 Loan?

None of them seems ideal.

So perhaps we deliberately invent:

🔔 `NotificationService`

There might be no real-world Library object called a NotificationService.

That's okay.

We invented it because it gives the technical responsibility a sensible home.

That's:

🛠️ **Pure Fabrication**

# **↪️ 8\. Indirection**

Now instead of:

👤 Member → 📧 specific email provider

we can conceptually have:

👤 Member-related workflow

→ 🔔 NotificationService

→ 📧 provider

The service sits between the domain and external technology.

That's:

↪️ **Indirection**

It reduces how much the domain needs to know about the external system.

# **🛡️ 9\. Protected Variations**

Finally, we know the notification technology might change.

Today:

📧 Email

Tomorrow:

📱 SMS

So we try to prevent that variation from spreading throughout the borrowing system.

The stable part should continue thinking:

> “Send notification.”

while the varying technical mechanism remains behind a boundary.

That's:

🛡️ **Protected Variations**

# **🤯 Look what happened**

We started with one simple requirement:

> Member borrows Book and receives notification.

Yet our reasoning involved:

👨‍🔬 Information Expert  
🏭 Creator  
🎮 Controller  
🎯 High Cohesion  
🕸️ Low Coupling  
🎭 Polymorphism  
🛠️ Pure Fabrication  
↪️ Indirection  
🛡️ Protected Variations

That's the important lesson.

GRASP principles **interact**.

# **🔗 One decision can support several principles**

For example, introducing `NotificationService` might simultaneously:

🛠️ be a **Pure Fabrication**

↪️ provide **Indirection**

🛡️ support **Protected Variations**

🕸️ reduce **Coupling**

🎯 improve **Cohesion** of the domain classes.

So when analyzing software, don't think:

> “This piece of code must belong to exactly one GRASP category.”

Real design is more interconnected than that.

# **🧠 The deeper GRASP question**

All nine principles ultimately orbit one question:

> **Where should responsibility live?**

For every important piece of behaviour, ask:

**Who knows?**  
👨‍🔬 Information Expert

**Who creates?**  
🏭 Creator

**Who receives/co-ordinates?**  
🎮 Controller

**Are dependencies reasonable?**  
🕸️ Low Coupling

**Do responsibilities belong together?**  
🎯 High Cohesion

**Does behaviour vary by type?**  
🎭 Polymorphism

**Do we need a software-oriented helper abstraction?**  
🛠️ Pure Fabrication

**Would an intermediary help?**  
↪️ Indirection

**What might change?**  
🛡️ Protected Variations

# **⚠️ Don't force all nine into every analysis**

This is also important for your future PawsHome report.

Don't look at every class and write:

> “Now I need to find all nine GRASP patterns.”

You might have strong evidence for:

🎯 low cohesion

and:

🕸️ high coupling.

Great.

Maybe Creator isn't relevant to that particular problem.

Then don't force Creator into the paragraph.

GRASP is a **reasoning toolbox**, not a bingo card.

# **🔎 The practical analysis sequence**

When you eventually examine an actual suspicious piece of code, think:

🔎 **What does the code actually do?**

↓

🧠 **Where are the responsibilities?**

↓

❓ **Does that placement make sense?**

↓

🧩 **Which GRASP principle helps explain why or why not?**

↓

✨ **What alternative responsibility assignment could improve it?**

↓

🎯 **What concrete benefit would that produce?**

That's much stronger than beginning with:

> “I need to find a Low Coupling violation.”

Start with the **code and responsibilities**.

Use GRASP to explain what you discover.

# **⭐ The sentence to remember**

> **GRASP is fundamentally about assigning responsibilities to objects so that the resulting system is understandable, focused, loosely coupled and able to change.**

You now have the complete GRASP foundation needed for A2.

---

# **🪜 Step 57 — Read a UML Class Diagram Like Source Code**

We learned the individual UML pieces earlier. Now let's put them together into a **systematic reading method**.

The goal is that when you see a class diagram, you don't just see boxes and lines. You should gradually be able to read it almost as if it were a description of the program.

## **📜 FROM THE GITLAB MATERIAL**

This is particularly important in Crescendo because the supplied class diagram is not merely an illustration. The assignment says its operations use exact names/types because of automated checks, and its associations, multiplicities, inheritance and composition are intended to guide the implementation. crescendo\_music\_school

So let's develop a reading order.

# **👀 Pass 1 — Find the classes**

First, ignore almost everything else.

Look only at the class names.

For Crescendo we find concepts such as:

🏫 `MusicSchool`

👤 `Person`

🎓 `Student`

👨‍🏫 `Teacher`

🎼 `Course`

💰 `TuitionFee`

and enums:

📊 `Level`

💳 `PaymentStatus`

Now we have the **vocabulary of the design**.

Don't immediately try to understand every line.

First ask:

> **What kinds of objects exist?**

# **📦 Pass 2 — Read what each class KNOWS**

Next look at the attributes.

For example, conceptually:

🎼 Course knows things such as:

🏷️ code

📖 title

📊 level

🔢 capacity

This tells us about the object's **state**.

Remember our old formula:

> **Attributes \= what the object knows.**

# **⚙️ Pass 3 — Read what each class DOES**

Now inspect the operations.

For Course, the supplied diagram includes operations such as:

👨‍🏫 get teacher

🔄 change teacher

👥 get students

❓ check whether full

Now we're seeing the object's **behaviour and responsibilities**.

Our second formula:

> **Operations \= what the object does.**

Together:

📦 attributes \+ ⚙️ operations

give us a first picture of the class's responsibility.

# **🔒 Pass 4 — Look at visibility**

UML commonly uses:

**\+** \= public

**−** \= private

So if we see:

− capacity

but:

* isFull()

the design is conceptually saying:

> Outside objects shouldn't directly control Course's internal capacity-related state. They interact through its public operations.

That immediately connects UML to:

🔒 encapsulation.

# **🧬 Pass 5 — Find inheritance**

Now look for generalization arrows.

In Crescendo:

🎓 Student → 👤 Person

👨‍🏫 Teacher → 👤 Person

Read these as:

> Student **is a** Person.

> Teacher **is a** Person.

And because Person is abstract:

🚫 we don't create a generic Person.

We create concrete:

🎓 Students

or:

👨‍🏫 Teachers. crescendo\_music\_school

# **🔗 Pass 6 — Find associations**

Now look at the lines between classes.

For example:

🎓 Student ↔ 🎼 Course

This tells us:

> These objects have a structural relationship.

Don't yet assume exactly how many.

That's the next step.

# **🔢 Pass 7 — Read the multiplicities**

Now examine the numbers at the association ends.

Examples might include:

**1**

**0..**\*

**0..3**

These numbers are extremely important.

They answer:

> **How many objects can participate in this relationship?**

For Crescendo, the Student/Course relationship tells us that a Student may have at most three Courses, while a Course can have multiple Students subject to its capacity rules. crescendo\_music\_school crescendo\_music\_school

So the line isn't merely:

🎓 Student — Course 🎼

It contains a **constraint on the object graph**.

# **🧭 Pass 8 — Check navigability**

Now ask:

> **Which object can reach which other object?**

If:

A → B

then A can conceptually navigate to B.

If:

A ↔ B

both directions are represented.

In Crescendo, the supplied material explains that undirected association lines are treated as bidirectional and both ends must remain consistent. crescendo\_music\_school

Remember Step 45:

> **Both ends must tell the same story.**

# **💎 Pass 9 — Look for composition**

Now look for the filled diamond:

◆

This indicates **composition**.

In Crescendo we have important ownership relationships such as:

🏫 MusicSchool ◆— 🎼 Course

and:

🎓 Student ◆— 💰 TuitionFee

Now the relationship means more than:

> "These objects know each other."

It tells us about:

💎 ownership

🏗️ creation responsibility

⏳ lifecycle.

For example, the specification says a Course belongs to its MusicSchool and cannot exist outside it. crescendo\_music\_school

# **🏭 Pass 10 — Ask who creates whom**

Now combine:

💎 composition

with:

🏭 GRASP Creator.

If MusicSchool owns Courses:

🏫 → creates → 🎼

If Student owns TuitionFees:

🎓 → creates → 💰

Now the UML is starting to tell us not merely what objects exist, but how objects should come into existence.

# **🧠 Pass 11 — Connect relationships to rules**

Don't stop at the diagram.

Compare it with the written specification.

Suppose UML tells us:

🎓 Student → 0..3 Courses.

Then find the corresponding rule:

📏 Student may have a maximum of three Courses.

Now:

📐 UML

and:

📜 specification

are describing the same domain restriction from different perspectives.

That's exactly the kind of connection you need to become comfortable seeing.

# **⚙️ Pass 12 — Imagine the runtime object graph**

Now stop thinking about classes for a moment.

Imagine actual objects:

🏫 Crescendo Music School

↓

🎼 Piano Beginners

↔ 👨‍🏫 Anna

↔ 🎓 Erik

↔ 🎓 Sara

Then perhaps:

🎓 Erik

↓

💰 TuitionFee Autumn 2026

Now the UML becomes a network of **real runtime objects**.

This is the object graph we discussed earlier.

# **🔄 Pass 13 — Imagine operations changing that graph**

Suppose:

🎓 Erik enrolls in 🎼 Piano.

Before:

🎓 Erik　　🎼 Piano

After:

🎓 Erik ↔ 🎼 Piano

The operation created an association.

Suppose Erik withdraws.

Before:

🎓 Erik ↔ 🎼 Piano

After:

🎓 Erik　　🎼 Piano

The operation removed it.

So UML isn't merely static documentation.

It helps us understand what relationships the implementation must maintain as operations occur.

# **🧩 The complete reading order**

When you open a class diagram, use this sequence:

**1️⃣ Classes**  
What objects exist?

↓

**2️⃣ Attributes**  
What does each object know?

↓

**3️⃣ Operations**  
What does each object do?

↓

**4️⃣ Visibility**  
What is private/public?

↓

**5️⃣ Inheritance**  
What **is a** what?

↓

**6️⃣ Associations**  
Which objects are structurally connected?

↓

**7️⃣ Multiplicity**  
How many?

↓

**8️⃣ Navigability**  
Which direction can we travel?

↓

**9️⃣ Composition**  
Who strongly owns whom?

↓

**🔟 Creation**  
Who should create whom?

↓

**1️⃣1️⃣ Rules**  
What constraints must these relationships obey?

↓

**1️⃣2️⃣ Runtime objects**  
What would actual instances look like?

↓

**1️⃣3️⃣ Behaviour**  
How do operations change the object graph?

# **🔄 And here's the beautiful A2 symmetry**

In **Part 1**, you essentially move:

📐 UML

↓

🧠 understand this information

↓

💻 implementation.

In **Part 2**, you reverse the direction:

💻 implementation

↓

🧠 discover this information

↓

📐 UML.

So the same UML-reading ability works in **both directions**.

# **⭐ The sentence to remember**

> **A class diagram tells you what objects exist, what they know and do, and how their instances are structurally connected and constrained.**

Once you can read all of those pieces together, a UML class diagram starts becoming much less like a mysterious picture and much more like a **compressed description of an object-oriented program**.

# **🪜 Step 58 — Go from Source Code Back to UML**

Step 57 went in this direction:

📐 **UML → understand the design → code**

Now we reverse it:

💻 **Code → discover the design → UML**

This is called:

> 🔎 **Reverse engineering**

And this is the central skill in **Part 2 with PawsHome**.

## **📜 FROM THE GITLAB ASSIGNMENT**

In Part 2, you are given an existing PawsHome Java prototype. You must study the implementation and create UML documentation describing the **current implementation**.

Crucially, the assignment says you should **not modify or fix the supplied code** while doing this analysis.

Your current-system diagrams must describe what the implementation actually does, even when it differs from the specification. assignment\_2

So let's build a recipe for reading code backwards.

# **🔎 Pass 1 — Find the classes**

Start with the easiest question:

> **What classes actually exist?**

Suppose our fictional Library source contains:

📕 `Book`

👤 `Member`

📄 `Loan`

🏛️ `Library`

🎮 `LibraryController`

Write those down.

At this stage, don't decide whether they're good classes.

You're documenting reality.

This distinction is extremely important:

❌ “There SHOULD be a Notification class.”

is design thinking.

✅ “There IS a Book class.”

is reverse engineering.

# **📦 Pass 2 — Inspect the fields**

Now open one class at a time and look at its fields.

Suppose `Book` contains information representing:

🏷️ title

✍️ author

🔢 ISBN

📗 availability.

Those become candidates for UML:

> **attributes**

So the basic translation is:

💻 field in source code

↓

📐 attribute in UML.

# **⚠️ But not every field is merely an attribute**

Suppose Member contains a reference to:

📄 Loan

or a collection of:

📕 Book objects.

That's different.

A field containing a simple value such as:

📝 name

🔢 age

📧 email

is often represented as an attribute.

But a field referencing another important domain object may indicate:

🔗 **an association**

This is one of the most important distinctions in reverse engineering.

# **🔗 Pass 3 — Find object references**

Suppose we discover conceptually:

👤 Member stores several Book objects.

That tells us:

👤 Member → 📕 Book

There is some structural relationship between them.

Now ask:

> Does Book also store a reference back to Member?

If yes:

👤 Member ↔ 📕 Book

may be bidirectional.

If not:

👤 Member → 📕 Book

may only be navigable from Member toward Book.

This is why you cannot determine the whole class diagram simply by reading the filenames.

You must inspect how objects reference each other.

# **🔢 Pass 4 — Determine multiplicity**

Now comes a subtle part.

Suppose Member stores:

📚 a collection of Books.

We can infer that Member can structurally reference multiple Books.

But suppose the specification says:

> Maximum three Books.

Can we immediately draw:

**0..3**

because the specification says so?

🚨 **Not for the current-system diagram.**

Remember:

📜 specification says what SHOULD happen.

💻 implementation tells us what ACTUALLY happens.

You must inspect whether the code really enforces that maximum.

If the implementation permits unlimited Books, the current UML should reflect the implementation, and the difference becomes material for your:

🔎 **gap analysis**.

This is a crucial Part 2 idea.

# **⚙️ Pass 5 — Find the methods**

Now inspect what operations each class provides.

Conceptually, perhaps Member has operations corresponding to:

📚 borrow book

↩️ return book

🔍 inspect borrowed books.

These become candidates for UML:

⚙️ **operations**

So:

💻 method

↓

📐 UML operation.

But don't merely copy text blindly.

Understand what the method actually does, because you'll soon need that knowledge for:

🎬 sequence diagrams

and:

🧠 responsibility analysis.

# **🧬 Pass 6 — Find inheritance**

Look for superclass/subclass relationships.

Conceptually:

🎓 Student extends Person

means:

🎓 Student

△

👤 Person

in UML generalization.

Now apply our old test:

> Student **is a** Person.

Reverse engineering means discovering that relationship from the source rather than inventing it from the domain description.

# **🧭 Pass 7 — Distinguish association from dependency**

This is where Step 39 becomes useful.

Imagine `Member` permanently stores a reference to a `Book`.

That suggests:

🔗 **Association**

But imagine a method merely receives a `Printer` temporarily, uses it and doesn't retain it.

That may instead indicate:

➡️ **Dependency**

Remember:

### **🔗 Association**

> “I structurally know this object.”

### **➡️ Dependency**

> “I temporarily use this thing.”

This distinction matters because Part 3 explicitly asks you to verify the AI's associations, navigability and dependencies against the actual implementation. assignment\_2

# **💎 Pass 8 — Be careful with composition**

Suppose you see:

🏛️ Library contains Books.

Do not immediately draw:

🏛️ Library ◆— 📕 Book

Composition means more than:

> “A has a B.”

You need evidence of:

💎 strong ownership

and:

⏳ lifecycle relationship.

Ask:

> Who creates the object?

> Can it meaningfully exist independently?

> Is it owned exclusively?

> What does the implementation actually enforce?

Composition is a stronger claim than ordinary association.

# **🏗️ Pass 9 — Inspect constructors and creation**

Look for:

> **Where are objects actually created?**

Suppose:

🏛️ Library creates Loans.

That's useful information about:

🏭 creation responsibility.

Now GRASP Creator enters the analysis.

But again, first record:

> **What does the code do?**

Only later ask:

> **Is that a good responsibility assignment?**

# **🧠 Pass 10 — Read method bodies**

This is where reverse engineering becomes detective work.

A class may look simple from its fields and method names.

But the method body reveals:

🔎 what other objects it calls

🔎 what rules it checks

🔎 what state it changes

🔎 what exceptions it throws

🔎 what objects it creates

🔎 what relationships it modifies.

This is especially important for your sequence diagrams.

# **🎬 Pass 11 — Follow one use case through the code**

Suppose we want to reverse-engineer:

> “Member borrows Book.”

Find where that operation starts.

Then follow the actual execution:

👤 user action

↓

🎮 receiving object

↓

📦 method call

↓

📕 another object

↓

📄 perhaps a Loan is created

↓

🔄 state changes.

Now we're moving from:

📐 **class diagram thinking**

to:

🎬 **sequence diagram thinking**.

The class diagram asks:

> **What structure exists?**

The sequence diagram asks:

> **What actually communicates during this particular scenario?**

# **📏 Pass 12 — Look for rules in the implementation**

Suppose the specification says:

> Member may borrow at most three Books.

Search the implementation for the actual enforcement.

Maybe you find:

✅ maximum three is enforced.

Then implementation agrees with specification.

Maybe:

❌ there is no check.

Then you've found a gap.

Maybe:

⚠️ it checks maximum five instead.

That's also a gap.

So the process is:

📜 requirement

↔️

💻 implementation evidence

↓

🧠 conclusion.

# **🚨 Pass 13 — Don't silently repair strange code in the UML**

This is one of the most important rules for Part 2\.

Suppose you think:

> “This association really SHOULD be bidirectional.”

But the code only implements one direction.

Your current diagram should not magically make it bidirectional.

Suppose:

> “This class SHOULD have a relationship to Volunteer.”

But the implementation doesn't.

Don't add it to the current diagram merely because the specification says it belongs there.

Otherwise your diagram stops being reverse engineering.

It becomes redesign.

# **🧭 Keep the three stages separate**

This is worth memorizing:

### **🔎 CURRENT**

> **What does the implementation actually contain?**

↓

### **⚖️ COMPARE**

> **How does that differ from the specification?**

↓

### **✨ IMPROVED**

> **How should the design be improved?**

Do not mix these three stages together.

# **🐕 This is exactly the PawsHome challenge**

For PawsHome, the specification describes actors, use cases and constraints such as applications, visits, volunteers, approval rules and adoption rules. pawshome\_shelter

But Part 2 does **not** ask you to assume the implementation correctly realizes all of them.

Instead:

📜 PawsHome specification

and:

💻 PawsHome implementation

are two separate sources of information.

You compare them.

That difference is where much of your analysis comes from.

# **🧩 Your reverse-engineering recipe**

When you eventually examine PawsHome yourself, you can use this order:

**1️⃣ Classes** — What classes exist?

**2️⃣ Fields** — What does each class store?

**3️⃣ References** — Which objects know other objects?

**4️⃣ Collections** — Which relationships can contain several objects?

**5️⃣ Multiplicity** — What cardinalities does the implementation actually allow/enforce?

**6️⃣ Methods** — What can each object do?

**7️⃣ Inheritance** — What type hierarchies exist?

**8️⃣ Navigability** — Which objects can reach which others?

**9️⃣ Dependencies** — Which objects merely use others temporarily?

**🔟 Creation** — Who creates whom?

**1️⃣1️⃣ Method bodies** — What actually happens?

**1️⃣2️⃣ Rules** — What constraints are really enforced?

**1️⃣3️⃣ Use-case paths** — Which objects communicate, and in what order?

Then, and only then:

⚖️ compare against specification.

# **⭐ The sentence to remember**

> **Reverse engineering means letting the implementation tell you what the current design is, even when that design is incomplete, strange or wrong compared with the specification.**

That sentence is extremely important for Part 2\.

You are first:

🕵️ **detective**

then:

⚖️ **critic**

and only afterward:

🏗️ **designer**.

# **🪜 Step 59 — Build a Gap Analysis Systematically**

Now we arrive at one of the most important practical skills for **Part 2**:

🔎 **Gap analysis**

The basic idea is simple:

> **Compare what PawsHome is supposed to do with what the existing implementation actually does.**

But there is a good way and a bad way to do this.

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 requires you to compare the existing PawsHome implementation against the supplied specification and identify problems or missing functionality. The comparison includes areas such as use cases, relationships, multiplicities, rules, separation of domain logic, validation/error handling and GRASP/design issues. assignment\_2

The important distinction is:

📜 **Specification \= what should exist**

💻 **Implementation \= what actually exists**

⚖️ **Gap analysis \= the difference between them**

# **🧠 The core recipe**

For each important requirement, think in this order:

📜 **1\. Requirement**

↓

💻 **2\. Code evidence**

↓

⚖️ **3\. Match or mismatch**

↓

💥 **4\. Consequence**

↓

✨ **5\. Possible improvement**

This gives you a disciplined way to analyze the system instead of simply writing:

> “This code seems bad.”

# **📜 Stage 1 — State the requirement**

Start with something concrete from the specification.

For example, PawsHome UC4 says that an adopter can apply for an available animal, the application begins pending, an adopter may have at most two pending applications, and duplicate pending applications for the same animal are not allowed. pawshome\_shelter

At this stage you're answering:

> **What is the system supposed to do?**

Nothing about the implementation yet.

# **💻 Stage 2 — Find the corresponding code**

Now investigate the existing implementation.

Find:

🔎 Which class handles this?

🔎 Which method performs the operation?

🔎 What checks happen?

🔎 What objects are changed?

🔎 What happens when a rule is violated?

This is where you need **evidence**.

Don't begin with:

> “I think the system probably…”

Instead:

> “The implementation does…”

because you've actually followed the relevant source code.

# **⚖️ Stage 3 — Decide whether they match**

Now compare the two.

There are several possibilities.

### **✅ Match**

Specification requires X.

Implementation actually enforces X.

No gap for that requirement.

### **❌ Missing**

Specification requires X.

Implementation doesn't implement X.

That's a gap.

### **⚠️ Incorrect**

Specification requires X.

Implementation does Y.

That's a gap.

### **🟡 Partial**

The implementation handles part of the requirement but not all of it.

That's also worth documenting.

# **🐕 A fictionalized example**

Suppose the specification says:

> An adopter may have at most two pending applications.

Imagine you inspect the implementation and discover that it checks the number of pending applications correctly.

Then:

📜 Requirement: maximum two pending applications.

💻 Evidence: implementation checks the adopter's pending applications before accepting another.

⚖️ Result: matches specification.

Nothing dramatic.

That's still useful analysis.

# **🚨 Now imagine the check is missing**

Suppose instead the implementation allows:

1️⃣ pending application

2️⃣ pending application

3️⃣ pending application

4️⃣ pending application…

Now we have:

📜 **Requirement:** maximum two.

💻 **Implementation:** no effective maximum-two enforcement.

⚖️ **Gap:** implementation does not enforce the specified multiplicity/business rule.

💥 **Consequence:** the system can enter a state prohibited by the specification.

✨ **Improvement:** responsibility for enforcing the rule needs to be placed appropriately in the improved design.

Notice that we haven't jumped straight to:

> “Put this exact method in this exact PawsHome class.”

That would begin solving the actual assessed design for you.

We're learning the reasoning process.

# **🔢 Gap analysis isn't only about missing features**

A common mistake would be to search only for:

> “Which use cases are missing?”

But Part 2 goes deeper.

You should be thinking about several categories.

### **🎬 Functionality**

Are required use cases implemented?

### **🔗 Relationships**

Do objects have the relationships required by the specification?

### **🔢 Multiplicity**

Does the implementation actually enforce required numbers?

### **📏 Domain rules**

Are required business rules enforced?

### **⚠️ Validation and errors**

What happens with invalid operations/input?

### **🎯 Responsibilities**

Is domain logic located sensibly?

### **🕸️ Coupling**

Are objects unnecessarily dependent on other parts?

### **🎯 Cohesion**

Do classes have focused responsibilities?

### **🧩 Separation**

Is domain logic independent from UI/technical concerns where required?

# **🧠 Multiplicity deserves special attention**

Suppose the specification says:

> A Volunteer may supervise at most three visits per day. pawshome\_shelter

It isn't enough to discover:

> “Volunteer has a collection of Visits.”

That only tells you:

📚 multiple Visits can exist.

You still need to investigate:

> **Does the implementation actually enforce the maximum of three per day?**

This is the difference between merely reading structure and analyzing behaviour.

# **🐾 Another particularly important PawsHome example**

The specification says approval requires:

🐕 animal still available

AND:

👍 at least one successful/good visit.

When approval succeeds:

🐾 animal becomes adopted

AND:

❌ other pending applications for that animal are automatically rejected with the specified reason. pawshome\_shelter

That's not one tiny rule.

It's a **cluster of requirements**.

So when investigating that use case, don't simply ask:

> “Is there an approve method?”

Instead break the requirement apart:

🔎 Does it require a pending application?

🔎 Does it check animal availability?

🔎 Does it require a good visit?

🔎 Does the animal become adopted?

🔎 Are other pending applications rejected?

🔎 Is the required rejection reason used?

Now you can compare each part against the implementation.

This is much more precise.

# **🧩 Break large requirements into testable statements**

This is an extremely useful habit.

Instead of:

> **UC8 works / doesn't work**

break UC8 into smaller claims.

Then your analysis becomes:

Requirement A → evidence → result

Requirement B → evidence → result

Requirement C → evidence → result

Requirement D → evidence → result.

That makes your report much easier to justify.

# **💥 Stage 4 — Explain why the gap matters**

Don't stop at:

> “The check is missing.”

Explain the consequence.

For example:

> Because the rule is not enforced, the implementation can represent a state that the specification says must be impossible.

Or:

> Because this association exists only in one direction, the current implementation cannot navigate the relationship in the way described by the required design.

Or:

> Because domain validation occurs in the UI, another future interface could bypass the rule.

Now you've moved from:

🔎 observation

to:

🧠 software-design analysis.

# **✨ Stage 5 — Recommend an improvement**

Only after understanding the current system and the gap should you move to:

> **How could the design be improved?**

This is where your GRASP knowledge becomes useful.

Ask:

👨‍🔬 Who has the information required?

🎯 Where would the responsibility be most cohesive?

🕸️ Can we avoid unnecessary coupling?

🏭 Who naturally owns/creates the relevant objects?

🎮 Is coordination being confused with domain logic?

🛡️ Is something likely to vary that should be isolated?

Now your improvement has a reason behind it.

# **⚠️ Keep CURRENT and IMPROVED separate**

This is absolutely central to Part 2\.

Imagine the code is bad.

Your:

🔎 `current_class_diagram.png`

must still represent the bad current implementation.

You don't “help” it by fixing the UML.

Later:

✨ `improved_class_diagram.png`

shows your proposed better design.

So:

**CURRENT DIAGRAM**

> What exists.

**GAP ANALYSIS**

> What's wrong or missing compared with requirements.

**IMPROVED DIAGRAM**

> What you recommend.

# **📝 A useful writing structure**

When you later write your analysis, a strong paragraph can follow:

### **📜 Requirement**

What does the specification require?

### **💻 Evidence**

What does the implementation actually do?

### **⚖️ Assessment**

Does it match, partially match, or fail to match?

### **💥 Consequence**

Why does the difference matter?

### **✨ Recommendation**

How should the design be improved?

This is very similar to our earlier:

**Evidence → Problem → GRASP → Improvement → Benefit**

The two structures fit together nicely.

# **🧠 Think like a scientist**

There's a deeper lesson here.

Don't begin with the conclusion:

> “PawsHome has bad design.”

Instead:

📜 establish expectation

↓

💻 gather evidence

↓

⚖️ compare

↓

🧠 reason

↓

✨ recommend.

That's much stronger academically.

# **📋 Your mental gap-analysis table**

You can imagine every requirement having five columns:

**Requirement | Implementation evidence | Result | Consequence | Recommendation**

For example, conceptually:

📜 max two pending applications

→ 💻 inspect corresponding implementation

→ ⚖️ match / partial / mismatch

→ 💥 explain effect

→ ✨ propose justified improvement if needed.

You don't need to guess.

You **trace**.

# **🔑 One more distinction**

There are really two different questions in Part 2:

### **⚖️ Question A**

> **Does the implementation satisfy the specification?**

That's your **gap analysis**.

### **🧠 Question B**

> **Is the implementation well designed?**

That's your **design/GRASP analysis**.

Those overlap, but they're not identical.

A program could:

✅ produce the required behaviour

while still having:

🐙 poor cohesion

🕸️ excessive coupling

🎮 overloaded controller

👨‍🔬 misplaced responsibilities.

Conversely, some code might be fairly cleanly structured but simply:

❌ fail to implement a required use case.

So always distinguish:

**requirements correctness**

from:

**design quality**.

# **⭐ The sentence to remember**

> **Gap analysis means taking a specific requirement, finding concrete implementation evidence, comparing the two, explaining any difference, and only then proposing an improvement.**

Or even shorter:

> 📜 **Should** → 💻 **Does** → ⚖️ **Difference** → 💥 **Why it matters** → ✨ **Improve**

That's an excellent mental formula for Part 2\.

# **🪜 Step 60 — Keep the Four PawsHome Diagrams Separate**

Part 2 asks you to create several diagrams for PawsHome. Four of them are especially easy to mix up because two describe the **current system** and two describe the **improved/required system**.

The most important rule is:

> 🔎 **First document reality. Then compare it with the specification. Only after that design the improvement.**

## **📜 FROM THE GITLAB ASSIGNMENT**

For Part 2, the required diagram files include:

🔎 `current_class_diagram.png`

🔎 `current_use_case_diagram.png`

🎬 `apply_for_adoption_sequence.png`

🎬 `approve_application_sequence.png`

✨ `improved_class_diagram.png`

✨ `complete_use_case_diagram.png`

The current diagrams and sequence diagrams are based on the existing implementation, while the improved/complete diagrams belong to the recommendation side of the analysis. assignment\_2

In this step we'll focus on the **four class/use-case diagrams**.

# **🔎 1\. Current Class Diagram**

The first question is:

> **What object-oriented structure actually exists in the supplied PawsHome implementation?**

You discover this by reading the code.

You look for:

📦 classes

📝 attributes/fields

⚙️ operations

🧬 inheritance

🔗 associations

🔢 multiplicities actually supported/enforced

🧭 navigability

➡️ relevant dependencies.

This becomes:

🔎 `current_class_diagram.png`

# **🚨 The crucial rule**

Imagine the PawsHome specification clearly requires some relationship.

But you inspect the source code and discover:

> ❌ the implementation doesn't actually have it.

Then you **do not add it** to the current class diagram just because it ought to exist.

Why?

Because this diagram answers:

> **What IS implemented?**

not:

> **What SHOULD have been implemented?**

# **📜 Specification is evidence of requirements, not current implementation**

This distinction is fundamental.

For the current diagram:

💻 **code is your primary evidence.**

The specification helps you understand what the program was intended to accomplish, but it cannot magically create something in the current implementation.

So if:

📜 specification says X

but:

💻 implementation contains Y

then:

🔎 current diagram shows **Y**.

And:

⚖️ gap analysis explains **X versus Y**.

# **🎭 2\. Current Use-Case Diagram**

Now we change perspective.

The class diagram asks:

> **What structural design exists?**

The use-case diagram asks:

> **What user-visible functionality is actually supported?**

PawsHome's specification describes three actors:

🐾 Adopter

👩‍💼 Shelter staff

🤝 Volunteer. pawshome\_shelter

And it defines UC1–UC9. pawshome\_shelter

But your:

🔎 `current_use_case_diagram.png`

should describe the functionality actually present in the implementation.

Again:

> **CURRENT means CURRENT.**

# **🧠 Suppose UC7 is required but missing**

Purely as an illustration, imagine the specification contained UC7 but the implementation completely lacked that functionality.

Then you wouldn't put UC7 into the current diagram simply because:

> “Well, it's in the requirements.”

Instead:

🔎 Current use-case diagram → shows what exists.

⚖️ Gap analysis → says UC7 is missing.

✨ Complete use-case diagram → can represent the required functionality.

That's the separation.

# **✨ 3\. Improved Class Diagram**

Now your role changes.

You're no longer only:

🕵️ archaeologist.

You're becoming:

🏗️ designer.

The improved class diagram asks:

> **Given the specification and the problems we discovered, what would a better object-oriented design look like?**

This becomes:

✨ `improved_class_diagram.png`

Here you can address problems discovered during analysis.

Perhaps there are issues involving:

🎯 cohesion

🕸️ coupling

👨‍🔬 Information Expert

🏭 Creator

🎮 Controller

🔢 multiplicities

📏 domain rules

⚠️ validation

🧩 separation of concerns.

But improvements should have **reasons**.

Don't redesign merely because:

> “This looks nicer.”

You want:

🔎 evidence

↓

🧠 identified problem

↓

📚 design principle

↓

✨ proposed improvement.

# **⚠️ The improved diagram isn't fantasy either**

There's another possible mistake.

Once students hear:

> “Improved design”

they might think:

> “Great\! We can redesign everything however we want.”

Not really.

Your improved design should still respond to:

📜 the PawsHome requirements

and:

🔎 problems discovered in the current implementation.

So the improved diagram should be **justifiable**.

You should be able to explain:

> “I changed this because…”

# **🎭 4\. Complete Use-Case Diagram**

Finally we have:

✨ `complete_use_case_diagram.png`

The key word here is:

> **complete**

Now you're no longer documenting only what the existing prototype happens to support.

You're representing the required PawsHome functionality based on the supplied specification.

The specification defines UC1–UC9, including registration, applications, withdrawal, visits, decisions and listing available animals. pawshome\_shelter

So conceptually:

🔎 **Current use-case diagram**

asks:

> What functionality does the prototype currently provide?

while:

✨ **Complete use-case diagram**

asks:

> What functionality should the complete specified system provide?

# **🧩 The four diagrams in one mental picture**

Think of two dimensions.

### **STRUCTURE**

🔎 **Current Class Diagram**

> What structure does the existing code have?

✨ **Improved Class Diagram**

> What structure do we recommend?

### **FUNCTIONALITY**

🔎 **Current Use-Case Diagram**

> What functionality does the existing implementation provide?

✨ **Complete Use-Case Diagram**

> What functionality does the specification require?

That's the cleanest way to remember them.

# **🔀 The dangerous mistake: mixing SHOULD into IS**

Imagine the specification says:

📜 A → B

but the implementation says:

💻 A → C.

If you draw:

🔎 current diagram: A → B

because B is the correct design…

you've destroyed valuable information.

The difference:

📜 A → B

versus:

💻 A → C

is exactly what your analysis is supposed to discover.

The ugly or incorrect current design is **evidence**.

# **🔀 The opposite mistake: copying IS into SHOULD**

There's also the reverse mistake.

Suppose the current implementation has a poor responsibility assignment.

If you simply copy the same structure into:

✨ `improved_class_diagram.png`

then you haven't actually responded to the problem you identified.

So:

**Current**

must not be secretly improved.

And:

**Improved**

must not blindly reproduce Current.

# **🧠 Think of three layers**

This is perhaps the strongest mental model:

### **🔎 LAYER 1 — REALITY**

> What does the code actually do?

Produces:

current diagrams.

↓

### **⚖️ LAYER 2 — ANALYSIS**

> How does reality compare with the specification and OO design principles?

Produces:

gap analysis \+ design analysis.

↓

### **✨ LAYER 3 — RECOMMENDATION**

> What should change?

Produces:

improved/complete diagrams and recommendations.

# **🎬 Where do the sequence diagrams fit?**

Part 2 also requires:

🎬 `apply_for_adoption_sequence.png`

and:

🎬 `approve_application_sequence.png`. assignment\_2

These belong primarily to your investigation of the **existing implementation**.

They answer:

> During this particular use case, which objects actually communicate, which methods are called, and in what order?

So they give you another kind of evidence about the current system.

Class diagram:

📸 structural snapshot.

Sequence diagram:

🎥 behavioural interaction over time.

# **🔗 All six diagrams therefore tell one story**

Your Part 2 diagrams aren't six unrelated pictures.

Together they form a narrative:

🔎 **Current class diagram**  
What structure exists?

🔎 **Current use-case diagram**  
What functionality exists?

🎬 **Apply sequence**  
How does one important current scenario execute?

🎬 **Approve sequence**  
How does another important current scenario execute?

⚖️ **Your analysis**  
What differs from the specification, and what design problems exist?

✨ **Improved class diagram**  
How could the structure be improved?

✨ **Complete use-case diagram**  
What functionality should the complete system support?

# **⭐ The sentence to remember**

> **Current diagrams describe the implementation you found; improved and complete diagrams describe what you recommend or what the specification requires.**

Or even shorter:

> 🔎 **CURRENT \= IS**

> ✨ **IMPROVED/COMPLETE \= SHOULD**

Never silently mix the two.

---

# **🪜 Step 61 — Verify the AI Properly in Part 3**

Part 3 changes your role again.

In Part 2 you were:

🕵️ **the reverse engineer**

In Part 3, the AI becomes another reverse engineer, and **you become its reviewer**.

The key idea is:

> **Your job is not to decide whether the AI answer sounds intelligent. Your job is to check whether its claims are actually supported by the source code.**

## **📜 FROM THE GITLAB ASSIGNMENT**

Before Part 3 begins, your own Part 2 analysis and diagrams must already be completed. Once Part 3 starts, those Part 2 artifacts must remain unchanged.

If the AI later reveals something you got wrong, you document that discovery in Part 3 rather than silently correcting your original Part 2 work. genai\_log\_template

This is important because the assignment is effectively comparing:

👤 **Your independent analysis**

with:

🤖 **The AI's analysis**

against:

💻 **The actual implementation**.

# **1️⃣ First, give the AI the required material**

## **📜 FROM THE GITLAB ASSIGNMENT**

For Part 3, the AI is given:

📜 the PawsHome specification

and:

💻 the PawsHome Java source.

It is asked to produce three main things:

📐 a current-system class diagram

🎬 a sequence diagram for **“Staff approves an application”**

🧠 a list of mismatches and possible GRASP/design problems. assignment\_2

Notice something important:

The AI isn't being asked to invent an ideal system.

It's also performing:

🔎 **reverse engineering**.

# **2️⃣ Preserve what the AI actually said**

You must not clean up the AI's answers before evaluating them.

## **📜 FROM THE GITLAB MATERIAL**

Every prompt and every answer must be saved **word for word** in:

📁 `assignment_2/docs/genai_raw/`

using files such as:

📄 `01_prompt.md`

📄 `01_answer.md`

and so on.

You should not rewrite, summarize or polish those raw records. genai\_log\_template

Why?

Because otherwise you might accidentally make the AI look:

✅ more accurate

or:

❌ less accurate

than it really was.

The raw material is the evidence.

# **3️⃣ Preserve the AI's diagrams too**

The same principle applies to diagrams.

Suppose the AI produces a class diagram and you immediately notice:

> “Oops, that multiplicity is wrong.”

You do **not** quietly fix it before evaluation.

The assignment wants you to evaluate:

🤖 what the AI actually produced.

So preserve it first.

Then criticize it.

# **4️⃣ Now verify the AI class diagram**

This is where your Step 58 skills become useful.

Don't simply stare at the AI diagram and ask:

> “Does this look plausible?”

Go category by category.

Check:

📦 **Classes**  
Do these classes actually exist?

📝 **Attributes**  
Does the source really contain what the AI claims?

⚙️ **Operations**  
Are these methods actually present?

🔗 **Associations**  
Do the corresponding object relationships exist?

🔢 **Multiplicities**  
Does the implementation actually support/enforce what the AI drew?

🧭 **Navigability**  
Can the objects actually reach one another in the direction shown?

➡️ **Dependencies**  
Did the AI correctly identify temporary usage relationships?

The Part 3 template explicitly asks for this kind of detailed verification. genai\_log\_template

# **🚨 Watch for AI invention**

Suppose the AI draws:

📦 `AdoptionManager`

It sounds perfectly reasonable.

It even sounds like a class that **could** belong in PawsHome.

But then you search the Java source and discover:

❌ there is no `AdoptionManager`.

Then the correct conclusion isn't:

> “Well, it was a sensible suggestion.”

For a **current-system diagram**, the AI has invented something.

That's a factual reverse-engineering error.

# **🚨 Watch for AI omission too**

The opposite can happen.

Suppose an important class clearly exists in the Java implementation.

But the AI leaves it out.

That's:

❌ an omission.

So AI errors can include:

➕ invented information

➖ missing information

🔄 incorrect information.

# **5️⃣ Verify multiplicities particularly carefully**

AI can easily produce a diagram that **looks** reasonable.

For example, it might see a collection and conclude:

> 0..\*

But perhaps the code actually enforces:

> 0..2

Or perhaps the specification says:

> maximum 2

but the implementation fails to enforce it.

Then the AI may accidentally draw the:

📜 **required design**

instead of the:

💻 **current implementation**.

That's exactly the distinction you've spent many steps learning.

# **6️⃣ Verify the AI sequence diagram step by step**

Now take:

🎬 **Staff approves an application**

Don't evaluate the entire diagram with:

> “Looks about right.”

Instead trace it against the source code.

For each important message ask:

🔎 Does this method call actually happen?

🔎 Is the correct object receiving it?

🔎 Does it happen in this order?

🔎 Did the AI omit an important call?

🔎 Did the AI invent a call?

🔎 Did it move logic to an object that doesn't actually perform it?

# **🎬 Think of the source code as the film**

Imagine the Java execution is the actual movie.

🎥 **SOURCE CODE**

The sequence diagram is someone's description of the movie.

The AI might say:

> Scene 1 → Scene 2 → Scene 3 → Scene 4\.

But you watch the actual movie and discover:

> Scene 1 → Scene 3 → Scene 2\.

Then the AI's sequence is wrong.

Even if its version would have been a better design.

Again:

> **Part 3 verification is about accuracy, not whether the AI's invented version seems sensible.**

# **7️⃣ Classify the AI's problem claims**

The assignment gives you three extremely useful verdicts:

### **✅ Confirmed**

The AI claim is supported by the implementation.

### **❌ Rejected**

The implementation contradicts the AI claim.

### **🟡 Partly correct**

There is some truth to the claim, but it is incomplete, exaggerated or inaccurate in some important way. genai\_log\_template

# **🧠 “Partly correct” is especially valuable**

Suppose AI says:

> “Class X contains all validation.”

You investigate and discover:

Class X contains **some** validation.

But another important class also performs validation.

Then saying simply:

❌ Rejected

might lose useful nuance.

A better verdict could be:

🟡 **Partly correct**

because the general observation had some basis, but the AI overstated it.

That's more careful analysis.

# **8️⃣ Your own Part 2 isn't automatically correct either**

This is one of the most interesting parts of the assignment.

Suppose:

👤 Your Part 2 says A.

🤖 AI says B.

What should you do?

Not:

> “I'm the human, so A wins.”

And not:

> “AI probably knows better, so B wins.”

Instead:

💻 **Go back to the Java source.**

The implementation is the evidence for what the current system actually does.

# **🔬 You now have three things to compare**

For a particular relationship, perhaps:

### **👤 YOUR PART 2**

You drew:

A → B

### **🤖 AI**

AI drew:

A ↔ B

### **💻 JAVA SOURCE**

You inspect the implementation.

Suppose the source proves:

A ↔ B

Then:

🤖 AI was correct.

👤 your original analysis was wrong.

And that's okay.

The assignment specifically allows you to discuss this discovery in Part 3\.

What you must **not** do is secretly return to Part 2 and change history.

# **🧪 That's why Part 2 gets frozen**

Now the purpose becomes clearer.

If you were allowed to continually modify Part 2 after seeing the AI answer, the comparison would become meaningless.

You could make:

👤 human analysis

silently become identical to:

🤖 AI analysis.

By freezing Part 2 first, the course can examine:

> What did you independently discover?

versus:

> What did AI discover?

versus:

> What does the code actually support?

# **9️⃣ You must critically challenge the AI**

## **📜 FROM THE GITLAB MATERIAL**

The GenAI log requires at least one follow-up where you critically probe, challenge, ask the AI to justify something, or ask it to correct something. genai\_log\_template

This is important.

You're not supposed to interact like:

👤 “Give me answer.”

🤖 “Here.”

👤 “Thanks.”

Instead, you demonstrate critical use.

Conceptually:

🤖 AI makes claim X.

↓

👤 You inspect the code.

↓

🔎 Something looks suspicious.

↓

👤 You challenge the AI:

> What evidence in the implementation supports X?

↓

🤖 AI responds.

↓

👤 You verify again.

# **🧠 The AI is therefore an object of study**

This is a useful way to understand Part 3\.

You're not primarily being tested on:

> **Can AI do my homework?**

You're studying:

> **How reliable is GenAI when reverse-engineering software, and how can a developer verify its output?**

That's a much more interesting question.

# **📊 Your verification mindset**

For every important AI claim:

🤖 **AI CLAIM**

↓

💻 **FIND SOURCE-CODE EVIDENCE**

↓

⚖️ **COMPARE**

↓

choose:

✅ Confirmed

❌ Rejected

🟡 Partly correct

↓

📝 **EXPLAIN WHY**

# **🚨 Never use confidence as evidence**

AI may write:

> “Clearly, this association has multiplicity 1..\*.”

That word:

> **clearly**

means nothing.

It may sound certain and still be wrong.

Likewise, if AI says:

> “It appears that…”

that uncertainty doesn't make it wrong.

You evaluate:

💻 **evidence**

not:

🎭 **tone**.

# **⭐ The sentence to remember**

> **In Part 3, the AI produces claims; you turn those claims into hypotheses and test them against the actual source code.**

Or even shorter:

> 🤖 **AI says** → 🔎 **You check** → 💻 **Code decides**

That is the heart of Part 3\.

# **🪜 Step 62 — The Complete Assignment 2 Master Map**

Now we can put the whole assignment together.

After all the concepts we've covered, Assignment 2 can be understood as **one journey through object-oriented design in three directions**:

> 📐 **Design → Code**  
> 💻 **Code → Design**  
> 🤖 **AI analysis → Human verification**

That is the backbone of the entire assignment.

## **📜 FROM THE GITLAB ASSIGNMENT**

Assignment 2 is called **Object-Oriented Design and Implementation**. Its purpose is to connect OO design with implementation: turning design into code, deriving design from existing code, and evaluating the relationship between specification, design and implementation. assignment\_2

# **🌍 The complete journey**

Think of the assignment as three large chapters.

### **🎼 PART 1 — Crescendo Music School**

📜 Specification \+ 📐 UML

↓

🧠 understand design

↓

💻 implementation

### **🐕 PART 2 — PawsHome**

💻 Existing implementation

↓

🔎 reverse engineering

↓

📐 current design

↓

⚖️ compare with specification

↓

🧠 identify problems

↓

✨ propose improved design

### **🤖 PART 3 — GenAI**

🤖 AI analyzes PawsHome

↓

🔎 you verify every important claim

↓

💻 source code provides evidence

↓

📝 evaluate AI

↓

🧠 reflect.

That's the entire assignment at its highest level.

# **🚦 Stage 0 — Prepare Git correctly**

Before the assignment work itself:

🌿 work on branch `assignment-2`

🚫 don't work directly on `main`

⬇️ pull before working

💾 make regular meaningful commits

⬆️ push your work

👥 both group members contribute.

At submission:

🔀 create Merge Request:

`assignment-2` → `main`

but:

🚫 **do not merge it yourselves.**

These workflow requirements come directly from the supplied GitLab material. workflow workflow

# **🎼 Stage 1 — Understand Crescendo before implementing anything**

Start with:

📜 Crescendo specification

📐 Crescendo class diagram

🎭 Crescendo use-case diagram.

Don't begin by randomly creating classes.

First understand:

📦 classes

📝 attributes

⚙️ operations

🧬 inheritance

🔗 associations

🔢 multiplicities

💎 compositions

📏 domain rules

🏭 creation responsibilities.

# **🧠 Stage 2 — Translate Crescendo's design into implementation**

This is:

> 📐 **Design → Implementation**

You are given the design and must preserve it faithfully.

Important examples include:

👤 abstract `Person`

🎓 `Student`

👨‍🏫 `Teacher`

🎼 `Course`

🏫 `MusicSchool`

💰 `TuitionFee`

plus the supplied enums and relationships.

The written assignment requires the specified classes, inheritance, associations, multiplicities, operations and rules to be represented in the implementation. assignment\_2

# **📏 Stage 3 — Make the rules real**

A UML diagram saying:

🎓 Student → maximum 3 Courses

isn't enough.

The implementation must actually prevent:

🎓 Student → Course 1

🎓 Student → Course 2

🎓 Student → Course 3

🎓 Student → Course 4 ❌

The same principle applies throughout Crescendo.

The specification's rule IDs such as:

`R3.2`

`R5.3`

`R6.4`

represent actual constraints the implementation must preserve. crescendo\_music\_school crescendo\_music\_school

# **⚠️ Stage 4 — Handle invalid operations safely**

If an operation violates a rule:

🚫 reject it

and:

🔒 don't leave the system half-changed.

The specification says a rule violation must leave the system unchanged and throw an appropriate exception whose message identifies the rule. crescendo\_music\_school

So always think:

**CHECK**

↓

**VALID?**

↓

✅ change state

or:

❌ reject without changing state.

# **🎮 Stage 5 — Keep CLI and domain logic separated**

Your program has:

🖥️ console interaction

and:

🧩 domain logic.

These are different responsibilities.

`Main` handles the console side.

Domain objects enforce domain rules.

This is part of learning:

🎯 cohesion

🕸️ coupling

🧩 separation of concerns.

# **📜 Important Part 1 boundary**

The written assignment explicitly says:

> **Do not use AI tools for Part 1\.** assignment\_2

So our work here has been about understanding the assignment and learning the general OO concepts.

When you actually perform the assessed Part 1 implementation, that restriction matters.

Also remember our earlier language issue: the written setup specifically describes **Java, JDK 17 and Gradle**, while you reported that your teacher said TypeScript could be used. Before implementation, that discrepancy should be confirmed rather than guessed.

# **🐕 Stage 6 — Enter PawsHome with a completely different mindset**

Now forget:

> “How should I build this?”

Your first question becomes:

> **What has already been built?**

You receive an existing implementation.

Don't fix it.

Don't redesign it.

Don't make it conform to the specification.

Become:

🕵️ **software archaeologist**.

# **🔎 Stage 7 — Reverse-engineer the current PawsHome system**

Read:

💻 classes

💻 fields

💻 methods

💻 constructors

💻 references

💻 collections

💻 method calls

💻 validation

💻 state changes.

From that evidence reconstruct:

📐 current class structure

🎭 current functionality

🎬 current execution sequences.

# **📐 Stage 8 — Produce the current-system diagrams**

Part 2 requires:

🔎 `current_class_diagram.png`

🔎 `current_use_case_diagram.png`

🎬 `apply_for_adoption_sequence.png`

🎬 `approve_application_sequence.png`. assignment\_2

These describe:

> **What the implementation actually does.**

Even if you discover something ugly.

Even if something required is missing.

Even if you already know how you'd improve it.

Don't repair history.

# **⚖️ Stage 9 — Compare implementation with specification**

Now bring the PawsHome specification back into the picture.

For each important requirement:

📜 **What should happen?**

↓

💻 **What actually happens?**

↓

⚖️ **Do they match?**

Use our Step 59 formula:

> 📜 **Should** → 💻 **Does** → ⚖️ **Difference** → 💥 **Why it matters** → ✨ **Improve**

Now you have genuine:

🔎 **gap analysis**.

# **🧠 Stage 10 — Analyze design quality separately**

Don't stop with missing functionality.

Now ask:

🎯 Are classes cohesive?

🕸️ Is coupling reasonable?

👨‍🔬 Are responsibilities with Information Experts?

🏭 Does creation responsibility make sense?

🎮 Is coordination separated from domain work?

🎭 Could polymorphism appropriately handle variation?

🛠️ Would Pure Fabrication help technical responsibilities?

↪️ Would Indirection reduce problematic dependency?

🛡️ Are likely variations protected?

Now you're using your GRASP toolbox.

# **✨ Stage 11 — Design the improved PawsHome**

Only after understanding the existing system and its problems do you create:

✨ `improved_class_diagram.png`

and:

✨ `complete_use_case_diagram.png`. assignment\_2

Now you can move from:

> **IS**

to:

> **SHOULD**

But every significant improvement should be justifiable.

Not:

> “I like this better.”

Instead:

🔎 evidence

↓

💥 problem

↓

🧠 design principle

↓

✨ improvement

↓

🎯 benefit.

# **📝 Stage 12 — Finish the Part 2 report**

The Part 2 report is:

📄 `assignment_2/docs/pawshome.md`

It brings together your:

📝 problem summary

⚖️ gap analysis

⚠️ error handling/input validation analysis

🧠 GRASP/design analysis

✨ recommended improvements

💡 justification. assignment\_2

# **🛑 Stage 13 — FREEZE PART 2**

This is a major checkpoint.

Before starting Part 3:

> **Part 2 must be finished.**

Once Part 3 begins:

🧊 **Part 2 is frozen.**

If AI later shows you that your own diagram contained a mistake:

🚫 don't secretly repair Part 2\.

Instead:

📝 discuss the discovery in Part 3\. genai\_log\_template

# **🤖 Stage 14 — Let GenAI independently analyze PawsHome**

Now AI is deliberately allowed and required as part of the experiment.

Give it the required:

📜 specification

* 

💻 Java source.

Ask it for the required:

📐 current class diagram

🎬 Staff-approves-application sequence diagram

🧠 mismatches/design/GRASP observations. assignment\_2

# **🗃️ Stage 15 — Preserve the raw AI interaction**

Save:

👤 every prompt

and:

🤖 every answer

**word for word**.

Don't clean them.

Don't improve them.

Don't quietly repair diagrams.

Store them under:

📁 `assignment_2/docs/genai_raw/`

with the required raw-log structure. genai\_log\_template

# **🧐 Stage 16 — Challenge the AI**

Don't just accept its first answer.

The template requires at least one critical follow-up. genai\_log\_template

For example, conceptually:

> “What implementation evidence supports that multiplicity?”

or:

> “Check that relationship again against the source.”

The point is:

🤖 AI makes claims.

👤 developer challenges and verifies them.

# **🔬 Stage 17 — Verify AI against evidence**

Now compare:

👤 **Your frozen Part 2**

🤖 **AI's analysis**

💻 **Actual Java implementation**

📜 **Specification where relevant**

For AI claims use:

✅ **Confirmed**

❌ **Rejected**

🟡 **Partly correct**

and explain the evidence. genai\_log\_template

# **📝 Stage 18 — Reflect on the experiment**

Finally ask:

🤖 What did AI do well?

🚨 What did it invent?

➖ What did it miss?

👤 What did we notice that AI didn't?

🤖 What did AI notice that we didn't?

🔎 How important was source-code verification?

🧠 What did this teach us about using GenAI for software design/reverse engineering?

That's the deeper purpose of Part 3\.

# **📁 Stage 19 — Final structure check**

At the end, your Assignment 2 material has three major bodies:

🎼 **Crescendo**

implementation \+ Part 1 documentation

🐕 **PawsHome**

current analysis \+ sequences \+ gap analysis \+ improved design

🤖 **GenAI**

raw interactions \+ AI diagrams \+ verification \+ reflection.

All of this belongs under:

📁 `assignment_2/`

# **🚀 Stage 20 — Submit through GitLab**

Finally:

⬇️ pull/check latest work

🔍 inspect files

🖼️ make sure diagrams render

📝 make sure documentation renders directly in GitLab as required

💾 commit remaining legitimate changes

⬆️ push `assignment-2`

🔀 create Merge Request:

**assignment-2 → main**

🚫 don't merge it yourself.

# **🧠 The entire assignment in three lines**

If everything else disappears from your memory, remember these:

### **🎼 PART 1**

> 📐 **DESIGN → IMPLEMENTATION**

### **🐕 PART 2**

> 💻 **IMPLEMENTATION → DESIGN → ANALYSIS → IMPROVED DESIGN**

### **🤖 PART 3**

> 🤖 **AI ANALYSIS → HUMAN VERIFICATION → EVIDENCE → REFLECTION**

# **❤️ And the single idea underneath all of it**

After 62 steps, almost everything we've discussed returns to one question:

> **Which object should be responsible for what — and can we justify that decision from requirements, design principles and implementation evidence?**

That's the heart of object-oriented design in this assignment.

# **🪜 Step 63 — Final A2 Submission Checklist**

Now we turn everything into a practical **final checklist**.

This isn't about learning another big theory. It's about making sure you and Edvin haven't accidentally forgotten something before submitting Assignment 2\.

## **📜 FROM THE GITLAB ASSIGNMENT**

The assignment has required artifacts for all three parts, plus Git/GitLab requirements. The checklist below organizes those requirements into one final inspection.

# **🌿 1\. Git and GitLab**

Before submission, check:

☐ All Assignment 2 work is under `assignment_2/`

☐ You worked on branch `assignment-2`

☐ You did not work directly on `main`

☐ Both group members have contributed

☐ You have regular, meaningful commits

☐ Everything needed has been pushed

☐ The final Merge Request goes from `assignment-2` → `main`

☐ You **do not merge the MR yourselves**

These requirements come directly from the supplied workflow and assignment instructions. workflow workflow

# **🎼 2\. Part 1 — Crescendo**

Check that the implementation represents the supplied design.

☐ `MusicSchool`

☐ abstract `Person`

☐ `Student`

☐ `Teacher`

☐ `Course`

☐ `TuitionFee`

☐ `Level`

☐ `PaymentStatus`

Then check the OO structure:

☐ inheritance represented correctly

☐ associations represented

☐ multiplicities enforced

☐ compositions represented appropriately

☐ bidirectional relationships remain consistent

☐ internal collections are protected

☐ required operations exist

☐ required attributes/state exist. crescendo\_music\_school

# **📏 3\. Crescendo domain rules**

Don't merely check that the classes exist.

Check that the required rules actually work.

Examples include:

☐ Student maximum three Courses

☐ Student only enrolls in matching-level Courses

☐ no duplicate enrollment

☐ Course capacity respected

☐ Course always has exactly one Teacher

☐ TuitionFee amount is positive

☐ maximum one TuitionFee per Student per term

☐ TuitionFee begins unpaid

☐ paid fee cannot be paid again

☐ required uniqueness rules are enforced. crescendo\_music\_school

# **⚠️ 4\. Crescendo error handling**

Check:

☐ invalid input is rejected appropriately

☐ invalid state operations are rejected appropriately

☐ exception messages identify the relevant rule ID

☐ failed operations don't leave partial changes behind. crescendo\_music\_school

Remember:

> ❌ failure must not corrupt the object graph.

# **🎮 5\. CLI and separation**

Check:

☐ the CLI exists

☐ required demonstration functionality can be exercised

☐ console input/output belongs in `Main`

☐ domain classes contain domain logic rather than UI behaviour

☐ the demonstration shows the important system behaviour.

The written Part 1 instructions describe Crescendo as a CLI proof of concept rather than a GUI application. assignment\_2

# **🧠 6\. Part 1 documentation**

Check:

☐ `assignment_2/docs/part_1.md` exists

☐ required relationship patterns are explained

☐ relevant code snippets are included where required

☐ explanations connect implementation to the class diagram

☐ composition ownership/lifetime is discussed

☐ at least two GRASP principles are documented as required. assignment\_2

# **🚨 7\. Remember the Part 1 AI restriction**

The written assignment explicitly prohibits AI use for Part 1\. assignment\_2

So don't use our conceptual study material as a reason to have AI generate the assessed Crescendo implementation or its assignment-specific analysis.

The purpose of these 63 steps has been to help you understand the concepts and instructions.

# **🐕 8\. Part 2 — Current PawsHome diagrams**

Make sure all four current-system artifacts exist:

☐ `current_class_diagram.png`

☐ `current_use_case_diagram.png`

☐ `apply_for_adoption_sequence.png`

☐ `approve_application_sequence.png`

Most importantly:

> 🔎 **They must represent the existing implementation.**

Don't secretly repair the implementation in these diagrams. assignment\_2

# **🔍 9\. Inspect the current class diagram carefully**

Ask:

☐ Are actual classes represented?

☐ Are important attributes/operations accurate?

☐ Are associations supported by the source?

☐ Are multiplicities based on what the implementation actually enforces?

☐ Is navigability accurate?

☐ Is inheritance accurate?

☐ Have you accidentally added something merely because the specification says it should exist?

That last mistake is particularly dangerous.

Remember:

> 🔎 **CURRENT \= IS**

# **🎬 10\. Inspect the sequence diagrams**

For both required scenarios, check:

☐ participants correspond to actual implementation objects

☐ important method calls really happen

☐ calls are in the correct order

☐ important interactions haven't been omitted

☐ interactions haven't been invented from the specification

☐ diagrams describe current implementation behaviour.

# **⚖️ 11\. Check the gap analysis**

Your analysis should compare:

📜 specification

against:

💻 implementation.

Look across the categories required by the assignment:

☐ missing/incomplete use cases

☐ relationships

☐ multiplicities

☐ domain rules

☐ validation

☐ error handling

☐ separation of domain logic

☐ GRASP/design problems. assignment\_2

Use our mental formula:

> 📜 **Should** → 💻 **Does** → ⚖️ **Difference** → 💥 **Why it matters** → ✨ **Improve**

# **🧠 12\. Check your GRASP reasoning**

Don't merely write:

> “Bad cohesion.”

or:

> “Violates Information Expert.”

For important claims, ask:

☐ What is my evidence?

☐ What responsibility is misplaced?

☐ Which GRASP principle explains the problem?

☐ What improvement am I proposing?

☐ Why would that improvement help?

Remember our writing formula:

> **Evidence → Problem → GRASP → Improvement → Benefit**

# **✨ 13\. Part 2 — Improved diagrams**

Check:

☐ `improved_class_diagram.png`

☐ `complete_use_case_diagram.png`. assignment\_2

These are different from the current diagrams.

Remember:

🔎 Current \= **IS**

✨ Improved/complete \= **SHOULD**

# **📝 14\. PawsHome report**

Check:

☐ `assignment_2/docs/pawshome.md` exists

and covers the required areas:

☐ problem summary

☐ gap analysis

☐ error handling/input validation

☐ GRASP/design-principle problems and improvements

☐ justification for recommendations. assignment\_2

# **🧊 15\. Critical checkpoint before Part 3**

Before using AI for Part 3:

☐ Part 2 is finished.

Then:

🧊 **freeze it.**

After Part 3 starts:

🚫 don't silently alter Part 2 because of something the AI discovers.

Instead:

📝 document that discovery in Part 3\. genai\_log\_template

# **🤖 16\. Part 3 — Required AI work**

Check that the AI was given the required:

☐ PawsHome specification

☐ Java source.

And that it produced the requested:

☐ current-system class diagram

☐ “Staff approves an application” sequence diagram

☐ mismatches / possible GRASP and design problems. assignment\_2

# **🗃️ 17\. Raw AI records**

This is easy to forget.

Check:

☐ every prompt saved

☐ every answer saved

☐ wording preserved exactly

☐ nothing silently cleaned up

☐ files stored under `assignment_2/docs/genai_raw/`

☐ naming follows the required structure such as `01_prompt.md`, `01_answer.md`

☐ at least one critical follow-up was made to the AI. genai\_log\_template

# **🖼️ 18\. AI diagrams**

Check:

☐ `genai_class_diagram.png`

☐ `genai_approve_sequence.png`

And remember:

> Don't silently fix the AI's diagram before evaluating it.

You need to evaluate what the AI **actually produced**. genai\_log\_template

# **🔬 19\. AI verification**

For the AI class diagram, check things such as:

☐ classes

☐ attributes

☐ operations

☐ associations

☐ multiplicities

☐ navigability

☐ dependencies.

For the AI sequence diagram:

☐ correct interactions

☐ missing interactions

☐ invented interactions

☐ incorrect order.

For AI problem claims:

☐ **Confirmed**

☐ **Rejected**

☐ **Partly correct**

with:

💻 evidence from the actual implementation. genai\_log\_template

# **📝 20\. Part 3 report and reflection**

Check:

☐ `assignment_2/docs/genai_part.md` exists

☐ tool/product information recorded as required

☐ model/version recorded

☐ session/date information recorded

☐ group members recorded

☐ comparison with your Part 2 work included

☐ AI errors and omissions discussed

☐ source-code evidence used

☐ reflection completed. genai\_log\_template

# **🖼️ 21\. Final visual inspection**

Don't finish by only checking filenames.

Open the repository as the teacher will see it.

Check:

☐ Markdown renders correctly in GitLab

☐ diagrams display directly

☐ image paths work

☐ filenames are exact

☐ nothing important requires downloading or an external diagram tool to understand

☐ no accidental temporary files

☐ documentation points to the correct diagrams

☐ repository structure is understandable.

# **🚨 The biggest mistakes to catch**

If I were making a final “danger list,” these are the ones I'd keep in mind:

⚠️ **Mixing specification into the current PawsHome diagrams**

⚠️ **Drawing multiplicities from what SHOULD happen instead of what the code actually enforces**

⚠️ **Fixing PawsHome while you're supposed to be reverse-engineering it**

⚠️ **Changing Part 2 after beginning Part 3**

⚠️ **Accepting AI claims without checking the Java source**

⚠️ **Correcting the AI output before preserving/evaluating it**

⚠️ **Forgetting raw prompts/answers**

⚠️ **Making GRASP claims without evidence**

⚠️ **Forgetting that failed Crescendo operations must not partially modify state**

⚠️ **Submitting/merging incorrectly in GitLab**

# **🧠 The ultimate five-question check**

Before submitting, you and Edvin should be able to answer:

### **1️⃣ Crescendo**

> **Can we explain how the supplied design became our implementation?**

### **2️⃣ PawsHome current system**

> **Can we prove our diagrams represent what the source code actually does?**

### **3️⃣ Gap analysis**

> **Can we show exactly where implementation and specification differ?**

### **4️⃣ Improved design**

> **Can we justify why our proposed design is better using evidence and OO/GRASP reasoning?**

### **5️⃣ GenAI**

> **Can we show exactly where the AI was correct, partly correct or wrong using source-code evidence?**

If those five answers are solid, you understand the intellectual structure of the assignment.

# **⭐ The final checklist sentence**

> **Don't merely show what you built or drew — show that you understand why the design looks the way it does, what the implementation actually does, where the two differ, and what evidence supports your conclusions.**

# **Step 64 — What You Should Now Understand**

This is the final chapter of our little **Assignment 2 book**.

We started with the assignment as a collection of files, diagrams, rules and unfamiliar terminology. Now we can reduce it to the actual knowledge the course is trying to teach you.

The deepest lesson isn't Java, TypeScript, UML syntax or even GRASP by itself.

It is:

> **How do we turn requirements into a sensible object-oriented design, turn that design into working software, and reason backwards from existing software to understand its design?**

# **📜 FROM THE GITLAB ASSIGNMENT**

The stated purpose of Assignment 2 is to connect **object-oriented design and implementation**: transforming design into code, deriving design from existing code, and comparing implementation and design in order to identify possible improvements using OO principles. assignment\_2

Everything we've learned fits underneath that.

# **🧱 1\. You should understand what an object really is**

An object isn't merely:

> “A thing made from a class.”

A useful OO object combines:

📦 **state**

with:

⚙️ **behaviour**

and:

📏 **responsibility for protecting its own valid state**.

So when you see:

🎼 Course

you should naturally start thinking:

> What does Course know?

> What can Course do?

> What rules is Course responsible for maintaining?

That's much deeper than simply knowing class syntax.

# **🔒 2\. You should understand encapsulation**

Private state isn't private merely because:

> “That's how OOP is written.”

Encapsulation exists so an object can control:

> **how its state is allowed to change.**

That's why:

🚫 arbitrary setters

🚫 exposed mutable collections

🚫 outside code directly manipulating internal relationships

can be dangerous.

Good encapsulation helps protect:

📏 domain rules

🔢 multiplicities

🔗 associations

🧠 invariants.

# **🧬 3\. You should understand inheritance and polymorphism**

Inheritance expresses:

> **IS-A**

🎓 Student **is a** Person.

👨‍🏫 Teacher **is a** Person.

Polymorphism goes further:

> Different concrete objects can be treated through a common abstraction while retaining their appropriate behaviour.

So:

🧬 inheritance gives us type relationships

while:

🎭 polymorphism lets us exploit those abstractions in behaviour.

# **🔗 4\. You should understand relationships between objects**

You should now be comfortable distinguishing:

🔗 **Association**  
Objects have a structural relationship.

🔢 **Multiplicity**  
How many objects may participate?

🧭 **Navigability**  
Which direction can objects reach each other?

💎 **Composition**  
One object strongly owns another's lifecycle.

➡️ **Dependency**  
One object temporarily uses another.

These aren't just UML symbols.

They describe the structure of the running program.

# **🌐 5\. You should be able to imagine an object graph**

Instead of thinking only:

> “There is a Student class and Course class.”

you should be able to imagine actual runtime objects:

🎓 Erik

↕

🎼 Piano Beginners

↕

👨‍🏫 Anna

and perhaps:

🎓 Erik

↓

💰 Autumn Tuition Fee.

That's an:

> **object graph**

Operations modify that graph.

Enrollment creates relationships.

Withdrawal removes relationships.

Creation adds objects.

Rules determine which graph states are legal.

# **📏 6\. You should understand domain rules as invariants**

A rule such as:

> Student may have at most three Courses

isn't merely documentation.

It defines which system states are valid.

So:

valid state

↓

⚙️ operation

↓

valid state

is what we want.

And:

valid state

↓

❌ illegal operation

↓

🚫 reject operation

↓

same valid state

is also correct behaviour.

That's why Crescendo requires failed operations not to partially modify the system. crescendo\_music\_school

# **🎯 7\. You should understand responsibility assignment**

This is probably the biggest OO lesson in the entire assignment.

Whenever behaviour needs to exist, ask:

> **Who should be responsible for it?**

GRASP gives you ways to reason about that question.

👨‍🔬 Information Expert  
Who knows what is needed?

🏭 Creator  
Who should create the object?

🎮 Controller  
Who should receive and coordinate the system operation?

🕸️ Low Coupling  
Can we avoid unnecessary dependencies?

🎯 High Cohesion  
Do these responsibilities naturally belong together?

🎭 Polymorphism  
Does behaviour vary by type?

🛠️ Pure Fabrication  
Would a software-oriented class provide a better home?

↪️ Indirection  
Would an intermediary reduce problematic dependency?

🛡️ Protected Variations  
What might change, and how can we contain that change?

# **🧠 8\. You should understand that GRASP isn't a rulebook**

This is important.

Good OO design isn't:

> “Information Expert says X, therefore X must always happen.”

Sometimes principles pull in different directions.

Putting responsibility with the Information Expert might increase coupling.

Adding Indirection might reduce coupling but add complexity.

Pure Fabrication might improve cohesion but introduce another class.

So software design involves:

⚖️ **trade-offs**.

GRASP gives you a vocabulary for reasoning about those trade-offs.

# **📐 9\. You should be able to read UML**

A class diagram should now tell you much more than:

> “Boxes connected with lines.”

You can ask:

📦 What classes exist?

📝 What do they know?

⚙️ What can they do?

🔒 What is publicly accessible?

🧬 What inherits from what?

🔗 What is associated?

🔢 How many?

🧭 In which direction?

💎 Who owns whom?

And then:

> **What would this design mean in actual code?**

# **🎬 10\. You should understand sequence diagrams**

A class diagram describes:

📸 **structure**

while a sequence diagram describes:

🎥 **interaction over time**.

You should be able to ask:

> Who receives the initial operation?

> Which object calls which?

> In what order?

> Where does the actual domain decision occur?

> Which objects change state?

This is why sequence diagrams are useful for analyzing responsibility.

# **🎭 11\. You should understand use cases**

A use case isn't primarily about classes.

It's about:

> **What an external actor wants the system to accomplish.**

For PawsHome, the supplied specification identifies actors such as:

🐾 Adopter

👩‍💼 Shelter staff

🤝 Volunteer. pawshome\_shelter

So use cases give us the:

👤 user/system perspective

while class diagrams give us the:

📦 structural perspective

and sequence diagrams give us the:

🎬 interaction perspective.

Together they show different views of the same system.

# **🔄 12\. You should understand both directions of software design**

This is the beautiful symmetry of A2.

### **🎼 Crescendo**

You begin with:

📜 requirements

* 

📐 design

and ask:

> **How does this become software?**

### **🐕 PawsHome**

You begin with:

💻 software

and ask:

> **What design does this implementation actually contain?**

So you learn both:

➡️ forward engineering

and:

⬅️ reverse engineering.

# **⚖️ 13\. You should understand specification versus implementation**

This distinction may be the single most important lesson from Part 2\.

📜 **Specification**

says:

> What SHOULD happen?

💻 **Implementation**

reveals:

> What DOES happen?

They are not automatically identical.

The space between them is:

⚖️ **the gap**.

And good analysis requires evidence for that gap.

# **🔎 14\. You should understand evidence-based software analysis**

Instead of:

> “This looks wrong.”

you should now think:

📜 requirement

↓

💻 implementation evidence

↓

⚖️ discrepancy

↓

💥 consequence

↓

🧠 design reasoning

↓

✨ recommendation.

Likewise, instead of:

> “This violates GRASP.”

you should think:

🔎 evidence

↓

💥 responsibility problem

↓

🧠 relevant principle

↓

✨ improvement

↓

🎯 benefit.

That is a much more mature way of discussing software design.

# **🕵️ 15\. You should understand reverse engineering**

Reverse engineering requires discipline.

When studying existing software:

> **Don't draw what you wish existed.**

Draw what you can support from the implementation.

If the code is strange:

📐 the current diagram may also look strange.

That's okay.

Your job at that stage isn't to hide the problem.

It's to **discover it accurately**.

# **✨ 16\. You should understand redesign as a separate activity**

Only after documenting and analyzing the current system do you move to:

🏗️ improved design.

Now you can ask:

> How could responsibilities be moved?

> How could coupling be reduced?

> How could cohesion improve?

> How should multiplicities be represented?

> Where should domain rules live?

> What abstractions would make the system easier to change?

That's design.

And now your recommendations are based on evidence rather than taste.

# **🤖 17\. You should understand how to use AI critically**

Part 3 adds a very modern software-engineering skill.

The lesson isn't:

> “AI is good.”

or:

> “AI is bad.”

It's:

> **AI output needs verification.**

The AI can:

✅ notice real things

❌ make incorrect claims

➖ omit things

➕ invent things

🟡 be partly right.

Your responsibility as the developer is:

🤖 claim

↓

🔎 investigate

↓

💻 evidence

↓

⚖️ judgment.

# **🧪 18\. You should understand why your Part 2 work is frozen**

Part 2 gives:

👤 **your independent analysis**

Part 3 gives:

🤖 **AI analysis**

The actual implementation provides:

💻 **evidence**.

Keeping your original analysis unchanged makes it possible to compare them honestly.

That's why discovering that the AI was right and you were wrong isn't a failure.

It can actually provide excellent material for reflection:

> **Why did I miss it?**

> **How did AI find it?**

> **Was the AI consistently reliable or merely correct here?**

That's meaningful analysis.

# **🧠 19\. You should now see OOP differently**

At the beginning, OOP can look like:

> classes \+ objects \+ inheritance.

But that's only the surface.

The deeper subject is:

> **responsibility and collaboration between objects.**

A well-designed object-oriented system asks objects to:

📦 know appropriate information

⚙️ perform appropriate behaviour

🔒 protect their state

🤝 collaborate through clear relationships

🎯 maintain focused responsibilities

🕸️ avoid unnecessary knowledge of other objects.

# **🏆 20\. What Assignment 2 is really teaching**

If I compress everything we've studied into one chain:

📜 **Requirements**

tell us what the system needs to accomplish.

↓

📐 **Design**

assigns structure and responsibilities.

↓

💻 **Implementation**

makes that design executable.

↓

🔎 **Reverse engineering**

lets us reconstruct design from implementation.

↓

⚖️ **Analysis**

compares reality with requirements and design principles.

↓

✨ **Redesign**

uses evidence to improve the structure.

↓

🤖 **GenAI**

can assist analysis.

↓

👤 **Human verification**

determines whether its claims are actually supported.

# **🌟 The entire book in one sentence**

> **Object-oriented software design is the process of deciding which objects should know what, do what, create what, own what and collaborate with what — while keeping the system valid, understandable and reasonably easy to change.**

That is the thread connecting:

🎼 Crescendo

🐕 PawsHome

📐 UML

🎯 GRASP

🔎 reverse engineering

⚖️ gap analysis

🤖 GenAI verification.

# **🎓 And that completes our A2 book**

We went from:

> “What exactly is this assignment asking us to do?”

all the way through:

🧱 objects and classes  
🔒 encapsulation  
🧬 inheritance  
🔗 associations  
🔢 multiplicity  
💎 composition  
📏 invariants  
⚙️ state transitions  
🎯 all nine GRASP principles  
📐 UML  
🎬 sequence diagrams  
🎭 use cases  
🔎 reverse engineering  
⚖️ gap analysis  
✨ redesign  
🤖 AI verification  
🌿 Git/GitLab workflow.

So when you and Edvin actually begin working through A2, you now have a mental map for **why each part exists and what you're supposed to be looking for**.

## **🧭 The final memory aid**

### **🎼 PART 1**

**Understand → Implement**

### **🐕 PART 2**

**Observe → Model → Compare → Analyze → Improve**

### **🤖 PART 3**

**Ask AI → Preserve → Verify → Challenge → Reflect**

And above all:

> **Don't guess. Understand the responsibility, follow the evidence, and be able to explain why.**

