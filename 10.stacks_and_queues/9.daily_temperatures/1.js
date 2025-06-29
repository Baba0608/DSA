function dailyTemperatures(temperatures) {
  let n = temperatures.length;
  let ans = new Array(n).fill(0);
  let st = [];

  for (let i = n - 1; i >= 0; i--) {
    let size = st.length;
    while (size > 0 && temperatures[st[size - 1]] <= temperatures[i]) {
      size--;
      st.pop();
    }

    ans[i] = size > 0 ? st[size - 1] - i : 0;
    st.push(i);
  }

  return ans;
}
