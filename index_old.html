<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>FlickPick</title>
<style>
:root {
  --bg-primary: #0f0f1a;
  --bg-secondary: #1a1a2e;
  --bg-card: #16213e;
  --bg-surface: #1e2a45;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b8;
  --text-muted: #6b6b80;
  --accent: #e94560;
  --accent-glow: rgba(233, 69, 96, 0.3);
  --green: #00c853;
  --green-bg: rgba(0, 200, 83, 0.15);
  --red: #ff3d57;
  --red-bg: rgba(255, 61, 87, 0.15);
  --gold: #ffd700;
  --gold-bg: rgba(255, 215, 0, 0.12);
  --netflix: #e50914;
  --disney: #113ccf;
  --hulu: #1ce783;
  --prime: #00a8e1;
  --hbo: #b535f6;
  --apple: #a2aaad;
  --paramount: #0064ff;
  --peacock: #000000;
  --tab-height: 70px;
  --header-height: 56px;
  --radius: 16px;
  --radius-sm: 10px;
  --shadow: 0 8px 32px rgba(0,0,0,0.4);
}

/* Light theme overrides */
[data-theme="light"] {
  --bg-primary: #f5f5f7;
  --bg-secondary: #ffffff;
  --bg-card: #f0f0f5;
  --bg-surface: #e8e8ef;
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a5a;
  --text-muted: #8a8a9a;
}
[data-theme="light"] body { background: #c8c8d0; }
[data-theme="light"] .movie-card { box-shadow: 0 8px 32px rgba(0,0,0,0.18); }
[data-theme="light"] .header { background: rgba(245,245,247,0.95); border-bottom: 1px solid rgba(0,0,0,0.08); }
[data-theme="light"] .tab-bar { background: rgba(245,245,247,0.97); border-top: 1px solid rgba(0,0,0,0.08); }
[data-theme="light"] .settings-item { background: var(--bg-secondary); }
[data-theme="light"] .stat-card { background: var(--bg-secondary); }
[data-theme="light"] .stream-toggle { background: var(--bg-secondary); }
[data-theme="light"] .wl-tab { color: var(--text-secondary); }
[data-theme="light"] .wl-tab.active { color: var(--accent); }
[data-theme="light"] .screen-scroll { background: var(--bg-primary); }
[data-theme="light"] .bottom-sheet { background: var(--bg-secondary); }
[data-theme="light"] .theme-toggle-track { background: #ccc; }
[data-theme="light"] .theme-toggle-track.on { background: var(--accent); }

* { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;
  background: #000;
  color: var(--text-primary);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100dvh;
}

#app {
  width: 393px;
  height: 852px;
  max-height: 100vh;
  max-height: 100dvh;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  border-radius: 0;
}

@media (max-width: 420px) {
  #app { width: 100vw; height: 100vh; height: 100dvh; }
}

@media (min-width: 421px) {
  #app { border-radius: 40px; border: 2px solid #2a2a3e; box-shadow: 0 0 80px rgba(233,69,96,0.1); }
}

/* Header */
.header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: var(--bg-primary);
  position: relative;
  z-index: 10;
}
.header-title {
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent), #ff6b8a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}
.header-subtitle {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 500;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.rewind-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-user-select: none;
  user-select: none;
}
.rewind-btn:active { transform: scale(0.9); }
.rewind-btn.disabled { opacity: 0.25; pointer-events: none; }
.filter-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
}
.filter-btn:active { transform: scale(0.9); }
.filter-btn.active { background: rgba(233,69,96,0.2); }
.filter-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  background: var(--accent);
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
.filter-badge.visible { display: flex; }

/* Tab Bar */
.tab-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--tab-height);
  background: var(--bg-secondary);
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom, 0);
  z-index: 100;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 12px;
  transition: all 0.2s;
  -webkit-user-select: none;
  user-select: none;
}
.tab-item.active .tab-icon { color: var(--accent); }
.tab-item.active .tab-label { color: var(--accent); font-weight: 600; }
.tab-icon { font-size: 22px; color: var(--text-muted); transition: color 0.2s; line-height: 1; }
.tab-label { font-size: 10px; color: var(--text-muted); font-weight: 500; transition: color 0.2s; }

/* Screen Container */
.screen {
  position: absolute;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: var(--tab-height);
  display: none;
  flex-direction: column;
  overflow: hidden;
}
.screen.active { display: flex; }
.screen-scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 16px 20px;
}

/* ==================== DISCOVER TAB ==================== */
.discover-screen { position: relative; }
.card-container {
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  padding: 0;
  overflow: hidden;
}
.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 20px 0;
  gap: 8px;
}
.progress-text {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}
.progress-track {
  flex: 1;
  height: 3px;
  background: rgba(255,255,255,0.06);
  border-radius: 2px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #ff6b8a);
  border-radius: 2px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mood Pills */
.mood-row {
  display: flex;
  gap: 8px;
  padding: 8px 16px 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex-shrink: 0;
}
.mood-row::-webkit-scrollbar { display: none; }
.mood-pill {
  flex-shrink: 0;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: all 0.2s;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}
.mood-pill.active {
  background: rgba(233,69,96,0.15);
  color: var(--accent);
  border-color: var(--accent);
}

/* Filter Panel */
.filter-panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-radius: 0 0 var(--radius) var(--radius);
  padding: 16px;
  z-index: 50;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  transform: translateY(-110%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.filter-panel.open { transform: translateY(0); }
.filter-panel-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}
.filter-section-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 8px;
}
.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}
.filter-chip {
  padding: 5px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  background: var(--bg-surface);
  color: var(--text-secondary);
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: all 0.15s;
}
.filter-chip.active {
  background: rgba(233,69,96,0.12);
  color: var(--accent);
  border-color: var(--accent);
}
.filter-year-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.filter-year-input {
  width: 80px;
  background: var(--bg-surface);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 7px 10px;
  font-size: 13px;
  color: var(--text-primary);
  font-family: inherit;
  outline: none;
}
.filter-year-sep { color: var(--text-muted); font-size: 13px; }
.filter-actions {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}
.filter-clear-btn {
  flex: 1;
  padding: 10px;
  background: var(--bg-surface);
  border: none;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}
.filter-apply-btn {
  flex: 2;
  padding: 10px;
  background: var(--accent);
  border: none;
  border-radius: var(--radius-sm);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}

/* Movie Card */
.movie-card {
  width: 100%;
  height: 100%;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  cursor: grab;
  touch-action: none;
  will-change: transform;
  transition: none;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
}
.movie-card.animating {
  transition: transform 0.35s cubic-bezier(0.2, 0, 0, 1), opacity 0.35s ease;
}
.movie-card.entering {
  animation: cardEnter 0.35s cubic-bezier(0.2, 0, 0, 1) forwards;
}
@keyframes cardEnter {
  from { opacity: 0; transform: scale(0.92) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.movie-card.sponsored {
  border: 2px solid var(--gold);
  box-shadow: var(--shadow), 0 0 20px rgba(255, 215, 0, 0.15);
}
.sponsored-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(0,0,0,0.7);
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  z-index: 5;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255,215,0,0.3);
  backdrop-filter: blur(8px);
}

.recommended-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(108, 99, 255, 0.85);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  z-index: 5;
  letter-spacing: 0.5px;
  border: 1px solid rgba(108,99,255,0.4);
  backdrop-filter: blur(8px);
}
.movie-card.recommended {
  border: 2px solid rgba(108, 99, 255, 0.6);
  box-shadow: 0 0 20px rgba(108, 99, 255, 0.25), 0 8px 32px rgba(0,0,0,0.4);
}
.rec-reason {
  font-size: 11px;
  color: #a09cff;
  font-style: italic;
  margin-top: 2px;
  display: block;
}

.card-poster-wrapper {
  position: relative;
  flex-shrink: 0;
}
.card-poster {
  width: 100%;
  aspect-ratio: auto;
  object-fit: cover;
  display: block;
}
.card-poster-placeholder {
  width: calc(100% - 24px);
  margin: 0 auto;
  aspect-ratio: 27/32;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  font-weight: 800;
  color: rgba(255,255,255,0.15);
  letter-spacing: -2px;
  border-radius: var(--radius);
  flex-shrink: 0;
}
.card-poster-img {
  width: calc(100% - 24px);
  margin: 0 auto;
  height: 460px;
  max-height: 62%;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius);
  flex-shrink: 0;
  display: block;
}
.card-streaming-row {
  display: flex;
  gap: 8px;
  padding: 0 16px;
  flex-wrap: wrap;
  margin-top: -20px;
  position: relative;
  z-index: 3;
}
.card-streaming-row .stream-badge {
  font-size: 9px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 5px;
  color: #fff;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

/* Info area below poster — visible on card */
.card-info {
  position: relative;
  padding: 12px 20px 20px;
  z-index: 2;
  flex-shrink: 0;
  cursor: pointer;
}
.card-title {
  font-size: 26px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  display: inline;
}
.card-year-inline {
  font-size: 17px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-left: 8px;
  vertical-align: baseline;
}
.card-synopsis-preview {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.55;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-tap-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  cursor: pointer;
}
.card-tap-hint span {
  font-size: 12px;
  color: var(--accent);
  font-weight: 600;
}
.tap-arrow {
  display: inline-block;
  transition: transform 0.3s;
}

/* ==================== DETAIL PANEL (slides up over card) ==================== */
.detail-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 60;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}
.detail-overlay.open { opacity: 1; pointer-events: all; }

.detail-panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-primary);
  z-index: 61;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.detail-panel.open {
  transform: translateY(0);
}
.detail-header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--bg-primary);
  z-index: 5;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.detail-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: background 0.15s;
}
.detail-close:active { background: rgba(255,255,255,0.15); }
.detail-header-title {
  font-size: 16px;
  font-weight: 700;
  flex: 1;
  margin-left: 12px;
}
.detail-body {
  padding: 20px;
}
.detail-poster-row {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}
.detail-mini-poster {
  width: 100px;
  height: 140px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 800;
  color: rgba(255,255,255,0.15);
  flex-shrink: 0;
}
.detail-mini-poster-img {
  width: 100px;
  height: 140px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}
.detail-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
}
.detail-title {
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.3px;
  line-height: 1.15;
}
.detail-year-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-secondary);
}
.detail-star { color: var(--gold); font-weight: 600; }
.detail-genres {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.detail-genre-chip {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(255,255,255,0.08);
  color: var(--text-secondary);
  font-weight: 500;
}
.detail-streaming {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.detail-section-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px 0 10px;
}
.detail-synopsis {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}
.detail-cast-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.cast-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
}
.cast-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-muted);
  flex-shrink: 0;
}
.cast-info { min-width: 0; }
.cast-name {
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cast-role {
  font-size: 10px;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail-extra-row {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}
.detail-extra-item {
  flex: 1;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  padding: 14px;
  text-align: center;
}
.detail-extra-value {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 2px;
}
.detail-extra-label {
  font-size: 11px;
  color: var(--text-muted);
}

/* Swipe Overlays */
.swipe-overlay {
  position: fixed;
  top: 35%;
  font-size: 36px;
  font-weight: 900;
  padding: 12px 28px;
  border-radius: 14px;
  border: 4px solid;
  opacity: 0;
  z-index: 10;
  pointer-events: none;
  letter-spacing: 3px;
  transition: none;
}
.swipe-overlay.like {
  left: 40px;
  color: var(--green);
  border-color: var(--green);
  background: var(--green-bg);
  transform: rotate(-15deg);
}
.swipe-overlay.nope {
  right: 40px;
  color: var(--red);
  border-color: var(--red);
  background: var(--red-bg);
  transform: rotate(15deg);
}

/* Action buttons removed */

/* FAB */
.fab-container {
  position: absolute;
  bottom: 86px;
  right: 20px;
  z-index: 99;
}
.fab-menu {
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-bottom: 12px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: all 0.25s cubic-bezier(0.2, 0, 0, 1);
}
.fab-menu.open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}
.fab-option {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  cursor: pointer;
}
.fab-option-label {
  background: var(--bg-surface);
  color: var(--text-primary);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.fab-option-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--bg-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  transition: transform 0.15s;
}
.fab-option:active .fab-option-icon { transform: scale(0.9); }
.fab-main {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #ff6b8a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px var(--accent-glow);
  transition: transform 0.2s;
  margin-left: auto;
}
.fab-main:active { transform: scale(0.9); }
.fab-main.open { transform: rotate(45deg); }
.fab-main.open:active { transform: rotate(45deg) scale(0.9); }

/* ==================== BOTTOM SHEET ==================== */
.sheet-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 200;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.sheet-backdrop.open { opacity: 1; pointer-events: all; }
.bottom-sheet {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-radius: 24px 24px 0 0;
  padding: 20px;
  z-index: 201;
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.2, 0, 0, 1);
}
.bottom-sheet.open { transform: translateY(0); }
.sheet-handle {
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.15);
  margin: 0 auto 20px;
}
.sheet-movie-info {
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
}
.sheet-poster {
  width: 60px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
}
.sheet-poster-placeholder {
  width: 60px;
  height: 90px;
  border-radius: 8px;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: rgba(255,255,255,0.15);
}
.sheet-poster-img {
  width: 60px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
}
.sheet-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
}
.sheet-subtitle {
  font-size: 13px;
  color: var(--text-secondary);
}
.star-rating {
  display: flex;
  gap: 4px;
  justify-content: center;
  margin-bottom: 8px;
}
.star-wrapper {
  position: relative;
  width: 44px;
  height: 44px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.star-wrapper:active { transform: scale(1.15); }
.star-bg, .star-fill {
  position: absolute;
  top: 0; left: 0;
  font-size: 42px;
  line-height: 44px;
  width: 44px;
  text-align: center;
  pointer-events: none;
}
.star-bg { color: rgba(255,255,255,0.10); }
.star-fill { color: var(--gold); clip-path: inset(0 100% 0 0); transition: clip-path 0.15s; }
.star-fill.full { clip-path: inset(0 0 0 0); }
.star-fill.half { clip-path: inset(0 50% 0 0); }
.rating-value {
  text-align: center;
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 18px;
  font-weight: 500;
  min-height: 20px;
}
.review-input {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  color: var(--text-primary);
  font-size: 14px;
  font-family: inherit;
  resize: none;
  margin-bottom: 16px;
  outline: none;
  transition: border-color 0.2s;
}
.review-input::placeholder { color: var(--text-muted); }
.review-input:focus { border-color: var(--accent); }
.sheet-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--accent), #ff6b8a);
  border: none;
  border-radius: var(--radius-sm);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: inherit;
}
.sheet-submit:active { opacity: 0.8; }

/* ==================== TOAST ==================== */
.toast {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  background: var(--bg-surface);
  color: var(--text-primary);
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  z-index: 300;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  white-space: nowrap;
}
.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.toast.success { border-left: 3px solid var(--green); }
.toast.info { border-left: 3px solid var(--accent); }

/* ==================== WATCHLIST TAB ==================== */
.watchlist-tabs {
  display: flex;
  gap: 4px;
  background: rgba(255,255,255,0.04);
  border-radius: var(--radius-sm);
  padding: 3px;
  margin-bottom: 16px;
}
.wl-tab {
  flex: 1;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-user-select: none;
  user-select: none;
}
.wl-tab.active {
  background: var(--bg-surface);
  color: var(--text-primary);
}
.wl-tab .wl-count {
  font-size: 11px;
  color: var(--text-muted);
  margin-left: 4px;
  font-weight: 500;
}

/* Watchlist Search */
.wl-search-row {
  position: relative;
  margin-bottom: 14px;
}
.wl-search-input {
  width: 100%;
  background: var(--bg-secondary);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-sm);
  padding: 10px 36px 10px 14px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}
.wl-search-input:focus { border-color: var(--accent); }
.wl-search-input::placeholder { color: var(--text-muted); }
.wl-search-clear {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 18px;
  cursor: pointer;
  display: none;
  line-height: 1;
}
.wl-search-clear.visible { display: block; }

