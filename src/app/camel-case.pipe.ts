import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(frase: any, ...args: unknown[]): unknown {
    let wordList: string [] = frase.split(' ');
    let result: string = '';
    for (let word of wordList){
      result += this.capitalize(word) + ' ';

    }
    return result;
  }

  capitalize(word: string): string{
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
  }

}
