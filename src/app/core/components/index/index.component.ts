import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

/***
 * Personal Component
 */
export class IndexPersonalComponent implements OnInit {

  private _album = [];

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/personal/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/personal/' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
  }

  workList = [
    {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/go_africa_learning.png',
      title: 'GO Africa Investment',
      link: 'https://go-africa.io',
      category: 'Blockchain'
    },
    {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/go_africa_learning.png',
      title: 'GO Africa Learning',
      link: 'https://learning.go-africa.io',
      category: 'Microservices'
    },
    {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/react_estate.png',
      title: 'React Estate',
      link: 'https://react-estate-git-main-slowedwalk.vercel.app',
      category: 'React'
    },
    {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/airbnb_clone.png',
      title: 'Smart Immo',
      link: 'https://smart-immo.vercel.app',
      category: 'NextJs'
    },
    {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/e-commerce.png',
      title: 'Ecommerce Website',
      category: 'NextJs'
    },
    {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/expense_tracker.png',
      title: 'Speech Expense Tracker',
      category: 'React'
    }
  ];

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  visit(link: string): void {
    window.open(link, '_blank');
  }


  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  /***
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  };

  /**
   * Blog Data
   */
   blogData = [
    {
      image: "assets/images/blog/mobile-app.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Afaka Benjamin",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/it.jpg",
      title: "How IT is changing the world as we know it",
      like: "33",
      message: "08",
      name: "Afaka Benjamin",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/microservices_1.jpg",
      title: "Discover the world of Microservices ",
      like: "33",
      message: "08",
      name: "Afaka Benjamin",
      date: "13th August, 2019"
    }
  ];

  ngOnInit(): void {
  }

}
