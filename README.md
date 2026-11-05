# JUST DANCE 2027 NEXT — playable menu prototype

## Run
Unzip the folder and open `index.html` in a modern browser. For best results use a local static server (for example VS Code Live Server), because some browsers restrict local media loading.

## Controls
- **W / A** — move selection up / left (previous tile)
- **S / D** — move selection down / right (next tile)
- Arrow keys work too.
- Hover or click a tile to select it.
- Enter / Space activates the selected tile (currently shows a small “coming soon” message).

The pointer is a PNG portrait of the current dancer. The large dancer and pointer portrait are generated from the same supplied avatar artwork. Replace `assets/dancer-avatar.png` and `assets/dancer-avatar-head.png` to change the dancer.

## Add your own background and music
Drop your files into `assets/` using these exact names:
- `video-bg.mp4` — background loop
- `menu-music.mp3` — menu music

The page attempts to play the video muted immediately. Browsers block autoplay with sound, so the music starts after the first key press, click or touch. Both can then play simultaneously.

## PNG button layers
Each menu tile is composed from a base PNG, optional artwork overlay and a separate selected-state glow PNG. The assets currently used are:
- Progression: `Rectangle 6.png` + `Rectangle 5.png` + `Rectangle 8.png`
- Locker Room: `Rectangle 6.png` + `Rectangle 7.png` + `Rectangle 8.png`
- Dancer Cards Library: `Rectangle 2.png` + `Rectangle 8.png`

No external game services or login are connected; the username `escooper` and display name `cooper` are placeholders.
