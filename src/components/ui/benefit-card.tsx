import { cn } from "@/lib/utils";

interface BenefitCardProps {
  title: string;
  who: string;
  needs: string;
  solution: string;
  borderStyle: string;
  className?: string;
}

export function BenefitCard({ title, who, needs, solution, borderStyle, className }: BenefitCardProps) {
  return (
    <div className={cn(`p-6 bg-[#131a2e] rounded-lg ${className}`)}>
      <div className="space-y-4">
        <div className={cn(`bg-gradient-to-b from-[#0f1128] to-[#2c2968] px-3 py-6 border-l- rounded-lg ${borderStyle} ` )}>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-1">Who They Are:</h4>
            <p className="text-foreground/60 text-sm">{who}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Needs:</h4>
            <p className="text-foreground/60 text-sm">{needs}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Solution:</h4>
            <p className="text-foreground/60 text-sm">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
