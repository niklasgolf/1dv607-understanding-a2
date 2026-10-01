# **🪜 Step 47 — Constructors, Creation Methods and GRASP Creator**

We already know how to create an object conceptually:

🏗️ call its constructor → get a new object.

But Crescendo adds an important design idea:

> **Just because an object needs to be created doesn't mean everybody in the program should be responsible for creating it.**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo material gives specific creation responsibilities:

🏫 `MusicSchool` creates/registers **Students**

🏫 `MusicSchool` creates/registers **Teachers**

🏫 `MusicSchool` creates **Courses**

🎓 `Student` creates/adds **TuitionFees**

The material explicitly asks us to consider which **GRASP principle** this reflects and how creation from outside should be prevented. crescendo\_music\_school

The GRASP principle involved is:

🏭 **Creator**

# **🏗️ First: what does a constructor do?**

## **💡 BACKGROUND & EXPLANATION**

A constructor initializes a newly created object.

Imagine our fictional Library:

📕 Book needs:

title

author

ISBN

When a Book is created, its constructor can ensure that it starts with the information it requires.

This connects directly to Step 43:

> **The constructor should establish a valid initial state.**

# **🏭 But who should CALL the constructor?**

That's a different question.

There are really two questions:

### **Question 1**

> How is a Book initialized?

🏗️ Constructor question.

### **Question 2**

> Which object should be responsible for creating Books?

🏭 Creator/responsibility question.

Those are not the same thing.

# **🎼 Look at Crescendo**

The specification says a Course belongs to a MusicSchool and cannot exist outside it. The school creates its courses. crescendo\_music\_school

Conceptually:

🏫 MusicSchool

↓

⚙️ `createCourse(...)`

↓

🏗️ Course is constructed

↓

🎼 Course

↓

🔗 MusicSchool now owns the Course

# **💡 Why not let anybody create Course?**

Imagine any random part of the application could create:

🎼 Course

directly.

Then we might get a Course that:

❌ doesn't belong to any MusicSchool

or perhaps:

❌ bypasses the school's unique-course-code rule.

But the domain says Courses belong to the school.

So allowing the school to control creation helps preserve that relationship and its rules.

# **🏭 This is GRASP Creator**

Creator asks:

> **Which object is a natural candidate to create another object?**

Useful clues include whether an object:

📦 contains another object

💎 owns it

📝 records it

🔗 closely uses it

or has the information required to initialize it.

Crescendo provides particularly clear ownership relationships.

# **💎 Composition and Creator fit together**

Remember composition:

🏫 MusicSchool ◆── 🎼 Course

The MusicSchool owns the Course's lifecycle.

So it makes conceptual sense that:

🏫 **MusicSchool creates Course**

rather than:

🖥️ Main creates Course

or:

👤 some unrelated object creates Course.

Composition asks:

> **Who owns this object?**

Creator asks:

> **Who should create it?**

Those questions often point toward the same object.

# **🎓 Student and TuitionFee**

Crescendo gives us another strong example:

🎓 Student ◆── 💰 TuitionFee

The specification says each TuitionFee belongs to exactly one Student and cannot exist without that Student. crescendo\_music\_school

Therefore the supplied design makes Student responsible for adding/creating its TuitionFee.

Conceptually:

🎓 Student

↓

⚙️ add tuition fee

↓

🏗️ TuitionFee created

↓

🎓 Student ◆── 💰 TuitionFee

# **🔒 Creation control protects invariants**

This connects with almost everything we've learned.

Suppose the domain says:

> A Student may have at most one TuitionFee for a particular term. crescendo\_music\_school

If anybody can independently create and attach TuitionFees however they like, protecting that rule becomes harder.

But if Student controls the operation:

🎓 Student receives request

↓

🔎 checks existing fees

↓

📏 validates rule

↓

🏗️ creates TuitionFee

↓

🔗 establishes ownership

then Student has a natural place to protect its invariant.

# **🖥️ Why shouldn't `Main` create everything?**

Remember that Crescendo's `Main` is the CLI boundary.

Its job is primarily:

⌨️ receive user interaction

🖥️ display information

and invoke the domain.

If `Main` itself starts deciding:

> "I'll construct this Course, connect this Teacher, update that collection and enforce this business rule..."

then domain knowledge begins leaking into the UI.

Instead, conceptually:

🖥️ Main says:

> "School, create a course."

Then:

🏫 MusicSchool knows how that domain operation should happen.

This supports the separation of concerns we discussed in Step 18\.

# **⚙️ A creation method can express domain meaning**

Compare these ideas:

🏗️ generic constructor call

versus:

🏫 `registerStudent(...)`

or:

🏫 `createCourse(...)`

or:

🎓 `addTuitionFee(...)`

The latter names describe **domain actions**.

They're telling us:

> What is happening in the problem domain?

rather than merely:

> Allocate another object.

# **🧠 This is another responsibility question**

Notice how often A2 returns to the same theme:

> **Who should be responsible for what?**

Who creates Course?

🏫 MusicSchool.

Who creates TuitionFee?

🎓 Student.

Why?

Because the relationships, ownership and domain information make those objects natural candidates.

That's GRASP thinking.

# **🔎 Creator is also useful in reverse engineering**

When studying existing code, we can ask:

> **Where is this object actually created?**

Suppose we discover:

🖥️ UI creates domain object A

then manually connects it to B

then manually changes C.

That might be worth investigating.

Perhaps creation responsibility is scattered.

Perhaps an object with stronger ownership or information would be a better Creator.

But remember our Part 2 rule:

First:

🔎 **document what the code currently does.**

Later:

🧩 **evaluate whether the responsibility is well placed.**

# **🔑 The important distinction**

Remember these three concepts separately:

🏗️ **Constructor**

> How does a new object become properly initialized?

🏭 **GRASP Creator**

> Which object should be responsible for causing that object to be created?

💎 **Composition**

> Which object strongly owns the created object's lifecycle?

They are different concepts, but they often work together.

And Crescendo deliberately gives us examples where they meet:

🏫 **MusicSchool ◆── Course**

🎓 **Student ◆── TuitionFee**

