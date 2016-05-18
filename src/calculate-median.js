function calculate_median(arr) {
    
        var newarray = [];
        var Median;
        for(var i = 0; i < arr.length; i++){
            if(i % 2 != 0){
                newarray.push(arr[i]);
            }
        }

        if(newarray.length % 2 === 0){
            var j = newarray.length;
            Median = (newarray[j/2] + newarray[(j/2)-1])/2;
        }
        else{
            var k = newarray.length;
            Median = newarray[parseInt(k/2)];
        }
        return Median;
    

}

module.exports = calculate_median;
