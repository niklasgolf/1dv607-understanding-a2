# **🪜 Step 39 — Association, Dependency and Navigability**

These concepts are closely related, so they are easy to mix up when reverse-engineering code.

The central question is:

> **How exactly does one object know about or use another object?**

# **🔗 1\. Association — a structural relationship**

## **💡 BACKGROUND & EXPLANATION**

An **association** usually represents a relationship that forms part of the object's structure.

Using our imaginary Library example:

👤 **Member**

stores its:

📄 **Loans**

That isn't merely a temporary interaction. The Member maintains a relationship with those Loan objects.

Conceptually:

**Member ─── Loan**

That's a strong clue for an association.

A useful question is:

> **Does object A keep a reference to object B as part of its state?**

If yes, an association is often involved.

# **🔌 2\. Dependency — “I need you temporarily”**

Now imagine a `ReportGenerator`.

It doesn't permanently store a `Library`, but one operation receives a Library, reads some information from it and generates a report.

So:

📊 ReportGenerator

temporarily **uses**

🏛️ Library

This can represent a **dependency** rather than a permanent association.

Think:

> **Association \= I KNOW/HAVE you.**

> **Dependency \= I USE you.**

# **🔎 How can code reveal the difference?**

Suppose Class A contains something conceptually equivalent to:

**a field containing B**

That strongly suggests:

A 🔗 B

an association.

But suppose B appears only as:

**a method parameter**

or as a temporary local object inside a method.

That may instead indicate:

A 🔌 B

a dependency.

This isn't a purely mechanical rule, but it's an excellent starting point when reverse engineering.

# **➡️ 3\. Navigability — which direction can we travel?**

This is slightly different.

Suppose a `Member` stores its Loans:

👤 Member

→ 📄 Loan

But Loan does **not** store a reference back to Member.

Then, from the object structure, we can navigate:

**Member → Loan**

but perhaps not:

**Loan → Member**

That's **navigability**.

# **↔️ What if both objects reference each other?**

Suppose:

👤 Member stores Loans

and:

📄 Loan stores its Member.

Now we can navigate:

**Member → Loan**

and:

**Loan → Member**

So the relationship is effectively **bidirectional**.

↔️

# **🧠 Association and navigability answer different questions**

This distinction is useful:

### **🔗 Association**

> **Are these classes structurally related?**

### **➡️ Navigability**

> **From which direction can one object reach the other?**

So we might have an association between A and B while still needing to determine whether navigation is:

**A → B**

**A ← B**

or:

**A ↔ B**

# **🔢 Multiplicity is yet another question**

Now add multiplicity.

Suppose:

👤 Member → 📄 Loan

Member stores:

**List of Loans**

while every Loan stores exactly one Member.

We now have several different pieces of information:

🔗 **Association**  
Member and Loan are structurally related.

➡️ **Navigability**  
Perhaps both can reach each other.

🔢 **Multiplicity**  
One Member can have many Loans, while each Loan has one Member.

These concepts describe different aspects of the **same relationship**.

# **🕵️ Why this matters in PawsHome**

## **📜 FROM THE GITLAB MATERIAL**

In Part 3, the supplied template specifically asks you to verify the AI-generated class diagram against the actual implementation, including:

🔗 associations

🔢 multiplicities

➡️ navigability

🔌 dependencies. genai\_log\_template

That means the teacher doesn't want us merely to ask:

> "Did AI find the correct classes?"

We need to examine the relationships more precisely.

# **🤖 Imagine the AI says...**

Suppose AI draws:

**A ↔ B**

But we inspect the implementation and discover:

A permanently stores B.

B never stores A.

Then AI may have correctly discovered:

✅ the relationship

while incorrectly representing:

❌ its navigability.

That's why Part 3 evaluates individual details rather than simply declaring the whole diagram right or wrong.

# **🧩 Another example**

Imagine:

**PaymentService**

has a method that temporarily receives a `Member`.

But PaymentService never stores that Member.

If AI turns this into a strong permanent association:

**PaymentService ─── Member**

we should investigate whether the code actually supports that interpretation.

Perhaps what really exists is merely:

**PaymentService \--→ Member**

a dependency.

# **🔍 A useful reverse-engineering test**

When class A mentions class B, ask:

### **Question 1**

**Does A store B as part of its state?**

Likely:

🔗 Association

### **Question 2**

**Does A only use B temporarily in an operation?**

Possibly:

🔌 Dependency

### **Question 3**

**Can A obtain B?**

Then:

➡️ A can navigate to B.

### **Question 4**

**Can B also obtain A?**

If yes:

↔️ potentially bidirectional navigability.

### **Question 5**

**How many Bs can A be connected to?**

Now we're asking about:

🔢 Multiplicity.

# **🧠 The memory trick**

Keep these four questions separate:

**Association**

🔗 **WHO is structurally connected?**

**Multiplicity**

🔢 **HOW MANY?**

**Navigability**

➡️ **WHICH DIRECTION can we navigate?**

**Dependency**

🔌 **WHO temporarily USES whom?**

Once you separate those four questions, UML class diagrams become much easier to reason about.

