# 5 - Test Doubles in Jest

## 5.1 - Introduction

What are test doubles?

- `Fictitious objects` used in place of a real object for testing purposes. They are `useful for isolating the unit` of code under test and `controlling the test scenarios`.
  - **Dummy objects**: Objects that are `passed around but not actively used` in the test.
  - **Fakes**: Simplified working implementations that `mimic the real implementation but take shortcuts` to facilitate testing.
  - **Stubs**: `Incomplete objects` used as arguments that `return predetermined responses`.
  - **Spies**: Objects that `track and record information` about how a unit is called, allowing `verification of method invocations`.
  - **Mocks**: Objects `preprogrammed with specific expectations` about how they should be called and what they should return. They can throw exceptions if the expectations are not met.

- Mocking testing styles: London (behavior-driven) / Chicago (state-driven).

> If used too much, there is something wrong with our code, possibly indicating high coupling or low cohesion.

Create commented examples of each one later. 

Spies vs Mocks:

- Spies are not directly injected into SUT.
- Original functionality is preserved with spies.
- Spies usually track method calls.