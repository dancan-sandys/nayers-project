import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 url = ['../../assets/gallery/image5.jpg',"../../assets/gallery/img1.jpg" ,
 "../../assets/gallery/img00.jpg","../../assets/gallery/img3.jpg",
 "../../assets/gallery/image2.jpg","../../assets/gallery/image3.jpg",
 "../../assets/gallery/image8.jpg","../../assets/gallery/image2.jpg"]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
