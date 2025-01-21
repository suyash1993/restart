
function union(a, b) {
    let a_length = a.length;
    let b_length = b.length;

    let a_current = 0;
    let b_current = 0;

    const temp = [];

    while (a_current < a_length && b_current < b_length) {
        if (a[a_current] < b[b_current]) {
            if (temp[temp.length - 1] != a[a_current]) {
                temp.push(a[a_current]);
                a_current++;
            }
        }
        else if (a[a_current] > b[b_current]) {
            if (temp[temp.length - 1] != b[b_current]) {
                temp.push(b[b_current]);
                b_current++;
            }
        } else {
            if (temp[temp.length - 1] != b[b_current]) {
                temp.push(b[b_current]);
                b_current++;
                a_current++;
            }
        }
    }

    for (let i = a_current ; i < a_length; i++) {
        temp.push(a[i]);
    }

    
    for (let i = b_current ; i < b_length; i++) {
        temp.push(b[i]);
    }

    return temp;
}



let a = [3,8,10];
let b = [2,8,9,10,15];

console.log(union(a, b))

