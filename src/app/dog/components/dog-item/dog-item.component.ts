import { Component, Input } from '@angular/core';

import { Dog } from '../../../models/dog.interface';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.scss']
})
export class DogItemComponent {

    @Input()
    public dog!: Partial<Dog>;
}
