# **🪜 Step 25 — Understand the Improved PawsHome Design**

So far, Part 2 has forced us to be disciplined:

🔎 First describe what the existing code actually does.

⚖️ Then compare it with the specification.

Only **after that** do we start thinking about a better design.

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 requires us to make recommendations for improving PawsHome.

Among the required deliverables are:

📐 **`improved_class_diagram.png`**

👤 **`complete_use_case_diagram.png`**

The report must also discuss improvements concerning:

⚠️ error handling and input validation

🧩 GRASP and other design principles

🔗 relationships and multiplicities

📦 placement of responsibilities

And importantly, we must **justify** our recommendations. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Now our role changes**

Earlier we were acting as:

🔎 **Software archaeologists**

We asked:

> What design is hidden inside this existing code?

Now we become:

🏗️ **Software designers**

We ask:

> Given the requirements and the problems we've discovered, how could this design be improved?

## **📐 Current diagram versus improved diagram**

This distinction is fundamental.

### **CURRENT CLASS DIAGRAM**

Represents:

💻 **what the existing implementation actually looks like**

Even if it contains poor design.

### **IMPROVED CLASS DIAGRAM**

Represents:

✨ **our recommended better design**

based on:

📜 the specification

🔎 problems discovered in the implementation

🧩 GRASP/design principles

So these diagrams may intentionally be different.

## **🧠 Improvements need reasons**

We shouldn't simply move methods around because:

> "This looks nicer."

Instead, an improvement should follow a reasoning chain.

For example, generically:

🔎 **Observation:** Class A performs several unrelated responsibilities.

⬇️

🧩 **Design problem:** This may produce low cohesion.

⬇️

🛠️ **Recommendation:** Move responsibility X to the object that has the relevant information.

⬇️

🎯 **Result:** Responsibilities become more focused and coupling may be reduced.

That's a design argument.

## **🔗 GRASP becomes practical here**

Earlier GRASP may have seemed theoretical.

Now it becomes a tool for explaining improvements.

We can ask:

**Information Expert**

> Which object actually has the information needed to perform this responsibility?

**Creator**

> Which object should logically create this other object?

**High Cohesion**

> Does this class have a focused purpose?

**Low Coupling**

> Are classes unnecessarily dependent on each other?

**Controller**

> Which object should receive and coordinate a system operation?

These principles give us a vocabulary for explaining **why** one design may be preferable to another.

## **⚠️ Error handling is also part of design**

The assignment doesn't only ask us to find missing functionality.

We also need to consider:

⚠️ Where is input validated?

⚠️ What happens when an operation is invalid?

⚠️ Can invalid domain states be created?

⚠️ Is domain validation located in an appropriate place?

So error handling isn't merely an afterthought.

It can reveal how well responsibilities have been assigned.

## **👤 The complete use-case diagram**

Remember that our earlier **current use-case diagram** answers:

> What use cases does the existing implementation actually provide?

The **complete use-case diagram** instead represents the required functionality of the PawsHome system.

That means the specification's UC1–UC9 becomes important when considering the complete system. pawshome\_shelter

## **🧠 The entire Part 2 now has a clear shape**

We can finally see the whole reasoning process:

💻 **Read existing PawsHome code**

⬇️

📐 **Reconstruct current design**

⬇️

🔎 **Compare implementation with specification**

⬇️

⚠️ **Identify gaps and design problems**

⬇️

🧩 **Analyze responsibilities using GRASP/design principles**

⬇️

🛠️ **Recommend improvements**

⬇️

✨ **Produce improved design**

This is a much deeper skill than simply saying:

> "The program has a bug."

We're learning to explain **why a software design has problems and how its structure could be improved**.

