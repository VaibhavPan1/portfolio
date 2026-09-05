import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { mode, accent, toggleMode, setAccent, accents } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteRef = useRef(null);

  // Close palette dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (paletteRef.current && !paletteRef.current.contains(event.target)) {
        setPaletteOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="theme-controls-wrapper" ref={paletteRef}>
      {/* Light / Dark Mode Toggle */}
      <button
        onClick={toggleMode}
        className="theme-btn"
        title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`}
        aria-label={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`}
      >
        {mode === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
      </button>

      {/* Accent Palette Toggle */}
      <div className="palette-dropdown-anchor">
        <button
          onClick={() => setPaletteOpen(!paletteOpen)}
          className={`theme-btn ${paletteOpen ? 'active' : ''}`}
          title="Customize Accent Color"
          aria-label="Customize Accent Color"
          aria-expanded={paletteOpen}
        >
          <Palette size={17} />
          <span
            className="current-accent-dot"
            style={{
              backgroundColor:
                mode === 'dark'
                  ? accents.find((a) => a.id === accent)?.color
                  : accents.find((a) => a.id === accent)?.lightColor,
            }}
          />
        </button>

        {/* Dropdown Menu */}
        {paletteOpen && (
          <div className="palette-menu" role="menu">
            <div className="palette-menu-title">Accent Color</div>
            <div className="palette-swatches-grid">
              {accents.map((item) => {
                const isSelected = item.id === accent;
                const activeColor = mode === 'dark' ? item.color : item.lightColor;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAccent(item.id);
                      setPaletteOpen(false);
                    }}
                    className={`palette-swatch-btn ${isSelected ? 'selected' : ''}`}
                    title={item.name}
                    aria-label={`Select ${item.name}`}
                  >
                    <span
                      className="palette-swatch-circle"
                      style={{ backgroundColor: activeColor }}
                    />
                    <span className="palette-swatch-label">{item.name}</span>
                    {isSelected && <Check size={13} className="palette-check" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
