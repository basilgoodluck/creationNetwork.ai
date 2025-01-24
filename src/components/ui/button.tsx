import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  variant = 'default',
  size = 'md',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'rounded-lg font-medium transition-all duration-200 disabled:opacity-50',
        {
          'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90': variant === 'default',
          'border-2 border-blue-500/20 hover:border-blue-500/40 text-white': variant === 'outline',
          'bg-blue-500 text-white hover:opacity-90': variant === 'gradient',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
