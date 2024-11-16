// Select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Listen for a click on the Add Chapter button
button.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text content of the list item and delete button
        li.textContent = input.value;  // The text of the list item
        deleteButton.textContent = '❌';  // The text of the delete button

        // Append the delete button to the list item
        li.append(deleteButton);
        // Append the list item to the list (ul)
        list.append(li);

        // Clear the input field after adding the task
        input.value = '';

        // Focus back on the input field for the next entry
        input.focus();

        // Add event listener to the delete button to remove the task
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);  // Remove the list item when delete button is clicked
            input.focus();  // Return focus to the input field after deleting
        });
    } else {
        // If input is empty, return focus to the input field and do nothing
        input.focus();
    }
});
