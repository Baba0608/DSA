function validParenthesis(s) {
  d = { ")": "(", "}": "{", "]": "[" };
  let st = [];

  for (let symbol of s) {
    if (symbol in d) {
      if (d[symbol] !== (st && st.pop())) return false;
    } else {
      st.push(symbol);
    }
  }

  return st.length == 0;
}

function validParenthesis2(s) {
  let st = [];
  for (let symbol of s) {
    switch (symbol) {
      case ")":
        if (st.pop() !== "(") {
          return false;
        }
        break;

      case "}":
        if (st.pop() !== "{") {
          return false;
        }
        break;

      case "]":
        if (st.pop() !== "[") {
          return false;
        }
        break;

      default:
        st.push(symbol);
    }
  }

  return st.length === 0;
}
