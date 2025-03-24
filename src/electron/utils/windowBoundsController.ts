import { Rectangle } from 'electron'

import { config } from '../store/config.js'

export function getWindowBounds (): Rectangle {
  const { width, height, x = 0, y = 0 } = config.get('windowBounds') as Rectangle

  return {
    width: width || 1000,
    height: height || 700,
    x,
    y
  }
}

export const setWindowBounds = function (bounds: Rectangle | undefined): void {
  if (!bounds) {
    return
  }
  const { width, height, x, y } = bounds

  config.set('windowBounds', {
    width: width || 1100,
    height: height || 700,
    x: x ?? 0,
    y: y ??0,
  })
}