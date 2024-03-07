export const hasNoEmptyStringValues = (input: unknown): boolean => {
  // Check if the input is an object and not null
  if (typeof input !== 'object' || input === null) {
    return false;
  }

  // Return true if the object does not have any string values that are empty
  return Object.values(input).every((val) => typeof val !== 'string' || val.trim() !== '');
};
