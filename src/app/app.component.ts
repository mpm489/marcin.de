import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images =['7.jpg', '8.jpg', '10.jpg', '12.jpg' ];
  currentImage = 0;

  ngOnInit(){
    this.updateImage();
  }


  updateImage(){
    setInterval(()=>{     
      this.currentImage ++;
      this.currentImage = this.currentImage % this.images.length;      
    }, 6000)
  }
}
