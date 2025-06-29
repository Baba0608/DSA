function nextGreaterElements(nums) {
  let n = nums.length;
  let st = [];
  let nextGreater = new Array(n).fill(-1);

  // for circular just traverse twice
  for (let i = 2 * n - 1; i >= 0; i--) {
    let size = st.length;
    while (size > 0 && st[size - 1] <= nums[i % n]) {
      st.pop();
      size--;
    }

    nextGreater[i % n] = size > 0 ? st[size - 1] : -1;
    st.push(nums[i % n]);
  }

  return nextGreater;
}
