const maxMediaItems = 232;

const mediaFiles = [
    // Add your images and videos here, one item per line.
    // Example image:
    // { type: 'image', src: 'images/1.HEIC', title: 'Photo 1' },
    // Example video:
    // { type: 'video', src: 'images/my-video.mp4', title: 'Video 1' },
    
    { type: 'image', src: 'images/1.jpg', title: '1' },
    { type: 'video', src: 'images/2.MP4', title: 'Video 1' },
    { type: 'video', src: 'images/3.MP4', title: 'Video 2' },
    { type: 'image', src: 'images/4.jpg', title: '4' },
    { type: 'image', src: 'images/5.jpg', title: '5' },
    { type: 'image', src: 'images/6.jpg', title: '6' },
    { type: 'image', src: 'images/7.jpg', title: '7' },
    { type: 'image', src: 'images/8.jpg', title: '8' },
    { type: 'image', src: 'images/9.JPG', title: '9' },
    { type: 'image', src: 'images/10.JPG', title: '10' },
    { type: 'image', src: 'images/11.JPG', title: '11' },
    { type: 'video', src: 'images/12.mp4', title: 'Video 3' },
    { type: 'image', src: 'images/13.jpg', title: '13' },
    { type: 'image', src: 'images/14.jpg', title: '14' },
    { type: 'video', src: 'images/15.MOV', title: 'Video 4' },
    { type: 'video', src: 'images/16.MOV', title: 'Video 5' },
    { type: 'image', src: 'images/17.JPG', title: '17' },
    { type: 'image', src: 'images/18.JPG', title: '18' },
    { type: 'image', src: 'images/19.JPG', title: '19' },
    { type: 'image', src: 'images/20.JPG', title: '20' },
    { type: 'image', src: 'images/21.JPG', title: '21' },
    { type: 'image', src: 'images/22.JPG', title: '22' },
    { type: 'image', src: 'images/23.JPG', title: '23' },
    { type: 'image', src: 'images/24.JPG', title: '24' },
    { type: 'image', src: 'images/25.JPG', title: '25' },
    { type: 'image', src: 'images/26.JPG', title: '26' },
    { type: 'image', src: 'images/27.JPG', title: '27' },
    { type: 'video', src: 'images/28.MOV', title: 'Video 6' },
    { type: 'image', src: 'images/29.JPG', title: '29' },
    { type: 'image', src: 'images/30.JPG', title: '30' },
    { type: 'image', src: 'images/31.JPG', title: '31' },
    { type: 'image', src: 'images/32.JPG', title: '32' },
    { type: 'video', src: 'images/33.MP4', title: 'Video 7' },
    { type: 'video', src: 'images/34.mp4', title: 'Video 8' },
    { type: 'image', src: 'images/35.JPG', title: '35' },
    { type: 'image', src: 'images/36.JPG', title: '36' },
    { type: 'video', src: 'images/37.MOV', title: 'Video 9' },
    { type: 'video', src: 'images/38.MOV', title: 'Video 10' },
    { type: 'image', src: 'images/39.JPG', title: '39' },
    { type: 'image', src: 'images/40.JPG', title: '40' },
    { type: 'image', src: 'images/41.JPG', title: '41' },
    { type: 'image', src: 'images/42.JPG', title: '42' },
    { type: 'image', src: 'images/43.JPG', title: '43' },
    { type: 'image', src: 'images/44.JPG', title: '44' },
    { type: 'image', src: 'images/45.JPG', title: '45' },
    { type: 'image', src: 'images/46.JPG', title: '46' },
    { type: 'image', src: 'images/47.JPG', title: '47' },
    { type: 'image', src: 'images/48.JPG', title: '48' },
    { type: 'image', src: 'images/49.JPG', title: '49' },
    { type: 'image', src: 'images/50.JPG', title: '50' },
    { type: 'image', src: 'images/51.JPG', title: '51' },
    { type: 'image', src: 'images/52.JPG', title: '52' },
    { type: 'image', src: 'images/53.JPG', title: '53' },
    { type: 'image', src: 'images/54.JPG', title: '54' },
    { type: 'video', src: 'images/55.MOV', title: 'Video 11' },
    { type: 'image', src: 'images/56.JPG', title: '56' },
    { type: 'image', src: 'images/57.JPG', title: '57' },
    { type: 'image', src: 'images/58.JPG', title: '58' },
    { type: 'image', src: 'images/59.JPG', title: '59' },
    { type: 'image', src: 'images/60.JPG', title: '60' },
    { type: 'image', src: 'images/61.JPG', title: '61' },
    { type: 'image', src: 'images/62.JPG', title: '62' },
    { type: 'image', src: 'images/63.JPG', title: '63' },
    { type: 'image', src: 'images/64.JPG', title: '64' },
    { type: 'image', src: 'images/65.JPG', title: '65' },
    { type: 'image', src: 'images/66.JPG', title: '66' },
    { type: 'image', src: 'images/67.JPG', title: '67' },
    { type: 'image', src: 'images/68.JPG', title: '68' },
    { type: 'image', src: 'images/69.JPG', title: '69' },
    { type: 'image', src: 'images/70.JPG', title: '70' },
    { type: 'video', src: 'images/71.MP4', title: 'Video 12' },
    { type: 'image', src: 'images/72.JPG', title: '72' },
    { type: 'image', src: 'images/73.JPG', title: '73' },
    { type: 'video', src: 'images/74.MP4', title: 'Video 13' },
    { type: 'image', src: 'images/75.JPG', title: '75' },
    { type: 'image', src: 'images/76.JPG', title: '76' },
    { type: 'image', src: 'images/77.JPG', title: '77' },
    { type: 'image', src: 'images/78.JPG', title: '78' },
    { type: 'image', src: 'images/79.JPG', title: '79' },
    { type: 'image', src: 'images/80.JPG', title: '80' },
    { type: 'image', src: 'images/81.JPG', title: '81' },
    { type: 'image', src: 'images/82.JPG', title: '82' },
    { type: 'video', src: 'images/83.mp4', title: 'Video 14' },
    { type: 'image', src: 'images/84.JPG', title: '84' },
    { type: 'image', src: 'images/85.JPG', title: '85' },
    { type: 'image', src: 'images/86.JPG', title: '86' },
    { type: 'image', src: 'images/87.JPG', title: '87' },
    { type: 'image', src: 'images/88.JPG', title: '88' },
    { type: 'image', src: 'images/89.JPG', title: '89' },
    { type: 'video', src: 'images/90.MOV', title: 'Video 15' },
    { type: 'video', src: 'images/91.MP4', title: 'Video 16' },
    { type: 'image', src: 'images/92.JPG', title: '92' },
    { type: 'video', src: 'images/93.MOV', title: 'Video 17' },
    { type: 'image', src: 'images/94.JPG', title: '94' },
    { type: 'image', src: 'images/95.JPG', title: '95' },
    { type: 'image', src: 'images/96.JPG', title: '96' },
    { type: 'image', src: 'images/97.JPG', title: '97' },
    { type: 'image', src: 'images/98.JPG', title: '98' },
    { type: 'image', src: 'images/99.JPG', title: '99' },
    { type: 'image', src: 'images/100.JPG', title: '100' },
    { type: 'image', src: 'images/101.JPG', title: '101' },
    { type: 'image', src: 'images/102.JPG', title: '102' },
    { type: 'image', src: 'images/103.JPG', title: '103' },
    { type: 'image', src: 'images/104.JPG', title: '104' },
    { type: 'image', src: 'images/105.JPG', title: '105' },
    { type: 'image', src: 'images/106.JPG', title: '106' },
    { type: 'image', src: 'images/107.JPG', title: '107' },
    { type: 'image', src: 'images/108.JPG', title: '108' },
    { type: 'image', src: 'images/109.JPG', title: '109' },
    { type: 'image', src: 'images/110.JPG', title: '110' },
    { type: 'video', src: 'images/111.MOV', title: 'Video 18' },
    { type: 'image', src: 'images/112.JPG', title: '112' },
    { type: 'image', src: 'images/113.JPG', title: '113' },
    { type: 'image', src: 'images/114.JPG', title: '114' },
    { type: 'image', src: 'images/115.JPG', title: '115' },
    { type: 'image', src: 'images/116.JPG', title: '116' },
    { type: 'image', src: 'images/117.JPG', title: '117' },
    { type: 'image', src: 'images/118.JPG', title: '118' },
    { type: 'image', src: 'images/119.JPG', title: '119' },
    { type: 'image', src: 'images/120.JPG', title: '120' },
    { type: 'image', src: 'images/121.JPG', title: '121' },
    { type: 'image', src: 'images/122.JPG', title: '122' },
    { type: 'image', src: 'images/123.JPG', title: '123' },
    { type: 'image', src: 'images/124.JPG', title: '124' },
    { type: 'video', src: 'images/125.MP4', title: 'Video 19' },
    { type: 'video', src: 'images/126.mp4', title: 'Video 20' },
    { type: 'image', src: 'images/127.JPG', title: '127' },
    { type: 'image', src: 'images/128.JPG', title: '128' },
    { type: 'image', src: 'images/129.JPG', title: '129' },
    { type: 'image', src: 'images/130.JPG', title: '130' },
    { type: 'image', src: 'images/131.JPG', title: '131' },
    { type: 'image', src: 'images/132.JPG', title: '132' },
    { type: 'image', src: 'images/133.JPG', title: '133' },
    { type: 'image', src: 'images/134.JPG', title: '134' },
    { type: 'image', src: 'images/135.JPG', title: '135' },
    { type: 'image', src: 'images/136.JPG', title: '136' },
    { type: 'image', src: 'images/137.JPG', title: '137' },
    { type: 'video', src: 'images/138.mp4', title: 'Video 21' },
    { type: 'image', src: 'images/139.JPG', title: '139' },
    { type: 'image', src: 'images/140.JPG', title: '140' },
    { type: 'image', src: 'images/141.JPG', title: '141' },
    { type: 'image', src: 'images/142.JPG', title: '142' },
    { type: 'image', src: 'images/143.JPG', title: '143' },
    { type: 'image', src: 'images/144.JPG', title: '144' },
    { type: 'video', src: 'images/145.mp4', title: 'Video 22' },
    { type: 'image', src: 'images/146.JPG', title: '146' },
    { type: 'image', src: 'images/147.JPG', title: '147' },
    { type: 'image', src: 'images/148.JPG', title: '148' },
    { type: 'video', src: 'images/149.MP4', title: 'Video 23' },
    { type: 'image', src: 'images/150.JPG', title: '150' },
    { type: 'image', src: 'images/151.JPG', title: '151' },
    { type: 'video', src: 'images/152.MP4', title: 'Video 24' },
    { type: 'image', src: 'images/153.JPG', title: '153' },
    { type: 'image', src: 'images/154.JPG', title: '154' },
    { type: 'video', src: 'images/155.MP4', title: 'Video 25' },
    { type: 'image', src: 'images/156.JPG', title: '156' },
    { type: 'image', src: 'images/157.JPG', title: '157' },
    { type: 'image', src: 'images/158.JPG', title: '158' },
    { type: 'image', src: 'images/159.JPG', title: '159' },
    { type: 'image', src: 'images/160.JPG', title: '160' },
    { type: 'image', src: 'images/161.JPG', title: '161' },
    { type: 'image', src: 'images/162.JPG', title: '162' },
    { type: 'image', src: 'images/163.JPG', title: '163' },
    { type: 'image', src: 'images/164.JPG', title: '164' },
    { type: 'image', src: 'images/165.JPG', title: '165' },
    { type: 'image', src: 'images/166.JPG', title: '166' },
    { type: 'image', src: 'images/167.JPG', title: '167' },
    { type: 'image', src: 'images/168.JPG', title: '168' },
    { type: 'image', src: 'images/169.JPG', title: '169' },
    { type: 'image', src: 'images/170.JPG', title: '170' },
    // Add more items below. You can have up to 232 entries.
];

