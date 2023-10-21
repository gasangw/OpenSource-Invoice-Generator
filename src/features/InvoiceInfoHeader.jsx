// add invoice info, like user, customer, date, invoice number etc.

function InvoiceInfoHeader() {
  return (
    <div>

        {/* card starts here */}
      <div className="card w-full bg-base-300 shadow-xl">
       {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        {/* card ends here */}
    </div>
  )
}

export default InvoiceInfoHeader