# **🪜 Step 20 — Enter Part 2: PawsHome and Reverse Engineering**

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 2 is called:

**From Implementation to Design**

Now the direction is reversed.

In Part 1:

📐 Design → 💻 Implementation

In Part 2:

💻 Implementation → 📐 Design

We are given an existing Java prototype called **PawsHome**, an animal-adoption system. Our job is to study the existing code, reconstruct its current design, compare it with the specification, identify problems, and recommend improvements. assignment\_2

## **🐕 What is PawsHome?**

### **📜 FROM THE GITLAB MATERIAL**

PawsHome is a small animal shelter system that keeps track of:

🐕 Animals

👤 Adopters

📋 Adoption applications

🙋 Volunteers

📅 Visits or meet-and-greets

The system has three main actors:

**Adopter**

**Shelter staff**

**Volunteer** pawshome\_shelter

## **💡 BACKGROUND — What is reverse engineering?**

Normally, software development might look like:

**Requirements → Design → Code**

Reverse engineering travels in the opposite direction:

**Code → Discover the Design**

We inspect an existing program and ask:

> What classes actually exist?

> What information do they store?

> Which objects reference each other?

> What methods call other methods?

> What multiplicities does the implementation actually enforce?

> Where are responsibilities located?

We are reconstructing the design from evidence in the code.

That's why Part 2 is a little like being a software detective. 🔎

## **🚨 But we also have the specification**

This makes PawsHome particularly interesting.

We have:

📜 **what PawsHome is supposed to do**

and:

💻 **what the existing PawsHome implementation actually does**

These might not agree.

And discovering those differences is part of the assignment.

## **🐾 Example of the detective mindset**

Suppose the specification says:

> An Adopter may have a maximum of two pending applications.

We should **not immediately assume the code enforces that**.

Instead, when doing the actual analysis, we investigate the implementation:

🔎 Where are applications stored?

🔎 Where is an application created?

🔎 Is the number of pending applications checked?

🔎 What happens if someone tries to create a third?

Only then can we say what the **current implementation** actually does.

The PawsHome specification indeed contains the maximum-two-pending-applications requirement. pawshome\_shelter

## **⚠️ Very important: don't fix PawsHome yet**

### **📜 FROM THE GITLAB ASSIGNMENT**

The assignment specifically tells us to study the supplied implementation and **not modify or fix it** during this analysis. assignment\_2

Why?

Because the imperfections are part of what we're supposed to study.

If we immediately repaired the program, we would destroy some of the evidence we're supposed to analyze.

## **🧠 Part 2 therefore has two different worlds**

Keep these mentally separated:

### **💻 CURRENT PAWSHOME**

What does the supplied implementation **actually contain and enforce?**

This produces things such as:

📐 current class diagram

👤 current use-case diagram

⏱️ current sequence diagrams

### **✨ IMPROVED PAWSHOME**

After identifying problems, we can ask:

> What should the design look like instead?

That leads to recommendations and improved diagrams.

## **🔑 The golden rule of Part 2**

We can reduce the whole mindset to one sentence:

> **First describe reality. Then criticize reality. Then propose improvements.**

Not:

> "Draw what PawsHome should have been."

That distinction will prevent a lot of confusion later.

