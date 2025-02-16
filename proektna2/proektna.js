const carImages = {
    1: ["id11.png", "id12.png", "id13.png"], 
    2: ["id21.png", "id22.png", "id23.png"],
    3: ["id31.png", "id32.png", "id33.png"],
    4: ["id51.png", "id52.png", "id53.png"],
    5: ["id61.png", "id62.png", "id63.png"],
    6: ["id71.png", "id72.png", "id73.png"]
};

const carData = {
    new: [
        {
            id: 1,
            name: "Mazda CX-30",
            price: "€34.000",
            image: "id11.png",
            color: "soul red",
            year: 2024,
            kilometers: 0,
            engine: "2.5L со 4 цилиндри",
            description: "шест-брзински автоматски менувач",
            description1:"Со длабоки корени во јапонската естетика, Mazda CX-30 2025 комбинира извонредна динамичност и минималистичка елеганција. Непогрешливо стилски и издржлив компактен SUV – од префинетата аеродинамична силуета до смелата обвивка на подвозјето.Поголем од кога било, дисплејот од 10,25 инчи обезбедува подобра видливост за полесно разбирање на информациите во реално време, како што се релевантните места на интерес во близина. Иновативниот интелигентен систем на багажникот на Mazda е развиен за да обезбеди поголем капацитет на багажникот и поголема флексибилност."
        },
        {
            id: 2,
            name: "Peugeot 5008",
            price: "€23.000",
            image: "id21.png",
            color: "Pearl White",
            year: 2022,
            kilometers: 0,
            engine: "1.2L Hybrid со 3 цилиндри",
            description: "хибриден со 7 седишта",
            description1:"Со длабоки корени во јапонската естетика, Mazda CX-30 2025 комбинира извонредна динамичност и минималистичка елеганција. Непогрешливо стилски и издржлив компактен SUV – од префинетата аеродинамична силуета до смелата обвивка на подвозјето.Поголем од кога било, дисплејот од 10,25 инчи обезбедува подобра видливост за полесно разбирање на информациите во реално време, како што се релевантните места на интерес во близина. Иновативниот интелигентен систем на багажникот на Mazda е развиен за да обезбеди поголем капацитет на багажникот и поголема флексибилност."
        },
        {
            id: 3,
            name: "BMW X1 PHEV",
            price: "€45.000",
            image: "id31.png",
            color: "Utah Orange",
            year: 2023,
            kilometers: 1000,
            engine: "турбо 2.0L Hybrid",
            description: "хибрид",
            description1:"Моделот од 2023 година доби целосен редизајн кој изгледа како сеопфатна надградба во однос на минатогодишниот модел, со подобрувања на шасијата, погонската единица и внатрешноста. Нов турбо-мотор со четири цилиндри со 241 КС е под хаубата и е поврзан со стандарден погон на сите тркала и седумстепен автоматски менувач. За разлика од неговиот главен ривал, Mercedes-Benz GLB-класата, X1 останува SUV со два реда, но неговите малку поголеми надворешни димензии се претворија во дополнителен простор во кабината според BMW. Зборувајќи за ентериерот, тој е ажуриран со помодерен дизајн и најнови технолошки карактеристики, вклучително и поставувањето за инфозабава iDrive 8 на брендот."
        }
    ],
    used: [
        {
            id: 4,
            name: "Mercedes-Benz C 220",
            price: "€24.000",
            image: "id51.png",
            color: "сива",
            year: 2014,
            kilometers: 130000,
            engine: "2.2L Diesel",
            description: "со автоматски менувач",
            description1:"Се продава Mercedes-Benz C220 BlueTec во одлична состојба, купен од прв сопственик. Возилото е сервисирано и редовно одржувано во овластен сервис, за што има и писмена гаранција. Може да се провери и тестира лично."
        },
        {
            id: 5,
            name: "BMW 530D G30",
            price: "€30.000",
            image: "id61.png",
            color: "сива",
            year: 2017,
            kilometers: 50000,
            engine: "3.0L Diesel",
            description: "со автоматски менувач",
            description1:"Се продава BMW 530D G30, купено од приватно лице кое е прв сопственик на возилото. Возилото е со фабрички М пакет и дополнително опремено со Individual High Gloss Shadow Line. Автомобилот е во одлична состојба, со уредно направени сервиси од првиот до последниот километар."
        },
        {
            id: 6,
            name: "Audi Q5 3.0 TDI",
            price: "€19.000",
            image: "id71.png",
            color: "бела",
            year: 2015,
            kilometers: 85000,
            engine: "3.0L Diesel",
            description: "со автоматски менувач",
            description1:"Се продава Audi Q5 3.0 TDI, увезено од странство, со платени сите давачки до регистрација. Возилото е во одлична состојба, без никакви каросериски забелешки. Направени се сите сервиси, без потреба од никакви вложувања од ваша страна. Може проверка по ваше барање."
        }
    ]
};

let currentImageIndex = 0;
let currentCarId = null;
let slideInterval;

