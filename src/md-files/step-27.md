# **🪜 Step 27 — Enter Part 3: GenAI-Assisted Reverse Engineering**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 3 is called:

**GenAI-Assisted Reverse Engineering**

Now the assignment deliberately asks us to use a **Generative AI tool** on the same PawsHome system we analyzed ourselves in Part 2\.

But there is an extremely important order:

**Part 2 must be completed first.**

Once Part 3 begins, the Part 2 diagrams and analysis must remain unchanged. If the AI later reveals that we made a mistake, we document that discovery in Part 3 rather than secretly correcting Part 2\. genai\_log\_template

## **💡 Why do it in this order?**

Because this is essentially an experiment.

First:

👨‍💻 **Humans analyze PawsHome independently**

Then:

🤖 **AI analyzes PawsHome**

Then:

🔬 **Humans evaluate the AI**

If we allowed AI to help construct our Part 2 answer first, we could no longer meaningfully compare:

**our analysis**

with:

**AI's analysis**.

# **🤖 What will we ask the AI to do?**

## **📜 FROM THE GITLAB ASSIGNMENT**

The AI receives:

📜 the PawsHome specification

and:

💻 the PawsHome Java source code.

It is then asked to produce three main things:

📐 a **current-system class diagram**

⏱️ a sequence diagram for **“Staff approves an application”**

🔍 a list of **mismatches and possible GRASP/design problems**. assignment\_2

## **💡 Notice something interesting**

The AI is performing essentially the same kind of reasoning we already performed manually.

So we can compare:

👨‍💻 **Our reverse engineering**

versus:

🤖 **AI reverse engineering**

versus:

💻 **the actual source code**

And the third one is crucial.

Neither we nor the AI automatically become the truth.

The **source code is the evidence**.

# **🔬 We are evaluating the AI**

This is perhaps the most important idea in Part 3\.

Our job is NOT:

> "Ask ChatGPT and submit whatever it says."

Our job is:

> "Ask the AI, then critically verify its claims against the actual implementation."

So the human remains responsible for the analysis.

# **📐 Verify the AI class diagram**

### **📜 FROM THE GITLAB MATERIAL**

We must compare the AI-generated class diagram with both:

💻 the actual Java implementation

and:

👨‍💻 our own Part 2 diagram.

We investigate things such as:

classes

attributes

operations

associations

multiplicities

navigability

dependencies. genai\_log\_template

## **🧠 We might discover several possibilities**

For some detail:

🤖 AI \= correct  
👨‍💻 We \= correct

Easy.

But perhaps:

🤖 AI \= wrong  
👨‍💻 We \= correct

Or:

🤖 AI \= correct  
👨‍💻 We \= wrong

Or even:

🤖 AI \= wrong  
👨‍💻 We \= wrong

The actual code decides the question.

# **⏱️ Verify the AI sequence diagram**

We do the same thing with:

**Staff approves an application**

We compare the AI's sequence against the actual implementation.

The assignment specifically wants us to identify things such as:

✅ correct interactions

❌ missing interactions

👻 invented interactions

🔀 interactions in the wrong order. genai\_log\_template

# **🔍 Verify the AI's problem claims**

Suppose the AI says:

> "This is a GRASP violation."

We cannot simply accept that statement.

We investigate the code and classify the claim.

The template uses verdicts such as:

✅ **Confirmed**

❌ **Rejected**

🟡 **Partly correct**

And we explain the evidence. genai\_log\_template

# **🧠 This changes our relationship with AI**

Part 3 is teaching something quite modern:

AI can be useful for software engineering, but its output must be treated as something to **inspect and verify**, not as automatically correct.

The workflow becomes:

🤖 AI makes claim

⬇️

🧐 We investigate

⬇️

💻 Check actual source code

⬇️

⚖️ Make evidence-based judgment

That is much more valuable than simply learning how to write a prompt.

# **🔄 The whole A2 now forms a beautiful cycle**

### **PART 1**

📐 **Design**

⬇️

💻 **Implementation**

### **PART 2**

💻 **Implementation**

⬇️

📐 **Design**

### **PART 3**

🤖 **AI analyzes implementation**

⬇️

👨‍💻 **We critically evaluate AI**

⬇️

💻 **Actual code provides the evidence**

So A2 isn't merely about UML or Java.

It's really about learning to move confidently between:

**requirements ↔ design ↔ code ↔ analysis**

and then learning how AI fits into that process.

---

