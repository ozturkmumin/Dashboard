export default function RecentOrder({ title, seebtn }) {
    return (
        <div>
            <div className="d-flex justify-content-between  p-3">
                <p className="title">{title}</p>
                <p className="seebtn">{seebtn}</p>
            </div>
            <div className="d-flex justify-content-between border-top section-xs">
                <div className="mt-2">#1235465</div>
                <div className="mt-2">DJI Mavic Pro 2</div>
                <div className="mt-2">Sep 16, 2021</div>
                <div className="mt-2">$42.00</div>
                <div className="mt-2 text-success fw-bold">Delivered</div>
            </div>
            <div className="d-flex justify-content-between border-top section-xs">
                <div className="mt-2">#1235465</div>
                <div className="mt-2">DJI Mavic Pro 2</div>
                <div className="mt-2">Sep 16, 2021</div>
                <div className="mt-2">$42.00</div>
                <div className="mt-2 text-danger fw-bold">Canceled</div>
            </div>
        </div>
    )
}