"use client";

import Avatar from "@/components/ui/Avatar";

export default function TokenCard({
    title = "Landfall",
    image = "/explore/thumbnail.png",
    duration = "0:35",
    price = "€12.92",
}) {
    return (
        <div className="w-full">

            {/* CARD */}
            <div className="rounded-xl border border-[#1f1f1f] overflow-hidden bg-[#0b0b0b]">

                {/* IMAGE */}
                <div className="relative">
                    <img
                        src={image}
                        alt="token"
                        className="w-full h-[200px] object-cover"
                    />

                    {/* OVERLAY */}
                    <div className="absolute bottom-0 left-0 w-full px-3 py-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between">

                        {/* avatars */}
                        <div className="flex -space-x-2">
                            <Avatar
                                size="sm"
                                src="/home/pp.png"
                                className="border border-black"
                            />
                            <Avatar
                                size="sm"
                                src="/home/pp.png"
                                className="border border-black"
                            />
                        </div>

                        {/* right meta */}
                        <div className="flex items-center gap-3 text-[11px] text-white">
                            <span className="opacity-80">⏱ {duration}</span>
                            <span className="font-medium">{price}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* TITLE */}
            <p className="mt-2 text-[13px] text-white font-medium leading-tight">
                {title}
            </p>
        </div>
    );
}