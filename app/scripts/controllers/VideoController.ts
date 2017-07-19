import { Controller } from '../lib/Controller';
import { Vimeo } from '../shims/Vimeo';

export class VideoController extends Controller {

    static selector: string = '[data-video-controller]';

    constructor(element: HTMLElement) {
      super(element);
      if (element.getAttribute('data-video-controller') === 'vimeo') {
        let player = new Vimeo.Player(element);
        player.play().then(function () {
        }).catch(function (error: any) {
          switch (error.name) {
            case 'PasswordError':
              // the video is password-protected and the viewer needs to enter the
              // password first
              break;
      
            case 'PrivacyError':
              // the video is private
              break;
      
            default:
              // some other error occurred
              break;
          }
        });
      } else {
        let vid = (<HTMLVideoElement>element);

        document.querySelector('[data-video-button]').addEventListener('click', () => {
          this.playPauseVideo(vid)
        });
        vid.addEventListener("playing", () => {
          document.querySelector('[data-video-button]').classList.add('hidden');
        });
        vid.addEventListener('click', () => {
          this.playPauseVideo(vid);
        });
      }
      
    }
  
    playPauseVideo(vid: any) {
      if (vid.readyState >= 2 && vid.paused) {
        vid.play();
      } else if (!vid.paused) {
        vid.pause();
        document.querySelector('[data-video-button]').classList.remove('hidden');
      }
    }
}