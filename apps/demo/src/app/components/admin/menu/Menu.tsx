"use client";

import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, SVGProps, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownMenuProps {
  options: string[];
  title: string;
}

export function DropdownMenu({ options, title }: DropdownMenuProps) {
  return (
    <div className=''>
      <Menu
        as='div'
        className='relative inline-block text-left'
      >
        <div>
          <Menu.Button className='inline-flex w-full  justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
            {title}
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-secondary border border-text/30 shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='px-1 py-1'>
              {options.map((option, idx) => (
                <Menu.Item key={`${option}-${idx}`}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 " : ""
                      } group flex w-full items-center text-white rounded-md px-2 py-2 text-sm`}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              ))}
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className='mr-2 h-5 w-5'
                        aria-hidden='true'
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className='mr-2 h-5 w-5'
                        aria-hidden='true'
                      />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className='mr-2 h-5 w-5'
                        aria-hidden='true'
                      />
                    ) : (
                      <MoveInactiveIcon
                        className='mr-2 h-5 w-5'
                        aria-hidden='true'
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item> */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function EditActiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 4H12V12H4V4Z'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path
        d='M8 8H16V16H8V8Z'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function DuplicateActiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 4H12V12H4V4Z'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path
        d='M8 8H16V16H8V8Z'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='8'
        width='10'
        height='8'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <rect
        x='4'
        y='4'
        width='12'
        height='4'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path
        d='M8 12H12'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function ArchiveActiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='8'
        width='10'
        height='8'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <rect
        x='4'
        y='4'
        width='12'
        height='4'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path
        d='M8 12H12'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function MoveInactiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 4H16V10'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path
        d='M16 4L8 12'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path
        d='M8 6H4V16H14V12'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function MoveActiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 4H16V10'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path
        d='M16 4L8 12'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path
        d='M8 6H4V16H14V12'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  );
}

function DeleteInactiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='6'
        width='10'
        height='10'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path
        d='M3 6H17'
        stroke='#A78BFA'
        strokeWidth='2'
      />
      <path
        d='M8 6V4H12V6'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function DeleteActiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='6'
        width='10'
        height='10'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path
        d='M3 6H17'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
      <path
        d='M8 6V4H12V6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  );
}
