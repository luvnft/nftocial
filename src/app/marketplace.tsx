import Image from "next/image";
import { ConnectButton, defaultTokens } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "../lib/client";

export default function Marketplace() {
    return (
        <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
            <div className="py-20">
                Marketplace
            </div>
        </main>
    );
}

