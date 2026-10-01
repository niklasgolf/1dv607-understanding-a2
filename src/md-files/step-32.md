# **🪜 Step 32 — Understand the Git/GitLab Workflow for A2**

## **📜 FROM THE GITLAB MATERIAL**

You and Edvin continue working in the **same GitLab group project** used for the assignments.

For Assignment 2, the required branch is:

**`assignment-2`**

The workflow instructions are clear that you should **not work directly on `main`**. All Assignment 2 work is done on the assignment branch. workflow

# **🌳 Think of `main` as the approved version**

## **💡 BACKGROUND & EXPLANATION**

A simple mental picture is:

🌳 **main**  
The stable/approved history of the project.

Then we create:

🌿 **assignment-2**  
The branch where you and Edvin develop Assignment 2\.

So while A2 is underway:

**main**

↳ **assignment-2**

All the new A2 work happens on that branch.

# **1️⃣ Start from an updated `main`**

### **📜 FROM THE GITLAB MATERIAL**

The workflow says Assignment 2 should be started after Assignment 1 has been merged.

The sequence is:

**switch to `main`**

↓

**pull the newest `main`**

↓

**create `assignment-2`**

↓

**push `assignment-2` to GitLab**

The first group member creates and pushes the branch. The second group member then fetches it and switches to the existing `assignment-2` branch. workflow

# **👥 You and Edvin share the same branch**

This is worth emphasizing.

You do **not** need:

🌿 `niklas-assignment-2`

and:

🌿 `edvin-assignment-2`

The supplied workflow describes both group members working on:

🌿 **`assignment-2`**

So Git becomes part of your collaboration.

# **🔄 2️⃣ The normal daily cycle**

### **📜 FROM THE GITLAB MATERIAL**

The workflow recommends a repeating pattern of:

⬇️ **Pull**

✏️ **Edit**

➕

📦 **Commit**

⬆️ **Push**

with regular, meaningful commits from both group members. workflow

## **💡 Why pull first?**

Imagine Edvin worked last night and pushed his changes.

You begin this morning with the version currently on your laptop.

If you immediately start editing, you may be working from an older version.

So:

⬇️ **Pull first**

means:

> "Give me the latest work from GitLab before I begin."

# **📦 3️⃣ Make meaningful commits**

A commit is essentially a saved checkpoint in the project's history.

A useful commit represents a meaningful piece of progress.

Conceptually:

📦 Add initial PawsHome diagram

📦 Document multiplicity analysis

📦 Add Crescendo domain classes

rather than one enormous commit containing several days of unrelated work.

The course material explicitly asks for **regular commits with clear messages**, and both group members should contribute commits. workflow

# **☁️ 4️⃣ Push your work**

A commit initially exists in your local Git repository.

**Push** sends those commits to GitLab.

So:

💻 Your computer  
⬆️ `push`  
☁️ GitLab

Then Edvin can obtain those changes.

# **⚠️ Working together means conflicts are possible**

Suppose both of you edit exactly the same section of the same file.

Niklas changes:

📝 paragraph X

while Edvin independently changes:

📝 paragraph X

Git may not know which version should survive.

That's a **merge conflict**.

This is one reason the simple habit:

⬇️ pull before starting

📦 make sensible commits

⬆️ push regularly

is valuable.

It reduces the chance that you both spend hours working from different versions.

# **📁 5️⃣ Keep A2 inside the correct directory**

### **📜 FROM THE GITLAB ASSIGNMENT**

Assignment 2 work belongs under:

**`assignment_2/`**

Inside that, we'll eventually have areas for things such as:

💻 source

📐 diagrams

📝 documentation

The exact deliverables we've already studied all fit underneath this Assignment 2 structure. assignment\_2

# **🚀 6️⃣ Submission uses a Merge Request**

When the assignment is ready, we do **not** simply merge it ourselves.

### **📜 FROM THE GITLAB MATERIAL**

We create a Merge Request:

🌿 **`assignment-2`**

→

🌳 **`main`**

The instructions explicitly say:

> **Do not merge it yourselves.**

The Merge Request is how the completed assignment is presented for review/submission. workflow

# **🧠 The entire Git workflow in one picture**

🌳 **main**

↓

🌿 create **assignment-2**

↓

👨‍💻 Niklas \+ 👨‍💻 Edvin work on the same branch

↓

⬇️ Pull

↓

✏️ Work

↓

📦 Commit

↓

⬆️ Push

↓

🔄 Repeat throughout A2

↓

✅ Assignment finished

↓

🔀 Create Merge Request:

**assignment-2 → main**

↓

🛑 **Do not merge it yourselves**

# **🎯 The important idea**

Git isn't an extra assignment sitting beside A2.

It is the mechanism that records **how you and Edvin developed A2 together**.

Your repository history should gradually tell the story of the assignment rather than suddenly receiving the entire finished project in one giant commit.