/* Sort Pills */
.sort-row {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.sort-row::-webkit-scrollbar { display: none; }
.sort-pill {
  flex-shrink: 0;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: all 0.2s;
  white-space: nowrap;
}
.sort-pill.active {
  background: rgba(233,69,96,0.12);
  color: var(--accent);
  border-color: var(--accent);
}

.wl-list { display: flex; flex-direction: column; gap: 10px; }
.wl-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  padding: 12px;
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
}
.wl-poster {
  width: 50px;
  height: 75px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}
.wl-poster-placeholder {
  width: 50px;
  height: 75px;
  border-radius: 6px;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  color: rgba(255,255,255,0.1);
  flex-shrink: 0;
}
.wl-poster-img {
  width: 50px;
  height: 75px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}
.wl-info { flex: 1; min-width: 0; }
.wl-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wl-meta {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 6px;
}
.wl-stars {
  color: var(--gold);
  font-size: 13px;
  letter-spacing: 1px;
}
.wl-remove {
  padding: 8px;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 18px;
  transition: color 0.2s;
  flex-shrink: 0;
}
.wl-remove:hover { color: var(--red); }

/* Genre-grouped horizontal layout for To Watch */
.wl-genre-section {
  margin-bottom: 24px;
}
.wl-genre-header {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.wl-genre-count {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
}
.wl-genre-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.wl-genre-row::-webkit-scrollbar { display: none; }
.wl-genre-card {
  flex-shrink: 0;
  width: 100px;
  position: relative;
}
.wl-genre-poster {
  width: 100px;
  height: 145px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
  color: rgba(255,255,255,0.15);
  margin-bottom: 8px;
}
.wl-genre-poster-img {
  width: 100px;
  height: 145px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 8px;
}
.wl-genre-card-info {
  text-align: center;
}
.wl-genre-card-title {
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wl-genre-card-year {
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 2px;
}
.wl-genre-card-remove {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--text-secondary);
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, color 0.2s;
}
.wl-genre-card-remove:hover { opacity: 1; color: var(--red); }

.wl-genre-see-all {
  margin-left: auto;
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
  padding: 4px 0;
}
.wl-genre-see-all:active { opacity: 0.7; }

/* Expanded grid view - same poster size, just wrapped in rows */
.wl-genre-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}
.empty-icon { font-size: 56px; margin-bottom: 16px; opacity: 0.5; }
.empty-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}
.empty-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ==================== PARTY TAB ==================== */
.party-hero {
  text-align: center;
  padding: 20px 0 30px;
}
.party-hero-icon {
  font-size: 64px;
  margin-bottom: 16px;
}
.party-hero-title {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}
.party-hero-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;
}
.party-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}
.party-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: var(--bg-secondary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.2s;
  border: 1px solid rgba(255,255,255,0.05);
}
.party-btn:active { background: var(--bg-surface); }
.party-btn-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
.party-btn-icon.create { background: linear-gradient(135deg, var(--accent), #ff6b8a); }
.party-btn-icon.join { background: linear-gradient(135deg, #6c63ff, #a855f7); }
.party-btn-title { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
.party-btn-desc { font-size: 12px; color: var(--text-muted); }

.party-demo {
  background: var(--bg-secondary);
  border-radius: var(--radius);
  padding: 20px;
  border: 1px solid rgba(255,255,255,0.05);
}
.party-demo-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}
.room-code-display {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}
.code-char {
  width: 44px;
  height: 56px;
  border-radius: 10px;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  font-family: 'SF Mono', 'Menlo', monospace;
  border: 1px solid rgba(255,255,255,0.08);
}
.code-dash {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: var(--text-muted);
  font-weight: 300;
}
.party-demo-members {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.demo-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: 2px solid var(--bg-secondary);
}
.demo-avatar:nth-child(1) { background: linear-gradient(135deg, #e94560, #ff6b8a); }
.demo-avatar:nth-child(2) { background: linear-gradient(135deg, #6c63ff, #a855f7); margin-left: -12px; }
.demo-avatar:nth-child(3) { background: linear-gradient(135deg, #00c853, #69f0ae); margin-left: -12px; }
.demo-waiting {
  font-size: 12px;
  color: var(--text-muted);
  margin-left: 4px;
}
.party-demo-footer {
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  color: var(--text-muted);
}

/* ==================== PROFILE TAB ==================== */
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 24px;
}
.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #ff6b8a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 12px;
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 0 3px var(--accent);
}
.profile-name {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}
.profile-handle {
  font-size: 14px;
  color: var(--text-muted);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 24px;
}
.stat-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  padding: 16px 12px;
  text-align: center;
}
.stat-value {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 4px;
  background: linear-gradient(135deg, var(--accent), #ff6b8a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 500;
}
.stats-row-secondary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 24px;
  margin-top: -14px;
}
.stat-card-wide { }

.section-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}
/* Genre Chart */
.genre-chart {
  background: var(--bg-secondary);
  border-radius: var(--radius);
  padding: 16px;
  margin-bottom: 24px;
}
.genre-chart-empty {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
  padding: 8px 0;
}
.genre-bar-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.genre-bar-row:last-child { margin-bottom: 0; }
.genre-bar-label {
  font-size: 12px;
  color: var(--text-secondary);
  width: 80px;
  flex-shrink: 0;
  font-weight: 500;
}
.genre-bar-track {
  flex: 1;
  height: 8px;
  background: var(--bg-surface);
  border-radius: 4px;
  overflow: hidden;
}
.genre-bar-fill {
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--accent), #ff6b8a);
  transition: width 0.5s ease;
}
.genre-bar-pct {
  font-size: 11px;
  color: var(--text-muted);
  width: 30px;
  text-align: right;
  flex-shrink: 0;
}

.top-movies-list {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: space-between;
}
.top-movies-empty {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  width: 100%;
}
.top-movie-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 0;
}
.top-movie-poster-wrap {
  position: relative;
  margin-bottom: 8px;
}
.top-movie-rank {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #ff6b8a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
.top-movie-rank.gold { background: linear-gradient(135deg, #ffd700, #ffaa00); color: #1a1a2e; }
.top-movie-rank.silver { background: linear-gradient(135deg, #c0c0c0, #a0a0a0); color: #1a1a2e; }
.top-movie-rank.bronze { background: linear-gradient(135deg, #cd7f32, #b8722a); color: #1a1a2e; }
.top-movie-poster {
  width: 90px;
  height: 130px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: rgba(255,255,255,0.15);
}
.top-movie-poster-img {
  width: 90px;
  height: 130px;
  border-radius: 10px;
  object-fit: cover;
  display: block;
}
.top-movie-info {
  text-align: center;
  width: 100%;
}
.top-movie-title {
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}
.top-movie-stars {
  color: var(--gold);
  font-size: 12px;
}
.streaming-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 24px;
}
.stream-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
}
.stream-toggle.active {
  border-color: rgba(255,255,255,0.12);
  background: var(--bg-surface);
}
.stream-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.stream-name {
  font-size: 13px;
  font-weight: 600;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.stream-check {
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.2s;
}
.stream-toggle.active .stream-check { opacity: 1; }

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-bottom: 24px;
}
.settings-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  transition: background 0.15s;
}
.settings-item:active { background: rgba(255,255,255,0.03); }
.settings-item-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.settings-icon { font-size: 18px; }
.settings-label { font-size: 15px; font-weight: 500; }
.settings-arrow { color: var(--text-muted); font-size: 14px; }

/* Theme Toggle Switch */
.theme-toggle-track {
  width: 44px;
  height: 26px;
  background: var(--accent);
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  transition: background 0.25s;
  flex-shrink: 0;
}
.theme-toggle-track.off { background: #555; }
.theme-toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.25s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
}
.theme-toggle-track.on .theme-toggle-thumb { transform: translateX(18px); }

.signout-btn {
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 1px solid rgba(255, 61, 87, 0.3);
  border-radius: var(--radius-sm);
  color: var(--red);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.signout-btn:active { background: var(--red-bg); }

/* ==================== END SCREEN ==================== */
.end-screen {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 30px;
  height: 100%;
}
.end-screen.active { display: flex; }
.end-icon { font-size: 72px; margin-bottom: 20px; }
.end-title { font-size: 24px; font-weight: 800; margin-bottom: 8px; }
.end-subtitle { font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 28px; }
.end-btn {
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--accent), #ff6b8a);
  border: none;
  border-radius: var(--radius-sm);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}
.end-btn:active { opacity: 0.8; }

/* Confetti */
.confetti-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 400;
  overflow: hidden;
}
.confetti-piece {
  position: absolute;
  width: 10px;
  height: 10px;
  opacity: 0;
}
@keyframes confettiFall {
  0% { opacity: 1; transform: translateY(-20px) rotate(0deg); }
  100% { opacity: 0; transform: translateY(800px) rotate(720deg); }
}
</style>
</head>
<body>

<div id="app">
  <!-- Header -->
  <div class="header">
    <div>
      <div class="header-title">FlickPick</div>
    </div>
    <div class="header-subtitle" id="headerSubtitle">Discover</div>
    <div class="header-actions" id="headerActions">
      <div class="rewind-btn disabled" id="rewindBtn" title="Undo last swipe">↩</div>
      <div class="filter-btn" id="filterBtn" title="Filter movies">
        🎛
        <div class="filter-badge" id="filterBadge">0</div>
      </div>
    </div>
  </div>

  <!-- ===== DISCOVER SCREEN ===== -->
  <div class="screen discover-screen active" id="discoverScreen" style="position:relative;">

    <!-- Filter Panel (slide down from top) -->
    <div class="filter-panel" id="filterPanel">
      <div class="filter-panel-title">Filter Movies</div>

      <div class="filter-section-label">Genre</div>
      <div class="filter-chips" id="filterGenreChips"></div>

      <div class="filter-section-label">Streaming Service</div>
      <div class="filter-chips" id="filterStreamChips"></div>

      <div class="filter-section-label">Year Range</div>
      <div class="filter-year-row">
        <input class="filter-year-input" id="filterYearMin" type="number" placeholder="1980" min="1900" max="2030">
        <span class="filter-year-sep">—</span>
        <input class="filter-year-input" id="filterYearMax" type="number" placeholder="2025" min="1900" max="2030">
      </div>

      <div class="filter-actions">
        <button class="filter-clear-btn" id="filterClearBtn">Clear All</button>
        <button class="filter-apply-btn" id="filterApplyBtn">Apply Filters</button>
      </div>
    </div>

    <div class="progress-bar">
      <span class="progress-text" id="progressText">1 of 100</span>
      <div class="progress-track">
        <div class="progress-fill" id="progressFill" style="width: 3.3%"></div>
      </div>
    </div>

    <!-- Mood Pills -->
    <div class="mood-row" id="moodRow">
      <div class="mood-pill active" data-mood="">🎬 All</div>
      <div class="mood-pill" data-mood="Action">💥 Action</div>
      <div class="mood-pill" data-mood="Comedy">😂 Comedy</div>
      <div class="mood-pill" data-mood="Drama">🎭 Drama</div>
      <div class="mood-pill" data-mood="Thriller">😱 Thriller</div>
      <div class="mood-pill" data-mood="Sci-Fi">🚀 Sci-Fi</div>
      <div class="mood-pill" data-mood="Romance">💕 Romance</div>
      <div class="mood-pill" data-mood="Mystery">🕵️ Mystery</div>
      <div class="mood-pill" data-mood="Horror">👻 Horror</div>
      <div class="mood-pill" data-mood="Animation">🎨 Animation</div>
    </div>

    <div class="card-container" id="cardContainer">
      <!-- Card rendered by JS -->
    </div>

    <!-- Action buttons removed -->

    <!-- End screen (shown when all cards swiped) -->
    <div class="end-screen" id="endScreen">
      <div class="end-icon">&#127916;</div>
      <div class="end-title">All Caught Up!</div>
      <div class="end-subtitle">You've gone through all 30 movies.<br>Check your watchlist or start a new session.</div>
      <button class="end-btn" id="btnRestart">Start Over</button>
    </div>

  </div>

  <!-- ===== WATCHLIST SCREEN ===== -->
  <div class="screen" id="watchlistScreen">
    <div class="screen-scroll">
      <div class="watchlist-tabs">
        <div class="wl-tab active" data-wltab="towatch">To Watch <span class="wl-count" id="towatchCount">(0)</span></div>
        <div class="wl-tab" data-wltab="watched">Watched <span class="wl-count" id="watchedCount">(0)</span></div>
      </div>
      <div class="wl-search-row">
        <input class="wl-search-input" id="wlSearchInput" placeholder="Search movies..." autocomplete="off">
        <span class="wl-search-clear" id="wlSearchClear">&#x2715;</span>
      </div>
      <div id="wlContent"></div>
    </div>
  </div>

  <!-- ===== PARTY SCREEN ===== -->
  <div class="screen" id="partyScreen">
    <div class="screen-scroll">
      <div class="party-hero">
        <div class="party-hero-icon">&#127917;</div>
        <div class="party-hero-title">Party Mode</div>
        <div class="party-hero-desc">Can't decide what to watch? Swipe together and find movies everyone agrees on.</div>
      </div>

      <div class="party-actions">
        <div class="party-btn" id="partyCreate">
          <div class="party-btn-icon create">&#127914;</div>
          <div>
            <div class="party-btn-title">Create Session</div>
            <div class="party-btn-desc">Pick genres, invite friends, swipe together</div>
          </div>
        </div>
        <div class="party-btn" id="partyJoin">
          <div class="party-btn-icon join">&#128279;</div>
          <div>
            <div class="party-btn-title">Join Session</div>
            <div class="party-btn-desc">Enter a 6-digit room code to join</div>
          </div>
        </div>
      </div>

      <div class="party-demo">
        <div class="party-demo-label">Example Session</div>
        <div class="room-code-display">
          <div class="code-char">F</div>
          <div class="code-char">L</div>
          <div class="code-char">K</div>
          <div class="code-dash">-</div>
          <div class="code-char">4</div>
          <div class="code-char">2</div>
          <div class="code-char">7</div>
        </div>
        <div class="party-demo-members">
          <div class="demo-avatar">&#128100;</div>
          <div class="demo-avatar">&#128100;</div>
          <div class="demo-avatar">&#128100;</div>
          <div class="demo-waiting">3 members swiping...</div>
        </div>
        <div class="party-demo-footer">Matches revealed at the end of session</div>
      </div>
    </div>
  </div>

  <!-- ===== PROFILE SCREEN ===== -->
  <div class="screen" id="profileScreen">
    <div class="screen-scroll">
      <div class="profile-header">
        <div class="profile-avatar">A</div>
        <div class="profile-name">Armin</div>
        <div class="profile-handle">@armin_picks</div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value" id="statSwiped">0</div>
          <div class="stat-label">Swiped</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="statSaved">0</div>
          <div class="stat-label">Saved</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="statRating">-</div>
          <div class="stat-label">Avg Rating</div>
        </div>
      </div>
      <div class="stats-row-secondary">
        <div class="stat-card stat-card-wide">
          <div class="stat-value" id="statWatchTime">0h 0m</div>
          <div class="stat-label">Total Watch Time</div>
        </div>
        <div class="stat-card stat-card-wide">
          <div class="stat-value" id="statMoviesWatched">0</div>
          <div class="stat-label">Films Logged</div>
        </div>
      </div>

      <div class="section-label">Your Top 3 Movies</div>
      <div class="top-movies-list" id="topMoviesList">
        <div class="top-movies-empty">Rate some movies to see your top picks!</div>
      </div>

      <div class="section-label">Your Taste Profile</div>
      <div class="genre-chart" id="genreChart">
        <div class="genre-chart-empty">Watch some movies to see your taste profile!</div>
      </div>

      <div class="section-label">Your Streaming Services</div>
      <div class="streaming-grid" id="streamingGrid"></div>

      <div class="section-label">Settings</div>
      <div class="settings-list">
        <div class="settings-item" id="themeToggleItem" style="cursor:pointer;">
          <div class="settings-item-left">
            <span class="settings-icon" id="themeIcon">🌙</span>
            <span class="settings-label" id="themeLabel">Dark Mode</span>
          </div>
          <div class="theme-toggle-track on" id="themeToggleTrack">
            <div class="theme-toggle-thumb"></div>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">&#128276;</span>
            <span class="settings-label">Notifications</span>
          </div>
          <span class="settings-arrow">&#8250;</span>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">&#127760;</span>
            <span class="settings-label">Region</span>
          </div>
          <span class="settings-arrow">&#8250;</span>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">&#128100;</span>
            <span class="settings-label">Account</span>
          </div>
          <span class="settings-arrow">&#8250;</span>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon">&#9432;</span>
            <span class="settings-label">About FlickPick</span>
          </div>
          <span class="settings-arrow">&#8250;</span>
        </div>
      </div>

      <button class="signout-btn">Sign Out</button>
    </div>
  </div>

  <!-- ===== BOTTOM SHEET (Rating) ===== -->
  <div class="sheet-backdrop" id="sheetBackdrop"></div>
  <div class="bottom-sheet" id="ratingSheet">
    <div class="sheet-handle"></div>
    <div class="sheet-movie-info" id="sheetMovieInfo"></div>
    <div style="text-align:center; margin-bottom:16px;">
      <div style="font-size:16px; font-weight:600; margin-bottom:4px;">Rate this movie</div>
      <div style="font-size:13px; color:var(--text-muted);">Tap left half for half-star, right half for full</div>
    </div>
    <div class="star-rating" id="starRating">
      <div class="star-wrapper" data-star="1"><span class="star-bg">&#9733;</span><span class="star-fill" id="sf1">&#9733;</span></div>
      <div class="star-wrapper" data-star="2"><span class="star-bg">&#9733;</span><span class="star-fill" id="sf2">&#9733;</span></div>
      <div class="star-wrapper" data-star="3"><span class="star-bg">&#9733;</span><span class="star-fill" id="sf3">&#9733;</span></div>
      <div class="star-wrapper" data-star="4"><span class="star-bg">&#9733;</span><span class="star-fill" id="sf4">&#9733;</span></div>
      <div class="star-wrapper" data-star="5"><span class="star-bg">&#9733;</span><span class="star-fill" id="sf5">&#9733;</span></div>
    </div>
    <div class="rating-value" id="ratingValueLabel"></div>
    <textarea class="review-input" id="reviewInput" rows="3" placeholder="Write a review (optional)..."></textarea>
    <button class="sheet-submit" id="sheetSubmit">Submit Rating</button>
  </div>

  <!-- ===== TOAST ===== -->
  <div class="toast" id="toast"></div>

  <!-- ===== CONFETTI ===== -->
  <div class="confetti-container" id="confettiContainer"></div>

  <!-- ===== DETAIL PANEL ===== -->
  <div class="detail-overlay" id="detailOverlay"></div>
  <div class="detail-panel" id="detailPanel">
    <div class="detail-header">
      <div class="detail-close" id="detailClose">&#10005;</div>
      <div class="detail-header-title" id="detailHeaderTitle"></div>
    </div>
    <div class="detail-body" id="detailBody"></div>
  </div>

  <!-- ===== FAB (floating above all screens) ===== -->
  <div class="fab-container" id="fabContainer">
    <div class="fab-menu" id="fabMenu">
      <div class="fab-option" id="fabWatched">
        <span class="fab-option-label">Mark as Watched</span>
        <span class="fab-option-icon">&#128065;</span>
      </div>
      <div class="fab-option" id="fabShare">
        <span class="fab-option-label">Share</span>
        <span class="fab-option-icon">&#8599;</span>
      </div>
      <div class="fab-option" id="fabSave">
        <span class="fab-option-label">Save to Session</span>
        <span class="fab-option-icon">&#128204;</span>
      </div>
    </div>
    <div class="fab-main" id="fabMain">+</div>
  </div>

  <!-- ===== TAB BAR ===== -->
  <div class="tab-bar">
    <div class="tab-item active" data-tab="discover">
      <span class="tab-icon">&#9881;</span>
      <span class="tab-label">Discover</span>
    </div>
    <div class="tab-item" data-tab="watchlist">
      <span class="tab-icon">&#9829;</span>
      <span class="tab-label">Watchlist</span>
    </div>
    <div class="tab-item" data-tab="party">
      <span class="tab-icon">&#127881;</span>
      <span class="tab-label">Party</span>
    </div>
    <div class="tab-item" data-tab="profile">
      <span class="tab-icon">&#128100;</span>
      <span class="tab-label">Profile</span>
    </div>
  </div>
</div>

<script>
// ============================================================
// MOVIE DATABASE (100 movies from Excel)
// ============================================================
const MOVIES = [
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "rating": 9.3,
    "runtime": "142 min",
    "genres": [
      "Drama"
    ],
    "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tim Robbins",
        "role": ""
      },
      {
        "name": "Morgan Freeman",
        "role": ""
      },
      {
        "name": "Bob Gunton",
        "role": ""
      }
    ]
  },
  {
    "id": 2,
    "title": "The Godfather",
    "year": 1972,
    "rating": 9.2,
    "runtime": "175 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Marlon Brando",
        "role": ""
      },
      {
        "name": "Al Pacino",
        "role": ""
      },
      {
        "name": "James Caan",
        "role": ""
      }
    ]
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "year": 2008,
    "rating": 9.0,
    "runtime": "152 min",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "synopsis": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Christian Bale",
        "role": ""
      },
      {
        "name": "Heath Ledger",
        "role": ""
      },
      {
        "name": "Aaron Eckhart",
        "role": ""
      }
    ]
  },
  {
    "id": 4,
    "title": "The Godfather Part II",
    "year": 1974,
    "rating": 9.0,
    "runtime": "202 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Al Pacino",
        "role": ""
      },
      {
        "name": "Robert De Niro",
        "role": ""
      },
      {
        "name": "Robert Duvall",
        "role": ""
      }
    ]
  },
  {
    "id": 5,
    "title": "12 Angry Men",
    "year": 1957,
    "rating": 9.0,
    "runtime": "96 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    "streaming": [
      "Prime Video",
      "MGM+"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Henry Fonda",
        "role": ""
      },
      {
        "name": "Lee J. Cobb",
        "role": ""
      },
      {
        "name": "Martin Balsam",
        "role": ""
      }
    ]
  },
  {
    "id": 6,
    "title": "Schindler's List",
    "year": 1993,
    "rating": 9.0,
    "runtime": "195 min",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "synopsis": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Liam Neeson",
        "role": ""
      },
      {
        "name": "Ralph Fiennes",
        "role": ""
      },
      {
        "name": "Ben Kingsley",
        "role": ""
      }
    ]
  },
  {
    "id": 7,
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "rating": 9.0,
    "runtime": "201 min",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "synopsis": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Elijah Wood",
        "role": ""
      },
      {
        "name": "Viggo Mortensen",
        "role": ""
      },
      {
        "name": "Ian McKellen",
        "role": ""
      }
    ]
  },
  {
    "id": 8,
    "title": "Pulp Fiction",
    "year": 1994,
    "rating": 8.9,
    "runtime": "154 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTItNDJhZi00NzVlLWE3N2QtMGU5NTU3M2QwZVJmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "John Travolta",
        "role": ""
      },
      {
        "name": "Uma Thurman",
        "role": ""
      },
      {
        "name": "Samuel L. Jackson",
        "role": ""
      }
    ]
  },
  {
    "id": 9,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "rating": 8.8,
    "runtime": "178 min",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "synopsis": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Elijah Wood",
        "role": ""
      },
      {
        "name": "Ian McKellen",
        "role": ""
      },
      {
        "name": "Orlando Bloom",
        "role": ""
      }
    ]
  },
  {
    "id": 10,
    "title": "The Good  the Bad and the Ugly",
    "year": 1966,
    "rating": 8.8,
    "runtime": "161 min",
    "genres": [
      "Adventure",
      "Western"
    ],
    "synopsis": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Clint Eastwood",
        "role": ""
      },
      {
        "name": "Eli Wallach",
        "role": ""
      },
      {
        "name": "Lee Van Cleef",
        "role": ""
      }
    ]
  },
  {
    "id": 11,
    "title": "Forrest Gump",
    "year": 1994,
    "rating": 8.8,
    "runtime": "142 min",
    "genres": [
      "Drama",
      "Romance"
    ],
    "synopsis": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tom Hanks",
        "role": ""
      },
      {
        "name": "Robin Wright",
        "role": ""
      },
      {
        "name": "Gary Sinise",
        "role": ""
      }
    ]
  },
  {
    "id": 12,
    "title": "Fight Club",
    "year": 1999,
    "rating": 8.8,
    "runtime": "139 min",
    "genres": [
      "Drama"
    ],
    "synopsis": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Brad Pitt",
        "role": ""
      },
      {
        "name": "Edward Norton",
        "role": ""
      },
      {
        "name": "Meat Loaf",
        "role": ""
      }
    ]
  },
  {
    "id": 13,
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "rating": 8.8,
    "runtime": "179 min",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "synopsis": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjNDYtNDEzIz00ZWZaNDg2YmItYjE5NDQwZjVmZWIzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Elijah Wood",
        "role": ""
      },
      {
        "name": "Ian McKellen",
        "role": ""
      },
      {
        "name": "Viggo Mortensen",
        "role": ""
      }
    ]
  },
  {
    "id": 14,
    "title": "Inception",
    "year": 2010,
    "rating": 8.8,
    "runtime": "148 min",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Leonardo DiCaprio",
        "role": ""
      },
      {
        "name": "Joseph Gordon-Levitt",
        "role": ""
      },
      {
        "name": "Elliot Page",
        "role": ""
      }
    ]
  },
  {
    "id": 15,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "rating": 8.7,
    "runtime": "124 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "synopsis": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItOThkMDcjYmExZWFlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Mark Hamill",
        "role": ""
      },
      {
        "name": "Harrison Ford",
        "role": ""
      },
      {
        "name": "Carrie Fisher",
        "role": ""
      }
    ]
  },
  {
    "id": 16,
    "title": "The Matrix",
    "year": 1999,
    "rating": 8.7,
    "runtime": "136 min",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "synopsis": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Keanu Reeves",
        "role": ""
      },
      {
        "name": "Laurence Fishburne",
        "role": ""
      },
      {
        "name": "Carrie-Anne Moss",
        "role": ""
      }
    ]
  },
  {
    "id": 17,
    "title": "Goodfellas",
    "year": 1990,
    "rating": 8.7,
    "runtime": "145 min",
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "synopsis": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWE1YWQtOTEwYWVkOWY1NzMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Robert De Niro",
        "role": ""
      },
      {
        "name": "Ray Liotta",
        "role": ""
      },
      {
        "name": "Joe Pesci",
        "role": ""
      }
    ]
  },
  {
    "id": 18,
    "title": "One Flew Over the Cuckoo's Nest",
    "year": 1975,
    "rating": 8.7,
    "runtime": "133 min",
    "genres": [
      "Drama"
    ],
    "synopsis": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Jack Nicholson",
        "role": ""
      },
      {
        "name": "Louise Fletcher",
        "role": ""
      },
      {
        "name": "Michael Berryman",
        "role": ""
      }
    ]
  },
  {
    "id": 19,
    "title": "Se7en",
    "year": 1995,
    "rating": 8.6,
    "runtime": "127 min",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "synopsis": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTE1NDk1NTEtMzg0YS00MDdjLWFkZDgtZDlhNWJiZDczMmRjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Morgan Freeman",
        "role": ""
      },
      {
        "name": "Brad Pitt",
        "role": ""
      },
      {
        "name": "Kevin Spacey",
        "role": ""
      }
    ]
  },
  {
    "id": 20,
    "title": "Seven Samurai",
    "year": 1954,
    "rating": 8.6,
    "runtime": "207 min",
    "genres": [
      "Action",
      "Drama"
    ],
    "synopsis": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    "streaming": [
      "Max",
      "Criterion Channel"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDgwODQyNDExOF5BMl5BanBnXkFtZTcwNzcyNjE1MQ@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Toshir\u00f4 Mifune",
        "role": ""
      },
      {
        "name": "Takashi Shimura",
        "role": ""
      },
      {
        "name": "Keiko Tsushima",
        "role": ""
      }
    ]
  },
  {
    "id": 21,
    "title": "Interstellar",
    "year": 2014,
    "rating": 8.7,
    "runtime": "169 min",
    "genres": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "synopsis": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Matthew McConaughey",
        "role": ""
      },
      {
        "name": "Anne Hathaway",
        "role": ""
      },
      {
        "name": "Jessica Chastain",
        "role": ""
      }
    ]
  },
  {
    "id": 22,
    "title": "It's a Wonderful Life",
    "year": 1946,
    "rating": 8.6,
    "runtime": "130 min",
    "genres": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "synopsis": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTEsXkEyXkFqcGdeQXVyNjUwMzI2NzQ@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "James Stewart",
        "role": ""
      },
      {
        "name": "Donna Reed",
        "role": ""
      },
      {
        "name": "Lionel Barrymore",
        "role": ""
      }
    ]
  },
  {
    "id": 23,
    "title": "The Silence of the Lambs",
    "year": 1991,
    "rating": 8.6,
    "runtime": "118 min",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "synopsis": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1YWEtYzM1M2EzNDVKZDc2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Jodie Foster",
        "role": ""
      },
      {
        "name": "Anthony Hopkins",
        "role": ""
      },
      {
        "name": "Lawrence A. Bonney",
        "role": ""
      }
    ]
  },
  {
    "id": 24,
    "title": "City of God",
    "year": 2002,
    "rating": 8.6,
    "runtime": "130 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGU5YWEyNDEtYWNlNi00ZWQ1LWE2NGEtYjZmYTExMGYxMTRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Alexandre Rodrigues",
        "role": ""
      },
      {
        "name": "Leandro Firmino",
        "role": ""
      },
      {
        "name": "Matheus Nachtergaele",
        "role": ""
      }
    ]
  },
  {
    "id": 25,
    "title": "Saving Private Ryan",
    "year": 1998,
    "rating": 8.6,
    "runtime": "169 min",
    "genres": [
      "Drama",
      "War"
    ],
    "synopsis": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tom Hanks",
        "role": ""
      },
      {
        "name": "Matt Damon",
        "role": ""
      },
      {
        "name": "Tom Sizemore",
        "role": ""
      }
    ]
  },
  {
    "id": 26,
    "title": "Life Is Beautiful",
    "year": 1997,
    "rating": 8.6,
    "runtime": "116 min",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "synopsis": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwMWFiNzgxMjc0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Roberto Benigni",
        "role": ""
      },
      {
        "name": "Nicoletta Braschi",
        "role": ""
      },
      {
        "name": "Giorgio Cantarini",
        "role": ""
      }
    ]
  },
  {
    "id": 27,
    "title": "The Green Mile",
    "year": 1999,
    "rating": 8.6,
    "runtime": "189 min",
    "genres": [
      "Crime",
      "Drama",
      "Fantasy"
    ],
    "synopsis": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tom Hanks",
        "role": ""
      },
      {
        "name": "Michael Clarke Duncan",
        "role": ""
      },
      {
        "name": "David Morse",
        "role": ""
      }
    ]
  },
  {
    "id": 28,
    "title": "Star Wars: Episode IV - A New Hope",
    "year": 1977,
    "rating": 8.6,
    "runtime": "121 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "synopsis": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Mark Hamill",
        "role": ""
      },
      {
        "name": "Harrison Ford",
        "role": ""
      },
      {
        "name": "Carrie Fisher",
        "role": ""
      }
    ]
  },
  {
    "id": 29,
    "title": "Terminator 2: Judgment Day",
    "year": 1991,
    "rating": 8.6,
    "runtime": "137 min",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "synopsis": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtNDY3Zi00NjljLTgwNjQtOThsNDlhNWI0ZTVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Arnold Schwarzenegger",
        "role": ""
      },
      {
        "name": "Linda Hamilton",
        "role": ""
      },
      {
        "name": "Edward Furlong",
        "role": ""
      }
    ]
  },
  {
    "id": 30,
    "title": "Back to the Future",
    "year": 1985,
    "rating": 8.5,
    "runtime": "116 min",
    "genres": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "synopsis": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend.",
    "streaming": [
      "Peacock",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Michael J. Fox",
        "role": ""
      },
      {
        "name": "Christopher Lloyd",
        "role": ""
      },
      {
        "name": "Lea Thompson",
        "role": ""
      }
    ]
  },
  {
    "id": 31,
    "title": "Spirited Away",
    "year": 2001,
    "rating": 8.5,
    "runtime": "125 min",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "synopsis": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNTEhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Daveigh Chase",
        "role": ""
      },
      {
        "name": "Suzanne Pleshette",
        "role": ""
      },
      {
        "name": "Miyu Irino",
        "role": ""
      }
    ]
  },
  {
    "id": 32,
    "title": "The Pianist",
    "year": 2002,
    "rating": 8.5,
    "runtime": "150 min",
    "genres": [
      "Biography",
      "Drama",
      "Music"
    ],
    "synopsis": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ5ODZkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Adrien Brody",
        "role": ""
      },
      {
        "name": "Thomas Kretschmann",
        "role": ""
      },
      {
        "name": "Frank Finlay",
        "role": ""
      }
    ]
  },
  {
    "id": 33,
    "title": "Psycho",
    "year": 1960,
    "rating": 8.5,
    "runtime": "109 min",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "synopsis": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Anthony Perkins",
        "role": ""
      },
      {
        "name": "Janet Leigh",
        "role": ""
      },
      {
        "name": "Vera Miles",
        "role": ""
      }
    ]
  },
  {
    "id": 34,
    "title": "Parasite",
    "year": 2019,
    "rating": 8.5,
    "runtime": "132 min",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "synopsis": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "streaming": [
      "Max",
      "Hulu"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Song Kang-ho",
        "role": ""
      },
      {
        "name": "Lee Sun-kyun",
        "role": ""
      },
      {
        "name": "Cho Yeo-jeong",
        "role": ""
      }
    ]
  },
  {
    "id": 35,
    "title": "L\u00e9on: The Professional",
    "year": 1994,
    "rating": 8.5,
    "runtime": "110 min",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "synopsis": "12-year-old Mathilda is reluctantly taken in by L\u00e9on, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his prot\u00e9g\u00e9e.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Jean Reno",
        "role": ""
      },
      {
        "name": "Gary Oldman",
        "role": ""
      },
      {
        "name": "Natalie Portman",
        "role": ""
      }
    ]
  },
  {
    "id": 36,
    "title": "Gladiator",
    "year": 2000,
    "rating": 8.5,
    "runtime": "155 min",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "synopsis": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODItNTNjYTY2ZGJiNjY0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Russell Crowe",
        "role": ""
      },
      {
        "name": "Joaquin Phoenix",
        "role": ""
      },
      {
        "name": "Connie Nielsen",
        "role": ""
      }
    ]
  },
  {
    "id": 37,
    "title": "The Lion King",
    "year": 1994,
    "rating": 8.5,
    "runtime": "88 min",
    "genres": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "synopsis": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Matthew Broderick",
        "role": ""
      },
      {
        "name": "Jeremy Irons",
        "role": ""
      },
      {
        "name": "James Earl Jones",
        "role": ""
      }
    ]
  },
  {
    "id": 38,
    "title": "American History X",
    "year": 1998,
    "rating": 8.5,
    "runtime": "119 min",
    "genres": [
      "Drama"
    ],
    "synopsis": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MzFlZDhlNDFhZDliYTc@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Edward Norton",
        "role": ""
      },
      {
        "name": "Edward Furlong",
        "role": ""
      },
      {
        "name": "Beverly D'Angelo",
        "role": ""
      }
    ]
  },
  {
    "id": 39,
    "title": "The Departed",
    "year": 2006,
    "rating": 8.5,
    "runtime": "151 min",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "synopsis": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2NzIzNV5BMl5BanBnXkFtZTcwMzY5Njc3MQ@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Leonardo DiCaprio",
        "role": ""
      },
      {
        "name": "Matt Damon",
        "role": ""
      },
      {
        "name": "Jack Nicholson",
        "role": ""
      }
    ]
  },
  {
    "id": 40,
    "title": "Whiplash",
    "year": 2014,
    "rating": 8.5,
    "runtime": "106 min",
    "genres": [
      "Drama",
      "Music"
    ],
    "synopsis": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtNDVrNC00MTUwWE1YWAtMGUwNjFlNTNjYzA@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Miles Teller",
        "role": ""
      },
      {
        "name": "J.K. Simmons",
        "role": ""
      },
      {
        "name": "Melissa Benoist",
        "role": ""
      }
    ]
  },
  {
    "id": 41,
    "title": "The Prestige",
    "year": 2006,
    "rating": 8.5,
    "runtime": "130 min",
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "synopsis": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNV5BMl5BanBnXkFtZTYwNTM0MzY2._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Christian Bale",
        "role": ""
      },
      {
        "name": "Hugh Jackman",
        "role": ""
      },
      {
        "name": "Scarlett Johansson",
        "role": ""
      }
    ]
  },
  {
    "id": 42,
    "title": "The Usual Suspects",
    "year": 1995,
    "rating": 8.5,
    "runtime": "106 min",
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "synopsis": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    "streaming": [
      "Prime Video",
      "MGM+"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Kevin Spacey",
        "role": ""
      },
      {
        "name": "Gabriel Byrne",
        "role": ""
      },
      {
        "name": "Chazz Palminteri",
        "role": ""
      }
    ]
  },
  {
    "id": 43,
    "title": "Grave of the Fireflies",
    "year": 1988,
    "rating": 8.5,
    "runtime": "89 min",
    "genres": [
      "Animation",
      "Drama",
      "War"
    ],
    "synopsis": "A young boy and his little sister struggle to survive in Japan during World War II.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDAwZjUwNDUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tsutomu Tatsumi",
        "role": ""
      },
      {
        "name": "Ayano Shiraishi",
        "role": ""
      },
      {
        "name": "Akemi Yamaguchi",
        "role": ""
      }
    ]
  },
  {
    "id": 44,
    "title": "Harakiri",
    "year": 1962,
    "rating": 8.6,
    "runtime": "133 min",
    "genres": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "synopsis": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who called there previously, he reveals how their pasts are intertwined.",
    "streaming": [
      "Criterion Channel"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkYjFiNTZkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tatsuya Nakadai",
        "role": ""
      },
      {
        "name": "Akira Ishihama",
        "role": ""
      },
      {
        "name": "Shima Iwashita",
        "role": ""
      }
    ]
  },
  {
    "id": 45,
    "title": "Casablanca",
    "year": 1942,
    "rating": 8.5,
    "runtime": "102 min",
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "synopsis": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Humphrey Bogart",
        "role": ""
      },
      {
        "name": "Ingrid Bergman",
        "role": ""
      },
      {
        "name": "Paul Henreid",
        "role": ""
      }
    ]
  },
  {
    "id": 46,
    "title": "Cinema Paradiso",
    "year": 1988,
    "rating": 8.5,
    "runtime": "155 min",
    "genres": [
      "Drama",
      "Romance"
    ],
    "synopsis": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    "streaming": [
      "Prime Video",
      "Max"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTcyLWI1ZWEtZTlhOWQ3NDFkOTkzXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Philippe Noiret",
        "role": ""
      },
      {
        "name": "Enzo Cannavale",
        "role": ""
      },
      {
        "name": "Antonella Attili",
        "role": ""
      }
    ]
  },
  {
    "id": 47,
    "title": "Rear Window",
    "year": 1954,
    "rating": 8.5,
    "runtime": "112 min",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "synopsis": "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "James Stewart",
        "role": ""
      },
      {
        "name": "Grace Kelly",
        "role": ""
      },
      {
        "name": "Wendell Corey",
        "role": ""
      }
    ]
  },
  {
    "id": 48,
    "title": "Alien",
    "year": 1979,
    "rating": 8.5,
    "runtime": "117 min",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "synopsis": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Sigourney Weaver",
        "role": ""
      },
      {
        "name": "Tom Skerritt",
        "role": ""
      },
      {
        "name": "John Hurt",
        "role": ""
      }
    ]
  },
  {
    "id": 49,
    "title": "Modern Times",
    "year": 1936,
    "rating": 8.5,
    "runtime": "87 min",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "synopsis": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    "streaming": [
      "Max",
      "Criterion Channel"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTIxLWE1NWItNjUzZTUxMzZhY2VlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Charles Chaplin",
        "role": ""
      },
      {
        "name": "Paulette Goddard",
        "role": ""
      },
      {
        "name": "Henry Bergman",
        "role": ""
      }
    ]
  },
  {
    "id": 50,
    "title": "City Lights",
    "year": 1931,
    "rating": 8.5,
    "runtime": "87 min",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "synopsis": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
    "streaming": [
      "Max",
      "Criterion Channel"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Charles Chaplin",
        "role": ""
      },
      {
        "name": "Virginia Cherrill",
        "role": ""
      },
      {
        "name": "Florence Lee",
        "role": ""
      }
    ]
  },
  {
    "id": 51,
    "title": "Apocalypse Now",
    "year": 1979,
    "rating": 8.4,
    "runtime": "147 min",
    "genres": [
      "Drama",
      "Mystery",
      "War"
    ],
    "synopsis": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
    "streaming": [
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZTEyMzFiNDg2OTUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Martin Sheen",
        "role": ""
      },
      {
        "name": "Marlon Brando",
        "role": ""
      },
      {
        "name": "Robert Duvall",
        "role": ""
      }
    ]
  },
  {
    "id": 52,
    "title": "Memento",
    "year": 2000,
    "rating": 8.4,
    "runtime": "113 min",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "synopsis": "A man with short-term memory loss attempts to track down his wife's murderer.",
    "streaming": [
      "Prime Video",
      "Tubi"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Guy Pearce",
        "role": ""
      },
      {
        "name": "Carrie-Anne Moss",
        "role": ""
      },
      {
        "name": "Joe Pantoliano",
        "role": ""
      }
    ]
  },
  {
    "id": 53,
    "title": "Django Unchained",
    "year": 2012,
    "rating": 8.4,
    "runtime": "165 min",
    "genres": [
      "Drama",
      "Western"
    ],
    "synopsis": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Jamie Foxx",
        "role": ""
      },
      {
        "name": "Christoph Waltz",
        "role": ""
      },
      {
        "name": "Leonardo DiCaprio",
        "role": ""
      }
    ]
  },
  {
    "id": 54,
    "title": "Indiana Jones and the Raiders of the Lost Ark",
    "year": 1981,
    "rating": 8.4,
    "runtime": "115 min",
    "genres": [
      "Action",
      "Adventure"
    ],
    "synopsis": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    "streaming": [
      "Disney+",
      "Paramount+"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwMDg2NTg5OA@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Harrison Ford",
        "role": ""
      },
      {
        "name": "Karen Allen",
        "role": ""
      },
      {
        "name": "Paul Freeman",
        "role": ""
      }
    ]
  },
  {
    "id": 55,
    "title": "WALL\u00b7E",
    "year": 2008,
    "rating": 8.4,
    "runtime": "98 min",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "synopsis": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Ben Burtt",
        "role": ""
      },
      {
        "name": "Elissa Knight",
        "role": ""
      },
      {
        "name": "Jeff Garlin",
        "role": ""
      }
    ]
  },
  {
    "id": 56,
    "title": "The Lives of Others",
    "year": 2006,
    "rating": 8.4,
    "runtime": "137 min",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "synopsis": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00YjgwLWEzOWItMGEyMWU5MjMyZGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Ulrich M\u00fche",
        "role": ""
      },
      {
        "name": "Martina Gedeck",
        "role": ""
      },
      {
        "name": "Sebastian Koch",
        "role": ""
      }
    ]
  },
  {
    "id": 57,
    "title": "Sunset Blvd.",
    "year": 1950,
    "rating": 8.4,
    "runtime": "110 min",
    "genres": [
      "Drama",
      "Film-Noir"
    ],
    "synopsis": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc3NDUzODcxNV5BMl5BanBnXkFtZTgwMjIyOTIwMjE@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "William Holden",
        "role": ""
      },
      {
        "name": "Gloria Swanson",
        "role": ""
      },
      {
        "name": "Erich von Stroheim",
        "role": ""
      }
    ]
  },
  {
    "id": 58,
    "title": "Paths of Glory",
    "year": 1957,
    "rating": 8.4,
    "runtime": "88 min",
    "genres": [
      "Drama",
      "War"
    ],
    "synopsis": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    "streaming": [
      "Prime Video",
      "MGM+"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Kirk Douglas",
        "role": ""
      },
      {
        "name": "Ralph Meeker",
        "role": ""
      },
      {
        "name": "Adolphe Menjou",
        "role": ""
      }
    ]
  },
  {
    "id": 59,
    "title": "The Shining",
    "year": 1980,
    "rating": 8.4,
    "runtime": "146 min",
    "genres": [
      "Drama",
      "Horror"
    ],
    "synopsis": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MWEtM2UzZi00ZTk5LWE2NTctYThiZmVhNWNjMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Jack Nicholson",
        "role": ""
      },
      {
        "name": "Shelley Duvall",
        "role": ""
      },
      {
        "name": "Danny Lloyd",
        "role": ""
      }
    ]
  },
  {
    "id": 60,
    "title": "The Great Dictator",
    "year": 1940,
    "rating": 8.4,
    "runtime": "125 min",
    "genres": [
      "Comedy",
      "Drama",
      "War"
    ],
    "synopsis": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    "streaming": [
      "Max",
      "Criterion Channel"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxNDAtNWIzZTA2MDUxM2Q3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Charles Chaplin",
        "role": ""
      },
      {
        "name": "Paulette Goddard",
        "role": ""
      },
      {
        "name": "Jack Oakie",
        "role": ""
      }
    ]
  },
  {
    "id": 61,
    "title": "Avengers: Infinity War",
    "year": 2018,
    "rating": 8.4,
    "runtime": "149 min",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "synopsis": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Robert Downey Jr.",
        "role": ""
      },
      {
        "name": "Chris Hemsworth",
        "role": ""
      },
      {
        "name": "Mark Ruffalo",
        "role": ""
      }
    ]
  },
  {
    "id": 62,
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "rating": 8.4,
    "runtime": "117 min",
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "synopsis": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Shameik Moore",
        "role": ""
      },
      {
        "name": "Jake Johnson",
        "role": ""
      },
      {
        "name": "Hailee Steinfeld",
        "role": ""
      }
    ]
  },
  {
    "id": 63,
    "title": "Witness for the Prosecution",
    "year": 1957,
    "rating": 8.4,
    "runtime": "116 min",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "synopsis": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    "streaming": [
      "Prime Video",
      "MGM+"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDgwNWJiM2JkNjNjXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tyrone Power",
        "role": ""
      },
      {
        "name": "Marlene Dietrich",
        "role": ""
      },
      {
        "name": "Charles Laughton",
        "role": ""
      }
    ]
  },
  {
    "id": 64,
    "title": "Aliens",
    "year": 1986,
    "rating": 8.4,
    "runtime": "137 min",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "synopsis": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGJkY2EyOWYtYWRmNy00ZTEzLTllNDYtYWZiNWZlZmI0YTgwXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Sigourney Weaver",
        "role": ""
      },
      {
        "name": "Michael Biehn",
        "role": ""
      },
      {
        "name": "Carrie Henn",
        "role": ""
      }
    ]
  },
  {
    "id": 65,
    "title": "Spider-Man: Across the Spider-Verse",
    "year": 2023,
    "rating": 8.6,
    "runtime": "140 min",
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "synopsis": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    "streaming": [
      "Netflix",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZWEzLWEzM2ItYTRmN2U1YTk3ZTYwXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Shameik Moore",
        "role": ""
      },
      {
        "name": "Hailee Steinfeld",
        "role": ""
      },
      {
        "name": "Brian Tyree Henry",
        "role": ""
      }
    ]
  },
  {
    "id": 66,
    "title": "The Dark Knight Rises",
    "year": 2012,
    "rating": 8.4,
    "runtime": "164 min",
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "synopsis": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Christian Bale",
        "role": ""
      },
      {
        "name": "Tom Hardy",
        "role": ""
      },
      {
        "name": "Anne Hathaway",
        "role": ""
      }
    ]
  },
  {
    "id": 67,
    "title": "American Beauty",
    "year": 1999,
    "rating": 8.3,
    "runtime": "122 min",
    "genres": [
      "Drama"
    ],
    "synopsis": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjYtNDBkMi00YWUzLWE2ZTItOWZhMjNlOThjZTNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Kevin Spacey",
        "role": ""
      },
      {
        "name": "Annette Bening",
        "role": ""
      },
      {
        "name": "Thora Birch",
        "role": ""
      }
    ]
  },
  {
    "id": 68,
    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "year": 1964,
    "rating": 8.3,
    "runtime": "95 min",
    "genres": [
      "Comedy",
      "War"
    ],
    "synopsis": "An unhinged American general orders a bombing run on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlMC00Zjg3LWhhN2MtMzg1ZTMyNjY1NTFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Peter Sellers",
        "role": ""
      },
      {
        "name": "George C. Scott",
        "role": ""
      },
      {
        "name": "Sterling Hayden",
        "role": ""
      }
    ]
  },
  {
    "id": 69,
    "title": "Inglourious Basterds",
    "year": 2009,
    "rating": 8.4,
    "runtime": "153 min",
    "genres": [
      "Adventure",
      "Drama",
      "War"
    ],
    "synopsis": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1YTNhNmNlYWVhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Brad Pitt",
        "role": ""
      },
      {
        "name": "Diane Kruger",
        "role": ""
      },
      {
        "name": "Eli Roth",
        "role": ""
      }
    ]
  },
  {
    "id": 70,
    "title": "Oldboy",
    "year": 2003,
    "rating": 8.4,
    "runtime": "120 min",
    "genres": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "synopsis": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Choi Min-sik",
        "role": ""
      },
      {
        "name": "Yoo Ji-tae",
        "role": ""
      },
      {
        "name": "Kang Hye-jeong",
        "role": ""
      }
    ]
  },
  {
    "id": 71,
    "title": "Amadeus",
    "year": 1984,
    "rating": 8.4,
    "runtime": "160 min",
    "genres": [
      "Biography",
      "Drama",
      "Music"
    ],
    "synopsis": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwZi00ZWQxLTExNDItYmViZGZhNjUxNDZhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "F. Murray Abraham",
        "role": ""
      },
      {
        "name": "Tom Hulce",
        "role": ""
      },
      {
        "name": "Elizabeth Berridge",
        "role": ""
      }
    ]
  },
  {
    "id": 72,
    "title": "Toy Story",
    "year": 1995,
    "rating": 8.3,
    "runtime": "81 min",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "synopsis": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tom Hanks",
        "role": ""
      },
      {
        "name": "Tim Allen",
        "role": ""
      },
      {
        "name": "Don Rickles",
        "role": ""
      }
    ]
  },
  {
    "id": 73,
    "title": "Coco",
    "year": 2017,
    "rating": 8.4,
    "runtime": "105 min",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "synopsis": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMDIyMTQ@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Anthony Gonzalez",
        "role": ""
      },
      {
        "name": "Gael Garc\u00eda Bernal",
        "role": ""
      },
      {
        "name": "Benjamin Bratt",
        "role": ""
      }
    ]
  },
  {
    "id": 74,
    "title": "Braveheart",
    "year": 1995,
    "rating": 8.3,
    "runtime": "178 min",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "synopsis": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctYjk3Zjg3ODhlNDUzXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Mel Gibson",
        "role": ""
      },
      {
        "name": "Sophie Marceau",
        "role": ""
      },
      {
        "name": "Patrick McGoohan",
        "role": ""
      }
    ]
  },
  {
    "id": 75,
    "title": "Joker",
    "year": 2019,
    "rating": 8.4,
    "runtime": "122 min",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "synopsis": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Joaquin Phoenix",
        "role": ""
      },
      {
        "name": "Robert De Niro",
        "role": ""
      },
      {
        "name": "Zazie Beetz",
        "role": ""
      }
    ]
  },
  {
    "id": 76,
    "title": "Das Boot",
    "year": 1981,
    "rating": 8.3,
    "runtime": "149 min",
    "genres": [
      "Drama",
      "War"
    ],
    "synopsis": "The claustrophobic world of a WWII German U-boat; boredom, filth and sheer terror.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTItNjhiNC00YzFlLWEwNWMtZDAwNjM1ZDFhZDgyXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "J\u00fcrgen Prochnow",
        "role": ""
      },
      {
        "name": "Herbert Gr\u00f6nemeyer",
        "role": ""
      },
      {
        "name": "Klaus Wennemann",
        "role": ""
      }
    ]
  },
  {
    "id": 77,
    "title": "Avengers: Endgame",
    "year": 2019,
    "rating": 8.4,
    "runtime": "181 min",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "synopsis": "After the devastating events of Infinity War, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Robert Downey Jr.",
        "role": ""
      },
      {
        "name": "Chris Evans",
        "role": ""
      },
      {
        "name": "Mark Ruffalo",
        "role": ""
      }
    ]
  },
  {
    "id": 78,
    "title": "Princess Mononoke",
    "year": 1997,
    "rating": 8.3,
    "runtime": "134 min",
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "synopsis": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNjc2MS00YWE1LWEyM2ItYWU1NjQwOWEzZTJhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Y\u00f4ji Matsuda",
        "role": ""
      },
      {
        "name": "Yuriko Ishida",
        "role": ""
      },
      {
        "name": "Y\u00fbko Tanaka",
        "role": ""
      }
    ]
  },
  {
    "id": 79,
    "title": "Good Will Hunting",
    "year": 1997,
    "rating": 8.3,
    "runtime": "126 min",
    "genres": [
      "Drama",
      "Romance"
    ],
    "synopsis": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Robin Williams",
        "role": ""
      },
      {
        "name": "Matt Damon",
        "role": ""
      },
      {
        "name": "Ben Affleck",
        "role": ""
      }
    ]
  },
  {
    "id": 80,
    "title": "Once Upon a Time in America",
    "year": 1984,
    "rating": 8.3,
    "runtime": "229 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00ZWQ1LThiMWMtMzYxMWI2YjVjZjk2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Robert De Niro",
        "role": ""
      },
      {
        "name": "James Woods",
        "role": ""
      },
      {
        "name": "Elizabeth McGovern",
        "role": ""
      }
    ]
  },
  {
    "id": 81,
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "year": 1983,
    "rating": 8.3,
    "runtime": "131 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "synopsis": "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWZlNDNcZTgwMzgtYjE2NC00ZjlkLWFlNWItMzBkMDIzY2JlMTJkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Mark Hamill",
        "role": ""
      },
      {
        "name": "Harrison Ford",
        "role": ""
      },
      {
        "name": "Carrie Fisher",
        "role": ""
      }
    ]
  },
  {
    "id": 82,
    "title": "Reservoir Dogs",
    "year": 1992,
    "rating": 8.3,
    "runtime": "99 min",
    "genres": [
      "Crime",
      "Thriller"
    ],
    "synopsis": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjRoOWZkODgyZTU2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Harvey Keitel",
        "role": ""
      },
      {
        "name": "Tim Roth",
        "role": ""
      },
      {
        "name": "Michael Madsen",
        "role": ""
      }
    ]
  },
  {
    "id": 83,
    "title": "2001: A Space Odyssey",
    "year": 1968,
    "rating": 8.3,
    "runtime": "149 min",
    "genres": [
      "Adventure",
      "Sci-Fi"
    ],
    "synopsis": "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins: a spacecraft manned by two men and the supercomputer HAL 9000.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzZmFlZDA2ZTM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Keir Dullea",
        "role": ""
      },
      {
        "name": "Gary Lockwood",
        "role": ""
      },
      {
        "name": "William Sylvester",
        "role": ""
      }
    ]
  },
  {
    "id": 84,
    "title": "Requiem for a Dream",
    "year": 2000,
    "rating": 8.3,
    "runtime": "102 min",
    "genres": [
      "Drama"
    ],
    "synopsis": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    "streaming": [
      "Tubi",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Ellen Burstyn",
        "role": ""
      },
      {
        "name": "Jared Leto",
        "role": ""
      },
      {
        "name": "Jennifer Connelly",
        "role": ""
      }
    ]
  },
  {
    "id": 85,
    "title": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "rating": 8.3,
    "runtime": "108 min",
    "genres": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "synopsis": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    "streaming": [
      "Peacock",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Jim Carrey",
        "role": ""
      },
      {
        "name": "Kate Winslet",
        "role": ""
      },
      {
        "name": "Tom Wilkinson",
        "role": ""
      }
    ]
  },
  {
    "id": 86,
    "title": "Toy Story 3",
    "year": 2010,
    "rating": 8.3,
    "runtime": "103 min",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "synopsis": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQ5Mw@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Tom Hanks",
        "role": ""
      },
      {
        "name": "Tim Allen",
        "role": ""
      },
      {
        "name": "Joan Cusack",
        "role": ""
      }
    ]
  },
  {
    "id": 87,
    "title": "A Clockwork Orange",
    "year": 1971,
    "rating": 8.3,
    "runtime": "136 min",
    "genres": [
      "Crime",
      "Sci-Fi"
    ],
    "synopsis": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwNDM4NjI5MTE@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Malcolm McDowell",
        "role": ""
      },
      {
        "name": "Patrick Magee",
        "role": ""
      },
      {
        "name": "Michael Bates",
        "role": ""
      }
    ]
  },
  {
    "id": 88,
    "title": "Full Metal Jacket",
    "year": 1987,
    "rating": 8.3,
    "runtime": "116 min",
    "genres": [
      "Drama",
      "War"
    ],
    "synopsis": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYjc1NDcxNDJhZjg1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Matthew Modine",
        "role": ""
      },
      {
        "name": "R. Lee Ermey",
        "role": ""
      },
      {
        "name": "Vincent D'Onofrio",
        "role": ""
      }
    ]
  },
  {
    "id": 89,
    "title": "Bicycle Thieves",
    "year": 1948,
    "rating": 8.3,
    "runtime": "89 min",
    "genres": [
      "Drama"
    ],
    "synopsis": "In post-war Italy, a working-class man's bicycle is stolen, endangering his efforts to find work. He and his son set out to find it.",
    "streaming": [
      "Max",
      "Criterion Channel"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmI1ODBjNWItNDRhMi00OTVkLTliNTEtNDRhNzMyMzY2MTMzXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Lamberto Maggiorani",
        "role": ""
      },
      {
        "name": "Enzo Staiola",
        "role": ""
      },
      {
        "name": "Lianella Carell",
        "role": ""
      }
    ]
  },
  {
    "id": 90,
    "title": "Singin' in the Rain",
    "year": 1952,
    "rating": 8.3,
    "runtime": "103 min",
    "genres": [
      "Comedy",
      "Musical",
      "Romance"
    ],
    "synopsis": "A silent film production company and cast make a difficult transition to sound.",
    "streaming": [
      "Max",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzVlNjY1MzdhOTE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Gene Kelly",
        "role": ""
      },
      {
        "name": "Donald O'Connor",
        "role": ""
      },
      {
        "name": "Debbie Reynolds",
        "role": ""
      }
    ]
  },
  {
    "id": 91,
    "title": "Metropolis",
    "year": 1927,
    "rating": 8.3,
    "runtime": "153 min",
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "synopsis": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior.",
    "streaming": [
      "Kino Film Friday",
      "Tubi"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwODA2NDkzNw@@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Brigitte Helm",
        "role": ""
      },
      {
        "name": "Alfred Abel",
        "role": ""
      },
      {
        "name": "Gustav Fr\u00f6hlich",
        "role": ""
      }
    ]
  },
  {
    "id": 92,
    "title": "Snatch",
    "year": 2000,
    "rating": 8.3,
    "runtime": "104 min",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "synopsis": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTMtMTQxMzAyNWE4ZjQxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Jason Statham",
        "role": ""
      },
      {
        "name": "Brad Pitt",
        "role": ""
      },
      {
        "name": "Stephen Graham",
        "role": ""
      }
    ]
  },
  {
    "id": 93,
    "title": "1917",
    "year": 2019,
    "rating": 8.2,
    "runtime": "119 min",
    "genres": [
      "Action",
      "Drama",
      "War"
    ],
    "synopsis": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    "streaming": [
      "Paramount+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTcwZTI5NTUtMzg2Yi00Zjc1LTg4YWQtZmExNzFkMzhhNjg4XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Dean-Charles Chapman",
        "role": ""
      },
      {
        "name": "George MacKay",
        "role": ""
      },
      {
        "name": "Daniel Mays",
        "role": ""
      }
    ]
  },
  {
    "id": 94,
    "title": "Scarface",
    "year": 1983,
    "rating": 8.3,
    "runtime": "170 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    "streaming": [
      "Hulu",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA1OTkyMTMtMTBlMi00YTQ1LWEyM2ItZmI2ODVkZWM3ZGUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Al Pacino",
        "role": ""
      },
      {
        "name": "Michelle Pfeiffer",
        "role": ""
      },
      {
        "name": "Steven Bauer",
        "role": ""
      }
    ]
  },
  {
    "id": 95,
    "title": "Taxi Driver",
    "year": 1976,
    "rating": 8.2,
    "runtime": "114 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "synopsis": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Robert De Niro",
        "role": ""
      },
      {
        "name": "Jodie Foster",
        "role": ""
      },
      {
        "name": "Cybill Shepherd",
        "role": ""
      }
    ]
  },
  {
    "id": 96,
    "title": "The Sting",
    "year": 1973,
    "rating": 8.3,
    "runtime": "129 min",
    "genres": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "synopsis": "Two grifters team up to pull off the ultimate con.",
    "streaming": [
      "Prime Video",
      "Apple TV"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY5MjM1ODAyNV5BMl5BanBnXkFtZTgwNDgwNzcxMTE@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Paul Newman",
        "role": ""
      },
      {
        "name": "Robert Redford",
        "role": ""
      },
      {
        "name": "Robert Shaw",
        "role": ""
      }
    ]
  },
  {
    "id": 97,
    "title": "Up",
    "year": 2009,
    "rating": 8.3,
    "runtime": "96 min",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "synopsis": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    "streaming": [
      "Disney+",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Ed Asner",
        "role": ""
      },
      {
        "name": "Jordan Nagai",
        "role": ""
      },
      {
        "name": "John Ratzenberger",
        "role": ""
      }
    ]
  },
  {
    "id": 98,
    "title": "L.A. Confidential",
    "year": 1997,
    "rating": 8.2,
    "runtime": "138 min",
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "synopsis": "As corruption grows in 1950s Los Angeles, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
    "streaming": [
      "Netflix",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWE3Zi00Yjc1LWEwNGYtNjk3MTk4YmNjMTQ3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Kevin Spacey",
        "role": ""
      },
      {
        "name": "Russell Crowe",
        "role": ""
      },
      {
        "name": "Guy Pearce",
        "role": ""
      }
    ]
  },
  {
    "id": 99,
    "title": "Oppenheimer",
    "year": 2023,
    "rating": 8.3,
    "runtime": "180 min",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "synopsis": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    "streaming": [
      "Peacock",
      "Prime Video"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Cillian Murphy",
        "role": ""
      },
      {
        "name": "Emily Blunt",
        "role": ""
      },
      {
        "name": "Matt Damon",
        "role": ""
      }
    ]
  },
  {
    "id": 100,
    "title": "Indiana Jones and the Last Crusade",
    "year": 1989,
    "rating": 8.2,
    "runtime": "127 min",
    "genres": [
      "Action",
      "Adventure"
    ],
    "synopsis": "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry 'Indiana' Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its powers.",
    "streaming": [
      "Disney+",
      "Paramount+"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg",
    "cast": [
      {
        "name": "Harrison Ford",
        "role": ""
      },
      {
        "name": "Sean Connery",
        "role": ""
      },
      {
        "name": "Alison Doody",
        "role": ""
      }
    ]
  }
];

