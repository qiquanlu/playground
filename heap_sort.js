const heapSort = function (nums) {
  // max heapify nums from bottom up
  const length = nums.length
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(nums, length, i)
  }
  // move max to the end and heapify the rest
  for (let j = length - 1; j >= 0; j--) {
    [nums[j], nums[0]] = [nums[0], nums[j]]
    heapify(nums, j, 0)
  }
  return nums
}
const heapify = function (nums, length, i) {
  let max = i
  const left = i * 2 + 1
  const right = left + 1
  if (left < length && nums[left] > nums[max]) {
    max = left
  }
  if (right < length && nums[right] > nums[max]) {
    max = right
  }
  if (max !== i) {
    [nums[max], nums[i]] = [nums[i], nums[max]]
    heapify(nums, length, max)
  }
  return nums
}

const input1 = [5, 2, 3, 1, 14, 6, 34, 21, 1000, 4, 22]
const input2 = [5, 2, 3, 1, 45, 2, 1, 15, 3, 55, 100]

console.log('Heapsort')
console.log(`Test input 1: ${input1.join()}`)
console.log(heapSort(input1).join(' > '))

console.log(`Test input 2: ${input2.join()}`)
console.log(heapSort(input2).join(' > '))
