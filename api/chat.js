<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAX STATIVKO — Портфоліо</title>
    <!-- Open Graph / Social Media Preview Meta Tags -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mstativko-blip.github.io/ukrainian-portfolio/">
    <meta property="og:title" content="Макс Статівко — Сценарист, режисер, креативник">
    <meta property="og:description" content="Створюю історії, що лишають слід. Портфоліо проєктів: відео, 3D, дизайн та мобільна розробка.">
    <meta property="og:image" content="https://mstativko-blip.github.io/ukrainian-portfolio/link_img.jpg">
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://mstativko-blip.github.io/ukrainian-portfolio/">
    <meta name="twitter:title" content="Макс Статівко — Сценарист, режисер, креативник">
    <meta name="twitter:description" content="Створюю історії, що лишають слід. Портфоліо проєктів: відео, 3D, дизайн та мобільна розробка.">
    <meta name="twitter:image" content="https://mstativko-blip.github.io/ukrainian-portfolio/link_img.jpg">    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-smoky: #f0f2f5;
            --brand-red: #ff4a4a;
            --charcoal: #22252a;
            --paper-bg: #fcfbf9;
            --paper-shadow: 0 10px 30px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04);
            --line-color: rgba(34, 37, 42, 0.08);
            --line-red: rgba(255, 74, 74, 0.15);
        }


        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }


        body {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--bg-smoky);
            color: var(--charcoal);
            line-height: 1.6;
            overflow-x: hidden;
            position: relative;
        }


        /* Загальний паралакс-фон із лініями */
        .parallax-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: -1;
            background-image: 
                linear-gradient(var(--line-color) 1px, transparent 1px),
                linear-gradient(90deg, var(--line-color) 1px, transparent 1px),
                linear-gradient(var(--line-red) 1px, transparent 1px);
            background-size: 80px 80px, 80px 80px, 400px 400px;
            background-position: -1px -1px;
            will-change: transform;
        }


        /* Хедер 100% width */
        .hero-header {
            width: 100%;
            background-color: var(--brand-red);
            color: var(--charcoal);
            padding: 80px 5% 100px 5%;
            position: relative;
        }


        .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }


        .hero-top-text {
            align-self: flex-end;
            text-align: right;
            max-width: 450px;
            margin-bottom: 40px;
        }


        .hero-top-text h3 {
            font-size: 1.2rem;
            font-weight: 900;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 8px;
        }


        .hero-top-text p {
            font-size: 1.05rem;
            opacity: 0.85;
            font-style: italic;
        }


        .hero-title {
            font-size: clamp(3.5rem, 11vw, 9.5rem);
            font-weight: 900;
            line-height: 0.88;
            letter-spacing: -2px;
            text-transform: uppercase;
        }


        /* Основна контейнерна сітка */
        .container {
            max-width: 1100px;
            margin: -40px auto 80px auto;
            padding: 0 20px;
            position: relative;
            z-index: 2;
        }


        /* Паперові картки блоків */
        .paper-card {
            background-color: var(--paper-bg);
            border-radius: 8px;
            padding: 45px;
            margin-bottom: 50px;
            box-shadow: var(--paper-shadow);
            border: 1px solid rgba(0, 0, 0, 0.03);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
            position: relative;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }


        .paper-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.05);
        }


        /* Стилі для інтерактивного слайдера першого блоку */
        .intro-slider-card {
            display: block !important; /* Перевизначаємо grid для гнучкого управління всередині */
        }

        .slide-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-container.reverse {
            grid-template-columns: 1fr 1fr;
            direction: rtl; /* Дзеркально міняємо місцями колонки без зламу розмітки */
        }

        .slide-container.reverse > * {
            direction: ltr; /* Повертаємо нормальний напрямок тексту усередині блоків */
        }

        .slide-text-side {
            display: flex;
            flex-direction: column;
        }

        .slide-image-side {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
        }

        .hint-badge {
            position: absolute;
            top: -15px;
            background: var(--charcoal);
            color: #fff;
            font-size: 0.75rem;
            font-weight: 700;
            padding: 6px 14px;
            border-radius: 20px;
            pointer-events: none;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: pulseHint 2s infinite;
            z-index: 5;
        }

        @keyframes pulseHint {
            0% { transform: scale(1); opacity: 0.95; }
            50% { transform: scale(1.04); opacity: 1; }
            100% { transform: scale(1); opacity: 0.95; }
        }

        /* Вбудований чат Джесіки */
        .embedded-chat {
            display: none;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            padding: 15px;
            margin-top: 15px;
            box-shadow: inset 0 2px 6px rgba(0,0,0,0.02);
        }

        .chat-messages-list {
            height: 170px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 12px;
            padding-right: 5px;
        }

        .msg-bubble {
            max-width: 85%;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 0.9rem;
            line-height: 1.45;
        }

        .typing::after {
            content: "";
            display: inline-block;
            height: 1em;
            border-left: 1px solid currentColor;
            vertical-align: -0.12em;
            margin-left: 2px;
            animation: jessica-caret 1s steps(1) infinite;
        }
        @keyframes jessica-caret { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
            .typing::after { animation: none; }
        }
        .show-reply {
            align-self: flex-start;
            background: none;
            border: 0;
            color: #585b60;
            font: inherit;
            font-size: .8rem;
            text-decoration: underline;
            cursor: pointer;
        }
        .msg-bubble.jessica {
            background: #ffd2d2;
            color: var(--charcoal);
            align-self: flex-start;
            border-bottom-left-radius: 2px;
        }

        .msg-bubble.user {
            background: #f0f2f5;
            color: var(--charcoal);
            font-weight: 400;
            align-self: flex-end;
            border-bottom-right-radius: 2px;
        }

        .chat-input-row {
            display: flex;
            gap: 8px;
        }

        .chat-input-row input {
            flex: 1;
            padding: 10px 14px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            outline: none;
        }

        .chat-input-row input:focus {
            border-color: var(--brand-red);
        }

        .chat-input-row button {
            background: var(--charcoal);
            color: #fff;
            border: none;
            padding: 10px 16px;
            border-radius: 6px;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.2s;
        }

        .chat-input-row button:hover {
            background: var(--brand-red);
            color: var(--charcoal);
        }

        /* Переключавальні кнопки слайдера */
        .slider-footer-dots {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 30px;
            border-top: 1px solid rgba(0,0,0,0.06);
            padding-top: 20px;
        }

        .dot-btn {
            padding: 6px 18px;
            border-radius: 20px;
            background: #eee;
            color: #666;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
        }

        .dot-btn.active {
            background: var(--charcoal);
            color: #fff;
        }


        .card-full-width {
            grid-template-columns: 1fr;
        }


        .card-info h2 {
            font-size: 1.8rem;
            font-weight: 900;
            text-transform: uppercase;
            line-height: 1.2;
            margin-bottom: 6px;
            letter-spacing: -0.5px;
        }


        .card-info .subtitle {
            font-size: 1rem;
            color: #666;
            margin-bottom: 22px;
            font-weight: 700;
        }


        .card-info p {
            font-size: 1.02rem;
            color: #333;
            margin-bottom: 16px;
        }


        .card-info p:last-of-type {
            margin-bottom: 0;
        }


        /* Стилі кнопок */
        .btn {
            display: inline-block;
            background-color: var(--charcoal);
            color: #fff;
            padding: 14px 28px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
            margin-top: 22px;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.2s ease;
        }


        .btn:hover {
            background-color: var(--brand-red);
            color: var(--charcoal);
            transform: translateY(-2px);
        }


        /* Медіаконтейнери та мокапи */
        .media-container {
            width: 100%;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
        }


        .video-responsive {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: 6px;
        }


        .video-responsive iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }


        /* Мобільний мокап */
        .phone-mockup-wrapper {
            display: flex;
            justify-content: center;
        }


        .phone-mockup {
            width: 280px;
            height: 570px;
            background: #000;
            border-radius: 36px;
            padding: 10px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
            border: 4px solid #333;
            position: relative;
        }


        .phone-mockup iframe {
            width: 100%;
            height: 100%;
            border-radius: 26px;
            border: none;
        }


        /* Двоповерховий мокап ноутбука + смартфона */
        .laptop-phone-composition {
            position: relative;
            width: 100%;
            padding-bottom: 20px;
        }


        .laptop-mockup {
            width: 85%;
            background: #222;
            border-radius: 10px 10px 0 0;
            padding: 10px 10px 0 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }


        .laptop-screen {
            width: 100%;
            aspect-ratio: 16/10;
            object-fit: cover;
            border-radius: 4px 4px 0 0;
            display: block;
        }


        .laptop-base {
            width: 95%;
            height: 12px;
            background: #a0a0a0;
            border-radius: 0 0 10px 10px;
            margin: 0 auto;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }


        .phone-overlay {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 32%;
            background: #000;
            border-radius: 24px;
            padding: 6px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border: 2px solid #444;
        }


        .phone-overlay img {
            width: 100%;
            aspect-ratio: 9/19;
            object-fit: cover;
            border-radius: 18px;
            display: block;
        }


        /* Слайдер-галерея для 3D */
        .slider-wrapper {
            position: relative;
            width: 100%;
            border-radius: 6px;
            overflow: hidden;
        }


        .slider-slides {
            display: flex;
            transition: transform 0.4s ease-in-out;
        }


        .slider-slide {
            min-width: 100%;
            box-sizing: border-box;
        }


        .slider-slide img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 6px;
        }


        .slider-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(34, 37, 42, 0.7);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            transition: background 0.2s;
            z-index: 10;
        }


        .slider-btn:hover {
            background: var(--brand-red);
            color: var(--charcoal);
        }


        .slider-prev { left: 10px; }
        .slider-next { right: 10px; }


        /* Повідомлення та Поп-апи */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }


        .modal-content {
            background: #fff;
            width: 100%;
            max-width: 900px;
            height: 85vh;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }


        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
            z-index: 1001;
            color: #333;
            line-height: 1;
        }


        .modal iframe {
            width: 100%;
            height: 100%;
            border: none;
        }


        /* Фото автора */
        .author-photo {
            width: 100%;
            max-width: 320px;
            border-radius: 8px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            display: block;
            margin: 0 auto;
        }


        /* Дві мобілки для Android Studio */
        .double-phone-wrapper {
            position: relative;
            width: 100%;
            height: 380px;
            display: flex;
            align-items: center;
            justify-content: center;
        }


        .phone-back {
            position: absolute;
            width: 180px;
            left: 15%;
            top: 10px;
            background: #000;
            border-radius: 20px;
            padding: 5px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            border: 2px solid #444;
            transform: rotate(-6deg);
        }


        .phone-front {
            position: absolute;
            width: 190px;
            right: 15%;
            bottom: 10px;
            background: #000;
            border-radius: 20px;
            padding: 5px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.25);
            border: 2px solid #555;
            transform: rotate(4deg);
            z-index: 2;
        }


        .phone-back img, .phone-front img {
            width: 100%;
            border-radius: 16px;
            display: block;
        }


        /* Футер 100% width */
        .hero-footer {
            width: 100%;
            background-color: var(--brand-red);
            color: var(--charcoal);
            padding: 80px 5%;
            margin-top: 100px;
        }


        .footer-content {
            max-width: 1100px;
            margin: 0 auto;
        }


        .footer-title {
            font-size: clamp(2.5rem, 6vw, 5.5rem);
            font-weight: 900;
            line-height: 0.95;
            text-transform: uppercase;
            margin-bottom: 50px;
            letter-spacing: -1px;
        }


        .footer-contacts p {
            font-size: 1.1rem;
            margin-bottom: 8px;
            font-weight: 700;
        }


        .footer-contacts a {
            color: var(--charcoal);
            text-decoration: none;
            border-bottom: 2px solid var(--charcoal);
        }


        .footer-location {
            margin-top: 30px;
            font-size: 1rem;
            opacity: 0.8;
        }


        /* Адаптивність */
        @media (max-width: 850px) {
            .paper-card, .slide-container, .slide-container.reverse {
                grid-template-columns: 1fr;
                padding: 30px;
                gap: 25px;
                direction: ltr !important;
            }


            .hero-top-text {
                text-align: left;
                align-self: flex-start;
            }


            .phone-overlay {
                width: 40%;
            }


            .double-phone-wrapper {
                height: 320px;
            }
            .phone-back { left: 5%; width: 150px; }
            .phone-front { right: 5%; width: 160px; }
        }
    </style>
