# **🪜 Step 51 — Understand High Cohesion Properly**

In Step 50 we looked **between classes**:

🕸️ **Coupling** \= how much classes depend on other classes.

Now we look **inside one class**:

🎯 **Cohesion** \= how naturally that class's responsibilities belong together.

The usual design goal is:

> **High cohesion — a class should have a clear, focused purpose.**

## **📜 FROM THE GITLAB ASSIGNMENT**

In Part 2, the PawsHome analysis asks you to identify design/GRASP problems in the existing implementation and justify improvements. Cohesion is therefore one of the concepts that can help us judge whether responsibilities are appropriately distributed. assignment\_2

The explanation below is **background theory**. The assignment does not prescribe one exact formula for measuring cohesion.

# **💡 What does cohesion actually mean?**

Imagine our fictional Library has a:

📕 **Book**

The Book is responsible for things closely related to being a Book:

📖 its title

✍️ its author

🔖 its ISBN

📗 whether it is available

Those responsibilities make sense together.

They all concern:

> **The Book and its state.**

That's relatively **high cohesion**.

# **🐙 Now imagine a strange Book class**

Suppose `Book` also:

📧 sends emails

🖨️ prints reports

👤 registers Members

💾 saves the entire library database

💰 calculates membership fees

⌨️ reads commands from the console

Now we should ask:

> **Why does a Book need to do all of this?**

These responsibilities don't naturally belong together.

That's a sign of **low cohesion**.

# **🎯 A useful question**

Ask:

> **Can I describe this class's responsibility in one clear sentence?**

For example:

📕 **Book**

> Represents a book and manages its book-related state.

Nice and focused.

But imagine:

🐙 **LibraryManager**

> Manages books, users, console input, persistence, emails, reports, payments, statistics and validation.

That's no longer really one responsibility.

It's a shopping list.

# **🔄 Reasons to change**

There's another useful way to think about cohesion:

> **What kinds of changes would force this class to change?**

Imagine one class handles:

🖥️ console formatting

📧 email notifications

📏 borrowing rules

💾 database storage

That class might change because:

🖥️ the UI requirements change

OR

📧 the email system changes

OR

📏 the borrowing policy changes

OR

💾 the database changes.

Those are very different reasons.

That's a strong warning sign of **low cohesion**.

# **⚠️ Don't just count methods**

This is important.

A class with 15 methods does **not** automatically have low cohesion.

Perhaps all 15 methods contribute to one coherent responsibility.

Conversely, a class with only 5 methods could have very low cohesion if those five methods perform five completely unrelated jobs.

So don't ask:

> "How many methods are there?"

Ask:

> **"Do these responsibilities belong together?"**

# **🐙 The God Class**

You noticed this term in the previous version.

A **God Class** or **God Object** is a class that knows or does far too much.

Imagine:

📦 A ↔ 🐙 MEGA MANAGER ↔ 📦 B

📦 C ↔ 🐙 MEGA MANAGER ↔ 📦 D

📦 E ↔ 🐙 MEGA MANAGER ↔ 📦 F

Everything seems to go through the Mega Manager.

It knows everyone's information.

It makes everyone's decisions.

It performs many unrelated jobs.

This often creates **two problems at once**:

🎯⬇️ **Low cohesion** — too many unrelated responsibilities inside the class.

🕸️⬆️ **High coupling** — the class depends on many other parts of the system.

That's why coupling and cohesion frequently appear together in design analysis.

# **👨‍🔬 Information Expert can help**

Suppose `LibraryManager` contains the responsibility:

> Determine whether a Member can borrow another Book.

But Member already has the information about its borrowed Books.

Perhaps that responsibility belongs closer to:

👤 **Member**

That could simultaneously:

👨‍🔬 follow **Information Expert**

🎯 increase the cohesion of LibraryManager

🕸️ reduce LibraryManager's coupling

🧠 give Member meaningful domain behaviour.

This shows something important about GRASP:

> **The principles work together.**

They aren't nine isolated rules.

# **⚠️ But don't split everything**

High cohesion does **not** mean:

> "Every method should become its own class."

That would create hundreds of tiny classes that all need to communicate with each other.

Then we might create:

🕸️ enormous coupling

🧩 unnecessary complexity

😵 a system that's difficult to understand.

The real question is:

> **Which responsibilities naturally belong together as one meaningful concept?**

# **🔎 How to investigate cohesion in existing code**

When reading a class during reverse engineering, ask:

**1️⃣ What responsibilities does this class actually have?**

Don't just list method names. Describe what the methods are accomplishing.

↓

**2️⃣ Do those responsibilities concern the same concept?**

If yes:

🎯 potentially good cohesion.

If they're unrelated:

🐙 investigate possible low cohesion.

↓

**3️⃣ What could cause this class to change?**

If completely unrelated changes affect the same class, that's another warning sign.

↓

**4️⃣ Does another object naturally own one of these responsibilities?**

Now bring in:

👨‍🔬 Information Expert

🏭 Creator

🎮 Controller

↓

**5️⃣ Would moving the responsibility actually improve the design?**

The goal isn't moving methods for the sake of moving them.

We want:

🎯 clearer responsibilities

🕸️ fewer unnecessary dependencies

🔒 stronger encapsulation

🧠 easier-to-understand objects.

# **✍️ Connect this to Step 41**

A weak analysis would say:

> "This class has low cohesion."

A stronger analysis follows our pattern:

🔎 **Evidence:** The class handles console input, domain validation and persistence.

⚠️ **Problem:** These responsibilities concern different parts of the system and can change independently.

🧩 **Principle:** This suggests **low cohesion**.

✨ **Improvement:** Separate UI and persistence responsibilities from the domain responsibility.

🎯 **Benefit:** Each class gains a clearer purpose and changes become more localized.

Now we're making an **argument**, rather than merely using GRASP vocabulary.

# **🧠 Coupling vs Cohesion — memorize this**

🕸️ **COUPLING**

Look **OUTSIDE** the class.

> How much does it depend on other classes?

🎯 **COHESION**

Look **INSIDE** the class.

> How well do its own responsibilities belong together?

Our general design direction is therefore:

🕸️⬇️ **LOW COUPLING**

* 

🎯⬆️ **HIGH COHESION**

# **⭐ The sentence to remember**

> **A highly cohesive class has responsibilities that belong together because they contribute to one clear purpose.**

Or even shorter:

> 🎯 **One class — one focused reason for existing.**

Not literally one method.

Not literally one tiny job.

But one **coherent purpose**.

