import Financeflow from "./components/finance-flow"
import Newcomponent from "./components/chart-component"
import Upgradepro from "./components/upgrade-pro"
import Summary from "./components/summary"
import RecentOrder from "./components/recent-order"
import HeadCard from "components/head-card";
import Calendar from "components/calendar";
export default function App() {

  return (

    <div className="app-body">
      <div className="container">
        <div className="App mt-5">
          <div className="row">
            <div className="col-lg-2 p-4 border-right">
              <div><svg id="logo-79" class="gradient" width="125" height="40" viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg">  <path class="ccustom" d="M88.861 37.225c.759 0 1.208-.575 1.208-1.474 0-.932-.482-1.474-1.192-1.474-.406 0-.688.18-.899.466h-.01V33.27h-.44v3.873h.44v-.368h.01c.228.314.504.45.883.45Zm-.032-.369c-.596 0-.889-.471-.889-1.1 0-.606.282-1.105.894-1.105.531 0 .786.477.786 1.105 0 .634-.255 1.1-.791 1.1Zm1.983 1.214c.341 0 .558-.12.785-.7l1.198-3.028h-.466l-.64 1.745c-.086.233-.184.547-.184.547h-.01s-.104-.314-.19-.547l-.661-1.745h-.477l1.094 2.72-.108.276c-.108.271-.233.342-.417.342a.616.616 0 0 1-.298-.06h-.022v.39c.12.049.228.06.396.06Zm3.106-.927h.737V33.27h-.737v3.873Zm2.539.082c.861 0 1.452-.64 1.452-1.469 0-.829-.59-1.468-1.452-1.468-.861 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.704-.363-.704-.905 0-.541.249-.91.704-.91.45 0 .704.369.704.91 0 .542-.254.905-.704.905Zm3.019 1.43c.412 0 .769-.097 1.002-.314.206-.19.331-.455.331-.845v-2.568h-.71v.293h-.011c-.168-.233-.422-.369-.77-.369-.703 0-1.202.531-1.202 1.36 0 .84.607 1.327 1.225 1.327.352 0 .563-.14.725-.325h.017v.304c0 .379-.2.58-.618.58-.341 0-.498-.136-.558-.31h-.731c.075.542.541.867 1.3.867Zm-.01-1.706c-.38 0-.63-.276-.63-.748 0-.466.25-.758.624-.758.444 0 .661.346.661.753 0 .412-.19.753-.656.753Zm3.134.84c.861 0 1.452-.64 1.452-1.469 0-.829-.591-1.468-1.452-1.468-.862 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.705-.363-.705-.905 0-.541.25-.91.705-.91.449 0 .704.369.704.91 0 .542-.255.905-.704.905Zm1.794.482h.737v-2.779h-.737v2.78Zm0-3.212h.737v-.661h-.737v.66Zm1.212 4.122h.737V36.83h.01c.158.239.412.396.802.396.715 0 1.203-.57 1.203-1.469 0-.867-.471-1.468-1.208-1.468a.972.972 0 0 0-.818.423h-.016v-.347h-.71v3.69Zm1.392-1.44c-.439 0-.672-.331-.672-.835 0-.498.185-.894.645-.894.455 0 .639.368.639.894s-.238.834-.612.834Zm2.83.612c.693 0 1.17-.336 1.17-.894 0-.65-.515-.78-.981-.878-.395-.081-.763-.103-.763-.341 0-.2.189-.31.476-.31.315 0 .504.11.537.407h.666c-.054-.558-.46-.92-1.192-.92-.634 0-1.132.286-1.132.888 0 .606.487.742.986.84.379.075.731.102.731.368 0 .195-.184.32-.509.32-.33 0-.558-.141-.607-.461h-.682c.043.59.493.98 1.3.98Zm3.968-.082v-2.779h-.737v1.604c0 .368-.212.628-.558.628-.314 0-.461-.179-.461-.504v-1.728h-.731v1.853c0 .607.347 1.002.964 1.002.39 0 .607-.146.797-.4h.016v.324h.71Zm.476 0h.737V35.53c0-.369.2-.607.498-.607.271 0 .428.163.428.477v1.744h.737V35.53c0-.369.19-.607.499-.607.271 0 .428.163.428.477v1.744h.737v-1.869c0-.607-.331-.986-.916-.986-.352 0-.645.184-.834.488h-.011a.83.83 0 0 0-.77-.488.908.908 0 0 0-.807.45h-.016v-.374h-.71v2.78Z" fill="#E5708C"></path>  <path d="M118.481 2.149c0-1.183.959-2.143 2.142-2.143h1.429a2.142 2.142 0 0 1 0 4.286h-1.429a2.142 2.142 0 0 1-2.142-2.143ZM58.49 14.29c0 7.888-6.394 14.283-14.283 14.283-7.888 0-14.283-6.395-14.283-14.283C29.924 6.4 36.319.007 44.207.007 52.096.007 58.49 6.4 58.49 14.29Zm-31.352-.071c.79 0 1.436.64 1.357 1.426A14.283 14.283 0 1 1 12.857.007c.785-.08 1.426.568 1.426 1.356V12.79c0 .79.64 1.429 1.429 1.429h11.426ZM78.487 31.43a4.285 4.285 0 1 1 0 8.57h-7.141a4.285 4.285 0 0 1 0-8.57h7.141Zm-4.285-2.857c7.889 0 14.284-6.395 14.284-14.283a14.22 14.22 0 0 0-1.789-6.925l2.36-2.36a2.928 2.928 0 1 0-4.142-4.14l-2.06 2.06A14.22 14.22 0 0 0 74.201.006C66.314.007 59.92 6.4 59.92 14.29c0 7.888 6.395 14.283 14.283 14.283Zm44.279-14.283c0 7.888-6.395 14.283-14.284 14.283-7.888 0-14.283-6.395-14.283-14.283 0-7.89 6.395-14.283 14.283-14.283 7.889 0 14.284 6.394 14.284 14.283Z" fill="url(#gradient_a1234)"></path>  <defs>    <linearGradient id="gradient_a1234" x1="0" y1="16" x2="119" y2="16" gradientUnits="userSpaceOnUse">      <stop class="ccompli1" stop-color="#64C2DB"></stop>      <stop class="ccompli2" offset=".307" stop-color="#7476ED"></stop>      <stop class="ccustom" offset=".604" stop-color="#C994DF"></stop>      <stop class="ccompli1" offset="1" stop-color="#E56F8C"></stop>    </linearGradient>  </defs></svg></div>
              <div className="d-flex flex-column justify-content-center  gap-3 h-100 ">

                <div className="d-flex gap-3"><div> <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg></div>
                  <div className="fw-bold left-menu-title">SUMMARY</div>
                </div>

                <div className="d-flex gap-3">
                  <div><svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                  </div>
                  <div className="fw-bold left-menu-title">TRANSACTIONS</div>
                </div>
                <div className="d-flex gap-3">
                  <div>
                    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </div>
                  <div className="fw-bold left-menu-title">STATISTICS</div>
                </div>
                <div className="d-flex gap-3">
                  <div>
                    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                  <div className="fw-bold left-menu-title">PRODUCT</div>
                </div>
                <div className="d-flex gap-3">
                  <div><svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  </div>
                  <div className="fw-bold left-menu-title">CATEGORY</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4">
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
                  <div className="col-lg-4 col-4 d-flex">
                    <HeadCard headTitle="Customers" headPrice="54.233" />
                  </div>

                  <div className="col-lg-4 col-4 d-flex">
                    <HeadCard headTitle="Income" headPrice="$980.632" />
                  </div>

                  <div className="col-lg-4 col-4 d-flex">
                    <HeadCard headTitle="Products Sold" headPrice="5.940" />
                  </div>


                </div>
              </div>
              <div className="mt-3 h2 fw-bold">
                Marketplace
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="d-flex gap-3 bg-light data-analytics special-rounded">
                    <div className="d-flex flex-column gap-3">
                      <div className="bg-light special-rounded d-flex flex-column p-4"><p> Data Analytics <br />
                        Overwiev
                      </p>
                        <p>
                          See how your account grow and how you can boost it.
                        </p>
                      </div>

                    </div>
                    <div className="p-4 bg-light special-rounded">
                      <Newcomponent />
                    </div>
                  </div>
                  <Financeflow />
                </div>
                <div className="col-lg-4">
                  <Upgradepro />
                </div>

              </div>
              <div>
                <RecentOrder title="Recent Orders" seebtn="SEE ALL" />
              </div>
            </div>
            <div className="col-lg-4 special-rounded summary p-4">
              <Summary title="Summary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
