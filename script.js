const slides = document.getElementById('slides');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = slides.children.length;
        let currentIndex = 0;

        const updateSlidePosition = () => {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('bg-gray-800', index === currentIndex);
                indicator.classList.toggle('bg-gray-400', index !== currentIndex);
            });
        };

        document.getElementById('next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlidePosition();
        });

        document.getElementById('prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSlidePosition();
            });
        });

        // Initialize the first slide
        updateSlidePosition();

        const menuButton = document.getElementById('menuButton');
        const mobileMenu = document.getElementById('mobileMenu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const courseButton = document.getElementById('courseButton');
        const courseDropdown = document.getElementById('courseDropdown');

        courseButton.addEventListener('click', () => {
            courseDropdown.classList.toggle('hidden');
        });

        const mobileCourseButton = document.getElementById('mobileCourseButton');
        const mobileCourseDropdown = document.getElementById('mobileCourseDropdown');

        mobileCourseButton.addEventListener('click', () => {
            mobileCourseDropdown.classList.toggle('hidden');
        });