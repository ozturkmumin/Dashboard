export default function HeadCard({headTitle, headPrice}) {
    return (
        <div className="third-block text-center p-3">
            <p>{headTitle}</p>
            <p>{headPrice}</p>
        </div>
    )
}