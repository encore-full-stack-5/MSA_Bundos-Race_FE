import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import SearchProductItem from '../components/SearchProductItem'
import TopButton from '../components/TopButton'
import axios from "axios";
import { useRecoilValue } from 'recoil';
import { address } from '../store/address';
import { useSearchParams  } from "react-router-dom"

const ProductSearch = () => {
    const testBrandArr = ["오뚜기", "CJ", "청정원", "풀무원", "농심", "동원"];

    const [brandFilter, setBrandFilter] = useState(null);
    const [orderBy, setOrder] = useState(1);
    const [data, setData] = useState({});
    const [searchParams] = useSearchParams();
    const link = useRecoilValue(address);

    const getData = async () => {
        try {
            const params = {categoryId:searchParams.get("id")};
            const response = await axios.get(
                link + "/products?page=1&size=10&sortBy=price&direction=DESC&categoryId=" + searchParams.get("id"),
                {params}
            );
            console.log(response.data);
            setData(response.data);
        } catch(error) {
            alert("상품 정보를 불러오는데 오류가 발생했습니다.")
        }
    }

    const changeOrder = (n) => {
        const beforeOrder = document.getElementById("order"+orderBy);
        beforeOrder.style.color = "rgb(140,140,140)"
        setOrder(n);
        const afterOrder = document.getElementById("order"+n);
        afterOrder.style.color = "black"
    }
    const changeBrandFilter = (n) => {
        if (brandFilter != null){
            const beforeBrand = document.getElementById("brand"+brandFilter);
            beforeBrand.style.color = "rgb(55,65,81)"
            beforeBrand.style.fontWeight = 400;
        }
        if (brandFilter === n) {
            setBrandFilter(null);
        } else {
            setBrandFilter(n);
            const afterBrand = document.getElementById("brand"+n);
            afterBrand.style.color = "black"
            afterBrand.style.fontWeight = 600;
        }
    }

    useEffect(() => {
        getData();
        changeOrder(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div 
                style={{paddingLeft:"13vw", paddingRight:"13vw"}} 
                className="flex flex-col">
                <div className='pt-3 pb-3 text-sm font-bold'>
                    {"카테고리명"}
                </div>
                <div>
                    <div className="w-auto bg-white flex flex-row text-white text-sm items-center">
                        <div style={{width:"160px", height:"43px", backgroundColor:"rgb(82, 95, 120)"}}
                            className="flex items-center pl-5">
                            브랜드
                        </div>
                        <div style={{fontSize:"10pt"}} className="flex gap-6 pl-5 text-gray-700 text-sm">
                            {testBrandArr.map((brand, i) => (
                                <div id={"brand"+i} onClick={() => changeBrandFilter(i)} className='cursor-pointer'>
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-auto bg-white flex flex-row text-white text-sm items-center">
                        <div style={{width:"160px", height:"43px", backgroundColor:"rgb(82, 95, 120)"}}
                            className="flex items-center pl-5">
                            가격
                        </div>
                        <div style={{fontSize:"10pt"}} className="flex gap-1 pl-5 text-black">
                            <div>직접입력</div>
                            <input className="w-32 border border-gray-300"/>
                            <div>~</div>
                            <input className="w-32 border border-gray-300"/>
                            <Link>
                                <div style={{width:"25px", height:"25px", 
                                    backgroundImage:"url(https://ssl.pstatic.net/shoppingsearch/static/pc/pc-240425-120020/img/sprite/png/spSearch.png)", 
                                    backgroundSize:"255px 251px",
                                    backgroundPosition:"-64px -32px"
                                }}></div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        style={{fontSize:"10pt", color:"rgb(140,140,140)"}}
                        className="pt-5 pb-3 flex flex-row gap-3">
                        {/* <div id="order0" onClick={() => changeOrder(0)} className='cursor-pointer'>
                            · 판매 많은순
                        </div> */}
                        <div id="order1" onClick={() => changeOrder(1)} className='cursor-pointer'>
                            · 낮은 가격순
                        </div>
                        <div id="order2" onClick={() => changeOrder(2)} className='cursor-pointer'>
                            · 높은 가격순
                        </div>
                        <div id="order3" onClick={() => changeOrder(3)} className='cursor-pointer'>
                            · 리뷰 많은순
                        </div>
                        <div id="order4" onClick={() => changeOrder(4)} className='cursor-pointer'>
                            · 리뷰 좋은순
                        </div>
                        <div id="order5" onClick={() => changeOrder(5)} className='cursor-pointer'>
                            · 등록일순
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        {data.content?.map((e, i) => (
                            <div key={i}>
                                <SearchProductItem 
                                    img={e.image}
                                    link={"/products?id=" + e.productId}
                                    name={e.productName}
                                    price={e.price}
                                    delivery={e.deliveryPrice}
                                    seller={e.sellerName}
                                    // reviewCount={e.reviewCount}
                                    // sellCount={e.sellCount}
                                    createdAt={e.createdAt?.substr(0,7)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <TopButton />
        </>
    )
}
export default ProductSearch