import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';

// export interface ArgumentMetadatas {
//   type: 'body' | 'query' | 'param' | 'custom';
//   metatype?: Type<unknown>;
//   data?: string;
// }

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
