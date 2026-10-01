# **🪜 Step 61 — Verify the AI Properly in Part 3**

Part 3 changes your role again.

In Part 2 you were:

🕵️ **the reverse engineer**

In Part 3, the AI becomes another reverse engineer, and **you become its reviewer**.

The key idea is:

> **Your job is not to decide whether the AI answer sounds intelligent. Your job is to check whether its claims are actually supported by the source code.**

## **📜 FROM THE GITLAB ASSIGNMENT**

Before Part 3 begins, your own Part 2 analysis and diagrams must already be completed. Once Part 3 starts, those Part 2 artifacts must remain unchanged.

If the AI later reveals something you got wrong, you document that discovery in Part 3 rather than silently correcting your original Part 2 work. genai\_log\_template

This is important because the assignment is effectively comparing:

👤 **Your independent analysis**

with:

🤖 **The AI's analysis**

against:

💻 **The actual implementation**.

# **1️⃣ First, give the AI the required material**

## **📜 FROM THE GITLAB ASSIGNMENT**

For Part 3, the AI is given:

📜 the PawsHome specification

and:

💻 the PawsHome Java source.

It is asked to produce three main things:

📐 a current-system class diagram

🎬 a sequence diagram for **“Staff approves an application”**

🧠 a list of mismatches and possible GRASP/design problems. assignment\_2

Notice something important:

The AI isn't being asked to invent an ideal system.

It's also performing:

🔎 **reverse engineering**.

# **2️⃣ Preserve what the AI actually said**

You must not clean up the AI's answers before evaluating them.

## **📜 FROM THE GITLAB MATERIAL**

Every prompt and every answer must be saved **word for word** in:

📁 `assignment_2/docs/genai_raw/`

using files such as:

📄 `01_prompt.md`

📄 `01_answer.md`

and so on.

You should not rewrite, summarize or polish those raw records. genai\_log\_template

Why?

Because otherwise you might accidentally make the AI look:

✅ more accurate

or:

❌ less accurate

than it really was.

The raw material is the evidence.

# **3️⃣ Preserve the AI's diagrams too**

The same principle applies to diagrams.

Suppose the AI produces a class diagram and you immediately notice:

> “Oops, that multiplicity is wrong.”

You do **not** quietly fix it before evaluation.

The assignment wants you to evaluate:

🤖 what the AI actually produced.

So preserve it first.

Then criticize it.

# **4️⃣ Now verify the AI class diagram**

This is where your Step 58 skills become useful.

Don't simply stare at the AI diagram and ask:

> “Does this look plausible?”

Go category by category.

Check:

📦 **Classes**  
Do these classes actually exist?

📝 **Attributes**  
Does the source really contain what the AI claims?

⚙️ **Operations**  
Are these methods actually present?

🔗 **Associations**  
Do the corresponding object relationships exist?

🔢 **Multiplicities**  
Does the implementation actually support/enforce what the AI drew?

🧭 **Navigability**  
Can the objects actually reach one another in the direction shown?

➡️ **Dependencies**  
Did the AI correctly identify temporary usage relationships?

The Part 3 template explicitly asks for this kind of detailed verification. genai\_log\_template

# **🚨 Watch for AI invention**

Suppose the AI draws:

📦 `AdoptionManager`

It sounds perfectly reasonable.

It even sounds like a class that **could** belong in PawsHome.

But then you search the Java source and discover:

❌ there is no `AdoptionManager`.

Then the correct conclusion isn't:

> “Well, it was a sensible suggestion.”

For a **current-system diagram**, the AI has invented something.

That's a factual reverse-engineering error.

# **🚨 Watch for AI omission too**

The opposite can happen.

Suppose an important class clearly exists in the Java implementation.

But the AI leaves it out.

That's:

❌ an omission.

So AI errors can include:

➕ invented information

➖ missing information

🔄 incorrect information.

# **5️⃣ Verify multiplicities particularly carefully**

AI can easily produce a diagram that **looks** reasonable.

For example, it might see a collection and conclude:

> 0..\*

But perhaps the code actually enforces:

> 0..2

Or perhaps the specification says:

> maximum 2

but the implementation fails to enforce it.

Then the AI may accidentally draw the:

📜 **required design**

instead of the:

💻 **current implementation**.

That's exactly the distinction you've spent many steps learning.

# **6️⃣ Verify the AI sequence diagram step by step**

Now take:

🎬 **Staff approves an application**

Don't evaluate the entire diagram with:

> “Looks about right.”

Instead trace it against the source code.

For each important message ask:

🔎 Does this method call actually happen?

🔎 Is the correct object receiving it?

🔎 Does it happen in this order?

