import { Component, OnInit } from '@angular/core';
import { AlbumService} from '../../Services/Album.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pictures: [];
  showModal: boolean;
  constructor(private galleryService: AlbumService) { }

  ngOnInit() {
    this.getPictures()
  }

  getPictures(): void{
    this.galleryService.getPictures().subscribe(pictures => this.pictures = pictures)
  }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


}
