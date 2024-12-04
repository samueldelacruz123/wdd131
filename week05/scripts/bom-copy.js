// Select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chaptersArray from localStorage or as an empty array
let chaptersArray = getChapterList() || [];

// Display existing chapters from localStorage
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Listen for a click on the Add Chapter button
button.addEventListener('click', () => {
    if (input.value !== '') { 
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    
    li.append(deleteButton);
    list.append(li);
  
    // Event listener for the delete button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Function to delete a chapter from the array and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

// Function to get chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to set chapters in localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
