const videoPath = "C:\\Users\\Administrator\\Desktop\\test.mp4";
const audioPath = "C:\\Users\\Administrator\\Desktop\\test.mp3";

class Operations {
    init() {
        this.initVideoPlayer();
        this.initAudioPlayer();
    }
    
    initVideoPlayer() {
        let player = document.getElementById("videoPlayer");
        player.src = videoPath;
    }
    
    initAudioPlayer() {
        let player = document.getElementById("audioPlayer");
        player.src = audioPath;
    }
}

{
    let operations = new Operations();
    operations.init();
}
