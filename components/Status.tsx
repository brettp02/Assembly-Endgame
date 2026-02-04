export default function Status({gameStatus}: {gameStatus: 'won' | 'lost' | 'alive'}) {
    const statusConfig = {
        won: {
            header: 'You win!',
            paragraph: 'Well done! 🎉',
            background: 'bg-green-700/90'
        },
        lost: {
            header: 'Game over!',
            paragraph: 'You lose! Better start learning Assembly 😭',
            background: 'bg-red-700/90'
        },
        alive: {
            header: '',
            paragraph: '',
            background: 'bg-transparent'
        }
    }

    const { header, paragraph, background } = statusConfig[gameStatus]

    return (
        <section className={`mt-8 ${background} w-xl h-[10vh] rounded-xl flex flex-col items-center justify-center shadow-2xl gap-2 text-center`}>
            {gameStatus !== 'alive' && (
                <>
                    <h2 className={'text-2xl'}>{header}</h2>
                    <p className={'text-xl text-foreground font-extralight'}>{paragraph}</p>
                </>
            )}
        </section>
    )
}