const STREAMING_SERVICES = [
  { name: "Netflix", color: "#e50914" },
  { name: "Disney+", color: "#113ccf" },
  { name: "Hulu", color: "#1ce783" },
  { name: "Prime", color: "#00a8e1" },
  { name: "HBO Max", color: "#b535f6" },
  { name: "Apple TV+", color: "#a2aaad" },
  { name: "Paramount+", color: "#0064ff" },
  { name: "Peacock", color: "#333333" },
];

const STREAMING_COLORS = {};
STREAMING_SERVICES.forEach(s => STREAMING_COLORS[s.name] = s.color);

// ============================================================
// STATE
// ============================================================
let state = {
  currentIndex: 0,
  watchlist: [],       // { movie, addedAt }
  watched: [],         // { movie, stars, review, watchedAt }
  swipedCount: 0,
  activeTab: 'discover',
  activeWlTab: 'towatch',
  fabOpen: false,
  sheetOpen: false,
  sheetMovie: null,
  selectedStars: 0,
  streamingServices: ['Netflix', 'HBO Max', 'Prime', 'Disney+'],
  isDragging: false,
  isDarkMode: true,
  wlSearch: '',
  watchedSort: 'date',
  activeMood: null,
  filters: { genres: [], streaming: [], yearMin: null, yearMax: null },
  lastSwiped: null,
  rightSwipeCount: 0,
  pendingRecommendation: null,
  expandedGenres: {},
};

