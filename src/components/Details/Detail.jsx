const Detail = () => {

    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-1/4 h-64 object-cover object-center rounded" src="/images/beer/bruery.jpg" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">D-Drinks</h2>
                        <h1 className="text-white text-3xl title-font font-medium mb-1">Ruslan Vodka</h1>
                        <p className="leading-relaxed"> Fav Liquare </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-white">$58.00</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail