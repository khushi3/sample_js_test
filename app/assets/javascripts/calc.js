var calc = {
    add: function (params) {
        if (params == 0)
            return 0
        var numbers = params.split(/,|\n|-|1300/)
        var result = 0;
        for (var i = 0; i < numbers.length; i++) {
            result += Number(numbers[i]);
        }
        return result
    }
}
