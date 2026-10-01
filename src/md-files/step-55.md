# **🪜 Step 55 — Understand GRASP Protected Variations**

Now we reach the **ninth and final GRASP principle**:

🛡️ **Protected Variations**

The central idea is:

> **If we know that something is likely to change, try to prevent that change from spreading throughout the whole system.**

## **📜 FROM THE GITLAB ASSIGNMENT**

The PawsHome specification actually gives us a useful reason to understand this concept. Constraint C7 says the system uses **in-memory storage now**, but should allow a future database **without rewriting the domain logic**. pawshome\_shelter

That does not explicitly say “use GRASP Protected Variations.” That connection is our **design-theory interpretation**.

But it's a very good example of the idea.

# **💡 What is a “variation”?**

A variation is something that may exist in different forms or may change later.

Imagine our fictional Library currently stores information:

🧠 **in memory**

Later we might want:

💾 **database storage**

Perhaps later still:

☁️ **cloud storage**

The storage technology is therefore a:

🔄 **point of variation**

because we expect that part of the system could change.

# **😱 The dangerous design**

Imagine storage knowledge is scattered everywhere:

👤 Member knows database details.

📕 Book knows database details.

📄 Loan knows database details.

🎮 Controller knows database details.

🖥️ UI knows database details.

Now we decide:

> “Let's replace the current storage system.”

💥 Changes spread everywhere.

This is sometimes called a **ripple effect**:

🌊 one change

↓

🌊 causes another change

↓

🌊 causes another change

↓

🌊 causes another change.

Protected Variations tries to limit that ripple.

# **🛡️ Put a stable boundary around the variation**

Conceptually, instead of everybody depending on the changing detail:

📦 A → 💾 Database

📦 B → 💾 Database

📦 C → 💾 Database

📦 D → 💾 Database

we try to create a stable way of communicating with storage.

Then conceptually:

📦 A

📦 B → 🛡️ stable storage boundary → 💾 actual storage technology

📦 C

The rest of the program depends primarily on the **stable boundary** rather than all the details behind it.

If the implementation behind that boundary changes:

💾 Database A

↓

💾 Database B

the change has a better chance of staying localized.

# **🔑 The important word is “protected”**

We aren't preventing variation.

The database is still allowed to change.

We're protecting the rest of the system **from the consequences of that variation**.

That's why the principle is called:

> 🛡️ **Protected Variations**

# **📚 Another fictional example**

Imagine our Library can send notifications.

Today:

📧 Email

Tomorrow:

📱 SMS

Later:

🔔 Push notification

If every domain object contains detailed email-specific logic, switching technologies could affect many classes.

Instead, we might design around the more stable concept:

🔔 **Notification**

while hiding the varying delivery technology behind it.

Then:

📧 Email

📱 SMS

🔔 Push

are variations behind a more stable boundary.

# **🎭 Protected Variations and Polymorphism**

Now GRASP starts connecting beautifully.

Suppose different notification mechanisms share a common abstraction.

Conceptually:

🔔 NotificationSender

↙️　　　↓　　　↘️

📧 Email　📱 SMS　🔔 Push

The rest of the system works with:

🔔 `NotificationSender`

rather than constantly asking:

> Is it Email?

> Is it SMS?

> Is it Push?

Now:

🎭 **Polymorphism**

can help us implement:

🛡️ **Protected Variations**

because the varying implementations can hide behind a common abstraction.

# **↪️ Protected Variations and Indirection**

Step 54 also connects.

Perhaps we introduce:

🔔 NotificationService

between:

📚 domain

and:

📧 external email provider.

That:

↪️ provides **Indirection**

and may simultaneously:

🛡️ **protect the domain from variation** in the external notification technology.

# **🛠️ Pure Fabrication can also participate**

Perhaps `NotificationService` isn't a natural domain entity.

We invented it for software-design reasons.

Then it might simultaneously represent:

🛠️ **Pure Fabrication**

↪️ **Indirection**

🛡️ **Protected Variations**

and help produce:

🕸️ **Low Coupling**

This is why GRASP isn't really nine isolated boxes.

One design decision can support several principles.

# **🧠 A very useful question**

When designing software, ask:

> **What here is likely to change?**

Maybe:

💾 storage technology

📧 external notification provider

🖥️ user interface

💳 payment provider

📄 file format

🌐 external API

Then ask:

> **If that changes, how much of my program must change with it?**

That's the Protected Variations mindset.

# **⚠️ Don't predict every imaginable future**

There's a trap here.

You could say:

> “Anything could change someday\!”

Then create abstractions around absolutely everything.

The result becomes:

😵 abstraction on abstraction on abstraction.

That's not the goal.

Protect variations that are:

🔄 known to vary

or:

📋 explicitly expected to change

or:

💥 particularly expensive if their change spreads.

# **🐕 PawsHome gives us a particularly clear clue**

Remember C7:

> Current persistence is in-memory, but future database support should not require rewriting domain logic. pawshome\_shelter

Conceptually, the specification is telling us:

**This may vary:**

💾 persistence mechanism

**This should remain protected:**

🧩 domain logic

That's almost the perfect mental picture:

🧩 **DOMAIN LOGIC**

🛡️ protected from

🔄 **STORAGE VARIATION**

# **🔎 This gives us something to investigate in reverse engineering**

When examining existing PawsHome code, we shouldn't automatically assume C7 is satisfied merely because the specification says it should be.

We inspect the implementation.

Ask:

🔎 Is persistence knowledge mixed into domain logic?

🔎 Would replacing in-memory storage require changing many domain classes?

🔎 Is storage reasonably separated?

Then we compare:

📜 **Specification**

versus:

💻 **Actual implementation**

That's exactly the Part 2 mindset.

# **🧩 All nine GRASP principles**

We have now covered the full GRASP set:

1️⃣ 👨‍🔬 **Information Expert**  
Give responsibility to the object with the necessary information.

2️⃣ 🏭 **Creator**  
Decide who should create an object.

3️⃣ 🎮 **Controller**  
Receive and coordinate system operations.

4️⃣ 🕸️ **Low Coupling**  
Avoid unnecessary dependencies.

5️⃣ 🎯 **High Cohesion**  
Keep responsibilities focused and related.

6️⃣ 🎭 **Polymorphism**  
Let different types handle varying behaviour through a common abstraction.

7️⃣ 🛠️ **Pure Fabrication**  
Invent a software-oriented class when that improves responsibility assignment.

8️⃣ ↪️ **Indirection**  
Introduce an intermediary when that usefully reduces direct coupling.

9️⃣ 🛡️ **Protected Variations**  
Protect stable parts of the system from things expected to vary.

# **🧠 Don't memorize GRASP as nine definitions**

A better way is to think of them as nine **questions**:

👨‍🔬 Who knows enough to do this?

🏭 Who should create this?

🎮 Who should receive this system operation?

🕸️ Does this object know too much about others?

🎯 Do these responsibilities really belong together?

🎭 Does behaviour vary by type?

🛠️ Does this responsibility need a software-oriented class of its own?

↪️ Would an intermediary reduce problematic dependency?

🛡️ What is likely to change, and can we stop that change spreading?

# **⭐ The sentence to remember**

> **Protected Variations means identifying likely points of change and designing stable boundaries so those changes remain localized.**

And with that, you now have the conceptual foundation for **all nine GRASP principles**.

---

