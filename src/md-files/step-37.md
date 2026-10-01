# **🪜 Step 37 — Turn Ordinary Requirements into an Object-Oriented Design**

This is one of the most useful skills in the whole course.

Someone gives us a sentence in ordinary English. We need to ask:

> **What does this sentence mean for our object model?**

Does it describe:

📦 an **attribute**?

⚙️ a **method**?

🔗 an **association**?

🔢 a **multiplicity**?

📏 a **domain rule**?

🧱 or perhaps another **class**?

We'll continue with our imaginary Library system so we don't solve Crescendo or PawsHome.

# **📦 1\. Does it describe information something HAS?**

Requirement:

> "A book has a title and ISBN."

Ask:

> Is this information describing the state of a Book?

Yes.

So we probably have:

📕 **Book**

→ title  
→ ISBN

These are candidate **attributes**.

### **Memory trick**

> **HAS INFORMATION → ATTRIBUTE**

# **⚙️ 2\. Does it describe something an object DOES?**

Requirement:

> "A member can return a book."

Now we're describing behaviour.

That suggests an **operation/method**.

👤 Member

→ `returnBook(...)`

We're moving from:

> What does the object **know**?

to:

> What can the object **do**?

### **Memory trick**

> **DOES SOMETHING → METHOD**

# **🔗 3\. Does it connect two important objects?**

Requirement:

> "Members borrow books."

We have two domain concepts:

👤 Member

and:

📕 Book

The sentence establishes a relationship between them.

That suggests an:

🔗 **Association**

Conceptually:

**Member ↔ Book**

### **Memory trick**

> **OBJECT A IS RELATED TO OBJECT B → ASSOCIATION**

# **🔢 4\. Does it tell us HOW MANY?**

Now change the requirement slightly:

> "A member may borrow a maximum of three books."

We already know:

👤 Member ↔ 📕 Book

But now we have additional information about the relationship:

**maximum 3**

That's a multiplicity/constraint.

👤 Member → Book **0..3**

### **Memory trick**

> **HOW MANY? → MULTIPLICITY**

# **📏 5\. Does it restrict what is allowed?**

Requirement:

> "A member cannot borrow a book that is already borrowed."

That's not merely stored information.

It's a rule governing valid behaviour.

📏 **Domain rule**

Before allowing the borrowing operation, the domain needs to ensure that the Book is available.

### **Memory trick**

> **MUST / CANNOT / ONLY IF / MAXIMUM → probably a DOMAIN RULE**

Notice that one sentence can represent **more than one concept**.

"Maximum three books" concerns both:

🔢 multiplicity

and:

📏 a rule that the implementation must enforce.

# **🧱 6\. Does the concept deserve its own class?**

This is harder.

Suppose our requirements become:

> "For every loan, the system records the borrowing date, due date and return date."

We could initially think:

👤 Member ↔ 📕 Book

But now the **borrowing itself has information**:

📅 borrowing date

📅 due date

📅 return date

That gives us a clue that perhaps **Loan** is an important domain concept of its own:

👤 Member

↓

📄 Loan

↓

📕 Book

Now `Loan` can contain the information belonging specifically to that borrowing.

This is a common reason for introducing another class:

> **The relationship itself has meaningful state or behaviour.**

# **🧠 Don't mechanically turn every noun into a class**

Suppose the requirement says:

> "The member has a name."

The noun **name** appears.

That doesn't mean we automatically create:

🧱 `Name`

Most likely:

👤 Member  
→ name

is enough.

So noun hunting is merely a **starting technique**.

We still have to reason about the domain.

# **🔍 One sentence can contain several design clues**

Consider:

> "A member may borrow at most three available books."

Let's dissect it.

**Member**

→ candidate class 👤

**Book**

→ candidate class 📕

**Member borrows Book**

→ association 🔗

**at most three**

→ multiplicity/rule 🔢

**available**

→ state of Book 📦

**may borrow**

→ behaviour ⚙️

Suddenly one small English sentence tells us a lot about the object model.

# **🧩 Ask WHO should enforce the rule**

Finding the rule isn't enough.

Now GRASP enters.

Requirement:

> "A member may borrow at most three books."

Someone in the implementation must decide whether another book can be borrowed.

Ask:

> **Who already knows how many books the member currently has?**

Probably:

👤 **Member**

That's Information Expert reasoning.

But don't turn that into a mechanical rule that "Member must always do it." We examine the design and choose responsibilities based on the information and collaborations actually present.

# **🎯 A useful little decision tree**

When reading a requirement, ask:

**1\. What important THINGS exist?**

→ candidate **classes**

↓

**2\. What INFORMATION belongs to those things?**

→ candidate **attributes**

↓

**3\. What can those things DO?**

→ candidate **methods**

↓

**4\. Which things are CONNECTED?**

→ candidate **associations**

↓

**5\. HOW MANY can be connected?**

→ **multiplicity**

↓

**6\. What MUST or MUST NOT happen?**

→ **domain rules**

↓

**7\. Who has the INFORMATION needed to enforce those rules?**

→ **responsibility / GRASP**

This is an extremely useful reading technique for object-oriented requirements.

# **🔄 And notice the beautiful symmetry in A2**

In Part 1, we're largely moving:

📜 Requirement

→ 🧠 interpretation

→ 📐 design

→ 💻 implementation

But in Part 2 we're often travelling backwards:

💻 implementation

→ 🔎 classes, fields, methods and relationships

→ 📐 reconstructed design

→ ⚖️ compare against requirements

So we're learning to read the same object-oriented ideas **in both directions**.

