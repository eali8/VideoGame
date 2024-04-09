
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll('.navbar a');
    let currentSectionIndex = 0;

    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            goToSection(currentSectionIndex + 1);
        } else {
            goToSection(currentSectionIndex - 1);
        }
    });

    function goToSection(index) {
        if (index < 0 || index >= sections.length) return;
        currentSectionIndex = index;
        const section = sections[index];
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
        updateActiveNavLink(section.id);
        if ($('.navbar').hasClass('active')) {
            $('.navbar').removeClass('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const index = Array.from(sections).indexOf(targetSection);
            goToSection(index);
        });
    });

    function updateActiveNavLink(activeSectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + activeSectionId) {
                link.classList.add('active');
            }
        });
    }
});

$(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.navbar').toggleClass('active');
    });
});

$(document).ready(function () {
    function generateRandomWords(number) {
        const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
        let result = [];
        for (let i = 0; i < number; i++) {
            result.push(words[Math.floor(Math.random() * words.length)]);
        }
        return result.join(" ");
    }

    function initDefaultContent() {
        $('#image-name-section2').text('YASUO');
        $('#image-description-section2').text(generateRandomWords(30));
        $('#main-image-section2').attr('src', 'images/image013.png');
    }

    $('#section2 .slider-tag').on('click', function () {
        var imgSrc = $(this).find('img:last-child').attr('src');
        $('#main-image-section2').attr('src', imgSrc);
        $('#main-image-section2').removeClass('image-animation').promise().done(function () {
            $('#main-image-section2').addClass('image-animation');
            setTimeout(function () {
                $('#main-image-section2').removeClass('image-animation');
            }, 1000);
        });
        $('#image-name-section2').removeClass('text-animation').promise().done(function () {
            $('#image-name-section2').addClass('text-animation');
            setTimeout(function () {
                $('#image-name-section2').removeClass('text-animation');
            }, 1000);
        });
        $('#image-description-section2').removeClass('text-animation').promise().done(function () {
            $('#image-description-section2').addClass('text-animation');
            setTimeout(function () {
                $('#image-description-section2').removeClass('text-animation');
            }, 1000);
        });

        switch (imgSrc) {
            case 'images/image013.png':
                $('#image-name-section2').text('YASUO');
                $('#image-description-section2').text(generateRandomWords(30));
                break;
            case 'images/image019.png':
                $('#image-name-section2').text('AHRI');
                $('#image-description-section2').text(generateRandomWords(30));
                break;
            case 'images/image023.png':
                $('#image-name-section2').text('EKKO');
                $('#image-description-section2').text(generateRandomWords(40));
                break;
            case 'images/image026.png':
                $('#image-name-section2').text('DARIUS');
                $('#image-description-section2').text(generateRandomWords(35));
                break;
            default:
                break;
        }
    });

    initDefaultContent();
});

let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll("#section3 .carousel-slide img");
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
}

function moveSlide(n) {
    showSlide(currentSlide += n);
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlide(currentSlide);
});

$('.gallery-header-img').click(function () {
    window.scrollTo(0, window.scrollY + 200);
});
