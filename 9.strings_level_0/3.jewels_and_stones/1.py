def num_jewels_in_stones(jewels, stones):
    jewels_set = set()
    for jewel in jewels:
        jewels_set.add(jewel)

    count = 0
    for stone in stones:
        if stone in jewels_set:
            count += 1

    return count
