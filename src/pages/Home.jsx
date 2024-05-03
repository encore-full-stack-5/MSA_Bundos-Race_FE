import HomeCategoryBox from '../atom/HomeCategoryBox'

const Home = () => {
    return (
        <>
            <div className='bg-gray-100 h-full'
                style={{ paddingLeft:"13vw", paddingRight:"13vw", paddingTop:"20px"}}>
                <div className="w-auto h-80 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400">
                    기획 배너
                </div>
                <div className="w-auto h-52 mt-5 rounded-xl bg-white grid grid-flow-row grid-cols-8 place-content-around place-items-center">
                    <HomeCategoryBox name="여성패션" link="/search/category/1" img="https://shop-phinf.pstatic.net/20240306_23/1709702705688NAHTk_PNG/EC97ACEC84B1ED8CA8EC8598.png?type=f305_305"/>
                    <HomeCategoryBox name="남성패션" link="/search/category/2" img="https://shop-phinf.pstatic.net/20240306_252/1709702719989DXRdL_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305"/>
                    <HomeCategoryBox name="디지털" link="/search/category/3" img="https://shop-phinf.pstatic.net/20230713_206/1689225454235nao23_PNG/E18483E185B5E1848CE185B5E18490E185A5E186AF_156x156%2B1.png?type=f305_305"/>
                    <HomeCategoryBox name="식품" link="/search/category/4" img="https://shop-phinf.pstatic.net/20240306_261/1709702730673ClvEn_PNG/EC8B9DED9288.png?type=f305_305"/>
                    <HomeCategoryBox name="화장품/미용" link="/search/category/5" img="https://shop-phinf.pstatic.net/20230821_239/1692612480506iJg6h_PNG/ED9994EC9EA5ED9288_156x156%2B1.png?type=f305_305"/>
                    <HomeCategoryBox name="출산/유아동" link="/search/category/6" img="https://shop-phinf.pstatic.net/20230821_125/1692614042158XBFnC_PNG/E1848EE185AEE186AFE18489E185A1E186AB%2BE1848BE185B2E184.png?type=f305_305"/>
                    <HomeCategoryBox name="반려동물···" link="/search/category/7" img="https://shop-phinf.pstatic.net/20230713_203/1689225466277ySJ2w_PNG/E18487E185A1E186ABE18485E185A7E18483E185A9E186BCE1848.png?type=f305_305"/>
                    <HomeCategoryBox name="스포츠/레저" link="/search/category/8" img="https://shop-phinf.pstatic.net/20240305_189/1709612696909MMNe5_PNG/EC8AA4ED8FACECB8A0EBA088ECA080.png?type=f305_305"/>
                    <HomeCategoryBox name="가구/인테···" link="/search/category/9" img="https://shop-phinf.pstatic.net/20230713_276/1689225480600aHp5D_PNG/E18480E185A1E18480E185AE%2BE1848BE185B5E186ABE18490E185.png?type=f305_305"/>
                    <HomeCategoryBox name="자동차/공구" link="/search/category/10" img="https://shop-phinf.pstatic.net/20230713_289/1689225474168Jy1aN_PNG/E1848CE185A1E18483E185A9E186BCE1848EE185A1%2BE18480E185.png?type=f305_305"/>
                    <HomeCategoryBox name="컴퓨터" link="/search/category/11" img="https://shop-phinf.pstatic.net/20230713_93/16892254994967n5ey_PNG/E1848FE185A5E186B7E18491E185B2E18490E185A5_156x156%2B1.png?type=f305_305"/>
                    <HomeCategoryBox name="가전" link="/search/category/12" img="https://shop-phinf.pstatic.net/20240308_260/17098610287622BPEx_PNG/EAB080ECA084.png?type=f305_305"/>
                    <HomeCategoryBox name="생활/주방···" link="/search/category/13" img="https://shop-phinf.pstatic.net/20230821_8/1692612755420sOSvR_PNG/EC839DED999CECA3BCEBB0A9_156x156%2B1.png?type=f305_305"/>
                    <HomeCategoryBox name="건강/의료···" link="/search/category/14" img="https://shop-phinf.pstatic.net/20230821_161/1692612765771IJhBQ_PNG/EAB1B4EAB095EC9D98EBA38C_156x156%2B1.png?type=f305_305"/>
                    <HomeCategoryBox name="취미/문구···" link="/search/category/15" img="https://shop-phinf.pstatic.net/20230821_210/1692612777988Rcpi0_PNG/ECB7A8EBAFB8EBACB8EAB5ACEC9585EAB8B0_156x156%2B1.png?type=f305_305"/>
                    <HomeCategoryBox name="친환경/인증" link="/search/category/16" img="https://shop-phinf.pstatic.net/20230821_211/1692613289666JlyIu_PNG/ECB99CED9998EAB2BD_156x156%2B1.png?type=f305_305"/>
                </div>
            </div>
        </>
    )
}
export default Home