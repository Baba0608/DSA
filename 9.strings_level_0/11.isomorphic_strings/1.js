function isomorphic(s, t) {
  if (s.length !== t.length) return false;
  return iso(s, t) && iso(t, s);
}

function iso(s, t) {
  let d = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in d) {
      if (d[s[i]] !== t[i]) return false;
    } else {
      d[s[i]] = t[i];
    }
  }
  return true;
}

function iso2(s, t) {
  let d = {};
  for (let i = 0; i < s.length; i++) {
    if (d[s[i]] && d[s[i]] !== t[i]) return false;

    d[s[i]] = t[i];
  }
  return true;
}
