import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { IconSun, IconMoon } from './Icons';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      id="theme-toggle"
    >
      <motion.span
        className="theme-toggle-icon"
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <IconMoon className="icon icon-sm" /> : <IconSun className="icon icon-sm" />}
      </motion.span>
    </button>
  );
}
