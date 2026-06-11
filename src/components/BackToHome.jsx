import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconArrowLeft } from './Icons';

export default function BackToHome() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="back-to-home" id="back-to-home">
        <IconArrowLeft className="icon icon-sm arrow" />
        Back to <strong style={{ marginLeft: '4px' }}>Home</strong>
      </Link>
    </motion.div>
  );
}
