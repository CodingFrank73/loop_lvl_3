let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

function cutText(text) {
    let charArr = text.split("");
    let tempArr = [];
    let resultArr = [];

    for (let i = 0; i < charArr.length; i++) {

        let tempCharArr = charArr.splice(0, 100);
        let resultString = "";

        tempCharArr.forEach(e => {
            resultString += e;
        });

        tempArr.push(resultString + ` - ${tempArr.length + 1} of `);
    }

    tempArr.forEach(e => {
        resultArr.push(e + `${tempArr.length}`);
    });

    console.log(resultArr);
}
cutText(text);


// ---------- Aufgabe 3_2 ----------
let numArr = [5, 22, 15, 100, 55];
let prim = true;

for (let i = 0; i < numArr.length; i++) {

    for (let j = 2; j < Math.sqrt(numArr[i]) + 1; j++) {

        if (numArr[i] % j == 0) {
            prim = false;
            break;
        }
    }

    if (prim == true) {
        document.getElementById("result").innerHTML = `<h1>${numArr[i]} ist eine Primzahl</h1><br>`;
        console.log(numArr[i] + " ist eine Primzahl");
    }

}

// ---------- Aufgabe 3_3 ----------
function stretch(value) {
    let x = "";

    if (value == 0) {
        alert("Die Eingabe der Zahl 0 ist nicht erlaubt!!!");
        return;

    } else if (value % 2 == 0) {
        for (let i = 1; i <= value; i++) {
            x += "o"
        }

    } else {
        for (let i = 0; i < value; i++) {
            x += "o"

            for (let j = 0; j < 1 && i < (value - 1); j++) {
                x += "O";
                i++;
            }
        }

    }

    document.getElementById('result').innerHTML = `L${x}p`
}

// ---------- Aufgabe 3_4 ----------
function calc() {
    const valueMax = document.getElementById("valueMax");
    const ersteZahl = document.getElementById("ersteZahl");
    const zweiteZahl = document.getElementById("zweiteZahl");

    if (valueMax.value == "") {
        alert("Ohne eine Maximale Zahl kann keine Berechnung durchgeführt werden")
        return;
    }

    if (ersteZahl.value == zweiteZahl.value) {
        alert("Die Erste Zahl darf nicht gleich der Zweiten Zahl sein")
        return;
    }

    const returnedNumbers = checkNumber(ersteZahl.value).concat(checkNumber(zweiteZahl.value));

    let sum = 0;
    for (let i = 0; i < returnedNumbers.length; i++) {
        sum = sum + returnedNumbers[i];
    }

    function checkNumber(value) {
        let z = 0;
        let x = [];

        while (z < valueMax.value) {

            if (z % value == 0 && z > value) { x.push(z) }
            z++;
        }
        return x
    }

    document.getElementById("result2").innerHTML = (Number(ersteZahl.value) + Number(zweiteZahl.value) + sum);

}
