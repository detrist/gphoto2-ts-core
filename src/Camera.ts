'use strict'

import {exec, spawn} from 'child_process'
import {promisify} from 'util'

const captureImageCommand = promisify(exec)
export const DEFAULT_INTERVAL = 10
export const DEFAULT_FRAMES = 24

class Camera {
  getDefaultInterval(): number {
    return DEFAULT_INTERVAL
  }

  getDefaultFrames(): number {
    return DEFAULT_FRAMES
  }

  captureImage = async (
    filePath: string,
    callback: (stdout?: string, stderr?: string) => void
  ): Promise<void> => {
    const command = `gphoto2 --capture-image-and-download --stdout >  ${filePath}`
    try {
      const {stdout, stderr} = await captureImageCommand(command)
      callback(stdout, stderr)
    } catch (e) {
      console.error(e)
      callback(undefined, String(e))
    }
  }

  captureImages = async (
    callback: (data: Buffer) => void,
    interval: number,
    frames?: number
  ): Promise<void> => {
    const commands: string[] = [`--capture-movie=${interval}s`, `--stdout`]

    if (frames) {
      commands.push(`--frames=${frames}`)
    } else {
      commands.push(`--frames= ${DEFAULT_FRAMES}`)
    }

    const child = spawn('gphoto2', commands)

    child.stdout.on('data', (data) => {
      callback(data)
    })

    child.stderr.on('data', (data) => {
      if (
        !data.includes('Movie capture finished') &&
        !data.includes('Capturing preview frames as movie')
      ) {
        console.error(`Spwan message: ${data}`)
      }
    })

    child.on('close', (code) => {
      console.debug(`Spawn message: child process exited with code ${code}`)
    })
  }
}

export default Camera
