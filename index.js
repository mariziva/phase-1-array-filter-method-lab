// Code your solution here
function findMatching(drivers, name) {
    const result = drivers.filter(driver => driver.substring(0,name.length).toLowerCase() === name.substring(0,name.length).toLowerCase())
    return result;
}

function fuzzyMatch(drivers, name) {
    const result = drivers.filter(driver => driver.substring(0, 1).toLowerCase() === name.substring(0, 1).toLowerCase())
    return result;
}

function matchName(drivers, name) {
    const result = drivers.filter(driver => driver.name === name)
    return result;
}