let inputValue
let btn = document.getElementById('checker')
btn.addEventListener('click', () => {
    inputValue = document.getElementById("check").value
    let wordsArray = getAllText(inputValue)
    sendWordsForCheck(wordsArray)
})

function getAllText(queryName) {
    const element = document.querySelectorAll(queryName)
    let result = Array.prototype.map.call(element, data => {
        return data.innerText
    }).join(' ')
    let wordsArray = toWords(result)
    return wordsArray
}

function toWords(text) {
    let wordsArray = text.replace(/[$&+,:;=?@#|'<>.↵^*()%!।“”-]/g, '');
    wordsArray = wordsArray.replace(/\s+/g, ' ')
    return wordsArray.split(' ')
}

async function sendWordsForCheck(body) {
    const url = 'http://localhost:3000/spellCheck/bangla';
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        })
        var result = await response.json();

        let tags = document.querySelectorAll(inputValue)
        recursiveCheck(result.wrongWord, tags)
    } catch (error) {
        console.error('Error:', error);
    }
}

function recursiveCheck(worngWords, tag) {
    console.log(worngWords, tag)
    Array.from(tag).map(tag => {
        console.log(tag)
    })
    // Array.prototype.map(tag, (tag) => {
    //     console.log(tag)
    //})
}




function checkdiv(json) {

    var local;
    const text = inputValue

    const textbox = document.querySelectorAll(text)
    if (textbox.length !== 0) {
        const tagLength = textbox[0].children.length
        for (var i = 0; i < tagLength; i++) {
            local = textbox[0].children[i].localName
            if (local == 'p' || local == 'h1') {
                const text = textbox[0].children[i].innerText
                const words = toWords(text)
                console.log(words)
                // textUnderline(json, words, local)
            }
        }
    }
}




function textUnderline(json, words, local) {
    $(document).ready(function () {
        $(local).each(function () {

            // var words = $(this).text().split(' ');

            // let words = toWords($(this)[0].innerText)
            // console.log(words)
            console.log(json)
            $(this).empty();
            for (var i = 0; i < words.length; i++) {
                var isMatch = false
                for (var n = 0; n < json.wrongWord.length; n++) {
                    if (words[i] != "") {
                        if (json.wrongWord[n] === words[i]) {
                            $(this).append(' <span class="worngWord">' + words[i] + '</span>')
                            isMatch = true
                        }
                    }
                }
                if (words[i] != "") {
                    if (!isMatch) {
                        $(this).append(' <span>' + words[i] + '</span>')
                    }

                }
            }

        })
    })
}