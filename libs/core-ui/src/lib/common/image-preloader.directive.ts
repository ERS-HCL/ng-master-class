// An image directive based on http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript
import { Directive, Input, OnInit, HostBinding } from '@angular/core';

// Define the Directive meta data
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[image-preloader]' //E.g <img mg-img-preloader="http://some_remote_image_url"
})

//Class must implement OnInit for @Input()
export class ImagePreloaderDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('image-preloader') targetSource: string;

  downloadingImage: any; // In class holder of remote image
  @HostBinding('attr.src') finalImage: any; //property bound to our host attribute.

  // Set an input so the directive can set a default image.
  @Input() defaultImage = '../../assets/preloader.gif';

  //ngOnInit is needed to access the @inputs() variables. these aren't available on constructor()
  ngOnInit() {
    //First set the final image to some default image while we prepare our preloader:
    this.finalImage = this.defaultImage;

    this.downloadingImage = new Image(); // create image object
    this.downloadingImage.onload = () => {
      //Once image is completed, console.log confirmation and switch our host attribute
      console.log('image downloaded');
      this.finalImage = this.targetSource; //do the switch 😀
    };
    // Assign the src to that of some_remote_image_url. Since its an Image Object the
    // on assignment from this.targetSource download would start immediately in the background
    // and trigger the onload()
    this.downloadingImage.src = this.targetSource;
  }
}
