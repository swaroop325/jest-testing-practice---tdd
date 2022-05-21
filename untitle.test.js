const randomize = require("./Untitled-1")
describe("its a sample testing",()=>{
    it("empty array test", ()=>{
        expect(()=>randomize.randomize([])).toThrowError("Empty array")
    })

    it("one array test", ()=>{
        let value = randomize.randomize([{ item: "one", weight: 5}])
        expect(value).toEqual("one")
    })

    it("two array test", ()=>{
        jest.spyOn(global.Math, 'random').mockReturnValue(0.8);
        let value = randomize.randomize([{ item: "one", weight: 5}, { item: "two", weight: 3 }])
        expect(value).toEqual("two")
    })

    it("three array test", ()=>{
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
        let value = randomize.randomize([{ item: "one", weight: 3}, { item: "two", weight: 3 }, { item: "three", weight: 3 }])
        expect(value).toEqual("two")
    })

    it("null result check test", ()=>{
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
        let value = ()=> randomize.randomize([{ item: "one", weight: 3}, { item: "two", weight: 3 }, { item: "three", weight: 3 }])
        expect(value).toThrow("Unexpected error")
    })
})