import {Component, OnInit} from '@angular/core';
import {Animations} from "./animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [Animations]
})
export class AppComponent implements OnInit {

    showPopOver = false;
    slideAnimationParam = false;
    items = [];
    keyframesItems = [];

    constructor() {
    }

    ngOnInit() {
    }

    toggleEaseInOut() {
        this.showPopOver = !this.showPopOver;
    }

    toggleSlide() {
        this.slideAnimationParam = !this.slideAnimationParam;
    }

    showItems() {
        [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].map((i) => {
            this.items.push("User Number - " + i)
        })
    }

    showKeyframesItems() {
        [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].map((i) => {
            this.keyframesItems.push("User Number - " + i)
        })
    }

    hideItems() {
        this.items = [];
    }

    hideKeyframesItems() {
        this.keyframesItems = [];
    }

    toggleListAnimation() {
        this.items.length ? this.hideItems() : this.showItems();
    }

    toggleListKeyframesAnimation() {
        this.keyframesItems.length ? this.hideKeyframesItems() : this.showKeyframesItems();
    }
}
