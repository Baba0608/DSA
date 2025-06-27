# ------------  array of numbers  ------------------

arr = [30, 10, 50, 20, 70, 80, 40, 60]
arr.sort()
# print(arr)

# reverse
arr.sort(reverse=True)
# print(arr)


# ----------------------------------------- array of strings ----------------------------------------

strings = ["hello", "JS", "world", "PYTHON", "python", "app"]

strings.sort()
# print(strings)

# reverse
strings.sort(reverse=True)
# print(strings)

a = sorted(strings, key=len)
# print(a)

# reverse
b = sorted(strings, key=len, reverse=True)
# print(b)


#  count by vowels
def count_vowels(word):
    vowels = "aeiouAEIOU"
    count = 0
    for char in word:
        if char in vowels:
            count += 1

    return count


sort_by_vowels = sorted(strings, key=lambda word: (count_vowels(word), word.lower()))
# here first sort by vowels, then alphabetically.
# print(sort_by_vowels)


# ----------------------------------------- array of objects ----------------------------------------

members = [
    {"name": "ABC", "age": 23},
    {"name": "XYZ", "age": 21},
    {"name": "PQR", "age": 27},
    {"name": "KLM", "age": 24},
    {"name": "MNO", "age": 27},
]

sorted_by_age = sorted(members, key=lambda member: (member["age"], member["name"]))
# print(sorted_by_age)

# reverse by age
sorted_by_age_reverse = sorted(
    members, key=lambda member: (-member["age"], member["name"])
)

print(sorted_by_age_reverse)
