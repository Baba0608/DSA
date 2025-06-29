// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

function evalRPN(tokens) {
  let st = [];
  let operators = "+-*/";
  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      let a = st.pop();
      let b = st.pop();
      switch (tokens[i]) {
        case "+":
          st.push(a + b);
          break;
        case "-":
          st.push(b - a);
          break;
        case "*":
          st.push(a * b);
          break;
        case "/":
          let val = b / a;
          let ans = val > 0 ? Math.floor(val) : Math.ceil(val);
          st.push(ans);
          break;
      }
    } else {
      st.push(+tokens[i]);
    }
  }

  return st.pop();
}
