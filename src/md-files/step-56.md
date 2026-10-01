# **🪜 Step 56 — See How All Nine GRASP Principles Work Together**

Now that we've learned all nine GRASP principles separately, the important next step is understanding that **real design decisions often involve several of them at once**.

GRASP is not:

> “Find the one correct pattern.”

It's more like:

> **Use several responsibility principles together to reason toward a sensible design.**

## **📜 FROM THE GITLAB ASSIGNMENT**

This matters especially in Part 2 because your PawsHome report must discuss design/GRASP problems and recommend justified improvements. assignment\_2

The example below is completely fictional. We're **not analyzing PawsHome for you**.

# **📚 Our tiny Library problem**

Imagine this requirement:

> A Member can borrow a Book if the Book is available and the Member has fewer than three borrowed Books. When the borrowing succeeds, a Loan is created and a notification is sent.

We have:

👤 `Member`

📕 `Book`

📄 `Loan`

🏛️ `Library`

🔔 notification functionality

Now ask:

> **Who should do what?**

That's where GRASP begins.

# **👨‍🔬 1\. Information Expert**

Who knows how many Books a Member currently has?

👤 **Member**

So Member is a natural expert concerning:

> Can I borrow another Book?

Who knows whether a Book is available?

📕 **Book**

So Book is a natural expert concerning:

> Am I available?

Already we're distributing responsibility according to information.

# **🏭 2\. Creator**

Now the borrowing succeeds and we need:

📄 `Loan`

Who should create it?

We ask:

> Which object naturally owns, records or closely uses Loans?

Perhaps our domain design says Library manages its Loans.

Then:

🏛️ Library

may be a reasonable Creator.

The important point isn't that `Library` is universally the correct answer.

It's that we use **Creator reasoning** rather than randomly creating Loan somewhere.

# **🎮 3\. Controller**

The user chooses:

> “Borrow this Book.”

Something needs to receive that system request.

Perhaps:

🎮 `LibraryController`

receives the operation.

But Controller shouldn't now perform every rule itself.

Instead it coordinates:

🎮 Controller

→ 👤 Member

→ 📕 Book

→ 🏛️ Library

The Controller conducts.

The domain objects perform their appropriate work.

# **🎯 4\. High Cohesion**

Now examine `Member`.

Does it:

👤 manage member information

📚 understand its borrowing situation

Those responsibilities fit reasonably well.

But suppose Member also:

📧 sends email

💾 writes SQL

🖥️ prints console menus.

Those responsibilities don't naturally belong to Member.

So High Cohesion tells us:

> Keep Member focused on being a Member.

# **🕸️ 5\. Low Coupling**

Suppose Member directly knows about:

📧 Gmail technology

💾 database technology

🖥️ console UI

📊 reporting system

Now Member depends on lots of unrelated things.

Low Coupling asks:

> **Does Member really need these dependencies?**

Probably not.

Keep Member dependent only on what its actual responsibilities require.

# **🎭 6\. Polymorphism**

Now imagine notifications can be sent as:

📧 Email

📱 SMS

🔔 Push

We don't necessarily want borrowing logic saying:

> If Email, do A.  
> If SMS, do B.  
> If Push, do C.

Instead, the different notification types could provide their own behaviour through a common abstraction.

That's:

🎭 **Polymorphism**

# **🛠️ 7\. Pure Fabrication**

But what domain object should know how to send technical notifications?

👤 Member?

📕 Book?

📄 Loan?

None of them seems ideal.

So perhaps we deliberately invent:

🔔 `NotificationService`

There might be no real-world Library object called a NotificationService.

That's okay.

We invented it because it gives the technical responsibility a sensible home.

That's:

🛠️ **Pure Fabrication**

# **↪️ 8\. Indirection**

Now instead of:

👤 Member → 📧 specific email provider

we can conceptually have:

👤 Member-related workflow

→ 🔔 NotificationService

→ 📧 provider

The service sits between the domain and external technology.

That's:

↪️ **Indirection**

It reduces how much the domain needs to know about the external system.

# **🛡️ 9\. Protected Variations**

Finally, we know the notification technology might change.

Today:

📧 Email

Tomorrow:

📱 SMS

So we try to prevent that variation from spreading throughout the borrowing system.

The stable part should continue thinking:

> “Send notification.”

while the varying technical mechanism remains behind a boundary.

That's:

🛡️ **Protected Variations**

# **🤯 Look what happened**

We started with one simple requirement:

> Member borrows Book and receives notification.

Yet our reasoning involved:

👨‍🔬 Information Expert  
🏭 Creator  
🎮 Controller  
🎯 High Cohesion  
🕸️ Low Coupling  
🎭 Polymorphism  
🛠️ Pure Fabrication  
↪️ Indirection  
🛡️ Protected Variations

That's the important lesson.

GRASP principles **interact**.

# **🔗 One decision can support several principles**

For example, introducing `NotificationService` might simultaneously:

🛠️ be a **Pure Fabrication**

↪️ provide **Indirection**

🛡️ support **Protected Variations**

🕸️ reduce **Coupling**

🎯 improve **Cohesion** of the domain classes.

So when analyzing software, don't think:

> “This piece of code must belong to exactly one GRASP category.”

Real design is more interconnected than that.

# **🧠 The deeper GRASP question**

All nine principles ultimately orbit one question:

> **Where should responsibility live?**

For every important piece of behaviour, ask:

**Who knows?**  
👨‍🔬 Information Expert

**Who creates?**  
🏭 Creator

**Who receives/co-ordinates?**  
🎮 Controller

**Are dependencies reasonable?**  
🕸️ Low Coupling

**Do responsibilities belong together?**  
🎯 High Cohesion

**Does behaviour vary by type?**  
🎭 Polymorphism

**Do we need a software-oriented helper abstraction?**  
🛠️ Pure Fabrication

**Would an intermediary help?**  
↪️ Indirection

**What might change?**  
🛡️ Protected Variations

# **⚠️ Don't force all nine into every analysis**

This is also important for your future PawsHome report.

Don't look at every class and write:

> “Now I need to find all nine GRASP patterns.”

You might have strong evidence for:

🎯 low cohesion

and:

🕸️ high coupling.

Great.

Maybe Creator isn't relevant to that particular problem.

Then don't force Creator into the paragraph.

GRASP is a **reasoning toolbox**, not a bingo card.

# **🔎 The practical analysis sequence**

When you eventually examine an actual suspicious piece of code, think:

🔎 **What does the code actually do?**

↓

🧠 **Where are the responsibilities?**

↓

❓ **Does that placement make sense?**

↓

🧩 **Which GRASP principle helps explain why or why not?**

↓

✨ **What alternative responsibility assignment could improve it?**

↓

🎯 **What concrete benefit would that produce?**

That's much stronger than beginning with:

> “I need to find a Low Coupling violation.”

Start with the **code and responsibilities**.

Use GRASP to explain what you discover.

# **⭐ The sentence to remember**

> **GRASP is fundamentally about assigning responsibilities to objects so that the resulting system is understandable, focused, loosely coupled and able to change.**

You now have the complete GRASP foundation needed for A2.

---

