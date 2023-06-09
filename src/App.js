import "./scss/styles.scss";
import "./scss/reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

<Doughnut data={...} />
export default function App() {
  
  return (
    
    <div className="app-body">
      <div className="container">
        <div className="App p-3 mt-5">
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
            <div className="col-lg-6">
              <div className="middle-section">
                <div className="d-flex justify-content-between">
                  <h1>Bussines Dashboard</h1>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="first-block text-center p-3">
                      <p>Customers</p>
                      <p>54.323</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="second-block text-center p-3">
                      <p>Income</p>
                      <p>$980.632</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="third-block text-center p-3">
                      <p>Products Sold</p>
                      <p>5.940</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 h2 fw-bold">
                Marketplace
              </div>
              <div className="d-flex gap-3 bg-light">
                <div className="d-flex flex-column gap-3">
                  <div className="bg-light special-rounded d-flex flex-column p-4"><p> Data Analytics <br />
                    Overwiev
                  </p>
                    <p>
                      See how your account grow and how you can boost it.
                    </p>
                  </div>

                </div>
                <div className="p-4 bg-light">
                  Start
                </div>
              </div>
              <div className="bg-light special-rounded p-4 mt-3">
                Finance flow
              </div>
            </div>
            <div className="col-lg-4">
              <div className="summary">
                <h2>
                  Summary
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
