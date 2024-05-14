import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ShoppingMyBox from "./ShoppingMyBox"

const MainNavBar = () => {
    const [myBox, setMyBox] = useState(false);
    const navigate = useNavigate(); 

    const myBoxToggle = () => {
        document.addEventListener("click", (e) => {
            if(e.target.id === "myBoxButton") setMyBox(true);
            else setMyBox(false);
        });
    }
    const MyBoxCategory = () => {
        return myBox && (
            <ShoppingMyBox />
        );
    }

    const login = () => {
        window.location.href = 
            "http://192.168.0.12:5173/signin?redirect="
            + window.location.origin
            + "/login?redirect="
            + window.location.pathname;
    }
    const logout = () => {
        localStorage.removeItem("uuid");
        alert("로그아웃 되었습니다.");
        window.location.reload();
    }

    const gotoMyCart = () => {
        if (localStorage.getItem("uuid"))
            navigate("/my/cart");
        else
            alert("로그인이 필요한 서비스입니다.");
    }

    useEffect(() => {
        myBoxToggle();
    },[]);


    return (
        <>
            <div 
                style={{height:"100px", background: "#00ab33 url(https://shopv.pstatic.net/web/r/20240424172058/_next/static/img/bg/header/gnb/bg_gheader.jpg) repeat 100% 0"}}
                className="w-full"
            >
                <div
                    style={{backgroundColor: "rgba(0, 0, 0, 0.12)"}} 
                    className="flex flex-col w-full h-full text-white text-xs font-bold"
                >
                    <div 
                        style={{paddingLeft:"12vw", paddingRight:"12vw", marginLeft:"1vw", marginRight:"1vw", flex: "0.35"}}
                        className="flex flex-row justify-between items-center border-b border-opacity-30 border-gray-500"
                    >
                        <Link to={"http://192.168.0.16:3001/"}>
                        <div className="font-extrabold">{/*onClick={() => {window.open("http://www.naver.com")}}>*/}
                            NAVER
                        </div>
                        </Link>
                        <div className="flex flex-row gap-4">
                            <div onClick={gotoMyCart} className="flex flex-row gap-1 cursor-pointer">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" class="_gnbHeader_icon_3CZKN"><mask id="IconGradationBasket19x19White_svg__b0qe6nlcCLa" maskUnits="userSpaceOnUse" x="-0.944" y="0.583" width="20" height="19" fill="#000"><path fill="#fff" d="M-.944.583h20v19h-20z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.493 1.583a4.004 4.004 0 00-4.004 4.004v.747H2.191c-.731 0-1.272.67-1.105 1.37l2.265 9.502a.97.97 0 00.948.739h10.402a.97.97 0 00.948-.74l2.265-9.501c.167-.7-.373-1.37-1.105-1.37h-3.312v-.747a4.004 4.004 0 00-4.004-4.003zm2.948 4.75v-.746a2.948 2.948 0 10-5.897 0v.747h5.898z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M9.493 1.583a4.004 4.004 0 00-4.004 4.004v.747H2.191c-.731 0-1.272.67-1.105 1.37l2.265 9.502a.97.97 0 00.948.739h10.402a.97.97 0 00.948-.74l2.265-9.501c.167-.7-.373-1.37-1.105-1.37h-3.312v-.747a4.004 4.004 0 00-4.004-4.003zm2.948 4.75v-.746a2.948 2.948 0 10-5.897 0v.747h5.898z" fill="#fff"></path><path d="M14.382 6.833a.5.5 0 100-1v1zm-.885-1a.5.5 0 100 1v-1zm.885 0h-.885v1h.885v-1zm-8.893.5v1a1 1 0 001-1h-1zm-4.403 1.37l-.973.233.973-.232zm2.265 9.503l.973-.232-.973.232zm12.298 0l.973.232-.973-.232zm2.265-9.502l-.973-.232.973.232zm-4.417-1.37h-1a1 1 0 001 1v-1zm-1.056 0v1a1 1 0 001-1h-1zm-5.897 0h-1a1 1 0 001 1v-1zm-.055-.747a3.004 3.004 0 013.004-3.003v-2a5.004 5.004 0 00-5.004 5.003h2zm0 .747v-.747h-2v.747h2zm-1.43 1h.43v-2h-.43v2zm-2.868 0h2.868v-2H2.19v2zm-.132.138a.096.096 0 01.021-.088c.024-.03.06-.05.11-.05v-2C.837 5.334-.207 6.586.114 7.936l1.946-.464zm2.265 9.502L2.06 7.472l-1.946.464 2.266 9.502 1.945-.464zm-.025-.03h.002l.002.001.006.004a.038.038 0 01.008.009c.003.004.006.01.007.016l-1.945.464a1.97 1.97 0 001.92 1.507v-2zm10.402 0H4.299v2h10.402v-2zm-.025.03a.053.053 0 01.007-.016.038.038 0 01.008-.01.024.024 0 01.006-.003h.003v2a1.97 1.97 0 001.922-1.507l-1.946-.464zm2.265-9.502l-2.265 9.502 1.946.464 2.265-9.502-1.946-.464zm-.132-.138c.051 0 .087.02.111.05a.096.096 0 01.021.088l1.946.464c.322-1.35-.722-2.602-2.078-2.602v2zm-3.312 0h3.312v-2h-3.312v2zm-1-1.747v.747h2v-.747h-2zM9.493 2.584a3.004 3.004 0 013.004 3.003h2A5.004 5.004 0 009.493.583v2zm3.948 3.75v-.747h-2v.747h2zm0-.747A3.948 3.948 0 009.493 1.64v2c1.076 0 1.948.872 1.948 1.948h2zM9.493 1.64a3.948 3.948 0 00-3.949 3.948h2c0-1.076.873-1.948 1.949-1.948v-2zM5.544 5.587v.747h2v-.747h-2zm1 1.747h.146v-2h-.146v2zm.146 0h1.313v-2H6.69v2zm1.313 0h2.944v-2H8.003v2zm2.944 0h1.365v-2h-1.365v2zm1.365 0h.13v-2h-.13v2z" fill="#000" fill-opacity="0.1" mask="url(#IconGradationBasket19x19White_svg__b0qe6nlcCLa)"></path></svg>
                                <div className="content-center">
                                    장바구니
                                </div>
                            </div>
                            <div
                                style={{backgroundColor:"rgba(255, 255, 255, 0.05)", fontSize:"9pt"}}
                                className="p-0.5 pl-1 pr-1 border border-opacity-60 border-gray-500 font-normal cursor-pointer"
                                onClick={localStorage.getItem("uuid") ? logout : login}>
                                {localStorage.getItem("uuid") ? "로그아웃" : "로그인"}
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{paddingLeft:"12vw", paddingRight:"12vw", marginLeft:"1vw", marginRight:"1vw", flex: "0.65"}}
                        className="flex flex-row justify-between items-center"
                    >
                        <div className="flex flex-row gap-6 items-center">
                            <Link to={"/home"}>
                            <svg width="68" height="28" viewBox="0 0 68 28" fill="none" class="_gnbLogo_icon_1qTFT">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M64.04 15.643h2.096V4H64.04v11.643zm-7.784 4.304v.603c0 1.033 1.561 2.11 3.978 2.11 2.416 0 3.977-1.077 3.977-2.11v-.603c0-1.033-1.56-2.109-3.977-2.109s-3.978 1.076-3.978 2.11zm-2.032-7.339h3.144V6.862h-3.144v5.746zm-.042 8.093v-.883c0-2.066 2.288-3.723 6.052-3.723s6.052 1.679 6.052 3.723v.883c0 2.001-2.267 3.701-6.052 3.701-3.764 0-6.052-1.678-6.052-3.701zm-3.786-6.35v-1.743h1.818V6.862h-1.69V5.12h10.672v1.743h-1.818v5.682c.92-.065 1.732-.13 2.588-.258l.171 1.743c-1.54.258-3.785.323-6.395.323h-5.346zm-9.349-3.507c-.214.495-1.091 1.248-2.524 2.174a79.717 79.717 0 01-4.384 2.625l-1.048-1.678c1.711-.947 3.059-1.722 4.491-2.69 1.947-1.335 2.395-2.26 2.395-4.369V5.227h2.14v1.68c0 2.108.32 2.99 2.63 4.518 1.347.883 2.587 1.593 4.277 2.518L47.997 15.6c-1.582-.903-3.143-1.807-4.427-2.625-1.39-.883-2.267-1.636-2.502-2.13h-.021zm9.047 8.544v1.808H32v-1.808h5.133v-3.917h2.096v3.917h3.635v-3.917h2.096v3.917h5.133zM27 1H1v26h26V1zM11.303 7l5.19 7.493V7H21v14h-4.303l-5.19-7.493V21H7V7h4.303z" fill="#fff"></path>
                            </svg>
                            </Link>
                            <div className="flex flex-row items-center">
                                <input style={{minWidth:"260px", height:"32px"}}/>
                                <Link to={"/search/category/"}>
                                <svg width="50" height="34" viewBox="0 0 50 34" fill="none" class="_searchInput_icon_DaIWa">
                                    <path fill="#00C73C" stroke="#00A030" d="M.5.5h49v33H.5z"></path><g filter="url(#IconMagnifierBox50x34Green_svg__filter0_d_4_5922)" stroke="#fff" stroke-width="2"><path d="M28 20l6 5"></path><circle cx="23.5" cy="15.5" r="6.5"></circle></g><defs><filter id="IconMagnifierBox50x34Green_svg__filter0_d_4_5922" x="14" y="6" width="22.64" height="21.768" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_5922"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_4_5922" result="shape"></feBlend></filter></defs>
                                </svg>
                                </Link>
                                <Link to={"/search/category/"}>
                                <div className="pl-2 text-sm">검색</div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 relative">
                            <div id="myBoxButton" className="cursor-pointer text-sm">쇼핑MY</div>
                            <div style={{fontSize:"5pt"}}>▼</div>
                            <MyBoxCategory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainNavBar