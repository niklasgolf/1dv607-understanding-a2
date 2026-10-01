# **🪜 Step 30 — Understand the Part 3 Reflection**

## **📜 FROM THE GITLAB MATERIAL**

After we've compared the AI-generated material with:

👨‍💻 our own Part 2 analysis

and

💻 the actual PawsHome implementation,

Part 3 ends with a **reflection**.

The purpose is not simply to report whether the AI was "good" or "bad". We should reflect on what happened when GenAI was used for reverse engineering and what we learned from verifying its output. genai\_log\_template

# **💡 BACKGROUND & EXPLANATION — Reflection is different from analysis**

During verification we might write something very concrete:

> The AI identified relationship X, but inspection of the implementation showed Y.

That's **analysis**.

Reflection goes one level higher:

> What did this experience teach us about using AI for software engineering?

So we move from:

🔎 **What happened?**

to:

🧠 **What did we learn from what happened?**

# **🤖 Where was the AI useful?**

One thing we can reflect on is where AI actually helped.

For example, after doing the real assignment work, we might discover that AI was useful for:

🔎 quickly identifying candidate relationships

📐 producing an initial UML interpretation

🧩 suggesting possible GRASP problems

👀 drawing attention to something we had overlooked

But these are only possibilities.

Our actual reflection should describe what **really happened in our own Part 3 session**.

# **⚠️ Where was the AI unreliable?**

The opposite question matters just as much.

Perhaps the AI:

👻 invented something that wasn't in the code

🔢 misunderstood a multiplicity

➡️ assumed an association was bidirectional

⏱️ put method calls in the wrong order

🧩 confidently claimed a GRASP violation without sufficient evidence

Again, we shouldn't decide beforehand that AI will make these mistakes.

We document whatever we actually observe.

# **👨‍💻 What about our own mistakes?**

This is important too.

Suppose the AI notices something that we missed in Part 2\.

We investigate the code and discover:

🤖 AI \= correct

👨‍💻 our Part 2 analysis \= incorrect

That's not something to hide.

It's actually excellent material for reflection.

We can ask:

> Why did we miss it?

> What did the AI notice?

> Why was verification still necessary?

Remember that Part 2 remains frozen once Part 3 starts, so discoveries like this are documented in Part 3 rather than silently repaired in the original Part 2 work. genai\_log\_template

# **🔍 The importance of verification**

Perhaps the biggest theme is:

> **AI output is not evidence by itself.**

If AI says:

> "This association has multiplicity 1..\*"

we still need to inspect the implementation.

The useful workflow is:

🤖 **AI suggests**

⬇️

👨‍💻 **Human investigates**

⬇️

💻 **Code provides evidence**

⬇️

🧠 **Human concludes**

That is much more sophisticated than either blindly trusting AI or automatically rejecting it.

# **🪞 Reflect on the human–AI comparison**

Another interesting question is:

> Did humans and AI make different kinds of mistakes?

Perhaps humans understood the overall domain better but overlooked a method call.

Perhaps AI found structural details quickly but inferred things that weren't actually present.

Perhaps both analyses were very similar.

Any of these could be meaningful — provided they're based on what actually happened.

# **🎯 What makes a strong reflection?**

A weak reflection would be something generic like:

> "AI was useful but sometimes makes mistakes, so you should check its answers."

That's true, but it tells us almost nothing about **our experiment**.

A stronger reflection connects directly to our results:

**What the AI did**

↓

**What we did**

↓

**What the source code showed**

↓

**What we learned from the difference**

The more specific the connection to our actual PawsHome analysis, the more meaningful the reflection becomes.

# **🧠 Part 3 in one sentence**

We can now summarize the purpose of Part 3 as:

> **Use AI as a software-analysis tool, but critically verify its output against the real implementation and reflect on where human and AI analysis succeeded or failed.**

So Part 3 isn't really testing whether we can get ChatGPT to draw UML.

It's testing whether we can remain the **software engineer responsible for judging the result**.

