/**
 * @author Ankit Kumar
 * @version 1.0
 * @copyright Ankit Kumar
 * @github https://github.com/ankit0696/
 * @createdAt 30 April 2023
 * @description
 *
 */

import StudentLayout from '@/components/student/StudentLayout'
import { API_URL } from '@/config/index'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

export default function LeavePage() {
  // Modal to apply for leave
  const [modal, setModal] = useState(true)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)



  // fetch all leaves for the current student
  const [leaves, setLeaves] = useState([])
  
  /**
   * Fetch all leaves for the current student
   * @returns {Promise<void>}
   * @memberof LeavePage
   */
  const getLeaves = async () => {
    try {
    const response = await axios.get(`${API_URL}/api/transactions?filters[student]=1`)
    setLeaves(response.data.data)
    } catch (error) {
      console.log(error)
      toast.error("Failed to fetch data")
    }
  }

  useEffect(() => {
    getLeaves()
  }, [])

  const [columnDefs] = useState([
    { headerName: 'S.No', valueGetter: "node.rowIndex + 1" },
    { field: 'attributes.reason', headerName: 'Reason' },
    { field: 'attributes.from_date', headerName: 'From Date' },
    { field: 'attributes.to_date', headerName: 'To Date' },
    { field: 'attributes.description', headerName: 'Description' },
    // Use date from UTC
    {field: 'attributes.createdAt', headerName: 'Applied On', valueFormatter: (params) => {
      return new Date(params.value).toLocaleDateString()
    }},
  ])

  const defaultColDef = useMemo(() => {
    return {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
    };
  }, []);

  return (
    <StudentLayout>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-xl font-semibold text-gray-900'>Leave</h1>
            <p className='mt-2 text-sm text-gray-700'>
              List of leave applications
            </p>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
            <button
              // On click, open the modal to apply for leave
              onClick={() => openModal()}
              type='button'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
            >
              Apply Leave
            </button>
          </div>
        </div>

        <div className='ag-theme-alpine' style={{ height: 400}}>
          <AgGridReact rowData={leaves} columnDefs={columnDefs} defaultColDef={defaultColDef}></AgGridReact>
        </div>
      </div>
    </StudentLayout>
  )
}
