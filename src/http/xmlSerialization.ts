export function xmlSerialize(_rootName: string, _value: unknown): string {
  throw new Error('XML serialization is not available.');
}

export async function xmlDeserialize(
  _rootName: string,
  _xmlString: string
): Promise<any> {
  throw new Error('XML deserialization is not available.');
}
