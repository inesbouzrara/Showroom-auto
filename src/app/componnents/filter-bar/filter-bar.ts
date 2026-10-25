import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filter } from '../../interfaces/filter';

@Component({
  imports: [FormsModule],
  selector: 'app-filter-bar',
  styleUrl: './filter-bar.css',
  templateUrl: './filter-bar.html',
})
export class FilterBar {

  @Output() onFilter = new EventEmitter<Filter>()

  isOpen = false

  minPrice: number | null = null
  maxPrice: number | null = null
  minPower: number | null = null
  maxPower: number | null = null

  toggleFilter() {
    this.isOpen = !this.isOpen
  }

  apply() {
    this.onFilter.emit({
      minPrice: this.minPrice || 0,
      maxPrice: this.maxPrice || Infinity,
      minPower: this.minPower || 0,
      maxPower: this.maxPower || Infinity
    })
  }

  reset() {
    this.minPrice = null
    this.maxPrice = null
    this.minPower = null
    this.maxPower = null
    this.apply()
  }
}