const MoviesSection = () => {
    return (
        <section className="py-12 md:py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 flex items-center justify-center gap-2">
                        <span className="text-gradient-orange">Lançamentos</span> e Sucessos
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                        {/* Deadpool & Wolverine Poster */}
                        <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[2/3] md:aspect-video md:h-96 mx-auto w-full max-w-lg cursor-pointer">
                            <img
                                src="/deadpool-wolverine.png"
                                alt="Deadpool & Wolverine"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-orange-500 font-bold text-sm mb-1">LANÇAMENTO</span>
                                <h4 className="text-white text-2xl font-bold">Deadpool & Wolverine</h4>
                            </div>
                        </div>

                        {/* Avengers Poster */}
                        <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[2/3] md:aspect-video md:h-96 mx-auto w-full max-w-lg cursor-pointer">
                            <img
                                src="/avengers.png"
                                alt="Avengers"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-orange-500 font-bold text-sm mb-1">SUCESSO DE BILHETERIA</span>
                                <h4 className="text-white text-2xl font-bold">The Avengers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoviesSection;

