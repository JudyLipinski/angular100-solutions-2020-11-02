import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "My Angular Albums";
  myCounter = 1;
  numbers: number[] = [1, 2, 3];

  ngOnInit(): void {
    const interval = setInterval(() => {
        this.myCounter++
        this.numbers.push(4);
        console.log(this.numbers);
        this.numbers = [...this.numbers];
    }, 2000);

    setTimeout(() => clearInterval(interval), 6000);
  }
}
