import Image from "next/image";

interface Step {
  number: number;
  image: string;
  title: string;
  description: string;
}

const steps: Step[] = [
    {
        number: 1,
        image: '/importing_wallet/mnemonicaddwallet.png',
        title: 'Select Add Wallet',
        description: 'On the Wallet page, click the "Add Wallet" button.',
        },
        {
        number: 2,
        image: '/importing_wallet/mnemonicinput.png',
        title: 'Input Existing Mnemonic',
        description: 'Enter a unique name for your wallet, then type or paste your 12 mnemonic seeds in order to generate the secret key and public key. Click "Save" to add the wallet. It will now appear in your wallet list.',
        },
        {
        number: 1,
        image: '/importing_wallet/jsonimportwallet.png',
        title: 'Select Import Wallet',
        description: 'On the Wallet page, click the "IMPORT WALLET" button to open an expanded view for importing your wallet.',
        },
        {
        number: 2,
        image: '/importing_wallet/jsonupload.png',
        title: 'Upload Wallet JSON',
        description: 'Enter a unique name for your wallet, then select the Xode JSON file of the wallet you wish to import from your desktop. Afterward, click the "Save" button. You can now see the imported wallet in your Wallet list.',
        },
    ];

export default function ImportWalletSteps() {
  return (
    <div>
      {/* Mobile View */}
      <section className="py-16 bg-black text-white block 2xl:hidden">
        <div className="container mx-auto">
          <h1 className="text-[3em] leading-none font-bold mb-6 text-theme-default text-center">
            Importing a Wallet
          </h1>
          <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-12">
            {steps.map(({ number, image, title, description }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start gap-4 w-full sm:w-[250px] md:w-[300px]"
              >
                <div className="w-full h-[350px] mt-8 flex justify-center items-center">
                  <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={350}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center w-8 h-8 mt-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-teal-500 text-white font-bold mt-4">
                  {number}
                </div>
                <h4 className="text-white font-bold text-xl mt-4 text-center">
                  {title}
                </h4>
                <p className="flex-shrink-0 max-w-xs text-sm text-justify opacity-80 mt-2">
                  {description.split('"').map((part, i) =>
                    i % 2 === 0 ? (
                      part
                    ) : (
                      <span key={i} className="text-theme-default font-bold">
                        {part}
                      </span>
                    )
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop View */}
    <section className="py-16 px-16 bg-black text-white 2xl:flex hidden">
        <div className="container mx-auto">
            <h1 className="text-[4em] leading-none font-bold mb-6 text-theme-default text-center">
            Importing a Wallet
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16 justify-items-center">
            {steps.map(({ image, title }, index) => (
                <Image
                key={index}
                src={image}
                alt={title}
                width={300}
                height={350}
                className="object-contain"
                />
            ))}
            </div>
            <div className="relative flex justify-center items-center overflow-hidden mt-8">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 sm:gap-8 mt-8">
                    {steps.map(({ number }, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-center px-4"
                    >
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-teal-500 text-white font-bold z-10">
                        {number}
                        </div>
                        {number === 1 && steps[index + 1]?.number === 2 && (
                        <div
                            className="absolute top-1/2 transform -translate-y-1/2 h-[10px] bg-teal-500"
                            style={{
                            left: `50%`,
                            width: `calc(470%)`, 
                            }}
                        ></div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 sm:gap-8 mt-8">
                {steps.map(({ title, description }, index) => (
                    <div
                    key={index}
                    className="flex flex-col items-center justify-start gap-4 w-full sm:w-[250px] md:w-[300px]"
                    >
                    <h4 className="text-white font-bold text-xl mt-2 text-center">
                        {title}
                    </h4>
                    <p className="flex-shrink-0 max-w-xs text-sm text-justify opacity-80 mt-2">
                        {description.split('"').map((part, i) =>
                        i % 2 === 0 ? (
                            part
                        ) : (
                            <span key={i} className="text-theme-default font-bold">
                            {part}
                            </span>
                        )
                        )}
                    </p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    </div>
  );
}
