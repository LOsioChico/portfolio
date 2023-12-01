'use client';

import { useState, useEffect } from 'react';
import { ToolTip } from './toolTip';
import { FaCopy } from 'react-icons/fa';

interface CopyEmailButtonProps {
  text: string;
  email: string;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  text,
  email,
}) => {
  const [copied, setCopied] = useState(false);
  const [copyText, setCopyText] = useState(text);
  const locale = window.location.href.split('/').at(-1);

  const copyEmail = () => {
    void navigator.clipboard.writeText(email);
    setCopyText(locale === 'es' ? '¡Copiado!' : 'Copied!');
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopyText(text);
        setCopied(false);
      }, 3000);
    }
  }, [copied, text]);

  return (
    <ToolTip tooltip={copyText}>
      <button
        className='flex rounded-lg bg-indigo-100 px-3.5 py-2.5 text-indigo-500 hover:bg-opacity-80 dark:bg-indigo-500 dark:text-indigo-100 hover:dark:bg-opacity-90'
        onClick={copyEmail}
      >
        <FaCopy className='text-xl' />
      </button>
    </ToolTip>
  );
};
