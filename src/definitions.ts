import { IPlayerVars } from './web/models/models';

declare global {
  interface PluginRegistry {
    YoutubePlayer?: YoutubePlayerPlugin;
  }
}

export interface YoutubePlayerPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  initialize(options: {width: number, height: number, videoId: string, playerVars?: IPlayerVars}): Promise<{playerReady: boolean}>;
  destroy(): Promise<{result: { method: string, value: boolean }}>;
  // Methods playback controls and player settings..
  /***********/
  stopVideo(): Promise<{result: { method: string, value: boolean }}>;
  playVideo(): Promise<{result: { method: string, value: boolean }}>;
  pauseVideo(): Promise<{result: { method: string, value: boolean }}>;
  seekTo(): Promise<{result: { method: string, value: boolean, seconds: number, allowSeekAhead: boolean }}>;
  loadVideoById(options: {videoId: string, startSeconds?: number, endSeconds?: number, suggestedQuality?: string}): Promise<{result: { method: string, value: boolean, options: {} }}>;
  cueVideoById(options: {videoId: string, startSeconds?: number, endSeconds?: number, suggestedQuality?: string}): Promise<{result: { method: string, value: boolean, options: {} }}>;
  /***********/

  // Methods changing the player volume.
}
