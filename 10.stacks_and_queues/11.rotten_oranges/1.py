from collections import deque


def orangesRotting(grid):
    rows = len(grid)
    cols = len(grid[0])
    queue = deque()
    fresh = 0

    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 2:
                queue.append((i, j))
            elif grid[i][j] == 1:
                fresh += 1

    time = 0
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    while queue and fresh > 0:
        for _ in range(len(queue)):
            i, j = queue.popleft()

            for dx, dy in directions:
                x, y = i + dx, j + dy
                if 0 <= x < rows and 0 <= y < cols and grid[x][y] == 1:
                    grid[x][y] = 2
                    fresh -= 1
                    queue.append((x, y))

        time += 1

    return time if fresh == 0 else -1
