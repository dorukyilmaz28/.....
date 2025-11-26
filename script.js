// ============================================
// Moral Yükseltme Mesajları
// ============================================
const moraleMessages = [
    "ASLA PES ETME! Sen çok daha güçlüsün! 🔥",
    "Kimsenin senin moralini bozmasına izin verme! Sen değerlisin! 🛡️",
    "Her zorluk seni daha da güçlendiriyor. Devam et! 💪",
    "Sen yenilmezsin! Hiçbir şey seni durduramaz! ⚡",
    "İçindeki gücü kullan! Sen sınırsız potansiyele sahipsin! 🌟",
    "Zorluklar seni durduramaz, sadece güçlendirir! 💎",
    "Sen biriciksin ve özelsin! Bunu asla unutma! ✨",
    "Her düşüş bir kalkış için. Pes etme, devam et! 🚀",
    "Senin içindeki ışık her zaman parlayacak! 💡",
    "Kimse senin değerini belirleyemez. Sen kendin belirlersin! 👑",
    "Zor günler geçecek, ama senin gücün kalıcı! 🌊",
    "Her başarısızlık bir öğrenme fırsatı. Devam et! 📚",
    "Senin hikayen henüz yazılmadı, en iyisi geliyor! 📖",
    "Moralini bozmaya çalışanları görmezden gel. Sen odaklan! 🎯",
    "Senin gücün sınırsız! İçindeki ateşi yak! 🔥",
    "Her gün yeni bir fırsat, her an yeni bir başlangıç! 🌈",
    "Senin varlığın bir hediyedir! Kendine değer ver! 🎁",
    "Zorluklar seni şekillendiriyor, seni kırmıyor! 💪",
    "Senin başarıların başkalarına ilham veriyor! ⭐",
    "Her adımın seni hedefine bir adım daha yaklaştırıyor! 🎪",
    "Senin sevgin ve enerjin etrafındakilere ilham veriyor! 💫",
    "Bugün yaptığın her şey geleceğini şekillendiriyor! 🌱",
    "Senin gülümsemen dünyayı aydınlatıyor! 😊",
    "Her nefes alışında yeni bir fırsat doğuyor! 🌺",
    "Seni seven ve değer veren çok insan var! 💝",
    "En güzel günler henüz gelmedi, onlar seni bekliyor! ☀️",
    "Senin varlığın dünyayı daha güzel yapıyor! ✨",
    "Bugün de muhteşem bir gün olacak, buna inan! 🌈",
    "Sen gerçekten harika birisin! 🌟",
    "Her gün seni daha da güçlendiriyor! 💪"
];

// ============================================
// DOM Elementleri
// ============================================
const moraleButton = document.getElementById('moraleButton');
const messageText = document.getElementById('messageText');
const messageContainer = document.getElementById('messageContainer');
const lilyBouquet = document.getElementById('lilyBouquet');

// ============================================
// Lilyum Demeti Gösterme Fonksiyonu
// ============================================
function showLilyBouquet() {
    // Önceki lilyum demetini kaldır
    lilyBouquet.classList.remove('show', 'hide');
    
    // Kısa bir gecikme sonrası lilyum demetini göster
    setTimeout(() => {
        lilyBouquet.classList.add('show');
        
        // 3 saniye sonra lilyum demetini gizle
        setTimeout(() => {
            lilyBouquet.classList.remove('show');
            lilyBouquet.classList.add('hide');
            
            // Animasyon bitince class'ı temizle
            setTimeout(() => {
                lilyBouquet.classList.remove('hide');
            }, 800);
        }, 3000);
    }, 100);
}

// ============================================
// Buton Tıklama Fonksiyonu - Sadece Lilyum Demeti
// ============================================
function showRandomMessage() {
    // Sadece lilyum demetini göster
    showLilyBouquet();
    
    // Buton animasyonu için hafif bir shake efekti
    moraleButton.style.animation = 'none';
    setTimeout(() => {
        moraleButton.style.animation = 'buttonPulse 0.3s ease';
    }, 10);
}

// ============================================
// Buton Tıklama Event Listener
// ============================================
moraleButton.addEventListener('click', showRandomMessage);

// ============================================
// Kartlara Tıklama Event Listener (Bonus)
// ============================================
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Kart tıklandığında hafif bir bounce efekti
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'cardBounce 0.5s ease';
        }, 10);
    });
});

// ============================================
// Sayfa Yüklendiğinde İlk Mesajı Göster (Opsiyonel)
// ============================================
window.addEventListener('load', () => {
    // Sayfa yüklendiğinde hoş bir karşılama mesajı gösterilebilir
    // Şu an için kapalı, isterseniz açabilirsiniz
    // setTimeout(() => {
    //     showRandomMessage();
    // }, 1000);
});

// ============================================
// Klavye Desteği (Enter veya Space ile butona basma)
// ============================================
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        moraleButton.click();
    }
});

// ============================================
// Smooth Scroll (Eğer sayfa uzarsa)
// ============================================
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// ============================================
// CSS Animasyonları için dinamik stil ekleme (gerekirse)
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes buttonPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes cardBounce {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-5px) scale(1.02); }
    }
`;
document.head.appendChild(style);