</head>
<body>
<!-- Перемикач мов у шапці -->
    <div class="lang-switcher" style="position: absolute; top: 20px; right: 20px; z-index: 100; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 1px;">
        <span style="opacity: 1.0; border-bottom: 2px solid currentColor; padding-bottom: 2px;">UA</span> | 
        <a href="./en/" style="text-decoration: none; color: inherit; opacity: 0.5; transition: opacity 0.2s;">EN</a> | 
        <a href="./it/" style="text-decoration: none; color: inherit; opacity: 0.5; transition: opacity 0.2s;">IT</a>
    </div>
    <!-- Фон з лініями -->
    <div class="parallax-bg" id="parallaxBg"></div>


    <!-- 1. ХЕДЕР (100% width) -->
    <header class="hero-header">
        <div class="hero-content">
            <div class="hero-top-text">
                <h3>Сценарист, режисер, креативник</h3>
                <p>Створюю історії, що лишають слід. А колись – змінять світ.</p>
            </div>
            <h1 class="hero-title">MAX<br>STATIVKO</h1>
        </div>
    </header>


    <main class="container">


        <!-- 2. БЛОК 01: ІНТЕРАКТИВНИЙ СЛАЙДЕР (Макс / Джесіка + Чат) -->
        <section class="paper-card intro-slider-card">
            <div class="slide-container" id="sliderBlock">
                
                <!-- ТЕКСТОВА ЧАСТИНА (Зліва для Макса, справа для Джесіки) -->
                <div class="slide-text-side">
                    <h2 id="slideHeading">Одним словом</h2>
                    <div class="subtitle" id="slideSubtitle">Привіт, я Макс Статівко</div>
                    <div id="slideDescContent">
                        <p>Я створюю концепції, пишу сценарії, знімаю, монтую, керую командами та роблю цікаві штуки з характером. Від постів в соцмережах до рекламних роликів. Від AI-3D до вайб-кодингу інструментів інтерактивної візуалізації.</p>
                        <p>Це сайт-презентація деяких моїх робіт.</p>
                    </div>

                    <!-- Кнопка резюме для Макса -->
                    <div id="maxActionBlock">
                        <button class="btn" onclick="openModal('resumeModal')">Резюме</button>
                    </div>

                    <!-- Вбудований живий чат із Джесікою (з'являється на 2 слайді) -->
                    <div class="embedded-chat" id="jessicaChatBox">
                        <div class="chat-messages-list" id="chatMessages">

                        </div>
                        <div class="chat-input-row">
                            <input type="text" id="userInput" placeholder="Напишіть Джесіці..." onkeypress="handleKey(event)">
                            <button onclick="sendMsg()">Надіслати</button>
                        </div>
                    </div>
                </div>

                <!-- ФОТОЧАСТИНА ЗІ СВАЙП-ПОДСКАЗКОЮ -->
                <div class="slide-image-side" onclick="toggleSlide()">
                    <div class="hint-badge" id="hintBadge">‹ Переключити на Джесіку ›</div>
                    <img id="slideImg" src="https://drive.google.com/thumbnail?id=1C6bk1pV-4zzBDnaGODLGQKOXn0gGHr7I&sz=w1000" alt="Макс Статівко" class="author-photo" style="margin: 0;">
                </div>

            </div>

            <!-- Нижні міні-кнопки перемикання слайдів -->
            <div class="slider-footer-dots">
                <button class="dot-btn active" id="btnSlide1" onclick="setSlide(1)">1. Макс</button>
                <button class="dot-btn" id="btnSlide2" onclick="setSlide(2)">2. Джесіка</button>
            </div>
        </section>
        
        <!-- 3. БЛОК 02: VAU-BOO (Постановний ролик) -->
     <section class="paper-card">
            <div class="card-info">
                <h2>Постановний рекламний ролик</h2>
                <div class="subtitle">Vau-Boo: історія навпаки</div>
                <p>Це така класична реклама – про аукціон, де продавці змагаються за одного покупця. Проста історія, але як зроблено!</p>
            </div>
            <div class="media-container">
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/MxU9Ft-cKwk" title="Vau-Boo" allowfullscreen></iframe>
                </div>
            </div>
        </section>


        <!-- 4. БЛОК 03: BIZOL (Іміджеве відео) -->
        <section class="paper-card">
            <div class="card-info">
                <h2>Іміджеве відео для бренду</h2>
                <div class="subtitle">Масштабна постановна робота для німецького бренду Bizol</div>
                <p>Ця робота для міжнародної компанії-виробника мастил і паливної хімії писалася українською, знімалася німецюкою, але для вас я підготував іспанську версію, – так звучить найкраще.</p>
            </div>
            <div class="media-container">
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/ma9-HzdUysI" title="Bizol Video" allowfullscreen></iframe>
                </div>
            </div>
        </section>


        <!-- 5. БЛОК 04: VECTOR3 (2D-анімація) -->
        <section class="paper-card">
            <div class="card-info">
                <h2>Рекламний ролик у 2D-анімації</h2>
                <div class="subtitle">Vector3 – Бабілонська вежа</div>
                <p>Три роки свого життя я служив сценаристом, а потім і режисером студії рекламної анімації. Тому таких роликів я зробив кілька сотень. Але саме тут клієнту була потрібна метафора, що зчитуватиметься настільки ким завгодно, щоб ролик можна було перекласти сімома мовами.</p>
                <p> Для вас сьогодні французька.</p>
            </div>
            <div class="media-container">
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/2jlMZD3bwck" title="Vector3 2D Animation" allowfullscreen></iframe>
                </div>
            </div>
        </section>


        <!-- 6. БЛОК 05: CRYPTO-KARATIST (YouTube-заставка) -->
        <section class="paper-card">
            <div class="card-info">
                <h2>Відкриваюча заставка для YouTube-каналу</h2>
                <div class="subtitle">Crypto-Karatist</div>
                <p>Задача на відчуття гармонії та балансу: потрібно дати настрій, влучити в стиль, але не передавити.</p>
                <p>Саунд-дизайн тут я робив власноруч. Чому? А це подкаст, тут звук важливий.</p>
            </div>
            <div class="media-container">
                <div class="video-responsive">
                    <iframe src="https://www.youtube.com/embed/oHlC3VXjtBk" title="Crypto Karatist Opener" allowfullscreen></iframe>
                </div>
            </div>
        </section>


        <!-- 7. БЛОК 06: ШІ-ВІДЕО (Vertical Drama) -->
        <section class="paper-card">
            <div class="card-info">
                <h2>ШІ-відео</h2>
                <div class="subtitle">Vertical Drama своїми руками</div>
                <p>Наступний лот – пілотний епізод вертикальної драми, створений на замовлення.</p>
                <p>Я адаптував сценарій, згенерував сцени у higgsfield.ai, голоси у 11labs, змонтував це все в DaVinci Resolve.</p>
            </div>
            <div class="phone-mockup-wrapper">
                <div class="phone-mockup">
                    <iframe src="https://www.youtube.com/embed/i4VjwzADcE4" title="AI Vertical Drama" allowfullscreen></iframe>
                </div>
            </div>
        </section>


        <!-- 8. БЛОК 07: ЗАТИШНИЙ ШЕКЕЛЬ (Медіа) -->
       <section class="paper-card">
            <div class="card-info">
                <h2>розробка медіа з нуля</h2>
                <div class="subtitle">Телеграм-канал "Затишний Шекель"</div>
                <p>Ви переїхали в Ізраїль, не знаєте іврит, але хочете розібратися в фінансах, щоб навчитися тут жити?</p>
                <p>У 24-му році ми створили телеграм-канал "Затишний Шекель" саме для вас — для 11 з чимось тисяч підписників каналу.</p>
                <p>Те, що почалося як ідея в голові, стало відомим брендом фінансової освіти в Ізраїлі – з регулярними постами-розборами та порадами, з прямими ефірами, запрошеними експертами, онлайн- та офлайн-семінарами.</p>
                <a href="https://t.me/cozy_shekel" target="_blank" class="btn">ПЕРЕГЛЯНУТИ КАНАЛ →</a>
            </div>
            <div class="phone-mockup-wrapper">
                <div class="phone-mockup">
                    <img src="https://drive.google.com/thumbnail?id=1Sbpb7hosO0fyZI1nAb-wr_fTu1UhuzXU&sz=w1000" alt="Затишний Шекель" style="width: 100%; height: 100%; object-fit: cover; border-radius: 26px; display: block;">
                </div>
            </div>
        </section>


        <!-- 9. БЛОК 08: КАТЕРИНА ЛОМОНОСОВ (Сайт) -->
        <section class="paper-card">
            <div class="card-info">
                <h2>Сайт для фінансового експерта</h2>
                <div class="subtitle">Проектування та побудова сайту Катерини Ломоносов</div>
                <p>Катерині я рік вів телеграм, цілий рік ми говорили по телефону рівно одну годину на два тижні та зробили разом багато цікавих речей.</p>
                <p>Але найяскравіший наш спільний витвір – це її сайт. Я спробував передати особливе відчуття від взаємодії з нею, і професійне, і людське. Тому дизайн сайту мій, верстка моя, всі елементи мої, всі тексти написані мною. Завітайте та погуляйте там – все це зороблено з неймовірним кайфом.</p>
                <a href="https://www.lomonosov-finance.com" target="_blank" rel="noopener" class="btn">ПЕРЕГЛЯНУТИ САЙТ →</a>
            </div>
            <div class="laptop-phone-composition">
                <div class="laptop-mockup">
                    <img src="https://drive.google.com/thumbnail?id=1aDsQVSgN_MdcvujE-5comQHEVpH8p5cQ&sz=w1000" alt="Ноутбук версія" class="laptop-screen">
                </div>
                <div class="laptop-base"></div>
                <div class="phone-overlay">
                    <img src="https://drive.google.com/thumbnail?id=1h-Gj-lXkoqAz4Lec0VOr5LKF5muggk4c&sz=w1000" alt="Мобільна версія">
                </div>
            </div>
        </section>


        <!-- 10. БЛОК 09: LUMEN (3D Галерея) -->
       <section class="paper-card">
            <div class="card-info">
                <h2>3д-візуалізація</h2>
                <div class="subtitle">Фотореалістична 3д-візуалізація сироватки Lumen</div>
                <p>А це така штука, яку мені просто подобається робити. Я навчився користуватись Blender-ом відносно недавно, але вже маю непогані результати та продовжую вчитися новому.</p>
                <p>3д-моделювання – як мінімум прекрасне хоббі. Втім, його і до діла долучити є де (дивіться далі).</p>
            </div>
            <div class="slider-wrapper">
                <button class="slider-btn slider-prev" onclick="moveSlide(-1)">&#10094;</button>
                <div class="slider-slides" id="lumenSlider">
                    <div class="slider-slide"><img src="https://drive.google.com/thumbnail?id=1epd6FmuPFm35dHfolwWpuu-FV0LTiuqx&sz=w1000" alt="Lumen Render 1"></div>
                    <div class="slider-slide"><img src="https://drive.google.com/thumbnail?id=19Pk3fuvfJTZSpzD9wcIZdyG6s-7kFLZL&sz=w1000" alt="Lumen Render 2"></div>
                    <div class="slider-slide"><img src="https://drive.google.com/thumbnail?id=1PfXXjlD3W4OaGgI4CnAeT6WOx0dZyaO_&sz=w1000" alt="Lumen Render 3"></div>
                    <div class="slider-slide"><img src="https://drive.google.com/thumbnail?id=1ZXgEV2vcugsbkdl7MomKjzPQ85PrsE_9&sz=w1000" alt="Lumen Render 4"></div>
                    <div class="slider-slide"><img src="https://drive.google.com/thumbnail?id=1NQQ1T12MS4znJySUkOikWstm2QbcIvOI&sz=w1000" alt="Lumen Render 5"></div>
                </div>
                <button class="slider-btn slider-next" onclick="moveSlide(1)">&#10095;</button>
            </div>
        </section>


        <!-- 11. БЛОК 10: 3D-КОНФІГУРАТОР -->
        <section class="paper-card">
            <div class="card-info">
                <h2>Інтерактивний інструмент кастомізації мерчу</h2>
                <div class="subtitle">3D-конфігуратор: бренд, який можна приміряти</div>
                <p>А ось, де і згодився Blender – програма без програміста. Gemini + Blender + трохи часу = 3d-кастомайзер.</p>
                <p>Обраний товар можна налаштувати, вибрати колір, додати принт, видалити фон та в один клік відправити свою унікальну річ в корзину з усіма атрибутами.</p>
                 <p>Кажуть, я неодженераліст. Я не знаю, що це означає.</p>
                <a href="https://mstativko-blip.github.io/models/" target="_blank" class="btn">СПРОБУАТИ →</a>
            </div>
            <div class="laptop-phone-composition">
                <div class="laptop-mockup" style="width: 100%;">
                    <img src="https://drive.google.com/thumbnail?id=1All_Q6aO2_f11j3KnD9_W6mQNRl-HEZU&sz=w1000" alt="3D Customizer" class="laptop-screen">
                </div>
                <div class="laptop-base" style="width: 100%;"></div>
            </div>
        </section>


        <!-- 12. БЛОК 11: ANDROID-СУФЛЕР TUSHNITSA -->
       <section class="paper-card">
            <div class="card-info">
                <h2>Кастомна мобільна розробка</h2>
                <div class="subtitle">...і наостанок</div>
                <p>Я втомився шукати в плей-маркеті нормальний суфлер, сів і зробив його собі сам.</p>
                <p>Написав додаток в Android Studio: плаваючі елементи управління, регулювання прозорості фону, розміру тексту.</p>
                <p>Ще й пульт під палець правої руки, а на ньому кнопка паузи. Її можна тримати непомітно для глядача, і текст стоятиме на місці. А потім відпустити, і рядки покотяться собі далі. Кайф!</p>
                <p>А головне, жодної реклами, бо де ж їй тут узятись?</p>
                <p>Я назвав цю апку "Tushnitsa" – на честь своєї кішки)</p>
            </div>
            <div class="double-phone-wrapper">
                <div class="phone-back">
                    <img src="https://drive.google.com/thumbnail?id=1luCAgZB83xi27urHnUrrI8HORJc565Bb&sz=w1000" alt="Tushnitsa Interface">
                </div>
                <div class="phone-front">
                    <img src="https://drive.google.com/thumbnail?id=1oNvfmIL5rL1OQHOcH6ZoAUrq4E7bJi-G&sz=w1000" alt="Tushnitsa Camera Overlay">
                </div>
            </div>
        </section>


    </main>


    <!-- 13. ФУТЕР (100% width) -->
