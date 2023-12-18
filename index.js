// Code your solution here
function findMatching(drivers, string) {
    let matches = drivers.filter(name => name.toUpperCase() == string.toUpperCase());
    return matches;
}
 
function fuzzyMatch(drivers, string) {
     let matches = drivers.filter(name => name.charAt(0) == string.charAt(0));
     return matches;
}
 
function matchName(drivers, string) {
     let matches = drivers.filter(name1 => name1.name.toUpperCase() == string.toUpperCase());
     return matches;
}