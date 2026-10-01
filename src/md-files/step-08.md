# **🪜 Step 8 — Understand Domain Rules and Error Handling**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification contains many rules with identifiers such as:

**R1.1**

**R3.2**

**R5.3**

**R6.4**

These aren't arbitrary labels. Each identifies a particular **domain rule**.

For example, the specification says:

🎓 **R3.2** — A Student may be enrolled in at most three Courses.

🎼 **R5.3** — A Course may contain students only up to its capacity.

💰 **R6.3** — A TuitionFee amount must be greater than zero.

💳 **R6.4** — A tuition fee cannot be paid twice. crescendo\_music\_school crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION — What is a domain rule?**

The word **domain** means the real-world area our software represents.

For Crescendo, the domain is:

🎹 **running a music school**

A domain rule is therefore a rule about how that world is allowed to work.

For example:

> A student can take a maximum of three courses.

That's not really a TypeScript rule.

TypeScript doesn't care how many music courses somebody studies.

It's a **music-school business rule**.

Our software must make sure that rule remains true.

## **🧠 Where should rules live?**

This introduces an extremely important OOP idea.

Imagine somebody tries to enroll a Student in a fourth Course.

Who should be responsible for knowing:

> "A student cannot have more than three courses"?

A bad design could put all the rules in the user interface.

But then the Student object itself doesn't protect its own valid state.

### **📜 FROM THE GITLAB ASSIGNMENT**

The assignment specifically says that **validation and domain rules should be kept in appropriate domain classes**. assignment\_2

### **💡 BACKGROUND & EXPLANATION**

This connects directly to something we learned earlier:

> Objects should have responsibilities.

A Student isn't supposed to be merely a bag containing student data.

The Student should also participate in protecting the rules that belong to being a Student.

That is a much more object-oriented way of thinking.

## **⚠️ What happens when somebody breaks a rule?**

### **📜 FROM THE GITLAB MATERIAL**

Crescendo distinguishes between two broad kinds of errors.

**Invalid input** should result in an `IllegalArgumentException`.

**An operation that isn't allowed because of the object's current state** should result in an `IllegalStateException`.

The relevant **rule ID must appear in the exception message**. crescendo\_music\_school

For example, if an operation violates R5.3, the error message should identify **R5.3**.

## **💡 Input problem versus state problem**

A useful way to begin understanding the distinction is:

📝 **IllegalArgumentException**

> "The information you gave me is invalid."

versus:

🚦 **IllegalStateException**

> "That operation might normally make sense, but the system is currently in a state where it isn't allowed."

For example, trying to create something with an invalid required value is an **argument problem**.

Trying to perform an operation that is forbidden because of what has already happened can be a **state problem**.

## **🛡️ Failed operations must be safe**

### **📜 FROM THE GITLAB ASSIGNMENT**

There is another very important requirement:

If an operation fails, it must **not leave the objects partially updated or inconsistent**. assignment\_2

### **💡 BACKGROUND & EXPLANATION**

Imagine enrolling Alice in Piano.

Suppose the Student gets updated first:

🎓 Alice → Piano

Then something fails before the Course is updated:

🎼 Piano → does NOT contain Alice

Now the system contradicts itself.

That is exactly the kind of situation we must avoid.

A useful principle is:

> **Either the whole valid operation succeeds, or the system remains as it was before.**

This becomes especially important with the bidirectional relationships we learned about earlier.

---

## **🧠 What Step 8 adds to our mental model**

Our objects don't merely contain information.

They also **protect the rules of their domain**.

So we are gradually building a richer picture of OOP:

🧱 Classes define objects.

🔗 Associations connect objects.

🔢 Multiplicities restrict those connections.

💎 Composition defines strong ownership.

📜 Domain rules define what states and operations are valid.

⚠️ Error handling prevents invalid operations from damaging the system.

All of these ideas work together.

