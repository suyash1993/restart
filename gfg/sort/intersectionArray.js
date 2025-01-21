
function intersection(a, b) {
    let a_length = a.length;
    let b_length = b.length;
    const temp = [];
    let b_current = 0;
    let a_current = 0;

    while (a_current < a_length && b_current < b_length) {
        if (a[a_current] == b[b_current] && temp[temp.length - 1] != a[a_current]) {
            temp.push(a[a_current]);
            a_current++;
            b_current++;
        } else if (a[a_current] > b[b_current]) {
            b_current++;
        } else {
            a_current++;
        }
    }


    return temp;
}




let b = [3,5,10,10,10,15,15,20];
let a = [5,10,10,15,30];


console.log(intersection(a, b))