// Sidebar Toggle
const menuIcon = document.querySelector('.left-h i');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  document.querySelector('.contents').classList.toggle('expanded');
});

// Dropdown in Settings
const settingsBtn = document.querySelector('.settings-btn');
const dropdown = document.querySelector('.dropdown');

settingsBtn.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.settings-container')) {
    dropdown.classList.remove('open');
  }
});

// Comment Section Functionality
const commentButtons = document.querySelectorAll('.comment-section button');

commentButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const commentInput = e.target.previousElementSibling;
    if (commentInput.value.trim()) {
      alert(`Comment added: ${commentInput.value}`);
      commentInput.value = '';
    } else {
      alert('Please enter a comment.');
    }
  });
});

// Video Upload
const uploadForm = document.querySelector('.video-upload form');

if (uploadForm) {
  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const videoTitle = uploadForm.querySelector('input[type="text"]').value;
    const videoFile = uploadForm.querySelector('input[type="file"]').files[0];
    if (videoTitle && videoFile) {
      alert(`Video uploaded: ${videoTitle}`);
      uploadForm.reset();
    } else {
      alert('Please provide a title and select a video file.');
    }
  });
}

// Footer Social Icon Interaction
const socialIcons = document.querySelectorAll('footer .social-icons i');

socialIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    alert(`Redirecting to ${icon.getAttribute('class')}...`);
  });
});

// Video Actions (Like, Dislike)
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach((card) => {
  const videoActions = document.createElement('div');
  videoActions.className = 'video-actions';

  const likeButton = document.createElement('button');
  likeButton.textContent = 'Like';
  likeButton.addEventListener('click', () => alert('You liked this video.'));

  const dislikeButton = document.createElement('button');
  dislikeButton.textContent = 'Dislike';
  dislikeButton.addEventListener('click', () => alert('You disliked this video.'));

  videoActions.appendChild(likeButton);
  videoActions.appendChild(dislikeButton);
  card.querySelector('.video-info').appendChild(videoActions);
});