// Load from localStorage
try {
  const saved = JSON.parse(localStorage.getItem('flickpick_state'));
  if (saved) {
    state.watchlist = saved.watchlist || [];
    state.watched = saved.watched || [];
    state.swipedCount = saved.swipedCount || 0;
    state.currentIndex = saved.currentIndex || 0;
    state.streamingServices = saved.streamingServices || state.streamingServices;
    state.isDarkMode = saved.isDarkMode !== undefined ? saved.isDarkMode : true;
    state.wlSearch = saved.wlSearch || '';
    state.watchedSort = saved.watchedSort || 'date';
    state.activeMood = saved.activeMood || null;
    state.filters = saved.filters || { genres: [], streaming: [], yearMin: null, yearMax: null };
    state.lastSwiped = saved.lastSwiped || null;
    state.rightSwipeCount = saved.rightSwipeCount || 0;
    state.expandedGenres = saved.expandedGenres || {};
  }
} catch(e) {}

function saveState() {
  try {
    localStorage.setItem('flickpick_state', JSON.stringify({
      watchlist: state.watchlist,
      watched: state.watched,
      swipedCount: state.swipedCount,
      currentIndex: state.currentIndex,
      streamingServices: state.streamingServices,
      isDarkMode: state.isDarkMode,
      wlSearch: state.wlSearch,
      watchedSort: state.watchedSort,
      activeMood: state.activeMood,
      filters: state.filters,
      lastSwiped: state.lastSwiped,
      rightSwipeCount: state.rightSwipeCount,
      expandedGenres: state.expandedGenres,
    }));
  } catch(e) {}
}

