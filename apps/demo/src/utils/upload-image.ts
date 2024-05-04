import type { PutBlobResult } from "@vercel/blob";
import { toast } from "react-toastify";

export const uploadImage = async (
	file: File,
): Promise<PutBlobResult | null> => {
	if (file.size > 4500000) {
		toast.error("Image size must be less than 4.5MB");
		return null;
	}

	const response = await fetch(`/api/upload-image?filename=${file.name}`, {
		method: "POST",
		body: file,
	});

	return await response.json();
};
