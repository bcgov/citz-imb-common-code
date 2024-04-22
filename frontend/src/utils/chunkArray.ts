/**
 * Divides an array into multiple subarrays, where each subarray has a length specified by `size`.
 * This function is generic and can be used with any array type, allowing for versatile array chunking.
 *
 * @param {T[]} array - The array to be chunked. This can be an array of any type `T`.
 * @param {number} size - The maximum size of each chunk. Each chunk will contain up to `size` elements, except possibly the last chunk.
 * @returns {T[][]} An array of chunks, where each chunk is an array containing up to `size` elements from the original array.
 */
export const chunkArray = <T>(array: T[], size: number): T[][] => {
  return array.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]),
    [] as T[][],
  );
};
