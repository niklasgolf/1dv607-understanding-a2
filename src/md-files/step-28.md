# **🪜 Step 28 — Understand the Part 3 AI Log**

## **📜 FROM THE GITLAB MATERIAL**

Part 3 doesn't only require us to show the final AI-generated diagrams and analysis.

We must preserve a **complete record of our interaction with the AI**.

The supplied `genai_log_template.md` says that **every prompt and every AI answer must be saved word-for-word**.

The suggested structure is:

📁 `assignment_2/docs/genai_raw/`

with files such as:

📄 `01_prompt.md`

📄 `01_answer.md`

📄 `02_prompt.md`

📄 `02_answer.md`

…and so on.

We must **not rewrite, summarize or clean up** those original prompts and answers. genai\_log\_template

# **💡 Why keep the raw conversation?**

Think of this as preserving the evidence from an experiment.

If our final report says:

> "The AI incorrectly identified this multiplicity."

the teacher should be able to see:

🤖 exactly what AI we used

📝 exactly what we asked

💬 exactly what the AI answered

🔎 exactly how we later evaluated that answer

So there are really two layers:

### **🗃️ RAW MATERIAL**

What actually happened in the AI conversation.

### **🔬 ANALYSIS**

What we later concluded about the AI's performance.

# **🚫 Don't repair the AI's answer**

This is especially important for diagrams.

### **📜 FROM THE GITLAB MATERIAL**

If the AI gives us a text-based diagram, we preserve its original source in the raw response and render the diagram **as the AI gave it**.

We should not quietly correct mistakes before evaluating it. genai\_log\_template

Why?

Because imagine the AI incorrectly writes:

**Animal 1 — 1 Application**

and we silently change it to:

*Animal 1 — 0.. Applications*\*

Then later we claim:

> "The AI produced a good diagram."

But that's no longer really the AI's diagram.

We've corrected the evidence.

# **🧐 At least one critical follow-up is required**

### **📜 FROM THE GITLAB MATERIAL**

The instructions require **at least one follow-up prompt** that critically probes the AI's answer.

It should challenge, question, request justification or ask the AI to reconsider/correct something. genai\_log\_template

## **💡 What does "critical" mean here?**

It doesn't mean being rude to the AI. 😄

It means **not passively accepting the first answer**.

Conceptually, a critical follow-up could ask:

> What evidence in the supplied source code supports that multiplicity?

or:

> Recheck that relationship against the actual implementation. Are you sure the association is bidirectional?

or:

> You identified this as a GRASP violation. Which specific classes and responsibilities support that conclusion?

The point is:

🤖 AI makes a claim

⬇️

🧐 Human questions it

⬇️

🤖 AI must justify or reconsider

That interaction itself becomes part of the material we evaluate.

# **📋 The main Part 3 document**

### **📜 FROM THE GITLAB MATERIAL**

The supplied template is copied to:

**`assignment_2/docs/genai_part.md`**

It records information such as:

🤖 AI product/tool

🧠 model/version

📅 date/session information

👥 group members

and then contains our evaluation of the AI's results. genai\_log\_template

# **📐 AI-generated diagrams**

Part 3 also requires two AI-generated diagram files:

📐 **`genai_class_diagram.png`**

⏱️ **`genai_approve_sequence.png`**

These represent the AI's reconstruction of PawsHome and are then compared with:

👨‍💻 our Part 2 work

and, most importantly:

💻 the actual implementation.

# **🔒 Why Part 2 becomes frozen**

This now makes the earlier rule easier to understand.

Once we begin Part 3:

🔒 **Part 2 stays unchanged.**

Suppose our Part 2 diagram says:

**A → B**

Then the AI says:

**A → C**

We investigate the code and discover:

😬 the AI was right.

We must **not quietly go back and change Part 2**.

Instead, Part 3 becomes interesting:

> "Our original Part 2 analysis was incorrect here. The AI identified C, and inspection of the source code confirms that C is correct."

That is actually valuable evidence about the usefulness of AI.

# **🧠 So Part 3 is not an AI competition**

The goal isn't:

> **Human good, AI bad.**

Nor:

> **AI good, human bad.**

The interesting question is:

> **Where was each analysis correct or incorrect, and what does the source code actually prove?**

Sometimes we may catch the AI.

Sometimes the AI may catch us.

Sometimes both may miss something.

That's why preserving the original work matters.

## **🔑 The Part 3 evidence chain**

Remember this:

**RAW AI PROMPT**

⬇️

**RAW AI ANSWER**

⬇️

**AI DIAGRAM / CLAIM**

⬇️

🔎 **CHECK AGAINST CODE**

⬇️

⚖️ **VERDICT**

⬇️

📝 **REFLECTION**

That is the heart of the Part 3 methodology.

