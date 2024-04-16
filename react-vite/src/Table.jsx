import PropTypes from 'prop-types';
import { useState } from 'react';

const Table = ({ data }) => {
    // Menentukan jumlah data per halaman
    const itemsPerPage = 5;

    // State untuk menyimpan indeks data yang akan ditampilkan
    const [currentPage, setCurrentPage] = useState(1);

    // Menghitung indeks data yang akan ditampilkan
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    // Menghitung jumlah halaman
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Fungsi untuk berpindah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Generate array untuk menampilkan nomor halaman
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="col-span-12 mt-5">
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div className="bg-white p-4 shadow-lg rounded-lg relative">
                    <h1 className="font-bold text-base">Tabel Summary Data Lokomotif</h1>
                    <div className="mt-4">
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto">
                                <div className="py-2 align-middle inline-block min-w-full">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">No</th>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Timestamps</th>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total Aktif</th>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total Nonaktif</th>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total Maintenance</th>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Jumlah Total</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {currentData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-center">{index + 1}</td>
                                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-center">{item.timestamps}</td>
                                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-center">{item.totalAktif}</td>
                                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-center">{item.totalNonaktif}</td>
                                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-center">{item.totalMaintenance}</td>
                                                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-center">{item.totalLoko}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="mr-2 px-2 py-1 bg-gray-200 rounded-md text-xs"
                        >
                            Previous
                        </button>
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`mx-1 px-2 py-1 rounded-md ${currentPage === number ? 'bg-gray-500 text-white' : 'bg-gray-200 text-xs'}`}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={indexOfLastItem >= data.length}
                            className="ml-2 px-2 py-1 bg-gray-200 rounded-md text-xs"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Table;