const pageTitles = [
    // Add page titles here in order of the page spreads.
    // For example:
    'Onderweg',
    'Nürnberg',
    'Nürnberg',
    'Nürnberg',
    'Oostenrijk',
    'Oostenrijk',
    'Oostenrijk',
    'Oostenrijk',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Slovenië',
    'Postojna Cave',
    'Postojna Cave',
    'Postojna Cave',
    'Postojna Cave',
    'Postojna Cave',
    'Ljubljana',
    'Ljubljana',
    'Ljubljana',
    'Ljubljana',
    'Ljubljana/Regensburg',
    'Regensburg',
    'Regensburg/Thuis',
];

function buildPages(mediaItems, titles = []) {
    const pages = [];
    let pageIndex = 0;

    for (let i = 0; i < mediaItems.length; i += 4) {
        pages.push({
            left: { entries: mediaItems.slice(i, i + 2) },
            right: { entries: mediaItems.slice(i + 2, i + 4) },
            title: titles[pageIndex] || `Page ${pageIndex + 1}`
        });
        pageIndex += 1;
    }
    return pages;
}

if (mediaFiles.length > maxMediaItems) {
    throw new Error(`mediaFiles contains ${mediaFiles.length} items, but the limit is ${maxMediaItems}.`);
}

// Generate table of contents from unique page titles
function generateTableOfContents(titles) {
    const toc = [];
    let currentTitle = null;
    let pageNum = 1; // Page numbering starts from 1 (TOC is page 0)

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        if (title !== currentTitle) {
            toc.push({ title, page: pageNum });
            currentTitle = title;
        }
        pageNum += 1;
    }

    return toc;
}

