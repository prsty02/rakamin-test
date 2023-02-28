const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full pt-10">
            <div className="flex flex-col justify-center items-center shadow border rounded-xl w-3/4 h-3/4 md:w-1/3 md:h-1/3 p-3">
                <div className="flex justify-center pb-5">
                    <h1 className="text-2xl font-bold border-b shadow">Contact Me!</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-xl">
                        <a href="https://www.linkedin.com/in/yadhit-prasetya-2857b5185/" target="_blank" rel="noreferrer">Linkedin</a>
                    </div>
                    <div className="text-xl ">
                        <a href="https://instagram.com/prst_y02?igshid=YmJhNjkzNzY=" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                    <div className="text-xl">
                        <a href="https://line.me/ti/p/NE_w8JKFyE" target="_blank" rel="noreferrer">Line</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact