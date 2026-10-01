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

