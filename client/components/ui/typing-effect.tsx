import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  readonly texts: string[];
  readonly speed?: number;
  readonly deleteSpeed?: number;
  readonly delayBetweenTexts?: number;
  readonly className?: string;
  readonly prefix?: string;
  readonly showCursor?: boolean;
}

export function TypingEffect({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  className = "",
  prefix = "",
  showCursor = true
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="gradient-text font-semibold"
      >
        {currentText}
      </motion.span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="text-primary ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
}
