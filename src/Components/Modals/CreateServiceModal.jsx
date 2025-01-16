import { useCreateServiceContext } from "@/Hooks/ContextHooks/useCreateServiceContext";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

function CreateServiceModal() {
    const { openModal, setOpenModal } = useCreateServiceContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Dialog open={openModal} onOpenChange={(open) => setOpenModal(open)}>
            <DialogTrigger asChild>
                {/* You can add a trigger button here */}
            </DialogTrigger>
            <DialogContent className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
                <DialogHeader>
                    <DialogTitle className="text-lg font-medium">Create Service</DialogTitle>
                    <DialogDescription className="text-xs mt-1 font-medium">
                        Enter service details below.
                    </DialogDescription>
                </DialogHeader>

                {/* Title Input */}
                <div className="mt-2">
                    <label htmlFor="title" className="font-medium text-sm">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full text-sm border border-gray-300 rounded-sm p-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="Service title"
                    />
                </div>

                {/* Description Input */}
                <div className="mt-2">
                    <label htmlFor="description" className="font-medium text-sm">
                        Description
                    </label>
                    <input
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full text-sm border border-gray-300 rounded-sm p-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="Description"
                    />
                </div>

                {/* Image Upload Input */}
                <div className="mt-2">
                    <label htmlFor="image-upload" className="font-medium text-sm">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image-upload"
                        name="image-upload"
                        className="block w-full text-sm border border-gray-300 rounded-sm p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <DialogFooter className="mt-4">
                    <button
                        type="button"
                        className="w-full py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2"
                        onClick={() => setOpenModal(false)}
                    >
                        Close
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateServiceModal;