// ============================================================
// TAB NAVIGATION
// ============================================================
const screens = {
  discover: document.getElementById('discoverScreen'),
  watchlist: document.getElementById('watchlistScreen'),
  party: document.getElementById('partyScreen'),
  profile: document.getElementById('profileScreen'),
};
const tabItems = document.querySelectorAll('.tab-item');
const headerSubtitle = document.getElementById('headerSubtitle');
const tabNames = { discover: 'Discover', watchlist: 'Watchlist', party: 'Party', profile: 'Profile' };

tabItems.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    if (target === state.activeTab) return;
    state.activeTab = target;
    tabItems.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[target].classList.add('active');
    headerSubtitle.textContent = tabNames[target];
    if (target === 'watchlist') renderWatchlist();
    if (target === 'profile') renderProfile();
    // Hide FAB and header actions on non-discover tabs
    document.getElementById('fabContainer').style.display = target === 'discover' ? 'block' : 'none';
    document.getElementById('headerActions').style.display = target === 'discover' ? 'flex' : 'none';
  });
});

// ============================================================
// CARD RENDERING
// ============================================================
const cardContainer = document.getElementById('cardContainer');
const endScreen = document.getElementById('endScreen');

function renderCard(index, animate = false) {
  // Check for pending recommendation card first
  if (state.pendingRecommendation) {
    renderRecommendationCard(state.pendingRecommendation, index, animate);
    return;
  }

  // Apply filters to find the actual movie to show
  const filteredIndex = (typeof getNextFilteredIndex === 'function') ? getNextFilteredIndex(index) : index;
  // Update currentIndex to the filtered position
  if (filteredIndex !== index) state.currentIndex = filteredIndex;

  if (filteredIndex >= MOVIES.length) {
    cardContainer.innerHTML = '';
    endScreen.classList.add('active');
    document.querySelector('.progress-bar').style.display = 'none';
    document.getElementById('fabContainer').style.display = 'none';
    return;
  }

  endScreen.classList.remove('active');
  document.querySelector('.progress-bar').style.display = 'flex';
  document.getElementById('fabContainer').style.display = 'block';

  // Sync mood pills
  document.querySelectorAll('.mood-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.mood === (state.activeMood || ''));
  });

  const movie = MOVIES[filteredIndex];
  const isSponsored = movie.sponsored === true;

  const streamingRow = (movie.streaming || []).map(s =>
    `<span class="stream-badge" style="background:${STREAMING_COLORS[s] || '#555'}">${s}</span>`
  ).join('');

  // Use poster image if available
  const posterHTML = movie.poster
    ? `<img class="card-poster-img" src="${movie.poster}" alt="${movie.title}" draggable="false" referrerpolicy="no-referrer">`
    : `<div class="card-poster-placeholder" style="background:linear-gradient(135deg, #333, #555)">${movie.title.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')}</div>`;

  cardContainer.innerHTML = `
    <div class="movie-card ${isSponsored ? 'sponsored' : ''} ${animate ? 'entering' : ''}" id="activeCard">
      ${isSponsored ? '<div class="sponsored-badge">SPONSORED</div>' : ''}
      <div class="card-poster-wrapper">
        ${posterHTML}
      </div>
      <div class="card-streaming-row">${streamingRow}</div>
      <div class="card-info" id="cardInfoTap">
        <span class="card-title">${movie.title}</span><span class="card-year-inline">${movie.year}</span>
        <div class="card-synopsis-preview">${movie.synopsis}</div>
        <div class="card-tap-hint">
          <span class="tap-arrow">&#9650;</span>
          <span>Tap for details</span>
        </div>
      </div>
      <div class="swipe-overlay like" id="overlayLike">SAVE</div>
      <div class="swipe-overlay nope" id="overlayNope">NOPE</div>
    </div>
  `;

  // Update progress
  const total = MOVIES.length;
  document.getElementById('progressText').textContent = `${filteredIndex + 1} of ${total}`;
  document.getElementById('progressFill').style.width = `${((filteredIndex + 1) / total) * 100}%`;

  // Attach gesture
  setupSwipeGesture(document.getElementById('activeCard'));

  // Tap info area to open detail panel
  const infoArea = document.getElementById('cardInfoTap');
  if (infoArea) {
    infoArea.addEventListener('click', (e) => {
      e.stopPropagation();
      openDetailPanel(movie);
    });
  }
}

