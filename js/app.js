window.onload = function() { 
    //html üzerindeki elementlerin js de adlandırılması
    var rateus = document.getElementById("rateus");

    var yesButton = document.getElementById("yes");
    var noButton = document.getElementById("no");

    // Hayır seçildiğinde çıkacak kutu
    var negative = document.createElement("div");
    negative.className = "rateusbox";
    negative.id = "negative";

    var negativeText = document.createElement("p");
    negativeText.className = "rateustext";
    negativeText.innerText = "Umarım ileride farklı düşünürsünüz☹️";
    negative.appendChild(negativeText);

    // Evet seçildiğinde çıkacak kutu
    var rating = document.createElement("div");
    rating.className = "rateusbox";
    rating.id = "rating";

    var ratingText = document.createElement("p");
    ratingText.className = "rateustext";
    ratingText.innerText = "Lütfen sitemizi değerlendirin";
    rating.appendChild(ratingText);

    var ratingStars = document.createElement("div");
    ratingStars.className = "stars";
    rating.appendChild(ratingStars);

    var ratingForm = ratingStars.appendChild(document.createElement("form"));
    
    //Yıldızlar için hazırlanmış for loop
    var starIds = [5, 4, 3, 2, 1];
    for(var i = 0; i < starIds.length; i++) {
        var starinput = document.createElement("input");
        starinput.className = "star star-" + starIds[i];
        starinput.id = "star-" + starIds[i];
        starinput.value = starIds[i];
        starinput.setAttribute("type", "radio");
        starinput.setAttribute("name", "star");

        var starlabel = document.createElement("label");
        starlabel.className = "star star-" + starIds[i];
        starlabel.id = starIds[i];
        starlabel.setAttribute("for","star-" + starIds[i]);

        ratingForm.appendChild(starinput);
        ratingForm.appendChild(starlabel);

        // Sonucun gösterilmesi fonksiyonu yıldız seçimini çekebilmek adına loop içine yerleştirildi
        function showResult() {
            choice = event.target.id;
            document.getElementById("rating").remove();
            document.getElementById("rateus").appendChild(result);
            resultText.innerHTML = choice + " puan verdiniz";
            setTimeout(function() {
                document.getElementById("rateus").remove();
            }, 5000);
            
        }

        starlabel.onclick = showResult;
    }
    // Yıldız seçimi yapıldığında çıkan kutu
    var result = document.createElement("div");
    result.className = "rateusbox";
    result.id = "result";
    var resultText = document.createElement("p");
    resultText.className = "rateustext";
    var choice = null;
    resultText.innerHTML = choice + "puan verdiniz";
    result.appendChild(resultText);

    // Evet ve hayır butonlarının fonksiyonları
    yesButton.onclick = showStars;

    function showStars() {
        setTimeout(function() {
            document.getElementById("question").remove();
            document.getElementById("rateus").appendChild(rating);
        }, 200);
    }

    noButton.onclick = showOk;

    function showOk() {
        setTimeout(function() {
            document.getElementById("question").remove();
            document.getElementById("rateus").appendChild(negative);
        }, 200);
    }
};

