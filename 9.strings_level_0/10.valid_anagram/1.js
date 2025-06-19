function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let d = {};
  for (let i = 0; i < s.length; i++) {
    d[s[i]] = (d[s[i]] || 0) + 1;
    d[t[i]] = (d[t[i]] || 0) - 1;
  }

  for (let key in d) {
    if (d[key] !== 0) return false;
  }

  return true;
}
