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

