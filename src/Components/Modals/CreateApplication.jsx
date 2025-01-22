import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useCreateApplication } from "@/Hooks/ApiHooks/useCreateApplication";
import { useCreateApplicationContext } from "@/Hooks/ContextHooks/useCreateApplicationContext";
import { useState } from "react";

function CreateApplication({Id}) {
    const { openModal, setOpenModal } = useCreateApplicationContext();
    const [comments, setComments] = useState("");
    const [images, setImages] = useState([]);
    const { isPending, isSuccess, isError, mutateAsync:createApplication } = useCreateApplication();

    function handleClose(){
        setOpenModal(0);
        setComments(null);
    }

    const handleImageChange = (e, index) => {
        const updatedImages = [...images];
        updatedImages[index] = e.target.files[0];
        setImages(updatedImages);
    };

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append("comment", comments);
        formData.append("service" , Id);

        images.forEach((image, idx) => {
            if (image) formData.append(`image_${idx + 1}`, image);
        });
        await createApplication(formData);
        handleClose();
    };

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <DialogHeader className="text-center mb-4">
                    <DialogTitle className="text-2xl font-bold text-gray-800">
                        Create Application
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                        Fill out the form below to create an application.
                    </DialogDescription>
                </DialogHeader>

                {/* Comments Section */}
                <div className="mb-6">
                    <label
                        htmlFor="comments"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Comments
                    </label>
                    <textarea
                        id="comments"
                        name="comments"
                        rows="4"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your comments here"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>

                {/* Image Upload Section */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Images (Optional)
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                        {[0, 1, 2].map((index) => (
                            <input
                                key={index}
                                type="file"
                                accept="image/*"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => handleImageChange(e, index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer Buttons */}
                <DialogFooter className="flex justify-end space-x-4">
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateApplication;
