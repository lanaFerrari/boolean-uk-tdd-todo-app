// createReceipt(basket)	
// basket(@Item[])	Item(@Object), properties: name(@String), price(@Number), quantity(@Number))	
// If there are items	@String
// If no items	@String

// Step by step - require src file
// // - require source code

/* 
- Steps writing tests:
    1. analyze user story and setup domain model(table with `Methods`, `Inputs`, `Data`, `Scenario`, 
      `Outputs` columns) 
    2. use three-step pattern to write tests: 
        2.1. Setup: setup variables that will be used in tests(`Inputs` from domain model)
        2.2. Execute: call the test function on the required src code variable
        2.3. Verify: check if the test call result meets expected Output.
    3. use jasmine syntax to describe and write the test:
        - describe("what is tested", function(
            it("spec for one Scenario", function(
                // test pattern from step 2
                expect(`expectation from `execute` part`).toEqual(`Outputs` from domain model)
            ))
        ))
*/

describe("Create Ticket", ()=>{
    it("returns receipt string", () => {
        // 2.1. Setup: setup variables that will be used in tests(`Inputs` from domain model)
        const basket = [{name: "phone", price: 300, quantity: 4}]
        // 2.2. Execute: call the test function on the required src code variable
        const result = createReceipt(basket)
        // 2.3. Verify: check if the test call result meets expected Output.
        expect(result).toEqual(`phone | 300 | 4`)
    })
})