import InvoiceInfoHeader from "./InvoiceInfoHeader"
import { useState } from "react"

function InvoiceDetailsPage() {
  const [invoiceInfoHeader, setInvoiceInfoHeader] = useState({
    companyName:'',
    companyAddress:'',
    customerName:'',
    customerAddress:'',
    invoiceNumber:'',
    invoiceDate:'',
  })
  console.log(invoiceInfoHeader)
  const handleInvoiceInfoHeaderChange = (name, value) => {
    setInvoiceInfoHeader((prev) => ({ ...prev, [name]: value }))
  }
  return (
    <>
          <div className="card w-full bg-info-content shadow-xl">
            <div className="card-body">
              <InvoiceInfoHeader handleInvoiceChange={handleInvoiceInfoHeaderChange} />
            </div>
          </div>
    </>
  )
}

export default InvoiceDetailsPage