
export default function LanguageChip({name, bgColor, color, isLost}: {name: string; bgColor?: string, color?: string, isLost: boolean}) {
    return (
        <div style={{
            backgroundColor: isLost ? '#6b7280' : bgColor,
            color: isLost ? '#9ca3af' : color,
        }}
            className='px-2 py-1 relative'
        >
            <p className={`text-md font-semibold drop-shadow-xl ${isLost ? 'opacity-50' : ''}`}>{name}</p>
            {isLost && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">💀</span>
                </div>
            )}
        </div>
    )
}