import { SchemaValidationError } from '../schema';

/**
 * Thrown when one or more arguments passed to a method fail validation.
 */
export class ArgumentsValidationError extends Error {
  public readonly errors: Record<string, SchemaValidationError[]>;
  constructor(errors: Record<string, SchemaValidationError[]>) {
    const errorKeys = Object.keys(errors);

    let message: string;
    if (errorKeys.length === 0) {
      message = 'One or more arguments failed validation.';
    } else if (errorKeys.length === 1 && errors[errorKeys[0]].length === 1) {
      message = `Argument for '${errorKeys[0]}' failed validation.\n\n${
        errors[errorKeys[0]][0].message
      }`;
    } else {
      message = `The following arguments failed validation: ${errorKeys.join(
        ', '
      )}.\n\n`;

      const msgList: string[] = [];
      for (const param of errorKeys) {
        msgList.push(`> For argument '${param}':`);
        if (errors[param].length === 1) {
          msgList.push(errors[param][0].message!);
        } else {
          for (let index = 0; index < errors[param].length; index++) {
            const error = errors[param][index];
            msgList.push(`>> Issue #${index + 1}\n\n${error.message}`);
          }
        }
      }

      message += msgList.join('\n\n');
    }

    super(message);
    this.errors = errors;
  }
}
