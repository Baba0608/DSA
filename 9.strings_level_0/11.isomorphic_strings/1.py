def isomorphic(s, t):
    return iso(s, t) and iso(t, s)


def iso(s, t):
    d = {}
    for i in range(len(s)):
        if s[i] in d:
            if d[s[i]] != t[i]:
                return False
        else:
            d[s[i]] = t[i]
    return True
