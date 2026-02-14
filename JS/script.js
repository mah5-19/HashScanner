let count = 0;

function checkHash() {
    let hash = document.getElementById("hashInput").value.trim();
    let resultBox = document.getElementById("result");
    let loader = document.getElementById("loader");

    resultBox.innerHTML = "";
    document.getElementById("result-table").innerHTML = "";  // Reset the result table

    if (hash === "") {
        resultBox.innerHTML = "❗ الرجاء إدخال قيمة الهاش!";
        resultBox.style.color = "orange";
        return;
    }

    if (hash.length < 6) {
        resultBox.innerHTML = "❌ قيمة الهاش غير صحيحة!";
        resultBox.style.color = "red";
        return;
    }

    loader.style.display = "block";
    resultBox.innerHTML = "جاري الفحص ...";

    setTimeout(() => {
        loader.style.display = "none";

        // بيانات الهاش المختلفة
        let hashData = {
            "5f4dcc3b5aa765d61d8327deb882cf99": {
                classification: "آمن",
                size: "1.2 MB",
                lastAnalysisDate: "2/10/2026",
                fileType: "PDF",
                score: "98%"
            },
            "d2d2d2d6e2a2f8b51c7a1b8b5f5f7e80": {
                classification: "مشبوه",
                size: "3.5 MB",
                lastAnalysisDate: "1/1/2026",
                fileType: "EXE",
                score: "45%"
            },
            "6a60ffb9a8f7c70cce26fd0226e0ad12": {
                classification: "مشبوه",
                size: "2.4 MB",
                lastAnalysisDate: "2/5/2025",
                fileType: "DOCX",
                score: "70%"
            },
            "ba1a6a556dd87e2cd37c89a3fe9d6a5d": {
                classification: "آمن",
                size: "5.0 MB",
                lastAnalysisDate: "3/12/2025",
                fileType: "ZIP",
                score: "99%"
            },
            "b9ee3c6ee9d9f8f74a0b2e4f06b19532": {
                classification: "مشبوه",
                size: "7.3 MB",
                lastAnalysisDate: "5/2/2026",
                fileType: "EXE",
                score: "30%"
            }
        };

        let resultDetails = {};

        // تحقق من وجود الهاش في البيانات
        if (hashData[hash]) {
            resultBox.innerHTML = "✅ تم العثور على نتيجة الهاش";
            resultBox.style.color = "black";
            resultDetails = hashData[hash];
        } else {
            resultBox.innerHTML = "ℹ️ لم يتم العثور على هذا الهاش في قاعدة البيانات";
            resultBox.style.color = "orange";
            resultDetails = {
                classification: "غير موجود",
                size: "-",
                lastAnalysisDate: "-",
                fileType: "-",
                score: "-"
            };
        }

        // عرض الجدول التفاعلي للنتيجة
        let tableHTML = `
            <table>
                <tr>
                    <th>التصنيف</th>
                    <th>الحجم</th>
                    <th>تاريخ الفحص الأخير</th>
                    <th>نوع الملف</th>
                    <th>الدرجة</th>
                </tr>
                <tr>
                    <td>${resultDetails.classification}</td>
                    <td>${resultDetails.size}</td>
                    <td>${resultDetails.lastAnalysisDate}</td>
                    <td>${resultDetails.fileType}</td>
                    <td>${resultDetails.score}</td>
                </tr>
            </table>
        `;
        document.getElementById("result-table").innerHTML = tableHTML;

    }, 3000);
}
