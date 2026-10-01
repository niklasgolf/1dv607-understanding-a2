# **🪜 Step 17 — Understand Encapsulation**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo UML uses **private attributes** and public operations.

The specification also says that getters should be provided where needed, but setters should only exist where the specification permits a value to change.

For example, things such as:

🆔 a person's ID

📝 a person's name

🔤 a Course code

📊 a Course Level

must not simply be changeable whenever someone wants.

The specification also says that returned collections must not expose the object's internal state so that outside code can modify it freely. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION — What is encapsulation?**

**Encapsulation** means that an object controls access to its own internal state.

Think of an object as having a protective shell:

🔒 **private internal state**

⬇️

🚪 **controlled public operations**

⬇️

🌍 **the rest of the program**

Other objects should normally interact through the doors we deliberately provide rather than reaching inside and changing things directly.

## **🎼 Imagine Course without encapsulation**

Suppose anybody could directly change:

`capacity`

Then some unrelated part of the program could make:

**capacity \= \-500**

That would violate the Crescendo rules.

Or imagine anybody could directly manipulate the Course's collection of Students.

Outside code might add a fourth Student to a Course whose capacity is three.

It could bypass all our carefully designed rules.

## **🛡️ Operations protect the object**

This is why meaningful operations are important.

Instead of saying:

> "Here is all my internal data. Change whatever you like."

an object effectively says:

> "Tell me what you want to accomplish, and I will decide whether that operation is valid."

For example:

🎓 `enroll(...)`

🎓 `withdraw(...)`

🎼 `changeTeacher(...)`

💰 `recordPayment(...)`

These operations provide controlled ways of changing the domain.

## **💡 Getters and setters are not automatically a pair**

A common beginner idea is:

> "Every private variable needs a getter and setter."

Not necessarily.

Suppose something has:

`getPersonId()`

That does **not** automatically mean it should also have:

`setPersonId(...)`

If the ID is supposed to remain stable, providing unrestricted modification would weaken the design.

So encapsulation isn't simply:

**private variables \+ getters \+ setters**

It is:

> **The object decides what outside code is allowed to see and change.**

## **📦 Collections are especially important**

Imagine Student internally maintains its Courses.

If `getCourses()` gives outside code unrestricted access to that exact internal collection, another part of the program might bypass `enroll()` entirely and modify it directly.

Then rules such as:

🎓 maximum three Courses

📊 matching Levels

🚫 no duplicate enrollment

could potentially be bypassed.

The Crescendo material specifically tells us not to expose internal collections in a way that allows callers to mutate the object's internal state. crescendo\_music\_school

## **🧠 Why encapsulation matters to the whole assignment**

We can now connect several concepts:

**Encapsulation**  
⬇️  
Objects control their state.

**Domain rules**  
⬇️  
Objects prevent invalid states.

**High cohesion**  
⬇️  
Relevant rules stay near the responsibilities they concern.

**GRASP**  
⬇️  
We decide which object should have each responsibility.

**OOP design**  
⬇️  
Objects collaborate through deliberate interfaces instead of freely manipulating each other's internals.

These aren't isolated concepts. They're different parts of the same object-oriented way of thinking.

