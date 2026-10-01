# **🪜 Step 42 — Error Handling: Invalid Argument vs Invalid State**

Error handling in A2 is not just about stopping the program from crashing. It is part of the **object-oriented design** because our objects must protect their own rules.

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification gives us a particularly clear rule:

If an operation would violate a rule:

⚠️ the operation must fail

🔒 the system must not be partially changed

🏷️ the exception message must identify the relevant rule ID.

It then distinguishes two exception types:

**`IllegalArgumentException`** → invalid input/argument

**`IllegalStateException`** → the object's current state makes the operation invalid. crescendo\_music\_school

# **📥 1\. What is an invalid argument?**

## **💡 BACKGROUND & EXPLANATION**

An **argument** is information we give to an operation.

Imagine our fictional Library has:

**registerMember(name, email)**

Someone supplies:

**name \= ""**

The problem is with the information being supplied.

The operation could be perfectly valid in principle — but this particular input isn't acceptable.

Think:

> 📥 **"You gave me something invalid."**

That is the basic idea behind:

**`IllegalArgumentException`**

# **🔒 2\. What is an invalid state?**

Now imagine:

📕 Book is already borrowed.

Someone tries:

> Borrow this Book.

There might be absolutely nothing wrong with the Book argument itself.

It's a perfectly real Book.

The problem is:

> **The operation cannot be performed because of the current state of the system/object.**

Think:

> 🔒 **"You cannot do that right now."**

That is the basic idea behind:

**`IllegalStateException`**

# **🧠 The easiest distinction**

Ask:

### **📥 Is the thing supplied to the operation invalid?**

→ **IllegalArgumentException**

### **🔒 Is the requested operation invalid because of the current state?**

→ **IllegalStateException**

# **📏 But both can represent domain-rule violations**

This is important.

A **domain-rule violation** is the broader concept.

For example:

> A member cannot borrow more than three books.

That's a domain rule.

If the member already has three books and attempts another borrowing, the problem concerns the existing state:

👤📕📕📕

Therefore an implementation might represent that as an illegal-state situation.

So:

📏 **Domain rule**

describes **what must be true**.

The exception describes:

⚠️ **how the program reports that the attempted operation isn't permitted.**

# **🧱 Invalid object state is even deeper**

Suppose our design says:

> A Book must always have a non-empty title.

We don't want this:

📕 Book  
title \= ""

to become a normal valid object state.

Good domain objects try to protect their **invariants**.

An invariant is essentially:

> **Something that should remain true for every valid object of this type.**

So rather than allowing an invalid Book to exist and hoping somebody notices later, the object should protect itself.

# **💥 The most important rule: no partial update**

### **📜 FROM THE GITLAB MATERIAL**

Crescendo explicitly requires that when a rule violation causes an operation to fail:

> **nothing should be partially updated.** crescendo\_music\_school

This is extremely important.

# **😱 Imagine this bad sequence**

Our fictional borrowing operation does:

1️⃣ Add Book to Member's borrowed books.

2️⃣ Mark Book unavailable.

3️⃣ Check whether Member already had three books.

4️⃣ Discover violation.

5️⃣ Throw exception.

Oops.

The operation failed...

but we've already changed the system.

# **❌ We could now have inconsistent state**

Perhaps:

👤 Member thinks they borrowed the Book

while:

📕 another part of the system thinks the operation failed.

That's dangerous.

Instead, conceptually:

🔎 **Validate first**

↓

📏 **Check rules**

↓

✅ Everything valid?

↓

🔄 **Perform state changes**

So failure leaves the system as it was before the operation.

# **🔗 This connects directly to encapsulation**

Remember Step 17\.

Why shouldn't everyone freely manipulate an object's internal collections?

Because then someone could bypass the rules.

If external code can directly insert another course into a student's internal course list, for example, it could potentially bypass the object's enrollment behaviour.

Encapsulation lets us say:

> 🔒 **Changes to my state happen through controlled operations that protect my rules.**

That's why encapsulation, validation and domain rules fit together.

# **🎼 Crescendo makes this especially visible**

The supplied specification has explicit rule IDs such as:

**R3.2** — Student maximum three courses.

**R5.3** — Course cannot exceed capacity.

**R6.3** — Tuition fee amount must be greater than zero.

**R6.4** — A tuition fee cannot be paid twice. crescendo\_music\_school crescendo\_music\_school

Those rules are not merely documentation.

The implementation is expected to **protect them**.

# **🏷️ Why put the rule ID in the exception?**

Suppose something fails and we receive:

> Error.

Not very useful.

But if the exception identifies:

**R5.3**

we immediately know which specification rule was violated.

That connects:

📜 specification

↓

💻 implementation

↓

⚠️ runtime error

It also makes the behaviour much easier to test and trace.

# **🔑 The mental model**

When something goes wrong, ask these questions in order:

**1\. What rule applies?**

📏 Domain rule

↓

**2\. Is the supplied information invalid?**

📥 Illegal argument

OR

**3\. Is the requested action impossible because of current state?**

🔒 Illegal state

↓

**4\. Has anything already been changed?**

If failure occurs:

🚫 there should be no partial update.

↓

**5\. Does the error identify the relevant rule clearly?**

🏷️ In Crescendo, include the rule ID.

# **🧠 One sentence to remember**

> **Arguments tell us what was supplied; state tells us what situation the object is currently in; domain rules determine what combinations and operations are allowed.**

That distinction will make the error-handling parts of A2 much easier to reason about.

