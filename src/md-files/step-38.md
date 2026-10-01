# **🪜 Step 38 — Read Source Code Like a Detective**

This step is especially important for **Part 2**.

There, we don't begin with a trustworthy UML diagram of the current PawsHome implementation. We have to study the existing code and reconstruct what its design actually is.

## **💡 BACKGROUND & EXPLANATION**

Imagine we're given source code we've never seen before.

Don't try to understand the whole program immediately.

Instead, collect **clues**.

🔎 Classes  
🔎 Fields  
🔎 Constructors  
🔎 Collections  
🔎 Parameters  
🔎 Return types  
🔎 Method calls

Each tells us something different about the hidden design.

# **🧱 Clue 1 — Classes**

Suppose the program contains classes named:

**Library**

**Member**

**Book**

**Loan**

Our first observation is simple:

> These concepts exist as classes in the implementation.

So they belong in a diagram representing the **current implementation**.

We don't yet decide whether this is a *good* design.

That's crucial.

In reverse engineering:

> **Observe first. Evaluate later.**

# **📦 Clue 2 — Fields**

Suppose `Member` contains fields representing:

**name**

**memberId**

**loans**

Those fields reveal what a Member object stores.

Simple values such as:

**name → string**

are likely attributes.

But:

**loans → collection of Loan objects**

is much more interesting.

That can reveal a **relationship between classes**.

# **🔗 Clue 3 — Object references**

Suppose `Loan` stores a reference to a `Book`.

That tells us:

📄 Loan → 📕 Book

There is some relationship in the implementation.

Then we investigate further:

> Does Book also reference Loan?

If yes, perhaps the relationship is **bidirectional**.

If not, perhaps navigation only exists:

**Loan → Book**

This matters in Part 3 too, because the assignment specifically asks us to verify the AI's interpretation of **navigability**.

# **📚 Clue 4 — Collections**

Collections are especially useful.

Suppose `Library` contains:

**books: List\<Book\>**

That strongly suggests:

🏛️ Library → many Books

But we need to be careful.

A collection alone doesn't automatically prove every domain constraint.

For example:

**List\<Book\>**

could technically hold:

0 books

1 book

500 books

So the code may suggest:

**0..\***

unless additional implementation logic restricts it.

This is why reverse engineering requires more than simply translating data types into UML.

# **🔢 Clue 5 — Look for enforcement of multiplicity**

Suppose Member has:

**List\<Book\> borrowedBooks**

But the requirements say:

> Maximum three books.

Does the implementation actually check:

> Is the list already size 3?

If yes:

💻 implementation enforces the maximum.

If not:

📜 specification may say **0..3**

but:

💻 implementation may effectively permit **0..\***

That difference is exactly the sort of thing Part 2 wants us to discover.

The **current class diagram describes the implementation**, not what we wish the implementation did.

# **🏭 Clue 6 — Constructors**

Constructors tell us a great deal about object creation.

Ask:

> Who is allowed to create this object?

> What information is required when it is created?

> Does creation immediately establish relationships?

For example, if creating a `Loan` requires:

👤 Member

📕 Book

📅 date

then those constructor requirements tell us something about the object's required state.

Constructors can therefore provide clues about:

🏭 creation responsibility

🔗 mandatory relationships

📏 invariants

# **📥 Clue 7 — Method parameters**

Suppose we discover an operation conceptually like:

**borrowBook(Book book)**

The parameter tells us that the Member operation needs a Book object.

That's evidence of interaction between:

👤 Member

and:

📕 Book

Parameters can therefore reveal **dependencies and collaborations** even when no permanent reference is stored.

# **📤 Clue 8 — Return types**

Return types also reveal relationships.

Suppose:

**findBook(...) → Book**

or:

**getLoans() → List\<Loan\>**

That tells us what kinds of objects a class exposes or works with.

Again, don't immediately draw every mentioned type as a permanent association.

Ask:

> Is this object actually stored?

> Is it merely temporarily used?

> Is it returned?

> Is it passed as an argument?

These differences help distinguish stronger structural relationships from weaker dependencies.

# **⚙️ Clue 9 — Method bodies**

Now we get to one of the richest sources of evidence.

Suppose `borrowBook()` conceptually does this:

1. Check whether the Book is available.  
2. Check how many Books the Member already has.  
3. Create a Loan.  
4. Mark the Book as borrowed.  
5. Add the Loan to the Member.

Now we learn far more than we could from method names alone.

We discover:

📏 rules

🏭 object creation

🔗 relationships

🔄 state changes

🧩 responsibilities

and perhaps:

👨‍🔬 Information Expert decisions.

# **📞 Clue 10 — Method calls**

Method calls are particularly important for **sequence diagrams**.

Suppose:

**LibraryService**

calls:

→ `member.canBorrow()`

then:

→ `book.isAvailable()`

then:

→ `member.borrow(book)`

That gives us clues about the **actual order of collaboration**.

For a sequence diagram, this is gold.

We can trace:

**Object A calls Object B**

↓

**B calls C**

↓

**C returns**

↓

**A calls D**

Now the dynamic behaviour of the system begins to appear.

# **🧬 Clue 11 — Inheritance**

Suppose we find:

**Student extends Person**

Then the implementation explicitly contains inheritance.

Our current class diagram should represent that.

Again:

💻 Code says it exists.

Therefore:

📐 current diagram should show it.

Whether inheritance was the best design choice is a **later design-analysis question**.

# **⚠️ The biggest reverse-engineering trap**

Imagine the specification says:

> A Member may borrow at most three Books.

We inspect the code.

There is no check.

It's tempting to draw:

**Member → Book 0..3**

because we know that's what the program **should** enforce.

But then we're drawing the specification rather than reverse-engineering the implementation.

For a **current-system diagram**, that can be wrong.

The correct question is:

> **What does this implementation actually permit?**

That distinction is fundamental to PawsHome Part 2\. The assignment specifically requires the current diagrams to describe the existing implementation and asks you to discuss discrepancies between that implementation and the specification. assignment\_2

# **🕵️ The reverse-engineering detective checklist**

When opening an unfamiliar class, mentally ask:

**1\. What class is this?**  
→ candidate UML class

**2\. What does it store?**  
→ attributes / relationships

**3\. What other objects does it reference?**  
→ associations

**4\. Does it store collections?**  
→ possible multi-valued relationships

**5\. What do its constructors require?**  
→ creation/invariants/required relationships

**6\. What methods does it expose?**  
→ operations

**7\. What parameters and return types appear?**  
→ dependencies/collaborations

**8\. What rules are actually checked?**  
→ implemented domain rules

**9\. Which other methods does it call?**  
→ sequence behaviour

**10\. What happens when something goes wrong?**  
→ validation/error handling

# **🧠 The golden rule**

When reverse engineering, separate these two thoughts:

🔎 **OBSERVATION**

> "This is what the code does."

from:

💡 **EVALUATION**

> "This is what I think the code should do."

That distinction is absolutely central to A2.

First become the **archaeologist**:

🔎 uncover the existing design.

Later become the **architect**:

✨ evaluate and improve it.

