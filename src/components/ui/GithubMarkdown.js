'use client';

import 'github-markdown-css';
import { motion } from 'motion/react';

function GithubMarkdown({ html }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.04, duration: 0.5 }}
      className='markdown-body mx-auto! my-4! w-full! rounded-2xl shadow-md'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default GithubMarkdown;
