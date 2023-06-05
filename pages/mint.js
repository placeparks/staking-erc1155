import { Web3Button} from "@thirdweb-dev/react"
import { useRouter } from "next/router"
import { editionDropContractAddress } from "../consts/contractAddresses"
import styles from "../styles/Home.module.css"


const Mint = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint An NFT!</h1>

      <p className={styles.explain}>
        Here is where we use our <b>Edition Drop</b> contract to allow users to
        mint one of the NFTs that we lazy minted.
      </p>
      
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <iframe
    src="https://ipfs-2.thirdwebcdn.com/ipfs/QmRSigvYNceevzrYV3rcmVw1rpWMY28zdmGzf9hp67vx72/erc1155.html?contract=0x97a3D34F34CC89B16C96BEbadCBE7333bFd74c93&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%7D&tokenId=0&theme=dark&primaryColor=yellow"
    width="600px"
    height="600px"
    style={{maxWidth:"100%;"}}
    frameborder="0"
    ></iframe>

    </div>
  )
}

export default Mint
