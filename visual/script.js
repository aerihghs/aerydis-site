/**
 * note to myself
 * 1. to add photo entry: add object in posts with { type: 'photo', url: '...', caption: '...' }
 * 2. To add text entry: add object in posts with { type: 'text', content: '...' }
 */

function formatCaption(text) {
    return text.split('\n').map((line, index) => {
        line = line.trim();
        if (!line) return '';
        if (index === 0) return `<span class="enter-symbol">↳</span> ${line}`;
        return line;
    }).join('\n');
}

const posts = [
//     {
//         type: 'text',
//         date: 'January 1, 2026',
//         time: '00:00',
//         content: "text post example"
//     },

//     {
//         type: 'photo',
//         date: 'January 1, 2026',
//         time: '00:00',
//         url: 'photos/photo.webp',
//         content: formatCaption(`photo caption example`)
//     },
    {
        type: 'text',
        date: 'May 21, 2026',
        time: '19:38',
        content: "i am once again showing mark how to edit this webpage"
    },
    {
        type: 'text',
        date: 'May 21, 2026',
        time: '17:35',
        content: "i love vagueposting sorry"
    },
    {
        type: 'text',
        date: 'May 21, 2026',
        time: '17:33',
        content: "i must have liked you a lot, to have hated you for so long"
    },
    {
        type: 'text',
        date: 'May 19, 2026',
        time: '21:29',
        content: "i love python so much python is awesome"
    },
    {
        type: 'photo',
        date: 'May 17, 2026',
        time: '12:20',
        url: 'photos/202605171220.webp',
        content: formatCaption("danced to redred in front of 250 people thank you mark")
    },
    {
        type: 'photo',
        date: 'May 15, 2026',
        time: '13:49',
        url: 'photos/202605151349.webp',
        content: formatCaption("delayed")
    },
    {
        type: 'photo',
        date: 'May 15, 2026',
        time: '10:05',
        url: 'photos/202605151005.webp',
        content: formatCaption("stone museum")
    },
    {
        type: 'photo',
        date: 'May 13, 2026',
        time: '14:58',
        url: 'photos/202605131458.webp',
        content: formatCaption("?")
    },
    {
        type: 'photo',
        date: 'May 13, 2026',
        time: '10:01',
        url: 'photos/202605131001.webp',
        content: formatCaption("osulloc with my friends")
    },
    {
        type: 'photo',
        date: 'May 12, 2026',
        time: '13:50',
        url: 'photos/202605121350.webp',
        content: formatCaption("sea2")
    },
    {
        type: 'photo',
        date: 'May 12, 2026',
        time: '13:42',
        url: 'photos/202605121342.webp',
        content: formatCaption("sea")
    },
    {
        type: 'photo',
        date: 'May 12, 2026',
        time: '08:16',
        url: 'photos/202605120816.webp',
        content: formatCaption("jeju island")
    },
    {
        type: 'text',
        date: 'May 11, 2026',
        time: '14:04',
        content: "Mark you're a real one. If I survive The Masquerade(dancing to REDRED in front of 250 people for not 2 minutes) I will peel you mangos for four hours each day and owe you my firstborn child and build a minecraft shrine in your honor."
    },
    {
        type: 'photo',
        date: 'May 5, 2026',
        time: '19:23',
        url: 'photos/2026050502.webp',
        content: formatCaption("a cafe I went to. It's actually so pretty wtf.")
    },
    {
        type: 'photo',
        date: 'May 5, 2026',
        time: '18:53',
        url: 'photos/2026050501.webp',
        content: formatCaption("white azalea")
    },
    {
        type: 'photo',
        date: 'April 13, 2026',
        time: '22:29',
        url: 'photos/20260413.webp',
        content: formatCaption("What. It works. I am writing JavaScript bro I am crying tears of joy. This is the joy of being a developer. I could write JavaScript until I die of old age. I will write JavaScript six feet under until humanity colonizes Mars. This is my life's purpose. It is to write JavaScript. I have dreamed of this moment since the moment I was conceived. I even feel a strong love for Chrome, which I actively hated until ten minutes ago. JavaScript. JavaScript. JavaScript. Through `${ERT} min read` I can once again feel my love for the world.")
    }
];

function renderFeed() {
    const feedElement = document.getElementById('feed');

    posts.forEach(post => {
        // create article element for each post
        const article = document.createElement('article');
        article.className = 'post';

        // date/time
        let postHTML = `
            <div class="post-meta">
                <span class="post-date">${post.date}</span>
                <span class="post-time">${post.time}</span>
                <div class="line"></div>
            </div>
        `;

        // content
        if (post.type === 'photo') {
            postHTML += `
                <div class="photo-container">
                    <img src="${post.url}" alt="Post image" loading="lazy">
                </div>
                <p class="caption">${post.content}</p>
            `;
        } else {
            postHTML += `
                <div class="text-post-content">
                    ${post.content}
                </div>
            `;
        }

        article.innerHTML = postHTML;
        feedElement.appendChild(article);
    });
}

window.onload = function() {
    renderFeed();
    initThemeToggle();
};

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.toggle('light-mode', currentTheme === 'light');
    updateToggleIcon(themeToggle, currentTheme);

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.contains('light-mode');
        const newTheme = isLight ? 'dark' : 'light';
        
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(themeToggle, newTheme);
    });
}

function updateToggleIcon(button, theme) {
    button.textContent = theme === 'light' ? '~｡˚𖤓˚｡~' : '⋆.｡˚⏾˚｡.⋆ ';
}
