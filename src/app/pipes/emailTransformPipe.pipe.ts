import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailTransformPipe'
})
export class EmailTransformPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.split("@")[0]
  }

}
