import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [],
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent {
  markdownText: string= '';
markDownValue: any;

  get previewText(): string{
    return this.markdownText;
  }


}