<footer class="hero-footer">
        <div class="footer-content">
            <h2 class="footer-title">НАСТУПНА ІДЕЯ<br>ХАЙ БУДЕ ТВОЄЮ.</h2>
            <div class="footer-contacts" style="display: flex; flex-direction: column; gap: 12px;">
                <!-- Email -->
                <p style="display: flex; align-items: center; gap: 10px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <a href="mailto:mstativko@gmail.com">mstativko@gmail.com</a>
                </p>
                <!-- Telegram -->
                <p style="display: flex; align-items: center; gap: 10px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2L2 9.5l8 3.5 3.5 8L21.5 2z"/><path d="M10 13l6-6"/></svg>
                    <a href="https://t.me/mstativko" target="_blank">@mstativko</a>
                </p>
                <!-- WhatsApp 1 (+380...) -->
                <p style="display: flex; align-items: center; gap: 10px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <a href="https://wa.me/380632823357" target="_blank">+380 63 282 33 57 (WhatsApp)</a>
                </p>
                <!-- WhatsApp 2 (+39...) -->
                <p style="display: flex; align-items: center; gap: 10px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <a href="https://wa.me/393773258701" target="_blank">+39 377 325 87 01 (WhatsApp)</a>
                </p>
            </div>
            <div class="footer-location">
                Макс Статівко – Салерно, Італія
            </div>
        </div>
    </footer>
    
    <!-- ПОП-АП: Резюме PDF -->
    <div class="modal" id="resumeModal">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('resumeModal')">&times;</span>
            <iframe src="https://drive.google.com/file/d/1rs0SnLcW8-F8Ml5-AbFYeb--AsGO5UsO/preview"></iframe>
        </div>
    </div>


    <!-- ПОП-АП: 3D-конфігуратор -->
    <div class="modal" id="configModal">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('configModal')">&times;</span>
            <iframe src="https://hpbrands.net" title="3D Customizer Tool"></iframe>
        </div>
    </div>


    <script>
        // Ефект паралакса для заднього фону
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const bg = document.getElementById('parallaxBg');
            bg.style.transform = 'translateY(' + (scrolled * 0.15) + 'px)';
        });


        // Інтерактивна галерея слайдера (для 3D)
        let currentSlideGallery = 0;
        function moveSlide(direction) {
            const slider = document.getElementById('lumenSlider');
            const totalSlides = slider.children.length;
            currentSlideGallery = (currentSlideGallery + direction + totalSlides) % totalSlides;
            slider.style.transform = `translateX(-${currentSlideGallery * 100}%)`;
        }


        // Управління модальними вікнами
        function openModal(id) {
            document.getElementById(id).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }


        function closeModal(id) {
            document.getElementById(id).style.display = 'none';
            document.body.style.overflow = 'auto';
        }


        // Закриття поп-апу при кліку поза ним
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };

        // --- ЛОГІКА ІНТЕРАКТИВНОГО СЛАЙДЕРА МАКС / ДЖЕСІКА ---
        let currentIntroSlide = 1;
        let messageHistory = [];

        function toggleSlide() {
            setSlide(currentIntroSlide === 1 ? 2 : 1);
        }

        function setSlide(num) {
            currentIntroSlide = num;
            const container = document.getElementById('sliderBlock');
            const heading = document.getElementById('slideHeading');
            const subtitle = document.getElementById('slideSubtitle');
            const descContent = document.getElementById('slideDescContent');
            const img = document.getElementById('slideImg');
            const maxActionBlock = document.getElementById('maxActionBlock');
            const chatBox = document.getElementById('jessicaChatBox');
            const hintBadge = document.getElementById('hintBadge');
            
            const btn1 = document.getElementById('btnSlide1');
            const btn2 = document.getElementById('btnSlide2');

            if (num === 1) {
                // Слайд 1: Макс
                container.classList.remove('reverse');
                heading.innerText = "Одним словом";
                subtitle.innerText = "Привіт, я Макс Статівко";
                descContent.style.display = "block";
                descContent.innerHTML = `
                    <p>Я створюю концепції, пишу сценарії, знімаю, монтую, керую командами та роблю цікаві штуки з характером. Від постів в соцмережах до рекламних роликів. Від AI-3D до вайб-кодингу інструментів інтерактивної візуалізації.</p>
                    <p>Це сайт-презентація деяких моїх робіт.</p>
                `;
                img.src = "https://drive.google.com/thumbnail?id=1C6bk1pV-4zzBDnaGODLGQKOXn0gGHr7I&sz=w1000";
                img.alt = "Макс Статівко";
                
                maxActionBlock.style.display = "block";
                chatBox.style.display = "none";
                
                hintBadge.innerText = "‹ Переключити на Джесіку ›";
                btn1.classList.add('active');
                btn2.classList.remove('active');
            } else {
                // Слайд 2: Джесіка
                container.classList.add('reverse');
                heading.innerText = "Одним словом";
                subtitle.innerText = "Привіт, я Джесіка";
                descContent.style.display = "block";
                descContent.innerHTML = `
                    <p>Я ШІ-літературний секретар Макса. Допомагаю гостям сайту сформулювати, як саме ми з ним можемо вам допомогти.</p>
                `;
                img.src = "jessica.jpeg";
                img.alt = "Джесіка";
                
                maxActionBlock.style.display = "none";
                chatBox.style.display = "block";
                playGreeting();
                
                hintBadge.innerText = "‹ Повернутися до Макса ›";
                btn2.classList.add('active');
                btn1.classList.remove('active');
                
                // Фокус у поле введення для швидкого набору
                setTimeout(() => document.getElementById('userInput').focus(), 300);
            }
        }

        // --- ЛОГІКА ВБУДОВАНОГО ЧАТУ ЗІ СЕРВЕРОМ НА VERCEL ---
        let sending = false;
        let turnsSinceEdit = 0;

        function appendChatMessage(container, role, text) {
            const bubble = document.createElement('div');
            bubble.className = 'msg-bubble ' + role;
            const name = document.createElement('strong');
            name.textContent = role === 'user' ? 'Ви: ' : 'Джесіка: ';
            const body = document.createElement('span');
            body.textContent = text;
            bubble.append(name, body);
            container.append(bubble);
            container.scrollTop = container.scrollHeight;
            return body;
        }

        let greetingState;
        function finishGreeting() {
            if (!greetingState) return;
            clearTimeout(greetingState.timer);
            greetingState.body.textContent = greetingState.text;
            greetingState.body.classList.remove('typing');
        }

        function playGreeting() {
            if (greetingState) return;
            const box = document.getElementById('chatMessages');
            const body = appendChatMessage(box, 'jessica', '');
            const text = "Вітаю! Я ШІ-літературний секретар Макса. Допомагаю гостям сайту сформулювати, як саме ми з ним можемо вам допомогти. Про що бажаєте дізнатися?";
            greetingState = { body, text, timer: 0 };
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                finishGreeting();
                return;
            }
            body.classList.add('typing');
            let offset = 0;
            function next() {
                const follow = box.scrollHeight - box.scrollTop - box.clientHeight < 38;
                const letter = text[offset++];
                body.textContent = text.slice(0, offset);
                if (follow) box.scrollTop = box.scrollHeight;
                if (offset === text.length) return finishGreeting();
                const delay = /[.!?…]/.test(letter) ? 125 : /[,;:]/.test(letter) ? 65 : 12;
                greetingState.timer = setTimeout(next, delay + Math.random() * 10);
            }
            greetingState.timer = setTimeout(next, 180);
        }

        async function sendMsg() {
            const input = document.getElementById('userInput');
            const box = document.getElementById('chatMessages');
            const button = input.nextElementSibling;
            const text = input.value.trim();
            if (sending || !text) return;
            finishGreeting();
            sending = true;
            button.disabled = true;
            input.value = '';
            appendChatMessage(box, 'user', text);
            const body = appendChatMessage(box, 'jessica', '');
            body.classList.add('typing');
            const turn = { role: 'user', parts: [{ text }] };

            try {
                const response = await fetch('https://ukrainian-portfolio.vercel.app/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages: [...messageHistory, turn] })
                });
                const data = await response.json();
                if (!response.ok || typeof data.text !== 'string' || !data.text.trim()) {
                    throw new Error('Empty or failed reply');
                }

                // Optional author cue: [[first wording|final wording]].
                const chunks = [];
                let offset = 0;
                for (const match of data.text.matchAll(/\[\[([^\[\]|\n]+)\|([^\[\]|\n]+)\]\]/g)) {
                    chunks.push({ text: data.text.slice(offset, match.index) });
                    chunks.push({ draft: match[1], text: match[2] });
                    offset = match.index + match[0].length;
                }
                chunks.push({ text: data.text.slice(offset) });
                const finalText = chunks.map(chunk => chunk.text).join('');
                messageHistory.push(turn, { role: 'model', parts: [{ text: finalText }] });
                turnsSinceEdit++;
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    body.textContent = finalText;
                    return;
                }

                let skip = false;
                const reveal = document.createElement('button');
                reveal.type = 'button';
                reveal.className = 'show-reply';
                reveal.textContent = 'Показати одразу';
                reveal.onclick = () => { skip = true; body.textContent = finalText; };
                body.parentElement.after(reveal);
                const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
                let shown = '';
                function paint() {
                    const follow = box.scrollHeight - box.scrollTop - box.clientHeight < 38;
                    body.textContent = shown;
                    if (follow) box.scrollTop = box.scrollHeight;
                }
                async function type(part) {
                    for (const letter of part) {
                        if (skip) return;
                        shown += letter;
                        paint();
                        const delay = /[.!?…]/.test(letter) ? 125 : /[,;:]/.test(letter) ? 65 : 12;
                        await wait(delay + Math.random() * 10);
                    }
                }
                try {
                    for (const chunk of chunks) {
                        if (skip) break;
                        if (chunk.draft && chunk.draft.length <= 45 && turnsSinceEdit >= 4) {
                            turnsSinceEdit = 0;
                            const start = shown;
                            await type(chunk.draft);
                            if (!skip) await wait(340);
                            const letters = Array.from(chunk.draft);
                            while (!skip && letters.length) {
                                letters.pop();
                                shown = start + letters.join('');
                                paint();
                                await wait(9);
                            }
                        }
                        await type(chunk.text);
                    }
                    body.textContent = finalText;
                } finally {
                    reveal.remove();
                }
            } catch {
                body.textContent = 'Не вдалося отримати відповідь. Спробуйте ще раз.';
                if (!input.value) input.value = text;
            } finally {
                body.classList.remove('typing');
                sending = false;
                button.disabled = false;
            }
        }

        function handleKey(e) {
            if (e.key === 'Enter') sendMsg();
        }
    </script>
</body>
</html>
