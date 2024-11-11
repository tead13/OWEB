const carImages = {
    1: ["id11.png", "id12.png", "id13.png"], 
    2: ["id21.png", "id22.png", "id23.png"],
    3: ["id31.png", "id32.png", "id33.png"],
    4: ["id51.png", "id52.png", "id53.png"],
    5: ["id61.png", "id62.png", "id63.png"],
    6: ["id71.png", "id72.png", "id73.png"]
};

let currentImageIndex = 0;
let currentCarId = null;

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
            description1:"Peugeot 5008 2022 хибрид е стилски и простран SUV, кој комбинира функционалност, удобност и ефикасност. Овој модел е опремен со хибриден погон што го комбинира 1.6-литарскиот PureTech бензински мотор со електричен мотор за намалена потрошувачка на гориво и поеколошко возење. Системот обезбедува помоќна перформанса и оптимална ефикасност, особено при возење во градски услови. Одвнатре, Peugeot 5008 има пространа кабина со квалитетни материјали и најсовремена технологија. Вклучува дигитален кокпит, голем екран на допир и функционалности како што се Apple CarPlay и Android Auto. Седумседишниот распоред овозможува многу простор за патниците и нивниот багаж, а флексибилните седишта нудат дополнителна практичност. Дополнителната опрема вклучува системи за помош при возење, како што се адаптивен темпомат, автоматско кочење при итни случаи, и асистент за одржување на лента, што го прави Peugeot 5008 идеален избор за семејства кои сакаат безбедно, ефикасно и модерно возило."
    
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

// karticki za avto
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

// koga ke se klikne na povekje info
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

        currentImageIndex = 0;
        currentCarId = carId;
        updateImage(carId);
        popup.classList.add('show');
    }
}

function updateImage(carId) {
    const popup = document.getElementById('car-details-popup');
    const imageElement = popup.querySelector('.popup-image');

    const images = carImages[currentCarId] || [];
    imageElement.src = images[currentImageIndex] || '';
}

//slider
document.querySelector('.popup-prev').addEventListener('click', function() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = carImages[currentCarId].length - 1;
    }
    updateImage(currentCarId);
});

document.querySelector('.popup-next').addEventListener('click', function() {
    const maxIndex = carImages[currentCarId].length - 1;
    if (currentImageIndex < maxIndex) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateImage(currentCarId);
});

// da se zatvori popup window
document.querySelector('.close-popup').addEventListener('click', function() {
    document.getElementById('car-details-popup').classList.remove('show');
});

// submit na komentar
document.querySelector('.comment-button').addEventListener('click', function() {
    const commentInput = document.querySelector('.comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsList.prepend(newComment);

        commentInput.value = '';
    }
});


document.querySelector('.close-announcement')?.addEventListener('click', function() {
    document.getElementById('announcement-banner').style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function() {
    populateCarGrids();
    initializeSatisfactionSurvey();
});

const stars = document.querySelectorAll('#star-rating span');
let selectedRating = 0;

// Функција за обојување на ѕвездичките
function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Додади настани за ѕвездичките
stars.forEach((star, index) => {
  // За обојување при лебдење
  star.addEventListener('mouseover', () => {
    highlightStars(index + 1);
  });

  // За фиксирање на оцената при кликање
  star.addEventListener('click', () => {
    selectedRating = index + 1;
    highlightStars(selectedRating);
  });
});

// Врати се на избраната оценка при излегување од делот со ѕвездички
document.getElementById('star-rating').addEventListener('mouseleave', () => {
  highlightStars(selectedRating);
});

// Обработка на податоците при испраќање на формата
document.getElementById('survey-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Спречи освежување на страницата

  const feedback = document.getElementById('feedback').value;

  // Прикажи порака за благодарност
  document.getElementById('thank-you-message').style.display = 'block';

  // Пример: испратете ги податоците до сервер преку AJAX (или друг метод)
  console.log('Оценка:', selectedRating);
  console.log('Мислење:', feedback);
  
  // Исчисти ја формата
  document.getElementById('survey-form').reset();
  selectedRating = 0; 
  highlightStars(0); 
});


/*document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Спречи освежување на страницата
  
    // Пример за обработка на податоците од формата
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const feedback = document.getElementById('feedback').value;
  
    // Прикажи порака за благодарност
    document.getElementById('thank-you-message').style.display = 'block';
  
    // Пример: испратете ги податоците до сервер преку AJAX (или друг метод)
    console.log('Оценка:', rating);
    console.log('Мислење:', feedback);
    
    // Исчисти ја формата
    document.getElementById('survey-form').reset();
  });*/
  

