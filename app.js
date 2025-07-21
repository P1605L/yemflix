document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('fade-out');
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 1500);

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Search Toggle
    const searchBtn = document.querySelector('.search-btn');
    const searchContainer = document.querySelector('.search-container');
    
    searchBtn.addEventListener('click', function() {
        searchContainer.classList.toggle('active');
    });

    // Hero Slider
    const heroSlides = [
        {
            image: 'images/hero1.jpg',
            title: 'Avengers: Endgame',
            description: 'The epic conclusion to the Infinity Saga.'
        },
        {
            image: 'images/hero2.jpg',
            title: 'Spider-Man: No Way Home',
            description: 'The multiverse unleashes new threats.'
        },
        {
            image: 'images/hero3.jpg',
            title: 'The Batman',
            description: 'A new dark knight rises in Gotham.'
        }
    ];

    const heroSlider = document.querySelector('.hero-slider');
    heroSlides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'hero-slide';
        slideElement.style.backgroundImage = `url(${slide.image})`;
        if (index === 0) slideElement.classList.add('active');
        heroSlider.appendChild(slideElement);
    });

    let currentSlide = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);

    // Sample Movie Data
    const movies = [
        { id: 1, title: 'The Roundup', year: 2021, rating: 8.0, duration: '2h 35m', image: 'web_yem-flix/images/images.jpeg', description: 'Feature adaptation of Frank Herbert\'s science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.' },
        { id: 2, title: 'No Time to Die', year: 2021, rating: 7.3, duration: '2h 43m', image: 'images/movie2.jpg', description: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help.' },
        { id: 3, title: 'The Matrix Resurrections', year: 2021, rating: 5.7, duration: '2h 28m', image: 'images/movie3.jpg', description: 'Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct.' },
        { id: 4, title: 'Eternals', year: 2021, rating: 6.3, duration: '2h 37m', image: 'images/movie4.jpg', description: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.' },
        { id: 5, title: 'Shang-Chi', year: 2021, rating: 7.4, duration: '2h 12m', image: 'images/movie5.jpg', description: 'Martial-arts master Shang-Chi confronts the past he thought he left behind when he\'s drawn into the web of the mysterious Ten Rings organization.' },
        { id: 6, title: 'Black Widow', year: 2021, rating: 6.7, duration: '2h 14m', image: 'images/movie6.jpg', description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.' },
        { id: 7, title: 'Jungle Cruise', year: 2021, rating: 6.6, duration: '2h 7m', image: 'images/movie7.jpg', description: 'Based on Disneyland\'s theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals.' },
        { id: 8, title: 'Free Guy', year: 2021, rating: 7.1, duration: '1h 55m', image: 'images/movie8.jpg', description: 'A bank teller discovers that he\'s actually an NPC inside a brutal, open world video game.' }
    ];

    // Sample Series Data
    const series = [
        { id: 101, title: 'Stranger Things', year: 2016, rating: 8.7, seasons: 4, image: 'images/series1.jpg', description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.' },
        { id: 102, title: 'The Witcher', year: 2019, rating: 8.2, seasons: 2, image: 'images/series2.jpg', description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.' },
        { id: 103, title: 'The Mandalorian', year: 2019, rating: 8.7, seasons: 2, image: 'images/series3.jpg', description: 'After the fall of the Galactic Empire, a lone gunfighter makes his way through the lawless outer reaches of the galaxy.' },
        { id: 104, title: 'Money Heist', year: 2017, rating: 8.2, seasons: 5, image: 'images/series4.jpg', description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.' },
        { id: 105, title: 'Squid Game', year: 2021, rating: 8.0, seasons: 1, image: 'images/series5.jpg', description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.' },
        { id: 106, title: 'The Crown', year: 2016, rating: 8.6, seasons: 4, image: 'images/series6.jpg', description: 'This drama follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.' },
        { id: 107, title: 'Breaking Bad', year: 2008, rating: 9.5, seasons: 5, image: 'images/series7.jpg', description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family\'s future.' },
        { id: 108, title: 'Game of Thrones', year: 2011, rating: 9.2, seasons: 8, image: 'images/series8.jpg', description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.' }
    ];

    // Sample Trending Data
    const trending = [
        { id: 201, title: 'The Book of Boba Fett', year: 2021, rating: 7.5, duration: '45m', image: 'images/trending1.jpg', description: 'Bounty hunter Boba Fett & mercenary Fennec Shand navigate the Galaxy\'s underworld when they return to Tatooine to stake their claim on the territory once ruled by Jabba the Hutt.' },
        { id: 202, title: 'Arcane', year: 2021, rating: 9.1, duration: '45m', image: 'images/trending2.jpg', description: 'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.' },
        { id: 203, title: 'Hawkeye', year: 2021, rating: 7.7, duration: '50m', image: 'images/trending3.jpg', description: 'Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate M. Bishop, who took on the role after the original Avenger, Clint Barton.' },
        { id: 204, title: 'The Wheel of Time', year: 2021, rating: 7.2, duration: '55m', image: 'images/trending4.jpg', description: 'Set in a high fantasy world where magic exists, but only some can access it, a woman named Moiraine crosses paths with five young men and women.' },
        { id: 205, title: 'Cowboy Bebop', year: 2021, rating: 6.5, duration: '50m', image: 'images/trending5.jpg', description: 'A ragtag crew of bounty hunters chases down the galaxy\'s most dangerous criminals. They\'ll save the world... for the right price.' },
        { id: 206, title: 'Loki', year: 2021, rating: 8.2, duration: '50m', image: 'images/trending6.jpg', description: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers: Endgame."' }
    ];

    // Sample My List Data
    const myList = [
        { id: 301, title: 'Interstellar', year: 2014, rating: 8.6, duration: '2h 49m', image: 'images/mylist1.jpg', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.' },
        { id: 302, title: 'Inception', year: 2010, rating: 8.8, duration: '2h 28m', image: 'images/mylist2.jpg', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.' },
        { id: 303, title: 'The Dark Knight', year: 2008, rating: 9.0, duration: '2h 32m', image: 'images/mylist3.jpg', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.' }
    ];

    // Render Movies
    const moviesContainer = document.querySelector('.movies-container');
    movies.forEach(movie => {
        const movieCard = createMediaCard(movie);
        moviesContainer.appendChild(movieCard);
    });

    // Render Series
    const seriesContainer = document.querySelector('.series-container');
    series.forEach(serie => {
        const seriesCard = createMediaCard(serie, true);
        seriesContainer.appendChild(seriesCard);
    });

    // Render Trending
    const trendingContainer = document.querySelector('.trending-container');
    trending.forEach(item => {
        const trendingCard = createMediaCard(item);
        trendingContainer.appendChild(trendingCard);
    });

    // Render My List
    const mylistContainer = document.querySelector('.mylist-container');
    myList.forEach(item => {
        const mylistCard = createMediaCard(item);
        mylistContainer.appendChild(mylistCard);
    });

    // Create Media Card Function
    function createMediaCard(item, isSeries = false) {
        const card = document.createElement('div');
        card.className = isSeries ? 'series-card' : 'movie-card';
        if (item.id >= 201 && item.id <= 299) card.className = 'trending-card';
        if (item.id >= 301) card.className = 'mylist-card';
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="card-img">
            <div class="card-overlay">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="card-year">${item.year}</span>
                    <span class="card-rating"><i class="fas fa-star"></i> ${item.rating}</span>
                    <span class="card-duration">${isSeries ? `${item.seasons} Seasons` : item.duration}</span>
                </div>
                <div class="card-actions">
                    <button class="card-btn play-btn" data-id="${item.id}"><i class="fas fa-play"></i></button>
                    <button class="card-btn add-btn" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                    <button class="card-btn info-btn" data-id="${item.id}"><i class="fas fa-info-circle"></i></button>
                </div>
            </div>
        `;
        
        return card;
    }

    // Carousel Navigation
    const sectionNavs = document.querySelectorAll('.section-nav');
    sectionNavs.forEach(nav => {
        nav.addEventListener('click', function() {
            const container = this.closest('.section-controls').previousElementSibling;
            const scrollDirection = this.classList.contains('prev') ? -1 : 1;
            container.scrollBy({
                left: scrollDirection * 300,
                behavior: 'smooth'
            });
        });
    });

    // Video Modal
    const videoModal = document.querySelector('.video-modal');
    const closeModal = document.querySelector('.close-modal');
    const videoPlayer = document.getElementById('main-video');
    
    // Open Modal
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('play-btn') || e.target.closest('.play-btn')) {
            const btn = e.target.classList.contains('play-btn') ? e.target : e.target.closest('.play-btn');
            const id = parseInt(btn.getAttribute('data-id'));
            
            // Find the item in our data
            let item;
            if (id >= 1 && id <= 99) item = movies.find(m => m.id === id);
            else if (id >= 101 && id <= 199) item = series.find(s => s.id === id);
            else if (id >= 201 && id <= 299) item = trending.find(t => t.id === id);
            else if (id >= 301) item = myList.find(l => l.id === id);
            
            if (item) {
                document.querySelector('.video-title').textContent = item.title;
                document.querySelector('.video-year').textContent = item.year;
                document.querySelector('.video-rating').innerHTML = `<i class="fas fa-star"></i> ${item.rating}`;
                document.querySelector('.video-duration').textContent = 'duration' in item ? item.duration : `${item.seasons} Seasons`;
                document.querySelector('.video-description').textContent = item.description;
                
                // In a real app, you would set the actual video source
                videoPlayer.src = 'videos/sample.mp4';
                
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });
    
    // Close Modal
    closeModal.addEventListener('click', function() {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        videoPlayer.pause();
    });
    
    // Close modal when clicking outside
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            videoPlayer.pause();
        }
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Add to My List functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) {
            const btn = e.target.classList.contains('add-btn') ? e.target : e.target.closest('.add-btn');
            const id = parseInt(btn.getAttribute('data-id'));
            
            // Find the item
            let item;
            if (id >= 1 && id <= 99) item = movies.find(m => m.id === id);
            else if (id >= 101 && id <= 199) item = series.find(s => s.id === id);
            else if (id >= 201 && id <= 299) item = trending.find(t => t.id === id);
            
            if (item) {
                // Check if already in list
                const exists = myList.some(l => l.id === item.id);
                
                if (!exists) {
                    // Add to my list
                    myList.push(item);
                    
                    // Update UI
                    const mylistCard = createMediaCard(item);
                    mylistContainer.appendChild(mylistCard);
                    
                    // Show notification
                    showNotification(`${item.title} telah ditambahkan ke Daftar Saya`);
                } else {
                    showNotification(`${item.title} sudah ada di Daftar Saya`);
                }
            }
        }
    });

    // Notification Function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add notification style
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary);
            color: white;
            padding: 12px 24px;
            border-radius: 5px;
            z-index: 3000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .notification.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(notificationStyle);

    // Scroll Reveal Animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    scrollReveal.reveal('.section-header, .movie-card, .series-card, .trending-card, .mylist-card', {
        interval: 200
    });
});