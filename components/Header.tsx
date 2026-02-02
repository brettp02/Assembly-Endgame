export default function Header() {
    return (
        <div className={'flex items-center flex-col gap-3'}>
            <h1 className={'text-3xl font-semibold text-pretty'}>Assembly: Endgame</h1>
            <p className={'text-center text-muted-foreground font-light leading-relaxed max-w-xl'}>Guess the programming language in under 8 attempts to keep the programming world safe from Assembly!</p>
        </div>
    )
}