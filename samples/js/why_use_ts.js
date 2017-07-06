function sortByName(a) {
    var result = a.Slice(0);
    result.sort(function(x,y){
        return x.name.localCompare(y.name);
    });
    return result;
}

sortByName(5);