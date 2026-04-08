const sounds = {
  add: '/assets/sound2 (1).mp3',
  complete: '/assets/sound.mp3.mp3',
  delete: '/assets/sound3.mp3',
  update: '/assets/sound4.mp3'


}
export const playSound = ((type) => {
  const sound = sounds[type]
  if (!sound) return;
  const audio = new Audio(sound)
  audio.volume = 0.6;
  audio.play().catch(() => { });
})