import { useState, useEffect } from "react";
export default function Summary({ title }) {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setFilteredUsers(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearchQuery(searchValue);

        const filteredData = users.filter((user) => {
            const { street } = user.address;
            return street.includes(searchValue);
        });
        setFilteredUsers(filteredData)
    }
    return (
        <div>
            <div>
                <p className="title h2 fw-bold">{title}</p>
            </div>
            <div className="summary-container special-rounded p-4 section-xs">
                <div className="d-flex justify-content-between">
                    <div>Your Balance</div>
                    <div>:</div>
                </div>
                <div className="fw-bold h2 mt-3">$10 632.00</div>
                <div className="summary-plus d-flex justify-content-center align-items-center">
                    +
                </div>
                <div className="d-flex gap-5 mt-4">
                    <div className="left d-flex gap-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="green" color="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        $3,250.07
                    </div>
                    <div className="right">
                        <div className="d-flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="red" color="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                $1,062.90
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-lg">
                <div className="d-flex justify-content-between border-bottom">
                    <div className="fw-bold h5">
                        Activity
                    </div>
                    <div className="fw-bold text-secondary-emphasis fs-6">
                        SEE ALL
                    </div>
                </div>
            </div>
            <div className="section-lg">
                <div>
                    <h1>Users</h1>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search by street..."
                    />
                    {filteredUsers.length === 0 ? (
                        <div>No users found.</div>
                    ) : (
                        filteredUsers.map((user) => (
                            <div key={user.id}>{user.address.street}</div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}