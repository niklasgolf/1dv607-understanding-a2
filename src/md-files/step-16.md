# **🪜 Step 16 — Understand the Crescendo Operations**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo class diagram does not only tell us what information each class contains. It also specifies **operations** that the objects can perform.

Some important examples are:

🏫 MusicSchool — `registerStudent`, `registerTeacher`, `createCourse`

🎓 Student — `enroll`, `withdraw`, `addTuitionFee`

🎼 Course — `changeTeacher`, `isFull`

💰 TuitionFee — `recordPayment`

There are also operations for finding and retrieving information, such as `findPerson`, `findCourse`, `getCourses` and `getUnpaidFees`.

The assignment requires the operations shown in the UML diagram to be represented in the implementation. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Operations are behaviour**

An attribute tells us what an object **knows**.

An operation tells us what an object **can do**.

For example:

🎓 Student knows its Level.

🎓 Student can `enroll` in a Course.

This is one of the biggest differences between object-oriented programming and simply storing data.

An object combines:

**STATE \+ BEHAVIOUR**

The state describes its current situation.

The behaviour provides controlled ways of interacting with and changing that state.

## **🏫 `registerStudent`**

### **📜 FROM THE GITLAB MATERIAL**

Students are registered through **MusicSchool**.

The school is also responsible for assigning unique sequential person IDs, and a failed registration must not consume an ID. crescendo\_music\_school

### **💡 BACKGROUND & EXPLANATION**

So `registerStudent` is more than:

> "Create a Student."

Several rules may need to remain true.

For example:

Is the supplied information valid?

Is the email already registered?

What should the next person ID be?

Only after the necessary rules are satisfied should registration successfully change the system.

This shows why methods often represent **meaningful domain actions**, rather than simply changing individual variables.

## **🎓 `enroll`**

### **📜 FROM THE GITLAB MATERIAL**

When a Student enrolls in a Course, several Crescendo rules are relevant.

The Student may have at most three Courses.

The Course must have the same Level as the Student.

The Course cannot exceed its capacity.

The same Student cannot be enrolled twice in the same Course. crescendo\_music\_school crescendo\_music\_school

## **💡 One action can involve several objects**

This is where OOP becomes interesting.

The seemingly simple action:

**Alice enrolls in Piano**

affects a relationship between:

🎓 Alice

and

🎼 Piano

Both objects must still represent the same reality afterwards.

If the operation succeeds:

🎓 Alice knows she attends Piano.

🎼 Piano knows Alice is enrolled.

If it fails:

❌ neither object should be left half-updated.

This connects operations, associations, domain rules and consistency.

## **💰 `recordPayment`**

### **📜 FROM THE GITLAB MATERIAL**

A new TuitionFee starts as **UNPAID** without a payment date.

Recording payment requires a payment date.

After successful payment:

**status → PAID**

and the payment date is stored.

The same fee cannot be paid twice. crescendo\_music\_school

## **💡 Commands and queries**

A useful general programming distinction is between operations that **change something** and operations that mainly **answer a question**.

For example:

`recordPayment` changes state.

`enroll` changes state.

`withdraw` changes state.

But:

`isFull` answers a question.

`findCourse` searches for something.

`getCourses` returns information.

This isn't a special additional requirement from the assignment; it is a useful way of understanding the operations we see in the UML.

## **🧠 Objects are becoming active**

Earlier we might have imagined:

**Student \= student data**

But the object-oriented picture is richer:

🎓 Student has state.

🎓 Student participates in relationships.

🎓 Student performs operations.

🎓 Student helps protect domain rules.

🎓 Student collaborates with other objects.

That is much closer to what the assignment means by **object-oriented design and implementation**.

