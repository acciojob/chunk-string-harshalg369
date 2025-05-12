function chunkString(str, size) {
  if (str === null || typeof str !== "string" || size <= 0) return [];

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

function handleChunk() {
  const inputStr = document.getElementById("inputString").value;
  const chunkSize = parseInt(document.getElementById("chunkSize").value);

  const chunks = chunkString(inputStr, chunkSize);
  document.getElementById("output").textContent = JSON.stringify(chunks);
}
