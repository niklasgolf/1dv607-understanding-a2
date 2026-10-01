# **🪜 Step 44 — Understand State Transitions**

We've just learned that objects have **valid states** and should protect their invariants.

Now we'll add another idea:

> **Objects can move from one valid state to another.**

That movement is a **state transition**.

# **💡 BACKGROUND & EXPLANATION**

Imagine something very simple:

💰 an unpaid invoice.

Its current state is:

**UNPAID**

Someone records a payment.

Its new state becomes:

**PAID**

So we have:

**UNPAID → record payment → PAID**

That's a state transition.

The object is still valid — but its state has changed.

# **🎼 Crescendo gives us a perfect example**

### **📜 FROM THE GITLAB MATERIAL**

`TuitionFee` has a `PaymentStatus` with:

**UNPAID**

**PAID**

The specification says that a new tuition fee begins:

**UNPAID**

with:

**no payment date**

When payment is recorded, it becomes:

**PAID**

and stores the payment date.

It also says that the same fee cannot be paid twice. crescendo\_music\_school

# **🔄 So we can picture its lifecycle**

When created:

💰 **UNPAID**  
📅 paymentDate \= none

↓

⚙️ record payment

↓

💰 **PAID**  
📅 paymentDate \= actual payment date

That's an allowed transition.

# **🚫 But not every transition is allowed**

What happens if we try:

💰 **PAID**

↓

⚙️ record payment again

↓

💰 **PAID again?**

The specification says:

🚫 **No.**

A TuitionFee cannot be paid twice. crescendo\_music\_school

So the current state determines which operations are legal.

# **🧠 This connects to `IllegalStateException`**

Now Step 42 becomes clearer.

Suppose we provide a perfectly valid payment date.

📅 The argument is fine.

But the TuitionFee is already:

**PAID**

The problem isn't:

> "You gave me an invalid date."

The problem is:

> "This operation isn't permitted in my current state."

That's the conceptual distinction behind an **illegal state**.

# **📊 Enums often represent important states**

`PaymentStatus` is an **enum**.

Instead of allowing arbitrary text such as:

"paid"

"Paid"

"finished"

"done"

"yes"

we define a limited set of meaningful values:

**UNPAID**

**PAID**

This makes the possible states explicit.

In Crescendo, the supplied class diagram includes `PaymentStatus` as an enum with those two values.

# **🔗 State can involve several attributes together**

Here's something deeper.

The state of TuitionFee isn't represented only by `status`.

These values are related:

### **Valid state A**

status \= **UNPAID**

paymentDate \= **none**

### **Valid state B**

status \= **PAID**

paymentDate \= **a date**

So the invariant concerns a **combination of attributes**.

We don't want:

❌ status \= UNPAID  
📅 paymentDate \= yesterday

or:

❌ status \= PAID  
📅 paymentDate \= none

The object's fields should tell one consistent story.

# **🔒 Encapsulation protects transitions**

Imagine external code could freely do:

change status to PAID

but forget to set the payment date.

We could create:

💰 PAID  
📅 no payment date

That's inconsistent.

Instead, a meaningful domain operation such as:

**recordPayment(...)**

can conceptually perform the complete transition:

🔎 verify current state

↓

📅 validate required information

↓

💰 update status

↓

📅 update payment date

↓

✅ valid new state

# **🎯 This explains why meaningful methods matter**

Compare these two designs conceptually.

### **Design A**

`setStatus()`

`setPaymentDate()`

The caller must know exactly how TuitionFee works internally.

Versus:

### **Design B**

`recordPayment()`

The caller says:

> **What I want to happen.**

And TuitionFee knows:

> **How to perform that transition correctly.**

That's a much more object-oriented way of thinking about behaviour.

# **⏱️ State transitions appear in sequence diagrams**

Suppose we're drawing a sequence diagram for paying a tuition fee.

The diagram might show an interaction that eventually causes:

**UNPAID → PAID**

The sequence diagram isn't primarily showing the states themselves.

It's showing the **interactions that cause the transition**.

So:

📐 **Class diagram**

shows what objects structurally exist.

📦 **Object state**

shows the object's current condition.

⚙️ **Operation**

causes behaviour.

⏱️ **Sequence diagram**

shows the interactions over time.

🔄 **State transition**

describes how the object's condition changes as a result.

# **🐕 This idea will matter in PawsHome too**

### **📜 FROM THE GITLAB MATERIAL**

The PawsHome specification contains several state-oriented rules.

For example, an adoption application begins as **pending**. It may later be withdrawn, approved or rejected under specified conditions. Approval also changes the animal to **adopted**, and other pending applications for that animal must be rejected. pawshome\_shelter

That means when reverse-engineering PawsHome, an important question is:

> **Does the implementation actually enforce the required transitions?**

Not merely:

> "Does it have a status field?"

# **🔎 That's a crucial distinction**

An implementation might contain:

📦 `status`

and therefore *look* correct structurally.

But perhaps it allows:

**PENDING → APPROVED**

without checking the required conditions.

Then:

📐 the structure may look plausible

but:

⚙️ the behaviour is wrong.

That's why Part 2 requires us to inspect actual implementation behaviour rather than only class names and fields.

# **🔑 The state-transition formula**

When examining an important operation, ask:

**1\. What is the state BEFORE?**

↓

**2\. What operation is requested?**

↓

**3\. Is that operation legal in this state?**

↓

**4\. What rules must be satisfied?**

↓

**5\. What changes?**

↓

**6\. What is the state AFTER?**

↓

**7\. Are all invariants still true?**

That is an excellent way to reason about object-oriented behaviour.

