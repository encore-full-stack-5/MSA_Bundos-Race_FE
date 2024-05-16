const TopButton = (props) => {

    const gotoTop = () => {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (scroll){
            window.requestAnimationFrame(() =>{
                window.scrollTo(0, scroll - scroll/10);
                gotoTop();
            });
        }
    }

    return (
        <div id="topButton"
            className="fixed right-5 bottom-5 w-11 h-11 border border-stone-300 cursor-pointer flex items-center justify-center"
            style={{right:props.right||"20px", bottom:props.bottom||"20px"}}
            onClick={gotoTop}
        >
            <div style={{
                backgroundImage:"url(https://static-resource-smartstore.pstatic.net/smartstore/p/static/20240503114051/img/sprite/svg/spArrow_svg.svg)",
                backgroundSize:"243px 235px",
                backgroundPosition:"-135px -69px",
                width:"20px",
                height:"10px"
            }} />
        </div>
    )
}
export default TopButton