"use client";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment, type SVGProps } from "react";

interface DropdownMenuProps {
	options: string[];
	title: string;
}

export function DropdownMenu({ options, title }: DropdownMenuProps) {
	return (
		<div className="">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full  justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
						{title}
						<ChevronDownIcon
							className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-secondary border border-text/30 shadow-lg ring-1 ring-black/5 focus:outline-none">
						<div className="px-1 py-1">
							{options.map((option, idx) => (
								<Menu.Item key={`${option}-${option}`}>
									{({ active }) => (
										<button
											type="button"
											className={`${
												active ? "bg-violet-500 " : ""
											} group flex w-full items-center text-white rounded-md px-2 py-2 text-sm`}
										>
											{option}
										</button>
									)}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
