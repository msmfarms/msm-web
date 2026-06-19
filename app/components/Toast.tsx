"use client";

import React, { useEffect } from "react";

export default function Toast({
  open,
  message,
  onClose,
}: {
  open: boolean;
  message: string;
  onClose?: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose && onClose(), 3000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed left-1/2 bottom-8 z-50 -translate-x-1/2">
      <div className="rounded-full bg-black/90 px-5 py-2 text-sm text-white shadow-lg">
        {message}
      </div>
    </div>
  );
}
