import { GAME_ASPECT_RATIO } from '../constants';

export default function getScreenWidth(): number {
  const { height, width } = document.body.getBoundingClientRect();
  const BODY_ASPECT_RATIO: number = width / height;

  // If the screen is wider than the game, use height as the max dimension.
  if (BODY_ASPECT_RATIO > GAME_ASPECT_RATIO) {
    return height * GAME_ASPECT_RATIO;
  }

  // If the screen is taller than the game, use width as the max dimension.
  return width;
}
