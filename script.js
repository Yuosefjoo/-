
function getAdvice() {
    var name = document.getElementById("name").value;
    var mood = document.getElementById("mood").value;
    var advice = "";

    switch (mood) {
        case "سعيد":
            advice = "يا أهلًا بيك يا " + name + "! دايمًا مبسوط ومفرح زي العسل.";
            break;
        case "حزين":
            advice = "متيأسش يا " + name + ". الدنيا بتغير والأيام بتمر، هتمشي الحزن قريبًا.";
            break;
        case "غاضب":
            advice = "استنّى شوية يا " + name + ". الغضب مش حل، خليك هادي ومتأنِّي.";
            break;
        case "هادئ":
            advice = "ربنا يحفظك يا " + name + ". الهدوء دايمًا خير وسلام.";
            break;
        case "متحمس":
            advice = "ماشي يا " + name + ". الحماس ده جميل، استمر واجتهد وهتحقق كل أهدافك.";
            break;
    }

    document.getElementById("advice").innerText = advice;
}