//karticki za avto 
function createCarCard(car) {
    return `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <div class="car-card-content">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
                <p class="price">${car.price}</p>
                <button onclick="viewDetails(${car.id})" class="view-details">Повеќе детали</button>
            </div>
        </div>
    `;
}

function populateCarGrids() {
    const newVehiclesGrid = document.querySelector('#new-vehicles .car-grid');
    const usedVehiclesGrid = document.querySelector('#used-vehicles .car-grid');

    newVehiclesGrid.innerHTML = carData.new.map(car => createCarCard(car)).join('');
    usedVehiclesGrid.innerHTML = carData.used.map(car => createCarCard(car)).join('');
}

//koga ke se klikne na povekje info, se pojavuva popup window
function viewDetails(carId) {
    const car = carData.new.find(c => c.id === carId) || carData.used.find(c => c.id === carId);
    
    if (car) {
        const popup = document.getElementById('car-details-popup');
        popup.querySelector('.popup-name').textContent = car.name;
        popup.querySelector('.popup-price').textContent = car.price;
        popup.querySelector('.popup-color').textContent = `Боја: ${car.color}`;
        popup.querySelector('.popup-year').textContent = `Година: ${car.year}`;
        popup.querySelector('.popup-kilometers').textContent = `Километри: ${car.kilometers} km`;
        popup.querySelector('.popup-engine').textContent = `Mотор: ${car.engine}`;
        popup.querySelector('.popup-description').textContent = car.description1;

        // like button
        const likeButton = popup.querySelector('.like-button');
        likeButton.innerHTML = `
            <i class="fas fa-heart"></i>
            <span class="like-count">0</span>
        `;
        likeButton.classList.remove('liked');

        currentImageIndex = 0;
        currentCarId = carId;
        updateImage();
        startAutoSlide();
        
        $('#car-details-popup').fadeIn(500).css('display', 'flex');
    }
}

//funkcii za slikite
function updateImage() {
    const imageElement = document.querySelector('.popup-image');
    const images = carImages[currentCarId] || [];
    if (images.length > 0) {
        imageElement.src = images[currentImageIndex];
    }
}

function nextImage() {
    const images = carImages[currentCarId] || [];
    if (images.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }
}

function prevImage() {
    const images = carImages[currentCarId] || [];
    if (images.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }
}

//slide show za sliki na 3 sec
function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextImage, 3000);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

$(document).ready(function() {
    populateCarGrids();

    // close popup 
    $('.close-popup').on('click', function() {
        $('#car-details-popup').fadeOut(500);
        stopAutoSlide();
    });

    // slider kontroli
    $('.popup-prev').on('click', function() {
        stopAutoSlide();
        prevImage();
        startAutoSlide();
    });

    $('.popup-next').on('click', function() {
        stopAutoSlide();
        nextImage();
        startAutoSlide();
    });

    // like button funkcijonalnost
    $(document).on('click', '.like-button', function() {
        //$(this).toggleClass('liked');
        let count = $(this).find('.like-count');
        let currentLikes = parseInt(count.text());
        let newLikes = currentLikes + 1;
        count.text(newLikes);

        if (newLikes > 0) {
            $(this).addClass('liked');
        } else {
            $(this).removeClass('liked');
        }
    });

    // prakjanje na komentari
    $('.comment-button').on('click', function() {
        const input = $('.comment-input');
        const text = input.val().trim();
        
        if (text) {
            if ($('.comments-list').length === 0) {
                $('.comment-section').append('<div class="comments-list"></div>');
            }

            const commentsList = $('.comments-list');
            const commentDiv = $('<div>').addClass('comment');
            commentDiv.html(`
                <span>${text}</span>
                <button class="delete-comment">×</button>
            `);
            
            commentDiv.find('.delete-comment').on('click', function() {
                $(this).closest('.comment').remove();
            });
            
            commentsList.prepend(commentDiv);
            input.val('');
            commentsList.scrollTop(0);
        }
    });

    // slider hover
    $('.popup-slider').on({
        mouseenter: stopAutoSlide,
        mouseleave: startAutoSlide
    });

    // smooth scrollanje
$(document).ready(function() {
    $("nav a, .footer-section a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top - 100 
            }, 800);
        }
    });
});


    // announcement banner
    $(".close-announcement").on("click", function() {
        $("#announcement-banner").slideUp(500);
    });

    // funkcijonalnosti na stars za anketata
$(".stars span").on("mouseenter click", function() {
    const value = $(this).data("value");
    $(".stars span").removeClass("active");
    $(".stars span").each(function() {
        if ($(this).data("value") <= value) {
            $(this).addClass("active");
        }
    });
});


    // fade in elementi kaj scrollanje
    $(".category-section, .brands-section").css("opacity", "0");
    $(window).on("scroll", function() {
        $(".category-section, .brands-section").each(function() {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            if (scroll > position - 500) {
                $(this).animate({ opacity: 1 }, 800);
            }
        });
    });
});

$(document).ready(function() {
    $("#survey-form").on("submit", function(event) {
        event.preventDefault(); 
        $("#thank-you-message").fadeIn(500).delay(2000).fadeOut(500);
        $(this)[0].reset(); 
    });
});
