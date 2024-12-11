import Image from "next/image";
import { ConnectButton, defaultTokens, useActiveAccount } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { desc } from "framer-motion/client";

export default function MyWallet() {
    const active_account = useActiveAccount();
    return (
        <main className="p-4 pb-10 h-[80vh] flex items-center justify-center container max-w-screen-lg mx-auto">
            <div className="flex flex-col items-center justify-center">
                <p className="text-center text-gray-500">Your wallet address: {active_account?.address}</p>
                <MyStickers />
            </div>
        </main>
    );
}

function MyStickers(){
    const nfts = [
        {source: "/stickers/dog.png", description: "dog", value: 0.1},
        {source: "/stickers/ice-cream.png", description: "aiskream", value: 0.2},
    ]
    const totalValue = nfts.reduce((acc, sticker) => acc + sticker.value, 0).toFixed(2);
    return (
        <div className="text-center">
            <p>Total Value: {totalValue}</p>
            <div className="grid grid-cols-2 gap-4 m-4">
            {nfts.map((nft, index) => (
                <div key={index} className="">
                <Card isFooterBlurred className="border-none p-4 bg-white shadow-lg rounded-lg overflow-hidden" radius="lg">
                    <Image src={nft.source} alt="Sticker" width={80} height={80} />
                    <Button
                    className="absolute border-white/20 border-1 overflow-hidden bottom-2 text-tiny text-white bg-black/20 flex justify-center"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                    >
                        {nft.value} ETH
                    </Button>
                </Card>
                </div>
            ))}
            </div>
        </div>
    );
}

