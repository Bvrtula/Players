const players = [
    {
        playername: "Wojciech Szczęsny",
        img: "./img/szczesny.png",
        description: "“Szczena” we wszystkich grupowych spotkaniach notował mnóstwo kapitalnych interwencji. “Wisienką na torcie” było zatrzymanie Leo Messiego z 11. metrów w sposób absolutnie fenomenalny. Golkiper reprezentacji Polski wpuścił kilka goli mniej niż wskazywałyby na to współczynniki. Bohater. Odkupił wszystkie winy sprzed lat. W pierwszej fazie mistrzostw żaden bramkarz nie miał do niego podjazdu"
    },
    {
        playername: "Thiago Silva (Brazylia)",
        img: "./img/silva.jpg",
        description: "Piłkarz Chelsea potwierdził doskonałą formę prezentowaną w tym sezonie klubowym. Dyrygował obroną, zaliczył kilka klasowych interwencji, zapewniał spokój i jakość. Defensywa może być kluczowa do zdobycia Pucharu Świata. Ta brazylijska, z Thiago na czele, wygląda nadzwyczaj dobrze"
    },
    {
        playername: "Harry Souttar (Australia)",
        img: "./img/harry.jpg",
        description: "Australia sensacyjnie wyprzedziła Tunezję i Danię, z dwoma zwycięstwami awansując do 1/8 finału turnieju. Nie byłoby to możliwe bez 24-letniego Souttara, na co dzień obrońcy Stoke, który w trakcie mundialu wygląda jak stoper z naprawdę wysokiej półki"
    },
    {
        playername: "Josko Gvardiol (Chorwacja)",
        img: "./img/gvardiol.jpg",
        description: "Młody obrońca zrobił dla “Vatrenich” sporo dobrego, wielokrotnie ratując ich przed stratą gola i naprawiając błędy kolegów. Wykręcił bilans blisko sześciu skutecznych interwencji w obronie na mecz. Do tego imponował grą w powietrzu oraz, co nie może dziwić obserwatorów Bundesligi, kapitalnym wyprowadzeniem piłki. Kilka razy, zirytowany pasywnością kolegów, parł do przodu, mijając kolejnych rywali jak tyczki"
    },
    {
        playername: "Hakim Ziyech (Maroko)",
        img: "./img/hakim.jpg",
        description: " Marokańczyk wydaje się być na wylocie z londyńskiego klubu, bo też nie dał powodów, by tam na niego stawiano. Tymczasem w Katarze wcielił się w rolę superbohatera. Jakby to był inny piłkarz. Znów ten widowiskowy, przebojowy, odważny skrzydłowy z Ajaksu."
    },
    {
        playername: "Casemiro (Brazylia)",
        img: "./img/casemiro.jpg",
        description: "Szef brazylijskiego środka pola. Jak się prezentowała druga linia “Canarinhos” bez niego, widzieliśmy w meczu z Kamerunem. Pomocnik Manchesteru United dał swój najwspanialszy serwis, harując na boisku, a przy tym zapewnił drużynie cenne zwycięstwo ze Szwajcarią."
    },
    {
        playername: "Bruno Fernandes (Portugalia)",
        img: "./img/fernandes.jpg",
        description: "Mocny kandydat do miana piłkarza fazy grupowej. Bruno Fernandes wreszcie daje kadrze to, co ma najlepsze. W dwóch pierwszych spotkaniach strzelił dwa gole i zanotował tyle samo asyst. Jest dyrygentem orkiestry, nad którą pieczę sprawuje Fernando Santos."
    },
    {
        playername: "Ritsu Doan (Japonia)",
        img: "./img/doan.jpg",
        description: "Japoński super rezerwowy zasłużył na docenienie za efektywność. Bez niego rewelacyjni Azjaci mogliby nie wygrać grupy F. Nieco z przymusu przestawiamy Doana na lewą stronę pomocy/wahadła, ale akurat na tej stronie specjalnego urodzaju nie było, a jesteśmy przekonani, że i tutaj ten magiczny zmiennik poradziłby sobie bez zarzutu."
    },
    {
        playername: "Antoine Griezmann (Francja)",
        img: "./img/griezmann.jpg",
        description: "To jest jak na razie jego mundial. Griezmann, w reprezentacji grający za plecami najbardziej ofensywnego tercetu Mbappe-Giroud-Dembele, czuje się w Katarze jak ryba w wodzie. W fazie grupowej błyszczał jak za dawnych lat, znów pokazał swoją najlepszą wersję, tak rzadko widywaną ostatnio w piłce klubowej."
    },
    {
        playername: "Kylian Mbappe (Francja)",
        img: "./img/mbappe.jpg",
        description: "W Katarze gwiazdor PSG szybko dał sygnał, że chętnie zmaże niedawną plamę. Zdobył trzy bramki, w tym dwie arcyważne przeciwko Danii. Z gracją grał na fortepianie noszonym mu przez kolegów. Fazę grupową zakończył z wyróżnieniem"
    },
    {
        playername: "Cody Gakpo (Holandia)",
        img: "./img/gakpo.jpg",
        description: "Można powiedzieć, że to na plecach 23-latka ekipa Louisa van Gaala wjechała do fazy pucharowej. Niewykluczone, że tam wrzuci wyższy bieg, a Gakpo będą dzielnie sekundować inne gwiazdy. Na razie jednak to on jest numerem jeden."
    },
]

const displaySection = document.querySelector(".display-section");

window.addEventListener("load", () => {
    for(let i = 0; i <= players.length; i++){
        console.log(i)
        console.log(players[0].playername);
        const div = document.createElement("div")
        div.className = "player"
        div.innerHTML = `
        <div class="player-img-div">
        <img class="player-img" src="${players[i].img}">
        </div>
        <div class="player-name">${players[i].playername}</div>
        <hr>
        <div class="player-description">${players[i].description}</div>`

        displaySection.appendChild(div);
    };
    
});

// ${question[questionNumber].question}