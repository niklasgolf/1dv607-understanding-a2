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

