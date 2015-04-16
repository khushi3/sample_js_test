describe("calc",function(){
   it("should support empty string",function() {
       expect(calc.add("")).toEqual(0);
   });

    it("should support  1 number ",function () {
        expect(calc.add("3")).toEqual(3);
    })

    it("should support  more than 2 numbers ",function () {
        expect(calc.add("3,2")).toEqual(5);
    })

    it("should support more than 2 numbers ",function () {
     expect(calc.add("3,2,10")).toEqual(15);
    })

    it("should handle newline delimiters",function() {
        expect(calc.add("3,2\n10")).toEqual(15);
    })

});

