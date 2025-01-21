

function merge(a, b) {
    let temp = [];
    let a_length = a.length;
    let b_length = b.length;

    let a_current = 0;
    let b_current = 0;

    while (a_current < a_length && b_current < b_length) {
        if (a[a_current] >= b[b_current]) {
            temp.push(b[b_current]);
            b_current++;
        } else {
            temp.push(a[a_current]);
            a_current++;
        }
    }

    for (let i = a_current; i < a_length; i++) {
        temp.push(a[i])
    }

    for (let i = b_current; i < b_length; i++) {
        temp.push(b[i])
    }

    return temp;
}



let a = [10,15,20,40];
let b = [5,6,6,10,15];

console.log(merge(a, b))