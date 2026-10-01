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

