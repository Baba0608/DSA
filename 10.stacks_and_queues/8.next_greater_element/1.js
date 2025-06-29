function nextGreaterElement1(nums, arr) {
  let nextGreaterArr = nextGreaterElement(arr);
  let ans = [];
  let d = {};
  for (let i = 0; i < arr.length; i++) {
    d[arr[i]] = nextGreaterArr[i];
  }

  for (let ele of nums) {
    ans.push(d[ele]);
  }

  return ans;
}

function nextGreaterElement(arr) {
  let n = arr.length;
  let nextGreater = new Array(n).fill(-1);
  let st = [];

  for (let i = n - 1; i >= 0; i--) {
    let size = st.length;
    while (size > 0 && st[size - 1] <= arr[i]) {
      st.pop();
      size--;
    }

    nextGreater[i] = size > 0 ? st[size - 1] : -1;
    st.push(arr[i]);
  }

  return nextGreater;
}

let arr = [1, 3, 5, 4, 2, 6];
const ans = nextGreaterElement(arr);
console.log(ans);
