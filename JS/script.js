document.addEventListener('DOMContentLoaded', () => {
    // 1. Page Switching
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-page');
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    // 2. Profile Photo Upload
    const pfpInp = document.getElementById('pfpInp');
    pfpInp.onchange = (e) => {
        const [file] = pfpInp.files;
        if (file) {
            const url = URL.createObjectURL(file);
            document.getElementById('mainPhoto').src = url;
            document.getElementById('miniPfp').style.backgroundImage = `url(${url})`;
            document.getElementById('miniPfp').style.backgroundSize = 'cover';
        }
    };
});

// 3. Plus Button Functions
function openPostModal() {
    document.getElementById('post-modal').style.display = 'flex';
}
function closePostModal() {
    document.getElementById('post-modal').style.display = 'none';
}
function submitPost() {
    const text = document.getElementById('postText').value;
    if (!text.trim()) return;

    const feed = document.getElementById('feed-container');
    const newPost = document.createElement('div');
    newPost.className = 'fb-card post';
    newPost.innerHTML = `<div class="post-head"><div class="pfp-stub"></div><div><strong>${document.getElementById('userNameDisplay').innerText}</strong><br><small>Just now</small></div></div><p>${text}</p>`;
    feed.prepend(newPost);
    closePostModal();
    document.getElementById('postText').value = "";
}

// 4. Overlays & Auth
function toggleOverlay(id) {
    document.getElementById(id).classList.toggle('open');
}
function handleAuth() {
    const user = document.getElementById('userInput').value;
    if(user.trim()) {
        document.getElementById('userNameDisplay').innerText = user;
        document.getElementById('auth-overlay').style.display = 'none';
    }
}