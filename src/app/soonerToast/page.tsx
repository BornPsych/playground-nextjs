'use client';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

const Page = () => {
  const [mytoast, setMyToast] = useState<string | number | null>(null);
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-4'>
      <Button
        onClick={() => {
          if (mytoast) {
            toast.dismiss(mytoast);
          }
          const toastId = toast('My cancel toast', {
            position: 'top-center',
            action: {
              label: 'Action',
              onClick: () => console.log('Action!'),
            },
            // cancel: {
            //     label: 'Cancel',
            //     onClick: () => console.log('Cancel!'),
            // },
            invert: true,
            closeButton: true,
            duration: 5000,
            onDismiss: (t) =>
              console.log(`Toast with id ${t.id} has been dismissed`),
            onAutoClose: (t) =>
              console.log(
                `Toast with id ${t.id} has been closed automatically`
              ),
          });

          setMyToast(toastId);
        }}
      >
        Show Toast
      </Button>
      <Button
        onClick={() => {
          const toastId = toast('My cancel toast', {
            position: 'bottom-right',
            action: {
              label: 'Action',
              onClick: () => console.log('Action!'),
            },
            // cancel: {
            //     label: 'Cancel',
            //     onClick: () => console.log('Cancel!'),
            // },
            invert: true,
            closeButton: true,
            duration: 5000,
            onDismiss: (t) =>
              console.log(`Toast with id ${t.id} has been dismissed`),
            onAutoClose: (t) =>
              console.log(
                `Toast with id ${t.id} has been closed automatically`
              ),
          });

          setTimeout(() => {
            toast.success('Toast has been updated', {
              id: toastId,
            });
          }, 2000);
        }}
      >
        Show Toast
      </Button>

      <Button onClick={() => toast.dismiss()}>Dismiss All toast</Button>
    </div>
  );
};

export default Page;
