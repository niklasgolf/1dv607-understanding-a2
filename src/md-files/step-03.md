# **🪜 Step 3 — Learn to Read the Crescendo Class Diagram**

## **🗺️ The class diagram is our blueprint**

### **📜 FROM THE GITLAB MATERIAL**

The teachers provide a complete **class diagram** for Crescendo. It shows the classes, their attributes and operations, inheritance relationships, associations, multiplicities, and some important constraints.

Part 1 asks us to translate this supplied design into an implementation. assignment\_2

### **💡 BACKGROUND & EXPLANATION**

A UML class diagram is a bit like an architect's drawing of a house.

The finished house is our program.

The UML diagram tells us how the important pieces should fit together before we construct it.

A typical class in the diagram is divided into three sections:

**Class name**

**Attributes — what the object knows**

**Operations — what the object can do**

For example, the Crescendo `Course` class contains information such as its code, title, level and capacity.

It also has operations for things such as getting its teacher, changing its teacher, getting its students and determining whether the course is full.

So we can think:

🧠 **Attributes \= state/data**

⚙️ **Operations \= behaviour**

## **🔐 What do \+ and − mean?**

### **💡 BACKGROUND & EXPLANATION**

The diagram uses symbols such as:

**− name: String**

and

**\+ getName(): String**

The minus sign means:

🔒 **private**

The plus sign means:

🌍 **public**

So the design is already telling us something about **encapsulation**.

The internal data of an object should generally not be freely manipulated from outside.

Instead, other objects interact with it through carefully chosen public operations.

This is one of the fundamental ideas of object-oriented programming.

## **🧠 Read classes as little responsible objects**

A useful habit is not to think:

> "Course is just some variables grouped together."

Instead think:

> "A Course is an object that knows things and is responsible for certain behaviour."

Likewise:

🎓 A **Student** knows about the courses they are enrolled in.

👨‍🏫 A **Teacher** knows about courses they teach.

🎼 A **Course** knows its teacher, students, level and capacity.

🏫 The **MusicSchool** manages the larger collection of people and courses.

This idea of giving responsibilities to appropriate objects will become extremely important when we reach **GRASP**.

## **🧭 The important question**

Whenever we inspect a class in the Crescendo diagram, we should ask two questions:

**1\. What does this object KNOW?**

and

**2\. What is this object RESPONSIBLE FOR DOING?**

Those two questions are a very good starting point for understanding object-oriented design.

