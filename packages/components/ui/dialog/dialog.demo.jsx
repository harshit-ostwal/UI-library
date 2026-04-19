import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './dialog.jsx';

import { Button } from '../button/button.jsx';

export function DialogDemo() {
  return (
    <div className="space-y-6">

      {/* Default */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogContent size="md">
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 text-sm text-muted-foreground">
            Are you sure you want to delete your account?
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <DialogClose asChild>
              <Button variant="destructive">Delete</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Large Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Large Dialog</Button>
        </DialogTrigger>

        <DialogContent size="lg">
          <DialogHeader>
            <DialogTitle>Large Modal</DialogTitle>
            <DialogDescription>
              This is a bigger dialog
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            <p>More content goes here...</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Fullscreen</Button>
        </DialogTrigger>

        <DialogContent size="full">
          <DialogHeader>
            <DialogTitle>Fullscreen Dialog</DialogTitle>
          </DialogHeader>

          <div className="mt-6">
            <p>This is fullscreen modal</p>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}