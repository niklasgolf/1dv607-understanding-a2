# **🪜 Step 36 — Practice with a Tiny Library System**

Now we'll temporarily leave **Crescendo** and **PawsHome** completely alone.

This is a made-up example purely for learning the concepts.

## **💡 BACKGROUND & EXPLANATION**

Imagine we're designing a tiny system for a public library.

The requirements are:

📚 A library owns books.

👤 Members can borrow books.

📕 A book can be available or borrowed.

👤 A member may borrow a maximum of **3 books**.

📕 Each borrowed book can be borrowed by **only one member at a time**.

Already, we can start thinking in objects.

# **🧱 Step 1 — Find candidate classes**

Important nouns often give us clues:

🏛️ **Library**

📕 **Book**

👤 **Member**

These aren't automatically classes just because they're nouns, but they are good candidates.

Now ask:

> What does each object **know**, and what does it **do**?

# **📕 Book**

A Book might know:

**title**

**author**

**ISBN**

**whether it is available**

And it might do something such as:

**isAvailable()**

Notice the OOP idea:

> The Book isn't merely data. It can also have behaviour related to itself.

# **👤 Member**

A Member might know:

**memberId**

**name**

**borrowed books**

And might perform:

**borrowBook()**

**returnBook()**

**getBorrowedBooks()**

# **🏛️ Library**

The Library might know:

**its name**

**its books**

**its members**

And perhaps perform responsibilities such as:

**registerMember()**

**addBook()**

**findBook()**

# **🔗 Step 2 — Find the associations**

Now we ask:

> Which objects are related?

Clearly:

👤 **Member ↔ Book**

because members borrow books.

And:

🏛️ **Library → Book**

because the library contains its books.

We might also have:

🏛️ **Library → Member**

because the library registers its members.

# **🔢 Step 3 — Think about multiplicity**

Our requirement said:

> A member may borrow a maximum of three books.

So conceptually:

👤 Member → 📕 Book

**0..3**

A member can therefore have:

0 books

1 book

2 books

or 3 books.

But not 4\.

Now look from the other direction.

A particular physical Book can currently be borrowed by:

**0..1 Member**

Why?

Because it can either be:

📗 available → **0 borrowers**

or:

📕 borrowed → **1 borrower**

This demonstrates why multiplicity has **two ends**.

# **💎 Step 4 — Think about composition**

Suppose our requirements say:

> Books in this particular system exist only as part of a Library's catalogue and are created and managed by that Library.

We might decide that the relationship represents strong ownership:

🏛️ Library ◆── 📕 Book

The diamond belongs at the **owner**:

**Library**

Now we are thinking about more than:

> "These two objects are related."

We're thinking:

> "Who owns the lifecycle of this object?"

# **📏 Step 5 — Turn requirements into domain rules**

We have:

**Rule A:** Member may borrow at most 3 books.

**Rule B:** An unavailable Book cannot be borrowed.

**Rule C:** A Member cannot return a Book they haven't borrowed.

These aren't merely comments for humans.

They should affect the behaviour of our objects.

For example, if a member already has three books:

👤📕📕📕

and attempts to borrow another:

➕📕

the system should reject the operation.

The object model is therefore **protecting the domain rules**.

# **👨‍🔬 Step 6 — Apply Information Expert**

Now suppose we need to answer:

> Has this Member already borrowed three books?

Which object naturally has the information needed?

🏛️ Library?

📕 Book?

👤 Member?

The **Member** already knows its borrowed books.

Therefore Member is a natural candidate for that responsibility.

That's the GRASP **Information Expert** idea:

> Give a responsibility to the object that has the information necessary to fulfil it.

# **🏭 Step 7 — Apply Creator**

Suppose Members only exist after being registered with a Library.

We might ask:

> Who should create a Member?

The Library already manages its registered members.

So Library becomes a natural candidate.

🏛️ Library

↓

🏭 creates

↓

👤 Member

That's the kind of reasoning GRASP **Creator** encourages.

# **🎯 Step 8 — Think about cohesion**

Imagine we put everything into `Library`:

register members

borrow books

return books

check member limits

determine book availability

calculate fines

print menus

read keyboard input

save files

send emails

make coffee ☕😄

Eventually `Library` becomes responsible for almost everything.

Its responsibilities are no longer tightly focused.

That's a warning sign for:

📉 **Low cohesion**

We instead ask:

> Which responsibilities naturally belong together?

That question helps us distribute behaviour among our objects.

# **🕸️ Step 9 — Think about coupling**

Suppose `Book` needs detailed knowledge about:

Member

Library

ConsoleMenu

Database

EmailService

PaymentSystem

and several other classes.

Book becomes heavily dependent on the rest of the system.

That's:

🕸️ **high coupling**

We generally want to avoid **unnecessary** dependencies.

Not all coupling is bad — objects obviously need to collaborate.

The goal is sensible coupling.

# **⏱️ Step 10 — Imagine a sequence**

Now imagine the use case:

> **Member borrows a book**

A simplified conceptual sequence could be:

👤 User requests borrowing

↓

🖥️ System receives request

↓

👤 Member is identified

↓

📕 Book is identified

↓

🔎 Rules are checked

↓

📕 Book becomes borrowed

↓

👤 Member's borrowed-books relationship is updated

The sequence diagram would show **which objects participate and in what order they communicate**.

That is different from the class diagram.

📐 **Class diagram**

> What exists and how is it structurally connected?

⏱️ **Sequence diagram**

> What happens between those objects during one particular scenario?

# **🔄 Now reverse the exercise**

Imagine we were **not given these requirements or diagrams**.

Instead, somebody handed us an existing Library program.

We would inspect the code and discover:

🔎 `Library`

🔎 `Member`

🔎 `Book`

🔎 fields

🔎 methods

🔎 object references

🔎 collections

🔎 validation

🔎 method calls

and reconstruct the design.

That would be:

💻 **CODE**

↓

🔎 **REVERSE ENGINEERING**

↓

📐 **DESIGN**

And that's exactly the fundamental skill you're practising in **PawsHome Part 2**.

# **🧠 The important connection**

Our tiny Library example contains almost the entire conceptual core of A2:

📕 Classes and objects

📦 Attributes

⚙️ Methods

🔗 Associations

🔢 Multiplicities

💎 Composition

📏 Domain rules

🔒 Encapsulation

👨‍🔬 Information Expert

🏭 Creator

🎯 Cohesion

🕸️ Coupling

📐 Class diagrams

⏱️ Sequence diagrams

🔎 Reverse engineering

The systems change, but the **way of thinking remains the same**.

That is the real skill A2 is trying to develop.

