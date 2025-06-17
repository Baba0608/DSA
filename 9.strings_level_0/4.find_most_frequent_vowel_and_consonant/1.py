def max_freq_sum(s):
    d = {}
    max_vowel_freq = 0
    max_consonant_freq = 0

    for char in s:
        d[char] = (d[char] or 0) + 1
        if is_vowel(d[char]):
            max_vowel_freq = max(max_vowel_freq, d[char])
        else:
            max_consonant_freq = max(max_consonant_freq, d[char])

    return max_vowel_freq + max_consonant_freq


def is_vowel(x):
    return x in ["a", "e", "i", "o", "u"]
