import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'breedtypes' })
export class BreedsPipe implements PipeTransform {
  transform(value: any) {
    const keys: string[] = [];
    const myvalue: Map<string, any[]> = value;
    if (myvalue) {
      Object.keys(myvalue).forEach(function(key) {
        console.log('Key : ' + key + ', Value : ' + myvalue[key]);
      });
    }
    //  console.log(myvalue);
    //Array.from(myvalue.keys()).forEach(key => keys.push(key));
    // return keys;
  }
}
