fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
  .then(response => response.json())
  .then(paintings => {
    const paintingList = document.getElementById('paintings');

    paintings.forEach(painting => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');

      td1.textContent = painting.name;
      td2.textContent = painting.year;
      td3.textContent = painting.artist;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      paintingList.appendChild(tr);
    });
  }).catch(err => {
    console.error(err);
  });