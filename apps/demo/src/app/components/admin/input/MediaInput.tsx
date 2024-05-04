import { useState, useRef, ComponentProps, useEffect } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { toast } from "react-toastify";

interface MediaInputProps {
	label: string;
	id: string;
	onFileChange: (file: File) => Promise<void>;
	subtext?: string;
	isBannerImage?: boolean;
	initialSrc: string | null;
	error?: string;
}

export const MediaInput = ({
	label,
	id,
	onFileChange,
	subtext,
	isBannerImage = true,
	initialSrc,
	error,
}: MediaInputProps) => {
	const [dragging, setDragging] = useState(false);
	const [imageSrc, setImageSrc] = useState<string | null>(initialSrc);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isUploading, setIsUploading] = useState<boolean>(false);

	useEffect(() => {
		if (initialSrc && !imageSrc) {
			setImageSrc(initialSrc);
		}
	}, [initialSrc, imageSrc]);

	const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragging(false);
	};

	const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
		if (isUploading) return;
		e.preventDefault();
		setDragging(false);
		const file = e.dataTransfer.files[0];
		if (file) {
			try {
				setIsUploading(true);
				await onFileChange(file);
				setIsUploading(false);
			} catch (error) {
				setIsUploading(false);
				toast.error("Error uploading image");
			}
		}
		const reader = new FileReader();
		reader.onload = () => {
			setImageSrc(reader.result as string);
		};
		if (file) reader.readAsDataURL(file);
	};

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isUploading) return;
		const file = e.target.files?.[0];
		if (file) {
			if (e.target.files?.[0]) {
				try {
					setIsUploading(true);
					await onFileChange(e.target.files?.[0]);
					setIsUploading(false);
				} catch (error) {
					setIsUploading(false);
					toast.error("Error uploading image");
				}
			}
			const reader = new FileReader();
			reader.onload = () => {
				setImageSrc(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const openFileSystem = () => {
		if (isUploading) return;
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div
			className={`flex cursor-pointer flex-col gap-1 `}
			onDragEnter={handleDragEnter}
			onDragOver={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			onClick={openFileSystem}>
			<label className="text-[14px] text-white">{label}</label>
			<div
				className={`flex justify-between h-[176px] gap-2 rounded-lg border border-dashed border-primary-text border-opacity-50 transition-colors ${
					dragging ? " bg-[#FFFFFF33]" : ""
				} ${isUploading ? "animate-pulse cursor-not-allowed" : ""} ${error ? "border-red-500" : ""}`}>
				<div
					className={`flex w-full flex-col items-center justify-center rounded-lg border-primary ${
						!imageSrc ? "block" : "hidden"
					}
          `}>
					<input
						type="file"
						id={id}
						accept="image/png, image/jpeg, image/jpg, image/gif, image/svg+xml, image/webp"
						className="hidden "
						onChange={handleFileChange}
						ref={fileInputRef}
					/>
					<div>
						<p className="normal-case text-primary-accent/20">
							{isUploading ? "Uploading..." : "Drag & drop an image (JPG, PNG)"}
						</p>
					</div>
					<div className="font-thin">{subtext}</div>
				</div>
				{imageSrc && (
					<AspectRatio.Root ratio={isBannerImage ? 17 / 3 : 2 / 1} className="relative h-full">
						<BlurImage
							src={imageSrc}
							alt="Dropped file"
							width={isBannerImage ? 500 : 176}
							height={176}
							className={`h-full w-full rounded-lg object-cover`}
						/>
						<div className="absolute bottom-3 right-5 flex gap-2">
							Click to edit
							{/* <Upload className="w-[20px]" /> */}
						</div>
					</AspectRatio.Root>
				)}
			</div>
			{error && <p className="pt-1 text-2xs normal-case text-red-500">{error}</p>}
		</div>
	);
};

export const BlurImage = (props: ComponentProps<typeof Image>) => {
	const [isLoading, setLoading] = useState<boolean>(true);

	return (
		<Image
			{...props}
			alt={props.alt}
			className={`
      duration-700 ease-in-out
      ${props?.className ?? ""}
      ${isLoading ? "scale-105 animate-pulse bg-slate-400 blur-lg" : "scale-100 blur-0"}
      `}
			onLoadingComplete={() => setLoading(false)}
			onError={() => setLoading(false)}
		/>
	);
};
