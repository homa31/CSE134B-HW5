const postList = document.querySelector('#post-list');
const addButtonEl = document.querySelector('#add-button');

let posts = [];

function renderPosts() {
  postList.innerHTML = '';
  posts.forEach((post, index) => {
    const row = document.createElement('tr');
    const title = document.createElement('td');
    const date = document.createElement('td');
    const summary = document.createElement('td');
    const actions = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    title.textContent = post.title;
    date.textContent = post.date;
    summary.textContent = post.summary;
    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';

    editButton.addEventListener('click', () => {
      editPost(index);
    });

    deleteButton.addEventListener('click', () => {
      deletePost(index);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    row.appendChild(title);
    row.appendChild(date);
    row.appendChild(summary);
    row.appendChild(actions);

    postList.appendChild(row);
  });
}

function addPost() {
  const title = prompt('Enter post title:');
  const date = prompt('Enter post date:');
  const summary = prompt('Enter post summary:');

  if (title && date && summary) {
    const post = { title, date, summary };
    posts.push(post);
    renderPosts();
    savePosts();
  }
}

function editPost(index) {
  const post = posts[index];
  const title = prompt('Enter new post title:', post.title);
  const date = prompt('Enter new post date:', post.date);
  const summary = prompt('Enter new post summary:', post.summary);

  if (title && date && summary) {
    posts[index] = { title, date, summary };
    renderPosts();
    savePosts();
  }
}

function deletePost(index) {
  if (confirm('Are you sure you want to delete this post?')) {
    posts.splice(index, 1);
    renderPosts();
    savePosts();
  }
}

function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
  const savedPosts = localStorage.getItem('posts');
  if (savedPosts) {
    posts = JSON.parse(savedPosts);
  }
  renderPosts();
}

addButtonEl.addEventListener('click', addPost);

loadPosts();

const postDialogEl = document.querySelector('#post-dialog');
const postFormEl = postDialogEl.querySelector('form');
const titleInputEl = postFormEl.querySelector('#title-input');
const dateInputEl = postFormEl.querySelector('#date-input');
const summaryInputEl = postFormEl.querySelector('#summary-input');
const cancelButtonEl = postFormEl.querySelector('#cancel-button');

function addPost() {
  // Open the dialog
  postDialogEl.showModal();

  // Clear the input fields
  titleInputEl.value = '';
  dateInputEl.value = '';
  summaryInputEl.value = '';

  // Handle form submission
  postFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = titleInputEl.value;
    const date = dateInputEl.value;
    const summary = summaryInputEl.value;

    if (title && date && summary) {
      const post = { title, date, summary };
      posts.push(post);
      renderPosts();
      savePosts();
      postDialogEl.close();
    }
  });

  // Handle cancel button click
  cancelButtonEl.addEventListener('click', () => {
    postDialogEl.close();
  });
}

function editPost(index) {
  const post = posts[index];

  // Open the dialog
  postDialogEl.showModal();

  // Set the input field values
  titleInputEl.value = post.title;
  dateInputEl.value = post.date;
  summaryInputEl.value = post.summary;

  // Handle form submission
  postFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = titleInputEl.value;
    const date = dateInputEl.value;
    const summary = summaryInputEl.value;

    if (title && date && summary) {
      posts[index] = { title, date, summary };
      renderPosts();
      savePosts();
      postDialogEl.close();
    }
  });

  // Handle cancel button click
  cancelButtonEl.addEventListener('click', () => {
    postDialogEl.close();
  });
}