// This Script Requests The Server To Generate A Link
const result = document.getElementById("result");
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const link = document.getElementById("link").value;
  const regex = /^(https?:\/\/)?([a-zA-Z0-9\-\.]+)(\.[a-z]{2,})(\/[^\s]*)?$/;

  if (!regex.test(link)) {
    result.value = "Invalid URL";
    return;
  }

 
  fetch("/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: link,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").value = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
      
    });

  console.log(link);
});
// -------------------------------------------------------------------------

// This Script Copies The Generated Link To The Clipboard
document.getElementById("result").addEventListener("click", function () {
  if (!navigator.clipboard) {
    alert("Clipboard API Not Supported");
    return;
  }
  if (document.getElementById("result").value === "") {
    return;
  }
  navigator.clipboard
    .writeText(document.getElementById("result").value)
    .then(() => {
      alert("Link Copied To Clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy value to clipboard:", error);
    });
});
// -------------------------------------------------------------------------
