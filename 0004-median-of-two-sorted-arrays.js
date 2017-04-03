/**
 * combine the two arrays, because they are already sorted, we can find the 
 * median by nums1.length and nums2.length
 */ 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // compute the position
    var totalLen = nums1.length + nums2.length
    var numA, numB
    var numBPos = -1

    while(numBPos <= totalLen/2) {
        numA = numB

        // get the next
        if (nums1[0] > nums2[0]) {
            numB = nums2.shift()
        } else {
            numB = nums1.shift()
        }

        // count position of numB
        numBPos++
    }

    if (totalLen & 1) {
        return numB
    } else {
        return (numA + numB) / 2
    }
};
