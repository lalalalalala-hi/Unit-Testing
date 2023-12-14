import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade',
})
export class GradePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    let grade = '';
    if (value >= 90) {
      grade = 'A';
    } else if (value >= 80) {
      grade = 'B';
    } else if (value >= 70) {
      grade = 'C';
    } else if (value >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    return grade;
  }
}
