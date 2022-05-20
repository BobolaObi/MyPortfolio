import { Component, OnInit } from '@angular/core';
import { Image } from '../Models/toolsImage';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})

export class ToolsComponent implements OnInit {

  //Create an instance of the interface of Images
  image?: Image[];

  constructor() {
    this.image = [
      new Image("assets/toolsImage/js.png", "JavaScript"),
      new Image("assets/toolsImage/csharp.png", "C Sharp" ),
      new Image("assets/toolsImage/java.png", "Java" ),
      new Image("assets/toolsImage/laravel.png", "Laravel" ),
      new Image("assets/toolsImage/angular.png", "Angular" ),
      new Image("assets/toolsImage/illustrator.png", "Illustrator" ),
      new Image("assets/toolsImage/php.png", "PHP" ),
      new Image("assets/toolsImage/github.png", "GitHub"),
      new Image("assets/toolsImage/swift.png" ,"Swift" ),
      new Image("assets/toolsImage/unity.png", "Unity")
    ]
  }

  ngOnInit(): void {}

}
