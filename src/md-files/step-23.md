# **🪜 Step 23 — Reverse-Engineer a Class Diagram from Code**

## **📜 FROM THE GITLAB ASSIGNMENT**

For PawsHome, one of our first Part 2 deliverables is a **class diagram of the current system**.

The important word is **current**.

The diagram must represent the design that can actually be observed in the supplied implementation, including its classes, relationships and multiplicities. It must **not** silently turn PawsHome into the improved system described by the specification. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Start with the classes**

When opening an unfamiliar project, don't try to understand everything simultaneously.

Start with a simple question:

> **What classes actually exist?**

Imagine discovering:

🐕 `Animal`

👤 `Adopter`

📋 `Application`

🙋 `Volunteer`

📅 `Visit`

Those names immediately begin giving us a vocabulary for the system.

But at this stage we are investigators.

We don't assume these exact classes exist until we see them in the actual code.

## **🔎 Next: inspect each class**

For every class we find, we can investigate three basic things:

### **1️⃣ What does it KNOW?**

Look at its fields/attributes.

For example, an imaginary Animal might contain information representing:

📝 name

🐾 species

🎂 age

📊 status

These become candidates for the **attribute section** of our UML class.

### **2️⃣ What can it DO?**

Look at its methods.

Perhaps a class contains operations related to:

🔍 finding information

➕ creating something

✅ approving something

🔄 changing state

These become candidates for the **operation section** of the UML class.

### **3️⃣ What other objects does it KNOW ABOUT?**

This is extremely important.

Suppose one class contains a reference to another class.

Conceptually:

**Application → Animal**

That is evidence of a relationship.

Or perhaps it contains a collection:

**Adopter → collection of Applications**

That gives us more evidence about the structure of the system.

# **🔗 Look for associations**

This is where the source code starts turning into UML.

If object A stores a reference to object B, ask:

> What relationship does this represent?

Then check the other direction:

> Does B also store a reference back to A?

If yes, we may have a **bidirectional association**.

If not, the relationship may only be navigable in one direction.

The key is:

> **Draw what the code supports, not what we expect from the specification.**

# **🔢 Then determine multiplicities**

This is where collections become especially interesting.

Conceptually, if we find:

**one object reference**

that might suggest something like:

**1** or **0..1**

depending on whether the reference is mandatory.

If we find:

**a collection of objects**

that may suggest:

**0..**\* or another multiple-valued relationship.

But we must go deeper than simply looking at the data type.

## **💡 Storage is not always the whole story**

Suppose a class stores Applications in an ordinary collection.

Technically, that collection might hold any number.

But perhaps the methods enforce:

> "No more than two pending Applications."

So to understand the **actual multiplicity or constraint**, we sometimes need to inspect both:

📦 **how objects are stored**

and

⚙️ **what the methods actually enforce**

This is why reverse engineering requires reading behaviour as well as fields.

# **🧬 Look for inheritance**

We also check whether the implementation contains inheritance.

Conceptually:

**Subclass → superclass**

In UML this becomes the generalization relationship we learned earlier with:

**Student → Person**

But again, we don't invent inheritance because we think it would make PawsHome prettier.

We document inheritance only if the current implementation actually contains it.

# **🧩 Look for dependencies too**

Sometimes a class doesn't permanently store another object but still **uses** it.

For example, a method might:

receive another object as a parameter,

call one of its methods,

or temporarily use it to perform an operation.

That can indicate a **dependency** rather than a stored association.

This distinction becomes useful when building a more accurate picture of how the classes collaborate.

# **🧠 A practical reading order**

When eventually examining each PawsHome class, a useful mental checklist is:

**CLASS**

⬇️

📦 What fields does it contain?

⬇️

⚙️ What methods does it contain?

⬇️

🔗 What other classes does it reference?

⬇️

📚 Does it contain collections of other objects?

⬇️

🧬 Does it inherit from another class?

⬇️

➡️ What other objects does it use?

⬇️

🔢 What multiplicities does the actual implementation permit or enforce?

Now the code begins transforming into a diagram.

# **📐 This is genuine reverse engineering**

We're essentially taking something like:

💻 **source code**

and extracting:

**Classes**  
↓  
**Attributes**  
↓  
**Operations**  
↓  
**Associations**  
↓  
**Dependencies**  
↓  
**Inheritance**  
↓  
**Multiplicities**

until eventually we have:

📐 **a UML representation of the existing software design**.

## **🔑 And remember our golden rule**

At this stage we are **not improving anything**.

If the implementation has an ugly relationship:

📐 draw the ugly relationship.

If a multiplicity differs from the specification:

📐 represent what the implementation actually supports.

If an important relationship is missing:

📐 don't secretly add it.

Those differences become valuable evidence for the **gap analysis** later.

