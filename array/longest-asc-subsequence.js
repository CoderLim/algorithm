// 参考：http://blog.csdn.net/chenwenshi/article/details/6027086
function LAS(arr) {
    if (!arr || !arr.length) return 0;

    let max = 0;
    let len = arr.length;
    // 初始子序列长度都是1
    let lasArr = new Array(len).fill(1);
    for (let i = 0; i < len - 1; i++) {
        let sub = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && lasArr[j] > sub) {
                sub++;
            }
        }
        lasArr[i] = sub + 1;
        if (lasArr[i] > max) {
            max = lasArr[i];
            console.log(max, i);
        }
    }
}

let arr = [3, 1, 4, 8, 2, 10, 6];
LAS(arr);