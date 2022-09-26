import { Component, OnInit } from '@angular/core';
import {Projects} from "../Models/projects";

@Component({
  selector: 'app-work-category',
  templateUrl: './work-category.component.html',
  styleUrls: ['./work-category.component.css']
})
export class WorkCategoryComponent implements OnInit {

 project : Projects[];

  constructor() {
    this.project = [
      //Json type format
      //Use this in html if content image is not existing <img *ngIf="content?.imgURL" (click)="logId()" [src]="content?.imgURL">
      {
        link: "https://enactus-test.netlify.app",
        image: "assets/Projects/enactus-thumb.png",
        title: "Enactus St Clair",
        description: "Enactus is an international organization that connects student, academic and business leaders through entrepreneurial-based projects that empower people to transform opportunities into real, sustainable progress for themselves and their communities. .",
      },
      {
        link: "https://coincheck-8326f.web.app",
        image: "assets/Projects/coincheck-thumb.png",
        title: "Coin Check ",
        description: "CoinCheck is an app that allows users to keep track of their favourite Cryptocurrencies. The app also allows users to make investment calculations and provide estimates on taxes..",
      },
      {
        link: "https://jerafcard-50782.web.app",
        image: "assets/Projects/Jeraf.png",
        title: "Jeraf",
        description: "CoinCheck is an app that allows users to keep track of their favourite Cryptocurrencies. The app also allows users to make investment calculations and provide estimates on taxes..",
  },      {
        link: "",
        image: "assets/Projects/enactus-thumb.png",
        title: "Enactus St Clair",
        description: "Enactus is an international organization that connects student, academic and business leaders through entrepreneurial-based projects that empower people to transform opportunities into real, sustainable progress for themselves and their communities. .",
      },
      {
        link: "",
        image: "assets/Projects/coincheck-thumb.png",
        title: "Coin Check ",
        description: "CoinCheck is an app that allows users to keep track of their favourite Cryptocurrencies. The app also allows users to make investment calculations and provide estimates on taxes..",
      },
      {
        link: "",
        image: "assets/Projects/enactus-thumb.png",
        title: "Enactus St Clair",
        description: "Enactus is an international organization that connects student, academic and business leaders through entrepreneurial-based projects that empower people to transform opportunities into real, sustainable progress for themselves and their communities. .",
      },
      {
        link: "",
        image: "assets/Projects/coincheck-thumb.png",
        title: "Coin Check ",
        description: "CoinCheck is an app that allows users to keep track of their favourite Cryptocurrencies. The app also allows users to make investment calculations and provide estimates on taxes..",
      },


    ];

  }

  ngOnInit(): void {
  }

}
