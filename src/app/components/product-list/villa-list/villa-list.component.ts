import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-villa-list',
  templateUrl: './villa-list.component.html',
  styleUrl: './villa-list.component.css'
})
export class VillaListComponent implements OnInit {
  @Input() villassss: any; // Ensure the type matches your data type
  ngOnInit(): void {
    console.log("Villas in VillaListComponent:", this.villassss);
  }m
}
