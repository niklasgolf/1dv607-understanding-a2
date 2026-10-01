# **🪜 Step 22 — Understand Gap Analysis**

## **📜 FROM THE GITLAB ASSIGNMENT**

One of the central jobs in PawsHome is to compare:

📜 **the specification**

with:

💻 **the existing implementation**

The assignment asks us to identify missing or incomplete use cases, incorrect relationships or multiplicities, missing rules, problems with validation/error handling, misplaced domain logic, and GRASP/design problems. We must support our findings with evidence from the existing Java implementation. assignment\_2

This comparison is essentially a **gap analysis**.

## **💡 BACKGROUND & EXPLANATION — What is a gap?**

A gap is simply a difference between:

> **What should exist**

and:

> **What actually exists**

So our basic formula becomes:

📜 **SPECIFICATION**

versus

💻 **IMPLEMENTATION**

equals

🔍 **GAP ANALYSIS**

## **🐕 A simple imaginary example**

Suppose the specification says:

> A Volunteer may supervise a maximum of three Visits per day.

Now imagine we inspect the code and discover that it allows unlimited Visits.

We would have:

📜 **Required:** maximum 3 Visits per day

💻 **Implemented:** no maximum enforced

⚠️ **Gap:** constraint is missing from the implementation

Notice that we haven't fixed anything yet.

We've simply **identified and documented the difference**.

## **🔎 How to investigate systematically**

A useful way to think about the work is:

**Requirement → Find relevant code → Observe behaviour → Compare → Record finding**

For example:

📜 UC4 says an Adopter can apply for an Animal.

⬇️

🔎 Find where Applications are created.

⬇️

💻 Follow what the existing code actually does.

⬇️

📏 Check each UC4 rule against it.

⬇️

📝 Record what matches and what doesn't.

This prevents us from relying on guesses.

## **🚨 Don't let the specification contaminate the current design**

This is one of the easiest mistakes to make.

Imagine the specification says:

*Adopter 1 → 0.. Applications*\*

You might immediately put that multiplicity into the current class diagram.

But that's only correct if the **implementation actually represents/enforces that relationship in that way**.

For the current-system diagram, the code is the evidence.

So:

📜 Specification tells us what **should** exist.

💻 Code tells us what **currently** exists.

We must keep those two views separate. assignment\_2

## **🧠 Three stages — don't mix them**

This is a very useful mental model for Part 2:

### **🔎 Stage 1 — DESCRIBE**

> What does the existing PawsHome code actually do?

No criticism yet.

Just reconstruct reality.

### **⚖️ Stage 2 — COMPARE**

> How does that reality differ from the specification?

Now we identify gaps.

### **🛠️ Stage 3 — IMPROVE**

> How could the design be improved?

Only now do we propose a better design.

So:

**DESCRIBE → COMPARE → IMPROVE**

That's essentially the Part 2 workflow.

## **🎯 What kinds of gaps are we looking for?**

### **📜 FROM THE GITLAB ASSIGNMENT**

The assignment specifically directs attention to areas including:

👤 **Use cases** — missing or incomplete functionality

🔗 **Relationships** — associations that differ from the specification

🔢 **Multiplicities** — whether the implementation actually enforces the expected limits

📏 **Domain rules** — required rules that may be absent or incorrect

⚠️ **Error handling and validation**

📦 **Separation of domain logic**

🧩 **GRASP/design principles** — such as poor coupling, low cohesion or misplaced responsibilities. assignment\_2

## **💡 Evidence is important**

We shouldn't write:

> "I think PawsHome handles applications badly."

Instead, the assignment wants findings grounded in the actual implementation.

Conceptually:

> **Claim → Evidence → Explanation**

For example:

**Claim:** A particular requirement is not enforced.

**Evidence:** We identify the relevant classes/methods and observe that the required check is absent.

**Explanation:** Therefore the implementation permits behaviour that the specification prohibits.

That's much stronger software analysis than simply giving an opinion.

## **🧠 The detective mindset**

For Part 2, we should constantly ask:

🔎 **Where in the code is the evidence for this?**

That one question will help with:

📐 class diagrams

👤 use-case diagrams

⏱️ sequence diagrams

📏 gap analysis

🧩 GRASP analysis

🛠️ improvement recommendations

Part 2 is therefore not mainly about writing new code.

It is about learning to **read existing software as evidence**.

