"use client";

import Link from "next/link";

import { Badge } from "@/components/tailgrids/core/badge";
import { Facebook, Discord, Instagram  } from "@tailgrids/icons";

export default function Footer() {
    return (
        <div className='mt-4 pb-4 text-center'>
        {/*student*/}
        <div>
          <Badge className='text-xl text-black rounded-lg'>68063830 อภิสิทธิ์ อัตไพบูลย์</Badge>
        </div>
        {/*contact*/}
        <div>
            <div className='mt-4 flex justify-center gap-6'>
                <Link href="https://www.facebook.com/best.attaphaiboon" target="_blank">
                <Facebook className="text-blue-700" />
                </Link>
                <div className="border-l-1"></div>

                <Link href="https://discord.com/users/1511512076202410004" target="_blank">
                    <Discord className="text-blue-900" />
                </Link>
                <div className="border-l-1"></div>

                <Link href="https://www.instagram.com/tseq.l3/" target="_blank">
                    <Instagram className="text-pink-500" />
                </Link>

            </div>
        </div>
        </div>
    )
}