function adjustColor(hex, amount) {
  let col = hex.replace('#', '');
  if (col.length === 3) col = col.split('').map(c => c + c).join('');
  const num = parseInt(col, 16);
  let r = Math.min(255, ((num >> 16) & 255) + amount);
  let g = Math.min(255, ((num >> 8) & 255) + amount);
  let b = Math.min(255, (num & 255) + amount);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// ============================================================
// SWIPE GESTURE ENGINE
// ============================================================
const SWIPE_THRESHOLD = 100;
const ROTATION_FACTOR = 0.08;

function setupSwipeGesture(card) {
  if (!card) return;
  let startX = 0, startY = 0, currentX = 0, currentY = 0;
  let isDragging = false;
  const overlayLike = card.querySelector('#overlayLike');
  const overlayNope = card.querySelector('#overlayNope');

  function onStart(x, y) {
    isDragging = true;
    state.isDragging = true;
    startX = x;
    startY = y;
    card.style.transition = 'none';
    card.classList.remove('entering');
  }

  function onMove(x, y) {
    if (!isDragging) return;
    currentX = x - startX;
    currentY = (y - startY) * 0.3;
    const rotation = currentX * ROTATION_FACTOR;
    card.style.transform = `translateX(${currentX}px) translateY(${currentY}px) rotate(${rotation}deg)`;

    // Overlay opacity
    const progress = Math.min(Math.abs(currentX) / SWIPE_THRESHOLD, 1);
    if (currentX > 0) {
      overlayLike.style.opacity = progress;
      overlayNope.style.opacity = 0;
    } else {
      overlayNope.style.opacity = progress;
      overlayLike.style.opacity = 0;
    }
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    state.isDragging = false;

    if (Math.abs(currentX) > SWIPE_THRESHOLD) {
      // Swipe complete — fly off
      const direction = currentX > 0 ? 1 : -1;
      const flyX = direction * (window.innerWidth + 200);
      const flyRotation = direction * 30;
      card.classList.add('animating');
      card.style.transform = `translateX(${flyX}px) translateY(${currentY}px) rotate(${flyRotation}deg)`;
      card.style.opacity = '0';

      // Capture for rewind
      const swipedMovie = MOVIES[state.currentIndex];
      const prevIndex = state.currentIndex;
      const prevSwipedCount = state.swipedCount;

      if (direction > 0) {
        addToWatchlist(swipedMovie);
        state.rightSwipeCount = (state.rightSwipeCount || 0) + 1;
      }

      state.lastSwiped = { movie: swipedMovie, direction: direction > 0 ? 'right' : 'left', previousIndex: prevIndex, previousSwipedCount: prevSwipedCount };
      state.swipedCount++;
      state.currentIndex++;
      saveState();

      setTimeout(() => { renderCard(state.currentIndex, true); updateRewindBtn(); checkRecommendation(); }, 350);
    } else {
      // Snap back
      card.classList.add('animating');
      card.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
      overlayLike.style.opacity = 0;
      overlayNope.style.opacity = 0;
    }
    currentX = 0;
    currentY = 0;
  }

  // Ignore swipe on interactive elements
  function isInteractive(el) {
    return el.closest('.card-info') || el.closest('.fab-container');
  }

  // Mouse events
  card.addEventListener('mousedown', e => {
    if (isInteractive(e.target)) return;
    e.preventDefault();
    onStart(e.clientX, e.clientY);
  });
  document.addEventListener('mousemove', e => { if (isDragging) { e.preventDefault(); onMove(e.clientX, e.clientY); }});
  document.addEventListener('mouseup', () => { if (isDragging) onEnd(); });

  // Touch events
  card.addEventListener('touchstart', e => {
    if (isInteractive(e.target)) return;
    const t = e.touches[0]; onStart(t.clientX, t.clientY);
  }, { passive: true });
  card.addEventListener('touchmove', e => { const t = e.touches[0]; onMove(t.clientX, t.clientY); }, { passive: true });
  card.addEventListener('touchend', () => onEnd());
}

// ============================================================
// PROGRAMMATIC SWIPE (used by FAB or other triggers)
// ============================================================
function swipeCardProgrammatic(direction) {
  const card = document.getElementById('activeCard');
  if (!card || state.isDragging) return;

  const overlay = direction > 0 ? card.querySelector('#overlayLike') : card.querySelector('#overlayNope');
  if (overlay) overlay.style.opacity = 1;

  card.classList.add('animating');
  card.style.transform = `translateX(${direction * 500}px) translateY(-30px) rotate(${direction * 25}deg)`;
  card.style.opacity = '0';

  const swipedMovie = MOVIES[state.currentIndex];
  const prevIndex = state.currentIndex;
  const prevSwipedCount = state.swipedCount;

  if (direction > 0) {
    addToWatchlist(swipedMovie);
    state.rightSwipeCount = (state.rightSwipeCount || 0) + 1;
  }

  state.lastSwiped = { movie: swipedMovie, direction: direction > 0 ? 'right' : 'left', previousIndex: prevIndex, previousSwipedCount: prevSwipedCount };
  state.swipedCount++;
  state.currentIndex++;
  saveState();

  setTimeout(() => { renderCard(state.currentIndex, true); updateRewindBtn(); checkRecommendation(); }, 350);
}

// ============================================================
// WATCHLIST MANAGEMENT
// ============================================================
function addToWatchlist(movie) {
  if (state.watchlist.find(w => w.movie.id === movie.id)) return;
  if (state.watched.find(w => w.movie.id === movie.id)) return;
  state.watchlist.push({ movie, addedAt: Date.now() });
  saveState();
  showToast('Added to watchlist!', 'success');
}

function removeFromWatchlist(movieId) {
  state.watchlist = state.watchlist.filter(w => w.movie.id !== movieId);
  saveState();
  renderWatchlist();
}

function removeFromWatched(movieId) {
  state.watched = state.watched.filter(w => w.movie.id !== movieId);
  saveState();
  renderWatchlist();
}

function markAsWatched(movie, stars, review) {
  state.watchlist = state.watchlist.filter(w => w.movie.id !== movie.id);
  if (!state.watched.find(w => w.movie.id === movie.id)) {
    state.watched.push({ movie, stars, review, watchedAt: Date.now() });
  }
  saveState();
  const starLabel = stars % 1 === 0 ? stars + '.0' : stars;
  showToast(`Rated ${starLabel} / 5 stars!`, 'success');
  fireConfetti();
}

// ============================================================
// WATCHLIST RENDERING
// ============================================================
const wlTabs = document.querySelectorAll('.wl-tab');
wlTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    state.activeWlTab = tab.dataset.wltab;
    wlTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderWatchlist();
  });
});

// Search input wiring
document.getElementById('wlSearchInput').addEventListener('input', e => {
  state.wlSearch = e.target.value;
  const clear = document.getElementById('wlSearchClear');
  if (clear) clear.classList.toggle('visible', state.wlSearch.length > 0);
  renderWatchlist();
});
document.getElementById('wlSearchClear').addEventListener('click', () => {
  state.wlSearch = '';
  renderWatchlist();
});

