import { ethers } from "ethers";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import contract from "../abi/contract";
import walletProvider from "../abi/walletProvider";
import { getAllPagesIds } from "../lib/getAllPagesIds";
import { getPageData } from "../lib/getPageData";

export default function SomePage({ data, info }) {
  const { type, title, setter } = data;
  const infoRef = useRef();
  const router = useRouter();

  const handleConnectButton = async () => {
    await walletProvider.send("eth_requestAccounts", []);
  };

  async function handleSetNumber(event) {
    event.preventDefault();
    try {
      const signer = walletProvider.getSigner();
      const contractSigner = contract.connect(signer);
      const tx = await contractSigner[setter](infoRef.current.value);
      await tx.wait();
      router.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/">
        <a>Go home!</a>
      </Link>
      <h1>{title}</h1>
      <button onClick={handleConnectButton}>Connect MetaMask</button>
      <form onSubmit={handleSetNumber}>
        <input type={type} placeholder="enter number" ref={infoRef} />
        <input type="submit" value="set new number" />
      </form>
      <p>{info}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPagesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getPageData(params.id);
  const { getter, type } = data;
  try {
    const info =
      type === "big"
        ? ethers.utils.formatUnits(await contract[getter](), 0)
        : await contract[getter]();
    return {
      props: {
        data,
        info,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
