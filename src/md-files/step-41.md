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

