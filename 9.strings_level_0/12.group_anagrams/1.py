def group_anagrams(strs):
    d = {}
    for ele in strs:
        word = "".join(sorted(ele))
        if word in d:
            d[word].append(ele)
        else:
            d[word] = [ele]

    return list(d.values())


# s = "abcd"
# a = "".join(sorted(s))
# print(a)
