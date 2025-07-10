function addComment(event, commentListId) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input').value;
  const message = form.querySelector('textarea').value;

  const commentItem = document.createElement('li');
  commentItem.textContent = ${name}: ${message};

  document.getElementById(commentListId).appendChild(commentItem);

  form.reset();
}