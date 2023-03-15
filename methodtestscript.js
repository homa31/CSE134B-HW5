const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");
const responseDiv = document.getElementById("response");

const date = new Date();
document.getElementById("date").value = date.toString();

postBtn.addEventListener("click", () => {
    const id = document.getElementById("id").value;
    const article_name = document.getElementById("article_name").value;
    const article_body = document.getElementById("article_body").value;
    const data = {
        id: id,
        article_name: article_name,
        article_body: article_body,
        date: date.toString()
    };
    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => formatResponse(data))
    .catch(error => console.error(error));
});

getBtn.addEventListener("click", () => {
    const id = document.getElementById("id").value;
    fetch(`https://httpbin.org/get?id=${id}`)
    .then(response => response.json())
    .then(data => formatResponse(data))
    .catch(error => console.error(error));
});

putBtn.addEventListener("click", () => {
    const id = document.getElementById("id").value;
    const article_name = document.getElementById("article_name").value;
    const article_body = document.getElementById("article_body").value;
    const data = {
        id: id,
        article_name: article_name,
        article_body: article_body,
        date: date.toString()
    };
    fetch(`https://httpbin.org/put?id=${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => formatResponse(data))
    .catch(error => console.error(error));
});

deleteBtn.addEventListener("click", () => {
    const id = document.getElementById("id").value;
    fetch(`https://httpbin.org/delete?id=${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => formatResponse(data))
    .catch(error => console.error(error));
});

function formatResponse(data) {
  console.log(data);
    let html = "";
    for (const key in data) {
      html += `<tr><th colspan="2">${key}</th></tr>`;
      if (typeof data[key] === "object") {
          for (const subkey in data[key]) {
              html += `<tr><td>${subkey}</td><td>${data[key][subkey]}</td></tr>`;
          }
      } else {
          html += `<tr><td>${key}</td><td>${data[key]}</td></tr>`;
      }
    }
    responseDiv.innerHTML = `<table>${html}</table>`;
}
