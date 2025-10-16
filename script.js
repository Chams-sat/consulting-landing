// Main JavaScript for Consulting Co. Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Testimonials Slider
    initTestimonialsSlider();
    
    // Service Cards Hover Effect
    initServiceCardsHover();
    
    // Language Toggle
    initLanguageToggle();
});

// Testimonials Slider
function initTestimonialsSlider() {
    const testimonials = [
        {
            text: "Consulting Co. transformed our business. Their strategic insights and hands-on approach led to a 200% increase in revenue within the first year. We couldn't be happier.",
            author: "Jane Doe, CEO",
            company: "Innovate Corp",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBNmJ-wHszG5jhqwA5KBmVklLrKSdWf7vPUGQm-2uqsWfHXk9BRQvgZ-_bAZnNADeAG-Mvr6XNni8g73_8YAkQw8dm43PJctRJuQhkacXnk3WIiVQU7f6P-NpJlcVxwUOarMPN-_yrTkweDCCKNJfV80iHOYgx9o3dyIL7Vn4thZ7jv4k2_lC-j4K56N6tHc9HXmhTCelcQ4Gllhv5H1Kp2JxVEHKT5-TtZwLJymKp5tBblBy3Zk0lmN3BNL7-fMSgidkcFa9TT9c"
        },
        {
            text: "The team at Consulting Co. provided invaluable guidance during our expansion phase. Their market research was thorough and their recommendations were spot-on.",
            author: "John Smith, COO",
            company: "Growth Industries",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBNmJ-wHszG5jhqwA5KBmVklLrKSdWf7vPUGQm-2uqsWfHXk9BRQvgZ-_bAZnNADeAG-Mvr6XNni8g73_8YAkQw8dm43PJctRJuQhkacXnk3WIiVQU7f6P-NpJlcVxwUOarMPN-_yrTkweDCCKNJfV80iHOYgx9o3dyIL7Vn4thZ7jv4k2_lC-j4K56N6tHc9HXmhTCelcQ4Gllhv5H1Kp2JxVEHKT5-TtZwLJymKp5tBblBy3Zk0lmN3BNL7-fMSgidkcFa9TT9c"
        },
        {
            text: "Working with Consulting Co. has been a game-changer for our financial strategy. Their expertise helped us optimize our operations and increase profitability by 35%.",
            author: "Sarah Johnson, CFO",
            company: "Tech Solutions Inc.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBNmJ-wHszG5jhqwA5KBmVklLrKSdWf7vPUGQm-2uqsWfHXk9BRQvgZ-_bAZnNADeAG-Mvr6XNni8g73_8YAkQw8dm43PJctRJuQhkacXnk3WIiVQU7f6P-NpJlcVxwUOarMPN-_yrTkweDCCKNJfV80iHOYgx9o3dyIL7Vn4thZ7jv4k2_lC-j4K56N6tHc9HXmhTCelcQ4Gllhv5H1Kp2JxVEHKT5-TtZwLJymKp5tBblBy3Zk0lmN3BNL7-fMSgidkcFa9TT9c"
        }
    ];
    
    let currentIndex = 0;
    const testimonialText = document.querySelector('.testimonial-text');
    const authorName = document.querySelector('.testimonial-card .font-semibold');
    const companyName = document.querySelector('.testimonial-card .text-sm');
    const companyLogo = document.querySelector('.testimonial-card img');
    const indicators = document.querySelectorAll('.flex.justify-center.gap-2.mt-4 span');
    
    // Navigation buttons
    const prevButton = document.querySelector('.testimonial-nav-button-left');
    const nextButton = document.querySelector('.testimonial-nav-button-right');
    
    // Update testimonial content
    function updateTestimonial(index) {
        // Add fade-out animation
        testimonialText.classList.add('fade-out');
        authorName.classList.add('fade-out');
        companyName.classList.add('fade-out');
        companyLogo.classList.add('fade-out');
        
        setTimeout(() => {
            // Update content
            testimonialText.textContent = testimonials[index].text;
            authorName.textContent = testimonials[index].author;
            companyName.textContent = testimonials[index].company;
            companyLogo.src = testimonials[index].image;
            
            // Update indicators
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.remove('bg-slate-300', 'dark:bg-slate-600');
                    indicator.classList.add('bg-primary');
                } else {
                    indicator.classList.remove('bg-primary');
                    indicator.classList.add('bg-slate-300', 'dark:bg-slate-600');
                }
            });
            
            // Add fade-in animation
            testimonialText.classList.remove('fade-out');
            testimonialText.classList.add('fade-in');
            authorName.classList.remove('fade-out');
            authorName.classList.add('fade-in');
            companyName.classList.remove('fade-out');
            companyName.classList.add('fade-in');
            companyLogo.classList.remove('fade-out');
            companyLogo.classList.add('fade-in');
            
            // Remove animation classes after animation completes
            setTimeout(() => {
                testimonialText.classList.remove('fade-in');
                authorName.classList.remove('fade-in');
                companyName.classList.remove('fade-in');
                companyLogo.classList.remove('fade-in');
            }, 500);
        }, 300);
    }
    
    // Event listeners for navigation buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });
    
    // Click event for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateTestimonial(currentIndex);
        });
    });
    
    // Auto-rotate testimonials every 7 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    }, 7000);
}

