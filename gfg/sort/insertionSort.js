function run(arr) {

    for (let i = 0 ; i< arr.length; i++) {
        let j = i;

        while (arr[j] > arr[j + 1] && j >= 0) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            j--;
        }
    }

    return arr;
}

console.log(run([139, 12 , 24 ,65, 50,20,40, 21,60,10,30]))