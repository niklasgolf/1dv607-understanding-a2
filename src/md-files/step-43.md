# **🪜 Step 43 — Understand Invariants**

We have already talked about:

📏 domain rules

🔒 encapsulation

🔢 multiplicity

🏗️ constructors

⚠️ error handling

These may seem like separate topics, but one important OOP idea connects them:

> **The invariant.**

# **🧠 What is an invariant?**

## **💡 BACKGROUND & EXPLANATION**

An **invariant** is a condition that should always be true whenever an object is in a valid state.

Imagine our fictional `Book`.

We decide:

> Every Book must have a title.

Then this is valid:

📕 Book  
title \= `"The Hobbit"`

But this is not:

📕 Book  
title \= `""`

The idea is:

> **A valid Book should never exist in the second state.**

That's an invariant.

# **🏗️ Constructors establish invariants**

When an object is first created, its constructor has an important job:

> **Make sure the object starts life in a valid state.**

Suppose a Book requires:

📕 title

✍️ author

🔢 ISBN

If title is required, we shouldn't create the Book first with no title and hope somebody fixes it later.

Conceptually:

❌ create invalid object → repair later

Better:

✅ validate → create valid object

# **🔒 Methods preserve invariants**

But creating a valid object isn't enough.

The object must **remain valid**.

Imagine:

👤 Member may borrow at most 3 books.

Initially:

👤 → 0 books

Valid. ✅

Then:

👤 → 1 book

Valid. ✅

Then:

👤 → 2 books

Valid. ✅

Then:

👤 → 3 books

Valid. ✅

Another borrowing attempt would produce:

👤 → 4 books

Invalid. ❌

So the borrowing operation must prevent that transition.

# **🔄 Think in terms of state transitions**

This is a powerful way to understand objects.

An object has:

📦 **CURRENT STATE**

An operation attempts:

⚙️ **CHANGE**

The result would be:

📦 **NEW STATE**

Before accepting that change, we ask:

> **Would the object's invariants still hold?**

If yes:

✅ perform operation.

If no:

❌ reject operation.

# **🔢 Multiplicity can represent an invariant**

Suppose UML says:

**Member → Book 0..3**

That isn't merely decoration on the diagram.

It expresses something that should remain true:

> A Member must never be associated with more than three Books.

So multiplicity can correspond to an invariant that the implementation needs to protect.

# **💎 Composition can involve invariants too**

Suppose a `Loan` must always belong to exactly one Member.

Then:

📄 Loan → 👤 Member **1**

means a Loan without a Member may represent an invalid state.

Again, UML and implementation connect:

📐 **UML says `1`**

↓

📏 **Domain says exactly one is required**

↓

💻 **Implementation should preserve that condition**

# **🔒 Now encapsulation makes even more sense**

Why make internal state private?

Because if anybody can change it directly, the object cannot protect its invariants.

Imagine Member correctly implements:

⚙️ `borrowBook()`

and carefully prevents a fourth book.

Great.

But then external code can directly manipulate:

📚 `borrowedBooks`

and add books itself.

Our beautiful rule becomes useless.

That's one of the deeper reasons for encapsulation:

> 🔒 **An object needs control over changes to its state so it can preserve its invariants.**

# **⚠️ Error handling protects invariants**

Now Step 42 connects too.

Someone requests an operation that would create an invalid state.

The object says:

🚫 No.

An exception communicates the failure.

But crucially:

> **The object remains valid.**

Before:

👤📕📕📕 \= valid

Attempt fourth book:

❌ rejected

After:

👤📕📕📕 \= still valid

That's why the Crescendo requirement that a failed operation must not partially update the system is so important. crescendo\_music\_school

# **🎼 We can see this idea throughout Crescendo**

### **📜 FROM THE GITLAB MATERIAL**

For example, the supplied specification says a Student can have at most three courses and only courses at the student's level. crescendo\_music\_school

So valid Student state must respect those restrictions.

Likewise, a Course has exactly one teacher and cannot contain more students than its capacity. crescendo\_music\_school

And a TuitionFee has rules governing amount, status and payment date. crescendo\_music\_school

These rules define what **valid domain states** look like.

# **🧩 Invariants connect many A2 concepts**

Now look at how everything fits:

📜 **Specification**

defines rules.

↓

📐 **UML**

represents some of those rules structurally.

↓

🏗️ **Constructor**

creates a valid initial object.

↓

🔒 **Encapsulation**

prevents uncontrolled modification.

↓

⚙️ **Methods**

provide controlled state changes.

↓

📏 **Validation**

checks whether changes are permitted.

↓

⚠️ **Exceptions**

reject invalid operations.

↓

🔢 **Multiplicity**

constrains relationships.

↓

🧠 **Invariant**

remains true throughout the object's valid lifetime.

# **🔎 This matters in reverse engineering too**

When examining existing code in Part 2, we can ask:

> **What conditions is this implementation actually protecting?**

Perhaps the specification says:

📏 X must always be true.

But when we inspect the code, nothing prevents X from becoming false.

That's an important gap.

So reverse engineering isn't merely discovering:

> "There is a class called Application."

We're also investigating:

> **What states can an Application actually enter, and what rules does the implementation really enforce?**

# **🔑 The sentence worth remembering**

If you remember only one thing from this step:

> **A constructor should establish valid state, and every later operation should preserve valid state.**

That's the essence of invariants.

And suddenly constructors, private fields, controlled methods, validation, multiplicity and exceptions stop looking like unrelated programming techniques.

They're all helping the objects **protect their own validity**.