const pages = buildPages(mediaFiles, pageTitles);
const tableOfContents = generateTableOfContents(pageTitles);

let currentPage = 0; // 0 is the TOC page
let currentLightboxIndex = 0;
let bookOpened = false;

function getFlatMedia() {
    return pages.flatMap(page => [
        ...page.left.entries,
        ...page.right.entries
    ].filter(entry => entry.type === 'image' || entry.type === 'video'));
}

// Initialize book
function initBook() {
    const bookCover = document.getElementById('bookCover');
    bookCover.addEventListener('click', openBook);
}

// Open book from cover
function openBook() {
    bookOpened = true;
    const bookCover = document.getElementById('bookCover');
    const book = document.getElementById('book');

    bookCover.style.display = 'none';
    book.style.display = 'block';

    renderPage(0); // Start with table of contents
}

// Render table of contents page
function renderTableOfContents() {
    const bookPages = document.querySelector('.book-pages');
    const pageTitle = document.getElementById('pageTitle');
    const pageNum_element = document.getElementById('pageNum');
    const pageIndicator = document.getElementById('pageIndicator');
    const tocContainer = document.getElementById('tocContainer');

    // Hide the regular pages and show TOC
    bookPages.style.display = 'none';
    tocContainer.style.display = 'flex';

    pageTitle.textContent = 'Table of Contents';

    // Create TOC content
    tocContainer.innerHTML = `
        <div class="toc-content">
            <h2 class="toc-title">Contents</h2>
            <ul class="toc-entries">
                ${tableOfContents.map(entry => `
                    <li class="toc-entry" onclick="goToPage(${entry.page})">
                        <span class="toc-entry-title">${entry.title}</span>
                        <span class="toc-entry-page">${entry.page}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    pageNum_element.textContent = '0';
    pageIndicator.textContent = `Table of Contents`;
}

