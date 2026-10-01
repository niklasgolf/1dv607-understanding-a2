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

