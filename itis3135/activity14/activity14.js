//figured this out from this StackOverflow thingy: https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript

async function split(file){
    const response = await fetch(file);
    const json = await response.json();
    const {title,month,speaker,image,text} = json.speakers[0];
    return {title,month,speaker,image,text};
}

const speakers = ['json_files/toobin.json','json_files/sorkin.json','json_files/chua.json','json_files/sampson.json'];
function swap(speaker){
    split(speakers[speaker])
        .then(({title,month,speaker,image,text}) => {
            const main = document.getElementById('main');
            main.innerHTML = `
                <h1>${title}</h1>
                <h2>${month}</h2>
                <h3>${speaker}</h3>
                <img src=${image}></img>
                <p>${text}</p>
            `;
        })
}