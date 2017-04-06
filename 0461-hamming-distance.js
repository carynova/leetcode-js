/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var tmp = x ^ y;
    var result = 0;
    for (var i = 0; i < 32; i++) {
        result += (tmp & 1 ? 1 : 0);
        tmp >>= 1;
    }
    return result;
};
