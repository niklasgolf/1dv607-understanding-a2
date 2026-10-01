# **🪜 Step 45 — Understand Bidirectional Associations**

We've already learned that an **association** means objects are structurally related.

Now comes an important complication:

> **Sometimes both objects need to know about each other.**

That's a **bidirectional association**.

## **💡 BACKGROUND & EXPLANATION**

Return to our imaginary Library.

Suppose:

👤 **Member** knows which Books they have borrowed.

And:

📕 **Book** knows which Member currently has it.

Then information exists in **both directions**:

👤 Member ↔ 📕 Book

From Member we can find the Book.

From Book we can find the Member.

That's bidirectional navigability.

# **🔄 The tricky part: both ends must agree**

Imagine Alice borrows *The Hobbit*.

After the operation we should have:

👤 Alice says:

> "I have The Hobbit."

And:

📕 The Hobbit says:

> "Alice has me."

Everything agrees. ✅

# **😱 But imagine only one side gets updated**

Member:

👤 Alice → 📕 The Hobbit

But Book:

📕 The Hobbit → **nobody**

Now we have a contradiction.

Ask the Member:

> Who borrowed The Hobbit?

Answer:

> Alice.

Ask the Book:

> Who borrowed you?

Answer:

> Nobody.

💥 Our object model has become inconsistent.

# **📜 FROM THE GITLAB MATERIAL**

This matters directly in Crescendo.

The supplied instructions explain that association ends shown without navigability arrows are **bidirectional**, and both ends must agree. Multi-valued ends are represented using lists, while single-valued ends use object references. crescendo\_music\_school

So this isn't merely extra OOP theory — relationship consistency is explicitly part of the supplied Crescendo design.

# **🎼 Imagine Student and Course**

Conceptually, we have:

🎓 Student ↔ 🎼 Course

Student needs to know:

> Which courses am I enrolled in?

Course needs to know:

> Which students are enrolled in me?

Suppose Student enrolls in Piano.

Correct state:

🎓 Student  
→ contains Piano

AND:

🎼 Piano  
→ contains Student

# **❌ The dangerous version**

Imagine the operation changes only:

🎓 Student → Piano

but forgets:

🎼 Piano → Student

Now the program contains two different versions of reality.

Student says:

> "I'm enrolled."

Course says:

> "You're not enrolled."

That's precisely what we want to prevent.

# **🧠 Why bidirectional relationships require care**

A one-directional relationship is simpler:

**A → B**

Only A stores the relationship.

But with:

**A ↔ B**

we potentially have two pieces of state representing **one conceptual relationship**.

Therefore:

> **Changing the relationship may require keeping both ends synchronized.**

# **🔢 Multiplicity makes this even more important**

Suppose:

🎓 Student can take maximum 3 Courses.

And:

🎼 Course can contain students only up to its capacity.

An enrollment operation now has to respect **both objects' constraints**.

Conceptually, before establishing the relationship we may need to know:

🎓 Can Student take another course?

🎼 Is Course full?

🎓 Is Student already enrolled?

📏 Are the other domain rules satisfied?

Only then should the relationship be established consistently.

# **⚠️ Remember the no-partial-update rule**

This connects beautifully with Step 42\.

Imagine:

1️⃣ Add Course to Student.

2️⃣ Then discover Course is full.

3️⃣ Throw exception.

We've failed the operation...

but Student has already changed.

❌ Bad.

Instead the conceptual pattern is:

🔎 Check required conditions

↓

📏 Validate rules

↓

✅ Everything valid

↓

🔗 Update relationship consistently

↓

🎓 Student knows Course

AND

🎼 Course knows Student

# **🚪 Removing a relationship has the same problem**

Suppose Student withdraws.

Before:

🎓 Student ↔ 🎼 Course

After:

🎓 Student 🎼 Course

The relationship should disappear from **both ends**.

If we remove Student from Course but forget to remove Course from Student:

💥 inconsistency again.

So bidirectional relationships have two symmetrical problems:

➕ **Adding relationship**

Both ends must agree.

➖ **Removing relationship**

Both ends must agree.

# **💎 Composition can also have two perspectives**

Consider:

🎓 Student ◆── 💰 TuitionFee

The Student owns its TuitionFees.

But the supplied design also says each TuitionFee belongs to exactly one Student. crescendo\_music\_school

So conceptually:

Student knows:

> "These are my fees."

And a TuitionFee can know:

> "This is my Student."

Again, the object graph must tell a consistent story.

# **🕸️ Think of the whole program as an object graph**

This is a useful mental model.

Instead of imagining isolated boxes:

📦 📦 📦 📦

imagine objects connected by links:

👨‍🏫  
↕  
🎼 ↔ 🎓  
 ↕  
 💰

That's an **object graph**.

Operations don't merely change primitive values.

They can also:

➕ create links

➖ remove links

🔄 replace links

And every operation must leave the graph valid.

# **🔎 This becomes important in reverse engineering**

When examining PawsHome code, suppose we discover:

Class A stores B.

Then we inspect B.

Does B also store A?

If yes:

↔️ likely bidirectional.

If no:

➡️ likely one-directional.

And then ask:

> When the relationship changes, does the implementation keep all stored ends consistent?

That's a deeper analysis than simply noticing that two classes are related.

# **🤖 It also matters in Part 3**

If AI draws:

**A ↔ B**

we shouldn't accept that merely because A and B interact somewhere.

We inspect the implementation:

🔎 Does A permanently reference B?

🔎 Does B permanently reference A?

🔎 What are the multiplicities?

🔎 How are those relationships maintained?

Then we can judge whether the AI's association and navigability are actually correct.

# **🔑 The sentence to remember**

> **A bidirectional association represents one conceptual relationship stored from two directions, so both ends must always tell the same story.**

And that gives us a very useful rule:

**Before operation**

✅ object graph consistent

↓

⚙️ operation

↓

**After operation**

✅ object graph still consistent

That is one of the practical challenges of translating UML associations into working object-oriented software.

