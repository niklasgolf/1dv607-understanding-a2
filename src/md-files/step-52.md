# **🪜 Step 52 — Understand Polymorphism**

We already know that Crescendo has:

👤 `Person`

↙️　　　　↘️

🎓 `Student`　　👨‍🏫 `Teacher`

`Person` is abstract, while `Student` and `Teacher` are special kinds of Person.

Now we add one of the central ideas in object-oriented programming:

> **Polymorphism means that different kinds of objects can be treated through a common type while still retaining their own specific behaviour.**

## **📜 FROM THE GITLAB MATERIAL**

The Crescendo specification says that every Person is either a Student or Teacher, and the supplied design makes `Person` abstract with `Student` and `Teacher` as subclasses. crescendo\_music\_school

The class diagram also expresses this using UML generalization/inheritance. crescendo\_music\_school

The deeper explanation of polymorphism below is **background theory**.

# **🧬 Start with inheritance**

We learned earlier:

🎓 Student **is a** Person.

👨‍🏫 Teacher **is a** Person.

Therefore, wherever we only care that something is a `Person`, either kind can potentially be treated as one.

Conceptually:

👤 Person

could actually refer to:

🎓 Student

or:

👨‍🏫 Teacher

That's the foundation for polymorphism.

# **🏫 Imagine MusicSchool's people**

The school needs to keep track of people.

Without the common `Person` abstraction, we might imagine separate concepts everywhere:

📚 students

📚 teachers

and then repeatedly write logic for both categories.

But because both are Persons, we can sometimes think at the more general level:

🏫 MusicSchool

↓

👥 Persons

↓

🎓 Student

🎓 Student

👨‍🏫 Teacher

🎓 Student

👨‍🏫 Teacher

The collection can conceptually say:

> **These are Persons.**

Even though the actual objects are Students and Teachers.

# **🧠 One object can therefore be viewed at different levels**

Suppose we have:

🎓 Alice the Student.

Alice is:

🎓 a Student

AND

👤 a Person.

She doesn't stop being a Student merely because some part of the program treats her as a Person.

That's important.

The actual object remains:

🎓 Student.

We're simply interacting with it through the more general:

👤 Person abstraction.

# **🔎 Why is that useful?**

Imagine we want to find a person by ID.

At that moment, perhaps we don't care whether the result is:

🎓 Student

or:

👨‍🏫 Teacher.

We're asking:

> "Find Person 17."

So the operation can conceptually work with:

👤 **Person**

rather than duplicating:

> findStudent()

and:

> findTeacher()

for every situation where the distinction isn't relevant.

# **🎭 Where does the “many forms” idea come from?**

The word **polymorphism** roughly reflects:

> **many forms**

A common abstraction can represent objects of several concrete forms.

For example:

👤 Person

can take the concrete form:

🎓 Student

or:

👨‍🏫 Teacher.

That's the basic idea.

# **⚙️ But polymorphism becomes even more interesting with behaviour**

Let's use a completely fictional example.

Imagine an abstract:

🔷 `Shape`

with different concrete shapes:

⭕ Circle

⬛ Square

🔺 Triangle

Suppose all Shapes understand the conceptual operation:

> calculate area.

But each concrete shape performs that operation differently.

⭕ Circle uses its radius.

⬛ Square uses its side length.

🔺 Triangle uses base and height.

Now another part of the program doesn't necessarily need to ask:

> Are you Circle?

> Are you Square?

> Are you Triangle?

It can conceptually say:

> **Shape, calculate your area.**

The actual object determines the appropriate behaviour.

That's the more powerful side of polymorphism.

# **❌ Compare that with constant type checking**

Imagine a program repeatedly does:

> If Student, do this.

> Else if Teacher, do that.

> Else if some future Person type, do something else.

Then every time a new type appears, we may need to hunt through the program changing conditionals.

Polymorphism can sometimes let us express:

> **Person, perform your appropriate behaviour.**

and let the concrete object decide what that means.

# **🧩 This connects to GRASP Polymorphism**

GRASP includes a principle called:

🎭 **Polymorphism**

The basic responsibility idea is:

> When behaviour varies by type, consider assigning the varying behaviour to the types themselves rather than building large conditional structures elsewhere.

So instead of:

🐙 Manager:

> If A → behaviour A  
> If B → behaviour B  
> If C → behaviour C

we may have:

📦 A → knows A behaviour

📦 B → knows B behaviour

📦 C → knows C behaviour

while callers work through a shared abstraction.

# **⚠️ Inheritance and polymorphism are related, but not identical**

This distinction is worth understanding.

### **🧬 Inheritance**

describes a relationship between types:

> Student **is a** Person.

### **🎭 Polymorphism**

describes how different concrete objects can be treated through a common abstraction and potentially respond with type-specific behaviour.

So:

> **Inheritance can enable polymorphism, but simply having subclasses isn't the whole meaning of polymorphism.**

# **🧠 Why make `Person` abstract?**

### **📜 FROM THE GITLAB MATERIAL**

Crescendo specifies that every Person is either a Student or Teacher; `Person` itself is abstract. crescendo\_music\_school

Conceptually, that means:

❌ generic Person

is not a valid concrete domain object.

Instead we create:

🎓 Student

or:

👨‍🏫 Teacher.

But both still share the common Person concept.

# **🧩 Abstract does NOT mean useless**

An abstract class can still provide valuable common structure.

Conceptually, Person represents information shared by Students and Teachers, such as:

🆔 person ID

👤 name

📧 email.

So we avoid unnecessarily duplicating the idea of a Person in both subclasses.

The abstraction captures:

> **What Students and Teachers have in common.**

The subclasses capture:

> **What makes each type special.**

# **🔎 Polymorphism in reverse engineering**

When examining existing code in Part 2, inheritance alone isn't the whole story.

Ask:

🧬 Are there superclass/subclass relationships?

Then:

🎭 Is code actually using the common abstraction?

And:

⚙️ Does behaviour vary between the concrete types?

And especially:

🚨 Are there large chains of type checks that might indicate behaviour could be distributed polymorphically?

Again, don't automatically label every `if` as bad.

We're looking for evidence of responsibilities that may be awkwardly placed.

# **🕸️ Polymorphism can reduce coupling**

Imagine a Controller knows about:

⭕ Circle

⬛ Square

🔺 Triangle

and contains separate logic for every one.

It's coupled to all those concrete types.

If it can instead work with:

🔷 Shape

then it may need to know much less about the concrete implementations.

So polymorphism can sometimes contribute to:

🕸️ **Lower Coupling**

and:

🎯 **Higher Cohesion**

# **🔑 The simplest mental model**

Think:

### **🧬 INHERITANCE**

> **Student IS A Person.**

### **🔷 ABSTRACTION**

> **Person describes what Students and Teachers have in common.**

### **🎭 POLYMORPHISM**

> **I can work with a Person without always needing to know which concrete kind of Person it is.**

And when behaviour differs:

> **The concrete object can provide the appropriate behaviour.**

# **⭐ The sentence to remember**

> **Polymorphism lets us program against the common idea while allowing the concrete objects to remain different.**

That's why OOP isn't simply about making lots of classes.

We're building abstractions that let different objects collaborate without every part of the program needing to understand every concrete type.

