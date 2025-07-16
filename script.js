/**
 * SCRIPT 100% SEGURO - SEM COLETA DE DADOS
 * Este script implementa apenas funcionalidades locais do navegador
 * Não faz requisições para servidores externos
 * Não coleta ou envia dados do usuário
 * Não usa cookies ou localStorage
 */

// Funcionalidade do menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
        menuBtn.classList.add('active');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenu.classList.remove('active');
    menuBtn.classList.remove('active');
}

// Scroll suave para âncoras (funcionalidade local)
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe active ao mobile menu quando necessário
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu.active {
            display: flex !important;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);
    
    // Scroll suave para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fecha o menu mobile se estiver aberto
                closeMobileMenu();
            }
        });
    });
    
    // Efeito de destacar link ativo na navegação
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveLink() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    // Adiciona estilo para link ativo
    const activeStyle = document.createElement('style');
    activeStyle.textContent = `
        .nav-link.active {
            color: var(--primary-color) !important;
            position: relative;
        }
        
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--primary-color);
        }
    `;
    document.head.appendChild(activeStyle);
    
    // Listener para scroll
    window.addEventListener('scroll', highlightActiveLink);
    
    // Animação dos cards de serviço ao aparecer na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa os cards de serviço
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observa os cards de ação
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Função para detectar se o usuário está em dispositivo móvel (sem coleta de dados)
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Ajuste automático da altura do hero em dispositivos móveis
function adjustHeroHeight() {
    const hero = document.querySelector('.hero');
    if (isMobileDevice()) {
        hero.style.minHeight = '100vh';
        hero.style.paddingTop = '6rem';
    } else {
        hero.style.minHeight = '100vh';
        hero.style.paddingTop = '8rem';
    }
}

// Listener para redimensionamento da janela
window.addEventListener('resize', adjustHeroHeight);

// Fecha o menu mobile ao clicar fora dele
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

// Previne comportamento padrão de formulários (caso seja adicionado no futuro)
document.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Este é um site estático seguro. Entre em contato pelos canais disponíveis.');
});

// Função para scroll to top (botão pode ser adicionado se necessário)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Log de inicialização (apenas para debug local, não envia dados)
console.log('DentalCare - Site estático carregado com sucesso!');
console.log('Nenhum dado do usuário é coletado ou enviado.');

/**
 * RECURSOS DE SEGURANÇA IMPLEMENTADOS:
 * 
 * 1. Nenhuma requisição HTTP/HTTPS para servidores externos
 * 2. Não usa cookies, localStorage ou sessionStorage
 * 3. Não coleta dados do usuário
 * 4. Não envia telemetria ou analytics
 * 5. Todas as funcionalidades são locais do navegador
 * 6. Não usa bibliotecas externas
 * 7. Não faz tracking de comportamento
 * 8. Código fonte transparente e auditável
 */
