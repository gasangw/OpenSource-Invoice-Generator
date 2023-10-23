// add invoice info, like user, customer, date, invoice number etc.
import PropTypes from "prop-types";

function InvoiceInfoHeader(props) {
  const { handleInvoiceChange } = props;

  InvoiceInfoHeader.propTypes = {
    handleInvoiceChange: PropTypes.func.isRequired,
  };
  const invoiceInfoHeaderArray = [
    {
      label: "Company Name",
      name: "companyName",
    },
    {
      label: "Company Address",
      name: "companyAddress",
    },
    {
      label: "Customer Name",
      name: "customerName",
    },
    {
      label: "Customer Address",
      name: "customerAddress",
    },
    {
      label: "Invoice Number",
      name: "invoiceNumber",
    },
    {
      label: "Invoice Date",
      name: "invoiceDate",
    },
  ];
  return (
    <div>
      <h1>Invoice Info Header</h1>
      <div className="flex flex-wrap">
        {invoiceInfoHeaderArray.map((item, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2 space-y-3">
              <label className="block text-sm text-neutral-content">
                {item.label}
              </label>
              <input
                type="text"
                name={item.name}
                onChange={(e) => handleInvoiceChange(item.name, e.target.value)}
                className="rounded- caret-green-600 outline-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InvoiceInfoHeader;
