import {
  Schema,
  SchemaMappedType,
  SchemaType,
  SchemaValidationError,
  validateAndUnmap,
} from '../schema';
import { ArgumentsValidationError } from '../errors/argumentsValidationError';

/**
 * Prepares arguments for being sent in the API request.
 *
 * Each argument is validated and converted to a JSON-serialization ready value.
 *
 * If one or more arguments fail validation, an ArgumentsValidationError is
 * thrown, which contains the validation details for all arguments that failed
 * validation.
 *
 * @param params Map of arguments with values and schema
 * @returns Map of serialization-ready argument values
 *
 * @throws ArgumentsValidationError
 */
export function prepareArgs<
  S extends Schema<any, any>,
  T extends Record<string, [SchemaType<S>, S]>
>(params: T): { [key in keyof T]: SchemaMappedType<T[key][1]> } {
  const validationErrors: Record<string, SchemaValidationError[]> = {};
  const result: Partial<{ [key in keyof T]: SchemaMappedType<T[key][1]> }> = {};

  for (const paramName in params) {
    if (Object.prototype.hasOwnProperty.call(params, paramName)) {
      const paramInfo = params[paramName];
      const validationResult = validateAndUnmap(paramInfo[0], paramInfo[1]);
      if (validationResult.errors) {
        validationErrors[paramName] = validationResult.errors;
      } else {
        result[paramName] = validationResult.result;
      }
    }
  }

  if (Object.keys(validationErrors).length > 0) {
    throw new ArgumentsValidationError(validationErrors);
  }

  return result as any;
}