function renderWatchlist() {
  const container = document.getElementById('wlContent');
  document.getElementById('towatchCount').textContent = `(${state.watchlist.length})`;
  document.getElementById('watchedCount').textContent = `(${state.watched.length})`;

  // Sync search input
  const searchInput = document.getElementById('wlSearchInput');
  const searchClear = document.getElementById('wlSearchClear');
  if (searchInput) {
    searchInput.value = state.wlSearch;
    if (searchClear) searchClear.classList.toggle('visible', state.wlSearch.length > 0);
  }

  const query = state.wlSearch.toLowerCase().trim();
  let items = state.activeWlTab === 'towatch' ? state.watchlist : state.watched;

  // Apply search filter
  if (query) {
    items = items.filter(item => item.movie.title.toLowerCase().includes(query));
  }

  if (items.length === 0) {
    const rawItems = state.activeWlTab === 'towatch' ? state.watchlist : state.watched;
    let emptyMsg;
    if (rawItems.length === 0) {
      emptyMsg = state.activeWlTab === 'towatch'
        ? { icon: '&#128253;', title: 'No movies saved yet', sub: 'Swipe right on movies you want to watch and they\'ll appear here.' }
        : { icon: '&#127871;', title: 'No movies watched yet', sub: 'Mark movies as watched and rate them to track your viewing history.' };
    } else {
      emptyMsg = { icon: '&#128269;', title: 'No results', sub: `No movies matching "${state.wlSearch}"` };
    }
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${emptyMsg.icon}</div>
        <div class="empty-title">${emptyMsg.title}</div>
        <div class="empty-subtitle">${emptyMsg.sub}</div>
      </div>
    `;
    return;
  }

  // To Watch: Genre-grouped horizontal rows
  if (state.activeWlTab === 'towatch') {
    if (!state.expandedGenres) state.expandedGenres = {};

    const genreGroups = {};
    items.forEach(item => {
      const genre = item.movie.genres[0] || 'Other';
      if (!genreGroups[genre]) genreGroups[genre] = [];
      genreGroups[genre].push(item);
    });

    const sortedGenres = Object.keys(genreGroups).sort();

    container.innerHTML = sortedGenres.map(genre => {
      const movies = genreGroups[genre];
      const isExpanded = state.expandedGenres[genre] === true;

      const movieCards = movies.map(item => {
        const m = item.movie;
        const posterHTML = m.poster
          ? `<img class="wl-genre-poster-img" src="${m.poster}" alt="${m.title}" referrerpolicy="no-referrer">`
          : `<div class="wl-genre-poster" style="background:linear-gradient(135deg, #333, #555)">${m.title.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')}</div>`;
        return `
          <div class="wl-genre-card">
            <div class="wl-genre-card-remove" onclick="removeFromWatchlist(${m.id})">&#10005;</div>
            ${posterHTML}
            <div class="wl-genre-card-info">
              <div class="wl-genre-card-title">${m.title}</div>
              <div class="wl-genre-card-year">${m.year}</div>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="wl-genre-section">
          <div class="wl-genre-header">
            ${genre} <span class="wl-genre-count">(${movies.length})</span>
            <span class="wl-genre-see-all" data-genre="${genre}">${isExpanded ? 'See less' : 'See all'}</span>
          </div>
          <div class="${isExpanded ? 'wl-genre-grid' : 'wl-genre-row'}">
            ${movieCards}
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.wl-genre-see-all').forEach(btn => {
      btn.addEventListener('click', () => {
        const genre = btn.dataset.genre;
        state.expandedGenres[genre] = !state.expandedGenres[genre];
        saveState();
        renderWatchlist();
      });
    });
    return;
  }

  // Watched tab: Sort pills + sorted list
  const sortOptions = [
    { key: 'date', label: '🕐 Recent' },
    { key: 'rating', label: '⭐ Rating' },
    { key: 'title', label: '🔤 Title' },
    { key: 'year', label: '📅 Year' },
  ];

  // Sort items
  let sortedItems = [...items];
  if (state.watchedSort === 'date') sortedItems.sort((a, b) => b.watchedAt - a.watchedAt);
  else if (state.watchedSort === 'rating') sortedItems.sort((a, b) => b.stars - a.stars);
  else if (state.watchedSort === 'title') sortedItems.sort((a, b) => a.movie.title.localeCompare(b.movie.title));
  else if (state.watchedSort === 'year') sortedItems.sort((a, b) => b.movie.year - a.movie.year);

  const sortPills = sortOptions.map(o =>
    `<div class="sort-pill ${state.watchedSort === o.key ? 'active' : ''}" data-sort="${o.key}">${o.label}</div>`
  ).join('');

  container.innerHTML = `
    <div class="sort-row">${sortPills}</div>
    <div class="wl-list">${sortedItems.map(item => {
      const m = item.movie;
      const posterHTML = m.poster
        ? `<img class="wl-poster-img" src="${m.poster}" alt="${m.title}" referrerpolicy="no-referrer">`
        : `<div class="wl-poster-placeholder" style="background:linear-gradient(135deg, #333, #555)">${m.title.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')}</div>`;
      let stars = '';
      if (item.stars) {
        const full = Math.floor(item.stars);
        const hasHalf = item.stars % 1 !== 0;
        const empty = 5 - full - (hasHalf ? 1 : 0);
        stars = '&#9733;'.repeat(full) + (hasHalf ? '&#11242;' : '') + '&#9734;'.repeat(empty);
      }
      const meta = `${m.year} &middot; ${m.genres[0]}`;
      return `
        <div class="wl-item">
          ${posterHTML}
          <div class="wl-info">
            <div class="wl-title">${m.title}</div>
            <div class="wl-meta">${meta}</div>
            ${stars ? `<div class="wl-stars">${stars}</div>` : ''}
          </div>
          <div class="wl-remove" onclick="removeFromWatched(${m.id})">&#10005;</div>
        </div>
      `;
    }).join('')}</div>
  `;

  container.querySelectorAll('.sort-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.watchedSort = pill.dataset.sort;
      saveState();
      renderWatchlist();
    });
  });
}

// ============================================================
// DETAIL PANEL (slide-up full info)
// ============================================================
const detailOverlay = document.getElementById('detailOverlay');
const detailPanel = document.getElementById('detailPanel');
const detailClose = document.getElementById('detailClose');
const detailHeaderTitle = document.getElementById('detailHeaderTitle');
const detailBody = document.getElementById('detailBody');

function openDetailPanel(movie) {
  const initials = movie.title.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('');

  // Star display for movie rating
  const fullStars = Math.floor(movie.rating / 2);
  const halfStar = (movie.rating / 2) - fullStars >= 0.5;
  let starsHTML = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) starsHTML += '<span style="color:var(--gold)">&#9733;</span>';
    else if (i === fullStars && halfStar) starsHTML += '<span style="color:var(--gold)">&#9733;</span>';
    else starsHTML += '<span style="color:rgba(255,255,255,0.12)">&#9733;</span>';
  }

  // Genre chips
  const genreChips = movie.genres.map(g => `<span class="detail-genre-chip">${g}</span>`).join('');

  // Streaming badges
  const streamBadges = movie.streaming.map(s =>
    `<span class="stream-badge" style="background:${STREAMING_COLORS[s] || '#555'};font-size:9px;font-weight:700;padding:4px 8px;border-radius:5px;color:#fff;letter-spacing:0.3px">${s}</span>`
  ).join('');

  // Cast grid
  const castHTML = (movie.cast || []).map(c => {
    const castInitial = c.name.split(' ').map(n => n[0]).join('');
    return `
      <div class="cast-card">
        <div class="cast-avatar">${castInitial}</div>
        <div class="cast-info">
          <div class="cast-name">${c.name}</div>
          <div class="cast-role">${c.role}</div>
        </div>
      </div>`;
  }).join('');

  const detailPosterHTML = movie.poster
    ? `<img class="detail-mini-poster-img" src="${movie.poster}" alt="${movie.title}" referrerpolicy="no-referrer">`
    : `<div class="detail-mini-poster" style="background:linear-gradient(135deg, #333, #555)">${initials}</div>`;

  detailHeaderTitle.textContent = movie.title;
  detailBody.innerHTML = `
    <div class="detail-poster-row">
      ${detailPosterHTML}
      <div class="detail-meta">
        <div class="detail-title">${movie.title}</div>
        <div class="detail-year-rating">
          <span>${movie.year}</span>
          <span>&middot;</span>
          <span class="detail-star">${starsHTML} ${movie.rating}/10</span>
        </div>
        ${movie.runtime ? `<div style="font-size:13px;color:var(--text-muted)">${movie.runtime}</div>` : ''}
        <div class="detail-genres" style="margin-top:6px">${genreChips}</div>
      </div>
    </div>

    <div class="detail-streaming" style="margin-bottom:8px">${streamBadges}</div>

    <div class="detail-section-label">Synopsis</div>
    <div class="detail-synopsis">${movie.synopsis}</div>

    ${castHTML ? `
      <div class="detail-section-label">Cast</div>
      <div class="detail-cast-grid">${castHTML}</div>
    ` : ''}

    <div class="detail-extra-row">
      <div class="detail-extra-item">
        <div class="detail-extra-value">${movie.rating}</div>
        <div class="detail-extra-label">IMDB</div>
      </div>
      <div class="detail-extra-item">
        <div class="detail-extra-value">${movie.runtime || 'N/A'}</div>
        <div class="detail-extra-label">Runtime</div>
      </div>
      <div class="detail-extra-item">
        <div class="detail-extra-value">${movie.genres[0] || '-'}</div>
        <div class="detail-extra-label">Genre</div>
      </div>
    </div>
  `;

  detailOverlay.classList.add('open');
  detailPanel.classList.add('open');
}

function closeDetailPanel() {
  detailOverlay.classList.remove('open');
  detailPanel.classList.remove('open');
}

detailOverlay.addEventListener('click', closeDetailPanel);
detailClose.addEventListener('click', closeDetailPanel);

// ============================================================
// FAB
// ============================================================
const fabMain = document.getElementById('fabMain');
const fabMenu = document.getElementById('fabMenu');

fabMain.addEventListener('click', () => {
  state.fabOpen = !state.fabOpen;
  fabMain.classList.toggle('open', state.fabOpen);
  fabMenu.classList.toggle('open', state.fabOpen);
});

document.getElementById('fabWatched').addEventListener('click', () => {
  closeFab();
  if (state.currentIndex < MOVIES.length) {
    openRatingSheet(MOVIES[state.currentIndex]);
  }
});

document.getElementById('fabShare').addEventListener('click', () => {
  closeFab();
  if (state.currentIndex < MOVIES.length) {
    const m = MOVIES[state.currentIndex];
    showToast(`Share link for "${m.title}" copied!`, 'info');
  }
});

document.getElementById('fabSave').addEventListener('click', () => {
  closeFab();
  showToast('Saved to current session!', 'success');
});

function closeFab() {
  state.fabOpen = false;
  fabMain.classList.remove('open');
  fabMenu.classList.remove('open');
}

// Close FAB when clicking outside
document.addEventListener('click', (e) => {
  if (state.fabOpen && !e.target.closest('.fab-container')) {
    closeFab();
  }
});

// ============================================================
// RATING BOTTOM SHEET
// ============================================================
const sheetBackdrop = document.getElementById('sheetBackdrop');
const ratingSheet = document.getElementById('ratingSheet');
const starWrappers = document.querySelectorAll('.star-wrapper');

function updateStarDisplay(rating) {
  for (let i = 1; i <= 5; i++) {
    const fill = document.getElementById('sf' + i);
    fill.className = 'star-fill';
    if (rating >= i) {
      fill.classList.add('full');
    } else if (rating >= i - 0.5) {
      fill.classList.add('half');
    }
  }
  const label = document.getElementById('ratingValueLabel');
  if (rating > 0) {
    label.textContent = rating % 1 === 0 ? rating + '.0 / 5' : rating + ' / 5';
  } else {
    label.textContent = '';
  }
}

starWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const starNum = parseInt(wrapper.dataset.star);
    // Left half = half star, right half = full star
    const isHalf = clickX < rect.width / 2;
    state.selectedStars = isHalf ? starNum - 0.5 : starNum;
    updateStarDisplay(state.selectedStars);
  });
});

function openRatingSheet(movie) {
  state.sheetMovie = movie;
  state.selectedStars = 0;

  const sheetPosterHTML = movie.poster
    ? `<img class="sheet-poster-img" src="${movie.poster}" alt="${movie.title}" referrerpolicy="no-referrer">`
    : `<div class="sheet-poster-placeholder" style="background:linear-gradient(135deg, #333, #555)">${movie.title.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')}</div>`;
  document.getElementById('sheetMovieInfo').innerHTML = `
    ${sheetPosterHTML}
    <div>
      <div class="sheet-title">${movie.title}</div>
      <div class="sheet-subtitle">${movie.year} &middot; ${movie.genres.join(', ')}</div>
    </div>
  `;

  updateStarDisplay(0);
  document.getElementById('reviewInput').value = '';

  state.sheetOpen = true;
  sheetBackdrop.classList.add('open');
  ratingSheet.classList.add('open');
}

function closeRatingSheet() {
  state.sheetOpen = false;
  sheetBackdrop.classList.remove('open');
  ratingSheet.classList.remove('open');
}

sheetBackdrop.addEventListener('click', closeRatingSheet);

document.getElementById('sheetSubmit').addEventListener('click', () => {
  if (state.selectedStars === 0) {
    showToast('Tap a star to rate first', 'info');
    return;
  }
  const review = document.getElementById('reviewInput').value.trim();
  markAsWatched(state.sheetMovie, state.selectedStars, review);
  closeRatingSheet();

  // Also advance the card if rating current card
  if (MOVIES[state.currentIndex] && MOVIES[state.currentIndex].id === state.sheetMovie.id) {
    state.swipedCount++;
    state.currentIndex++;
    saveState();
    setTimeout(() => renderCard(state.currentIndex, true), 200);
  }
});

// ============================================================
// PROFILE HELPERS
// ============================================================
function parseRuntimeMinutes(str) {
  if (!str) return 0;
  const match = String(str).match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}
function formatWatchTime(totalMins) {
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

// ============================================================
// PROFILE
// ============================================================
function renderProfile() {
  document.getElementById('statSwiped').textContent = state.swipedCount;
  document.getElementById('statSaved').textContent = state.watchlist.length + state.watched.length;

  if (state.watched.length > 0) {
    const avg = state.watched.reduce((sum, w) => sum + w.stars, 0) / state.watched.length;
    document.getElementById('statRating').textContent = avg.toFixed(1);
  } else {
    document.getElementById('statRating').textContent = '-';
  }

  // Watch time & films logged
  const totalMins = state.watched.reduce((sum, w) => sum + parseRuntimeMinutes(w.movie.runtime), 0);
  document.getElementById('statWatchTime').textContent = totalMins > 0 ? formatWatchTime(totalMins) : '0h 0m';
  document.getElementById('statMoviesWatched').textContent = state.watched.length;

  // Top 3 Movies
  const topMoviesList = document.getElementById('topMoviesList');
  if (state.watched.length === 0) {
    topMoviesList.innerHTML = '<div class="top-movies-empty">Rate some movies to see your top picks!</div>';
  } else {
    const sorted = [...state.watched].sort((a, b) => b.stars - a.stars).slice(0, 3);
    const rankClasses = ['gold', 'silver', 'bronze'];
    topMoviesList.innerHTML = sorted.map((w, i) => {
      const movie = w.movie;
      const starsDisplay = w.stars % 1 === 0 ? w.stars + '.0' : w.stars;
      const topPosterHTML = movie.poster
        ? `<img class="top-movie-poster-img" src="${movie.poster}" alt="${movie.title}" referrerpolicy="no-referrer">`
        : `<div class="top-movie-poster" style="background:linear-gradient(135deg, #333, #555)">${movie.title.split(' ').filter(word => word.length > 2).slice(0, 2).map(word => word[0]).join('')}</div>`;
      return `
        <div class="top-movie-item">
          <div class="top-movie-poster-wrap">
            <div class="top-movie-rank ${rankClasses[i]}">${i + 1}</div>
            ${topPosterHTML}
          </div>
          <div class="top-movie-info">
            <div class="top-movie-title">${movie.title}</div>
            <div class="top-movie-stars">&#9733; ${starsDisplay}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Genre Breakdown Chart
  const genreChart = document.getElementById('genreChart');
  const allWatched = state.watched;
  if (allWatched.length === 0) {
    genreChart.innerHTML = '<div class="genre-chart-empty">Watch some movies to see your taste profile!</div>';
  } else {
    const genreCounts = {};
    allWatched.forEach(w => {
      (w.movie.genres || []).forEach(g => { genreCounts[g] = (genreCounts[g] || 0) + 1; });
    });
    const sorted = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const max = sorted[0][1];
    genreChart.innerHTML = sorted.map(([genre, count]) => {
      const pct = Math.round((count / max) * 100);
      return `<div class="genre-bar-row">
        <div class="genre-bar-label">${genre}</div>
        <div class="genre-bar-track"><div class="genre-bar-fill" style="width:${pct}%"></div></div>
        <div class="genre-bar-pct">${count}</div>
      </div>`;
    }).join('');
  }

  // Streaming grid
  const grid = document.getElementById('streamingGrid');
  grid.innerHTML = STREAMING_SERVICES.map(s => `
    <div class="stream-toggle ${state.streamingServices.includes(s.name) ? 'active' : ''}" data-service="${s.name}">
      <div class="stream-dot" style="background:${s.color}"></div>
      <span class="stream-name">${s.name}</span>
      <span class="stream-check">&#10003;</span>
    </div>
  `).join('');

  grid.querySelectorAll('.stream-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const service = toggle.dataset.service;
      if (state.streamingServices.includes(service)) {
        state.streamingServices = state.streamingServices.filter(s => s !== service);
      } else {
        state.streamingServices.push(service);
      }
      toggle.classList.toggle('active');
      saveState();
    });
  });
}

// ============================================================
// TOAST
// ============================================================
const toastEl = document.getElementById('toast');
let toastTimeout;

function showToast(message, type = 'info') {
  clearTimeout(toastTimeout);
  toastEl.textContent = message;
  toastEl.className = `toast ${type} show`;
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2200);
}

// ============================================================
// CONFETTI
// ============================================================
function fireConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#e94560', '#ff6b8a', '#ffd700', '#00c853', '#6c63ff', '#00a8e1'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = '-10px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 8 + 6) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animation = `confettiFall ${Math.random() * 1.5 + 1}s ease-out ${Math.random() * 0.3}s forwards`;
    container.appendChild(piece);
  }
  setTimeout(() => { container.innerHTML = ''; }, 3000);
}

// ============================================================
// RESTART
// ============================================================
document.getElementById('btnRestart').addEventListener('click', () => {
  state.currentIndex = 0;
  state.swipedCount = 0;
  saveState();
  renderCard(0, true);
});

// ============================================================
// PARTY TAB INTERACTIVITY (demo toasts)
// ============================================================
document.getElementById('partyCreate').addEventListener('click', () => {
  showToast('Party Mode coming soon!', 'info');
});
document.getElementById('partyJoin').addEventListener('click', () => {
  showToast('Party Mode coming soon!', 'info');
});

// ============================================================
// RECOMMENDATIONS
// ============================================================
function getRecommendedMovie() {
  if (state.watched.length === 0) return null;
  // Find highest-rated watched movie
  const topWatched = [...state.watched].sort((a, b) => b.stars - a.stars)[0];
  const topMovie = topWatched.movie;
  const primaryGenre = (topMovie.genres || [])[0];
  if (!primaryGenre) return null;
  // Find unseen movies in same genre
  const seenIds = new Set([
    ...state.watched.map(w => w.movie.id),
    ...state.watchlist.map(w => w.movie.id),
  ]);
  const candidates = MOVIES.filter(m =>
    !seenIds.has(m.id) &&
    m.id !== (state.currentIndex < MOVIES.length ? MOVIES[state.currentIndex].id : -1) &&
    (m.genres || []).includes(primaryGenre)
  );
  if (candidates.length === 0) return null;
  // Sort by rating desc, pick top
  candidates.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  return { movie: candidates[0], because: topMovie.title };
}

function checkRecommendation() {
  if (!state.pendingRecommendation && state.rightSwipeCount > 0 && state.rightSwipeCount % 5 === 0) {
    const rec = getRecommendedMovie();
    if (rec) {
      state.pendingRecommendation = rec;
    }
  }
}

function renderRecommendationCard(rec, resumeIndex, animate = false) {
  const movie = rec.movie;
  endScreen.classList.remove('active');
  document.querySelector('.progress-bar').style.display = 'flex';
  document.getElementById('fabContainer').style.display = 'block';

  const streamingRow = (movie.streaming || []).map(s =>
    `<span class="stream-badge" style="background:${STREAMING_COLORS[s] || '#555'}">${s}</span>`
  ).join('');

  const posterHTML = movie.poster
    ? `<img class="card-poster-img" src="${movie.poster}" alt="${movie.title}" draggable="false" referrerpolicy="no-referrer">`
    : `<div class="card-poster-placeholder" style="background:linear-gradient(135deg, #6c63ff, #a09cff)">${movie.title.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('')}</div>`;

  cardContainer.innerHTML = `
    <div class="movie-card recommended ${animate ? 'entering' : ''}" id="activeCard">
      <div class="recommended-badge">✨ Because You Liked</div>
      <div class="card-poster-wrapper">
        ${posterHTML}
      </div>
      <div class="card-streaming-row">${streamingRow}</div>
      <div class="card-info" id="cardInfoTap">
        <span class="card-title">${movie.title}</span><span class="card-year-inline">${movie.year}</span>
        <span class="rec-reason">Because you liked "${rec.because}"</span>
        <div class="card-synopsis-preview">${movie.synopsis}</div>
        <div class="card-tap-hint">
          <span class="tap-arrow">&#9650;</span>
          <span>Tap for details</span>
        </div>
      </div>
      <div class="swipe-overlay like" id="overlayLike">SAVE</div>
      <div class="swipe-overlay nope" id="overlayNope">NOPE</div>
    </div>
  `;

  document.getElementById('progressText').textContent = '⭐ Recommended for you';
  document.getElementById('progressFill').style.width = `${((resumeIndex + 1) / MOVIES.length) * 100}%`;

  // Custom gesture for recommendation: swiping does NOT advance state.currentIndex
  const card = document.getElementById('activeCard');
  setupSwipeGestureRec(card, movie, resumeIndex);

  const infoArea = document.getElementById('cardInfoTap');
  if (infoArea) {
    infoArea.addEventListener('click', (e) => {
      e.stopPropagation();
      openDetailPanel(movie);
    });
  }
}

function setupSwipeGestureRec(card, movie, resumeIndex) {
  if (!card) return;
  let startX = 0, startY = 0, currentX = 0, currentY = 0;
  let isDragging = false;
  const overlayLike = card.querySelector('#overlayLike');
  const overlayNope = card.querySelector('#overlayNope');

  function onStart(x, y) {
    isDragging = true;
    state.isDragging = true;
    startX = x; startY = y;
    card.style.transition = 'none';
    card.classList.remove('entering');
  }
  function onMove(x, y) {
    if (!isDragging) return;
    currentX = x - startX;
    currentY = (y - startY) * 0.3;
    const rotation = currentX * 0.08;
    card.style.transform = `translateX(${currentX}px) translateY(${currentY}px) rotate(${rotation}deg)`;
    const progress = Math.min(Math.abs(currentX) / 100, 1);
    if (currentX > 0) { overlayLike.style.opacity = progress; overlayNope.style.opacity = 0; }
    else { overlayNope.style.opacity = progress; overlayLike.style.opacity = 0; }
  }
  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    state.isDragging = false;
    if (Math.abs(currentX) > 100) {
      const direction = currentX > 0 ? 1 : -1;
      const flyX = direction * (window.innerWidth + 200);
      card.classList.add('animating');
      card.style.transform = `translateX(${flyX}px) translateY(${currentY}px) rotate(${direction * 30}deg)`;
      card.style.opacity = '0';
      if (direction > 0) addToWatchlist(movie);
      // Clear recommendation, resume at same index
      state.pendingRecommendation = null;
      saveState();
      setTimeout(() => { renderCard(resumeIndex, true); updateRewindBtn(); }, 350);
    } else {
      card.classList.add('animating');
      card.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
      overlayLike.style.opacity = 0;
      overlayNope.style.opacity = 0;
    }
    currentX = 0; currentY = 0;
  }
  function isInteractive(el) { return el.closest('.card-info') || el.closest('.fab-container'); }
  card.addEventListener('mousedown', e => { if (isInteractive(e.target)) return; e.preventDefault(); onStart(e.clientX, e.clientY); });
  document.addEventListener('mousemove', e => { if (isDragging) { e.preventDefault(); onMove(e.clientX, e.clientY); } });
  document.addEventListener('mouseup', () => { if (isDragging) onEnd(); });
  card.addEventListener('touchstart', e => { if (isInteractive(e.target)) return; const t = e.touches[0]; onStart(t.clientX, t.clientY); }, { passive: true });
  card.addEventListener('touchmove', e => { const t = e.touches[0]; onMove(t.clientX, t.clientY); }, { passive: true });
  card.addEventListener('touchend', () => onEnd());
}

// ============================================================
// FILTER HELPERS
// ============================================================
function moviePassesFilters(movie) {
  // Mood filter
  if (state.activeMood) {
    if (!movie.genres || !movie.genres.some(g => g === state.activeMood)) return false;
  }
  // Genre filter
  if (state.filters.genres && state.filters.genres.length > 0) {
    if (!movie.genres || !state.filters.genres.some(g => movie.genres.includes(g))) return false;
  }
  // Streaming filter
  if (state.filters.streaming && state.filters.streaming.length > 0) {
    if (!movie.streaming || !state.filters.streaming.some(s => movie.streaming.includes(s))) return false;
  }
  // Year filter
  if (state.filters.yearMin && movie.year < state.filters.yearMin) return false;
  if (state.filters.yearMax && movie.year > state.filters.yearMax) return false;
  return true;
}

function getNextFilteredIndex(fromIndex) {
  let idx = fromIndex;
  while (idx < MOVIES.length) {
    if (moviePassesFilters(MOVIES[idx])) return idx;
    idx++;
  }
  return MOVIES.length; // end of list
}

function getActiveFilterCount() {
  let count = 0;
  if (state.filters.genres && state.filters.genres.length > 0) count += state.filters.genres.length;
  if (state.filters.streaming && state.filters.streaming.length > 0) count += state.filters.streaming.length;
  if (state.filters.yearMin) count++;
  if (state.filters.yearMax) count++;
  return count;
}

function updateFilterBadge() {
  const badge = document.getElementById('filterBadge');
  const btn = document.getElementById('filterBtn');
  if (!badge || !btn) return;
  const count = getActiveFilterCount();
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
  btn.classList.toggle('active', count > 0);
}

function initFilterPanel() {
  // Populate genre chips
  const allGenres = [...new Set(MOVIES.flatMap(m => m.genres || []))].sort();
  const genreChips = document.getElementById('filterGenreChips');
  if (genreChips) {
    genreChips.innerHTML = allGenres.map(g =>
      `<div class="filter-chip ${state.filters.genres.includes(g) ? 'active' : ''}" data-genre="${g}">${g}</div>`
    ).join('');
    genreChips.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => chip.classList.toggle('active'));
    });
  }

  // Populate streaming chips
  const allStreaming = [...new Set(MOVIES.flatMap(m => m.streaming || []))].sort();
  const streamChips = document.getElementById('filterStreamChips');
  if (streamChips) {
    streamChips.innerHTML = allStreaming.map(s =>
      `<div class="filter-chip ${state.filters.streaming.includes(s) ? 'active' : ''}" data-stream="${s}">${s}</div>`
    ).join('');
    streamChips.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => chip.classList.toggle('active'));
    });
  }

  // Year inputs
  const yearMin = document.getElementById('filterYearMin');
  const yearMax = document.getElementById('filterYearMax');
  if (yearMin) yearMin.value = state.filters.yearMin || '';
  if (yearMax) yearMax.value = state.filters.yearMax || '';

  // Clear all
  document.getElementById('filterClearBtn').addEventListener('click', () => {
    document.querySelectorAll('#filterGenreChips .filter-chip, #filterStreamChips .filter-chip').forEach(c => c.classList.remove('active'));
    if (yearMin) yearMin.value = '';
    if (yearMax) yearMax.value = '';
  });

  // Apply
  document.getElementById('filterApplyBtn').addEventListener('click', () => {
    state.filters.genres = [...document.querySelectorAll('#filterGenreChips .filter-chip.active')].map(c => c.dataset.genre);
    state.filters.streaming = [...document.querySelectorAll('#filterStreamChips .filter-chip.active')].map(c => c.dataset.stream);
    state.filters.yearMin = yearMin && yearMin.value ? parseInt(yearMin.value) : null;
    state.filters.yearMax = yearMax && yearMax.value ? parseInt(yearMax.value) : null;
    closeFilterPanel();
    saveState();
    updateFilterBadge();
    const nextIdx = getNextFilteredIndex(state.currentIndex);
    renderCard(nextIdx);
  });
}

function openFilterPanel() {
  initFilterPanel();
  document.getElementById('filterPanel').classList.add('open');
  document.getElementById('filterBtn').classList.add('active');
}

function closeFilterPanel() {
  document.getElementById('filterPanel').classList.remove('open');
}

// Filter button click
document.getElementById('filterBtn').addEventListener('click', () => {
  const panel = document.getElementById('filterPanel');
  if (panel.classList.contains('open')) {
    closeFilterPanel();
  } else {
    openFilterPanel();
  }
});

// Mood pills
document.getElementById('moodRow').addEventListener('click', e => {
  const pill = e.target.closest('.mood-pill');
  if (!pill) return;
  document.querySelectorAll('.mood-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  state.activeMood = pill.dataset.mood;
  saveState();
  const nextIdx = getNextFilteredIndex(state.currentIndex);
  renderCard(nextIdx);
});

// ============================================================
// REWIND BUTTON
// ============================================================
function updateRewindBtn() {
  const btn = document.getElementById('rewindBtn');
  if (!btn) return;
  if (state.lastSwiped) {
    btn.classList.remove('disabled');
  } else {
    btn.classList.add('disabled');
  }
}

function doRewind() {
  if (!state.lastSwiped) return;
  const { movie, direction, previousIndex, previousSwipedCount } = state.lastSwiped;
  // Restore index and swiped count
  state.currentIndex = previousIndex;
  state.swipedCount = previousSwipedCount;
  // If the card was swiped right (added to watchlist), remove it
  if (direction === 'right') {
    state.watchlist = state.watchlist.filter(w => w.movie.id !== movie.id);
  }
  state.lastSwiped = null;
  saveState();
  updateRewindBtn();
  renderCard(state.currentIndex, true);
  showToast('Last swipe undone!', 'info');
}

document.getElementById('rewindBtn').addEventListener('click', doRewind);

// ============================================================
// DARK / LIGHT MODE
// ============================================================
function applyTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  const track = document.getElementById('themeToggleTrack');
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (!track) return;
  if (isDark) {
    track.classList.add('on'); track.classList.remove('off');
    icon.textContent = '🌙';
    label.textContent = 'Dark Mode';
  } else {
    track.classList.remove('on'); track.classList.add('off');
    icon.textContent = '☀️';
    label.textContent = 'Light Mode';
  }
}

document.getElementById('themeToggleItem').addEventListener('click', () => {
  state.isDarkMode = !state.isDarkMode;
  applyTheme(state.isDarkMode);
  saveState();
});

// ============================================================
// INIT
// ============================================================
applyTheme(state.isDarkMode !== false); // default dark
updateRewindBtn();
updateFilterBadge();
// Sync mood pills on load
document.querySelectorAll('.mood-pill').forEach(p => {
  p.classList.toggle('active', p.dataset.mood === (state.activeMood || ''));
});
renderCard(state.currentIndex);
renderProfile();
</script>
</body>
</html>
