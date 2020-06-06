import {Component} from 'react';

export default class CVSearch extends Component{

    // Determine if current prop is a parent
    isLeaf(obj) {
        return Object.getOwnPropertyNames(obj).includes('length');
    }

    // Find keyword in object, case insensitive
    find_val(obj, keyword) {
        return JSON.stringify(obj).toLowerCase().includes(keyword);
    }

    search(value, cv) {
        let result = [];
        this.CVSearch(value, cv, result);
        return result;
    }

    // Search for value using DFS on javascript object, case insensitive
    CVSearch(value, cv, result) {
        let sections = Object.getOwnPropertyNames(cv);
        let keyword = value.toString().toLowerCase();

        for (let x in sections) {
            if (this.isLeaf(cv[sections[x]])) {
                for (let v in cv[sections[x]]){
                    if (this.find_val(cv[sections[x]][v], keyword)) {
                        //console.log(`Found ${keyword} in ${sections[x]}`);
                        result.push(cv[sections[x]][v])
                    }    
                }
            }
            else {
                this.CVSearch(keyword, cv[sections[x]], result);
            }    
        }
    }

}