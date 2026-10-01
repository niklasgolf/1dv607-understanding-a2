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