🔎 Did the AI omit an important call?

🔎 Did the AI invent a call?

🔎 Did it move logic to an object that doesn't actually perform it?

# **🎬 Think of the source code as the film**

Imagine the Java execution is the actual movie.

🎥 **SOURCE CODE**

The sequence diagram is someone's description of the movie.

The AI might say:

> Scene 1 → Scene 2 → Scene 3 → Scene 4\.

But you watch the actual movie and discover:

> Scene 1 → Scene 3 → Scene 2\.

Then the AI's sequence is wrong.

Even if its version would have been a better design.

Again:

> **Part 3 verification is about accuracy, not whether the AI's invented version seems sensible.**

# **7️⃣ Classify the AI's problem claims**

The assignment gives you three extremely useful verdicts:

### **✅ Confirmed**

The AI claim is supported by the implementation.

### **❌ Rejected**

The implementation contradicts the AI claim.

### **🟡 Partly correct**

There is some truth to the claim, but it is incomplete, exaggerated or inaccurate in some important way. genai\_log\_template

# **🧠 “Partly correct” is especially valuable**

Suppose AI says:

> “Class X contains all validation.”

You investigate and discover:

Class X contains **some** validation.

But another important class also performs validation.

Then saying simply:

❌ Rejected

might lose useful nuance.

A better verdict could be:

🟡 **Partly correct**

because the general observation had some basis, but the AI overstated it.

That's more careful analysis.

# **8️⃣ Your own Part 2 isn't automatically correct either**

This is one of the most interesting parts of the assignment.

Suppose:

👤 Your Part 2 says A.

🤖 AI says B.

What should you do?

Not:

> “I'm the human, so A wins.”

And not:

> “AI probably knows better, so B wins.”

Instead:

💻 **Go back to the Java source.**

The implementation is the evidence for what the current system actually does.

# **🔬 You now have three things to compare**

For a particular relationship, perhaps:

### **👤 YOUR PART 2**

You drew:

A → B

### **🤖 AI**

AI drew:

A ↔ B

### **💻 JAVA SOURCE**

You inspect the implementation.

Suppose the source proves:

A ↔ B

Then:

🤖 AI was correct.

👤 your original analysis was wrong.

And that's okay.

The assignment specifically allows you to discuss this discovery in Part 3\.

What you must **not** do is secretly return to Part 2 and change history.

# **🧪 That's why Part 2 gets frozen**

Now the purpose becomes clearer.

If you were allowed to continually modify Part 2 after seeing the AI answer, the comparison would become meaningless.

You could make:

👤 human analysis

silently become identical to:

🤖 AI analysis.

By freezing Part 2 first, the course can examine:

> What did you independently discover?

versus:

> What did AI discover?

versus:

> What does the code actually support?

# **9️⃣ You must critically challenge the AI**

## **📜 FROM THE GITLAB MATERIAL**

The GenAI log requires at least one follow-up where you critically probe, challenge, ask the AI to justify something, or ask it to correct something. genai\_log\_template

This is important.

You're not supposed to interact like:

👤 “Give me answer.”

🤖 “Here.”

👤 “Thanks.”

Instead, you demonstrate critical use.

Conceptually:

🤖 AI makes claim X.

↓

👤 You inspect the code.

↓

🔎 Something looks suspicious.

↓

👤 You challenge the AI:

> What evidence in the implementation supports X?

↓

🤖 AI responds.

↓

👤 You verify again.

# **🧠 The AI is therefore an object of study**

This is a useful way to understand Part 3\.

You're not primarily being tested on:

> **Can AI do my homework?**

You're studying:

> **How reliable is GenAI when reverse-engineering software, and how can a developer verify its output?**

That's a much more interesting question.

# **📊 Your verification mindset**

For every important AI claim:

🤖 **AI CLAIM**

↓

💻 **FIND SOURCE-CODE EVIDENCE**

↓

⚖️ **COMPARE**

↓

choose:

✅ Confirmed

❌ Rejected

🟡 Partly correct

↓

📝 **EXPLAIN WHY**

# **🚨 Never use confidence as evidence**

AI may write:

> “Clearly, this association has multiplicity 1..\*.”

That word:

> **clearly**

means nothing.

It may sound certain and still be wrong.

Likewise, if AI says:

> “It appears that…”

that uncertainty doesn't make it wrong.

You evaluate:

💻 **evidence**

not:

🎭 **tone**.

# **⭐ The sentence to remember**

> **In Part 3, the AI produces claims; you turn those claims into hypotheses and test them against the actual source code.**

Or even shorter:

> 🤖 **AI says** → 🔎 **You check** → 💻 **Code decides**

That is the heart of Part 3\.

