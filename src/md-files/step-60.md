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

