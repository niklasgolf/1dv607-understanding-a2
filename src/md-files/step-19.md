# **🪜 Step 19 — Understand the Complete Part 1 Workflow**

Now we can zoom out. We have learned the individual concepts; let's see how they fit together into the actual **Part 1 journey**.

## **📜 FROM THE GITLAB ASSIGNMENT**

Part 1 is called:

**From Design to Implementation**

The basic direction is:

📜 Crescendo specification  
＋  
📐 supplied UML diagrams  
⬇️  
💻 working implementation  
＋  
🖥️ CLI/demo  
＋  
📝 documentation

The assignment evaluates whether the implementation accurately represents the supplied object-oriented design and its rules. assignment\_2

## **1️⃣ Start with the supplied Crescendo material**

We don't invent the system ourselves.

We are given:

📜 the domain specification

📐 the class diagram

👤 the use-case diagram

📋 numbered rules such as R1.1, R3.2 and R6.4

These are our blueprint.

This is very different from A1, where much of the work was about **discovering and modelling the domain ourselves**.

## **2️⃣ Set up the provided starter project**

### **📜 FROM THE GITLAB MATERIAL**

The written setup instructions provide a Crescendo starter project and specify a particular project structure.

They say the implementation belongs under:

**`assignment_2/src/`**

and the Part 1 documentation under:

**`assignment_2/docs/part_1.md`**

The written instructions specify **Java, JDK 17 and Gradle**, with the teacher able to run the application using `./gradlew run`.

Only the standard Java libraries are permitted; external frameworks, databases, GUIs and web frameworks are excluded. setup\_p1

## **⚠️ One important thing for us to remember**

You have told me that your teacher said at the beginning of the course that you could use **TypeScript**.

However, the written A2 files you uploaded explicitly describe a **Java/JDK 17/Gradle** setup and even specify Java filenames.

So before actual implementation, that conflict needs to be resolved with the teacher or with TypeScript-specific course instructions if they exist.

For understanding the assignment itself, however, the OOP concepts we're learning are largely the same.

## **3️⃣ Implement the UML structure**

The implementation must represent the supplied design:

🏫 MusicSchool

👤 abstract Person

↙️ Student

↘️ Teacher

🎼 Course

💰 TuitionFee

plus:

📊 Level

💳 PaymentStatus

Then the relationships from the UML must also exist correctly in the implementation.

This is where our earlier chapters about:

**inheritance \+ associations \+ multiplicity \+ composition \+ encapsulation**

all become practical.

## **4️⃣ Make the domain rules actually work**

A correct class structure isn't enough.

The system must enforce the numbered rules.

For example:

**R3.2** → maximum three Courses per Student.

**R5.3** → Course cannot exceed capacity.

**R6.4** → a TuitionFee cannot be paid twice. crescendo\_music\_school crescendo\_music\_school

So Part 1 isn't:

> "Create classes that look like the UML."

It is:

> "Create objects whose behaviour actually respects the domain represented by the UML and specification."

## **5️⃣ Handle errors correctly**

### **📜 FROM THE GITLAB MATERIAL**

If an operation violates a rule, the system must throw the appropriate exception.

Invalid input uses:

**IllegalArgumentException**

An operation that is invalid because of the current state uses:

**IllegalStateException**

The exception message must identify the relevant rule ID.

And critically:

> A failed operation must not leave the system partially changed. crescendo\_music\_school

## **6️⃣ Create the CLI and demonstration**

Then `Main` provides the outside interface.

Conceptually:

👤 User  
⬇️  
🖥️ Main  
⬇️  
🏫 MusicSchool / domain objects

The assignment requires both a command-line interface and a predefined demonstration of important functionality. assignment\_2

## **7️⃣ Explain important design decisions**

Part 1 isn't only about producing working software.

We also need to demonstrate that we understand the **design**.

The assignment specifically requires documentation of at least **two GRASP principles** and asks us to explain important relationship patterns, including multiplicities and composition. assignment\_2

So we aren't merely saying:

> "Here is my program."

We're demonstrating:

> "I understand why this object-oriented design works this way."

## **🚫 8️⃣ Part 1 has a special AI restriction**

This is especially important for our work together.

### **📜 FROM THE GITLAB ASSIGNMENT**

The instructions explicitly state that **AI tools must not be used for tasks in Part 1**. The assignment deliberately saves AI usage for Part 3\. assignment\_2

Therefore, what we're doing now is useful preparation:

📚 understanding OOP

📚 understanding UML

📚 understanding GRASP

📚 understanding what the assignment requires

But when you actually perform the assessed Crescendo implementation, I'll respect that boundary rather than solving Part 1 for you.

## **🧠 Part 1 in one sentence**

The entire Part 1 can now be remembered as:

> **Take an existing object-oriented design and faithfully turn it into a working program whose objects, relationships, behaviour and rules match that design.**

That is the first half of the fundamental skill A2 is teaching:

### **📐 DESIGN → 💻 CODE**

Soon, Part 2 will turn the arrow around:

### **💻 CODE → 📐 DESIGN**

And that is where things get especially interesting.

