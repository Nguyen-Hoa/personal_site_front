const my_cv = require('./../assets/cv');

// Determine if current prop is a parent
function isLeaf(obj) {
    return Object.getOwnPropertyNames(obj).includes('length');
}

// Find keyword in object, case insensitive
function find_val(obj, keyword) {
    return JSON.stringify(obj).toLowerCase().includes(keyword);
}

// Search for value using DFS on javascript object
function CVSearch(cv, value, res) {
    let sections = Object.getOwnPropertyNames(cv);
    let keyword = value.toLowerCase();

    for (x in sections) {
        if (isLeaf(cv[sections[x]])) {
            for (v in cv[sections[x]]){
                if (find_val(cv[sections[x]][v], keyword)) {
                    console.log(`Found ${keyword} in ${sections[x]}`);
                    res.push(cv[sections[x]][v])
                }    
            }
        }
        else {
            CVSearch(cv[sections[x]], keyword);
        }    
    }
}

var res = [];
CVSearch(my_cv, "merced", res);
console.log(res);

