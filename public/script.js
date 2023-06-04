// set up variables for HTML elements 
const entry = document.getElementById("journalEntry");
const entrylist = document.getElementById("entrylist");

var entryList = [];

// Pushes objects into entryList array
function addEntry(title, loc, mood, genre, artist, album, songs, desc) {
    let journal = {
        title,
        loc,
        mood,
        genre,
        artist,
        album,
        songs,
        desc,
        id: Date.now(),
        date: new Date().toISOString(),
    }

    entryList.push(journal);
    displayEntry(journal);
}

// Listen for when the submit button is clicked
entry.addEventListener("submit", function(event) {
    console.log(entry.elements, 'form elements')
    // console.log(event.srcElement, 'entry');
    event.preventDefault(); // Prevents form from auto-submitting
    // var title = document.getElementById('title').value
    // console.log(title);
    addEntry(
        entry.elements.entryTitle.value,
        entry.elements.entryLoc.value,
        entry.elements.entryMood.value,
        entry.elements.entryGenre.value,
        entry.elements.entryArtist.value,
        entry.elements.entryAlbum.value,
        entry.elements.entrySongs.value,
        entry.elements.entryDescription.value,
    )
})

// display the journal entry
function displayEntry(journal) {
    let item = document.createElement("li");
    item.setAttribute("data-id", journal.id);
    item.innerHTML =
      `<p><strong>${journal.name}</strong></p>
      <p><strong>${journal.loc}</strong></p>
      <p><strong>${journal.mood}</strong></p>
      <p><strong>${journal.genre}</strong></p>
      <p><strong>${journal.artist}</strong></p>
      <p><strong>${journal.album}</strong></p>
      <p><strong>${journal.songs}</strong></p>
      <p><strong>${journal.desc}</strong></p>
      `;
  }
entrylist.appendChild(item);

// Clear the value of the input once the entry has been added to the page
entry.reset();
console.log(entry.reset(), "boo");
console.log("test");

// set up delete button 
let delButton = document.createElement("button");
let delButtonText = document.createTextNode("Delete");
delButton.appendChild(delButtonText);
item.appendChild(delButton);

// Listen for when the delete button is clicked
delButton.addEventListener("click", function(event) {
    entryList.forEach(function(EntryArrayElement, EntryArrayIndex) {
        if (entryArrayElement.id == item.getAttribute('data-id')) {
            entryList.splice(entryArrayIndex, 1)
        }
    })
    console.log(entryList)
    item.remove(); // Removes the entry
})