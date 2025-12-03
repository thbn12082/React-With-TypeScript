import { useState } from "react"
type product = {
    name: string;
    type: string;
    price: number;
}

const ProductCard = ({ name, type, price }: product) => {
    const [pricex, setPricex] = useState(price);
    const changePrice = () => setPricex(pricex + 10);
    return (
        <div style={{ border: "1px solid black", textAlign: 'center', padding: '10px', fontSize: "15px", margin: "10px" }}>
            <p>Tên sản phẩm: {name}, Thuộc thể loại: {type}, Giá ban đầu: {price}$</p>
            <div>
                Giá lúc sau: {pricex} $
            </div>
            <button onClick={changePrice} style={{ border: '1px solid black', borderRadius: '20px', padding: '20px', margin: '20px', backgroundColor: 'red', color: 'white', fontSize: '15px', cursor: 'pointer' }}>
                Tăng giá
            </button>
        </div>

    )
}

export default ProductCard