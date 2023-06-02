import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default function App() {
  return (
    <div className="app-body">
      <div className="container">
        <div className="App p-3">
          <div className="row">
            <div className="col-lg-2">
              <div className="d-flex flex-column">
                <div>Logo</div>
                <div>TRANSACTIONS</div>
                <div>STATISTICS</div>
                <div>PRODUCT</div>
                <div>CATEGORY</div>
              </div>
            </div>
            <div className="col-lg-6"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
