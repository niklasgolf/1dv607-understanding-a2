# **🪜 Step 46 — Protect Collections and Internal State**

We've learned that objects should protect their own invariants. Now imagine we carefully design a `Member` that allows at most three borrowed books — but then accidentally give outside code direct access to the Member's internal list.

Our protection can disappear completely.

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo material specifically warns that returned collections must **not expose internal state**. The UML instructions also say multi-valued associations are represented using collections such as Lists. crescendo\_music\_school

So this is an important part of understanding encapsulation.

# **💡 Imagine an internal list**

Our fictional Member conceptually contains:

👤 **Member**

📚 borrowedBooks

The Member carefully controls borrowing through:

⚙️ `borrowBook()`

That operation checks:

🔢 maximum 3 books

📕 book availability

🔁 duplicates

and other rules.

Excellent.

But Member also has:

⚙️ `getBorrowedBooks()`

What should that return?

That's where things get interesting.

# **😱 The dangerous version**

Imagine `getBorrowedBooks()` gives the caller the **actual internal collection**.

Now another part of the program obtains it.

Conceptually:

👤 Member

↓

📚 **actual internal borrowedBooks list**

↓

👨‍💻 outside code gets direct access

If that outside code can modify the list, it could potentially:

➕ add a fourth Book

➕ add the same Book twice

➖ remove Books without performing the proper return operation

🧹 clear the entire collection

The caller has walked around our carefully designed domain methods.

# **💥 Our encapsulation is broken**

We might have beautifully implemented:

⚙️ `borrowBook()`

with every possible validation.

But outside code effectively says:

> "Thanks, I'll just modify your list directly."

Then the object can no longer guarantee its own invariants.

This connects directly to Step 43:

> **An object needs control over changes to its state if it is going to protect its invariants.**

# **🔒 So what does “protect the collection” mean?**

The general idea is:

> **Outside code may be allowed to SEE the contents without being allowed to directly MODIFY the object's internal collection.**

Conceptually:

👤 Member owns:

🔒 📚 internal collection

Outside code asks:

> "Which Books have you borrowed?"

Member answers:

> "Here is information about them."

But not:

> "Here is my actual mutable internal container. Do whatever you want with it."

# **🪟 Think of it as a window**

A protected collection is like looking through a window.

👀 You can see:

📕 Book A  
📕 Book B  
📕 Book C

But you cannot reach through the window and rearrange the Member's internal state.

That's the basic idea.

# **🧠 Why have a getter at all?**

Because other objects may legitimately need to know:

> Which courses does this Student have?

> Which students are in this Course?

> Which fees belong to this Student?

So:

🚫 "Never expose any information"

isn't the goal.

The goal is:

> **Expose the information without surrendering control over the object's state.**

# **🎼 This matters a lot in Crescendo**

Consider:

🎓 Student ↔ 🎼 Course

Suppose Student protects:

> maximum three Courses.

If `getCourses()` exposes the actual mutable internal collection, external code might bypass the enrollment rules.

Likewise, Course has capacity restrictions. The specification says a Course contains between zero students and its capacity. crescendo\_music\_school

We don't want outside code to bypass that by directly manipulating the Course's student collection.

# **🔗 It also protects bidirectional associations**

Remember Step 45\.

Suppose Student and Course maintain:

🎓 Student ↔ 🎼 Course

through controlled enrollment and withdrawal operations.

Those operations carefully update **both ends**.

But then somebody directly removes Course from Student's exposed internal list.

We could get:

🎓 Student says:

> "I'm not enrolled."

while:

🎼 Course says:

> "Yes you are."

💥 Relationship inconsistency.

So protecting collections also protects the **object graph**.

# **🛡️ Common conceptual solutions**

There are several implementation techniques for doing this. At the conceptual level, the important possibilities are:

**Return a copy**

The caller receives another collection containing the same elements.

Changing that collection doesn't change the object's internal collection.

Or:

**Return a read-only/unmodifiable view**

The caller can inspect the collection but cannot modify it through that reference.

The exact implementation technique depends on the programming language and design.

The assignment-level principle is simpler:

> 🔒 **Do not allow callers to directly mutate your internal collection.**

# **⚠️ A subtle distinction**

Protecting the **collection** doesn't necessarily mean making every object inside it immutable.

Suppose Member returns a protected collection containing:

📕 Book A  
📕 Book B

The caller may still receive references to those Book objects.

So there are actually two different questions:

### **1️⃣ Can the caller modify the collection structure?**

Add/remove Books?

### **2️⃣ Can the caller interact with the Book objects themselves?**

Those are separate concerns.

For A2, the important point here is that the owner should not expose its internal mutable collection in a way that lets callers bypass its relationship rules.

# **🕵️ This is useful when reverse engineering too**

When studying existing code, don't merely ask:

> "Does this class have private fields?"

Also ask:

> "Can outside code still modify those fields indirectly?"

For example:

🔒 private collection

but:

🚪 getter returns the actual mutable collection

may provide much weaker encapsulation than it initially appears.

# **🧩 Now several earlier steps connect**

Consider how many concepts meet here:

🔒 **Encapsulation**

Object controls its state.

📏 **Domain rules**

Only valid changes are permitted.

🔢 **Multiplicity**

Collection size may have restrictions.

🔗 **Associations**

Collection may represent relationships.

↔️ **Bidirectional consistency**

Both ends must agree.

🧠 **Invariants**

Valid conditions must remain true.

⚙️ **Methods**

Controlled operations change the relationship.

Protecting an internal collection helps preserve **all of them**.

# **🔑 The sentence to remember**

> **A getter should let another object learn about your state without necessarily giving it permission to rewrite your state.**

That's a much deeper understanding of encapsulation than simply:

> "Make fields private."

