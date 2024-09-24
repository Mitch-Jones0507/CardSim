function addCurrentItem<T>(previousPermutation: Array<T>, currentItem: T): Array<T> {
  return [...previousPermutation, currentItem]
}

function expandPreviousPermutations<T>(previousPermutations: Array<Array<T>>, currentArray: Array<T>): Array<Array<T>> {
  return previousPermutations.flatMap(previousPermutation =>
    currentArray.map(currentItem => addCurrentItem(previousPermutation, currentItem))
  )
}

export const permute = <T>(arr: Array<Array<T>>) => arr.reduce<Array<Array<T>>>(expandPreviousPermutations, [[]])
