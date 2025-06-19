def longest_common_prefix(strs):
    st = strs[0]
    i = 0
    while i < len(st):
        for word in strs:
            if i >= len(word):
                return word
            if st[i] != word[i]:
                return word[:i]
        i += 1

    return st
