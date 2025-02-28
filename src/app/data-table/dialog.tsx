"use client";

import React from "react";
import { HashLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface DeleteDialogProps {
  isOpen?: boolean;
  loading?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
}

const DeleteDialogDashboard: React.FC<DeleteDialogProps> = ({
  isOpen,
  loading,
  onClose,
  onConfirm,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    //   <div className="bg-white rounded-lg p-6 w-80">
    //     <h3 className="text-lg font-bold mb-4">{title}</h3>
    //     <p className="mb-6">{description}</p>
    //     <div className="flex justify-end gap-4">
    //       <Button
    //         onClick={onClose}
    //         className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
    //       >
    //         Batal
    //       </Button>
    //       <Button
    //         onClick={loading ? undefined : onConfirm}
    //         disabled={loading}
    //         className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    //       >
    //         {loading ? <HashLoader size={20} color="white" /> : "Hapus"}
    //       </Button>
    //     </div>
    //   </div>
    // </div>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"} size={"icon"}>
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialogDashboard;
