const informationTable = document.getElementById("information");
informationTable.style.display = 'none';

document.getElementById("lookup").addEventListener("click", event => {
  const value = document.getElementById("login").value;
  if (value === "") {
    return;
  }

  fetch("https://api.github.com/users/" + value)
  .then(response => response.json())
  .then(data => {
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").innerText = data.name;
    document.getElementById("blog").innerText = data.blog;
    document.getElementById("created").innerText = data.created_at;
    informationTable.style.display = '';
  }).catch(err => {
    console.error(err.message);
  });
});