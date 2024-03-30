import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentDto } from '@proxy/contracts';
import { ContentService } from '@proxy/services';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrl: './content-viewer.component.scss',
})
export class ContentViewerComponent implements OnInit{
  contentId: string = '';
  content: ContentDto;
  constructor(private activatedRoute: ActivatedRoute,
    private _contentService: ContentService) {
    this.contentId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._contentService.get(this.contentId).subscribe(x => {
      this.content = x;
    });
  }

}
