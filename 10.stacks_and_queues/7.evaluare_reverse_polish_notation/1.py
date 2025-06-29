import math


def eval_RPN(tokens):
    st = []
    operators = "+-*/"
    for i in tokens:
        if i in operators:
            a = st.pop()
            b = st.pop()
            if i == "+":
                st.append(a + b)
            elif i == "-":
                st.append(b - a)
            elif i == "*":
                st.append(a * b)
            else:
                val = b / a
                ans = int(val) if val > 0 else math.ceil(val)
                st.append(ans)
        else:
            st.append(int(i))

    return st.pop()
