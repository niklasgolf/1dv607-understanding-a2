# **🪜 Step 54 — Understand GRASP Indirection**

At first, **Indirection** can sound backwards.

We normally think:

> “If A needs B, just let A talk directly to B.”

But sometimes that direct connection makes the two parts too dependent on each other.

GRASP **Indirection** says:

> **Sometimes we can reduce coupling between two things by introducing something in between them.**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 asks you to analyze design/GRASP problems in PawsHome and justify possible improvements. The assignment does not specifically require an Indirection class or a particular architecture. assignment\_2

So this step is **background GRASP theory** that may help when evaluating a design.

# **💡 Start with direct communication**

Imagine our fictional Library needs to send notifications.

Perhaps:

📄 Loan → 📧 Email system

Whenever something happens to a Loan, it directly communicates with a particular email technology.

That might work perfectly well.

But now Loan needs to know something about:

📧 the email system

Maybe:

🔐 authentication

📨 message formatting

🌐 communication details

⚠️ email errors

Now our domain object has become dependent on a technical system.

# **🔗 We have direct coupling**

Conceptually:

📄 Loan → 📧 EmailProvider

If `EmailProvider` changes significantly, Loan might also need changing.

But Loan's real responsibility is about:

📚 borrowing.

Why should it understand the details of email delivery?

# **🧩 Introduce something in between**

We could instead have:

📄 Loan

↓

🔔 NotificationService

↓

📧 EmailProvider

Now Loan doesn't necessarily need to understand the concrete email system.

It communicates with something whose responsibility is:

> **Send this notification.**

The intermediary handles the details.

That extra layer is an example of **Indirection**.

# **🤔 But didn't we just add complexity?**

Yes\!

And this is important.

Indirection isn't magically free.

Before:

📄 → 📧

After:

📄 → 🔔 → 📧

We've added another component.

So why do it?

Because sometimes:

> **A little structural complexity can reduce dependency complexity.**

We're trading one kind of complexity for another.

# **🕸️ The main goal is lower coupling**

Suppose tomorrow we stop using email and instead use:

📱 SMS

or:

🔔 push notifications.

With strong direct coupling, several domain classes might need modification.

With useful indirection, perhaps much of that technical change can happen behind the intermediary.

Conceptually:

📄 Loan → 🔔 NotificationService → 📧 Email

Later:

📄 Loan → 🔔 NotificationService → 📱 SMS

Loan's responsibility hasn't changed.

The technical mechanism has.

# **🧠 Think of a translator**

Imagine two people:

🇸🇪 Swedish speaker

🇯🇵 Japanese speaker

They cannot communicate directly.

We introduce:

🗣️ Translator

Now:

🇸🇪 Person ↔ 🗣️ Translator ↔ 🇯🇵 Person

The translator is an **indirection**.

Each side doesn't need to know all the details of the other side.

Software indirection can play a similar role.

# **🎮 Controller can sometimes provide indirection**

Remember GRASP Controller.

Instead of:

🖥️ UI directly manipulating many domain objects

we may have:

🖥️ UI

↓

🎮 Controller

↓

🧩 Domain objects

The Controller can provide a level of indirection between the UI and domain.

That doesn't mean every Controller automatically represents good Indirection.

But it shows how GRASP principles can overlap.

# **🛠️ Pure Fabrication and Indirection can overlap too**

Remember Step 53\.

We invented:

💾 Repository

because persistence didn't fit naturally into our domain objects.

That Repository can also provide **Indirection**.

Instead of:

👤 Member → 💾 specific database technology

we might have:

👤 Member-related logic

↓

🗃️ Repository

↓

💾 storage technology

The Repository can therefore be:

🛠️ **Pure Fabrication**

because we invented a software-oriented class,

AND simultaneously provide:

↪️ **Indirection**

because it sits between parts of the system to reduce direct coupling.

GRASP principles are not mutually exclusive labels.

# **⚠️ Too much indirection is also bad**

Imagine asking:

> “Can I borrow this Book?”

and the request travels through:

🖥️ UI

↓

🎮 Controller

↓

📨 RequestHandler

↓

🧩 BorrowingCoordinator

↓

🔧 BorrowingService

↓

📚 LibraryFacade

↓

📦 MemberManager

↓

👤 Member

for a tiny university project.

😵

Now we've created an architecture maze.

Every extra layer has a cost:

🧠 more concepts to understand

📁 more classes

🔎 harder tracing

🐛 more places for mistakes.

So the principle is not:

> **“More indirection \= better.”**

It's:

> **“Use indirection when the reduction in coupling is worth the extra layer.”**

# **🔎 How to recognize a possible need for Indirection**

While examining existing code, look for situations where:

📦 A knows too many technical details about B.

Or:

📦 many classes depend directly on one volatile external component.

Or:

🖥️ UI knows too much about domain internals.

Or:

💾 domain objects know too much about persistence technology.

Then ask:

> **Would an intermediary allow these parts to communicate while knowing less about each other?**

That's the Indirection question.

# **🔗 Connect it to Low Coupling**

Step 50:

> 🕸️ Low Coupling means objects should know no more about each other than their responsibilities require.

Step 54:

> ↪️ Indirection is one possible technique for achieving that.

So:

**Problem**

🕸️ A and B are unnecessarily tightly coupled.

↓

**Possible solution**

↪️ Introduce C between them.

↓

**Result**

A knows C.

B knows C or communicates through C.

A and B no longer need as much knowledge of each other.

# **🧩 Compare the GRASP ideas we've learned**

👨‍🔬 **Information Expert**

> Who already has the information needed?

🏭 **Creator**

> Who should create this object?

🎮 **Controller**

> Who should receive and coordinate the system operation?

🎯 **High Cohesion**

> Do this class's responsibilities belong together?

🕸️ **Low Coupling**

> Does this class have only the dependencies it reasonably needs?

🎭 **Polymorphism**

> Can varying behaviour be handled by the different types themselves?

🛠️ **Pure Fabrication**

> Would an invented software class give responsibilities a better home?

↪️ **Indirection**

> Would something between A and B reduce their direct dependency?

We're starting to see GRASP as a **toolbox of questions**, rather than nine definitions to memorize.

# **⭐ The sentence to remember**

> **Indirection introduces an intermediary so that two parts of the system do not need to know as much about each other.**

But always add the second sentence:

> **The extra layer is worthwhile only when the reduced coupling justifies the added complexity.**

