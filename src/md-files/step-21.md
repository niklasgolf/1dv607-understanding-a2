# **🪜 Step 21 — Understand the PawsHome Specification: UC1–UC9 and C1–C8**

Before looking at the implementation, we need to understand what **PawsHome is supposed to do**.

## **📜 FROM THE GITLAB MATERIAL**

The specification describes **nine use cases**, numbered **UC1–UC9**. pawshome\_shelter

### **👤 UC1 — Register adopter**

Shelter staff can register an Adopter with:

📝 name  
📧 email  
📞 phone number

The email must be unique.

### **🐕 UC2 — Register animal**

Shelter staff can register an Animal with:

📝 name  
🐾 species  
🎂 age in months

The allowed species are:

🐕 Dog  
🐈 Cat  
🐇 Rabbit

Age must be **0 or greater**, and a newly registered Animal starts as **available**.

### **🙋 UC3 — Register volunteer**

Shelter staff can register a Volunteer with:

📝 name  
📞 phone number

### **📋 UC4 — Apply for adoption**

An Adopter can apply to adopt an **available Animal**.

The Application contains a date and initially has status **pending**.

There are also two important restrictions:

🔢 An Adopter may have at most **two pending Applications**.

🚫 The same Adopter cannot have duplicate pending Applications for the same Animal.

### **❌ UC5 — Withdraw application**

An Adopter can withdraw their own pending Application.

The Application then becomes **withdrawn**.

### **📅 UC6 — Schedule visit**

Shelter staff can schedule a meet-and-greet for a pending Application.

Each Visit has:

📅 date/time

🙋 exactly one supervising Volunteer

A Volunteer may supervise at most **three Visits per day**.

### **👍 UC7 — Record visit result**

The supervising Volunteer records whether the meeting was:

👍 **good**

or

👎 **not suitable**

An optional note can also be recorded.

Importantly, only the Volunteer supervising that Visit may record its result.

### **✅ UC8 — Decide application**

Shelter staff can approve or reject a pending Application.

Approval has additional requirements.

The Animal must still be **available**, and there must have been at least one **good Visit**.

If the Application is approved:

🐕 the Animal becomes adopted

and:

❌ all other pending Applications for that same Animal are automatically rejected.

The specification even requires the exact rejection reason:

**“Animal adopted through another application.”**

Every rejection must have a non-empty reason.

### **🔍 UC9 — List available animals**

Available Animals can be listed:

🐾 all together

or:

🐕🐈🐇 filtered by species.

## **💡 BACKGROUND & EXPLANATION**

Notice how the use cases describe **behaviour**.

They answer:

> What should people be able to accomplish with PawsHome?

But the specification contains another category as well:

## **📜 Constraints C1–C8**

These describe important relationships and architectural/domain restrictions.

### **C1**

Each Application belongs to exactly:

**1 Animal \+ 1 Adopter**

### **C2**

An Animal may have many Applications over time, but can have **at most one approved Application ever**.

### **C3**

An Adopter may have many Applications over time, but at most **two pending Applications** simultaneously.

### **C4**

Each Visit belongs to exactly one Application, while an Application may have several Visits.

### **C5**

A Volunteer may supervise many Visits, but at most **three on the same day**.

### **C6**

Once an Animal becomes **adopted**, it stays adopted.

### **C7**

The current system stores information **in memory**, but the design should allow a future database without rewriting the domain logic.

### **C8**

There is currently one **console UI**, while the domain logic should remain independent of that UI. pawshome\_shelter

## **🧠 Use cases versus constraints**

This distinction is useful:

👤 **UC \= something an actor does**

Examples:

> Apply for adoption.

> Schedule a Visit.

> Approve an Application.

Whereas:

📏 **C \= something that must remain true about the system/design**

Examples:

> An Application belongs to exactly one Animal.

> A Volunteer may supervise at most three Visits per day.

> Domain logic should be independent of the console UI.

## **🔎 And here comes the detective work...**

We now have our **expected PawsHome**:

📜 UC1–UC9  
📏 C1–C8

But we still don't know whether the existing implementation actually fulfills all of them.

That is precisely what Part 2 asks us to investigate.

For each requirement, we'll eventually be able to think:

📜 **Specification says:** X

💻 **Code actually does:** Y

🔍 **Comparison:** same, missing, incomplete or different?

That comparison is the heart of the **gap analysis**.

