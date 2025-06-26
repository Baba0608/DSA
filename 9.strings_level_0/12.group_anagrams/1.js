function groupAnagrams(strs) {
  let d = {};
  for (let str of strs) {
    let word = str.split("").sort().join("");
    if (word in d) {
      d[word].push(str);
    } else {
      d[word] = [str];
    }
  }
  return Object.values(d);
}

function groupAnagrams2(strs) {
  let d = {};
  for (let str of strs) {
    let code = uniqueCode(str);
    if (code in d) {
      d[code].push(str);
    } else {
      d[code] = [str];
    }
  }

  return Object.values(d);
}

function uniqueCode(ele) {
  let arr = Array(26).fill(0);
  for (let char of ele) {
    let index = char.charCodeAt(0) - "a".charCodeAt(0);
    arr[index]++;
  }

  let code = "";
  for (let i = 0; i < arr.length; i++) {
    code += "#" + arr[i];
  }
  return code;
}
