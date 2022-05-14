const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    mainAudio = wrapper.querySelector("#mainAudio"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = wrapper.querySelector(".progress-bar"),
    musicList = wrapper.querySelector(".music-list"),
    showMoreBtn = wrapper.querySelector("#more-music"),
    hideMusicBtn = musicList.querySelector("#close"),
    menuBtn1 = document.querySelector("#btnMenu1"),
    menuBtn2 = document.querySelector("#btnMenu2");

menuBtn1.addEventListener('click', () => {
    const topBarM1 = document.querySelector("#top-bar");
    topBarM1.classList.toggle('active1');
});

menuBtn2.addEventListener('click', () => {
    const topBarM1 = document.querySelector("#top-bar");
    topBarM1.classList.toggle('active2');
});

let musicIndex = 0;

wrapper.querySelector('.play').addEventListener('click', playMusic);

wrapper.querySelector('.pause').addEventListener('click', pauseMusic);

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    playingNow();
});

function loadMusic(index) {
    musicName.innerText = allMusic[index].name;
    musicArtist.innerText = allMusic[index].artist;
    musicImg.src = `img/${allMusic[index].img}.png`;
    mainAudio.src = `songs/${allMusic[index].src}.mp3`;
}

function playMusic() {
    mainAudio.play();

    wrapper.querySelector('.pause').style.display = 'block';
    wrapper.querySelector('.play').style.display = 'none';

    musicImg.classList.remove('rotateImgPause');
    musicImg.classList.add('rotateImg');

    playingNow();
}

function pauseMusic() {
    mainAudio.pause();

    wrapper.querySelector('.play').style.display = 'block';
    wrapper.querySelector('.pause').style.display = 'none';

    musicImg.classList.remove('rotateImg');
    musicImg.classList.add('rotateImgPause');
}

function prevMusic() {
    musicIndex--;

    if (musicIndex < allMusic.length - allMusic.length) {
        musicIndex = allMusic.length;
        musicIndex--;
    }

    loadMusic(musicIndex);
    playMusic();
    playingNow();
}

function nextMusic() {
    musicIndex++;

    if (musicIndex > allMusic.length - 1) {
        musicIndex++;
        musicIndex = 0;
    }

    loadMusic(musicIndex);
    playMusic();
    playingNow();
}

nextBtn.addEventListener('click', () => {
    nextMusic();
});

prevBtn.addEventListener('click', () => {
    prevMusic();
});

mainAudio.addEventListener("timeupdate", () => {
    progressBar.style.width = `${Math.floor((mainAudio.currentTime / mainAudio.duration) * 100)}%`;
    let musicCurrentTime = wrapper.querySelector(".current");

    mainAudio.addEventListener("loadeddata", () => {
        let musicDuration = wrapper.querySelector(".duration");

        musicDuration.textContent = secForMin(Math.floor(mainAudio.duration));
    });
    musicCurrentTime.textContent = secForMin(Math.floor(mainAudio.currentTime));
});

function secForMin(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return minutes + ':' + seconds;

}

progressArea.addEventListener("click", (e) => {
    let progressWidthVal = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffSetX / progressWidthVal) * songDuration;
    playMusic();
});

const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", () => {
    let getText = repeatBtn.innerText;

    switch (getText) {
        case "repeat":
            repeatBtn.innerText = "repeat_one"
            repeatBtn.setAttribute("title", "Song looped");
            break;
        case "repeat_one":
            repeatBtn.innerText = "shuffle"
            repeatBtn.setAttribute("title", "Playback Shuffle");
            break;
        case "shuffle":
            repeatBtn.innerText = "repeat"
            repeatBtn.setAttribute("title", "Playlist looped");
            break;
    }
});

mainAudio.addEventListener("ended", () => {
    let getText = repeatBtn.innerText;

    switch (getText) {
        case "repeat":
            nextMusic();
            break;
        case "repeat_one":
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
            playingNow();
            break;
    }
});

showMoreBtn.addEventListener("click", () => {
    musicList.classList.toggle("show");
});

hideMusicBtn.addEventListener("click", () => {
    showMoreBtn.click();
});

const ulTag = wrapper.querySelector(".music-list ul");

for (let i = 0; i < allMusic.length; i++) {
    let liTag = `<li li-index="${i}">
                    <div class="row">
                        <span>${allMusic[i].name}</span>
                        <p>${allMusic[i].artist}</p>
                    </div>
                    <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
                    <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                </li>`;

    ulTag.insertAdjacentHTML("beforeend", liTag);

    let liAudioDuration = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", () => {
        liAudioDuration.textContent = secForMin(Math.floor(liAudioTag.duration));
        liAudioDuration.setAttribute("t-duration", secForMin(Math.floor(liAudioTag.duration)));
    });
}

const allLiTags = ulTag.querySelectorAll("li");

function playingNow() {
    for (let j = 0; j < allLiTags.length; j++) {
        let audioTag = allLiTags[j].querySelector(".audio-duration")

        if (allLiTags[j].classList.contains("now")) {
            allLiTags[j].classList.remove("now");
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;
        }

        if (allLiTags[j].getAttribute("li-index") == musicIndex) {
            allLiTags[j].classList.add("now");
            audioTag.innerText = "now";
        }

        allLiTags[j].setAttribute("onclick", "clicked(this)");
    }
}

function clicked(element) {
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}