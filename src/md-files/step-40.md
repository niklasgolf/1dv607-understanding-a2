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

