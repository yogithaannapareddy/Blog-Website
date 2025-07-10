function addComment(event, commentListId) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = event.target;

    // Get the input and textarea elements
    const nameInput = form.querySelector('input[name="name"]');
    const messageTextarea = form.querySelector('textarea[name="message"]');

    // Validate input and textarea elements
    if (!nameInput || !messageTextarea) {
        console.error('Input or textarea element not found');
        return;
    }

    // Get the input values
    const name = nameInput.value.trim();
    const message = messageTextarea.value.trim();

    // Validate input values
    if (!name || !message) {
        alert('Please fill in both name and message fields');
        return;
    }

    // Create a new list item element
    const commentItem = document.createElement('li');
    commentItem.textContent = ${name}: ${message};

    // Get the comment list element
    const commentList = document.getElementById(commentListId);

    // Validate comment list element
    if (!commentList) {
        console.error(Element with id ${commentListId} not found);
        return;
    }

    // Append the list item to the comment list
    commentList.appendChild(commentItem);

    // Reset the form
    form.reset();
}
