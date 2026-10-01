# **🪜 Step 49 — Understand Information Expert More Deeply**

We introduced **Information Expert** earlier, but it is important enough to understand properly because it gives us a practical way to decide:

> **Which class should contain this method?**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 asks you to examine the existing PawsHome implementation for design/GRASP problems and justify possible improvements using evidence from the Java implementation. assignment\_2

The exact method below is **background theory** for helping you reason about those responsibilities. It is not a formula prescribed by the assignment.

# **💡 The basic Information Expert question**

Suppose some work needs to be done.

Ask:

> **Which object already has most of the information required to perform this work?**

That object is often a good candidate for the responsibility.

This is the essence of **GRASP Information Expert**.

# **📚 A simple fictional example**

Our Library has:

👤 `Member`

and Member knows:

📚 which Books they currently have borrowed.

Now we need to answer:

> **Can this Member borrow another Book?**

Who already has the important information?

The Member.

It knows how many Books it currently has.

So Member is a natural **Information Expert** for information concerning its own borrowing situation.

# **❌ A less object-oriented approach**

Imagine `LibraryManager` does this conceptually:

👨‍💼 Manager asks Member:

> Give me all your borrowed Books.

Member gives the data.

Then Manager:

🔢 counts the Books

📏 compares the number with the Member borrowing limit

🤔 decides whether Member can borrow

The interesting question becomes:

> Why is Manager doing work based almost entirely on information belonging to Member?

# **✅ Information Expert suggests another possibility**

Instead:

👨‍💼 Manager asks:

> Member, can you borrow another Book?

Then:

👤 Member examines its own information.

This places:

📦 data

and

⚙️ behaviour using that data

closer together.

# **🧠 This is a central OOP idea**

Weak object-oriented design can accidentally produce objects that are mostly:

> **bags of data**

Other classes constantly ask them for information and then make all the decisions elsewhere.

For example:

👤 Member gives data

📕 Book gives data

📄 Loan gives data

and then:

🐙 `LibraryManager`

does everything.

Technically, we have classes.

But conceptually, much of the program may still behave like one big procedure operating on passive data.

# **👨‍🔬 Information Expert helps distribute intelligence**

Instead of:

🐙 Manager knows everything

we can get:

👤 Member knows Member-related behaviour

📕 Book knows Book-related behaviour

📄 Loan knows Loan-related behaviour

🎮 coordinating object coordinates them

Now the objects aren't merely storing information.

They have meaningful **responsibilities**.

# **🎼 Crescendo gives us a nice example**

Consider:

🎼 `Course`

The supplied class diagram gives Course information such as:

* capacity  
* enrolled students

and an operation:

**`isFull()`**

That makes conceptual sense.

Why?

Because Course already has the information required to determine whether it is full.

So we can reason:

> **Course is an Information Expert regarding whether Course is full.**

That's our interpretation of the supplied design, rather than an explicit sentence in the specification saying “this is Information Expert.”

# **🔢 Think about the alternative**

Imagine `Main` did this:

🖥️ ask Course for capacity

↓

🖥️ ask Course for student list

↓

🖥️ count students

↓

🖥️ compare count with capacity

↓

🖥️ decide whether Course is full

Now `Main` needs to understand the internal logic of what “full” means.

But Course already owns the relevant information.

So:

🎼 `course.isFull()`

expresses a meaningful domain question much better.

# **🚨 A useful warning sign: Feature Envy**

You previously asked about **feature envy**, and now we can connect it directly.

Suppose method X belongs to Class A, but throughout that method it constantly:

👀 asks B for information

👀 asks B for more information

👀 asks B for another value

and then:

🧮 performs calculations mainly about B.

That can be a warning sign that:

> **The behaviour may actually belong closer to B.**

In other words, method X seems more interested in B's features than its own class's features.

Hence the name:

**Feature Envy.**

# **🔎 A useful detective question**

When reading a method, ask:

> **Whose data is this method mostly working with?**

If the answer is:

> "Almost entirely another object's data..."

then investigate.

Don't automatically conclude it's wrong.

But investigate.

# **⚠️ Information Expert is not an absolute rule**

This is important.

Suppose Object A has some information and Object B has some other information.

A responsibility needs both.

There may not be one obvious Expert.

Other design concerns can matter too:

🔗 coupling

🎯 cohesion

🔒 encapsulation

🎮 coordination

🏭 creation responsibility

So Information Expert isn't:

> "Find the object with one relevant variable and always put the method there."

It's a **design principle for reasoning about responsibility**.

# **🧩 GRASP principles balance one another**

Imagine moving a method into `Member` would technically follow Information Expert...

but now Member becomes responsible for:

👤 membership

💰 accounting

📧 email

💾 database storage

🖥️ console formatting

📊 statistics

Then we have another problem:

🐙 **low cohesion**

So good OO design isn't about blindly obeying one principle.

It's about balancing responsibilities.

# **🔎 How to use Information Expert during reverse engineering**

When reading existing code, try this little process:

### **1️⃣ Find an important method**

⚙️ What does it do?

### **2️⃣ Identify the information it needs**

📦 Which data does it use?

### **3️⃣ Find who owns that information**

🧩 Which objects already know those things?

### **4️⃣ Compare that with where the method currently lives**

🏠 Is the responsibility placed naturally?

### **5️⃣ Look at the consequences**

Does its current location create:

🕸️ unnecessary coupling?

🐙 low cohesion?

📦 data-only objects?

🔓 excessive exposure through getters?

Only after that should we start making a design argument.

# **🧠 This connects directly to Step 41**

Remember our structure:

**Evidence → Problem → Principle → Improvement → Benefit**

For Information Expert, it might conceptually look like:

🔎 **Evidence**

Class A retrieves several pieces of information from B and performs behaviour entirely concerned with B.

↓

⚠️ **Problem**

A must understand details belonging to B.

↓

🧩 **Principle**

B appears to be the stronger **Information Expert**.

↓

✨ **Improvement**

Consider moving that responsibility closer to B.

↓

🎯 **Benefit**

B's information and behaviour stay together, while A needs less knowledge of B's internals.

# **⭐ One very useful question**

When you're unsure where a method belongs, start with:

> **“Who already knows what is needed to do this?”**

That single question will get you surprisingly far in object-oriented design.

