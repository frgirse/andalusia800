
"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { BeakerIcon, BellIcon } from '@heroicons/react/24/solid'
import { archidaught } from '../../Utils/fonts';
import Head from "next/head";
import Script from "next/script";
import  LogoWA from "../../public/assets/images/LogoWA.svg";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import User from '../components/User'

export default function NavbarDropdown() {
  const navigation = [
    { title: "Philosophie", path: "#" },
    { title: "Immobilien", path: "#" },
    { title: "Timeline", path: "#section-Timeline" },
    { title: "Rechtslage", path: "#" },
    { title: "Contact", path: "#" },
    {
      title: "Galerie",
      path: "#",
      children: [
        { title: "Häuser", path: "#" },
        { title: "2-Zimmer App", path: "#" },
        { title: "3-Zimmer App", path: "#" },
      ],
    },
  ];



  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com/" />
        <title>Wohntraum Andalusia</title>
      </Head>
            <div className={archidaught.className}>
      <div className="">

     
        <nav className=" relative flex flex-wrap items-center justify-between px-8 py-6 mx-auto lg:justify-between">
          {/* Logo  */}
  
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                 

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-100 rounded-md lg:hidden hover:text-amber-500 focus:text-amber-500 focus:bg-amber-50 focus:outline-none ">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
                    <>
                      <NavMenu
                        navigation={navigation}
                        mobile={true}
                      />
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
            
          </Disclosure>
          
          
              
          {/* menu  */}
         
          <div className="hidden text-center lg:flex lg:items-center">
           
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
        
              <NavMenu navigation={navigation} />
     
            </ul>
          </div>
        </nav>
      </div>
      </div>
    </>
  );
}

const NavMenu = (props) => {
  return (
    <>

      
      {props.navigation.map((item, index) => {
        return (
          <div key={index}>
            {item.children && item.children.length > 0 ? (
               <div className={archidaught.className}>
              <DropdownMenu
                menu={item}
                items={item.children}
                mobile={props.mobile}
              />
              </div>
            ) : (
              <MenuItem item={item} mobile={props.mobile} />
            )}
          </div>
       
        );
      })}
    </>
  );
};

const MenuItem = ({ item, mobile }) => {
  return (
    <Link href={item?.path ? item.path : "#"}
      
        className={`
        text-gray-100 dark:text-gray-300 rounded-md
    outline-none hover:text-gray-200 hover:bg-yellow-600 focus:text-gray-200  transition-all
     focus:bg-yellow-700 dark:focus:bg-gray-800 focus:outline-none ${
       mobile
         ? "w-full block px-4 py-2 -ml-4"
         : "inline-block px-6 py-2"
     }`}>
        {item.title}
      
    </Link>
  );
};

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center gap-x-1 transition-all rounded-md outline-none focus:outline-none ${
              open
                ? "text-gray-300 hover:text-gray-50 focus:bg-indigo-100 focus:text-indigo-500 dark:focus:bg-gray-800 "
                : "text-amber-500 dark:text-gray-300 hover:text-gray-100 hover:bg-yellow-800 focus:bg-gray-300 dark:focus:bg-gray-800  focus:text-gray-300"
            }  ${
              mobile
                ? "w-full px-4 py-2 -ml-4"
                : "inline-block px-4 py-2"
            }`}>
                                  <span>{menu.title}</span>
            <BellIcon className=" w-4 h-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={`z-20 lg:w-56 origin-top-left  rounded-md  lg:absolute lg:right-0  focus:outline-none ${
                mobile ? "" : "  bg-white shadow-lg  dark:bg-gray-800"
              }`}>
              <div className={`${!mobile ? "py-3" : ""}`}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link href={item?.path ? item.path : "#"}
                        
                          className={`flex space-x-2 lg:space-x-4 items-center px-5 py-2
                          ${
                            active
                              ? "  text-slate-500"
                              : "text-gray-100 dark:text-gray-300 hover:text-yellow-500 focus:text-lemon-500"
                          }
                          `}>
                          <span> {item.title}</span>
                        
                      </Link>
                    )}    </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};