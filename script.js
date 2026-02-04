// Property Data
const propertyData = {
    1: {
        title: 'וילה מודרנית בקיסריה',
        price: '₪12,500,000',
        image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
        rooms: '5',
        area: '250 מ"ר',
        floor: 'קרקע + קומה',
        parking: '3 חניות',
        year: '2021',
        direction: 'מערב',
        description: 'וילה יוקרתית ומעוצבת בקיסריה, בשכונה שקטה ומבוקשת. הנכס כולל סלון מרווח עם חלונות גדולים, מטבח חדיש מאובזר במלואו, 5 חדרי שינה גדולים כולל סוויטת הורים מפנקת עם חדר ארונות ומרפסת פרטית.',
        amenities: [
            'בריכה פרטית מחוממת',
            'גינה מעוצבת 300 מ"ר',
            'מערכת סולארית',
            'חדר כושר פרטי',
            'מערכת אבטחה מתקדמת',
            'חדר קולנוע ביתי',
            'מערכת סאונד מרכזית',
            'מעלית פרטית'
        ]
    },
    2: {
        title: 'פנטהאוז מול הים בתל אביב',
        price: '₪28,000,000',
        image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200',
        rooms: '4',
        area: '180 מ"ר',
        floor: 'קומה 20',
        parking: '2 חניות',
        year: '2023',
        direction: 'מערב (נוף ים)',
        description: 'פנטהאוז אקסקלוסיבי עם נוף פנורמי עוצר נשימה לים התיכון. דירה חדשה לחלוטין עם גימורים ברמה הגבוהה ביותר, מטבח איטלקי יוקרתי, סלון ענק עם גובה תקרה כפול ומרפסת שמש מדהימה של 80 מ"ר.',
        amenities: [
            'נוף פנורמי לים',
            'מרפסת שמש 80 מ"ר',
            'ג׳קוזי על הגג',
            'חדר כביסה נפרד',
            'מחסן 20 מ"ר',
            'בניין בוטיק עם שירותי קונסיירז׳',
            'בריכה ומכון כושר בבניין',
            'חניה מקורה'
        ]
    },
    3: {
        title: 'דירת גן ברמת השרון',
        price: '₪7,200,000',
        image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
        rooms: '5.5',
        area: '160 מ"ר',
        floor: 'קרקע',
        parking: '2 חניות',
        year: '2020',
        direction: 'דרום',
        description: 'דירת גן מרווחת ומוארת באזור מבוקש ברמת השרון. הדירה משופצת ברמה גבוהה, כוללת סלון גדול עם יציאה לגינה, מטבח מודרני, 4 חדרי שינה וחדר עבודה. גינה פרטית מעוצבת עם פינת ישיבה ומערכת השקיה אוטומטית.',
        amenities: [
            'גינה פרטית 120 מ"ר',
            'פינת ברביקיו',
            'מחסן גדול',
            'חניה מקורה',
            'מערכת אזעקה',
            'קרוב לבתי ספר מובילים',
            'שכונה שקטה ומבוקשת',
            'ממ״ד מוגן'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        }
    });

    // Reveal elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.property-card, .about-text, .about-image').forEach(el => {
        el.style.opacity = '0'; // Initial state
        el.classList.add('fade-in'); // For now, simple fade in class reuse
        // Ideally we'd toggle a specific reveal class
    });

    // Form Submission (Mock)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'שולח...';
        btn.style.backgroundColor = '#94a3b8';

        setTimeout(() => {
            alert('תודה! הודעתך התקבלה בהצלחה. נחזור אליך בהקדם.');
            form.reset();
            btn.innerText = 'נשלח V';
            btn.style.backgroundColor = '#22c55e';

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });

    // Property Modal Functionality
    const modal = document.getElementById('propertyModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.querySelector('.modal-close');

    function openPropertyModal(propertyId) {
        const property = propertyData[propertyId];

        if (!property) return;

        const amenitiesHtml = property.amenities.map(amenity =>
            `<div class="amenity-item">${amenity}</div>`
        ).join('');

        modalBody.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="modal-header-image">
            <div class="modal-details">
                <h2 class="modal-title">${property.title}</h2>
                <p class="modal-price">${property.price}</p>

                <div class="modal-features-grid">
                    <div class="modal-feature">
                        <div class="modal-feature-icon">🏠</div>
                        <div class="modal-feature-label">חדרים</div>
                        <div class="modal-feature-value">${property.rooms}</div>
                    </div>
                    <div class="modal-feature">
                        <div class="modal-feature-icon">📐</div>
                        <div class="modal-feature-label">שטח</div>
                        <div class="modal-feature-value">${property.area}</div>
                    </div>
                    <div class="modal-feature">
                        <div class="modal-feature-icon">🏢</div>
                        <div class="modal-feature-label">קומה</div>
                        <div class="modal-feature-value">${property.floor}</div>
                    </div>
                    <div class="modal-feature">
                        <div class="modal-feature-icon">🚗</div>
                        <div class="modal-feature-label">חניה</div>
                        <div class="modal-feature-value">${property.parking}</div>
                    </div>
                    <div class="modal-feature">
                        <div class="modal-feature-icon">📅</div>
                        <div class="modal-feature-label">שנת בנייה</div>
                        <div class="modal-feature-value">${property.year}</div>
                    </div>
                    <div class="modal-feature">
                        <div class="modal-feature-icon">🧭</div>
                        <div class="modal-feature-label">כיוון</div>
                        <div class="modal-feature-value">${property.direction}</div>
                    </div>
                </div>

                <div class="modal-description">
                    <h3>תיאור הנכס</h3>
                    <p>${property.description}</p>
                </div>

                <div class="modal-description">
                    <h3>מתקנים ושירותים</h3>
                    <div class="modal-amenities">
                        ${amenitiesHtml}
                    </div>
                </div>
            </div>

            <div class="modal-contact">
                <h3>מעוניינים בנכס?</h3>
                <p>צרו קשר עכשיו לקביעת פגישה ולקבלת מידע נוסף</p>
                <button class="modal-contact-btn" onclick="document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); document.getElementById('propertyModal').classList.remove('show');">צור קשר</button>
            </div>
        `;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closePropertyModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Event listeners for property detail buttons
    document.querySelectorAll('.property-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const propertyId = btn.getAttribute('data-property');
            openPropertyModal(propertyId);
        });
    });

    // Close modal on X button click
    modalClose.addEventListener('click', closePropertyModal);

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePropertyModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closePropertyModal();
        }
    });
});
