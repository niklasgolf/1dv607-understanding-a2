# **🪜 Step 18 — Understand `Main`, the CLI and Separation of Concerns**

## **📜 FROM THE GITLAB ASSIGNMENT**

Crescendo must have a simple **command-line interface (CLI)**.

The assignment makes an important distinction:

🖥️ **`Main` handles console input and output.**

🎓 **The domain classes contain the actual business/domain logic.**

Classes such as Student, Course and TuitionFee should **not** read user input or print user-interface messages themselves.

The assignment also requires a predefined demonstration so the important functionality can be shown. assignment\_2

## **💡 BACKGROUND & EXPLANATION — Two different jobs**

Imagine the program as having two areas:

### **🖥️ User interface**

This deals with the human using the program.

It might:

⌨️ ask what the user wants to do

📝 receive input

📢 display results

⚠️ display errors

In Crescendo, this responsibility belongs mainly to **Main**.

### **🎼 Domain**

This represents the actual music-school world:

🏫 MusicSchool

🎓 Student

👨‍🏫 Teacher

🎼 Course

💰 TuitionFee

These objects should understand the **rules of Crescendo**, not how a terminal works.

## **🎓 A Student shouldn't know about the keyboard**

Suppose someone wants to enroll a Student in a Course.

The Student should understand concepts such as:

> Am I already enrolled?

> Am I allowed another Course?

> Is this Course at my Level?

But Student shouldn't be concerned with:

> Which text should I print in the terminal?

> Which menu option did the user type?

Those are completely different responsibilities.

## **🧩 This is Separation of Concerns**

**Separation of concerns** means separating different kinds of responsibilities.

Conceptually:

👤 User  
↕  
🖥️ Main / CLI  
↕  
🎓 Domain objects

The CLI communicates with the user.

The domain objects implement the actual rules.

## **💡 Why is this useful?**

Imagine that Crescendo later stops using a terminal.

Instead, someone creates:

🌐 a website

or:

📱 a mobile application

The music-school rules haven't changed.

A Student is still limited by the same enrollment rules.

A Course still has a capacity.

A TuitionFee still cannot be paid twice.

If those rules live inside the **domain model**, we can potentially replace the user interface without rewriting the fundamental domain logic.

That is one reason separation of concerns is valuable.

## **🐕 This idea appears again in PawsHome**

### **📜 FROM THE GITLAB MATERIAL**

The PawsHome specification contains the same architectural idea.

Constraint **C8** says there is currently one console UI, while the **domain logic should remain independent of that UI**. pawshome\_shelter

So when we eventually investigate the existing PawsHome implementation, this becomes something worth understanding:

**Where is the domain logic actually located?**

But we won't answer that yet — that belongs to the later reverse-engineering work.

## **🧠 Another connection to cohesion**

Remember:

**High cohesion \= closely related responsibilities stay together.**

If Student contained enrollment rules **and** menu printing **and** keyboard input, Student would have several unrelated responsibilities.

Separating them gives us clearer roles:

🖥️ **Main:** interaction with the user

🎓 **Student:** student-related domain behaviour

🎼 **Course:** course-related domain behaviour

💰 **TuitionFee:** tuition-fee behaviour

This is another example of object-oriented design being about much more than simply creating classes.

