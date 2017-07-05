import { Component, OnInit } from '@angular/core';
import { Video } from "app/video";
import { VideoService } from "app/video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;
  /* Video[] = [
    {"_id": "1", "name": "Title 1", "url": "url 1", "age": "age 1"},
    {"_id": "2", "name": "Title 2", "url": "url 2", "age": "age 2"},
    {"_id": "3", "name": "Title 3", "url": "url 3", "age": "age 3"},
    {"_id": "4", "name": "Title 4", "url": "url 4", "age": "age 4"}
  ];
*/
  selectedVideo: Video;
  private hidenewVideo: boolean = true;

  constructor(private _videoService: VideoService) { } //dependency injection

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);
  }
  
  onSelectVideo(video:any){
  this.selectedVideo = video;
  this.hidenewVideo = true;
  console.log(this.selectedVideo);
}

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hidenewVideo = true;
        this.selectedVideo = resNewVideo;
      });
  }

  onUpdateVideoEvent(video:any){
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
        console.log(this.selectedVideo);

  }

onDeleteVideoEvent(video: any) {
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => {
        for (let i = 0; i < videoArray.length; i++) {
          if (videoArray[i]._id === video._id) {
            videoArray.splice(i, 1);
          }
        }
      });
    this.selectedVideo = null;
  };

  newVideo(){
    this.hidenewVideo = false;
  }
}
