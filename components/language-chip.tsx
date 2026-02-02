

export default function LanguageChip({name, bgColor, color}: {name: string; bgColor?: string, color?: string}) {
    return (
        <div style={{
            backgroundColor: bgColor,
            color: color
        }}
            className='px-2 py-1'
        >
            <p className={'text-md font-semibold drop-shadow-xl'}>{name}</p>
        </div>
    )
}