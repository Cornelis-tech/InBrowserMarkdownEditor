import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent } from './markdown/markdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarkdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InBrowserMarkdownEditor';
}
