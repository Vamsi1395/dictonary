const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const btn = document.getElementById('search');
const inputWord = document.getElementById('inp_word');

btn.addEventListener('click',()=>{
    fetch_data();
});
inputWord.addEventListener('keypress',function(e)
{
    if(e.key=='Enter')
    {
        fetch_data();
    }
});
function fetch_data()
{
    const inputWord = document.getElementById('inp_word').value;
// console.log(inputWord);
    fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            result.innerHTML=`
            <div class="word">
                    <h3>${inputWord}</h3>
                </div>
                <div class="details d-flex">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetic}</p>
                </div>
                <div class="word-meaning">
                    <p>${data[0].meanings[0].definitions[0].definition}</p>
                </div>
                <div class="word-example">
                    <p>${data[0].meanings[0].definitions[0].example}</p>
                </div>
                `;
        })
        .catch(result.innerHTML='CANNOT FIND MEANING OF THE WORD');
}