
export default function App() {
    const upgradeimg = require('img/upgrade-pro/upgrade-item.jpg')
    return (
        <div className="d-flex flex-column justify-content-center align-items-center upgrade-pro h-100 special-rounded mt-lg-0 mt-3 p-3">
              <div className='primary fw-bold border-bottom'>UPGRADE TO PRO</div>
              <div>
                <img className='mw-100' src={upgradeimg}  />
              </div>
              <p className='fw-bold'>
                $29 p/m
              </p>
              <p className='text-center fw-light upgrade-small-text'>
                100% insurance for your goods 
              </p>
        </div>
    )

}