document.addEventListener("DOMContentLoaded", () => {
    // 1. تأثير الكتابة لشاشة البداية (محلولة)
    const text = "محلولة | Done";
    let index = 0;
    const speed = 100; 
    
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            // إخفاء الشاشة الافتتاحية بعد الانتهاء
            setTimeout(() => {
                document.getElementById("splash-screen").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("splash-screen").classList.add("hidden");
                    document.getElementById("main-ui").classList.remove("hidden");
                }, 1000);
            }, 1000);
        }
    }
    
    typeWriter();
});

// 2. واجهة المطور المخفية بالكامل
function promptAdminLogin() {
    let user = prompt("أدخل اسم المستخدم للمطور:");
    if (user === "MAZA") {
        let pass = prompt("أدخل كلمة المرور:");
        if (pass === "admin6682") {
            // توجيه إلى صفحة المطور
            window.location.href = "admin.html";
        } else {
            alert("بيانات غير صحيحة.");
        }
    }
}

// 3. دليل الذكاء الاصطناعي (AI Guide)
function toggleAIGuide() {
    alert("🤖 أهلاً بك! لطلب منتج، تصفح الأقسام، اختر الكمية، ثم اضغط 'طلب المنتج'. سيتم إرسال طلبك فوراً للتاجر. ولأصحاب المتاجر، يمكنكم التسجيل عبر الواجهة المخصصة وإضافة منتجاتكم بكل سهولة.");
}

// 4. دالة وهمية حالياً لتسجيل الدخول (يتم تفعيلها لاحقاً عبر Firebase)
function loginWithGoogle() {
    alert("سيتم نقلك لصفحة المصادقة الخاصة بجوجل جيميل...");
    // هنا يوضع كود Firebase Auth
}
