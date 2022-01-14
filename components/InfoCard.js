import Image from "next/image"
function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div>
        <div>
        <Image src={img} layout="fill" />
        </div>
            
        </div>
    )
}

export default InfoCard
