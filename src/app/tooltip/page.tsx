import { TooltipArrow } from '@radix-ui/react-tooltip';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function TooltipDemo() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='default'>Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
            <TooltipArrow className='fill-white' />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
