# **🪜 Step 15 — Understand the Student, Teacher, Course and TuitionFee Rules**

Now we continue through the Crescendo specification. These rules are especially useful because we can see how **domain rules, associations and multiplicities fit together**.

## **🎓 Student — R3**

### **📜 FROM THE GITLAB MATERIAL**

A Student has:

🎵 an **instrument**

📊 a **Level**: BEGINNER, INTERMEDIATE or ADVANCED

Both are required.

A Student may be enrolled in **at most three Courses**.

A Student may only enroll in a Course that has the **same Level** as the Student.

A Student can only withdraw from a Course they are actually enrolled in.

Finally, a Student may have **at most one TuitionFee for each term**. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION**

Notice how many concepts we've already studied appear here.

The rule:

**maximum three Courses**

is a **multiplicity constraint**.

The rule:

**Student and Course must have the same Level**

is a **domain rule**.

The rule:

**you cannot withdraw from a Course you aren't enrolled in**

depends on the object's **current state**.

And:

**Student ↔ Course**

is an **association**.

So these aren't separate theoretical topics anymore. They are beginning to work together.

## **👨‍🏫 Teacher — R4**

### **📜 FROM THE GITLAB MATERIAL**

A Teacher has a required **specialization**.

A Teacher may teach any number of Courses, including none. crescendo\_music\_school

## **💡 BACKGROUND & EXPLANATION**

This is a good example of multiplicity again.

A newly registered Teacher does not need to teach anything yet.

Later the same Teacher might teach several Courses.

So the relationship is not:

**Teacher → exactly one Course**

It allows:

**zero, one or many Courses**.

## **🎼 Course — R5**

### **📜 FROM THE GITLAB MATERIAL**

A Course has:

🔤 a **code**

📝 a **title**

📊 a **Level**

👥 a **capacity**

The required values must be valid, capacity must be at least 1, and the Course code must be unique within the MusicSchool.

Every Course has **exactly one Teacher**.

That Teacher may later be replaced, but the Course must never be left without a Teacher.

A Course may contain Students up to its capacity.

The same Student must not be enrolled twice in the same Course. crescendo\_music\_school

## **💡 A very important observation**

A Course therefore has several jobs related to protecting its own valid state.

For example, it has information about:

**capacity**

and:

**currently enrolled Students**

That means Course has the information necessary to answer:

> "Am I full?"

This connects directly to the GRASP principle **Information Expert** that we studied earlier.

## **💰 TuitionFee — R6**

### **📜 FROM THE GITLAB MATERIAL**

A TuitionFee contains:

📅 a **term**

💰 an **amount**

📋 a **PaymentStatus**

📅 an optional **payment date**

Every TuitionFee belongs to exactly one Student and cannot exist independently of that Student.

The amount must be greater than zero.

A newly created TuitionFee begins as:

**UNPAID**

with **no payment date**.

When payment is recorded, a payment date is required, the status becomes **PAID**, and that date is stored.

A fee cannot be paid twice. crescendo\_music\_school

## **💡 State changes**

TuitionFee gives us a nice example of an object whose **state changes over time**.

Initially:

💰 TuitionFee → **UNPAID**

Later:

💳 payment recorded

Then:

💰 TuitionFee → **PAID**

Once it reaches PAID, attempting to pay it again is invalid.

So object-oriented programming isn't only about storing objects.

Objects have **state**, and operations can cause valid transitions from one state to another.

## **🧠 The Crescendo world is now taking shape**

We can mentally picture the domain:

🏫 **MusicSchool** registers Students and Teachers and owns Courses.

👤 **Person** contains information common to Students and Teachers.

🎓 **Student** enrolls in Courses and owns TuitionFees.

👨‍🏫 **Teacher** teaches Courses.

🎼 **Course** has one Teacher and a limited collection of Students.

💰 **TuitionFee** belongs to one Student and changes from UNPAID to PAID.

At this point, the UML diagram should start looking less like a collection of strange boxes and arrows and more like a **model of a small world whose objects have responsibilities and rules**.

