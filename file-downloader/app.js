const urlInput = document.getElementById("urlInput");
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", (e) => {
  let url = urlInput.value;
  downloadBtn.value = "Downloading File ...";

  fetch(url)
    .then((response) => response.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = "File";
      aTag.click();
      URL.revokeObjectURL(tempUrl);
      downloadBtn.value = "Download File";
    })
    .catch((error) => {
      alert("Failed to download");
    });
});
