# **🪜 Step 7 — Understand Composition: When One Object Owns Another**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo design contains **composition relationships**.

Two particularly important ones are:

🏫 **MusicSchool → Course**

🎓 **Student → TuitionFee**

The specification says that the MusicSchool **owns its courses**. A course is created by the school and cannot exist outside the school.

Similarly, a TuitionFee belongs to exactly one Student and cannot exist without that Student. crescendo\_music\_school crescendo\_music\_school

In UML, composition is shown using a **filled diamond** at the owning end of the relationship. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION — Association versus composition**

We learned earlier that an **association** means that two objects have a relationship.

Composition is a **stronger kind of relationship**.

Think:

🔗 **Association \= knows/uses/relates to**

💎 **Composition \= owns/is made up of**

The important concept is **ownership and lifetime**.

## **🎼 Example: MusicSchool and Course**

A Teacher and a Course have an association.

The Teacher exists independently of that particular Course.

The teacher might teach another course instead.

But Crescendo defines the relationship between MusicSchool and Course differently.

The **MusicSchool owns the Course**.

Conceptually:

🏫 **MusicSchool**

 💎 owns → 🎼 **Course**

The course belongs to that school's internal world.

## **💰 Example: Student and TuitionFee**

The same idea applies to tuition fees.

A TuitionFee isn't an independent object floating around the system that later happens to become connected to a Student.

It exists **because a particular Student has that tuition fee**.

Conceptually:

🎓 **Student**

 💎 owns → 💰 **TuitionFee**

This is why the specification says a TuitionFee cannot exist without its Student. crescendo\_music\_school

## **🏭 Who should create the object?**

### **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification gives us an important clue about object creation.

Students and Teachers are created through **MusicSchool**.

Courses are created through **MusicSchool**.

TuitionFees are created through **Student**. crescendo\_music\_school

The specification even asks us to think about which **GRASP principle** this reflects.

## **💡 BACKGROUND & EXPLANATION**

This is our first glimpse of an important GRASP idea called **Creator**.

A basic question in object-oriented design is:

> **Which object should be responsible for creating another object?**

If a Student strongly owns its TuitionFees, it makes sense for the Student to control their creation.

If MusicSchool owns its Courses, it makes sense for MusicSchool to control course creation.

So composition isn't merely a symbol on a UML diagram.

It affects the actual **responsibilities of our objects**.

## **🧠 The key distinction**

Remember it like this:

🔗 **Association**

> These objects are connected.

💎 **Composition**

> This object owns that object, and the owned object's existence is tied to the owner.

That distinction will matter both when reading UML and when examining how relationships are represented in actual code.

