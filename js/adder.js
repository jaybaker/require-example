
function add_this(a, b) {
    return a + b;
}

/**
 * This is a function that is not exposed 
 * outside of this module.
 */
function something() {
}

module.exports = {
    add_this: add_this
};
