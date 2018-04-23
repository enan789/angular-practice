import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value:string, args?: any) {
    if(!value) return null;
    let wordArray = value.split(' ');
    let newCase = [];
    wordArray.forEach((word, index)=>{
      if ((word == 'the' || word == 'of') && index !=1) {
        newCase.push(word.toLowerCase());
      } else {
        newCase.push(word[0].toUpperCase() + word.substr(1).toLowerCase());
      }
    });
    return newCase.join(' ');
  }
}
