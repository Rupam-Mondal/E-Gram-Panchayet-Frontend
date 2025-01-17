import useCreateService from "@/Hooks/ApiHooks/useCreateService";
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
import { useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";

function CreateServiceModal() {
    const { openModal, setOpenModal } = useCreateServiceContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const { isPending, isSuccess, error, mutateAsync: createService } = useCreateService();
    const queryClient = useQueryClient();

    const handleCreate = async () => {
        if (!title || !description || !image) {
            alert("Please fill all the fields and upload an image.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        try {
            await createService(formData);
            queryClient.invalidateQueries(['GetAllservice']);
            setOpenModal(false);
            setTitle("");
            setDescription("");
            setImage(null);
        } catch (err) {
            console.error(err);
            alert("Failed to create service.");
        }
    };

    return (
        <Dialog open={openModal} onOpenChange={(open) => setOpenModal(open)}>
            <DialogTrigger asChild>
                {/* Add a trigger button if needed */}
            </DialogTrigger>
            <DialogContent className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
                <DialogHeader>
                    <DialogTitle className="text-lg font-medium">Create Service</DialogTitle>
                    <DialogDescription className="text-xs mt-1 font-medium text-gray-500">
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
                        className="block w-full text-sm border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
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
                        className="block w-full text-sm border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
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
                        accept="image/*"
                        className="block w-full text-sm border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setImage(e.target.files[0])} // Save the file to state
                    />
                </div>

                <DialogFooter className="mt-4 flex justify-end gap-3">
                    {/* Close Button */}
                    <button
                        type="button"
                        className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={() => setOpenModal(false)}
                    >
                        Close
                    </button>

                    {/* Create Button */}
                    {
                        isPending ? (
                            <button
                                type="button"
                                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={handleCreate}
                            >
                                <Loader className="animate-spin"/>
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={handleCreate}
                            >
                                Create
                            </button>
                        )
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateServiceModal;
