/* ================= قاعدة البيانات المزامنة ومحرك التطبيق ================= */

// تهيئة البيانات الافتراضية في حال تشغيل النظام لأول مرة
if (!localStorage.getItem('done_stores')) {
    localStorage.setItem('done_stores', JSON.stringify([
        { id: "store_1", name: "مطعم برجر هب", category: "restaurants", approved: true, email: "merchant@gmail.com" }
    ]));
}

if (!localStorage.getItem('done_products')) {
    localStorage.setItem('done_products', JSON.stringify([
        { id: 101, storeId: "store_1", name: "وجبة كريسبي سوبريم", priceNormal: 4.5, priceFast: 6.0, stock: 12, category: "restaurants", desc: "صدر دجاج مقرمش مع صلصة سرية" }
    ]));
}

if (!localStorage.getItem('done_orders')) {
    localStorage.setItem('done_orders', JSON.stringify([]));
}

// دوال استدعاء البيانات وحفظها الفوري
function getStores() { return JSON.parse(localStorage.getItem('done_stores')); }
function getProducts() { return JSON.parse(localStorage.getItem('done_products')); }
function getOrders() { return JSON.parse(localStorage.getItem('done_orders')); }

function saveStores(data) { localStorage.setItem('done_stores', JSON.stringify(data)); }
function saveProducts(data) { localStorage.setItem('done_products', JSON.stringify(data)); }
function saveOrders(data) { localStorage.setItem('done_orders', JSON.stringify(data)); }

// محرك شاشة البداية (تأثير الكتابة الموشح)
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById('splash-screen');
    const typingText = document.getElementById('typing-text');
    
    if (splash && typingText) {
        const text = "محلولة | Done";
        let i = 0;
        function type() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 120);
            } else {
                setTimeout(() => {
                    splash.style.opacity = '0';
                    setTimeout(() => splash.classList.add('hidden'), 600);
                }, 1200);
            }
        }
        type();
    }
    
    // تشغيل دوال الصفحات تلقائياً بناءً على مكان التواجد
    if (document.getElementById('customer-market-anchor')) renderCustomerMarket();
    if (document.getElementById('merchant-dashboard-anchor')) renderMerchantDashboard();
    if (document.getElementById('admin-dashboard-anchor')) renderAdminDashboard();
});

/* ================= بوابة المطور المخفية الشاملة ================= */
let hiddenClicks = 0;
function triggerSecretAdmin() {
    hiddenClicks++;
    if (hiddenClicks >= 3) {
        hiddenClicks = 0;
        let user = prompt("أدخل معرف المطور السري:");
        let pass = prompt("أدخل كلمة المرور:");
        if (user === "MAZA" && pass === "admin6682") {
            sessionStorage.setItem('done_role', 'admin');
            window.location.href = 'admin.html';
        } else {
            alert("صلاحية مرفوضة! تم تسجيل المحاولة.");
        }
    }
}

/* ================= نظام دليل الذكاء الاصطناعي الإرشادي التفاعلي ================= */
function runAIGuide(context) {
    let message = "";
    if (context === 'customer') {
        message = "🤖 مساعد محلولة الذكي لخدمتك:\n\n1. اختر القسم الذي تريده من الأعلى (طلبات، مزارع، مطاعم).\n2. المنتجات تحتوي على سعرين (عادي للتوصيل المجدول، وفوري للتوصيل المستعجل بأسعار متغيرة).\n3. يمكنك تحديد الكمية والضغط على 'طلب المنتج' ليتم تحويلك وإرسال النموذج فوراً للتاجر والمطور بنفس اللحظة!";
    } else if (context === 'merchant') {
        message = "🤖 دليل التاجر الذكي:\n\n1. قم بإضافة منتجاتك وحدد أسعار التوصيل (العادي والفوري).\n2. تأكد من إدخال كمية المخزون (Stock) بدقة؛ النظام سيتكفل بتحويل المنتج إلى حالة 'Sold Out' تلقائياً بمجرد نفاذه لحمايتك من الطلبات الزائدة!\n3. الطلبات تظهر لك مرقمة فوراً بانتظار التجهيز.";
    }
    alert(message);
}
