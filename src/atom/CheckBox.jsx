const CheckBox = (props) => {
    return (
        <>
            {props.check ? (
                <div style={{width:"22px", height:"22px", backgroundColor:"#03c75a"}} className="flex items-center justify-center rounded-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico_check--3-_9ZRQGKX"><path d="M12.945 4L14.1 5.154 6.387 12.8 2 8.4l1.155-1.153 3.232 3.246L12.945 4z" fill="#ffffff"></path></svg>
                </div>
            ):(
                <div style={{width:"22px", height:"22px", backgroundColor:"white"}} className="flex items-center justify-center border border-gray-300 rounded-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico_check--3-_9ZRQGKX"><path d="M12.945 4L14.1 5.154 6.387 12.8 2 8.4l1.155-1.153 3.232 3.246L12.945 4z" fill="#C7CACD"></path></svg>
                </div>
            )}
        </>
    )
}
export default CheckBox