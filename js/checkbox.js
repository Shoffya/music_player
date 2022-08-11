let mode = document.getElementById('check');
let span = document.getElementById('text');
let wrapperColors = document.getElementById('wrapperColors');
let topBarColors = document.getElementById('top-bar');
let musicListColors = document.getElementById('musicList');
let imgArea = document.getElementById('img-area');
let songDetails = document.getElementById('song-details');
let controlsModeDL = document.getElementById('controls');
let timerModeDL = document.getElementById('timer');
let menu1ModeDL = document.getElementById('menu1');
let menu2ModeDL = document.getElementById('menu2');
let menu3ModeDL = document.getElementById('menu3');

mode.addEventListener('change', () => {
    document.body.classList.toggle('light');

    if (mode.checked == false && wrapperColors.classList.contains('wrapperDark')) {
        span.textContent = "Light";
        wrapperColors.classList.remove('wrapperDark');
        wrapperColors.classList.add('wrapperLight');

        topBarColors.classList.remove('darkMode');
        topBarColors.classList.add('lightMode');

        musicListColors.classList.remove('darkMusicList');
        musicListColors.classList.add('lightMusicList');

        imgArea.classList.remove('imgDark');
        imgArea.classList.add('imgLight');

        songDetails.classList.remove('songDetailsDark');
        songDetails.classList.add('songDetailsLight');

        controlsModeDL.classList.remove('controlsDark');
        controlsModeDL.classList.add('controlsLight');

        timerModeDL.classList.remove('timerDark');
        timerModeDL.classList.add('timerLight');

        menu1ModeDL.classList.remove('menu1Dark');
        menu2ModeDL.classList.remove('menu2Dark');
        menu3ModeDL.classList.remove('menu3Dark');

        menu1ModeDL.classList.add('menu1Light');
        menu2ModeDL.classList.add('menu2Light');
        menu3ModeDL.classList.add('menu3Light');
    }
})

!mode.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    if (mode.checked == true && wrapperColors.classList.contains('wrapperLight')) {
        span.textContent = "Dark";
        wrapperColors.classList.remove('wrapperLight');
        wrapperColors.classList.add('wrapperDark');

        topBarColors.classList.remove('lightMode');
        topBarColors.classList.add('darkMode');

        musicListColors.classList.remove('lightMusicList');
        musicListColors.classList.add('darkMusicList');

        imgArea.classList.remove('imgLight');
        imgArea.classList.add('imgDark');

        songDetails.classList.remove('songDetailsLight');
        songDetails.classList.add('songDetailsDark');

        controlsModeDL.classList.remove('controlsLight');
        controlsModeDL.classList.add('controlsDark');

        timerModeDL.classList.remove('timerLight');
        timerModeDL.classList.add('timerDark');

        menu1ModeDL.classList.remove('menu1Light');
        menu2ModeDL.classList.remove('menu2Light');
        menu3ModeDL.classList.remove('menu3Light');

        menu1ModeDL.classList.add('menu1Dark');
        menu2ModeDL.classList.add('menu2Dark');
        menu3ModeDL.classList.add('menu3Dark');
    }
})