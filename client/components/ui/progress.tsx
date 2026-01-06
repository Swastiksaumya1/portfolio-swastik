import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// Enhanced animated progress bar
interface AnimatedProgressProps {
  value: number;
  className?: string;
  showValue?: boolean;
  color?: "primary" | "accent" | "success" | "warning";
  height?: "sm" | "md" | "lg";
  delay?: number;
}

const AnimatedProgress = ({ 
  value, 
  className, 
  showValue = false,
  color = "primary",
  height = "md",
  delay = 0
}: AnimatedProgressProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200 + delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  const colorClasses = {
    primary: "from-primary to-primary/80",
    accent: "from-accent to-accent/80", 
    success: "from-green-500 to-green-400",
    warning: "from-yellow-500 to-yellow-400"
  };

  const heightClasses = {
    sm: "h-2",
    md: "h-3", 
    lg: "h-4"
  };

  return (
    <div className={cn("w-full bg-muted rounded-full overflow-hidden relative", heightClasses[height], className)}>
      <motion.div
        className={cn("h-full bg-gradient-to-r rounded-full", colorClasses[color])}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {showValue && (
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-xs font-medium text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.span>
      )}
    </div>
  );
};

// Circular progress component
interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
  color?: string;
}

const CircularProgress = ({
  value,
  size = 80,
  strokeWidth = 8,
  className,
  showValue = true,
  color = "#3B82F6"
}: CircularProgressProps) => {
  const [progress, setProgress] = React.useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-muted/30"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          stroke={color}
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      {showValue && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-sm font-semibold">{Math.round(progress)}%</span>
        </motion.div>
      )}
    </div>
  );
};

export { Progress, AnimatedProgress, CircularProgress };
