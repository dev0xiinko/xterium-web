import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="-mt-[70px]">
      <section className="bg-norepeat bg-cover relative">
        <div className="pt-[70px] h-screen">
          <div className="z-20 container mx-auto text-center flex flex-col justify-center items-center h-full">
            <h1 className="text-[4em] leading-none font-bold mb-6 text-white">
              Your Gateway to{" "}
              <span className="py-1 px-2 bg-white text-theme-default">
                Blockchain
              </span>
            </h1>
            <div className="text-center mt-8 flex justify-center">
              <h2 className="text-white max-w-[700px]">
                Secure, seamless, and powerful. The Xterium Wallet Extension is
                your trusted companion for managing digital assets and
                interacting with Blockchain—right from your browser.
              </h2>
            </div>
            <div className="flex items-center justify-center gap-4 mt-10">
              <a
                href="https://chromewebstore.google.com/detail/xterium/klfhdmiebenifpdmdmkjicdohjilabdg"
                className="text-white bg-gradient-to-br from-[#0eb4b2] to-[#10467b] py-4 px-6 rounded-full uppercase font-bold"
              >
                Download for Chrome
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto">
          <h3 className="text-white uppercase font-bold text-lg mb-8">
            Why Choose Xterium Wallet?
          </h3>
          <ul className="flex">
            <li className="p-4 flex-1 border-r border-[#0fbab5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#b2ff79"
                className="w-12 h-12 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <h4 className="mb-2 w-fit py-2">Secure Key Storage</h4>
              <p className="text-sm opacity-80">
                Your private keys are encrypted and stored securely, giving you
                full control of your assets.
              </p>
            </li>
            <li className="p-4 flex-1 border-r border-[#0fbab5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#b2ff79"
                className="w-12 h-12 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>

              <h4 className="mb-2 w-fit py-2">Send and Receive Token</h4>
              <p className="text-sm opacity-80">
                Easily manage tokens with just a few clicks.
              </p>
            </li>
            <li className="p-4 flex-1 border-r border-[#0fbab5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#b2ff79"
                className="w-12 h-12 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>

              <h4 className="mb-2 w-fit py-2">Smart Contract Interaction</h4>
              <p className="text-sm opacity-80">
                Connect to decentralized applications and execute smart
                contracts effortlessly.
              </p>
            </li>
            <li className="p-4 flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#b2ff79"
                className="w-12 h-12 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>

              <h4 className="mb-2 w-fit py-2">Token Management</h4>
              <p className="text-sm opacity-80">
                View, manage, and trade your tokens in one intuitive dashboard.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-16 container mx-auto flex gap-8">
        <div className="flex-1">
          <h3 className="text-theme-default uppercase font-bold text-lg mb-8">
            Getting Started with Xterium Wallet
          </h3>

          <ul className="flex flex-col gap-4">
            <li className="bg-slate-50 rounded-xl py-4 px-8">
              <h4 className="text-theme-default font-bold">
                1. Download the Extension
              </h4>
              <p>Available for Chrome, Firefox, and more.</p>
            </li>
            <li className="bg-slate-50 rounded-xl py-4 px-8">
              <h4 className="text-theme-default font-bold">
                2. Create or Import a Wallet
              </h4>
              <p>Generate a new wallet or import your existing one securely.</p>
            </li>
            <li className="bg-slate-50 rounded-xl py-4 px-8">
              <h4 className="text-theme-default font-bold">
                3. Start Managing Your Digital Assets
              </h4>
              <p>
                Access your tokens, send/receive tokens, and interact with Xode
                dApps.
              </p>
            </li>
          </ul>
        </div>
        {/* <div className="w-fit">
          <img src="/screen.png" alt="" className="w-[300px] rounded-xl" />
          </div> */}
      </section>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto">
          <h1 className="text-[4em] leading-none font-bold mb-6 text-theme-default text-center">
            Creating a New Wallet
          </h1>
          <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-12">
            {[
              {
                image: '/creating_new_wallet/addextension.png',
                title: 'Install Xterium Extension',
                description: 'Open your web browser and search for "Google Extensions". In the search bar, type "Xterium" to go to the installation page. Click the "Add to Chrome" button to proceed. A prompt will appear asking if you want to add Xterium to your extensions. Click the "Add Extension" button to confirm. Xterium will automatically be added to your list of extensions.',
              },
              {
                image: '/creating_new_wallet/setuppassword.png',
                title: 'Set Up Password',
                description: 'Open your Xterium Wallet Extension and set up a password for it. The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number. Once done, click the "SETUP PASSWORD" button. You will then be directed to the balance section of the Xterium Wallet.',
              },
              {
                image: '/creating_new_wallet/addwallet.png',
                title: 'Add Wallet',
                description: 'To add a wallet to your extension, click the sidebar button located in the upper left corner. Then, select "Wallets". Click the "Add Wallet" button.',
              },
              {
                image: '/creating_new_wallet/generatemnemonic.png',
                title: 'Generate Mnemonic Phrase',
                description: 'Provide a unique name for your wallet. To generate a mnemonic phrase, secret key, and public key, click the "Generate Mnemonic Phrase" button. Once the mnemonic phrase is generated, make sure to write it down and store it securely, as you won’t be able to recover your account if it’s lost. Then, click the "Save" button to proceed. You can now view your added wallet and make transactions on the wallet page of the Xterium Wallet Extension. Important:',
              },
            ].map(({ image, title, description }, index) => (
              <div key={index} className="flex flex-col items-center justify-start gap-4 w-full sm:w-[250px] md:w-[300px]">
                <div className="w-full h-[350px] mt-12 flex justify-center items-center">
                  <Image src={image} alt={title} width={300} height={350} className="object-contain" />
                </div>
                <h4 className="text-white font-bold text-xl mt-8 text-center">{title}</h4>
                
                <p className="flex-shrink-0 max-w-xs text-sm text-justify opacity-80 mt-2">
                  {description.split('"').map((part, i) => (
                    i % 2 === 0 ? (
                      part
                    ) : (
                      <span key={i} className="text-theme-default font-bold">{part}</span>
                    )
                  ))}
                  {description.includes('Important:') && (
                    <span className="text-yellow-500 font-bold"><br /><br />Note: Store your mnemonic phrase securely. If lost, it cannot be recovered.</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto">
          <h1 className="text-[4em] leading-none font-bold mb-6 text-theme-default text-center">
            Importing a Wallet
          </h1>
          <div className="flex flex-row w-full justify-start mt-12">
            <h3 className="flex-1 text-white uppercase font-bold text-lg mb-8 text-start">
              Using Existing Mnemonic Phrase
            </h3>
            <h3 className="flex-1 text-white uppercase font-bold text-lg mb-8 text-start">
              Using Xode JSON File
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-12">
            {[
              {
                image: '/importing_wallet/mnemonicaddwallet.png',
                title: 'Select Add Wallet',
                description: 'On the Wallet page, click the "Add Wallet" button.',
              },
              {
                image: '/importing_wallet/mnemonicinput.png',
                title: 'Input Existing Mnemonic',
                description: 'Enter a unique name for your wallet, then type or paste your 12 mnemonic seeds in order to generate the secret key and public key. Click "Save" to add the wallet. It will now appear in your wallet list.',
              },
              {
                image: '/importing_wallet/jsonimportwallet.png',
                title: 'Select Import Wallet',
                description: 'On the Wallet page, click the "IMPORT WALLET" button to open an expanded view for importing your wallet.',
              },
              {
                image: '/importing_wallet/jsonupload.png',
                title: 'Upload Wallet JSON',
                description: 'Enter a unique name for your wallet, then select the Xode JSON file of the wallet you wish to import from your desktop. Afterward, click the "Save" button. You can now see the imported wallet in your Wallet list.',
              },
            ].map(({ image, title, description }, index) => (
              <div key={index} className="flex flex-col items-center justify-start gap-4 w-full sm:w-[250px] md:w-[300px]">
                <div className="w-full h-[350px] mt-4 flex justify-center items-center">
                  <Image src={image} alt={title} width={300} height={350} className="object-contain" />
                </div>
                <h4 className="text-white font-bold text-xl mt-8 text-center">{title}</h4>
                
                <p className="flex-shrink-0 max-w-xs text-sm text-justify opacity-80 mt-2">
                  {description.split('"').map((part, i) => (
                    i % 2 === 0 ? (
                      part
                    ) : (
                      <span key={i} className="text-theme-default font-bold">{part}</span>
                    )
                  ))}
                  {description.includes('Important:') && (
                    <span className="text-yellow-500 font-bold"><br /><br />Note: Store your mnemonic phrase securely. If lost, it cannot be recovered.</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-black text-white">
          <div className="container mx-auto">
            <h1 className="text-[4em] leading-none font-bold mb-6 text-theme-default text-center">
              Transferring Tokens
            </h1>
            <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-12">
              {[
                {
                  image: '/transferring_tokens/selectTransferDetails.png',
                  title: 'Select Transfer Details',
                  description:
                    'On the Balance page, choose the address you want to transfer from. Select the XON Token and click the "Transfer" button.',
                },
                {
                  image: '/transferring_tokens/enterDetails.png',
                  title: 'Enter Transfer Details',
                  description:
                    'Input the number of selected Tokens to transfer and enter the recipient’s address.',
                },
                {
                  image: '/transferring_tokens/confirmTransactions.png',
                  title: 'Confirm Transaction',
                  description:
                    'Click the “Send” button and wait for the transaction fee calculation. Once done, click the “Confirm” button.',
                },
                {
                  image: '/transferring_tokens/completeAndVerify.png',
                  title: 'Complete and Verify',
                  description:
                    'Wait for the transfer to complete, then you will be redirected back to the balance tab. Check both your account and the recipient’s account to confirm the transaction.',
                },
              ].map(({ image, title, description }, index) => (
                <div key={index} className="flex flex-col items-center justify-start gap-4 w-full sm:w-[250px] md:w-[300px]">
                  <div className="w-full h-[350px] mt-12 flex justify-center items-center">
                    <Image
                      src={image}
                      alt={title}
                      width={300}
                      height={350}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-white font-bold text-xl mt-8 text-center">{title}</h4>

                  <p className="flex-shrink-0 max-w-xs text-sm text-justify opacity-80 mt-2">
                    {description
                      .replace(/“|”/g, '"') // Replace smart quotes with standard quotes
                      .split('"')
                      .map((part, i) =>
                        i % 2 === 0 ? (
                          part
                        ) : (
                          <span key={i} className="text-theme-default font-bold">{part}</span>
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
