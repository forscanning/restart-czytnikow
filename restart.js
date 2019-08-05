const startBtn = document.getElementById('startBtn');

function makeArrayObjectFromContent(content) {
    const arrayContent = content.split(',');
    const objContent = [];
    const filteredContent = arrayContent.filter(item => item.indexOf('Newland_') !== -1)

    for (let i = 0; i < filteredContent.length; i++) {

        let tab = filteredContent[i].split('_')
        objContent[i] = { ip: tab[1].replace('192', '250') }

    }
    return objContent;
}

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const content = document.getElementById('takeCSV').value;
    const iframeUrl = makeArrayObjectFromContent(content);
    iframeUrl.forEach((item, index) => {
        const iFramePanel = document.createElement('IFRAME');
        iFramePanel.setAttribute("src", item.ip);
        document.body.appendChild(iFramePanel);
        console.log('utowrzyłem');
        document.body.removeChild(iFramePanel);
        console.log((2 + 3) * index * index);
        console.log('usunąłem');
        if (index === iframeUrl.length - 1) return alert('Zrobione');
    })
})

