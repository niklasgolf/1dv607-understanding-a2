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

