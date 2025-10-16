// i18n.js - Language translation functionality

document.addEventListener('DOMContentLoaded', function() {
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
        document.querySelectorAll('.btn-primary').forEach(btn => {
            const span = btn.querySelector('span.truncate');
            if (span && span.textContent.includes('Get a Free Consultation')) {
                span.textContent = translations[currentLanguage].getConsultation;
            } else if (span && span.textContent.includes('Submit')) {
                span.textContent = translations[currentLanguage].submit;
            }
        });
        
        // Hero section
        const heroTitle = document.querySelector('.hero-section h1');
        const heroSubtitle = document.querySelector('.hero-section h2');
        if (heroTitle) heroTitle.textContent = translations[currentLanguage].heroTitle;
        if (heroSubtitle) heroSubtitle.textContent = translations[currentLanguage].heroSubtitle;
        
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
        if (serviceCards.length >= 4) {
            updateServiceCard(serviceCards[0], 'businessStrategy', 'businessStrategyDesc');
            updateServiceCard(serviceCards[1], 'financialAdvisory', 'financialAdvisoryDesc');
            updateServiceCard(serviceCards[2], 'marketResearch', 'marketResearchDesc');
            updateServiceCard(serviceCards[3], 'operationalEfficiency', 'operationalEfficiencyDesc');
        }
        
        // Our Story text
        const storyText = document.querySelector('#about p');
        if (storyText) storyText.textContent = translations[currentLanguage].ourStoryText;
        
        // Form labels
        const nameLabel = document.querySelector('label[for="name"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const messageLabel = document.querySelector('label[for="message"]');
        if (nameLabel) nameLabel.textContent = translations[currentLanguage].name;
        if (emailLabel) emailLabel.textContent = translations[currentLanguage].email;
        if (messageLabel) messageLabel.textContent = translations[currentLanguage].message;
        
        // Footer
        const footerText = document.querySelector('.footer-text');
        if (footerText) footerText.textContent = translations[currentLanguage].copyright;
    }
    
    function updateServiceCard(card, titleKey, descKey) {
        const title = card.querySelector('.service-card-title');
        const desc = card.querySelector('.service-card-description');
        if (title) title.textContent = translations[currentLanguage][titleKey];
        if (desc) desc.textContent = translations[currentLanguage][descKey];
    }
    
    // Add click event to language toggle button
    languageToggle.addEventListener('click', toggleLanguage);
});