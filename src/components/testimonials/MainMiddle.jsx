export default function MainMiddle() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <h1 className="font-bold text-3xl">Tetrips</h1>
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p>
                                    “점심 뭐먹음?”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-50"
                                    src="/images/hong.png"
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900">임홍균</div>
                                    <div className="mt-1 text-gray-500">백수</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <h1 className="font-bold text-3xl">Tetrips</h1>
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p>
                                    “그러게”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-50"
                                    src="/images/last.png"
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900">전현석</div>
                                    <div className="mt-1 text-gray-500">백수</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
