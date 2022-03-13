import { Camera } from '../src/index'

test('getDefaultFrames', () => {
  expect(new Camera().getDefaultFrames()).toBe(24)
})

test('getDefaultInterval', () => {
  expect(new Camera().getDefaultInterval()).toBe(10)
})
