function receivesAFunction(callback) {
    return callback()
}
receivesAFunction

function returnsANamedFunction() {
    function namedFunction() {
        return 'This function has a name'
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function() {}
}