// Render a specific page (with TOC as page 0)
function renderPage(pageNum) {
    currentPage = pageNum;

    // If page 0, show table of contents
    if (pageNum === 0) {
        renderTableOfContents();
        return;
    }

    // Otherwise render regular book page (adjust index for TOC)
    const pageIndex = pageNum - 1;
    const page = pages[pageIndex];
    const bookPages = document.querySelector('.book-pages');
    const tocContainer = document.getElementById('tocContainer');
    const leftPage = document.getElementById('leftPage');
    const rightPage = document.getElementById('rightPage');
    const pageNum_element = document.getElementById('pageNum');
    const pageIndicator = document.getElementById('pageIndicator');
    const pageTitle = document.getElementById('pageTitle');
    const flatMedia = getFlatMedia();

    // Show pages and hide TOC
    bookPages.style.display = 'grid';
    tocContainer.style.display = 'none';

    if (pageTitle) {
        pageTitle.textContent = page.title || `Page ${pageNum}`;
    }

    document.querySelectorAll('.book-pages video').forEach(video => {
        video.pause();
    });

    leftPage.innerHTML = '';
    rightPage.innerHTML = '';

    page.left.entries.forEach(entry => {
        leftPage.appendChild(createPageEntry(entry, flatMedia));
    });

    page.right.entries.forEach(entry => {
        rightPage.appendChild(createPageEntry(entry, flatMedia));
    });

    const currentVideos = [...leftPage.querySelectorAll('video'), ...rightPage.querySelectorAll('video')];
    currentVideos.forEach(video => {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        video.play().catch(() => {});
    });

    const totalPages = pages.length + 1; // +1 for TOC
    pageNum_element.textContent = pageNum;
    pageIndicator.textContent = `Page ${pageNum} of ${totalPages}`;
}

