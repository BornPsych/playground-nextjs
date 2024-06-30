'use client';

import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function ToastDemo() {
  const { toast, dismiss } = useToast();
  const toastIdRef = useRef<string | null>(null);
  const toastIdRef2 = useRef<string | null>(null);

  return (
    <div className='flex h-screen w-screen items-center justify-between'>
      <Button
        onClick={() => {
          const { id } = toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
          toastIdRef.current = id;
        }}
      >
        Show Toast
      </Button>
      <Button
        onClick={() => {
          if (toastIdRef.current) {
            dismiss(toastIdRef.current);
          }
          // if (toastIdRef2.current) {
          //     dismiss(toastIdRef2.current);
          // }
        }}
      >
        Dismiss toast
      </Button>

      <Button
        onClick={() => {
          dismiss();
        }}
      >
        Dismiss all toast
      </Button>

      <Button
        onClick={() => {
          const { id, update, dismiss } = toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
          toastIdRef2.current = id;
          //setting up the toast notification
          update({ id, title: 'Team settings updated' });
          // update teh toast notificaton accordingly

          // dismiss(); // dismiss the current toasst if  certain operation don;t need it
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}
