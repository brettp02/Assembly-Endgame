

export default function LetterBox({letter}: {letter: string}) {
    return (
        <span className={'text-3xl border-b-2 flex items-center justify-center bg-gray-600/35 w-15 h-15 font-semibold'}>{letter.toUpperCase()}</span>
    )
}