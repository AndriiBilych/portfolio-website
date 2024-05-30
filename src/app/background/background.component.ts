import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  template: `
    <div class="background-container">
      <div class="wrapper">
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
      </div>

      <div class="text-area">
        <h2>animated <br>Background</h2>
      </div>
    </div>
  `,
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

}
