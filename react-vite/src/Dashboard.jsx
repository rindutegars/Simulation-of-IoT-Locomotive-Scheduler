import { useState, useEffect } from "react";
import Card from "./Card";
import Table from "./Table";
import axios from "axios";

const Dashboard = () => {
    const [summaryData, setSummaryData] = useState([]);
    const [totalLoko, setTotalLoko] = useState(null);
    const [totalAktif, setTotalAktif] = useState(null);
    const [totalNonaktif, setTotalNonaktif] = useState(null);
    const [totalMaintenance, setTotalMaintenance] = useState(null);
    const [persenTotalLoko, setPersenTotalLoko] = useState(null);
    const [persenTotalAktif, setPersenTotalAktif] = useState(null);
    const [persenTotalNonaktif, setPersenTotalNonaktif] = useState(null);
    const [persenTotalMaintenance, setPersenTotalMaintenance] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8081/api/summary-loko/latest")
            .then((response) => {
                const data = response.data;
				setSummaryData(data);
                const latestData = data[0]; 
                setTotalLoko(latestData.totalLoko);
                setTotalAktif(latestData.totalAktif);
                setTotalNonaktif(latestData.totalNonaktif);
                setTotalMaintenance(latestData.totalMaintenance);
    
                // Menghitung persentase
                const total = latestData.totalLoko;
                setPersenTotalLoko(100); // Total lokomotif selalu 100%
                setPersenTotalAktif((latestData.totalAktif / total) * 100);
                setPersenTotalNonaktif((latestData.totalNonaktif / total) * 100);
                setPersenTotalMaintenance((latestData.totalMaintenance / total) * 100);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    

    return (
        <div>
            <div className="container mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card
                        title="Total Lokomotif"
                        value={totalLoko}
                        persen={persenTotalLoko}
                        style="bg-blue-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        }
                        iconStyle="text-blue-500" 
                    />
                    <Card
                        title="Total Status Aktif"
                        value={totalAktif}
                        persen={persenTotalAktif}
                        style="bg-green-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                        }
                        iconStyle="text-green-500"
                    />
                    <Card
                        title="Total Status Nonaktif"
                        value={totalNonaktif}
                        persen={persenTotalNonaktif}
                        style="bg-red-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        }
                        iconStyle="text-red-500"
                    />
                    <Card
                        title="Total Status Maintenance"
                        value={totalMaintenance}
                        persen={persenTotalMaintenance}
                        style="bg-yellow-500"
                        icon={  
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        }
                        iconStyle="text-yellow-500"
                    />
                </div>

                <Table data={summaryData}/>
                {/* Footer */}
                <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm">© 2024 Rindu Tegar Senjawati. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
