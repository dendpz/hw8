// Fetch the data, this is JSON.
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  // Include .json since this is coming from JSON source
  .then(response => response.json())
  .then(paintings => {
    // Identify the HTML table to call-back
    const htmlTable = document.getElementById('paintings');

    // Use a forEach loop to insert rows for each object in the array using .insertRow and .insertCell. I like this method, it looks cleaner.
    paintings.forEach(painting => {
      const row = htmlTable.insertRow(); // Creates a row <tr> element in HTML table
      const paintName = row.insertCell(0); // Creates a cell <td> element in HTML table
      const paintYear = row.insertCell(1);
      const paintArtist = row.insertCell(2);

      paintName.textContent = painting.name;
      paintYear.textContent = painting.year;
      paintArtist.textContent = painting.artist;
    /* Alternative...basically writing HTML code in .innerHTML
      const paintElem = document.createElement("tr");
      pantElem.innerHTML = 
        ` <td>${paintElem.name}</td>
        ...
        ...
        etc.
    */
    });
  })
.catch(err => {
  console.error(err.message);
});