import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  articles = [
    { title: 'Article 1', summary: 'Résumé de l\'article 1...', link: '#' },
    { title: 'Article 2', summary: 'Résumé de l\'article 2...', link: '#' },
    { title: 'Article 3', summary: 'Résumé de l\'article 3...', link: '#' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
