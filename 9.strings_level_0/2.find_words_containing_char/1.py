def find_words_containing(words, x):
    ans = []
    for index, word in enumerate(words):
        if x in word:
            ans.append(index)

    return ans
