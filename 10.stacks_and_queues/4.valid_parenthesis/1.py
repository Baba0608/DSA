def valid_parenthesis(s):
    d = {")": "(", "}": "{", "]": "["}
    st = []

    for symbol in s:
        if symbol in d:
            if d[symbol] != st.pop():
                return False
        else:
            st.append(symbol)

    return len(st) == 0
