import { GenericResults } from '../../domain';
import { GenericResultsRawDto } from '../dtos/generic-resutls.dto';

export function mapToGenericResult(data: GenericResultsRawDto) {
  return {
    success: data.success,
    statusMessage: data.status_message,
    statusCode: data.status_code,
  } as GenericResults;
}
