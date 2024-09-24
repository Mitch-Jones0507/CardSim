type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const typedEntries = <O extends Record<string, unknown>>(map: O): Entries<O> => {
  return Object.entries(map) as Entries<O>
}