function createPageEntry(entry, flatMedia) {
    const index = flatMedia.indexOf(entry);
    return createMediaEntry(entry, index);
}

function createMediaEntry(item, index) {
    const container = document.createElement('div');
    container.className = `media-item ${item.type === 'video' ? 'video-item' : ''}`;
    container.onclick = () => openLightbox(index);

    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        container.appendChild(img);
    } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.preload = 'metadata';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        container.appendChild(video);
    }

    return container;
}

// Navigate to next page
function nextPage() {
    const totalPages = pages.length + 1; // +1 for TOC
    if (currentPage < totalPages - 1) {
        renderPage(currentPage + 1);
    }
}

// Navigate to previous page
function previousPage() {
    if (currentPage > 0) {
        renderPage(currentPage - 1);
    }
}

// Navigate to a specific page (used by TOC clicks)
function goToPage(pageNum) {
    renderPage(pageNum);
}

// Open lightbox
function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const media = getFlatMedia();
    const item = media[index];

    document.getElementById('lightbox-image').style.display = 'none';
    document.getElementById('lightbox-video').style.display = 'none';

    if (item.type === 'image') {
        const img = document.getElementById('lightbox-image');
        img.src = item.src;
        img.style.display = 'block';
    } else if (item.type === 'video') {
        const video = document.getElementById('lightbox-video');
        video.src = item.src;
        video.style.display = 'block';
        video.load();
    }

    document.getElementById('image-counter').textContent = `${index + 1} / ${media.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';

    const video = document.getElementById('lightbox-video');
    video.pause();
    video.currentTime = 0;
}

// Navigate to next media in lightbox
function nextMedia() {
    const media = getFlatMedia();
    currentLightboxIndex = (currentLightboxIndex + 1) % media.length;
    openLightbox(currentLightboxIndex);
}

// Navigate to previous media in lightbox
function prevMedia() {
    const media = getFlatMedia();
    currentLightboxIndex = (currentLightboxIndex - 1 + media.length) % media.length;
    openLightbox(currentLightboxIndex);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');

    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextMedia();
        if (e.key === 'ArrowLeft') prevMedia();
        if (e.key === 'Escape') closeLightbox();
    } else if (bookOpened) {
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') previousPage();
    }
});

// Close lightbox when clicking on background
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initBook);
