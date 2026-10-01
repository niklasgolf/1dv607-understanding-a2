# **🪜 Step 24 — Reverse-Engineer a Sequence Diagram from Code**

## **📜 FROM THE GITLAB ASSIGNMENT**

For the current PawsHome implementation, we must create two sequence diagrams:

🐾 **Adopter applies for adoption**

✅ **Staff approves an application**

These diagrams must represent the interactions that actually occur in the existing implementation. assignment\_2

So now we're not primarily asking:

> **What classes exist?**

Instead we're asking:

> **What happens when the program performs one particular use case?**

## **💡 BACKGROUND & EXPLANATION — Follow the execution**

Imagine pressing a button in a program.

That single action might cause:

👤 User  
↓  
🖥️ UI  
↓  
⚙️ Controller/service  
↓  
📋 Application  
↓  
🐕 Animal

A sequence diagram reconstructs that journey.

The trick is to **follow the code from the starting point**.

## **🔎 Step 1 — Find where the use case begins**

Suppose we're investigating:

**Staff approves an application**

First we find where that action begins in the existing program.

Perhaps there is a menu option or method representing approval.

That becomes our entry point.

We then follow the code rather than guessing what should happen.

## **🔎 Step 2 — Follow every important method call**

Suppose method A calls method B.

Then B calls C.

Then C changes another object's state.

Conceptually:

**A → B → C → object changes**

We follow that chain.

This tells us:

🗣️ who sends a message

🎯 who receives it

⚙️ which operation is called

⏱️ in what order it happens

## **🧍 Step 3 — Identify the participants**

Across the top of a sequence diagram we normally have the participants involved in that particular interaction.

For an imaginary adoption flow, we might discover participants such as:

👤 Staff

🖥️ Console/UI

🏠 Shelter system

📋 Application

🐕 Animal

But these are only examples.

For the actual assignment, the participants must come from what we discover in the **real PawsHome implementation**.

## **⏱️ Step 4 — Preserve the actual order**

This is crucial.

Suppose the code performs:

1. Find Application  
2. Check Animal  
3. Check Visits  
4. Change Application status  
5. Change Animal status

Then our sequence diagram must reflect that order.

We cannot rearrange it because another order seems cleaner.

Remember:

> **Current sequence diagram \= reconstruction, not redesign.**

## **🚨 Step 5 — Include strange behaviour too**

Suppose the specification says approval should check for a successful meet-and-greet.

But while tracing the implementation, we discover that the program never performs that check.

Then we do **not** add the missing check to make our sequence diagram look correct.

Its absence is important evidence.

Later we can say:

📜 Specification requires the check.

💻 Current implementation doesn't perform it.

⚠️ Therefore there is a gap.

## **💡 Sequence diagrams can expose responsibility problems**

This is where our GRASP knowledge becomes useful again.

Imagine tracing one operation and discovering:

🖥️ UI checks the Animal

🖥️ UI checks the Visit

🖥️ UI changes the Application

🖥️ UI changes the Animal

🖥️ UI performs all validation

That would make us ask:

> Is too much domain responsibility located in the UI?

We would need evidence before reaching that conclusion for PawsHome, but the sequence diagram can make this kind of design problem much easier to see.

## **🧠 Class diagram versus sequence diagram**

This distinction is worth remembering:

### **📐 Class diagram \= static view**

It tells us:

> **What exists?**

Classes, attributes, operations and relationships.

### **⏱️ Sequence diagram \= dynamic view**

It tells us:

> **What happens?**

Objects communicate and perform operations **over time**.

So one describes the system's **structure**, while the other describes its **interaction during a particular scenario**.

## **🤖 This becomes very important in Part 3**

Later, AI will also be asked to produce the sequence diagram for:

**Staff approves an application**

Then we have three sources:

👨‍💻 **Our Part 2 diagram**

🤖 **AI's Part 3 diagram**

💻 **The actual source code**

The Part 3 instructions specifically require us to check whether the AI:

✅ identified correct interactions

❌ missed interactions

👻 invented interactions

🔀 placed interactions in the wrong order

The actual Java implementation remains the primary evidence. assignment\_2

## **🔑 The sequence-diagram recipe**

When reverse-engineering a sequence diagram, remember:

**Choose the use case**

⬇️

🔎 **Find its starting point in the code**

⬇️

👥 **Identify the participating objects**

⬇️

➡️ **Follow the method calls**

⬇️

⏱️ **Record their actual order**

⬇️

📐 **Turn that execution trace into UML**

That is essentially the job.

