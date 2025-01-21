function merge(arr, start, mid, end) {
    const temp = [];
    let left = start;
    let right = mid + 1;

    while (left <= mid && right <= end) {
        if (arr[left] >= arr[right]) {
            temp.push(arr[right]);
            right++;
        } else {
            temp.push(arr[left]);
            left++;
        }
    }

    
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= end) {
        temp.push(arr[right]);
        right++;
    }


    for (let i = start, j = 0; i <= end; i++, j++) {
        arr[i] = temp[j]
    }

    return arr;

}


function mergeSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    const mid = Math.floor((start + end) /2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    arr = merge(arr, start, mid, end);
    return arr
}

// arr = [9, 4, 7, 6, 3, 1, 5];
arr = [139, 12 , 24 ,65, 50,20,40, 21,60,10,30]

console.log(mergeSort(arr, 0, arr.length - 1))