// Service Cards Hover Effect
function initServiceCardsHover() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('service-card-hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('service-card-hover');
        });
    });
}

// Language Toggle
function initLanguageToggle() {
    const translations = {
        en: {
            services: "Services",
            aboutUs: "About Us",
            contact: "Contact",
            getConsultation: "Get a Free Consultation",
            heroTitle: "Driving Growth Through Strategic Insights",
            heroSubtitle: "We provide expert consulting services to help your business achieve its goals.",
            ourExpertise: "Our Expertise",
            businessStrategy: "Business Strategy",
            businessStrategyDesc: "Develop and implement effective strategies for sustainable growth.",
            financialAdvisory: "Financial Advisory",
            financialAdvisoryDesc: "Navigate complex financial landscapes with our expert guidance.",
            marketResearch: "Market Research",
            marketResearchDesc: "Gain valuable insights into your market and customers.",
            operationalEfficiency: "Operational Efficiency",
            operationalEfficiencyDesc: "Optimize your processes to improve performance and reduce costs.",
            clientsSay: "What Our Clients Say",
            ourStory: "Our Story",
            ourStoryText: "Founded on the principle of delivering measurable results, Consulting Co. has been empowering businesses for over a decade. Our team of seasoned experts brings a wealth of experience from various industries, united by a passion for problem-solving and a commitment to our clients' success. We believe in building long-term partnerships based on trust, transparency, and a deep understanding of your unique challenges.",
            getInTouch: "Get in Touch",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit",
            copyright: "© 2023 Consulting Co. All rights reserved.",
            language: "العربية"
        },
        ar: {
            services: "الخدمات",
            aboutUs: "من نحن",
            contact: "اتصل بنا",
            getConsultation: "احصل على استشارة مجانية",
            heroTitle: "تحقيق النمو من خلال الرؤى الاستراتيجية",
            heroSubtitle: "نقدم خدمات استشارية متخصصة لمساعدة عملك على تحقيق أهدافه.",
            ourExpertise: "خبراتنا",
            businessStrategy: "استراتيجية الأعمال",
            businessStrategyDesc: "تطوير وتنفيذ استراتيجيات فعالة للنمو المستدام.",
            financialAdvisory: "الاستشارات المالية",
            financialAdvisoryDesc: "التنقل في المشهد المالي المعقد بتوجيه خبرائنا.",
            marketResearch: "أبحاث السوق",
            marketResearchDesc: "الحصول على رؤى قيمة حول السوق والعملاء.",
            operationalEfficiency: "الكفاءة التشغيلية",
            operationalEfficiencyDesc: "تحسين عملياتك لتحسين الأداء وتقليل التكاليف.",
            clientsSay: "ماذا يقول عملاؤنا",
            ourStory: "قصتنا",
            ourStoryText: "تأسست شركتنا على مبدأ تحقيق نتائج قابلة للقياس، وقد عملت على تمكين الشركات لأكثر من عقد من الزمان. يجلب فريقنا من الخبراء المتمرسين ثروة من الخبرة من مختلف الصناعات، متحدين بشغف لحل المشكلات والالتزام بنجاح عملائنا. نؤمن ببناء شراكات طويلة الأمد على أساس الثقة والشفافية وفهم عميق للتحديات الفريدة التي تواجهك.",
            getInTouch: "تواصل معنا",
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            submit: "إرسال",
            copyright: "© 2023 شركة الاستشارات. جميع الحقوق محفوظة.",
            language: "English"
        }
    };
    
    let currentLanguage = 'en';
    
    // Create language toggle button
    const languageToggle = document.createElement('button');
    languageToggle.className = 'btn-language';
    languageToggle.innerHTML = `<span class="material-symbols-outlined">language</span><span class="language-text">${translations[currentLanguage].language}</span>`;
    
    // Insert language toggle button in the header
    const navContainer = document.querySelector('.hidden.md\\:flex.flex-1.justify-end.gap-8');
    navContainer.insertBefore(languageToggle, navContainer.querySelector('.btn-primary'));
    
    // Toggle language function
    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        
        // Update button text
        languageToggle.querySelector('.language-text').textContent = translations[currentLanguage].language;
        
        // Update document direction
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
        
        // Update all text elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
        
        // Update specific elements that need special handling
        updateSpecificElements();
    }
    
    // Update specific elements that need special handling
    function updateSpecificElements() {
        // Navigation links
        document.querySelector('a[href="#services"]').textContent = translations[currentLanguage].services;
        document.querySelector('a[href="#about"]').textContent = translations[currentLanguage].aboutUs;
        document.querySelector('a[href="#contact"]').textContent = translations[currentLanguage].contact;
        
        // Buttons
        document.querySelectorAll('.btn-primary span.truncate').forEach(btn => {
            if (btn.textContent.includes('Get a Free Consultation')) {
                btn.textContent = translations[currentLanguage].getConsultation;
            } else if (btn.textContent.includes('Submit')) {
                btn.textContent = translations[currentLanguage].submit;
            }
        });
        
        // Hero section
        document.querySelector('h1').textContent = translations[currentLanguage].heroTitle;
        document.querySelector('h1 + h2').textContent = translations[currentLanguage].heroSubtitle;
        
        // Section titles
        document.querySelectorAll('.section-title').forEach(title => {
            if (title.textContent.includes('Our Expertise')) {
                title.textContent = translations[currentLanguage].ourExpertise;
            } else if (title.textContent.includes('What Our Clients Say')) {
                title.textContent = translations[currentLanguage].clientsSay;
            } else if (title.textContent.includes('Our Story')) {
                title.textContent = translations[currentLanguage].ourStory;
            } else if (title.textContent.includes('Get in Touch')) {
                title.textContent = translations[currentLanguage].getInTouch;
            }
        });
        
        // Service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards[0].querySelector('.service-card-title').textContent = translations[currentLanguage].businessStrategy;
        serviceCards[0].querySelector('.service-card-description').textContent = translations[currentLanguage].businessStrategyDesc;
        
        serviceCards[1].querySelector('.service-card-title').textContent = translations[currentLanguage].financialAdvisory;
        serviceCards[1].querySelector('.service-card-description').textContent = translations[currentLanguage].financialAdvisoryDesc;
        
        serviceCards[2].querySelector('.service-card-title').textContent = translations[currentLanguage].marketResearch;
        serviceCards[2].querySelector('.service-card-description').textContent = translations[currentLanguage].marketResearchDesc;
        
        serviceCards[3].querySelector('.service-card-title').textContent = translations[currentLanguage].operationalEfficiency;
        serviceCards[3].querySelector('.service-card-description').textContent = translations[currentLanguage].operationalEfficiencyDesc;
        
        // Our Story text
        document.querySelector('#about p').textContent = translations[currentLanguage].ourStoryText;
        
        // Form labels
        document.querySelector('label[for="name"]').textContent = translations[currentLanguage].name;
        document.querySelector('label[for="email"]').textContent = translations[currentLanguage].email;
        document.querySelector('label[for="message"]').textContent = translations[currentLanguage].message;
        
        // Footer
        document.querySelector('.footer-text').textContent = translations[currentLanguage].copyright;
    }
    
    // Add click event to language toggle button
    languageToggle.addEventListener('click', toggleLanguage);
}