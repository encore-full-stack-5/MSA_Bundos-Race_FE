const ProductDetail = () => {
    const testImageArr = ["", "", "", ""];

    return (
        <>
            <div style={{ paddingLeft:"13vw", paddingRight:"13vw"}}>
                <div className="border border-gray-300 mt-5 mb-5 flex flex-row">
                    <div className="flex flex-col justify-start flex-1 border-r border-gray-300">
                        <img 
                            src=""
                            alt=""
                            className="w-full aspect-square"
                        />
                        <div className="flex flex-row gap-0.5 justify-center mt-4">
                            {testImageArr.map((e, i) => (
                                <div id={"thumbnail"+i} onClick={() => {}} className='cursor-pointer'>
                                    <img 
                                        src={e}
                                        alt=""
                                        className="w-10 aspect-square"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start flex-1">
                        <div className="p-6">
                            <div className="font-bold text-lg">
                                상품이름
                            </div>
                            <div className="mt-4 mb-4 flex flex-row justify-between items-center">
                                <div className="text-red-500 text-3xl">
                                    85%
                                </div>
                                <div className="flex flex-row items-center font-bold">
                                    <div className="text-2xl text-gray-400 line-through decoration-2">
                                        10000원
                                    </div>
                                    <div className="text-3xl">
                                        10000원
                                    </div>
                                </div>
                            </div>
                            <div>
                                옵션박스
                            </div>
                            <div>
                                구매박스
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail